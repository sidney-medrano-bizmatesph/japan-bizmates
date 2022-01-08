(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_ContactUs_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/ContactUs.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/ContactUs.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions */ "./resources/js/functions/index.js");
/* harmony import */ var _functions_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/validator */ "./resources/js/functions/validator.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var fields = {
  subject: {
    type: "text",
    name: "subject",
    labelText: "Subject",
    placeholder: "Subject",
    wrapperClass: "mb-2 mr-2",
    validation: ["required"]
  },
  content: {
    type: "tiny",
    name: "content",
    labelText: "Program inquiry or Payment concerns or Suggestions and Recommendations or Content Feedback :",
    placeholder: "Content",
    wrapperClass: "mb-2 mr-2",
    validation: ["required"]
  },
  name: {
    type: "text",
    name: "name",
    labelText: "Name",
    placeholder: "Name",
    wrapperClass: "mb-2 mr-2",
    validation: ["required"]
  },
  contact_number: {
    type: "text",
    name: "contact_number",
    labelText: "Contact number",
    placeholder: "Contact number",
    wrapperClass: "mb-2 mr-2",
    validation: ["required"]
  },
  email: {
    type: "text",
    name: "email",
    labelText: "Email",
    placeholder: "Email",
    wrapperClass: "mb-2 mr-2",
    validation: ["required"]
  } // files: {
  //     name: "files",
  //     labelText: "File",
  //     wrapperClassName: "col-md-6",
  //     accept: "application/pdf",
  //     type: "file",
  //     max_size: "50", //MB,
  //     acceptedExtensions: [".pdf"],
  //     multiple: false,
  //     validation: ["required"],
  //     sortable: false,
  //     filterable: false,
  //     hidden: true,
  // },

};
var field_values = {
  subject: "",
  content: "",
  name: "",
  contact_number: "",
  email: ""
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return _objectSpread({
      successes: {},
      errors: {},
      that: this,
      submitting: false,
      fields: fields
    }, field_values);
  },
  mounted: function mounted() {},
  methods: {
    isEmpty: _functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty,
    onSubmit: function onSubmit() {
      var _this = this;

      if ((0,_functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty)((0,_functions_validator__WEBPACK_IMPORTED_MODULE_1__.validateAll)(fields, this))) {
        var data = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.dataSetter)(field_values, this);
        this.submitting = true;
        axios.post("/contact-us", data).then(function (res) {
          _this.submitting = false;
          (0,_functions__WEBPACK_IMPORTED_MODULE_0__.toast)(res.data.status, res.data.message);
        })["catch"](function (err) {
          _this.submitting = false;
          (0,_functions__WEBPACK_IMPORTED_MODULE_0__.commonCatchBlock)(_this, err);
        });
      }
    }
  },
  components: {
    FormAndTable: function FormAndTable() {
      return __webpack_require__.e(/*! import() */ "resources_js_layouts_FormAndTable_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../layouts/FormAndTable.vue */ "./resources/js/layouts/FormAndTable.vue"));
    },
    CustomInput: function CustomInput() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_CustomInput_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../components/CustomInput */ "./resources/js/components/CustomInput.vue"));
    },
    Submitting: function Submitting() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_Submitting_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../components/Submitting */ "./resources/js/components/Submitting.vue"));
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/ContactUs.vue":
/*!******************************************!*\
  !*** ./resources/js/pages/ContactUs.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ContactUs_vue_vue_type_template_id_109060a5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContactUs.vue?vue&type=template&id=109060a5& */ "./resources/js/pages/ContactUs.vue?vue&type=template&id=109060a5&");
/* harmony import */ var _ContactUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactUs.vue?vue&type=script&lang=js& */ "./resources/js/pages/ContactUs.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ContactUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ContactUs_vue_vue_type_template_id_109060a5___WEBPACK_IMPORTED_MODULE_0__.render,
  _ContactUs_vue_vue_type_template_id_109060a5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/ContactUs.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/ContactUs.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/ContactUs.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ContactUs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/ContactUs.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/ContactUs.vue?vue&type=template&id=109060a5&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/ContactUs.vue?vue&type=template&id=109060a5& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_template_id_109060a5___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_template_id_109060a5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_template_id_109060a5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ContactUs.vue?vue&type=template&id=109060a5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/ContactUs.vue?vue&type=template&id=109060a5&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/ContactUs.vue?vue&type=template&id=109060a5&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/ContactUs.vue?vue&type=template&id=109060a5& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("FormAndTable", {
    scopedSlots: _vm._u([
      {
        key: "form",
        fn: function() {
          return [
            _c("div", { staticClass: "section" }, [
              _c(
                "div",
                {
                  class: {
                    "rounded p-4 transition-all duration-300 bg-white my-6 shadow-lg min-lg:w-1/2 mx-auto": true
                  }
                },
                [
                  _c(
                    "h1",
                    {
                      staticClass: "text-4xl mb-1",
                      staticStyle: { "margin-bottom": "5px" }
                    },
                    [
                      _vm._v(
                        "\n                    Contact us\n                "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "form",
                    {
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.onSubmit($event)
                        }
                      }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "grid grid-cols-1 gap-x-5" },
                        [
                          _c("CustomInput", {
                            attrs: {
                              inputData: {
                                field: _vm.fields.name,
                                value: _vm.name,
                                that: _vm.that
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("CustomInput", {
                            attrs: {
                              inputData: {
                                field: _vm.fields.contact_number,
                                value: _vm.contact_number,
                                that: _vm.that
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("CustomInput", {
                            attrs: {
                              inputData: {
                                field: _vm.fields.email,
                                value: _vm.email,
                                that: _vm.that
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("CustomInput", {
                            attrs: {
                              inputData: {
                                field: _vm.fields.subject,
                                value: _vm.subject,
                                that: _vm.that
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("CustomInput", {
                            attrs: {
                              inputData: {
                                field: _vm.fields.content,
                                value: _vm.content,
                                that: _vm.that
                              }
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          attrs: {
                            type: "submit",
                            disabled: !_vm.isEmpty(_vm.errors) || _vm.submitting
                          }
                        },
                        [
                          _c(
                            "Submitting",
                            { attrs: { submitting: _vm.submitting } },
                            [_vm._v("Submit")]
                          )
                        ],
                        1
                      )
                    ]
                  )
                ]
              )
            ])
          ]
        },
        proxy: true
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);