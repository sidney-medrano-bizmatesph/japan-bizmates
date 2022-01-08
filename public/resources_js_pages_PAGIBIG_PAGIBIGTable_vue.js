(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_PAGIBIG_PAGIBIGTable_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/PAGIBIG/PAGIBIGTable.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/PAGIBIG/PAGIBIGTable.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "page_variables": () => (/* binding */ page_variables),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _FormFields_pagibig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../FormFields/pagibig */ "./resources/js/FormFields/pagibig.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../functions */ "./resources/js/functions/index.js");
/* harmony import */ var _functions_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../functions/validator */ "./resources/js/functions/validator.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var page_variables = {
  variable_name: "pagibig",
  variable_name_plural: "pagibig",
  parent_url: "/pagibig",
  add_url: "/add-pagibig/",
  edit_url: "/pagibig/edit/",
  get_url: "/get-pagibig/",
  getter: "getPAGIBIG",
  setter: "setVarPAGIBIG"
};
var field_values = {
  monthly_from: "",
  monthly_to: "",
  ee: "",
  er: ""
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mounted: function mounted() {
    this.getter();
  },
  data: function data() {
    return _objectSpread(_objectSpread({
      that: this,
      data: [],
      fields: _FormFields_pagibig__WEBPACK_IMPORTED_MODULE_0__.default,
      page_variables: page_variables
    }, field_values), {}, {
      successes: {},
      errors: {},
      active_item: 0
    });
  },
  components: {
    CustomInput: function CustomInput() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_CustomInput_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/CustomInput */ "./resources/js/components/CustomInput.vue"));
    },
    CustomFilter: function CustomFilter() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_CustomFilter_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/CustomFilter */ "./resources/js/components/CustomFilter.vue"));
    },
    CustomTable: function CustomTable() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_CustomTable_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/CustomTable */ "./resources/js/components/CustomTable.vue"));
    },
    CustomPagination: function CustomPagination() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_CustomPagination_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/CustomPagination */ "./resources/js/components/CustomPagination.vue"));
    },
    CustomTableGroup: function CustomTableGroup() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_CustomTableGroup_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/CustomTableGroup */ "./resources/js/components/CustomTableGroup.vue"));
    }
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapState)(["pagibig"])),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapActions)([page_variables.getter, page_variables.setter])), {}, {
    onSubmit: function onSubmit() {
      var _this = this;

      var data = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.dataSetter)(field_values, this);
      data.id = this.active_item;
      axios.post(page_variables.add_url, data).then(function (res) {
        (0,_functions__WEBPACK_IMPORTED_MODULE_1__.toast)(res.data.status, res.data.message);

        if (res.data.status == "success") {
          _this.active_item = "";

          _this.getter();
        }
      })["catch"](function (err) {
        (0,_functions__WEBPACK_IMPORTED_MODULE_1__.commonCatchBlock)(_this, err);
      });
    },
    editClick: function editClick(item) {
      if (this.active_item == item.id) {
        this.active_item = 0;
      } else this.active_item = item.id;

      this.monthly_from = item.monthly_from;
      this.monthly_to = item.monthly_to;
      this.ee = item.ee;
      this.er = item.er;
    },
    getter: function getter(data) {
      var defaultData = {
        filter: this.pagibig.filter,
        order: this.pagibig.order,
        page: this.pagibig.page,
        rowsPerPage: this.pagibig.rowsPerPage,
        type: this.pagibig.type
      };

      if (!(0,_functions__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(data)) {
        defaultData = _objectSpread(_objectSpread({}, defaultData), data);
      }

      this[page_variables.getter](defaultData);
    }
  })
});

/***/ }),

/***/ "./resources/js/pages/PAGIBIG/PAGIBIGTable.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/PAGIBIG/PAGIBIGTable.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "page_variables": () => (/* reexport safe */ _PAGIBIGTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.page_variables),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PAGIBIGTable_vue_vue_type_template_id_748b4b2c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PAGIBIGTable.vue?vue&type=template&id=748b4b2c& */ "./resources/js/pages/PAGIBIG/PAGIBIGTable.vue?vue&type=template&id=748b4b2c&");
/* harmony import */ var _PAGIBIGTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PAGIBIGTable.vue?vue&type=script&lang=js& */ "./resources/js/pages/PAGIBIG/PAGIBIGTable.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _PAGIBIGTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _PAGIBIGTable_vue_vue_type_template_id_748b4b2c___WEBPACK_IMPORTED_MODULE_0__.render,
  _PAGIBIGTable_vue_vue_type_template_id_748b4b2c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/PAGIBIG/PAGIBIGTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/PAGIBIG/PAGIBIGTable.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/PAGIBIG/PAGIBIGTable.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "page_variables": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PAGIBIGTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.page_variables)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PAGIBIGTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PAGIBIGTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/PAGIBIG/PAGIBIGTable.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PAGIBIGTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/PAGIBIG/PAGIBIGTable.vue?vue&type=template&id=748b4b2c&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/PAGIBIG/PAGIBIGTable.vue?vue&type=template&id=748b4b2c& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PAGIBIGTable_vue_vue_type_template_id_748b4b2c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PAGIBIGTable_vue_vue_type_template_id_748b4b2c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PAGIBIGTable_vue_vue_type_template_id_748b4b2c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PAGIBIGTable.vue?vue&type=template&id=748b4b2c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/PAGIBIG/PAGIBIGTable.vue?vue&type=template&id=748b4b2c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/PAGIBIG/PAGIBIGTable.vue?vue&type=template&id=748b4b2c&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/PAGIBIG/PAGIBIGTable.vue?vue&type=template&id=748b4b2c& ***!
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
  return _c(
    "div",
    [
      _c(
        "CustomTableGroup",
        { attrs: { tableGroupData: { tableName: "PAGIBIG" } } },
        [
          _c("CustomFilter", {
            attrs: {
              fields: _vm.fields,
              getter: _vm.getter,
              setter: _vm.that[_vm.page_variables.setter],
              mainVariable: _vm.pagibig
            }
          }),
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
                "CustomTable",
                {
                  attrs: {
                    fields: _vm.fields,
                    getter: _vm.getter,
                    setter: _vm.that[_vm.page_variables.setter],
                    mainVariable: _vm.pagibig,
                    data: _vm.data,
                    no_count: true
                  }
                },
                _vm._l(_vm.pagibig.pagibig, function(item) {
                  return _c(
                    "tr",
                    {
                      key: item.id,
                      class: {
                        "border-b border-gray-200 py-10": true,
                        "bg-green-300": item.id == _vm.active_item,
                        "hover:bg-gray-100": item.id != _vm.active_item
                      },
                      on: {
                        dblclick: function($event) {
                          item.id == _vm.active_item
                            ? function() {}
                            : _vm.editClick(item)
                        }
                      }
                    },
                    [
                      _vm.active_item != item.id
                        ? [
                            _c("td", { staticClass: "px-4 py-4" }, [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-primary m-0 btn-sm",
                                  attrs: { type: "button" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return (function(event) {
                                        return _vm.editClick(item)
                                      })($event)
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                Edit\n                            "
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "px-4 py-4" }, [
                              _vm._v(_vm._s(item.monthly_from))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "px-4 py-4" }, [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(item.monthly_to) +
                                  "\n                        "
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "px-4 py-4" }, [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(item.er) +
                                  "\n                        "
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "px-4 py-4" }, [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(item.ee) +
                                  "\n                        "
                              )
                            ])
                          ]
                        : [
                            _c(
                              "td",
                              {
                                staticClass: "px-4 py-4",
                                staticStyle: { "white-space": "nowrap" }
                              },
                              [
                                _c(
                                  "button",
                                  { staticClass: "btn btn-primary m-0 btn-sm" },
                                  [
                                    _vm._v(
                                      "\n                                Save\n                            "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-danger m-0 btn-sm",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return (function(event) {
                                          return _vm.editClick(item)
                                        })($event)
                                      }
                                    }
                                  },
                                  [_c("i", { staticClass: "las la-times" })]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              { staticClass: "px-4 py-4" },
                              [
                                _c("CustomInput", {
                                  attrs: {
                                    inputData: {
                                      field: _vm.fields.monthly_from,
                                      value: _vm.monthly_from,
                                      that: _vm.that
                                    }
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              { staticClass: "px-4 py-4" },
                              [
                                _c("CustomInput", {
                                  attrs: {
                                    inputData: {
                                      field: _vm.fields.monthly_to,
                                      value: _vm.monthly_to,
                                      that: _vm.that
                                    }
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              { staticClass: "px-4 py-4" },
                              [
                                _c("CustomInput", {
                                  attrs: {
                                    inputData: {
                                      field: _vm.fields.er,
                                      value: _vm.er,
                                      that: _vm.that
                                    }
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              { staticClass: "px-4 py-4" },
                              [
                                _c("CustomInput", {
                                  attrs: {
                                    inputData: {
                                      field: _vm.fields.ee,
                                      value: _vm.ee,
                                      that: _vm.that
                                    }
                                  }
                                })
                              ],
                              1
                            )
                          ]
                    ],
                    2
                  )
                }),
                0
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("CustomPagination", {
            attrs: {
              getter: _vm.getter,
              setter: _vm.that[_vm.page_variables.setter],
              mainVariable: _vm.pagibig
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);