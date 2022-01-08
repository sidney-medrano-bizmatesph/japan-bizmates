(self.webpackChunk=self.webpackChunk||[]).push([[933],{3401:(e,t,r)=>{"use strict";r.d(t,{Gu:()=>u,Kf:()=>m});var a=r(8085),n=r(538);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=function(e,t,r){var n=!1;return null==e.validation||(e.validation.every((function(s){var i=s.indexOf(":"),o=s,u=t;if(i>=0){o=s.substring(0,i);var m=s.substring(i+1)}switch(o){case"required":n=l(e.name,[{errorTrap:(0,a.xb)(u),errorText:e.messages&&e.messages.required?e.messages.required:e.labelText+" is required."}],r);break;case"max":n=l(e.name,[{errorTrap:u>parseInt(m),errorText:e.messages&&e.messages.max?e.messages.max:e.labelText+" should not be greater than "+m+"."}],r);break;case"min":n=l(e.name,[{errorTrap:u<parseInt(m),errorText:e.messages&&e.messages.min?e.messages.min:e.labelText+" should not be lesser than "+m+"."}],r);break;case"max_len":n=l(e.name,[{errorTrap:u.length>parseInt(m),errorText:e.messages&&e.messages.max_len?e.messages.max_len:e.labelText+" should not be greater than "+m+"."}],r);break;case"min_len":n=l(e.name,[{errorTrap:u.length<parseInt(m),errorText:e.messages&&e.messages.min_len?e.messages.min_len:e.labelText+" should not be less than "+m+"."}],r);break;case"number":n=l(e.name,[{errorTrap:isNaN(u),errorText:e.messages&&e.messages.min_len?e.messages.min_len:e.labelText+" should all be a number."}],r);break;case"s_equal":n=l(e.name,[{errorTrap:r[e.name]!=r[m],errorText:e.messages&&e.messages.s_equal?e.messages.s_equal:e.labelText+" should be equal to ".concat(r.fieldsValidation[m].labelText,".")}],r);break;case"email":n=l(e.name,[{errorTrap:!/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/.test(r[e.name]),errorText:e.messages&&e.messages.email?e.messages.email:e.labelText+" must be a valid email."}],r);break;case"success":n=l(e.name,[{errorTrap:!1,errorText:""}],r)}return!n})),n)},l=function(e,t,r){var s={};if(t.forEach((function(t){t.errorTrap&&(s={error:o({},e,t.errorText)})})),(0,a.xb)(s)){var u=r.errors;delete u[e],n.Z.set(r,"errors",i({},u)),n.Z.set(r,"successes",i(i({},r.successes),{},o({},e,!0)))}else{var l=r.successes;delete l[e],n.Z.set(r,"errors",i(i({},r.errors),s.error)),n.Z.set(r,"successes",i({},l))}return!(0,a.xb)(s)},m=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=[],s=t.additionalValidation;return(0,a.xb)(s)&&(s={}),Object.keys(e).map((function(a){null!=e[a].validation&&u(s[a]?i(i({},e[a]),{},{validation:s[a]}):e[a],null!=r[a]?r[a]:t[a],t)&&n.push(!0)})),n}},6783:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var a=r(3645),n=r.n(a)()((function(e){return e[1]}));n.push([e.id,".trumbowyg-editor p[data-v-88a6e846]{margin-bottom:10px!important;margin-top:0!important}",""]);const s=n},6933:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>g});var a=r(8085),n=r(3686),s=r(3401);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l={subject:{type:"text",name:"subject",labelText:"Subject",placeholder:"Subject",wrapperClass:"mb-2 mr-2",validation:["required"]},content:{type:"trumbowyg",name:"content",labelText:"Program inquiry or Payment concerns or Suggestions and Recommendations or Content Feedback :",placeholder:"Content",wrapperClass:"mb-2 mr-2",validation:["required"]},name:{type:"text",name:"name",labelText:"Name",placeholder:"Name",wrapperClass:"mb-2 mr-2",validation:["required"]},contact_number:{type:"text",name:"contact_number",labelText:"Contact number",placeholder:"Contact number",wrapperClass:"mb-2 mr-2",validation:["required"]},email:{type:"text",name:"email",labelText:"Email",placeholder:"Email",wrapperClass:"mb-2 mr-2",validation:["required"]}},m={subject:"",content:"",name:"",contact_number:"",email:""};const c={data:function(){return o(o({svgIcons:n.Z,successes:{},errors:{},that:this,submitting:!1,fields:l},m),{},{trumbowygConfig:a.Nt})},mounted:function(){},methods:{isEmpty:a.xb,onSubmit:function(){var e=this;if((0,a.xb)((0,s.Kf)(l,this))){var t=(0,a.Mh)(m,this);this.submitting=!0,axios.post("/contact-us",t).then((function(t){e.submitting=!1,(0,a.Am)(t.data.status,t.data.message)})).catch((function(t){e.submitting=!1,(0,a.gP)(e,t)}))}}},components:{FormAndTable:function(){return r.e(118).then(r.bind(r,9118))},CustomInput:function(){return r.e(731).then(r.bind(r,9581))},Submitting:function(){return r.e(134).then(r.bind(r,6134))}}};var b=r(3379),p=r.n(b),d=r(6783),f={insert:"head",singleton:!1};p()(d.Z,f);d.Z.locals;const g=(0,r(1900).Z)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("FormAndTable",{scopedSlots:e._u([{key:"form",fn:function(){return[r("div",{staticClass:"section"},[r("div",{class:{"rounded p-4 transition-all duration-300 bg-white my-6 shadow-lg min-lg:w-1/2 mx-auto prose max-w-none":!0}},[r("h1",{staticClass:"text-4xl mb-1",staticStyle:{"margin-bottom":"5px"}},[e._v("\n                    Contact us\n                ")]),e._v(" "),r("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[r("div",{staticClass:"grid grid-cols-1 gap-x-5"},[r("CustomInput",{attrs:{inputData:{field:e.fields.name,value:e.name,that:e.that}}}),e._v(" "),r("CustomInput",{attrs:{inputData:{field:e.fields.contact_number,value:e.contact_number,that:e.that}}}),e._v(" "),r("CustomInput",{attrs:{inputData:{field:e.fields.email,value:e.email,that:e.that}}}),e._v(" "),r("CustomInput",{attrs:{inputData:{field:e.fields.subject,value:e.subject,that:e.that}}}),e._v(" "),r("CustomInput",{attrs:{inputData:{field:e.fields.content,value:e.content,that:e.that,trumbowygConfig:Object.assign({},e.trumbowygConfig,{btns:[["undo","redo"],["strong","em"],["justifyLeft","justifyCenter","justifyRight","justifyFull"],["link"],["unorderedList","orderedList"],["removeformat"]]})}}})],1),e._v(" "),r("button",{staticClass:"btn btn-info",attrs:{type:"submit",disabled:!e.isEmpty(e.errors)||e.submitting}},[r("Submitting",{attrs:{submitting:e.submitting}},[e._v("Submit")])],1)])])])]},proxy:!0}])})}),[],!1,null,"88a6e846",null).exports}}]);