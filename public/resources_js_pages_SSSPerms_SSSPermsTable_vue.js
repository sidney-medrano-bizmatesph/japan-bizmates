(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_SSSPerms_SSSPermsTable_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/SSSPerms/SSSPermsTable.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/SSSPerms/SSSPermsTable.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "page_variables": () => (/* binding */ page_variables),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _FormFields_sssPerms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../FormFields/sssPerms */ "./resources/js/FormFields/sssPerms.js");
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
//
//
//
//
//
//
//
//
//
//
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
  variable_name: "sssPerm",
  variable_name_plural: "sssPerms",
  parent_url: "/sss-perm",
  add_url: "/add-sss-perm/",
  edit_url: "/sss-perm/edit/",
  get_url: "/get-sss-perm/",
  getter: "getSSSPerms",
  setter: "setVarSSSPerms"
};
var field_values = {
  from_range: "",
  to_range: "",
  er: "",
  ee: "",
  ec: "",
  total: ""
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mounted: function mounted() {
    this.getter();
  },
  data: function data() {
    return _objectSpread(_objectSpread({
      that: this,
      data: [],
      fields: _FormFields_sssPerms__WEBPACK_IMPORTED_MODULE_0__.default,
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
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapState)(["sssPerms"])),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapActions)([page_variables.getter, page_variables.setter])), {}, {
    isEmpty: _functions__WEBPACK_IMPORTED_MODULE_1__.isEmpty,
    onChangeForTotal: function onChangeForTotal(event) {
      var _event$target = event.target,
          value = _event$target.value,
          name = _event$target.name;
      var toAdd = "ee";

      if (name == toAdd) {
        toAdd = "er";
      }

      this.total = parseFloat(value) + parseFloat(this[toAdd]);
    },
    onSubmit: function onSubmit() {
      var _this = this;

      var data = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.dataSetter)(field_values, this);
      data.id = this.active_item;

      if ((0,_functions__WEBPACK_IMPORTED_MODULE_1__.isEmpty)((0,_functions_validator__WEBPACK_IMPORTED_MODULE_2__.validateAll)(_FormFields_sssPerms__WEBPACK_IMPORTED_MODULE_0__.default, this))) {
        axios.post(page_variables.add_url, data).then(function (res) {
          (0,_functions__WEBPACK_IMPORTED_MODULE_1__.toast)(res.data.status, res.data.message);

          if (res.data.status == "success") {
            _this.active_item = "";

            _this.getter();
          }
        })["catch"](function (err) {
          (0,_functions__WEBPACK_IMPORTED_MODULE_1__.commonCatchBlock)(_this, err);
        });
      }
    },
    editClick: function editClick(item) {
      if (this.active_item == item.id) {
        this.active_item = 0;
      } else this.active_item = item.id;

      this.successes = {};
      this.errors = {};
      this.from_range = item.from_range;
      this.to_range = item.to_range;
      this.er = item.er;
      this.ee = item.ee;
      this.ec = item.ec;
      this.total = item.total;
    },
    getter: function getter(data) {
      var defaultData = {
        filter: this.sssPerms.filter,
        order: this.sssPerms.order,
        page: this.sssPerms.page,
        rowsPerPage: this.sssPerms.rowsPerPage,
        type: this.sssPerms.type
      };

      if (!(0,_functions__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(data)) {
        defaultData = _objectSpread(_objectSpread({}, defaultData), data);
      }

      this[page_variables.getter](defaultData);
    }
  })
});

/***/ }),

/***/ "./resources/js/pages/SSSPerms/SSSPermsTable.vue":
/*!*******************************************************!*\
  !*** ./resources/js/pages/SSSPerms/SSSPermsTable.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "page_variables": () => (/* reexport safe */ _SSSPermsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.page_variables),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SSSPermsTable_vue_vue_type_template_id_284b4308___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SSSPermsTable.vue?vue&type=template&id=284b4308& */ "./resources/js/pages/SSSPerms/SSSPermsTable.vue?vue&type=template&id=284b4308&");
/* harmony import */ var _SSSPermsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SSSPermsTable.vue?vue&type=script&lang=js& */ "./resources/js/pages/SSSPerms/SSSPermsTable.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _SSSPermsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SSSPermsTable_vue_vue_type_template_id_284b4308___WEBPACK_IMPORTED_MODULE_0__.render,
  _SSSPermsTable_vue_vue_type_template_id_284b4308___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/SSSPerms/SSSPermsTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/SSSPerms/SSSPermsTable.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/SSSPerms/SSSPermsTable.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "page_variables": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SSSPermsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.page_variables)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SSSPermsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SSSPermsTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/SSSPerms/SSSPermsTable.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SSSPermsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/SSSPerms/SSSPermsTable.vue?vue&type=template&id=284b4308&":
/*!**************************************************************************************!*\
  !*** ./resources/js/pages/SSSPerms/SSSPermsTable.vue?vue&type=template&id=284b4308& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SSSPermsTable_vue_vue_type_template_id_284b4308___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SSSPermsTable_vue_vue_type_template_id_284b4308___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SSSPermsTable_vue_vue_type_template_id_284b4308___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SSSPermsTable.vue?vue&type=template&id=284b4308& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/SSSPerms/SSSPermsTable.vue?vue&type=template&id=284b4308&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/SSSPerms/SSSPermsTable.vue?vue&type=template&id=284b4308&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/SSSPerms/SSSPermsTable.vue?vue&type=template&id=284b4308& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
        { attrs: { tableGroupData: { tableName: "SSS" } } },
        [
          _c("CustomFilter", {
            attrs: {
              fields: _vm.fields,
              getter: _vm.getter,
              setter: _vm.that[_vm.page_variables.setter],
              mainVariable: _vm.sssPerms
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
                    mainVariable: _vm.sssPerms,
                    data: _vm.data,
                    no_count: true
                  }
                },
                _vm._l(_vm.sssPerms.sssPerms, function(item) {
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
                              _vm._v(_vm._s(item.from_range))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "px-4 py-4" }, [
                              _vm._v(_vm._s(item.to_range))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "px-4 py-4" }, [
                              _vm._v(_vm._s(item.er))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "px-4 py-4" }, [
                              _vm._v(_vm._s(item.ee))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "px-4 py-4" }, [
                              _vm._v(_vm._s(item.ec))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "px-4 py-4" }, [
                              _vm._v(_vm._s(item.total))
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
                                  {
                                    staticClass: "btn btn-primary m-0 btn-sm",
                                    attrs: {
                                      disabled: !_vm.isEmpty(_vm.errors)
                                    }
                                  },
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
                                      field: _vm.fields.from_range,
                                      value: _vm.from_range,
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
                                      field: _vm.fields.to_range,
                                      value: _vm.to_range,
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
                                      that: _vm.that,
                                      onChangeBefore: _vm.onChangeForTotal
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
                                      that: _vm.that,
                                      onChangeBefore: _vm.onChangeForTotal
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
                                      field: _vm.fields.ec,
                                      value: _vm.ec,
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
                                      field: _vm.fields.total,
                                      value: _vm.total,
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
              mainVariable: _vm.sssPerms
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