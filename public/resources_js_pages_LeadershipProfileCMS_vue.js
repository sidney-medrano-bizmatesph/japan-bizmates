(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_LeadershipProfileCMS_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/LeadershipProfileCMS.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/LeadershipProfileCMS.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions */ "./resources/js/functions/index.js");
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
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      our_team: {},
      our_teams: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    var that = this;
    axios.post("/web/our-team-initialize").then(function (res) {
      _this.our_team = res.data.our_team;
      _this.our_teams = res.data.our_teams;
    })["catch"](function (err) {
      (0,_functions__WEBPACK_IMPORTED_MODULE_0__.commonCatchBlock)(_this, err);
    });
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)(["general"]))
});

/***/ }),

/***/ "./resources/js/pages/LeadershipProfileCMS.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/LeadershipProfileCMS.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LeadershipProfileCMS_vue_vue_type_template_id_f03d2be4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LeadershipProfileCMS.vue?vue&type=template&id=f03d2be4& */ "./resources/js/pages/LeadershipProfileCMS.vue?vue&type=template&id=f03d2be4&");
/* harmony import */ var _LeadershipProfileCMS_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LeadershipProfileCMS.vue?vue&type=script&lang=js& */ "./resources/js/pages/LeadershipProfileCMS.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _LeadershipProfileCMS_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _LeadershipProfileCMS_vue_vue_type_template_id_f03d2be4___WEBPACK_IMPORTED_MODULE_0__.render,
  _LeadershipProfileCMS_vue_vue_type_template_id_f03d2be4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/LeadershipProfileCMS.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/LeadershipProfileCMS.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/LeadershipProfileCMS.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeadershipProfileCMS_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LeadershipProfileCMS.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/LeadershipProfileCMS.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeadershipProfileCMS_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/LeadershipProfileCMS.vue?vue&type=template&id=f03d2be4&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/LeadershipProfileCMS.vue?vue&type=template&id=f03d2be4& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LeadershipProfileCMS_vue_vue_type_template_id_f03d2be4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LeadershipProfileCMS_vue_vue_type_template_id_f03d2be4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LeadershipProfileCMS_vue_vue_type_template_id_f03d2be4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LeadershipProfileCMS.vue?vue&type=template&id=f03d2be4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/LeadershipProfileCMS.vue?vue&type=template&id=f03d2be4&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/LeadershipProfileCMS.vue?vue&type=template&id=f03d2be4&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/LeadershipProfileCMS.vue?vue&type=template&id=f03d2be4& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "content-partner-div mt-5" }, [
    _c(
      "div",
      {
        staticClass:
          "\n            section\n            content-partners\n            full-page\n            flex flex-wrap\n            content-center\n            pb-8\n        ",
        attrs: { id: "content-partners" }
      },
      [
        _c("div", { staticClass: "flex items-start w-full mb-8" }, [
          _c("img", {
            staticClass: "mr-4",
            staticStyle: { "max-height": "100px" },
            attrs: {
              src: "/storage/webCMS/images/" + _vm.general.round_logo,
              alt: ""
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "w-full" }, [
            _c("p", {
              staticClass:
                "\n                        text-4xl\n                        font-bold\n                        border-bottom-blue\n                        text-blue\n                        w-full\n                        mb-3\n                        mt-1\n                    ",
              domProps: { innerHTML: _vm._s(_vm.our_team.title) }
            }),
            _vm._v(" "),
            _c("p", {
              staticClass: "text-xl",
              domProps: { innerHTML: _vm._s(_vm.our_team.title) }
            })
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "\n                grid grid-cols-1\n                min-xl:grid-cols-3\n                gap-x-24 gap-y-7\n                min-xl:px-16\n                w-full\n            "
          },
          _vm._l(_vm.our_teams, function(our_team_member) {
            return _c(
              "div",
              {
                key: "our-team-member-" + our_team_member.id,
                staticClass:
                  "\n                    w-full\n                    bg-gray-100\n                    shadow-lg\n                    p-11\n                    mb-10\n                    transition-all\n                ",
                staticStyle: { "border-radius": "75px" }
              },
              [
                _c("center", [
                  _c("img", {
                    staticClass: "rounded-full h-60 mb-7",
                    attrs: {
                      src: "/storage/webCMS/images/" + our_team_member.picture,
                      alt: ""
                    }
                  }),
                  _vm._v(" "),
                  _c("p", {
                    staticClass: "text-blue text-2xl font-bold",
                    domProps: { innerHTML: _vm._s(our_team_member.name) }
                  }),
                  _vm._v(" "),
                  _c("p", {
                    staticClass: "text-red text-xl font-bold mb-6",
                    domProps: { innerHTML: _vm._s(our_team_member.position) }
                  })
                ])
              ],
              1
            )
          }),
          0
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);