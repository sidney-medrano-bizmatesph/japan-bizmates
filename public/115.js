(self.webpackChunk=self.webpackChunk||[]).push([[115],{7778:(t,e,r)=>{"use strict";r.d(e,{Z:()=>o});var n=r(3645),a=r.n(n)()((function(t){return t[1]}));a.push([t.id,"@media only screen and (max-width:1280px){.description[data-v-4fd4fae4]{grid-row:2}.picture[data-v-4fd4fae4]{grid-row:1}}",""]);const o=a},8115:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>p});var n=r(629),a=r(5273);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const c=s({data:function(){return{about:{}}},computed:i({},(0,n.rn)(["general"])),mounted:function(){var t=this;axios.post("/web/about-initialize").then((function(e){t.about=e.data})).catch((function(e){(0,a.gP)(t,e)}))}},"computed",i({},(0,n.rn)(["general"])));var l=r(3379),u=r.n(l),d=r(7778),f={insert:"head",singleton:!1};u()(d.Z,f);d.Z.locals;const p=(0,r(1900).Z)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about-the-program-div pt-6"},[r("div",{staticClass:"section about-the-program full-page pb-8",attrs:{id:"about-the-program"}},[r("div",{staticClass:"flex items-center mb-4 w-full"},[r("img",{staticClass:"mr-4",staticStyle:{"max-height":"100px"},attrs:{src:"/storage/webCMS/images/"+t.general.round_logo,alt:""}}),t._v(" "),r("p",{staticClass:"\n                    text-4xl\n                    font-bold\n                    border-bottom-blue\n                    text-blue\n                    w-full\n                ",domProps:{innerHTML:t._s(t.about.title)}})]),t._v(" "),r("div",{staticClass:"grid grid-cols-1 min-xl:grid-cols-2 gap-1"},[r("div",{staticClass:"description flex flex-wrap content-center"},[r("p",{staticClass:"text-2xl font-bold mb-2 from-cms",domProps:{innerHTML:t._s(t.about.content)}},[t._v("\n                    Not much time? We’ll make it easier for you!\n                ")])]),t._v(" "),r("div",{staticClass:"picture mb-8"},[r("img",{staticClass:"w-full rounded-full",attrs:{src:"storage/webCMS/images/"+t.about.picture,alt:""}})])])])])}),[],!1,null,"4fd4fae4",null).exports}}]);