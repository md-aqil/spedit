(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[977],{75593:function(e,s,t){Promise.resolve().then(t.bind(t,48382))},52400:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return o}});var a=t(64106),l=t(78345),i=t(78439),r=t(25721),n=t(71834),c=t.n(n);function d(e){let{isCollapsed:s,toggleSidebar:t}=e;return(0,a.jsx)("span",{className:"icon-arrow-circle-right text-lime-500 cursor-pointer transition-transform duration-300 ".concat(s?"rotate-180":""),onClick:t})}d.propTypes={isCollapsed:c().bool.isRequired,toggleSidebar:c().func.isRequired};var o=function(){let[e,s]=(0,l.useState)(!1);return(0,a.jsxs)("header",{className:"fixed top-0 left-0 right-0 z-20 flex flex-wrap items-center px-8 pt-3 pb-3.5 w-full border-b border-solid bg-stone-950 border-b-neutral-800 max-md:px-5 max-md:max-w-full dash-header",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{className:"text-2xl font-black text-lime-500 mr-5",children:"SPEDIT"}),(0,a.jsxs)("div",{className:"",children:[" ",(0,a.jsx)(d,{isCollapsed:e,toggleSidebar:()=>{s(e=>!e)}})]})]}),(0,a.jsx)("div",{className:"flex flex-col flex-1 shrink justify-center items-center self-stretch pl-8 my-auto text-base whitespace-nowrap basis-0 min-w-[240px] text-[#A2AB9A] max-md:max-w-full header-search",children:(0,a.jsx)("div",{className:"w-full max-w-md",children:(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("input",{type:"text",className:"w-full py-2 pl-10 pr-4 text-sm border border-[#A2AB9A] rounded-lg  text-white focus:outline-none focus:ring-2 focus:ring-lime-500",placeholder:"Search..."}),(0,a.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",children:(0,a.jsx)("img",{loading:"lazy",src:"https://cdn.builder.io/api/v1/image/assets/TEMP/236c2f2a224a9f91bae67ba81d33f8bda2f0f7291e9fff1454bf2f90daf16dfc?apiKey=b4d1b9e87b084579b1e2475047caf617&",alt:"Search Icon",className:"object-contain w-5 h-5"})})]})})}),(0,a.jsxs)("div",{className:"flex gap-4 justify-center items-center self-stretch my-auto text-sm leading-none text-center text-white",children:[(0,a.jsx)("div",{className:"overflow-hidden gap-2 self-stretch px-3 py-1 my-auto rounded-md shadow-lg bg-lime-500 bg-opacity-30",children:"50 Credits"}),(0,a.jsx)(r.default,{loading:"lazy",alt:"User Icon",className:"object-contain shrink-0 self-stretch my-auto w-4 aspect-square",src:i.Z})]})]})}},15303:function(e,s,t){"use strict";var a=t(64106),l=t(78345),i=t(71834),r=t.n(i),n=t(78439),c=t(99307),d=t(25721),o=t(90617);let x=[{icon:"icon-profile-tick",text:"Profile",url:"/copy-trading/profile"},{icon:"icon-folder",text:"Portfolio",url:"/"},{icon:"icon-code",text:"Build",url:"/"},{icon:"icon-code-1",text:"Code",url:"/"},{icon:"icon-copy",text:"Copy",url:"/copy-trading"},{icon:"icon-setting-3",text:"Live Tool",url:"/"},{icon:"icon-game",text:"Quest",url:"/quest"},{icon:"icon-message-question",text:"Learn",url:"/"}];function m(e){let{items:s=x,onSelect:t=()=>{},activeItem:i}=e,[r,m]=(0,l.useState)(i||"Copy"),[p,b]=(0,l.useState)(!1),[h,f]=(0,l.useState)(!1);(0,l.useEffect)(()=>{let e=localStorage.getItem("activeTab");e&&m(e)},[]);let u=e=>{m(e.text),localStorage.setItem("activeTab",e.text),t(e.text)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("header",{className:"fixed top-0 left-0 right-0 z-20 flex flex-wrap items-center px-8 pt-3 pb-3.5 w-full border-b border-solid bg-stone-950 border-b-neutral-800 max-md:px-5 max-md:max-w-full dash-header",children:[(0,a.jsx)("div",{className:"flex items-center",children:(0,a.jsx)("div",{className:"text-2xl font-black text-lime-500 mr-5",children:"SPEDIT"})}),(0,a.jsx)("div",{className:"flex flex-col flex-1 shrink justify-center items-center self-stretch pl-8 my-auto text-base whitespace-nowrap basis-0 min-w-[240px] text-neutral-500 max-md:max-w-full header-search",children:(0,a.jsx)("div",{className:"w-full max-w-md",children:(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("input",{type:"text",className:"w-full py-2 pl-10 pr-4 text-sm border border-neutral-700 rounded-lg bg-stone-900 text-white focus:outline-none focus:ring-2 focus:ring-lime-500",placeholder:"Search..."}),(0,a.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",children:(0,a.jsx)("i",{className:"icon-search-normal-1"})})]})})}),(0,a.jsxs)("div",{className:"flex gap-4 justify-center items-center self-stretch my-auto text-sm leading-none text-center text-white header-credit",children:[(0,a.jsx)("div",{className:"overflow-hidden gap-2 self-stretch px-3 py-1 my-auto rounded-md shadow-lg bg-lime-500 bg-opacity-30",children:"50 Credits"}),(0,a.jsx)(d.default,{loading:"lazy",alt:"User Icon",className:"object-contain shrink-0 self-stretch my-auto w-4 aspect-square",src:n.Z})]}),(0,a.jsx)(d.default,{loading:"lazy",alt:"User Icon",className:"object-contain shrink-0 self-stretch my-auto aspect-square use-mobile",src:c.default})]}),(0,a.jsx)("aside",{className:"flex flex-col desktop-view max-md:ml-0 max-md:w-full dash-sidebar ".concat(""," ").concat(p?"w-[85px] sidebar-collapsed":"w-[20%] sidebar-expanded"," transition-all duration-300"),children:(0,a.jsxs)("div",{className:"flex flex-col items-center py-8 pr-5 mx-auto w-full bg-stone-950 dash-sidebar-content",children:[(0,a.jsxs)("div",{className:"flex items-between justify-between text-xl leading-7 text-neutral-500 px-3 w-full side-profile",children:[!h&&(0,a.jsx)("span",{className:"icon-arrow-circle-right  text-lime-500 cursor-pointer absolute z-50 right-[25px] rotate-180 text-2xl top-10 ".concat(p?"!right-[6px] !rotate-0 rounded-full bg-gray-950":""),onClick:()=>{b(!p)}}),(0,a.jsxs)("div",{className:"flex gap-3",children:[(0,a.jsx)("img",{loading:"lazy",src:"https://cdn.builder.io/api/v1/image/assets/TEMP/e5ef3aad35b9b309f96c51485aeb383b8010a2d643048f6a86a12143295fa997?apiKey=b4d1b9e87b084579b1e2475047caf617&",alt:"User avatar",className:"object-contain shrink-0 w-14 rounded-xl aspect-square "}),!p&&(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("span",{className:"",children:"Welcome,"}),(0,a.jsx)("br",{}),"Joe"]})]})]}),(0,a.jsx)("nav",{className:"flex gap-6 self-start mt-5 text-xl text-white ml-7",children:(0,a.jsx)("div",{className:"flex flex-col items-start dash-item-wrap",children:s.map((e,s)=>(0,a.jsx)(o.default,{href:e.url,className:"".concat(e.text),children:(0,a.jsxs)("div",{className:"".concat(e.text," flex gap-2 items-center dash-item mt-6 ").concat(r===e.text?"dash-item-active":""),onClick:()=>u(e),role:"button",tabIndex:"0",children:[(0,a.jsx)("i",{className:"".concat(e.icon," w-6 aspect-square")}),!p&&(0,a.jsx)("div",{children:e.text})]})},s))})})]})})]})}m.propTypes={items:r().arrayOf(r().shape({icon:r().string.isRequired,text:r().string.isRequired,url:r().string})),onSelect:r().func,activeItem:r().string},s.default=m},48382:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return v}});var a=t(64106),l=t(78345);let i=[{icon:"icon-user",label:"Profile"},{icon:"icon-code",label:"Build History"},{icon:"icon-code-1",label:"Code History"},{icon:"icon-copy",label:"Copy History"},{icon:"icon-setting-3 ",label:"Live Tools History"},{icon:"icon-game",label:"Quest History"},{icon:"icon-ticket",label:"Tickets"},{icon:"icon-money-recive",label:"Credit History"},{icon:"icon-gift",label:"Referral"},{icon:"icon-percentage-circle",label:"Broker Connect History"}];function r(e){let{icon:s,label:t,isActive:l,onClick:i}=e;return(0,a.jsx)("div",{onClick:i,className:"flex flex-col items-center text-sm font-medium ".concat(l?"text-lime-500":"text-neutral-700"," transition duration-200 ease-in-out transform ").concat(l?"scale-105":""),children:(0,a.jsxs)("div",{className:"flex flex-col justify-center items-center p-3 rounded-lg ".concat(l?"shadow-md bg-stone-900 text-lime-500":"text-neutral-800","  hover:shadow-lg cursor-pointer"),children:[(0,a.jsx)("span",{className:"text-2xl mb-2 ".concat(s)}),(0,a.jsx)("div",{className:"text-xs",children:t})]})})}var n=function(e){let{activeTab:s,onTabChange:t}=e;return(0,a.jsx)("nav",{className:"flex flex-col items-center pt-8 bg-stone-50 border-b border-neutral-200 pb-5 profile-tab",children:(0,a.jsx)("div",{className:"flex flex-wrap justify-center gap-4 max-w-full p-tab-list",children:i.map((e,l)=>(0,a.jsx)(r,{...e,isActive:s===e.label,onClick:()=>t(e.label)},l))})})},c=t(15303);t(52400);var d=function(){return(0,a.jsx)("header",{className:"flex card relative flex-col px-10 py-6 w-full leading-none bg-white rounded-xl shadow-sm mb-5 ",children:(0,a.jsx)("div",{className:"flex z-0 flex-col w-full",children:(0,a.jsxs)("div",{className:"flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full",children:[(0,a.jsxs)("div",{className:"flex gap-4 self-stretch my-auto",children:[(0,a.jsx)("img",{loading:"lazy",src:"https://cdn.builder.io/api/v1/image/assets/TEMP/5b567848700f7484487aaafc96a8191098cd64c0f6caa45e3ef224bab4eb531a?apiKey=b4d1b9e87b084579b1e2475047caf617&",alt:"Profile",className:"object-contain shrink-0 my-auto rounded-none aspect-[0.93] w-[86px]"}),(0,a.jsxs)("div",{className:"flex flex-col justify-between w-[134px]",children:[(0,a.jsxs)("div",{className:"flex flex-col w-full",children:[(0,a.jsx)("div",{className:"text-xs text-blue-500",children:"123456i"}),(0,a.jsxs)("div",{className:"flex flex-col mt-2 w-full text-black",children:[(0,a.jsx)("div",{className:"text-base font-bold",children:"Swati Patidar"}),(0,a.jsx)("div",{className:"mt-1 text-xs",children:"@swati345"})]})]}),(0,a.jsxs)("div",{className:"mt-8 text-xs text-stone-500",children:["DOJ: ",(0,a.jsx)("span",{className:"font-semibold",children:"01-01-1994"})]})]})]}),(0,a.jsxs)("div",{className:"flex gap-2 justify-center items-center self-stretch py-4 pr-2.5 pl-2.5 my-auto w-24 text-sm font-bold text-center text-lime-500 whitespace-nowrap rounded-xl bg-neutral-800 min-h-[44px] p-label",children:[(0,a.jsx)("div",{className:"flex shrink-0 self-stretch my-auto w-2 h-2 bg-lime-500 rounded-full fill-lime-500"}),(0,a.jsx)("div",{className:"self-stretch my-auto",children:"Essential"})]})]})})})},o=function(){let[e,s]=(0,l.useState)(!0),[t,i]=(0,l.useState)("+91 "),r=e=>{i(e.target.value)};return(0,a.jsxs)("section",{className:"p-8 bg-white rounded-xl shadow-md card",children:[(0,a.jsxs)("header",{className:"flex justify-between items-center mb-6",children:[(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("h1",{className:"text-xl font-bold text-stone-950",children:"Personal Information"}),(0,a.jsx)("p",{className:"mt-1 text-xs text-neutral-500",children:"*This Section can be edited anytime"})]}),(0,a.jsx)("button",{onClick:()=>{s(!e)},className:"px-6 py-3  text-sm font-bold rounded ".concat(e?"bg-lime-500 text-stone-950":"border border-gray-500 text-gray-500 bg-transparent"," transition-colors"),children:e?"Save":"Edit"})]}),(0,a.jsxs)("div",{className:"space-y-6",children:[(0,a.jsxs)("div",{className:"flex justify-between gap-32 max-md:gap-5 max-md:flex-col",children:[(0,a.jsxs)("div",{className:"flex flex-col space-y-2 w-full",children:[(0,a.jsx)("label",{className:"text-stone-800",children:"Full Name*"}),(0,a.jsx)("input",{type:"text",placeholder:"Eg: John Doe",className:"px-3 py-2 border rounded bg-stone-50",disabled:!e})]}),(0,a.jsxs)("div",{className:"flex flex-col space-y-2 w-full",children:[(0,a.jsx)("label",{className:"font-bold text-stone-800",children:"Date of Birth"}),(0,a.jsx)("input",{type:"date",className:"px-3 py-2 border rounded bg-stone-50",disabled:!e})]})]}),(0,a.jsxs)("div",{className:"flex justify-between gap-32 max-md:gap-5 max-md:flex-col",children:[(0,a.jsxs)("div",{className:"flex flex-col space-y-2 w-full",children:[(0,a.jsx)("label",{className:"font-bold text-stone-800",children:"Phone Number"}),(0,a.jsxs)("div",{className:"flex items-center border rounded bg-stone-50",children:[(0,a.jsx)("select",{className:"px-3 py-2 border-r border-gray-300 rounded-l bg-white",value:t,onChange:r,disabled:!e,children:(0,a.jsx)("option",{value:"+91",children:"+91"})}),(0,a.jsx)("input",{type:"tel",placeholder:"Eg: 623468782",className:"px-3 py-2 bg-transparent flex-1",value:t,onChange:r,disabled:!e})]})]}),(0,a.jsxs)("div",{className:"flex flex-col space-y-2 w-full",children:[(0,a.jsx)("label",{className:"font-bold text-stone-800",children:"Address"}),(0,a.jsx)("input",{type:"text",placeholder:"Eg: ABC, Street no.1",className:"px-3 py-2 border rounded bg-stone-50",disabled:!e})]})]}),e&&(0,a.jsxs)("div",{className:"flex flex-col space-y-2  w-[45%] max-md:w-full",children:[(0,a.jsx)("label",{className:"font-bold text-stone-800",children:"Document Upload"}),(0,a.jsx)("input",{type:"file",className:"border rounded bg-stone-50 py-2"})]})]})]})},x=function(){let[e,s]=(0,l.useState)(!1),[t,i]=(0,l.useState)(!1),r=[{label:"Password",placeholder:"Eg: XXXXXX",type:e?"text":"password"},{label:"Re-enter Password",placeholder:"Eg: XXXXXX",type:e?"text":"password"}],n=t?[r[0]]:r,c=()=>{s(e=>!e)};return(0,a.jsxs)("section",{className:"flex flex-col px-12 py-9 mt-6 w-full bg-white rounded-xl shadow-md card",children:[(0,a.jsxs)("div",{className:"flex  gap-10 justify-between items-center w-full leading-none max-md:max-w-full",children:[(0,a.jsxs)("div",{className:"flex flex-col self-stretch my-auto max-md:max-w-full",children:[(0,a.jsx)("h2",{className:"text-xl font-bold opacity-80 text-stone-950",children:"Password"}),(0,a.jsx)("p",{className:"mt-2 text-xs text-neutral-500 max-md:max-w-full",children:"Password should be at least 8 digits long and must have an alphabet, number, and a special character."})]}),(0,a.jsx)("button",{onClick:()=>{t?i(!1):i(!0)},className:"px-3 py-4 my-auto  text-sm font-bold text-center whitespace-nowrap ".concat(t?"border border-gray-500 text-gray-500 bg-transparent":"bg-lime-500 rounded min-h-[44px] text-stone-950"," transition-all duration-300 ease-in-out"),children:t?"Change Password":"Save"})]}),(0,a.jsx)("div",{className:"flex gap-10 mt-20 text-base max-md:mt-10 max-md:max-w-full max-md:flex-col max-md:gap-4",children:n.map((s,l)=>(0,a.jsxs)("div",{className:"flex flex-col mb-4 w-full",children:[(0,a.jsx)("label",{className:"mb-2 text-sm font-semibold text-stone-700",children:s.label}),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("input",{type:s.type,placeholder:s.placeholder,className:"w-full px-3 py-2 border rounded ".concat(t?"bg-gray-100 text-gray-500 cursor-not-allowed":"bg-white text-stone-700"," transition-all duration-300 ease-in-out"),disabled:t}),(0,a.jsx)("button",{type:"button",onClick:c,className:"absolute right-0 top-3 flex no-wrap items-center px-3 cursor-pointer",children:(0,a.jsx)("span",{className:e?"icon-eye-slash":"icon-eye"})})]})]},l))})]})},m=()=>{let[e,s]=(0,l.useState)("John Doe"),[t,i]=(0,l.useState)("xyz@email.com"),[r,n]=(0,l.useState)(!0);return(0,a.jsxs)("section",{className:"flex flex-col px-10 py-9 bg-white rounded-xl shadow-sm max-md:px-5 mt-5 card",children:[(0,a.jsxs)("header",{className:"flex gap-10 justify-between items-center w-full",children:[(0,a.jsxs)("div",{className:"flex flex-col self-stretch my-auto",children:[(0,a.jsxs)("div",{className:"flex gap-2 items-center text-xl font-bold text-stone-950",children:[(0,a.jsx)("img",{loading:"lazy",src:"https://cdn.builder.io/api/v1/image/assets/TEMP/ab9ba563070792525f8c7e0e57fdbb559144abbd2492eca14f695b96ddff6619?apiKey=b4d1b9e87b084579b1e2475047caf617&",className:"object-contain w-6",alt:"Icon"}),(0,a.jsx)("h1",{className:"opacity-80 max-md:text-lg",children:"One time editable Information"})]}),(0,a.jsx)("p",{className:"mt-2 text-xs text-neutral-500",children:"This Section can be edited only once and will be unique only to you."})]}),(0,a.jsx)("button",{onClick:r?()=>{n(!1),console.log("Saving:",{username:e,email:t})}:()=>{n(!0)},className:"px-3 py-4 w-24 text-sm font-bold text-center whitespace-nowrap rounded min-h-[44px] transition-all duration-300 ease-in-out ".concat(r?"bg-lime-500 text-stone-950":"border border-gray-500 text-gray-500 bg-transparent"),children:r?"Save":"Edit"})]}),(0,a.jsxs)("div",{className:"flex flex-wrap gap-10 mt-20 text-base max-md:flex-col",children:[(0,a.jsxs)("div",{className:"flex flex-col flex-1",children:[(0,a.jsx)("label",{htmlFor:"username",className:"font-bold text-black opacity-80",children:"Username*"}),(0,a.jsx)("input",{type:"text",id:"username",value:e,onChange:e=>s(e.target.value),className:"px-5 py-3 mt-3 rounded-lg bg-stone-50 text-black w-full ".concat(r?"":"bg-transparent cursor-not-allowed"),placeholder:"Eg: John Doe",disabled:!r})]}),(0,a.jsxs)("div",{className:"flex flex-col flex-1",children:[(0,a.jsx)("label",{htmlFor:"email",className:"font-bold text-black opacity-80",children:"Email*"}),(0,a.jsx)("input",{type:"email",id:"email",value:t,onChange:e=>i(e.target.value),className:"px-5 py-3.5 mt-3 rounded-lg bg-stone-50 text-black w-full ".concat(r?"":"bg-transparent cursor-not-allowed"),placeholder:"Eg: xyz@email.com",disabled:!r})]})]})]})},p=function(){return(0,a.jsxs)("main",{className:"flex overflow-hidden flex-col mt-10",children:[(0,a.jsx)(d,{}),(0,a.jsx)(o,{title:"Personal Information",description:"*This Section can be edited anytime",fields:[{label:"Full Name*",placeholder:"Eg: John Doe",type:"text"},{label:"Phone Number",placeholder:"Eg: 623468782",type:"tel",icon:"https://cdn.builder.io/api/v1/image/assets/TEMP/3de75ecf97c2b2e61720d80076e4bc252ae8317431674a597829fa8e3c2340a8?apiKey=b4d1b9e87b084579b1e2475047caf617&"},{label:"Document Upload",placeholder:"Upload Docs/pdfs/Images",type:"file",icon:"https://cdn.builder.io/api/v1/image/assets/TEMP/565ab8a360b1fa816c88f860a6ef15a505a4f59b083e591fb1d13145f64fe66b?apiKey=b4d1b9e87b084579b1e2475047caf617&"},{label:"Date of Birth",placeholder:"DD/MM/YYYY",type:"date",icon:"https://cdn.builder.io/api/v1/image/assets/TEMP/16c1b2ccb9cd660c23fef8b08bfdc0c34f215cb0a4e9664adcf5b22ed406eb7f?apiKey=b4d1b9e87b084579b1e2475047caf617&"},{label:"Address",placeholder:"Eg: ABC, Street no.1",type:"text"}]}),(0,a.jsx)(m,{}),(0,a.jsx)(x,{})]})};let b=[{id:"12345i",type:"Quest",credits:"+40",dateTime:"09-01-2024 | 12:30"},{id:"12345i",type:"Copy",credits:"-40",dateTime:"09-01-2024 | 12:30"},{id:"12345i",type:"Top-up",credits:"+1640",dateTime:"09-01-2024 | 12:30"},{id:"12345i",type:"Referral",credits:"+40",dateTime:"09-01-2024 | 12:30"},{id:"12345i",type:"Build",credits:"-40",dateTime:"09-01-2024 | 12:30"}];var h=function(){let[e,s]=(0,l.useState)("This Week");return(0,a.jsxs)("main",{className:"flex flex-col rounded-none mt-5",children:[(0,a.jsxs)("div",{className:"flex flex-wrap gap-5 justify-between w-full max-md:max-w-full mb-6 hidden-xs",children:[(0,a.jsx)("h1",{className:"my-auto text-xl font-semibold text-black ",children:"Credit History"}),(0,a.jsx)("div",{className:"flex gap-6 items-center text-base text-neutral-800",children:(0,a.jsx)("div",{className:"flex flex-col self-stretch my-auto rounded-md border border-solid border-stone-400 w-[216px]",children:(0,a.jsx)("div",{className:"flex flex-col w-full rounded-lg max-w-[216px]",children:(0,a.jsxs)("button",{onClick:()=>s("This Week"===e?"Last Week":"This Week"),className:"flex gap-10 justify-between items-center px-5 py-2 bg-white rounded-lg min-h-[38px] w-full","aria-haspopup":"listbox","aria-expanded":"false",children:[(0,a.jsx)("span",{className:"self-stretch my-auto opacity-40",children:e}),(0,a.jsx)("img",{src:"https://cdn.builder.io/api/v1/image/assets/TEMP/2fd2ae6da03cb0038ed24cc8da14f6a7e89547dd90566e2c6bf8b04bd7d68073?apiKey=b4d1b9e87b084579b1e2475047caf617&",alt:"Toggle period selection",className:"object-contain shrink-0 self-stretch my-auto w-6 aspect-square"})]})})})})]}),(0,a.jsxs)("div",{className:"flex items-center justify-between mb-5",children:[(0,a.jsxs)("div",{className:"flex mb-4 max-md:mb-0",children:[(0,a.jsx)("button",{className:"py-2 px-4 text-sm font-medium hover:bg-gray-100 border rounded-l bg-[#CDE8A3] text-black",children:"All"}),(0,a.jsx)("button",{className:"py-2 px-4 text-sm font-medium text-gray-600 hover:bg-gray-100 border rounded-r",children:"Top Ups"}),(0,a.jsx)("button",{className:"py-2 px-4 text-sm font-medium text-gray-600 hover:bg-gray-100 border rounded-r",children:"Debit"})]}),(0,a.jsx)("span",{className:"block md:hidden text-lime-500 underline icon-filter text-2xl"})]}),(0,a.jsx)("div",{className:"overflow-x-auto hidden md:block",children:(0,a.jsxs)("table",{className:"w-full text-sm font-semibold leading-none rounded-lg text-neutral-800",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{className:"font-bold text-lime-500 bg-neutral-800",children:[(0,a.jsx)("th",{className:"px-6 py-4 text-left border-r border-b border-zinc-300 w-[168px]",children:"ID"}),(0,a.jsx)("th",{className:"px-6 text-left border-r border-b border-zinc-300 w-[290px]",children:"Type"}),(0,a.jsx)("th",{className:"px-6 text-left border-r border-b border-zinc-300 w-[272px]",children:"Credits"}),(0,a.jsx)("th",{className:"px-6 text-left border-r border-b border-zinc-300 w-[396px]",children:"Date Time"})]})}),(0,a.jsx)("tbody",{children:b.map((e,s)=>(0,a.jsxs)("tr",{className:"border-b border-black bg-zinc-50",children:[(0,a.jsx)("td",{className:"p-6 border-r border-b border-zinc-300",children:(0,a.jsx)("a",{href:"#".concat(e.id),className:"text-blue-500 underline",children:e.id})}),(0,a.jsx)("td",{className:"p-6 border-r border-b border-zinc-300",children:e.type}),(0,a.jsx)("td",{className:"p-6 border-r border-b border-zinc-300 font-bold ".concat(e.credits.startsWith("+")?"text-green-600":"text-red-700"),children:e.credits}),(0,a.jsx)("td",{className:"p-6 border-r border-b border-zinc-300",children:e.dateTime})]},s))})]})}),(0,a.jsx)("div",{className:"md:hidden space-y-4",children:b.map((e,s)=>(0,a.jsxs)("div",{className:"border-b mb-4 py-4 text-[#A2AB9A] bg-[#242620] card-table",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsx)("span",{className:"text-neutral-800 font-bold",children:"ID"}),(0,a.jsx)("a",{href:"#".concat(e.id),className:"text-blue-500 underline",children:e.id})]}),(0,a.jsxs)("div",{className:"flex justify-between items-center mt-2",children:[(0,a.jsx)("span",{className:"text-neutral-800 font-bold",children:"Type"}),(0,a.jsx)("span",{children:e.type})]}),(0,a.jsxs)("div",{className:"flex justify-between items-center mt-2",children:[(0,a.jsx)("span",{className:"text-neutral-800 font-bold",children:"Credits"}),(0,a.jsx)("span",{className:"".concat(e.credits.startsWith("+")?"text-green-600":"text-red-700"," font-bold"),children:e.credits})]}),(0,a.jsxs)("div",{className:"flex justify-between items-center mt-2",children:[(0,a.jsx)("span",{className:"text-neutral-800 font-bold",children:"Date Time"}),(0,a.jsx)("span",{children:e.dateTime})]})]},s))})]})};let f=[{id:"12345i",time:"2024-07-08 10:21:06",price:"104.45",quantity:"536",instrument:"Nifty Fut",strategyId:"50963",profit:"1439",profitClass:"text-lime-500"},{id:"12345i",time:"2024-07-08 10:21:06",price:"740",quantity:"703",instrument:"Nifty 24500 CE",strategyId:"33981",profit:"4349",profitClass:"text-pink-600"}],u=[{id:"12345i",strategyId:"50963",amount:"104.45",stopLoss:"2",transactionTime:"2024-07-08 10:21:06",closedTime:"2024-07-08 10:21:06",reason:"User stopped copying"}];var j=function(){let[e,s]=(0,l.useState)("Trade");return(0,a.jsxs)("section",{className:"w-full mt-5",children:[(0,a.jsxs)("header",{className:"w-full flex justify-between mb-10 hidden-xs",children:[(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("h1",{className:"text-xl font-semibold text-black",children:"Copy Transaction History"}),(0,a.jsxs)("p",{className:"mt-1 text-sm text-neutral-500",children:["This page only shows your copy history. To View Live positions -"," ",(0,a.jsx)("a",{href:"#",className:"font-semibold text-blue-500",children:"Click Here"})]})]}),(0,a.jsx)("div",{className:"relative",children:(0,a.jsx)("input",{type:"date",id:"date",className:"block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-lime-500 focus:border-lime-500 sm:text-sm appearance-none"})})]}),(0,a.jsxs)("div",{className:"flex items-center justify-between mb-4",children:[(0,a.jsxs)("div",{className:"flex mobile-filter",children:[(0,a.jsx)("button",{onClick:()=>s("Trade"),className:"py-2 px-4 text-sm font-medium ".concat("Trade"===e?"bg-[#CDE8A3] text-black tb-active":"text-gray-600 hover:bg-gray-100"," border rounded-l"),children:"Live"}),(0,a.jsx)("button",{onClick:()=>s("Strategy"),className:"py-2 px-4 text-sm font-medium ".concat("Strategy"===e?"bg-[#CDE8A3] text-black tb-active":"text-gray-600 hover:bg-gray-100"," border rounded-r"),children:"Mock"})]}),(0,a.jsx)("span",{className:"block md:hidden text-lime-500 underline icon-filter text-2xl"})]}),(0,a.jsxs)("div",{className:"relative p-6 bg-white shadow rounded-lg max-md:p-0 max-md:bg-transparent",children:[(0,a.jsxs)("table",{className:"hidden md:table w-full table-auto text-left text-gray-600 border-collapse",children:[(0,a.jsx)("thead",{children:(0,a.jsx)("tr",{className:"border-b text-sm bg-gray-100",children:("Trade"===e?[{title:"Trade ID",width:"w-[116px]"},{title:"Time",width:"w-[162px]"},{title:"Price",width:"w-24"},{title:"Quantity",width:"w-[116px]"},{title:"Instrument",width:"w-[126px]"},{title:"Strategy ID",width:"w-[126px]"},{title:"Realized Profit",width:"w-[178px]"}]:[{title:"Trade ID",width:"w-[116px]"},{title:"Strategy ID",width:"w-[126px]"},{title:"Amount",width:"w-24"},{title:"Stop loss %",width:"w-24"},{title:"Transaction Time",width:"w-[162px]"},{title:"Closed Time",width:"w-[162px]"},{title:"Reason",width:"w-[200px]"}]).map((e,s)=>(0,a.jsx)("th",{className:"px-4 py-2 ".concat(e.width," border-r border-b font-bold text-gray-700"),children:e.title},s))})}),(0,a.jsx)("tbody",{children:("Trade"===e?f:u).map((s,t)=>(0,a.jsx)("tr",{className:"border-t ".concat(t%2?"bg-gray-50":"bg-white"," hover:bg-gray-100"),children:"Trade"===e?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("td",{className:"px-4 py-2 text-sm",children:s.id}),(0,a.jsx)("td",{className:"px-4 py-2 text-sm",children:s.time}),(0,a.jsx)("td",{className:"px-4 py-2 text-sm",children:s.price}),(0,a.jsx)("td",{className:"px-4 py-2 text-sm",children:s.quantity}),(0,a.jsx)("td",{className:"px-4 py-2 text-sm",children:s.instrument}),(0,a.jsx)("td",{className:"px-4 py-2 text-sm",children:s.strategyId}),(0,a.jsx)("td",{className:"px-4 py-2 text-sm font-semibold",children:(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("i",{className:"icon-arrow-up-3 ".concat(s.profitClass," p-0.5 mr-2 rounded-sm")}),s.profit]})})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("td",{className:"px-4 py-2 text-sm",children:s.id}),(0,a.jsx)("td",{className:"px-4 py-2 text-sm",children:s.strategyId}),(0,a.jsx)("td",{className:"px-4 py-2 text-sm",children:s.amount}),(0,a.jsx)("td",{className:"px-4 py-2 text-sm",children:s.stopLoss}),(0,a.jsx)("td",{className:"px-4 py-2 text-sm",children:s.transactionTime}),(0,a.jsx)("td",{className:"px-4 py-2 text-sm",children:s.closedTime}),(0,a.jsx)("td",{className:"px-4 py-2 text-sm",children:s.reason})]})},t))})]}),(0,a.jsx)("div",{className:"block md:hidden space-y-4",children:("Trade"===e?f:u).map((s,t)=>(0,a.jsxs)("div",{className:"border-b mb-4 py-4 text-[#A2AB9A] bg-[#242620] card-table",children:[(0,a.jsxs)("p",{className:"text-white",children:[(0,a.jsx)("span",{className:"font-bold",children:"Trade ID:"})," ",s.id]}),"Trade"===e?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:"font-bold",children:"Time:"})," ",s.time]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:"font-bold",children:"Price:"})," ",s.price]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:"font-bold",children:"Quantity:"})," ",s.quantity]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:"font-bold",children:"Instrument:"})," ",s.instrument]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:"font-bold",children:"Strategy ID:"})," ",s.strategyId]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:"font-bold",children:"Profit:"})," ",s.profit]})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:"font-bold",children:"Strategy ID:"})," ",s.strategyId]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:"font-bold",children:"Amount:"})," ",s.amount]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:"font-bold",children:"Stop Loss:"})," ",s.stopLoss]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:"font-bold",children:"Transaction Time:"})," ",s.transactionTime]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:"font-bold",children:"Closed Time:"})," ",s.closedTime]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:"font-bold",children:"Reason:"})," ",s.reason]})]})]},t))})]})]})},y=t(84581),g=t.n(y);t(4522);let N=[{id:"12345i",time:"2024-07-08-10:21:06",type:"Connected",reason:"-",name:"Zerodha"},{id:"12345i",time:"2024-07-08-10:21:06",type:"Connected",reason:"-",name:"Angelone"},{id:"12345i",time:"2024-07-08-10:21:06",type:"Disconnected",reason:"Token Expired",name:"Zerodha"},{id:"12345i",time:"2024-07-08-10:21:06",type:"Connected",reason:"-",name:"Zerodha"},{id:"12345i",time:"2024-07-08-10:21:06",type:"Disconnected",reason:"Stopped Copying",name:"5 paisa"},{id:"12345i",time:"2024-07-08-10:21:06",type:"Disconnected",reason:"Paused Copying",name:"Angelone"},{id:"12345i",time:"2024-07-08-10:21:06",type:"Connected",reason:"-",name:"Groww"},{id:"12345i",time:"2024-07-08-10:21:06",type:"Disconnected",reason:"Token Expired",name:"5 paisa"}];var w=function(){let[e,s]=(0,l.useState)(!1),[t,i]=(0,l.useState)(null),[r,n]=(0,l.useState)(null),[c,d]=(0,l.useState)(N);return(0,a.jsxs)("section",{className:"flex flex-col mt-5",children:[(0,a.jsxs)("header",{className:"flex flex-wrap gap-10 justify-between items-center w-full max-md:mr-1 max-md:max-w-full text-black max-md:text-white",children:[(0,a.jsx)("h2",{className:"self-stretch my-auto text-xl font-bold leading-none ",children:"Broker History"}),(0,a.jsxs)("div",{className:"flex gap-4 items-center self-stretch my-auto",children:[(0,a.jsx)("span",{className:"icon-filter text-2xl"}),(0,a.jsx)("span",{className:"icon-eye-slash text-2xl"}),(0,a.jsx)("span",{className:"icon-export text-2xl"})]})]}),(0,a.jsxs)("div",{className:"flex flex-col mt-6 w-full text-sm leading-none bg-white max-md:bg-transparent rounded-xl shadow-sm min-h-[509px] text-neutral-800 max-md:max-w-full",children:[(0,a.jsxs)("table",{className:"hidden md:table w-full border-collapse",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{className:"text-base font-bold leading-none text-lime-500 bg-neutral-800",children:[(0,a.jsx)("th",{className:"p-6 border-r border-b border-zinc-300 min-h-[60px] w-[178px] max-md:px-5",children:"Event ID"}),(0,a.jsxs)("th",{className:"p-6 border-r border-b border-zinc-300 min-h-[60px] min-w-[240px] w-[248px] max-md:px-5",children:[(0,a.jsxs)("div",{className:"flex justify-center items-center gap-1",children:[(0,a.jsx)("span",{children:"Event Time"}),(0,a.jsx)("button",{onClick:()=>{s(!e)},children:(0,a.jsx)("img",{loading:"lazy",src:"https://cdn.builder.io/api/v1/image/assets/TEMP/499841e3ecceb3e0ad13443b2eeabd8bfa6fbc0e405217cc2ebcb0e7903c0ad5?apiKey=b4d1b9e87b084579b1e2475047caf617&",className:"object-contain shrink-0 w-2.5 aspect-square",alt:""})}),(0,a.jsx)("img",{loading:"lazy",src:"https://cdn.builder.io/api/v1/image/assets/TEMP/5a7ef6e394750a22efda5f1c15cd17aef917deb71ab17e8b7cf72f3a5f9d9a11?apiKey=b4d1b9e87b084579b1e2475047caf617&",className:"object-contain shrink-0 w-3.5 aspect-square",alt:""})]}),e&&(0,a.jsxs)("div",{className:"absolute mt-2 p-4 bg-white border rounded shadow-lg",children:[(0,a.jsxs)("div",{className:"flex gap-4 mb-4",children:[(0,a.jsx)(g(),{selected:t,onChange:e=>i(e),selectsStart:!0,startDate:t,endDate:r,placeholderText:"Start Date",className:"p-2 border rounded"}),(0,a.jsx)(g(),{selected:r,onChange:e=>n(e),selectsEnd:!0,startDate:t,endDate:r,minDate:t,placeholderText:"End Date",className:"p-2 border rounded"})]}),(0,a.jsxs)("div",{className:"flex gap-4",children:[(0,a.jsx)("button",{onClick:()=>{t&&r&&d(N.filter(e=>{let s=new Date(e.time);return s>=t&&s<=r}))},className:"px-4 py-2 bg-lime-500 text-white rounded hover:bg-lime-600",children:"Apply"}),(0,a.jsx)("button",{onClick:()=>{i(null),n(null),d(N)},className:"px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300",children:"Clear"})]})]})]}),(0,a.jsx)("th",{className:"p-6 border-r border-b border-zinc-300 min-h-[60px] w-[147px] max-md:px-5",children:(0,a.jsxs)("div",{className:"flex justify-center items-center gap-1",children:[(0,a.jsx)("span",{children:"Type"}),(0,a.jsx)("img",{loading:"lazy",src:"https://cdn.builder.io/api/v1/image/assets/TEMP/72537c18dbadda205ab94cdeebbfeb17b30f0a635a9175f9155afdd33bc01090?apiKey=b4d1b9e87b084579b1e2475047caf617&",className:"object-contain shrink-0 w-2.5 aspect-square",alt:""})]})}),(0,a.jsx)("th",{className:"p-6 border-r border-b border-zinc-300 min-h-[60px] w-[178px] max-md:px-5",children:"Reason"}),(0,a.jsx)("th",{className:"px-1.5 py-6 border-r border-b border-zinc-300 w-[193px]",children:(0,a.jsxs)("div",{className:"flex justify-center items-center gap-1",children:[(0,a.jsx)("span",{children:"Broker Name"}),(0,a.jsx)("img",{loading:"lazy",src:"https://cdn.builder.io/api/v1/image/assets/TEMP/5a7ef6e394750a22efda5f1c15cd17aef917deb71ab17e8b7cf72f3a5f9d9a11?apiKey=b4d1b9e87b084579b1e2475047caf617&",className:"object-contain shrink-0 w-3.5 aspect-square",alt:""})]})})]})}),(0,a.jsx)("tbody",{children:c.map((e,s)=>(0,a.jsxs)("tr",{className:"border-b border-zinc-300",children:[(0,a.jsx)("td",{className:"p-6 font-semibold text-blue-500 border-r min-h-[82px] w-[178px] max-md:px-5",children:e.id}),(0,a.jsx)("td",{className:"p-3 border-r min-h-[82px] min-w-[240px] w-[246px]",children:e.time}),(0,a.jsx)("td",{className:"p-3 font-semibold ".concat("Disconnected"===e.type?"text-red-500":"text-lime-500"," border-r min-h-[82px] w-[147px]"),children:e.type}),(0,a.jsx)("td",{className:"p-3 border-r min-h-[82px] w-[178px]",children:e.reason}),(0,a.jsx)("td",{className:"p-3 font-semibold text-neutral-800 border-r min-h-[82px] w-[193px]",children:e.name})]},s))})]}),(0,a.jsx)("div",{className:"block md:hidden space-y-4",children:c.map((e,s)=>(0,a.jsxs)("div",{className:"border-b mb-4 py-4 text-[#A2AB9A] bg-[#242620] card-table",children:[(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,a.jsxs)("span",{className:"font-bold text-lime-500",children:["Event ID: ",e.id]}),(0,a.jsx)("span",{className:" ".concat("Disconnected"===e.type?"text-pink-700":"text-lime-500"),children:e.type})]}),(0,a.jsxs)("p",{className:"mt-2",children:[" ",(0,a.jsx)("span",{children:"Event Time: "})," ",e.time]}),(0,a.jsxs)("p",{className:"mt-1",children:[(0,a.jsx)("span",{children:"Reason:"})," ",e.reason]}),(0,a.jsxs)("p",{className:"mt-1",children:[(0,a.jsx)("span",{children:"Broker Name:"})," ",e.name]})]},s))})]})]})},v=function(){let[e,s]=(0,l.useState)("This Week"),[t,i]=(0,l.useState)("Profile");return(0,a.jsx)("div",{className:"flex overflow-hidden flex-col pb-20 bg-stone-50",children:(0,a.jsx)("div",{className:"z-10 w-full max-md:max-w-full main-body",children:(0,a.jsxs)("div",{className:"flex gap-5 w-full",children:[(0,a.jsx)(c.default,{}),(0,a.jsxs)("main",{className:"flex flex-col main-container",children:[(0,a.jsx)(n,{activeTab:t,onTabChange:e=>{i(e)}}),"Profile"===t&&(0,a.jsx)(p,{}),"Copy History"===t&&(0,a.jsx)(j,{}),"Credit History"===t&&(0,a.jsx)(h,{}),"Broker Connect History"===t&&(0,a.jsx)(w,{})]})]})})})}},99307:function(e,s,t){"use strict";t.r(s),s.default={src:"/spedit/_next/static/media/avatar-f.90155994.png",height:40,width:40,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+AQC2rwBC/f8qvhYRlX68tjtQDgT/2vD2yFjj/mkAIRjWATCknyrQIRnDAPX4Eq3BtgAeFxEAnrC9AJdma+5PMzE9AQC2q8FLBRE+Cru5+jLgyQYqMDsAv9fS+pA8TAYAMCjAAaC7rvnswhQGuoN5AFVuCAATFmwADBrfAOXu+gD1KDP7Acy6rfqzqvYF0uSVAGZHNwC0JGcAT9jWAOMArwAtEDX6AebNsb+0lsJA9An7+jY/DAZz72UAi+bO+rf5swblLTnCAfvx6SqLeI3Dy87hEpGGIgC9vCwABwD1AIgP5e7SX149AbioggDAp34qusRVl46SPDgM8+IB8N8Kxc/Z02vKVVLWQ6t7U+0zdSkAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},78439:function(e,s){"use strict";s.Z={src:"/spedit/_next/static/media/cog.781c7e08.svg",height:16,width:16,blurWidth:0,blurHeight:0}}},function(e){e.O(0,[4598,2565,4193,5482,5550,634,2978,4699,1744],function(){return e(e.s=75593)}),_N_E=e.O()}]);