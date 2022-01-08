(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Payroll_AddPayroll_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Payroll/AddPayroll.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Payroll/AddPayroll.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "page_variables": () => (/* binding */ page_variables),
/* harmony export */   "fields": () => (/* reexport safe */ _FormFields_payrolls__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _FormFields_payrolls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../FormFields/payrolls */ "./resources/js/FormFields/payrolls.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../functions */ "./resources/js/functions/index.js");
/* harmony import */ var _functions_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../functions/validator */ "./resources/js/functions/validator.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
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





var page_variables = {
  variable_name: "payroll",
  variable_name_plural: "payrolls",
  parent_url: "/payrolls",
  add_url: "/add-payroll/",
  edit_url: "/payrolls/edit/",
  get_url: "/get-payroll/",
  getter: "getPayrolls",
  setter: "setVarPayrolls"
};

var field_values = {
  fund_id: "",
  applicable_month: "",
  applicable_year: "",
  payroll_type: "",
  quincena_half: ""
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mounted: function mounted() {
    var _this = this;

    this.yearItems.push(moment__WEBPACK_IMPORTED_MODULE_3___default()().subtract(1, "y").format("YYYY"));
    this.yearItems.push(moment__WEBPACK_IMPORTED_MODULE_3___default()().format("YYYY"));
    axios.post("/get-funds").then(function (res) {
      _this.menuItems = res.data.result;
    });
  },
  data: function data() {
    return _objectSpread(_objectSpread({
      fields: _FormFields_payrolls__WEBPACK_IMPORTED_MODULE_0__.default,
      page_variables: page_variables,
      successes: {},
      errors: {},
      that: this,
      submitting: false,
      edit: false
    }, field_values), {}, {
      menuItems: [],
      yearItems: [],
      monthItems: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      payrollTypeItems: ["Quincena", "Monthly"],
      quincenaPeriodItems: ["First Half", "Second Half"]
    });
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapState)(["auth", "payrolls"])),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapActions)([page_variables.getter, page_variables.setter])), {}, {
    isEmpty: _functions__WEBPACK_IMPORTED_MODULE_1__.isEmpty,
    cancel: function cancel() {
      this.$router.push(parent_url);
    },
    onSubmit: function onSubmit() {
      var _this2 = this;

      if ((0,_functions__WEBPACK_IMPORTED_MODULE_1__.isEmpty)((0,_functions_validator__WEBPACK_IMPORTED_MODULE_2__.validateAll)(_FormFields_payrolls__WEBPACK_IMPORTED_MODULE_0__.default.fund_id, _FormFields_payrolls__WEBPACK_IMPORTED_MODULE_0__.default.applicable_month, _FormFields_payrolls__WEBPACK_IMPORTED_MODULE_0__.default.applicable_year, _FormFields_payrolls__WEBPACK_IMPORTED_MODULE_0__.default.payroll_type, _FormFields_payrolls__WEBPACK_IMPORTED_MODULE_0__.default.quincena_half, this))) {
        this.submitting = true;
        axios.post("/add-payroll", {
          fund: this.fund_id.id,
          applicable_month: this.applicable_month.id,
          applicable_year: this.applicable_year.text,
          payroll_type: this.payroll_type.id,
          quincena_period: this.quincena_half.id
        }).then(function (res) {
          _this2.submitting = false;
          (0,_functions__WEBPACK_IMPORTED_MODULE_1__.toast)(res.data.status, res.data.message);

          if (res.data.status == "success") {
            (0,_functions__WEBPACK_IMPORTED_MODULE_1__.formClearer)(_FormFields_payrolls__WEBPACK_IMPORTED_MODULE_0__.default, _this2);
          }
        })["catch"](function (err) {
          _this2.submitting = false;
          (0,_functions__WEBPACK_IMPORTED_MODULE_1__.commonCatchBlock)(_this2, err);
        });
      }
    },
    payrollGetter: function payrollGetter() {
      var _this3 = this;

      var id = this.$route.params.id;
      axios.post(page_variables.get_url, {
        id: id
      }).then(function (res) {
        if (res.data.status == "success") {
          (0,_functions__WEBPACK_IMPORTED_MODULE_1__.formSetter)(field_values, _FormFields_payrolls__WEBPACK_IMPORTED_MODULE_0__.default, res.data.result, _this3);
        } else {
          (0,_functions__WEBPACK_IMPORTED_MODULE_1__.toast)(res.data.status, res.data.message);

          _this3.$router.push(page_variables.parent_url);
        }
      })["catch"](function (err) {
        (0,_functions__WEBPACK_IMPORTED_MODULE_1__.commonCatchBlock)(_this3, err);
      });
    }
  }),
  components: {
    Submitting: function Submitting() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_Submitting_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/Submitting */ "./resources/js/components/Submitting.vue"));
    },
    CustomInput: function CustomInput() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_CustomInput_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/CustomInput */ "./resources/js/components/CustomInput.vue"));
    },
    CustomButton: function CustomButton() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_CustomButton_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/CustomButton */ "./resources/js/components/CustomButton.vue"));
    }
  },
  watch: {
    $route: function $route() {
      this.errors = {};
      this.successes = {};

      if (this.$route.path.includes(page_variables.edit_url)) {
        this.edit = true;
        var id = this.$route.params.id;
        var variable_name = page_variables.variable_name_plural;

        if (!(0,_functions__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(this[variable_name][variable_name])) {
          var res = this[variable_name][variable_name].filter(function (res) {
            return res.id == id;
          })[0];
          (0,_functions__WEBPACK_IMPORTED_MODULE_1__.formSetter)(field_values, _FormFields_payrolls__WEBPACK_IMPORTED_MODULE_0__.default, res, this);
        } else this.payrollGetter();
      } else {
        this.edit = false;
        (0,_functions__WEBPACK_IMPORTED_MODULE_1__.formClearer)(field_values, this);
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/Payroll/AddPayroll.vue":
/*!***************************************************!*\
  !*** ./resources/js/pages/Payroll/AddPayroll.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fields": () => (/* reexport safe */ _AddPayroll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.fields),
/* harmony export */   "page_variables": () => (/* reexport safe */ _AddPayroll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.page_variables),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddPayroll_vue_vue_type_template_id_d5113252___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddPayroll.vue?vue&type=template&id=d5113252& */ "./resources/js/pages/Payroll/AddPayroll.vue?vue&type=template&id=d5113252&");
/* harmony import */ var _AddPayroll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddPayroll.vue?vue&type=script&lang=js& */ "./resources/js/pages/Payroll/AddPayroll.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AddPayroll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AddPayroll_vue_vue_type_template_id_d5113252___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddPayroll_vue_vue_type_template_id_d5113252___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Payroll/AddPayroll.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Payroll/AddPayroll.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/Payroll/AddPayroll.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "fields": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPayroll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.fields),
/* harmony export */   "page_variables": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPayroll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.page_variables)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPayroll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddPayroll.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Payroll/AddPayroll.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPayroll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/Payroll/AddPayroll.vue?vue&type=template&id=d5113252&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/Payroll/AddPayroll.vue?vue&type=template&id=d5113252& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPayroll_vue_vue_type_template_id_d5113252___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPayroll_vue_vue_type_template_id_d5113252___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPayroll_vue_vue_type_template_id_d5113252___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddPayroll.vue?vue&type=template&id=d5113252& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Payroll/AddPayroll.vue?vue&type=template&id=d5113252&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Payroll/AddPayroll.vue?vue&type=template&id=d5113252&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Payroll/AddPayroll.vue?vue&type=template&id=d5113252& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    {
      class: {
        "rounded p-4 transition-all duration-300": true,
        "bg-white": !_vm.edit,
        "bg-green-50": _vm.edit
      }
    },
    [
      _vm._v("\n    Create a Payroll\n    "),
      _c(
        "form",
        {
          staticClass: "mt-2",
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
            { staticClass: "grid grid-cols-3 gap-4" },
            [
              _c("CustomInput", {
                attrs: {
                  inputData: {
                    field: _vm.fields.fund_id,
                    value: _vm.fund_id,
                    that: _vm.that,
                    menuItems: _vm.menuItems.map(function(res) {
                      return {
                        id: res.id,
                        text: res.fund_name
                      }
                    })
                  }
                }
              }),
              _vm._v(" "),
              _c("CustomInput", {
                attrs: {
                  inputData: {
                    field: _vm.fields.applicable_month,
                    value: _vm.applicable_month,
                    that: _vm.that,
                    menuItems: _vm.monthItems.map(function(res, key) {
                      return {
                        id: key,
                        text: res
                      }
                    })
                  }
                }
              }),
              _vm._v(" "),
              _c("CustomInput", {
                attrs: {
                  inputData: {
                    field: _vm.fields.applicable_year,
                    value: _vm.applicable_year,
                    that: _vm.that,
                    menuItems: _vm.yearItems.map(function(res, key) {
                      return {
                        id: key,
                        text: res
                      }
                    })
                  }
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "grid grid-cols-2 gap-4" },
            [
              _c("CustomInput", {
                attrs: {
                  inputData: {
                    field: _vm.fields.payroll_type,
                    value: _vm.payroll_type,
                    that: _vm.that,
                    menuItems: _vm.payrollTypeItems.map(function(res, key) {
                      return {
                        id: key,
                        text: res
                      }
                    })
                  }
                }
              }),
              _vm._v(" "),
              _c("CustomInput", {
                attrs: {
                  inputData: {
                    field: _vm.fields.quincena_half,
                    value: _vm.quincena_half,
                    that: _vm.that,
                    menuItems: _vm.quincenaPeriodItems.map(function(res, key) {
                      return {
                        id: key,
                        text: res
                      }
                    })
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
              attrs: { disabled: !_vm.isEmpty(_vm.errors) || _vm.submitting }
            },
            [
              _c("Submitting", { attrs: { submitting: _vm.submitting } }, [
                _vm._v("Submit")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _vm.edit
            ? _c(
                "button",
                {
                  staticClass: "btn btn-danger",
                  attrs: { type: "button", disabled: _vm.submitting },
                  on: {
                    click: function() {
                      return _vm.$router.push(_vm.page_variables.parent_url)
                    }
                  }
                },
                [
                  _c("Submitting", { attrs: { submitting: _vm.submitting } }, [
                    _vm._v("Cancel")
                  ])
                ],
                1
              )
            : _vm._e()
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);