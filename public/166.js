(self.webpackChunk=self.webpackChunk||[]).push([[166],{9166:(t,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>o});var e=s(381),n=s.n(e),l=s(5273);const i={data:function(){return{place:{},photos:[],tips:[],today:n()().isoWeekday(),links:{facebook_id:"https://www.facebook.com/",twitter:"https://twitter.com/",instagram:"https://www.instagram.com/"}}},mounted:function(){var t=this;axios.post("/get-place",{fsq_id:this.$route.params.fsq_id}).then((function(a){t.place=a.data.place_details,t.photos=a.data.photos,t.tips=a.data.tips})).catch((function(a){(0,l.gP)(t,a)}))},methods:{moment:n()}};const o=(0,s(1900).Z)(i,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"section",staticStyle:{"padding-top":"74px"}},[s("div",{staticClass:"bg-white rounded-lg mb-4"},[s("div",{staticClass:"breadcrumbs"},[s("ul",[s("li",[s("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:{path:"/places/"+t.$route.params.place,query:t.$route.query}}},[t._v(t._s(t.$route.params.place.charAt(0).toUpperCase()+t.$route.params.place.slice(1)))])],1),t._v(" "),s("li",[t._v(t._s(t.place.name))])])])]),t._v(" "),s("div",{staticClass:"p-4 bg-white mb-4 rounded-lg"},[s("div",{staticClass:"mb-2"},[s("splide",{attrs:{slides:t.photos,options:{classes:{pagination:"splide__pagination hidden"},width:"100%",perPage:5,autoWidth:!0,rewind:!0,gap:"50px",padding:{left:"75px",right:"75px"},breakpoints:{1500:{perPage:4},1366:{perPage:3},768:{perPage:2},767:{perPage:1}}}}},t._l(t.photos,(function(t,a){return s("splide-slide",{key:"photo-"+a},[s("div",[s("a",{staticClass:"spotlight",attrs:{href:t.prefix+"original"+t.suffix}},[s("img",{attrs:{src:t.prefix+"300x300"+t.suffix,alt:""}})])])])})),1)],1),t._v(" "),t.place.stats&&t.place.stats.total_ratings?s("div",{staticClass:"flex flex-wrap content-center"},[s("h2",{staticClass:"my-2 mr-2"},[t._v(t._s(t.place.name))]),t._v(" "),s("p",{staticClass:"self-center m-0"},[s("span",{staticClass:"badge badge-success badge-lg"},[s("i",{staticClass:"fas fa-star mr-3"}),t._v(" "+t._s(t.place.rating)+" /\n                    10\n                ")]),t._v("\n                / "+t._s(t.place.stats.total_ratings)+" ratings\n            ")])]):t._e(),t._v(" "),s("p",t._l(t.place.categories,(function(a,e){return s("span",{key:"category-key-"+e},[t._v("\n                "+t._s(a.name)+t._s(e+1!=t.place.categories.length?",":"")+"\n            ")])})),0),t._v(" "),t.place.location&&t.place.location.address?s("p",{staticClass:"mb-0"},[t._v("\n            "+t._s(t.place.location.address)+", "+t._s(t.place.location.region)+"\n        ")]):t._e()]),t._v(" "),s("div",{staticClass:"grid grid-cols-5 gap-4"},[s("div",{staticClass:"\n                col-span-1\n                md:col-span-5\n                min-md:col-span-2\n                min-lg:col-span-1\n            "},[s("div",{staticClass:"p-4 bg-white mb-4 rounded-lg"},[t.place.hours&&t.place.hours.open_now?s("p",{class:{"font-bold":!0,"text-green-500":t.place.hours.open_now,"text-red-500":!t.place.hours.open_now}},[t._v("\n                    "+t._s(t.place.hours.open_now?"Open now":"Closed")+"\n                ")]):t._e(),t._v(" "),t.place.hours&&t.place.hours.regular&&t.place.hours.regular.filter((function(a){return a.day==t.today})).length>0?[s("p",{staticClass:"font-bold"},[t._v("\n                        "+t._s(t.moment().format("dddd"))+"\n                    ")]),t._v(" "),s("p",[s("i",{staticClass:"fas fa-clock mr-2"}),t._v(" "),t._l(t.place.hours.regular.filter((function(a){return a.day==t.today})),(function(a,e){return s("span",{key:"hour-"+e},[t._v("\n                            "+t._s(t.moment(a.open.match(/.{1,2}/g).join(":"),"HH:mm").format("hh:mm a"))+"\n                            -\n                            "+t._s(t.moment(a.close.match(/.{1,2}/g).join(":"),"HH:mm").format("hh:mm a"))+t._s(e+1!=t.place.hours.regular.filter((function(a){return a.day==t.today})).length?",":"")+"\n                        ")])}))],2)]:t._e(),t._v(" "),""!=t.place.tel?[s("p",[s("i",{staticClass:"fas fa-phone mr-2"}),t._v(t._s(t.place.tel))])]:t._e(),t._v(" "),t.place.website&&""!=t.place.website?[s("a",{staticClass:"link no-underline",attrs:{href:t.place.website,target:"_blank"}},[t._m(0)])]:t._e(),t._v(" "),t.place.social_media?t._l(Object.keys(t.place.social_media),(function(a,e){return s("a",{key:"soc-med-"+e,staticClass:"link no-underline",attrs:{href:""+t.links[a]+t.place.social_media[a],target:"_blank"}},[s("p",[s("i",{class:"fab fa-"+("facebook_id"==a?"facebook":a)+" mr-2"}),t._v(t._s(t.place.social_media[a])+"\n                        ")])])})):t._e()],2)]),t._v(" "),s("div",{staticClass:"\n                p-4\n                bg-white\n                mb-4\n                rounded-lg\n                md:col-span-5\n                min-md:col-span-3\n                min-lg:col-span-4\n                col-span-4\n            "},[t.place.stats&&t.place.stats.total_tips?s("h3",{staticClass:"my-2"},[t._v("\n                Tips - "+t._s(t.tips.length)+"/"+t._s(t.place.stats.total_tips)+"\n            ")]):t._e(),t._v(" "),t._l(t.tips,(function(a,e){return s("div",{key:"tip-"+e,staticStyle:{"border-bottom":"2px solid #c5c5c5"}},[s("p",[t._v("\n                    "+t._s(t.moment(a.created_at).format("MMMM DD, YYYY"))+"\n                ")]),t._v(" "),s("p",{staticClass:"text-lg pl-4 py-2",staticStyle:{"border-left":"2px solid rgb(59, 130, 246)"}},[t._v("\n                    "+t._s(a.text)+"\n                ")])])}))],2)])])}),[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[s("i",{staticClass:"fas fa-globe mr-2"}),t._v("Official\n                            Website\n                        ")])}],!1,null,null,null).exports}}]);