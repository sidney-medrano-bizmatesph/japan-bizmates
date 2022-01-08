(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_webCMS_StudyGuide_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/webCMS/StudyGuide.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/webCMS/StudyGuide.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var trumbowyg_dist_ui_icons_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! trumbowyg/dist/ui/icons.svg */ "./node_modules/trumbowyg/dist/ui/icons.svg");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../functions/validator'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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



var fields = {
  study_guides_title: {
    type: "trumbowyg",
    name: "study_guides_title",
    labelText: "Title",
    placeholder: "Title",
    wrapperClass: "mb-2 mr-2 inline-block",
    validation: ["required"]
  },
  study_guides_description: {
    type: "trumbowyg",
    name: "study_guides_description",
    labelText: "Description",
    placeholder: "Description",
    wrapperClass: "mb-2 mr-2 inline-block",
    validation: ["required"]
  }
};
var field_values = {
  study_guides_title: "",
  study_guides_description: ""
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return _objectSpread(_objectSpread({
      svgIcons: trumbowyg_dist_ui_icons_svg__WEBPACK_IMPORTED_MODULE_1__.default,
      successes: {},
      errors: {},
      that: this,
      submitting: false,
      fields: fields
    }, field_values), {}, {
      trumbowygConfig: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    });
  },
  computed: {},
  mounted: function mounted() {
    // $("#title").trumbowyg({ svgPath: svgIcons });
    this.getter();
  },
  methods: {
    isEmpty: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    getter: function getter() {
      var _this = this;

      axios.post("/study-guide-initialize").then(function (res) {
        _this.study_guides_title = res.data.title;
        $("#study_guides_title").trumbowyg("html", res.data.title);
        _this.study_guides_description = res.data.description;
        $("#study_guides_description").trumbowyg("html", res.data.description);
      })["catch"](function (err) {
        Object(function webpackMissingModule() { var e = new Error("Cannot find module '../functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_this, err);
      });
    },
    onSubmit: function onSubmit() {
      var _this2 = this;

      if (Object(function webpackMissingModule() { var e = new Error("Cannot find module '../functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../functions/validator'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(fields, this))) {
        var data = {
          title: this.study_guides_title,
          description: this.study_guides_description
        };
        this.submitting = true;
        axios.post("/study-guide-cms", data).then(function (res) {
          _this2.submitting = false;
          Object(function webpackMissingModule() { var e = new Error("Cannot find module '../functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(res.data.status, res.data.message); // if (res.data.status == "success") {
          //     this.getter();
          // }
        })["catch"](function (err) {
          _this2.submitting = false;
          Object(function webpackMissingModule() { var e = new Error("Cannot find module '../functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_this2, err);
        });
      }
    }
  },
  components: {
    FormAndTable: function FormAndTable() {
      return Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module '../layouts/FormAndTable.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; });
    },
    CustomInput: function CustomInput() {
      return Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module '../components/CustomInput'"); e.code = 'MODULE_NOT_FOUND'; throw e; });
    },
    Submitting: function Submitting() {
      return Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module '../components/Submitting'"); e.code = 'MODULE_NOT_FOUND'; throw e; });
    },
    StudyGuideVideos: function StudyGuideVideos() {
      return __webpack_require__.e(/*! import() */ "resources_js_pages_webCMS_StudyGuideVideos_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./StudyGuideVideos.vue */ "./resources/js/pages/webCMS/StudyGuideVideos.vue"));
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/webCMS/StudyGuide.vue":
/*!**************************************************!*\
  !*** ./resources/js/pages/webCMS/StudyGuide.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StudyGuide_vue_vue_type_template_id_7d569b34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StudyGuide.vue?vue&type=template&id=7d569b34& */ "./resources/js/pages/webCMS/StudyGuide.vue?vue&type=template&id=7d569b34&");
/* harmony import */ var _StudyGuide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StudyGuide.vue?vue&type=script&lang=js& */ "./resources/js/pages/webCMS/StudyGuide.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _StudyGuide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _StudyGuide_vue_vue_type_template_id_7d569b34___WEBPACK_IMPORTED_MODULE_0__.render,
  _StudyGuide_vue_vue_type_template_id_7d569b34___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/webCMS/StudyGuide.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/webCMS/StudyGuide.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/webCMS/StudyGuide.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StudyGuide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StudyGuide.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/webCMS/StudyGuide.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StudyGuide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/webCMS/StudyGuide.vue?vue&type=template&id=7d569b34&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/webCMS/StudyGuide.vue?vue&type=template&id=7d569b34& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StudyGuide_vue_vue_type_template_id_7d569b34___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StudyGuide_vue_vue_type_template_id_7d569b34___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StudyGuide_vue_vue_type_template_id_7d569b34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StudyGuide.vue?vue&type=template&id=7d569b34& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/webCMS/StudyGuide.vue?vue&type=template&id=7d569b34&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/webCMS/StudyGuide.vue?vue&type=template&id=7d569b34&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/webCMS/StudyGuide.vue?vue&type=template&id=7d569b34& ***!
  \************************************************************************************************************************************************************************************************************************/
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
            _c(
              "div",
              {
                class: {
                  "rounded p-4 transition-all duration-300 bg-white shadow-lg mb-8": true
                }
              },
              [
                _c("h1", { staticClass: "text-4xl mb-4" }, [
                  _vm._v("Study Guides")
                ]),
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
                      {
                        staticClass:
                          "grid grid-cols-1 min-md:grid-cols-2 gap-x-5"
                      },
                      [
                        _c("CustomInput", {
                          attrs: {
                            inputData: {
                              field: _vm.fields.study_guides_title,
                              value: _vm.study_guides_title,
                              that: _vm.that,
                              trumbowygConfig: _vm.trumbowygConfig
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("CustomInput", {
                          attrs: {
                            inputData: {
                              field: _vm.fields.study_guides_description,
                              value: _vm.study_guides_description,
                              that: _vm.that,
                              trumbowygConfig: _vm.trumbowygConfig
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
            ),
            _vm._v(" "),
            _c("StudyGuideVideos")
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