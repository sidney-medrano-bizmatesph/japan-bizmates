(self.webpackChunk=self.webpackChunk||[]).push([[523,467],{2428:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});var i=a(3645),s=a.n(i)()((function(t){return t[1]}));s.push([t.id,'.modal[data-v-64d3fc36]{position:fixed;top:0;right:0;left:0;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;max-width:22em;padding:1rem;border-radius:1rem;box-shadow:0 5px 5px rgba(0,0,0,.2);background:#fff;z-index:999;transform:none;overflow:auto;max-height:90vh;margin:5vh auto auto}@media (max-width:575.98px){.modal[data-v-64d3fc36]{min-width:calc(100% - 5px)}}@media (min-width:576px) and (max-width:767.98px){.modal[data-v-64d3fc36]{min-width:calc(100% - 20px)}}@media (min-width:768px) and (max-width:991.98px){.modal[data-v-64d3fc36]{min-width:calc(100% - 100px)}}@media (min-width:992px) and (max-width:1199.98px){.modal[data-v-64d3fc36]{min-width:calc(100% - 200px)}}@media (min-width:1200px){.modal[data-v-64d3fc36]{min-width:calc(100% - 600px)}}.modal h1[data-v-64d3fc36]{margin:0 0 1rem}.modal-overlay[data-v-64d3fc36]{content:"";position:absolute;position:fixed;top:0;right:0;bottom:0;left:0;z-index:998;background:#2c3e50;opacity:.6;cursor:pointer}.fade-enter-active[data-v-64d3fc36],.fade-leave-active[data-v-64d3fc36]{transition:opacity .4s linear}.fade-enter[data-v-64d3fc36],.fade-leave-to[data-v-64d3fc36]{opacity:0}.pop-enter-active[data-v-64d3fc36],.pop-leave-active[data-v-64d3fc36]{transition:transform .4s cubic-bezier(.5,0,.5,1),opacity .4s linear}.pop-enter[data-v-64d3fc36],.pop-leave-to[data-v-64d3fc36]{opacity:0;transform:scale(.3) translateY(-50%)}',""]);const n=s},3467:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>l});const i={props:{showModal:{type:Boolean,default:!1},afterHideModal:{type:Function},header:{type:String,default:""}},data:function(){return{showModalLocal:!1}},methods:{hideModal:function(){this.showModalLocal=!1,this.afterHideModal&&this.afterHideModal()}},watch:{showModal:function(t){this.showModalLocal=t}}};var s=a(3379),n=a.n(s),r=a(2428),o={insert:"head",singleton:!1};n()(r.Z,o);r.Z.locals;const l=(0,a(1900).Z)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("transition",{attrs:{name:"fade",appear:""}},[t.showModalLocal?a("div",{staticClass:"modal-overlay",on:{click:t.hideModal}}):t._e()]),t._v(" "),a("transition",{attrs:{name:"pop",appear:""}},[t.showModalLocal?a("div",{staticClass:"modal",attrs:{role:"dialog"}},[""!=t.header?a("div",{staticClass:"header flex justify-between items-center"},[a("h1",{staticClass:"text-xl"},[t._v(t._s(t.header))]),t._v(" "),a("button",{staticClass:"btn btn-transparent",on:{click:t.hideModal}},[t._v("\n                    x\n                ")])]):t._e(),t._v(" "),t._t("default")],2):t._e()])],1)}),[],!1,null,"64d3fc36",null).exports},8523:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>J});var i,s=a(629),n=a(8085),r=a(513);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}const l=(o(i={actions:{name:"actions",labelText:"Actions",filterable:!1,sortable:!1,wrapperClass:"w-2",thClass:"width-700px"},tax:{name:"tax",placeholder:"Tax",labelText:"Tax",type:"select",wrapperClass:"mb-2",validation:["required"]},tax_type_id:{name:"tax_type_id",placeholder:"Tax Percentage",labelText:"Tax Percentage",type:"select",wrapperClass:"mb-2",validation:["required"]},gsis:{name:"gsis",placeholder:"GSIS",labelText:"GSIS",type:"select",wrapperClass:"mb-2",validation:["required"]},sss:{name:"sss",placeholder:"SSS",labelText:"SSS",type:"select",wrapperClass:"mb-2",validation:["required"]},philhealth:{name:"philhealth",placeholder:"Philhealth",labelText:"Philhealth",type:"select",wrapperClass:"mb-2",validation:["required"]}},"philhealth",{name:"philhealth",placeholder:"Philhealth",labelText:"Philhealth",type:"select",wrapperClass:"mb-2",validation:["required"]}),o(i,"pagibig",{name:"pagibig",placeholder:"Pagibig",labelText:"Pagibig",type:"select",wrapperClass:"mb-2",validation:["required"]}),i);var u=a(3401);function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(Object(a),!0).forEach((function(e){p(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var m={variable_name:"contribution",variable_name_plural:"contributions",parent_url:"/employees",add_url:"/add-contribution/",edit_url:"/contributions/edit/",get_url:"/get-contribution",getter:"getContributions",setter:"setVarContributions",contrib_url:"/contributions/"},h={tax:0,tax_type_id:0,gsis:0,sss:0,philhealth:0,pagibig:0};const _={mounted:function(){var t=this;this.$route.path.includes(m.contrib_url)?(this.edit=!0,this.contributionGetter()):this.edit=!1,axios.post("/get-tax-type").then((function(e){t.setVarEmployees({menuItems:c(c({},t.employees.menuItems),{},{tax_types:e.data.result})})})).catch((function(e){(0,n.gP)(t,e)}))},data:function(){return c(c({page_variables:m,fields:l,successes:{},errors:{},that:this,submitting:!1,edit:!1},h),{},{employee_name:"",tax_types:[]})},computed:c({},(0,s.rn)(["auth","contributions","employees"])),methods:c(c({},(0,s.nv)([m.getter,m.setter,"setVarEmployees"])),{},{isEmpty:n.xb,onSubmit:function(){var t=this;if((0,n.xb)((0,u.Kf)(l,this))){var e=this.$route.params.pi_id,a=(0,n.Mh)(h,this);this.submitting=!0;var i=m.add_url;this.edit&&(i=m.edit_url,a.edit=this.edit,a.pi_id=e),axios.post(i,a).then((function(e){t.submitting=!1,(0,n.Am)(e.data.status,e.data.message),"success"==e.data.status&&((0,n.tY)(h,t),t.edit&&t.$router.push(m.parent_url),t[m.getter]({filter:t[m.variable_name_plural].filter,order:t[m.variable_name_plural].order,page:t[m.variable_name_plural].page,rowsPerPage:t[m.variable_name_plural].rowsPerPage,type:t[m.variable_name_plural].type}))})).catch((function(e){t.submitting=!1,(0,n.gP)(t,e)}))}},contributionGetter:function(){var t=this,e=this.$route.params.pi_id;(0,n._m)("Loading"),axios.post(m.get_url,{pi_id:e}).then((function(e){Swal.close(),"success"==e.data.status?((0,n.nm)(h,l,e.data.result,t),t.setVarEmployees({active_employee:e.data.employee})):((0,n.Am)(e.data.status,e.data.message),t.$router.push(m.parent_url))})).catch((function(e){Swal.close(),(0,n.gP)(t,e)}))}}),components:{Submitting:function(){return a.e(134).then(a.bind(a,6134))},CustomInput:function(){return a.e(422).then(a.bind(a,3541))},CustomButton:function(){return a.e(705).then(a.bind(a,6705))}},watch:{$route:function(){this.errors={},this.successes={},this.$route.path.includes(m.contrib_url)?(this.edit=!0,this.contributionGetter()):(this.edit=!1,(0,n.tY)(h,this))}}};var b=a(1900);const f=(0,b.Z)(_,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{"rounded p-4":!0,"bg-white":!t.edit,"bg-green-50":t.edit}},[a("div",{staticClass:"col-span-5 mb-5 flex items-center justify-between"},[a("div",{},[t._v("\n            Contributions\n            "),t.isEmpty(t.employees.active_employee)?t._e():a("span",[t._v("\n                of "+t._s(t.employees.active_employee.full_name))])])]),t._v(" "),a("form",{staticClass:"grid grid-cols-1 md:grid-cols-6 gap-2",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("CustomInput",{attrs:{inputData:{field:t.fields.tax,value:t.tax,that:t.that,menuItems:[{id:1,text:"ON"},{id:0,text:"OFF"}]}}}),t._v(" "),a("CustomInput",{attrs:{inputData:{field:t.fields.tax_type_id,value:t.tax_type_id,that:t.that,menuItems:t.employees.menuItems.tax_types.map((function(t){return{id:t.id,text:t.tax+"%"}}))}}}),t._v(" "),a("CustomInput",{attrs:{inputData:{field:t.fields.gsis,value:t.gsis,that:t.that,menuItems:[{id:1,text:"ON"},{id:0,text:"OFF"}]}}}),t._v(" "),a("CustomInput",{attrs:{inputData:{field:t.fields.sss,value:t.sss,that:t.that,menuItems:[{id:1,text:"ON"},{id:0,text:"OFF"}]}}}),t._v(" "),a("CustomInput",{attrs:{inputData:{field:t.fields.philhealth,value:t.philhealth,that:t.that,menuItems:[{id:1,text:"ON"},{id:0,text:"OFF"}]}}}),t._v(" "),a("CustomInput",{attrs:{inputData:{field:t.fields.pagibig,value:t.pagibig,that:t.that,menuItems:[{id:1,text:"ON"},{id:0,text:"OFF"}]}}}),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:!t.isEmpty(t.errors)||t.submitting}},[a("Submitting",{attrs:{submitting:t.submitting}})],1)],1)])}),[],!1,null,null,null).exports;const g={actions:{name:"actions",labelText:"Actions",filterable:!1,sortable:!1,wrapperClass:"w-2",thClass:"width-700px"},item:{name:"item",placeholder:"Item",labelText:"Item",type:"text",wrapperClass:"mb-2",validation:["required"]},amount:{name:"amount",placeholder:"Amount",labelText:"Amount",type:"text",wrapperClass:"mb-2",validation:["required"]},type:{name:"type",placeholder:"Type",labelText:"Type",type:"select",wrapperClass:"mb-2",validation:["required"]},status:{name:"status",placeholder:"Status",labelText:"Status",type:"select",wrapperClass:"mb-2",validation:["required"]}};function v(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function y(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?v(Object(a),!0).forEach((function(e){w(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function w(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var x={variable_name:"deductions_earning",variable_name_plural:"deductions_earnings",parent_url:"/employees",add_url:"/add-deductions_earning/",edit_url:"/deductions_earnings/edit/",get_url:"/get-deductions-earning",getter:"getDeductions_Earnings",setter:"setVarDeductions_Earnings",deduct_earning_url:"/deductions_earnings/"},C={item:"",amount:0,type:0,status:0};const O={mounted:function(){this.$route.path.includes(x.deduct_earning_url)&&this.deductions_earningGetter()},data:function(){return y(y({page_variables:x,fields:g,successes:{},errors:{},deductions_earnings_list:[],that:this,submitting:!1,edit:!1},C),{},{active_item:{}})},computed:y({},(0,s.rn)(["auth","deductions_earnings","employees"])),methods:y(y({},(0,s.nv)([x.getter,x.setter,"setVarEmployees"])),{},{isEmpty:n.xb,onSubmit:function(){var t=this;if((0,n.xb)((0,u.Kf)(g,this))){var e=this.$route.params.pi_id,a=(0,n.Mh)(C,this);this.submitting=!0;var i=x.add_url;this.edit?(a.edit=this.edit,a.pi_id=e,a.id=this.active_item.id):a.pi_id=e,axios.post(i,a).then((function(e){t.submitting=!1,(0,n.Am)(e.data.status,e.data.message),"success"==e.data.status&&((0,n.tY)(C,t),t.deductions_earningGetter(),t.edit=!1)})).catch((function(e){t.submitting=!1,(0,n.gP)(t,e)}))}},deductions_earningGetter:function(){var t=this,e=this.$route.params.pi_id;(0,n._m)("Loading"),axios.post(x.get_url,{pi_id:e}).then((function(e){Swal.close(),"success"==e.data.status?((0,n.nm)(C,g,e.data.result,t),t.deductions_earnings_list=e.data.result,t.setVarEmployees({active_employee:e.data.employee})):((0,n.Am)(e.data.status,e.data.message),t.$router.push(x.parent_url))})).catch((function(e){Swal.close(),(0,n.gP)(t,e)}))},edit_deductions_earning:function(t){this.active_item=t,0==this.edit?(this.edit=!0,this.item=t.item,this.amount=t.amount,this.type=t.type,this.status=t.status):(this.edit=!1,(0,n.tY)(C,this))}}),components:{Submitting:function(){return a.e(134).then(a.bind(a,6134))},CustomInput:function(){return a.e(422).then(a.bind(a,3541))},CustomButton:function(){return a.e(705).then(a.bind(a,6705))},CustomTable:function(){return a.e(432).then(a.bind(a,6432))},CustomFilter:function(){return a.e(547).then(a.bind(a,7547))}},watch:{$route:function(){this.errors={},this.successes={},this.$route.path.includes(x.deduct_earning_url)?this.deductions_earningGetter():(0,n.tY)(C,this)}}};const P=(0,b.Z)(O,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{"rounded p-4":!0,"bg-white":!t.edit,"bg-green-50":t.edit}},[a("div",{staticClass:"col-span-5 mb-5 flex items-center justify-between"},[a("div",{},[t._v("\n            Deductions | Earnings\n            "),t.isEmpty(t.employees.active_employee)?t._e():a("span",[t._v("\n                of "+t._s(t.employees.active_employee.full_name))])])]),t._v(" "),a("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("div",{staticClass:"grid grid-cols-1 gap-4"},[a("div",{staticClass:"bg-white-200"},[a("h1",{staticClass:"mb-5"},[a("strong",[t._v(t._s(t.edit?"EDIT":"ADD NEW"))])]),t._v(" "),a("div",{staticClass:"grid grid-cols-2 gap-4"},[a("CustomInput",{attrs:{inputData:{field:t.fields.item,value:t.item,that:t.that}}}),t._v(" "),a("CustomInput",{attrs:{inputData:{field:t.fields.amount,value:t.amount,that:t.that}}}),t._v(" "),a("CustomInput",{attrs:{inputData:{field:t.fields.type,value:t.type,that:t.that,menuItems:[{id:1,text:"Earning"},{id:0,text:"Deduction"}]}}}),t._v(" "),a("CustomInput",{attrs:{inputData:{field:t.fields.status,value:t.status,that:t.that,menuItems:[{id:1,text:"Active"},{id:0,text:"Inactive"}]}}})],1),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:!t.isEmpty(t.errors)||t.submitting}},[a("Submitting",{attrs:{submitting:t.submitting}})],1)]),t._v(" "),a("div",{},[t._m(0),t._v(" "),a("CustomFilter",{attrs:{fields:t.fields,getter:t.getter,setter:t.that[t.page_variables.setter],mainVariable:t.employees}}),t._v(" "),a("CustomTable",{attrs:{wrapper_style:"height: 300px; overflow-y: auto;",fields:{actions:{name:"actions",labelText:"Actions",filterable:!1,sortable:!1,wrapperClass:"w-2"},item:{name:"item",labelText:"Item",filterable:!1,sortable:!1,wrapperClass:"w-2"},amount:{name:"amount",labelText:"Amount",filterable:!1,sortable:!1,wrapperClass:"w-2"},type:{name:"type",labelText:"Type",filterable:!1,sortable:!0,wrapperClass:"w-2"},status:{name:"status",labelText:"Status",filterable:!1,sortable:!0,wrapperClass:"w-2"}},getter:function(){},setter:function(){},mainVariable:{process:"",order:{type:{type:"asc"}}},data:[],filterable:!1,sortable:!1}},t._l(t.deductions_earnings_list,(function(e,i){return a("tr",{key:i},[a("td",{staticClass:"bg-gray-200 px-4 py-4"},[t._v("\n                            "+t._s(i+1)+"\n                        ")]),t._v(" "),a("td",{staticClass:"px-4 py-4"},[a("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(){return t.edit_deductions_earning(e)}}},[t.active_item.item==e.item?[t._v("\n                                    "+t._s(t.edit?"Cancel Edit":"Edit")+"\n                                ")]:[t._v(" Edit ")]],2)]),t._v(" "),a("td",{staticClass:"px-4 py-4"},[t._v("\n                            "+t._s(e.item)+"\n                        ")]),t._v(" "),a("td",{staticClass:"px-4 py-4"},[t._v("\n                            "+t._s(e.amount)+"\n                        ")]),t._v(" "),a("td",{staticClass:"px-4 py-4"},[1==e.type?a("span",[t._v("Earning")]):t._e(),t._v(" "),0==e.type?a("span",[t._v("Deduction")]):t._e()]),t._v(" "),a("td",{staticClass:"px-4 py-4"},[1==e.status?a("span",[t._v("Active")]):t._e(),t._v(" "),0==e.status?a("span",[t._v("Inactive")]):t._e()])])})),0)],1)])])])}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",{staticClass:"mb-5"},[a("strong",[t._v("Earnings and Deductions")])])}],!1,null,null,null).exports;const S={monthly_salary:{name:"monthly_salary",placeholder:"Monthly Salary",labelText:"Monthly Salary",type:"text",wrapperClass:"mb-2",validation:["required"]}};function j(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function E(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?j(Object(a),!0).forEach((function(e){D(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function D(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var T={variable_name:"salary",variable_name_plural:"salaries",parent_url:"/employees",add_url:"/add-salary/",edit_url:"/salaries/edit/",get_url:"/get-salary",getter:"getSalaries",setter:"setVarSalaries",contrib_url:"/salaries/"},$={monthly_salary:0};const I={mounted:function(){this.$route.path.includes(T.contrib_url)?(this.edit=!0,this.salaryGetter()):this.edit=!1},data:function(){return E(E({page_variables:T,fields:S,successes:{},errors:{},that:this,submitting:!1,edit:!1},$),{},{employee_name:""})},computed:E({},(0,s.rn)(["auth","salaries","employees"])),methods:E(E({},(0,s.nv)([T.getter,T.setter,"setVarEmployees"])),{},{isEmpty:n.xb,onSubmit:function(){var t=this;if((0,n.xb)((0,u.Kf)(S,this))){var e=this.$route.params.pi_id,a=(0,n.Mh)($,this);this.submitting=!0;var i=T.add_url;this.edit?(a.edit=this.edit,a.pi_id=e):a.pi_id=e,axios.post(i,a).then((function(e){t.submitting=!1,(0,n.Am)(e.data.status,e.data.message),"success"==e.data.status&&t[T.getter]({filter:t[T.variable_name_plural].filter,order:t[T.variable_name_plural].order,page:t[T.variable_name_plural].page,rowsPerPage:t[T.variable_name_plural].rowsPerPage,type:t[T.variable_name_plural].type})})).catch((function(e){t.submitting=!1,(0,n.gP)(t,e)}))}},salaryGetter:function(){var t=this,e=this.$route.params.pi_id;(0,n._m)("Loading"),axios.post(T.get_url,{pi_id:e}).then((function(e){Swal.close(),"success"==e.data.status?(console.log(e.data),e.data.result?t.monthly_salary=e.data.result.monthly_salary:t.monthly_salary=0,t.setVarEmployees({active_employee:e.data.employee})):((0,n.Am)(e.data.status,e.data.message),t.$router.push(T.parent_url))})).catch((function(e){Swal.close(),(0,n.gP)(t,e)}))}}),components:{Submitting:function(){return a.e(134).then(a.bind(a,6134))},CustomInput:function(){return a.e(422).then(a.bind(a,3541))},CustomButton:function(){return a.e(705).then(a.bind(a,6705))}},watch:{$route:function(){this.errors={},this.successes={},this.$route.path.includes(T.contrib_url)?(this.edit=!0,this.salaryGetter()):(this.edit=!1,(0,n.tY)($,this))}}};const M=(0,b.Z)(I,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{"rounded p-4":!0,"bg-white":!t.edit,"bg-green-50":t.edit}},[a("div",{staticClass:"col-span-5 mb-5 flex items-center justify-between"},[a("div",{},[t._v("\n            Salary\n            "),t.isEmpty(t.employees.active_employee)?t._e():a("span",[t._v("\n                of "+t._s(t.employees.active_employee.full_name))])])]),t._v(" "),a("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("div",{staticClass:"grid grid-cols-1 md:grid-cols-6 gap-2"},[a("CustomInput",{attrs:{inputData:{field:t.fields.monthly_salary,value:t.monthly_salary,that:t.that}}})],1),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:!t.isEmpty(t.errors)||t.submitting}},[a("Submitting",{attrs:{submitting:t.submitting}})],1)])])}),[],!1,null,null,null).exports;const A={loan_description:{name:"loan_description",placeholder:"Loan Description",labelText:"Loan Description",type:"text",wrapperClass:"mb-2",validation:["required"]},loan_amt:{name:"loan_amt",placeholder:"Loan Amount",labelText:"Loan Amount",type:"text",wrapperClass:"mb-2",validation:["required"]},monthly_amor:{name:"monthly_amor",placeholder:"Monthly Amortization",labelText:"Monthly Amortization",type:"text",wrapperClass:"mb-2",validation:["required"]},remaining_times_topay:{name:"remaining_times_topay",placeholder:"Times to pay",labelText:"Times to pay",type:"text",wrapperClass:"mb-2",validation:["required"]}};function L(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function k(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?L(Object(a),!0).forEach((function(e){V(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):L(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function V(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var G={variable_name:"loans",variable_name_plural:"loans",parent_url:"/employees",add_url:"/add-loan/",edit_url:"/loans/edit/",get_url:"/get-loan",getter:"getLoans",setter:"setVarLoans",loan_url:"/loans/"},q={loan_description:"",loan_amt:0,monthly_amor:0,remaining_times_topay:0};const F={mounted:function(){this.$route.path.includes(G.loan_url)&&this.loansGetter()},data:function(){return k(k({page_variables:G,fields:A,successes:{},errors:{},loans_list:[],that:this,submitting:!1,edit:!1},q),{},{active_item:{}})},computed:k({},(0,s.rn)(["auth","loans","employees"])),methods:k(k({},(0,s.nv)([G.getter,G.setter,"setVarEmployees"])),{},{isEmpty:n.xb,onSubmit:function(){var t=this;if((0,n.xb)((0,u.Kf)(A,this))){var e=this.$route.params.pi_id,a=(0,n.Mh)(q,this);this.submitting=!0;var i=G.add_url;this.edit?(a.edit=this.edit,a.pi_id=e,a.id=this.active_item.id):a.pi_id=e,axios.post(i,a).then((function(e){t.submitting=!1,(0,n.Am)(e.data.status,e.data.message),"success"==e.data.status&&((0,n.tY)(q,t),t.loansGetter(),t.edit=!1)})).catch((function(e){t.submitting=!1,(0,n.gP)(t,e)}))}},loansGetter:function(){var t=this,e=this.$route.params.pi_id;(0,n._m)("Loading"),axios.post(G.get_url,{pi_id:e}).then((function(e){Swal.close(),"success"==e.data.status?((0,n.nm)(q,A,e.data.result,t),t.loans_list=e.data.result,t.setVarEmployees({active_employee:e.data.employee})):((0,n.Am)(e.data.status,e.data.message),t.$router.push(G.parent_url))})).catch((function(e){Swal.close(),(0,n.gP)(t,e)}))},edit_loans:function(t){this.active_item=t,console.log(t),0==this.edit?(this.edit=!0,this.loan_description=t.loan_description,this.loan_amt=t.loan_amt,this.monthly_amor=t.monthly_amor,this.remaining_times_topay=t.remaining_times_topay):(this.edit=!1,(0,n.tY)(q,this))}}),components:{Submitting:function(){return a.e(134).then(a.bind(a,6134))},CustomInput:function(){return a.e(422).then(a.bind(a,3541))},CustomButton:function(){return a.e(705).then(a.bind(a,6705))},CustomTable:function(){return a.e(432).then(a.bind(a,6432))}},watch:{$route:function(){this.errors={},this.successes={},this.$route.path.includes(G.loan_url)?this.loansGetter():(0,n.tY)(q,this)}}};const Y=(0,b.Z)(F,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{"rounded p-4":!0,"bg-white":!t.edit,"bg-green-50":t.edit}},[a("div",{staticClass:"col-span-5 mb-5 flex items-center justify-between"},[a("div",{},[t._v("\n            Loans\n            "),t.isEmpty(t.employees.active_employee)?t._e():a("span",[t._v("\n                of "+t._s(t.employees.active_employee.full_name))])])]),t._v(" "),a("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("div",{staticClass:"grid grid-cols-1 gap-4"},[a("div",{staticClass:"bg-white-200"},[a("h1",{staticClass:"mb-5"},[a("strong",[t._v(t._s(t.edit?"EDIT":"ADD NEW"))])]),t._v(" "),a("div",{staticClass:"grid grid-cols-2 gap-4"},[a("CustomInput",{attrs:{inputData:{field:t.fields.loan_description,value:t.loan_description,that:t.that}}}),t._v(" "),a("CustomInput",{attrs:{inputData:{field:t.fields.loan_amt,value:t.loan_amt,that:t.that}}}),t._v(" "),a("CustomInput",{attrs:{inputData:{field:t.fields.monthly_amor,value:t.monthly_amor,that:t.that}}}),t._v(" "),a("CustomInput",{attrs:{inputData:{field:t.fields.remaining_times_topay,value:t.remaining_times_topay,that:t.that}}})],1),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:!t.isEmpty(t.errors)||t.submitting}},[a("Submitting",{attrs:{submitting:t.submitting}})],1)]),t._v(" "),a("div",{staticClass:"col-span-4"},[t._m(0),t._v(" "),a("CustomTable",{attrs:{wrapper_style:"height: 300px; overflow-y: auto;",fields:{actions:{name:"actions",labelText:"Actions",filterable:!1,sortable:!1,wrapperClass:"w-2"},loan_description:{name:"loan_description",labelText:"Loan Description",filterable:!1,sortable:!1,wrapperClass:"w-2"},loan_amt:{name:"loan_amt",labelText:"Amount",filterable:!1,sortable:!1,wrapperClass:"w-2"},monthly_amor:{name:"monthly_amor",labelText:"Monthly Amor",filterable:!1,sortable:!0,wrapperClass:"w-2"},remaining_times_topay:{name:"remaining_times_topay",labelText:"Times to pay",filterable:!1,sortable:!0,wrapperClass:"w-2"},status:{name:"status",labelText:"Status",filterable:!1,sortable:!0,wrapperClass:"w-2"}},getter:function(){},setter:function(){},mainVariable:{process:"",order:{type:{type:"asc"}}},data:[],sortable:!1,filterable:!1}},t._l(t.loans_list,(function(e,i){return a("tr",{key:i},[a("td",{staticClass:"bg-gray-200 px-4 py-4"},[t._v("\n                            "+t._s(i+1)+"\n                        ")]),t._v(" "),a("td",{staticClass:"px-4 py-4"},[a("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(){return t.edit_loans(e)}}},[t.active_item.id==e.id?[t._v("\n                                    "+t._s(t.edit?"Cancel Edit":"Edit")+"\n                                ")]:[t._v(" Edit ")]],2)]),t._v(" "),a("td",{staticClass:"px-4 py-4"},[t._v("\n                            "+t._s(e.loan_description)+"\n                        ")]),t._v(" "),a("td",{staticClass:"px-4 py-4"},[t._v("\n                            "+t._s(e.loan_amt)+"\n                        ")]),t._v(" "),a("td",{staticClass:"px-4 py-4"},[t._v("\n                            "+t._s(e.monthly_amor)+"\n                        ")]),t._v(" "),a("td",{staticClass:"px-4 py-4"},[t._v("\n                            "+t._s(e.remaining_times_topay)+"\n                        ")]),t._v(" "),a("td",{staticClass:"px-4 py-4"},[1==e.status?a("span",[t._v("Ongoing")]):t._e(),t._v(" "),0==e.status?a("span",[t._v("Paid")]):t._e()])])})),0)],1)])])])}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",{staticClass:"mb-5"},[a("strong",[t._v("Loan List")])])}],!1,null,null,null).exports;var Z,N=a(3467);function z(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function B(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?z(Object(a),!0).forEach((function(e){H(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):z(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function H(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var K={variable_name:"employee",variable_name_plural:"employees",parent_url:"/employees",add_url:"/add-employee/",edit_url:"/employees/edit/",get_url:"/get-employee/",getter:"getEmployees",setter:"setVarEmployees",contrib_url:"/contributions/",deduct_earning_url:"/deductions_earnings/",salary_setting_url:"/salaries/",loan_url:"/loans/"};const W={mounted:function(){this.getter(),this.$route.path.includes(K.contrib_url)?(this.toShow="contribution",console.log("on contrib")):this.$route.path.includes(K.deduct_earning_url)?(console.log("on deduct_earning_url"),this.toShow="deduct_earning_url"):this.$route.path.includes(K.salary_setting_url)?(console.log("on salary_setting_url"),this.toShow="salary_setting_url"):this.$route.path.includes(K.loan_url)&&(console.log("on loan_url"),this.toShow="loan_url")},data:function(){return{that:this,data:[],fields:r.Z,page_variables:K,toShow:""}},components:{Contributions:f,DeductionsEarnings:P,Salaries:M,Loans:Y,CustomTable:function(){return a.e(432).then(a.bind(a,6432))},CustomFilter:function(){return a.e(547).then(a.bind(a,7547))},CustomPagination:function(){return a.e(148).then(a.bind(a,9148))},CustomTableGroup:function(){return a.e(161).then(a.bind(a,2161))},CustomModal:N.default},computed:B({},(0,s.rn)(["employees"])),methods:B(B({},(0,s.nv)([K.getter,K.setter])),{},{hideModalEmployeesModal:function(){this.$router.push(K.parent_url)},getter:function(t){var e={filter:this[K.variable_name_plural].filter,order:this[K.variable_name_plural].order,page:this[K.variable_name_plural].page,rowsPerPage:this[K.variable_name_plural].rowsPerPage,type:this[K.variable_name_plural].type};(0,n.xb)(t)||(e=B(B({},e),t)),this[K.getter](e)},deleteButton:function(){alert("pakyu sidney")}}),watch:(Z={},H(Z,"".concat(K.variable_name_plural,".").concat(K.variable_name_plural),{immediate:!0,deept:!0,handler:function(t,e){var a=[],i=0,s=this;i=this[K.variable_name_plural].rowsPerPage*this[K.variable_name_plural].page,t.map((function(t,e){var n=[];++i,n=(0,r.M)(n,s,t,i),a.push(n)})),this.data=a}}),H(Z,"$route",(function(){this.errors={},this.successes={},this.$route.path.includes(K.contrib_url)?(this.toShow="contribution",console.log("on contrib")):this.$route.path.includes(K.deduct_earning_url)?(console.log("on deduct_earning_url"),this.toShow="deduct_earning_url"):this.$route.path.includes(K.salary_setting_url)?(console.log("on salary_setting_url"),this.toShow="salary_setting_url"):this.$route.path.includes(K.loan_url)?(console.log("on loan_url"),this.toShow="loan_url"):this.toShow=""})),Z)};const J=(0,b.Z)(W,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("CustomModal",{attrs:{showModal:""!=t.toShow,afterHideModal:t.hideModalEmployeesModal,header:t.$route.meta.topBar}},["contribution"==t.toShow?a("Contributions",{staticClass:"mb-5"}):t._e(),t._v(" "),"deduct_earning_url"==t.toShow?a("DeductionsEarnings",{staticClass:"mb-5"}):t._e(),t._v(" "),"salary_setting_url"==t.toShow?a("Salaries",{staticClass:"mb-5"}):t._e(),t._v(" "),"loan_url"==t.toShow?a("Loans",{staticClass:"mb-5"}):t._e()],1),t._v(" "),a("CustomTableGroup",{attrs:{tableGroupData:{tableName:"Employees Table"}}},[a("CustomFilter",{attrs:{fields:t.fields,getter:t.getter,setter:t.that[t.page_variables.setter],mainVariable:t.employees}}),t._v(" "),a("CustomTable",{attrs:{fields:t.fields,getter:t.getter,setter:t.that[t.page_variables.setter],mainVariable:t.employees,data:t.data}}),t._v(" "),a("CustomPagination",{attrs:{getter:t.getter,setter:t.that[t.page_variables.setter],mainVariable:t.employees}})],1)],1)}),[],!1,null,null,null).exports}}]);