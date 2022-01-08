(self.webpackChunk=self.webpackChunk||[]).push([[958],{5422:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});var s=n(3645),r=n.n(s)()((function(t){return t[1]}));r.push([t.id,".padding-top-63px[data-v-a49f3418]{padding-top:63px}",""]);const o=r},7958:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>g});var s=n(629),r=n(8085),o=n(2280),a=n(7608),i=n(7380),l=n(4155);function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const d={data:function(){return{isOpen:!1,guestRoutes:o.Z}},computed:c(c({},(0,s.rn)(["auth"])),{},{authRoutesComputed:function(){var t=this.auth;return(0,r.xb)(t.user)?a.Z[0]:a.Z[1]},loggedInRoutesComputed:function(){var t=this.auth;return(0,r.xb)(t.user)?[]:i.Z.filter((function(e){return e.users.includes(t.user.role_id)}))}}),methods:c(c({},(0,s.nv)(["logoutUser"])),{},{isEmpty:r.xb,drawer:function(){this.isOpen=!this.isOpen}}),watch:{isOpen:{immediate:!0,handler:function(t){l.client&&(t?document.body.style.setProperty("overflow","hidden"):document.body.style.removeProperty("overflow"))}}},mounted:function(){(0,r.xb)(this.auth.user)||(this.isOpen=!0)}};var f=n(3379),m=n.n(f),v=n(5422),h={insert:"head",singleton:!1};m()(v.Z,h);v.Z.locals;const g=(0,n(1900).Z)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{class:{"flex fixed w-full items-center justify-between px-6 h-16 text-white z-10 ease-in-out transition-all duration-300":!0,"pl-64":t.isOpen,"primary-red":!0}},[n("div",{staticClass:"flex items-center"},[n("button",{staticClass:"ml-2 mr-2",attrs:{"aria-label":"Open Menu"},on:{click:t.drawer}},[n("svg",{staticClass:"w-8 h-8",attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M4 6h16M4 12h16M4 18h16"}})])]),t._v(" "),t.isOpen?t._e():[n("img",{class:{"h-8 w-8 transition-all ease-in-out duration-300":!0,"opacity-0":t.isOpen,"opacity-100":!t.isOpen},attrs:{src:"/img/logo.png",alt:"Logo"}}),t._v(" "),n("p",{class:{"ml-4 font-bold transition-all ease-in-out duration-300":!0,"opacity-0":t.isOpen,"opacity-100":!t.isOpen}},[t._v("\n                    "+t._s(t.isEmpty(t.$route.meta.topBar)?"":t.$route.meta.topBar)+"\n                ")])]],2),t._v(" "),n("div",{staticClass:"flex items-center"},[n("div",{staticClass:"flex justify-between bg-transparent"},[n("button",{staticClass:"\n                        flex\n                        items-center\n                        p-3\n                        font-medium\n                        mr-2\n                        text-center\n                        bg-gray-300\n                        rounded\n                        hover:bg-gray-400\n                        focus:outline-none\n                        focus:bg-gray-400\n                    "},[n("svg",{staticClass:"h-6 w-6",attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"}})])]),t._v(" "),n("button",{staticClass:"\n                        flex\n                        items-cente\n                        p-3\n                        font-medium\n                        mr-2\n                        text-center\n                        bg-gray-300\n                        rounded\n                        hover:bg-gray-400\n                        focus:outline-none\n                        focus:bg-gray-400\n                    "},[n("svg",{staticClass:"w-6 h-6",attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{d:"M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"}})])]),t._v(" "),n("p",{staticClass:"px-3 py-3 font-medium"},[t._v("\n                    "+t._s(t.auth.user.email)+"\n                ")]),t._v(" "),t.isEmpty(t.auth.user)?t._e():n("a",{staticClass:"\n                        flex\n                        items-center\n                        px-3\n                        py-3\n                        font-medium\n                        text-center\n                        bg-orange-600\n                        rounded\n                        text-black\n                        hover:bg-orange-700\n                        focus:outline-none\n                        focus:bg-orange-400\n                        cursor-pointer\n                    ",on:{click:function(e){return e.preventDefault(),t.logoutUser(e)}}},[t._v("\n                    LOGOUT\n                    ")])])]),t._v(" "),n("aside",{class:{"transform top-0 left-0 w-64 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 text-white":!0,"translate-x-0 opacity-100":t.isOpen,"-translate-x-full opacity-0":!t.isOpen,"primary-red":!0}},[n("span",{staticClass:"flex w-full items-center p-4"},[n("img",{staticClass:"h-8 w-8",attrs:{src:"/img/logo.png",alt:"Logo"}}),t._v(" "),n("p",{staticClass:"ml-4 font-bold"},[t._v("\n                    "+t._s(t.isEmpty(t.$route.meta.topBar)?"":t.$route.meta.topBar)+"\n                ")])]),t._v(" "),t.isEmpty(t.auth.user)||t.isEmpty(t.loggedInRoutesComputed)?t._e():n("span",{staticClass:"flex items-center pl-4 pr-4 pt-2 pb-2"},[t._v(t._s(0==t.auth.user.acc_type?"Admin":""))]),t._v(" "),t.isEmpty(t.auth.user)||t.isEmpty(t.loggedInRoutesComputed)?t._e():[t._l(t.loggedInRoutesComputed,(function(e,s){return[e.hidden?t._e():n("router-link",{key:"loggedInRoute-"+s,attrs:{to:e.path}},[n("span",{staticClass:"\n                                flex\n                                items-center\n                                p-4\n                                hover:bg-blue-900\n                                hover:text-yellow-200\n                                transition-all\n                            "},[n("span",{staticClass:"mr-2"},[n("i",{class:t.isEmpty(e.icon)?"far fa-user":e.icon})]),t._v(" "),n("span",[t._v(t._s(e.title))])])])]}))],t._v(" "),t.isEmpty(t.authRoutesComputed)?t._e():n("span",{staticClass:"flex items-center pl-4 pr-4 pt-2 pb-2"},[t._v("Auth")]),t._v(" "),t.isEmpty(t.authRoutesComputed)?t._e():[t._l(t.authRoutesComputed,(function(e,s){return[e.hidden?t._e():n("router-link",{key:"authRoute-"+s,attrs:{to:e.path}},[n("span",{staticClass:"\n                                flex\n                                items-center\n                                p-4\n                                hover:bg-blue-900\n                                hover:text-yellow-200\n                                transition-all\n                            "},[n("span",{staticClass:"mr-2"},[n("i",{class:t.isEmpty(e.icon)?"far fa-user":e.icon})]),t._v(" "),n("span",[t._v(t._s(e.title))])])])]}))],t._v(" "),t.isEmpty(t.auth.user)?t._e():n("a",{on:{click:function(e){return e.preventDefault(),t.logoutUser(e)}}},[t._m(0)])],2)]),t._v(" "),n("div",{class:{"page-content":!0,"pl-72":t.isOpen},attrs:{id:"page-content"}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"\n                        flex\n                        items-center\n                        p-4\n                        hover:bg-blue-900\n                        hover:text-yellow-200\n                        transition-all\n                    "},[n("span",{staticClass:"mr-2"},[n("i",{staticClass:"far fa-user"})]),t._v(" "),n("span",[t._v("Log out")])])}],!1,null,"a49f3418",null).exports}}]);