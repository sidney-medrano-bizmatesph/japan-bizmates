(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Custommodal_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Custommodal.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Custommodal.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mounted: function mounted() {
    var openmodal = document.querySelectorAll(".modal-open");

    for (var i = 0; i < openmodal.length; i++) {
      openmodal[i].addEventListener("click", function (event) {
        event.preventDefault();
        this.toggleModal();
      });
    }

    var overlay = document.querySelector(".modal-overlay");
    overlay.addEventListener("click", this.toggleModal);
    var closemodal = document.querySelectorAll(".modal-close");

    for (var i = 0; i < closemodal.length; i++) {
      closemodal[i].addEventListener("click", this.toggleModal);
    }

    document.onkeydown = function (evt) {
      evt = evt || window.event;
      var isEscape = false;

      if ("key" in evt) {
        isEscape = evt.key === "Escape" || evt.key === "Esc";
      } else {
        isEscape = evt.keyCode === 27;
      }

      if (isEscape && document.body.classList.contains("modal-active")) {
        this.toggleModal();
      }
    };
  },
  methods: {
    toggleModal: function toggleModal() {
      var body = document.querySelector("body");
      var modal = document.querySelector(".modal");
      modal.classList.toggle("opacity-0");
      modal.classList.toggle("pointer-events-none");
      body.classList.toggle("modal-active");
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Custommodal.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/Custommodal.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Custommodal_vue_vue_type_template_id_cc1eca7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Custommodal.vue?vue&type=template&id=cc1eca7e& */ "./resources/js/components/Custommodal.vue?vue&type=template&id=cc1eca7e&");
/* harmony import */ var _Custommodal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Custommodal.vue?vue&type=script&lang=js& */ "./resources/js/components/Custommodal.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Custommodal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Custommodal_vue_vue_type_template_id_cc1eca7e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Custommodal_vue_vue_type_template_id_cc1eca7e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Custommodal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Custommodal.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Custommodal.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Custommodal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Custommodal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Custommodal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Custommodal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Custommodal.vue?vue&type=template&id=cc1eca7e&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Custommodal.vue?vue&type=template&id=cc1eca7e& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Custommodal_vue_vue_type_template_id_cc1eca7e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Custommodal_vue_vue_type_template_id_cc1eca7e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Custommodal_vue_vue_type_template_id_cc1eca7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Custommodal.vue?vue&type=template&id=cc1eca7e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Custommodal.vue?vue&type=template&id=cc1eca7e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Custommodal.vue?vue&type=template&id=cc1eca7e&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Custommodal.vue?vue&type=template&id=cc1eca7e& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "button",
      {
        staticClass:
          "modal-open bg-transparent border border-gray-500 hover:border-indigo-500 text-gray-500 hover:text-indigo-500 font-bold py-2 px-4 rounded-full mt-64"
      },
      [_vm._v("\n        Open Modal\n    ")]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "modal opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center"
      },
      [
        _c("div", {
          staticClass:
            "modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"
          },
          [
            _c(
              "div",
              {
                staticClass:
                  "modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "fill-current text-white",
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "18",
                      height: "18",
                      viewBox: "0 0 18 18"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        d:
                          "M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c("span", { staticClass: "text-sm" }, [_vm._v("(Esc)")])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "modal-content py-4 text-left px-6" }, [
              _c(
                "div",
                { staticClass: "flex justify-between items-center pb-3" },
                [
                  _c("p", { staticClass: "text-2xl font-bold" }, [
                    _vm._v("Simple Modal!")
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "modal-close cursor-pointer z-50" },
                    [
                      _c(
                        "svg",
                        {
                          staticClass: "fill-current text-black",
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "18",
                            height: "18",
                            viewBox: "0 0 18 18"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              d:
                                "M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                            }
                          })
                        ]
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c("p", [_vm._v("Modal content can go here")]),
              _vm._v(" "),
              _c("p", [_vm._v("...")]),
              _vm._v(" "),
              _c("p", [_vm._v("...")]),
              _vm._v(" "),
              _c("p", [_vm._v("...")]),
              _vm._v(" "),
              _c("p", [_vm._v("...")]),
              _vm._v(" "),
              _vm._m(0)
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex justify-end pt-2" }, [
      _c(
        "button",
        {
          staticClass:
            "px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2"
        },
        [_vm._v("\n                        Action\n                    ")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass:
            "modal-close px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400"
        },
        [_vm._v("\n                        Close\n                    ")]
      )
    ])
  }
]
render._withStripped = true



/***/ })

}]);