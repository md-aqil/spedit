(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[930],{6463:function(e,t,a){"use strict";var i=a(1169);a.o(i,"usePathname")&&a.d(t,{usePathname:function(){return i.usePathname}})},357:function(e,t,a){"use strict";var i,s;e.exports=(null==(i=a.g.process)?void 0:i.env)&&"object"==typeof(null==(s=a.g.process)?void 0:s.env)?a.g.process:a(8081)},6810:function(){},8081:function(e){!function(){var t={229:function(e){var t,a,i,s=e.exports={};function n(){throw Error("setTimeout has not been defined")}function r(){throw Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===n||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(a){try{return t.call(null,e,0)}catch(a){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:n}catch(e){t=n}try{a="function"==typeof clearTimeout?clearTimeout:r}catch(e){a=r}}();var o=[],c=!1,u=-1;function p(){c&&i&&(c=!1,i.length?o=i.concat(o):u=-1,o.length&&d())}function d(){if(!c){var e=l(p);c=!0;for(var t=o.length;t;){for(i=o,o=[];++u<t;)i&&i[u].run();u=-1,t=o.length}i=null,c=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===r||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function f(){}s.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)t[a-1]=arguments[a];o.push(new m(e,t)),1!==o.length||c||l(d)},m.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=f,s.addListener=f,s.once=f,s.off=f,s.removeListener=f,s.removeAllListeners=f,s.emit=f,s.prependListener=f,s.prependOnceListener=f,s.listeners=function(e){return[]},s.binding=function(e){throw Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw Error("process.chdir is not supported")},s.umask=function(){return 0}}},a={};function i(e){var s=a[e];if(void 0!==s)return s.exports;var n=a[e]={exports:{}},r=!0;try{t[e](n,n.exports,i),r=!1}finally{r&&delete a[e]}return n.exports}i.ab="//";var s=i(229);e.exports=s}()},3398:function(e,t,a){"use strict";var i=a(357);a(6810);var s=a(2265),n=s&&"object"==typeof s&&"default"in s?s:{default:s},r=void 0!==i&&i.env&&!0,l=function(e){return"[object String]"===Object.prototype.toString.call(e)},o=function(){function e(e){var t=void 0===e?{}:e,a=t.name,i=void 0===a?"stylesheet":a,s=t.optimizeForSpeed,n=void 0===s?r:s;c(l(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",c("boolean"==typeof n,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=n,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var o="undefined"!=typeof window&&document.querySelector('meta[property="csp-nonce"]');this._nonce=o?o.getAttribute("content"):null}var t=e.prototype;return t.setOptimizeForSpeed=function(e){c("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),c(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},t.isOptimizeForSpeed=function(){return this._optimizeForSpeed},t.inject=function(){var e=this;if(c(!this._injected,"sheet already injected"),this._injected=!0,"undefined"!=typeof window&&this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,a){return"number"==typeof a?e._serverSheet.cssRules[a]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),a},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},t.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},t.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},t.insertRule=function(e,t){if(c(l(e),"`insertRule` accepts only strings"),"undefined"==typeof window)return"number"!=typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var a=this.getSheet();"number"!=typeof t&&(t=a.cssRules.length);try{a.insertRule(e,t)}catch(t){return r||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},t.replaceRule=function(e,t){if(this._optimizeForSpeed||"undefined"==typeof window){var a="undefined"!=typeof window?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!a.cssRules[e])return e;a.deleteRule(e);try{a.insertRule(t,e)}catch(i){r||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),a.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];c(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},t.deleteRule=function(e){if("undefined"==typeof window){this._serverSheet.deleteRule(e);return}if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];c(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},t.flush=function(){this._injected=!1,this._rulesCount=0,"undefined"!=typeof window?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]},t.cssRules=function(){var e=this;return"undefined"==typeof window?this._serverSheet.cssRules:this._tags.reduce(function(t,a){return a?t=t.concat(Array.prototype.map.call(e.getSheetForTag(a).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},t.makeStyleTag=function(e,t,a){t&&c(l(t),"makeStyleTag accepts only strings as second parameter");var i=document.createElement("style");this._nonce&&i.setAttribute("nonce",this._nonce),i.type="text/css",i.setAttribute("data-"+e,""),t&&i.appendChild(document.createTextNode(t));var s=document.head||document.getElementsByTagName("head")[0];return a?s.insertBefore(i,a):s.appendChild(i),i},function(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(e.prototype,[{key:"length",get:function(){return this._rulesCount}}]),e}();function c(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var u=function(e){for(var t=5381,a=e.length;a;)t=33*t^e.charCodeAt(--a);return t>>>0},p={};function d(e,t){if(!t)return"jsx-"+e;var a=String(t),i=e+a;return p[i]||(p[i]="jsx-"+u(e+"-"+a)),p[i]}function m(e,t){"undefined"==typeof window&&(t=t.replace(/\/style/gi,"\\/style"));var a=e+t;return p[a]||(p[a]=t.replace(/__jsx-style-dynamic-selector/g,e)),p[a]}var f=function(){function e(e){var t=void 0===e?{}:e,a=t.styleSheet,i=void 0===a?null:a,s=t.optimizeForSpeed,n=void 0!==s&&s;this._sheet=i||new o({name:"styled-jsx",optimizeForSpeed:n}),this._sheet.inject(),i&&"boolean"==typeof n&&(this._sheet.setOptimizeForSpeed(n),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),"undefined"==typeof window||this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var a=this.getIdAndRules(e),i=a.styleId,s=a.rules;if(i in this._instancesCounts){this._instancesCounts[i]+=1;return}var n=s.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[i]=n,this._instancesCounts[i]=1},t.remove=function(e){var t=this,a=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(a in this._instancesCounts,"styleId: `"+a+"` not found"),this._instancesCounts[a]-=1,this._instancesCounts[a]<1){var i=this._fromServer&&this._fromServer[a];i?(i.parentNode.removeChild(i),delete this._fromServer[a]):(this._indices[a].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[a]),delete this._instancesCounts[a]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],a=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return a[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return!!e[1]}))},t.styles=function(e){var t,a;return t=this.cssRules(),void 0===(a=e)&&(a={}),t.map(function(e){var t=e[0],i=e[1];return n.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:a.nonce?a.nonce:void 0,dangerouslySetInnerHTML:{__html:i}})})},t.getIdAndRules=function(e){var t=e.children,a=e.dynamic,i=e.id;if(a){var s=d(i,a);return{styleId:s,rules:Array.isArray(t)?t.map(function(e){return m(s,e)}):[m(s,t)]}}return{styleId:d(i),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),g=s.createContext(null);g.displayName="StyleSheetContext";var h=n.default.useInsertionEffect||n.default.useLayoutEffect,v="undefined"!=typeof window?new f:void 0;function y(e){var t=v||s.useContext(g);return t&&("undefined"==typeof window?t.add(e):h(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)])),null}y.dynamic=function(e){return e.map(function(e){return d(e[0],e[1])}).join(" ")},t.style=y},8059:function(e,t,a){"use strict";e.exports=a(3398).style},4885:function(){},2756:function(){},906:function(){},7805:function(e,t,a){"use strict";a.d(t,{s5:function(){return u},pt:function(){return p},W_:function(){return r},tl:function(){return o},LW:function(){return c}});var i=a(3711),s=a(9007);function n(e,t,a,i){return e.params.createElements&&Object.keys(i).forEach(n=>{if(!a[n]&&!0===a.auto){let r=(0,s.e)(e.el,`.${i[n]}`)[0];r||((r=(0,s.c)("div",i[n])).className=i[n],e.el.append(r)),a[n]=r,t[n]=r}}),a}function r(e){let{swiper:t,extendParams:a,on:i,emit:r}=e;function l(e){let a;return e&&"string"==typeof e&&t.isElement&&(a=t.el.querySelector(e))?a:(e&&("string"==typeof e&&(a=[...document.querySelectorAll(e)]),t.params.uniqueNavElements&&"string"==typeof e&&a&&a.length>1&&1===t.el.querySelectorAll(e).length?a=t.el.querySelector(e):a&&1===a.length&&(a=a[0])),e&&!a)?e:a}function o(e,a){let i=t.params.navigation;(e=(0,s.m)(e)).forEach(e=>{e&&(e.classList[a?"add":"remove"](...i.disabledClass.split(" ")),"BUTTON"===e.tagName&&(e.disabled=a),t.params.watchOverflow&&t.enabled&&e.classList[t.isLocked?"add":"remove"](i.lockClass))})}function c(){let{nextEl:e,prevEl:a}=t.navigation;if(t.params.loop){o(a,!1),o(e,!1);return}o(a,t.isBeginning&&!t.params.rewind),o(e,t.isEnd&&!t.params.rewind)}function u(e){e.preventDefault(),(!t.isBeginning||t.params.loop||t.params.rewind)&&(t.slidePrev(),r("navigationPrev"))}function p(e){e.preventDefault(),(!t.isEnd||t.params.loop||t.params.rewind)&&(t.slideNext(),r("navigationNext"))}function d(){let e=t.params.navigation;if(t.params.navigation=n(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(e.nextEl||e.prevEl))return;let a=l(e.nextEl),i=l(e.prevEl);Object.assign(t.navigation,{nextEl:a,prevEl:i}),a=(0,s.m)(a),i=(0,s.m)(i);let r=(a,i)=>{a&&a.addEventListener("click","next"===i?p:u),!t.enabled&&a&&a.classList.add(...e.lockClass.split(" "))};a.forEach(e=>r(e,"next")),i.forEach(e=>r(e,"prev"))}function m(){let{nextEl:e,prevEl:a}=t.navigation;e=(0,s.m)(e),a=(0,s.m)(a);let i=(e,a)=>{e.removeEventListener("click","next"===a?p:u),e.classList.remove(...t.params.navigation.disabledClass.split(" "))};e.forEach(e=>i(e,"next")),a.forEach(e=>i(e,"prev"))}a({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null},i("init",()=>{!1===t.params.navigation.enabled?f():(d(),c())}),i("toEdge fromEdge lock unlock",()=>{c()}),i("destroy",()=>{m()}),i("enable disable",()=>{let{nextEl:e,prevEl:a}=t.navigation;if(e=(0,s.m)(e),a=(0,s.m)(a),t.enabled){c();return}[...e,...a].filter(e=>!!e).forEach(e=>e.classList.add(t.params.navigation.lockClass))}),i("click",(e,a)=>{let{nextEl:i,prevEl:n}=t.navigation;i=(0,s.m)(i),n=(0,s.m)(n);let l=a.target,o=n.includes(l)||i.includes(l);if(t.isElement&&!o){let e=a.path||a.composedPath&&a.composedPath();e&&(o=e.find(e=>i.includes(e)||n.includes(e)))}if(t.params.navigation.hideOnClick&&!o){let e;if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===l||t.pagination.el.contains(l)))return;i.length?e=i[0].classList.contains(t.params.navigation.hiddenClass):n.length&&(e=n[0].classList.contains(t.params.navigation.hiddenClass)),!0===e?r("navigationShow"):r("navigationHide"),[...i,...n].filter(e=>!!e).forEach(e=>e.classList.toggle(t.params.navigation.hiddenClass))}});let f=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),m()};Object.assign(t.navigation,{enable:()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),d(),c()},disable:f,update:c,init:d,destroy:m})}function l(e){return void 0===e&&(e=""),`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function o(e){let t,{swiper:a,extendParams:i,on:r,emit:o}=e,c="swiper-pagination";i({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${c}-bullet`,bulletActiveClass:`${c}-bullet-active`,modifierClass:`${c}-`,currentClass:`${c}-current`,totalClass:`${c}-total`,hiddenClass:`${c}-hidden`,progressbarFillClass:`${c}-progressbar-fill`,progressbarOppositeClass:`${c}-progressbar-opposite`,clickableClass:`${c}-clickable`,lockClass:`${c}-lock`,horizontalClass:`${c}-horizontal`,verticalClass:`${c}-vertical`,paginationDisabledClass:`${c}-disabled`}}),a.pagination={el:null,bullets:[]};let u=0;function p(){return!a.params.pagination.el||!a.pagination.el||Array.isArray(a.pagination.el)&&0===a.pagination.el.length}function d(e,t){let{bulletActiveClass:i}=a.params.pagination;e&&(e=e[`${"prev"===t?"previous":"next"}ElementSibling`])&&(e.classList.add(`${i}-${t}`),(e=e[`${"prev"===t?"previous":"next"}ElementSibling`])&&e.classList.add(`${i}-${t}-${t}`))}function m(e){let t=e.target.closest(l(a.params.pagination.bulletClass));if(!t)return;e.preventDefault();let i=(0,s.h)(t)*a.params.slidesPerGroup;if(a.params.loop){if(a.realIndex===i)return;a.slideToLoop(i)}else a.slideTo(i)}function f(){let e,i;let n=a.rtl,r=a.params.pagination;if(p())return;let c=a.pagination.el;c=(0,s.m)(c);let m=a.virtual&&a.params.virtual.enabled?a.virtual.slides.length:a.slides.length,f=a.params.loop?Math.ceil(m/a.params.slidesPerGroup):a.snapGrid.length;if(a.params.loop?(i=a.previousRealIndex||0,e=a.params.slidesPerGroup>1?Math.floor(a.realIndex/a.params.slidesPerGroup):a.realIndex):void 0!==a.snapIndex?(e=a.snapIndex,i=a.previousSnapIndex):(i=a.previousIndex||0,e=a.activeIndex||0),"bullets"===r.type&&a.pagination.bullets&&a.pagination.bullets.length>0){let l,o,p;let m=a.pagination.bullets;if(r.dynamicBullets&&(t=(0,s.f)(m[0],a.isHorizontal()?"width":"height",!0),c.forEach(e=>{e.style[a.isHorizontal()?"width":"height"]=`${t*(r.dynamicMainBullets+4)}px`}),r.dynamicMainBullets>1&&void 0!==i&&((u+=e-(i||0))>r.dynamicMainBullets-1?u=r.dynamicMainBullets-1:u<0&&(u=0)),p=((o=(l=Math.max(e-u,0))+(Math.min(m.length,r.dynamicMainBullets)-1))+l)/2),m.forEach(e=>{let t=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(e=>`${r.bulletActiveClass}${e}`)].map(e=>"string"==typeof e&&e.includes(" ")?e.split(" "):e).flat();e.classList.remove(...t)}),c.length>1)m.forEach(t=>{let i=(0,s.h)(t);i===e?t.classList.add(...r.bulletActiveClass.split(" ")):a.isElement&&t.setAttribute("part","bullet"),r.dynamicBullets&&(i>=l&&i<=o&&t.classList.add(...`${r.bulletActiveClass}-main`.split(" ")),i===l&&d(t,"prev"),i===o&&d(t,"next"))});else{let t=m[e];if(t&&t.classList.add(...r.bulletActiveClass.split(" ")),a.isElement&&m.forEach((t,a)=>{t.setAttribute("part",a===e?"bullet-active":"bullet")}),r.dynamicBullets){let e=m[l],t=m[o];for(let e=l;e<=o;e+=1)m[e]&&m[e].classList.add(...`${r.bulletActiveClass}-main`.split(" "));d(e,"prev"),d(t,"next")}}if(r.dynamicBullets){let e=Math.min(m.length,r.dynamicMainBullets+4),i=(t*e-t)/2-p*t,s=n?"right":"left";m.forEach(e=>{e.style[a.isHorizontal()?s:"top"]=`${i}px`})}}c.forEach((t,i)=>{if("fraction"===r.type&&(t.querySelectorAll(l(r.currentClass)).forEach(t=>{t.textContent=r.formatFractionCurrent(e+1)}),t.querySelectorAll(l(r.totalClass)).forEach(e=>{e.textContent=r.formatFractionTotal(f)})),"progressbar"===r.type){let i;i=r.progressbarOpposite?a.isHorizontal()?"vertical":"horizontal":a.isHorizontal()?"horizontal":"vertical";let s=(e+1)/f,n=1,o=1;"horizontal"===i?n=s:o=s,t.querySelectorAll(l(r.progressbarFillClass)).forEach(e=>{e.style.transform=`translate3d(0,0,0) scaleX(${n}) scaleY(${o})`,e.style.transitionDuration=`${a.params.speed}ms`})}"custom"===r.type&&r.renderCustom?(t.innerHTML=r.renderCustom(a,e+1,f),0===i&&o("paginationRender",t)):(0===i&&o("paginationRender",t),o("paginationUpdate",t)),a.params.watchOverflow&&a.enabled&&t.classList[a.isLocked?"add":"remove"](r.lockClass)})}function g(){let e=a.params.pagination;if(p())return;let t=a.virtual&&a.params.virtual.enabled?a.virtual.slides.length:a.grid&&a.params.grid.rows>1?a.slides.length/Math.ceil(a.params.grid.rows):a.slides.length,i=a.pagination.el;i=(0,s.m)(i);let n="";if("bullets"===e.type){let i=a.params.loop?Math.ceil(t/a.params.slidesPerGroup):a.snapGrid.length;a.params.freeMode&&a.params.freeMode.enabled&&i>t&&(i=t);for(let t=0;t<i;t+=1)e.renderBullet?n+=e.renderBullet.call(a,t,e.bulletClass):n+=`<${e.bulletElement} ${a.isElement?'part="bullet"':""} class="${e.bulletClass}"></${e.bulletElement}>`}"fraction"===e.type&&(n=e.renderFraction?e.renderFraction.call(a,e.currentClass,e.totalClass):`<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),"progressbar"===e.type&&(n=e.renderProgressbar?e.renderProgressbar.call(a,e.progressbarFillClass):`<span class="${e.progressbarFillClass}"></span>`),a.pagination.bullets=[],i.forEach(t=>{"custom"!==e.type&&(t.innerHTML=n||""),"bullets"===e.type&&a.pagination.bullets.push(...t.querySelectorAll(l(e.bulletClass)))}),"custom"!==e.type&&o("paginationRender",i[0])}function h(){let e;a.params.pagination=n(a,a.originalParams.pagination,a.params.pagination,{el:"swiper-pagination"});let t=a.params.pagination;t.el&&("string"==typeof t.el&&a.isElement&&(e=a.el.querySelector(t.el)),e||"string"!=typeof t.el||(e=[...document.querySelectorAll(t.el)]),e||(e=t.el),e&&0!==e.length&&(a.params.uniqueNavElements&&"string"==typeof t.el&&Array.isArray(e)&&e.length>1&&(e=[...a.el.querySelectorAll(t.el)]).length>1&&(e=e.filter(e=>(0,s.a)(e,".swiper")[0]===a.el)[0]),Array.isArray(e)&&1===e.length&&(e=e[0]),Object.assign(a.pagination,{el:e}),(e=(0,s.m)(e)).forEach(e=>{"bullets"===t.type&&t.clickable&&e.classList.add(...(t.clickableClass||"").split(" ")),e.classList.add(t.modifierClass+t.type),e.classList.add(a.isHorizontal()?t.horizontalClass:t.verticalClass),"bullets"===t.type&&t.dynamicBullets&&(e.classList.add(`${t.modifierClass}${t.type}-dynamic`),u=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),"progressbar"===t.type&&t.progressbarOpposite&&e.classList.add(t.progressbarOppositeClass),t.clickable&&e.addEventListener("click",m),a.enabled||e.classList.add(t.lockClass)})))}function v(){let e=a.params.pagination;if(p())return;let t=a.pagination.el;t&&(t=(0,s.m)(t)).forEach(t=>{t.classList.remove(e.hiddenClass),t.classList.remove(e.modifierClass+e.type),t.classList.remove(a.isHorizontal()?e.horizontalClass:e.verticalClass),e.clickable&&(t.classList.remove(...(e.clickableClass||"").split(" ")),t.removeEventListener("click",m))}),a.pagination.bullets&&a.pagination.bullets.forEach(t=>t.classList.remove(...e.bulletActiveClass.split(" ")))}r("changeDirection",()=>{if(!a.pagination||!a.pagination.el)return;let e=a.params.pagination,{el:t}=a.pagination;(t=(0,s.m)(t)).forEach(t=>{t.classList.remove(e.horizontalClass,e.verticalClass),t.classList.add(a.isHorizontal()?e.horizontalClass:e.verticalClass)})}),r("init",()=>{!1===a.params.pagination.enabled?y():(h(),g(),f())}),r("activeIndexChange",()=>{void 0===a.snapIndex&&f()}),r("snapIndexChange",()=>{f()}),r("snapGridLengthChange",()=>{g(),f()}),r("destroy",()=>{v()}),r("enable disable",()=>{let{el:e}=a.pagination;e&&(e=(0,s.m)(e)).forEach(e=>e.classList[a.enabled?"remove":"add"](a.params.pagination.lockClass))}),r("lock unlock",()=>{f()}),r("click",(e,t)=>{let i=t.target,n=(0,s.m)(a.pagination.el);if(a.params.pagination.el&&a.params.pagination.hideOnClick&&n&&n.length>0&&!i.classList.contains(a.params.pagination.bulletClass)){if(a.navigation&&(a.navigation.nextEl&&i===a.navigation.nextEl||a.navigation.prevEl&&i===a.navigation.prevEl))return;!0===n[0].classList.contains(a.params.pagination.hiddenClass)?o("paginationShow"):o("paginationHide"),n.forEach(e=>e.classList.toggle(a.params.pagination.hiddenClass))}});let y=()=>{a.el.classList.add(a.params.pagination.paginationDisabledClass);let{el:e}=a.pagination;e&&(e=(0,s.m)(e)).forEach(e=>e.classList.add(a.params.pagination.paginationDisabledClass)),v()};Object.assign(a.pagination,{enable:()=>{a.el.classList.remove(a.params.pagination.paginationDisabledClass);let{el:e}=a.pagination;e&&(e=(0,s.m)(e)).forEach(e=>e.classList.remove(a.params.pagination.paginationDisabledClass)),h(),g(),f()},disable:y,render:g,update:f,init:h,destroy:v})}function c(e){let t,a,r,o,{swiper:c,extendParams:u,on:p,emit:d}=e,m=(0,i.g)(),f=!1,g=null,h=null;function v(){if(!c.params.scrollbar.el||!c.scrollbar.el)return;let{scrollbar:e,rtlTranslate:t}=c,{dragEl:i,el:s}=e,n=c.params.scrollbar,l=c.params.loop?c.progressLoop:c.progress,o=a,u=(r-a)*l;t?(u=-u)>0?(o=a-u,u=0):-u+a>r&&(o=r+u):u<0?(o=a+u,u=0):u+a>r&&(o=r-u),c.isHorizontal()?(i.style.transform=`translate3d(${u}px, 0, 0)`,i.style.width=`${o}px`):(i.style.transform=`translate3d(0px, ${u}px, 0)`,i.style.height=`${o}px`),n.hide&&(clearTimeout(g),s.style.opacity=1,g=setTimeout(()=>{s.style.opacity=0,s.style.transitionDuration="400ms"},1e3))}function y(){if(!c.params.scrollbar.el||!c.scrollbar.el)return;let{scrollbar:e}=c,{dragEl:t,el:i}=e;t.style.width="",t.style.height="",r=c.isHorizontal()?i.offsetWidth:i.offsetHeight,o=c.size/(c.virtualSize+c.params.slidesOffsetBefore-(c.params.centeredSlides?c.snapGrid[0]:0)),a="auto"===c.params.scrollbar.dragSize?r*o:parseInt(c.params.scrollbar.dragSize,10),c.isHorizontal()?t.style.width=`${a}px`:t.style.height=`${a}px`,o>=1?i.style.display="none":i.style.display="",c.params.scrollbar.hide&&(i.style.opacity=0),c.params.watchOverflow&&c.enabled&&e.el.classList[c.isLocked?"add":"remove"](c.params.scrollbar.lockClass)}function b(e){return c.isHorizontal()?e.clientX:e.clientY}function C(e){let i;let{scrollbar:n,rtlTranslate:l}=c,{el:o}=n;i=Math.max(Math.min(i=(b(e)-(0,s.b)(o)[c.isHorizontal()?"left":"top"]-(null!==t?t:a/2))/(r-a),1),0),l&&(i=1-i);let u=c.minTranslate()+(c.maxTranslate()-c.minTranslate())*i;c.updateProgress(u),c.setTranslate(u),c.updateActiveIndex(),c.updateSlidesClasses()}function E(e){let a=c.params.scrollbar,{scrollbar:i,wrapperEl:s}=c,{el:n,dragEl:r}=i;f=!0,t=e.target===r?b(e)-e.target.getBoundingClientRect()[c.isHorizontal()?"left":"top"]:null,e.preventDefault(),e.stopPropagation(),s.style.transitionDuration="100ms",r.style.transitionDuration="100ms",C(e),clearTimeout(h),n.style.transitionDuration="0ms",a.hide&&(n.style.opacity=1),c.params.cssMode&&(c.wrapperEl.style["scroll-snap-type"]="none"),d("scrollbarDragStart",e)}function S(e){let{scrollbar:t,wrapperEl:a}=c,{el:i,dragEl:s}=t;f&&(e.preventDefault&&e.cancelable?e.preventDefault():e.returnValue=!1,C(e),a.style.transitionDuration="0ms",i.style.transitionDuration="0ms",s.style.transitionDuration="0ms",d("scrollbarDragMove",e))}function w(e){let t=c.params.scrollbar,{scrollbar:a,wrapperEl:i}=c,{el:n}=a;f&&(f=!1,c.params.cssMode&&(c.wrapperEl.style["scroll-snap-type"]="",i.style.transitionDuration=""),t.hide&&(clearTimeout(h),h=(0,s.n)(()=>{n.style.opacity=0,n.style.transitionDuration="400ms"},1e3)),d("scrollbarDragEnd",e),t.snapOnRelease&&c.slideToClosest())}function _(e){let{scrollbar:t,params:a}=c,i=t.el;if(!i)return;let s=!!a.passiveListeners&&{passive:!1,capture:!1},n=!!a.passiveListeners&&{passive:!0,capture:!1};if(!i)return;let r="on"===e?"addEventListener":"removeEventListener";i[r]("pointerdown",E,s),m[r]("pointermove",S,s),m[r]("pointerup",w,n)}function L(){let e,t;let{scrollbar:a,el:i}=c;c.params.scrollbar=n(c,c.originalParams.scrollbar,c.params.scrollbar,{el:"swiper-scrollbar"});let r=c.params.scrollbar;if(r.el){if("string"==typeof r.el&&c.isElement&&(e=c.el.querySelector(r.el)),e||"string"!=typeof r.el)e||(e=r.el);else if(!(e=m.querySelectorAll(r.el)).length)return;c.params.uniqueNavElements&&"string"==typeof r.el&&e.length>1&&1===i.querySelectorAll(r.el).length&&(e=i.querySelector(r.el)),e.length>0&&(e=e[0]),e.classList.add(c.isHorizontal()?r.horizontalClass:r.verticalClass),!e||(t=e.querySelector(l(c.params.scrollbar.dragClass)))||(t=(0,s.c)("div",c.params.scrollbar.dragClass),e.append(t)),Object.assign(a,{el:e,dragEl:t}),!r.draggable||c.params.scrollbar.el&&c.scrollbar.el&&_("on"),e&&e.classList[c.enabled?"remove":"add"](...(0,s.i)(c.params.scrollbar.lockClass))}}function x(){let e=c.params.scrollbar,t=c.scrollbar.el;t&&t.classList.remove(...(0,s.i)(c.isHorizontal()?e.horizontalClass:e.verticalClass)),c.params.scrollbar.el&&c.scrollbar.el&&_("off")}u({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),c.scrollbar={el:null,dragEl:null},p("changeDirection",()=>{if(!c.scrollbar||!c.scrollbar.el)return;let e=c.params.scrollbar,{el:t}=c.scrollbar;(t=(0,s.m)(t)).forEach(t=>{t.classList.remove(e.horizontalClass,e.verticalClass),t.classList.add(c.isHorizontal()?e.horizontalClass:e.verticalClass)})}),p("init",()=>{!1===c.params.scrollbar.enabled?T():(L(),y(),v())}),p("update resize observerUpdate lock unlock changeDirection",()=>{y()}),p("setTranslate",()=>{v()}),p("setTransition",(e,t)=>{c.params.scrollbar.el&&c.scrollbar.el&&(c.scrollbar.dragEl.style.transitionDuration=`${t}ms`)}),p("enable disable",()=>{let{el:e}=c.scrollbar;e&&e.classList[c.enabled?"remove":"add"](...(0,s.i)(c.params.scrollbar.lockClass))}),p("destroy",()=>{x()});let T=()=>{c.el.classList.add(...(0,s.i)(c.params.scrollbar.scrollbarDisabledClass)),c.scrollbar.el&&c.scrollbar.el.classList.add(...(0,s.i)(c.params.scrollbar.scrollbarDisabledClass)),x()};Object.assign(c.scrollbar,{enable:()=>{c.el.classList.remove(...(0,s.i)(c.params.scrollbar.scrollbarDisabledClass)),c.scrollbar.el&&c.scrollbar.el.classList.remove(...(0,s.i)(c.params.scrollbar.scrollbarDisabledClass)),L(),y(),v()},disable:T,updateSize:y,setTranslate:v,init:L,destroy:x})}function u(e){let t,a,{swiper:n,extendParams:r,on:o}=e;r({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null,scrollOnFocus:!0}}),n.a11y={clicked:!1};let c=null,u=new Date().getTime();function p(e){let t=c;0!==t.length&&(t.innerHTML="",t.innerHTML=e)}function d(e){(e=(0,s.m)(e)).forEach(e=>{e.setAttribute("tabIndex","0")})}function m(e){(e=(0,s.m)(e)).forEach(e=>{e.setAttribute("tabIndex","-1")})}function f(e,t){(e=(0,s.m)(e)).forEach(e=>{e.setAttribute("role",t)})}function g(e,t){(e=(0,s.m)(e)).forEach(e=>{e.setAttribute("aria-roledescription",t)})}function h(e,t){(e=(0,s.m)(e)).forEach(e=>{e.setAttribute("aria-label",t)})}function v(e){(e=(0,s.m)(e)).forEach(e=>{e.setAttribute("aria-disabled",!0)})}function y(e){(e=(0,s.m)(e)).forEach(e=>{e.setAttribute("aria-disabled",!1)})}function b(e){if(13!==e.keyCode&&32!==e.keyCode)return;let t=n.params.a11y,a=e.target;if(!(n.pagination&&n.pagination.el&&(a===n.pagination.el||n.pagination.el.contains(e.target)))||e.target.matches(l(n.params.pagination.bulletClass))){if(n.navigation&&n.navigation.prevEl&&n.navigation.nextEl){let e=(0,s.m)(n.navigation.prevEl);(0,s.m)(n.navigation.nextEl).includes(a)&&(n.isEnd&&!n.params.loop||n.slideNext(),n.isEnd?p(t.lastSlideMessage):p(t.nextSlideMessage)),e.includes(a)&&(n.isBeginning&&!n.params.loop||n.slidePrev(),n.isBeginning?p(t.firstSlideMessage):p(t.prevSlideMessage))}n.pagination&&a.matches(l(n.params.pagination.bulletClass))&&a.click()}}function C(){return n.pagination&&n.pagination.bullets&&n.pagination.bullets.length}function E(){return C()&&n.params.pagination.clickable}let S=(e,t,a)=>{d(e),"BUTTON"!==e.tagName&&(f(e,"button"),e.addEventListener("keydown",b)),h(e,a),function(e,t){(e=(0,s.m)(e)).forEach(e=>{e.setAttribute("aria-controls",t)})}(e,t)},w=e=>{a&&a!==e.target&&!a.contains(e.target)&&(t=!0),n.a11y.clicked=!0},_=()=>{t=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>{n.destroyed||(n.a11y.clicked=!1)})})},L=e=>{u=new Date().getTime()},x=e=>{if(n.a11y.clicked||!n.params.a11y.scrollOnFocus||new Date().getTime()-u<100)return;let i=e.target.closest(`.${n.params.slideClass}, swiper-slide`);if(!i||!n.slides.includes(i))return;a=i;let s=n.slides.indexOf(i)===n.activeIndex,r=n.params.watchSlidesProgress&&n.visibleSlides&&n.visibleSlides.includes(i);!s&&!r&&(e.sourceCapabilities&&e.sourceCapabilities.firesTouchEvents||(n.isHorizontal()?n.el.scrollLeft=0:n.el.scrollTop=0,requestAnimationFrame(()=>{t||(n.params.loop?n.slideToLoop(parseInt(i.getAttribute("data-swiper-slide-index")),0):n.slideTo(n.slides.indexOf(i),0),t=!1)})))},T=()=>{let e=n.params.a11y;e.itemRoleDescriptionMessage&&g(n.slides,e.itemRoleDescriptionMessage),e.slideRole&&f(n.slides,e.slideRole);let t=n.slides.length;e.slideLabelMessage&&n.slides.forEach((a,i)=>{let s=n.params.loop?parseInt(a.getAttribute("data-swiper-slide-index"),10):i;h(a,e.slideLabelMessage.replace(/\{\{index\}\}/,s+1).replace(/\{\{slidesLength\}\}/,t))})},k=()=>{let e=n.params.a11y;n.el.append(c);let t=n.el;e.containerRoleDescriptionMessage&&g(t,e.containerRoleDescriptionMessage),e.containerMessage&&h(t,e.containerMessage);let a=n.wrapperEl,r=e.id||a.getAttribute("id")||`swiper-wrapper-${"x".repeat(16).replace(/x/g,()=>Math.round(16*Math.random()).toString(16))}`,l=n.params.autoplay&&n.params.autoplay.enabled?"off":"polite";!function(e,t){(e=(0,s.m)(e)).forEach(e=>{e.setAttribute("id",t)})}(a,r),function(e,t){(e=(0,s.m)(e)).forEach(e=>{e.setAttribute("aria-live",t)})}(a,l),T();let{nextEl:o,prevEl:u}=n.navigation?n.navigation:{};o=(0,s.m)(o),u=(0,s.m)(u),o&&o.forEach(t=>S(t,r,e.nextSlideMessage)),u&&u.forEach(t=>S(t,r,e.prevSlideMessage)),E()&&(0,s.m)(n.pagination.el).forEach(e=>{e.addEventListener("keydown",b)}),(0,i.g)().addEventListener("visibilitychange",L),n.el.addEventListener("focus",x,!0),n.el.addEventListener("focus",x,!0),n.el.addEventListener("pointerdown",w,!0),n.el.addEventListener("pointerup",_,!0)};o("beforeInit",()=>{(c=(0,s.c)("span",n.params.a11y.notificationClass)).setAttribute("aria-live","assertive"),c.setAttribute("aria-atomic","true")}),o("afterInit",()=>{n.params.a11y.enabled&&k()}),o("slidesLengthChange snapGridLengthChange slidesGridLengthChange",()=>{n.params.a11y.enabled&&T()}),o("fromEdge toEdge afterInit lock unlock",()=>{n.params.a11y.enabled&&function(){if(n.params.loop||n.params.rewind||!n.navigation)return;let{nextEl:e,prevEl:t}=n.navigation;t&&(n.isBeginning?(v(t),m(t)):(y(t),d(t))),e&&(n.isEnd?(v(e),m(e)):(y(e),d(e)))}()}),o("paginationUpdate",()=>{n.params.a11y.enabled&&function(){let e=n.params.a11y;C()&&n.pagination.bullets.forEach(t=>{n.params.pagination.clickable&&(d(t),n.params.pagination.renderBullet||(f(t,"button"),h(t,e.paginationBulletMessage.replace(/\{\{index\}\}/,(0,s.h)(t)+1)))),t.matches(l(n.params.pagination.bulletActiveClass))?t.setAttribute("aria-current","true"):t.removeAttribute("aria-current")})}()}),o("destroy",()=>{n.params.a11y.enabled&&function(){c&&c.remove();let{nextEl:e,prevEl:t}=n.navigation?n.navigation:{};e=(0,s.m)(e),t=(0,s.m)(t),e&&e.forEach(e=>e.removeEventListener("keydown",b)),t&&t.forEach(e=>e.removeEventListener("keydown",b)),E()&&(0,s.m)(n.pagination.el).forEach(e=>{e.removeEventListener("keydown",b)}),(0,i.g)().removeEventListener("visibilitychange",L),n.el&&"string"!=typeof n.el&&(n.el.removeEventListener("focus",x,!0),n.el.removeEventListener("pointerdown",w,!0),n.el.removeEventListener("pointerup",_,!0))}()})}function p(e){let t,a,s,n,r,l,o,c,u,p,{swiper:d,extendParams:m,on:f,emit:g,params:h}=e;d.autoplay={running:!1,paused:!1,timeLeft:0},m({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let v=h&&h.autoplay?h.autoplay.delay:3e3,y=h&&h.autoplay?h.autoplay.delay:3e3,b=new Date().getTime();function C(e){d&&!d.destroyed&&d.wrapperEl&&e.target===d.wrapperEl&&(d.wrapperEl.removeEventListener("transitionend",C),!p&&(!e.detail||!e.detail.bySwiperTouchMove)&&T())}let E=()=>{if(d.destroyed||!d.autoplay.running)return;d.autoplay.paused?n=!0:n&&(y=s,n=!1);let e=d.autoplay.paused?s:b+y-new Date().getTime();d.autoplay.timeLeft=e,g("autoplayTimeLeft",e,e/v),a=requestAnimationFrame(()=>{E()})},S=()=>{let e;if(e=d.virtual&&d.params.virtual.enabled?d.slides.filter(e=>e.classList.contains("swiper-slide-active"))[0]:d.slides[d.activeIndex])return parseInt(e.getAttribute("data-swiper-autoplay"),10)},w=e=>{if(d.destroyed||!d.autoplay.running)return;cancelAnimationFrame(a),E();let i=void 0===e?d.params.autoplay.delay:e;v=d.params.autoplay.delay,y=d.params.autoplay.delay;let n=S();!Number.isNaN(n)&&n>0&&void 0===e&&(i=n,v=n,y=n),s=i;let r=d.params.speed,l=()=>{d&&!d.destroyed&&(d.params.autoplay.reverseDirection?!d.isBeginning||d.params.loop||d.params.rewind?(d.slidePrev(r,!0,!0),g("autoplay")):d.params.autoplay.stopOnLastSlide||(d.slideTo(d.slides.length-1,r,!0,!0),g("autoplay")):!d.isEnd||d.params.loop||d.params.rewind?(d.slideNext(r,!0,!0),g("autoplay")):d.params.autoplay.stopOnLastSlide||(d.slideTo(0,r,!0,!0),g("autoplay")),d.params.cssMode&&(b=new Date().getTime(),requestAnimationFrame(()=>{w()})))};return i>0?(clearTimeout(t),t=setTimeout(()=>{l()},i)):requestAnimationFrame(()=>{l()}),i},_=()=>{b=new Date().getTime(),d.autoplay.running=!0,w(),g("autoplayStart")},L=()=>{d.autoplay.running=!1,clearTimeout(t),cancelAnimationFrame(a),g("autoplayStop")},x=(e,a)=>{if(d.destroyed||!d.autoplay.running)return;clearTimeout(t),e||(u=!0);let i=()=>{g("autoplayPause"),d.params.autoplay.waitForTransition?d.wrapperEl.addEventListener("transitionend",C):T()};if(d.autoplay.paused=!0,a){c&&(s=d.params.autoplay.delay),c=!1,i();return}s=(s||d.params.autoplay.delay)-(new Date().getTime()-b),d.isEnd&&s<0&&!d.params.loop||(s<0&&(s=0),i())},T=()=>{d.isEnd&&s<0&&!d.params.loop||d.destroyed||!d.autoplay.running||(b=new Date().getTime(),u?(u=!1,w(s)):w(),d.autoplay.paused=!1,g("autoplayResume"))},k=()=>{if(d.destroyed||!d.autoplay.running)return;let e=(0,i.g)();"hidden"===e.visibilityState&&(u=!0,x(!0)),"visible"===e.visibilityState&&T()},A=e=>{"mouse"===e.pointerType&&(u=!0,p=!0,d.animating||d.autoplay.paused||x(!0))},z=e=>{"mouse"===e.pointerType&&(p=!1,d.autoplay.paused&&T())},M=()=>{d.params.autoplay.pauseOnMouseEnter&&(d.el.addEventListener("pointerenter",A),d.el.addEventListener("pointerleave",z))},F=()=>{d.el&&"string"!=typeof d.el&&(d.el.removeEventListener("pointerenter",A),d.el.removeEventListener("pointerleave",z))},R=()=>{(0,i.g)().addEventListener("visibilitychange",k)},D=()=>{(0,i.g)().removeEventListener("visibilitychange",k)};f("init",()=>{d.params.autoplay.enabled&&(M(),R(),_())}),f("destroy",()=>{F(),D(),d.autoplay.running&&L()}),f("_freeModeStaticRelease",()=>{(l||u)&&T()}),f("_freeModeNoMomentumRelease",()=>{d.params.autoplay.disableOnInteraction?L():x(!0,!0)}),f("beforeTransitionStart",(e,t,a)=>{!d.destroyed&&d.autoplay.running&&(a||!d.params.autoplay.disableOnInteraction?x(!0,!0):L())}),f("sliderFirstMove",()=>{if(!d.destroyed&&d.autoplay.running){if(d.params.autoplay.disableOnInteraction){L();return}r=!0,l=!1,u=!1,o=setTimeout(()=>{u=!0,l=!0,x(!0)},200)}}),f("touchEnd",()=>{if(!d.destroyed&&d.autoplay.running&&r){if(clearTimeout(o),clearTimeout(t),d.params.autoplay.disableOnInteraction){l=!1,r=!1;return}l&&d.params.cssMode&&T(),l=!1,r=!1}}),f("slideChange",()=>{!d.destroyed&&d.autoplay.running&&(c=!0)}),Object.assign(d.autoplay,{start:_,stop:L,pause:x,resume:T})}}}]);