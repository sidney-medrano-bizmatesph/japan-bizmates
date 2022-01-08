(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_CustomPagination_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomPagination.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomPagination.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions */ "./resources/js/functions/index.js");
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
      disabledFirstNext: true,
      disabledPrevLast: false
    };
  },
  props: ["rowsPerPageOptions", "mainVariable", "getter", "setter"],
  computed: {
    rowsPerPageOptionsLocal: function rowsPerPageOptionsLocal() {
      var mainVariable = this.mainVariable;
      var count = mainVariable.count;

      if (this.rowsPerPageOptions) {
        return this.rowsPerPageOptions;
      } else {
        var temp = 5;
        var toReturn = [5];
        var start = [5, 15];
        var i = 0;

        while (temp < count) {
          if (i < 2) {
            temp += start[i];
            toReturn.push(temp);
            i++;
          } else {
            temp += temp;

            if (temp > count) {
              temp = count;
            }

            toReturn.push(temp);
          }
        }

        return toReturn;
      }
    },
    pageOptions: function pageOptions() {
      var mainVariable = this.mainVariable;
      var pages = Math.ceil(mainVariable.count / mainVariable.rowsPerPage);
      var pageOptions = [];

      for (var i = 0; i < pages; i++) {
        pageOptions.push({
          id: i,
          name: i + 1
        });
      }

      return pageOptions;
    },
    pages: function pages() {
      var mainVariable = this.mainVariable;
      return Math.ceil(mainVariable.count / mainVariable.rowsPerPage);
    }
  },
  methods: {
    onRowsPerPageChange: function onRowsPerPageChange(event) {
      var value = event.target.value;
      var mainVariable = this.mainVariable,
          getter = this.getter,
          setter = this.setter;
      var localValue = value;
      setter({
        rowsPerPage: localValue,
        page: 0
      }); // this.$router.push({
      //     query: { ...this.$route.query, page: 0 + 1, rowsPerPage: localValue }
      // });

      getter({
        page: 0,
        rowsPerPage: localValue
      });
    },
    onPageChange: function onPageChange(event, type) {
      var mainVariable = this.mainVariable,
          getter = this.getter,
          setter = this.setter;
      var value = event.target.value;
      var count = mainVariable.count;

      var state = _defineProperty({}, "page", 0),
          pages = Math.ceil(count / mainVariable["rowsPerPage"]);

      switch (type) {
        case "first":
          state["page"] = 0;
          break;

        case "prev":
          if (mainVariable["page"] - 1 >= 0) state["page"] = mainVariable["page"] - 1;
          break;

        case "select":
          state["page"] = value;
          break;

        case "next":
          if (mainVariable["page"] + 1 < pages) state["page"] = mainVariable["page"] + 1;
          break;

        case "last":
          state["page"] = pages - 1;
          break;
      }

      if (state["page"] == 0) {
        this.disabledFirstNext = true;
      } else {
        this.disabledFirstNext = false;
      }

      if (state["page"] == pages - 1) {
        this.disabledPrevLast = true;
      } else {
        this.disabledPrevLast = false;
      } // this.$router.push({
      //     query: { ...this.$route.query, page: state.page + 1 }
      // });


      setter({
        page: state.page
      });
      getter({
        page: state.page
      });
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./resources/js/components/CustomPagination.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/CustomPagination.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomPagination_vue_vue_type_template_id_e8f72a54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomPagination.vue?vue&type=template&id=e8f72a54& */ "./resources/js/components/CustomPagination.vue?vue&type=template&id=e8f72a54&");
/* harmony import */ var _CustomPagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomPagination.vue?vue&type=script&lang=js& */ "./resources/js/components/CustomPagination.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CustomPagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CustomPagination_vue_vue_type_template_id_e8f72a54___WEBPACK_IMPORTED_MODULE_0__.render,
  _CustomPagination_vue_vue_type_template_id_e8f72a54___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CustomPagination.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/CustomPagination.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/CustomPagination.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomPagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomPagination.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomPagination.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomPagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/CustomPagination.vue?vue&type=template&id=e8f72a54&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/CustomPagination.vue?vue&type=template&id=e8f72a54& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomPagination_vue_vue_type_template_id_e8f72a54___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomPagination_vue_vue_type_template_id_e8f72a54___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomPagination_vue_vue_type_template_id_e8f72a54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomPagination.vue?vue&type=template&id=e8f72a54& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomPagination.vue?vue&type=template&id=e8f72a54&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomPagination.vue?vue&type=template&id=e8f72a54&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomPagination.vue?vue&type=template&id=e8f72a54& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "custom-pagination mt-1 flex flex-wrap items-end" },
    [
      _c(
        "div",
        {
          staticClass: "rounded rounded-r-none bg-gray-200",
          staticStyle: { padding: "6.5px" }
        },
        [
          _c(
            "label",
            {
              staticClass: "input-group-text",
              attrs: { for: "inputGroupSelect01" }
            },
            [
              _vm.mainVariable.rowsPerPage != -1
                ? [
                    _vm._v(
                      "\n                Showing\n                " +
                        _vm._s(
                          _vm.mainVariable.count > 0
                            ? _vm.mainVariable.page *
                                _vm.mainVariable.rowsPerPage +
                                1
                            : 0
                        ) +
                        "\n                -\n                " +
                        _vm._s(
                          _vm.mainVariable.rowsPerPage *
                            (_vm.mainVariable.page + 1) >
                            _vm.mainVariable.count
                            ? _vm.mainVariable.count
                            : _vm.mainVariable.rowsPerPage *
                                (_vm.mainVariable.page + 1)
                        ) +
                        "\n                /\n            "
                    )
                  ]
                : [_vm._v(" All = ")],
              _vm._v("\n            " + _vm._s(_vm.mainVariable.count))
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "label",
            {
              staticClass: "input-group-text",
              attrs: { for: "inputGroupSelect01" }
            },
            [_vm._v("Rows Per Page")]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "select",
        {
          staticClass:
            "plain-form-control custom-select height-37px bg-gray-200",
          staticStyle: {
            width: "auto !important",
            "border-radius": "0 !important"
          },
          attrs: { name: "rowsPerPage", id: "rowsPerPage" },
          domProps: { value: _vm.mainVariable.rowsPerPage },
          on: { change: _vm.onRowsPerPageChange }
        },
        [
          _vm.rowsPerPageOptions != undefined
            ? _vm._l(_vm.rowsPerPageOptions, function(rowsPerPageOption) {
                return _c(
                  "option",
                  {
                    key: rowsPerPageOption,
                    domProps: { value: rowsPerPageOption }
                  },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(
                          rowsPerPageOption == -1 ? "All" : rowsPerPageOption
                        ) +
                        "\n            "
                    )
                  ]
                )
              })
            : _vm._l(_vm.rowsPerPageOptionsLocal, function(rowsPerPageOption) {
                return _c(
                  "option",
                  {
                    key: rowsPerPageOption,
                    domProps: { value: rowsPerPageOption }
                  },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(rowsPerPageOption) +
                        "\n            "
                    )
                  ]
                )
              })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-light filter-button m-0 rounded-none",
          attrs: { type: "button", disabled: _vm.mainVariable.page == 0 },
          on: {
            click: function(event) {
              return _vm.onPageChange(event, "first")
            }
          }
        },
        [_vm._v("\n        First\n    ")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-light filter-button m-0 rounded-none",
          attrs: { type: "button", disabled: _vm.mainVariable.page == 0 },
          on: {
            click: function(event) {
              return _vm.onPageChange(event, "prev")
            }
          }
        },
        [_vm._v("\n        Prev\n    ")]
      ),
      _vm._v(" "),
      _c(
        "select",
        {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.mainVariable.page,
              expression: "mainVariable.page"
            }
          ],
          staticClass:
            "plain-form-control custom-select height-37px bg-gray-200",
          staticStyle: {
            width: "auto !important",
            "border-radius": "0 !important"
          },
          attrs: { name: "page", id: "page" },
          on: {
            change: [
              function($event) {
                var $$selectedVal = Array.prototype.filter
                  .call($event.target.options, function(o) {
                    return o.selected
                  })
                  .map(function(o) {
                    var val = "_value" in o ? o._value : o.value
                    return val
                  })
                _vm.$set(
                  _vm.mainVariable,
                  "page",
                  $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                )
              },
              function(event) {
                return _vm.onPageChange(event, "select")
              }
            ]
          }
        },
        _vm._l(_vm.pageOptions, function(pageOption) {
          return _c(
            "option",
            { key: pageOption.id, domProps: { value: pageOption.id } },
            [_vm._v("\n            " + _vm._s(pageOption.name) + "\n        ")]
          )
        }),
        0
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-light filter-button m-0 rounded-none",
          attrs: {
            type: "button",
            disabled: _vm.mainVariable.page == _vm.pages - 1
          },
          on: {
            click: function(event) {
              return _vm.onPageChange(event, "next")
            }
          }
        },
        [_vm._v("\n        Next\n    ")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-light filter-button m-0 rounded-l-none",
          attrs: {
            type: "button",
            disabled: _vm.mainVariable.page == _vm.pages - 1
          },
          on: {
            click: function(event) {
              return _vm.onPageChange(event, "last")
            }
          }
        },
        [_vm._v("\n        Last\n    ")]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);