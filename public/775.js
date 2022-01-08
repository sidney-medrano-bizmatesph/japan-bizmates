(self.webpackChunk=self.webpackChunk||[]).push([[775],{775:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>l});var s=n(5273);function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const i={data:function(){return{selected:0,payment:{},payments_upper:[],payments:[],payments_upper_ids:[],payments_ids:[]}},mounted:function(){var t=this;axios.post("/web/payments-initialize").then((function(e){e.data.payments_upper.map((function(e){t.payments_upper_ids.push(e.id)})),e.data.payments.map((function(e){t.payments_ids.push(e.id)})),t.payment=e.data.payment,t.payments_upper=e.data.payments_upper,t.payments=e.data.payments})).catch((function(e){(0,s.gP)(t,e)}))},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},mapState(["general"])),methods:{numberWithCommas:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},decimalPlaces:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return parseFloat(t).toFixed(e)},onClick:function(t){this.selected==t?this.selected=0:this.selected=t}}};const l=(0,n(1900).Z)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"payments-div mt-5"},[n("div",{staticClass:"section payments full-page pb-8",attrs:{id:"payments"}},[n("div",{staticClass:"flex items-center mb-8 w-full"},[n("img",{staticClass:"mr-4",staticStyle:{"max-height":"100px"},attrs:{src:"/storage/webCMS/images/"+t.general.round_logo,alt:""}}),t._v(" "),n("p",{staticClass:"\n                    text-4xl\n                    font-bold\n                    mb-4\n                    border-bottom-blue\n                    text-blue\n                    w-full\n                ",domProps:{innerHTML:t._s(t.payment.title)}})]),t._v(" "),n("p",{staticClass:"font-bold text-xl text-red mb-6",domProps:{innerHTML:t._s(t.payment.bundle_header)}}),t._v(" "),n("div",{staticClass:"py-5 px-16 border-2 border-red-500 rounded-3xl mb-10"},[n("p",{staticClass:"text-xl text-red font-bold mb-6",domProps:{innerHTML:t._s(t.payment.one_year_header)}}),t._v(" "),n("div",{staticClass:"\n                    grid grid-cols-1\n                    min-xl:grid-cols-2\n                    gap-x-5 gap-y-3\n                    mb-6\n                "},t._l(t.payments_upper,(function(e){return n("div",{key:"payment-item-"+e.id,class:{"border-2  rounded-3xl flex justify-center p-9 cursor-pointer transition-all duration-150":!0,"bg-blue-100 border-blue ring-4 ring-blue-400":t.selected==e.id,"border-red-500":t.selected!=e.id},staticStyle:{"min-width":"200px"},on:{click:function(){return t.onClick(e.id)}}},[n("div",[n("p",{class:{"font-bold":!0,"text-red":t.selected!=e.id,"text-blue":t.selected==e.id}},[n("span",{staticClass:"text-5xl"},[t._v(t._s(e.subjects))]),t._v(" "),n("span",{staticClass:"text-3xl underline"},[t._v("Subjects")])]),t._v(" "),n("p",{staticClass:"font-bold text-2xl"},[t._v("\n                            Php\n                            "+t._s(t.numberWithCommas(t.decimalPlaces(e.amount,2)))+"\n                        ")])])])})),0),t._v(" "),n("button",{staticClass:"btn-own btn-danger w-full",attrs:{disabled:!t.payments_upper_ids.includes(t.selected)}},[t._v("\n                "+t._s(t.payment.button)+"\n            ")])]),t._v(" "),n("p",{staticClass:"font-bold text-xl text-red mb-6",domProps:{innerHTML:t._s(t.payment.avail_all_header)}}),t._v(" "),n("div",{staticClass:"py-5 px-16 border-2 border-red-500 rounded-3xl mb-10"},[n("div",{staticClass:"\n                    grid grid-cols-1\n                    min-xl:grid-cols-2\n                    gap-x-5 gap-y-3\n                    mb-6\n                "},t._l(t.payments,(function(e){return n("div",{key:"payments-"+e.id},[n("p",{staticClass:"text-red font-bold text-2xl mb-5"},[t._v("\n                        "+t._s(e.name)+"\n                    ")]),t._v(" "),n("div",{class:{"border-2  rounded-3xl flex justify-center p-9 cursor-pointer transition-all duration-150":!0,"bg-blue-100 border-blue ring-4 ring-blue-400":t.selected==e.id,"border-red-500":t.selected!=e.id},staticStyle:{"min-width":"200px"},on:{click:function(){return t.onClick(e.id)}}},[n("div",[n("p",{class:{"font-bold":!0,"text-red":t.selected!=e.id,"text-blue":t.selected==e.id}}),t._v(" "),n("p",{staticClass:"font-bold text-4xl"},[t._v("\n                                Php\n                                "+t._s(t.numberWithCommas(t.decimalPlaces(e.amount,2)))+"\n                            ")])])])])})),0),t._v(" "),n("button",{staticClass:"btn-own btn-danger w-full",attrs:{disabled:!t.payments_ids.includes(t.selected)}},[t._v("\n                "+t._s(t.payment.button)+"\n            ")])])])])}),[],!1,null,null,null).exports}}]);