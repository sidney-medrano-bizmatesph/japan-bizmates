(self.webpackChunk=self.webpackChunk||[]).push([[888],{2888:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>c});var n=i(5273),s=i(3401);function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function u(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var o={study_guides_title:{type:"tiny",name:"study_guides_title",labelText:"Title",placeholder:"Title",wrapperClass:"mb-2 mr-2 inline-block",validation:["required"]},study_guides_description:{type:"tiny",name:"study_guides_description",labelText:"Description",placeholder:"Description",wrapperClass:"mb-2 mr-2 inline-block",validation:["required"]}},d={study_guides_title:"",study_guides_description:""};const a={data:function(){return function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){u(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({successes:{},errors:{},that:this,submitting:!1,fields:o},d)},computed:{},mounted:function(){this.getter()},methods:{isEmpty:n.xb,getter:function(){var t=this;axios.post("/study-guide-initialize").then((function(e){t.study_guides_title=e.data.title,t.study_guides_description=e.data.description})).catch((function(e){(0,n.gP)(t,e)}))},onSubmit:function(){var t=this;if((0,n.xb)((0,s.Kf)(o,this))){var e={title:this.study_guides_title,description:this.study_guides_description};this.submitting=!0,axios.post("/study-guide-cms",e).then((function(e){t.submitting=!1,(0,n.Am)(e.data.status,e.data.message)})).catch((function(e){t.submitting=!1,(0,n.gP)(t,e)}))}}},components:{FormAndTable:function(){return i.e(118).then(i.bind(i,9118))},CustomInput:function(){return i.e(649).then(i.bind(i,1649))},Submitting:function(){return i.e(134).then(i.bind(i,6134))},StudyGuideVideos:function(){return Promise.resolve().then(i.bind(i,2857))}}};const c=(0,i(1900).Z)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("FormAndTable",{scopedSlots:t._u([{key:"form",fn:function(){return[i("div",{class:{"rounded p-4 transition-all duration-300 bg-white shadow-lg mb-8":!0}},[i("h1",{staticClass:"text-4xl mb-4"},[t._v("Study Guides")]),t._v(" "),i("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[i("div",{staticClass:"grid grid-cols-1 min-md:grid-cols-2 gap-x-5"},[i("CustomInput",{attrs:{inputData:{field:t.fields.study_guides_title,value:t.study_guides_title,that:t.that}}}),t._v(" "),i("CustomInput",{attrs:{inputData:{field:t.fields.study_guides_description,value:t.study_guides_description,that:t.that}}})],1),t._v(" "),i("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:!t.isEmpty(t.errors)||t.submitting}},[i("Submitting",{attrs:{submitting:t.submitting}},[t._v("Submit")])],1)])]),t._v(" "),i("StudyGuideVideos")]},proxy:!0}])})}),[],!1,null,null,null).exports}}]);