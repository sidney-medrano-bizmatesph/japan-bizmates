(self.webpackChunk=self.webpackChunk||[]).push([[432],{8432:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>f});var r=i(5273),s=i(3686),n=i(3401);function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function u(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){o(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var c={features_title:{type:"trumbowyg",name:"features_title",labelText:"Title",placeholder:"Title",wrapperClass:"mb-2 mr-2 inline-block",validation:["required"]},features_picture:{name:"features_picture",labelText:"File",accept:"image/*",type:"file",max_size:"50",multiple:!1,validation:["success"],sortable:!1,filterable:!1,hidden:!0},features_description:{type:"trumbowyg",name:"features_description",labelText:"Description",placeholder:"Description",wrapperClass:"mb-2 mr-2 inline-block",validation:["required"]}},l={features_title:"",features_description:"",features_picture:[]};const p={data:function(){return u(u({svgIcons:s.Z,successes:{},errors:{},that:this,submitting:!1,fields:c},l),{},{picture:"",trumbowygConfig:r.Nt})},computed:{preview:function(){return this.features_picture.length>0?URL.createObjectURL(file):""}},mounted:function(){this.getter()},methods:{isEmpty:r.xb,getter:function(){var t=this;axios.post("/features-initialize").then((function(e){t.features_title=e.data.title,$("#features_title").trumbowyg("html",e.data.title),t.features_description=e.data.description,$("#features_description").trumbowyg("html",e.data.description),t.picture=e.data.name_on_disk})).catch((function(e){(0,r.gP)(t,e)}))},onSubmit:function(){var t=this;if((0,r.xb)((0,n.Kf)(c,this))){var e=new FormData;this.features_picture.length>0&&e.append("picture",this.features_picture[0]),e.append("title",this.features_title),e.append("description",this.features_description),this.submitting=!0;(0,r._m)("Uploading"),axios.post("/features-cms",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){Swal.close(),t.submitting=!1,(0,r.Am)(e.data.status,e.data.message),"success"==e.data.status&&(t.getter(),t.features_picture=[])})).catch((function(e){Swal.close(),t.submitting=!1,(0,r.gP)(t,e)}))}}},components:{FormAndTable:function(){return i.e(118).then(i.bind(i,9118))},CustomInput:function(){return i.e(143).then(i.bind(i,143))},Submitting:function(){return i.e(134).then(i.bind(i,6134))},CustomFileInput:function(){return i.e(103).then(i.bind(i,7103))}}};const f=(0,i(1900).Z)(p,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("FormAndTable",{scopedSlots:t._u([{key:"form",fn:function(){return[i("div",{class:{"rounded p-4 transition-all duration-300 bg-white shadow-lg":!0}},[i("h1",{staticClass:"text-4xl mb-4"},[t._v("Features")]),t._v(" "),i("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[i("div",{staticClass:"grid grid-cols-1 min-md:grid-cols-2 gap-x-5"},[i("CustomInput",{attrs:{inputData:{field:t.fields.features_title,value:t.features_title,that:t.that,trumbowygConfig:t.trumbowygConfig}}}),t._v(" "),i("CustomInput",{attrs:{inputData:{field:t.fields.features_description,value:t.features_description,that:t.that,trumbowygConfig:t.trumbowygConfig}}}),t._v(" "),i("CustomFileInput",{attrs:{inputData:{field:t.fields.features_picture,that:t.that}}}),t._v(" "),i("div",{staticClass:"flex"},[""!=t.picture?i("div",[i("p",[t._v("Current picture")]),t._v(" "),i("a",{staticClass:"spotlight",attrs:{href:"/storage/webCMS/images/"+t.picture}},[i("img",{staticClass:"max-h-80",attrs:{src:"/storage/webCMS/images/"+t.picture,alt:""}})])]):t._e()])],1),t._v(" "),i("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:!t.isEmpty(t.errors)||t.submitting}},[i("Submitting",{attrs:{submitting:t.submitting}},[t._v("Submit")])],1)])])]},proxy:!0}])})}),[],!1,null,null,null).exports}}]);