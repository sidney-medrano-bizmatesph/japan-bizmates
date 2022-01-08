(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Orgpayments_AddOrgpayment_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Orgpayments/AddOrgpayment.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Orgpayments/AddOrgpayment.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "page_variables": () => (/* binding */ page_variables),
/* harmony export */   "fields": () => (/* reexport safe */ _FormFields_orgpayments__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _FormFields_orgpayments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../FormFields/orgpayments */ "./resources/js/FormFields/orgpayments.js");
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




var page_variables = {
  variable_name: "orgpayment",
  variable_name_plural: "orgpayments",
  parent_url: "/organizations/payments",
  add_url: "/add-orgpayment",
  edit_url: "/organizations/payments/edit/",
  get_url: "/get-orgpayment/",
  getter: "getOrgpayments",
  setter: "setVarOrgpayments"
};

var field_values = {
  item: "",
  amount: 0,
  type: 1,
  status: 1
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mounted: function mounted() {
    var _this = this;

    var edit_url = "/organizations/payments/".concat(this.$route.params.id, "/edit/");

    if (this.$route.path.includes(edit_url)) {
      this.edit = true;
      this.orgpaymentGetter();
    } else {
      this.edit = false;
    }

    if (!(0,_functions__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(this.organizations.selectedOrg)) {
      this.selected_org = this.organizations.selectedOrg;
    } else {
      axios.post("/get-organization", {
        id: this.$route.params.id
      }).then(function (res) {
        if (res.data.status == "success") {
          _this.selected_org = res.data.result.org_name;
        } else {
          (0,_functions__WEBPACK_IMPORTED_MODULE_1__.toast)("error", res.data.message);

          _this.$router.push("/organizations");
        }
      })["catch"](function (err) {
        return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.commonCatchBlock)(_this, err);
      });
    } // let selected_org = this.organizations.organizations.filter(
    //     (res) => res.id == this.$route.params.id
    // );
    // if (!isEmpty(selected_org)) {
    //     this.selected_org = selected_org[0].org_name;
    // } else {
    //     axios
    //         .post("/get-organization", { id: this.$route.params.id })
    //         .then((res) => {
    //             if (res.data.status == "success") {
    //                 this.selected_org = res.data.result.org_name;
    //             } else {
    //                 toast("error", res.data.message);
    //                 this.$router.push("/organizations");
    //             }
    //         });
    // }

  },
  data: function data() {
    return _objectSpread(_objectSpread({
      fields: _FormFields_orgpayments__WEBPACK_IMPORTED_MODULE_0__.default,
      page_variables: page_variables,
      successes: {},
      errors: {},
      that: this,
      submitting: false,
      edit: false
    }, field_values), {}, {
      types: [{
        id: 1,
        text: "Addition"
      }, {
        id: 0,
        text: "Deduction"
      }],
      statuses: [{
        id: 1,
        text: "Active"
      }, {
        id: 0,
        text: "In-active"
      }],
      selected_org: ""
    });
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapState)(["auth", "orgpayments", "organizations"])),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapActions)([page_variables.getter, page_variables.setter])), {}, {
    isEmpty: _functions__WEBPACK_IMPORTED_MODULE_1__.isEmpty,
    cancel: function cancel() {
      this.$router.push(parent_url);
    },
    onSubmit: function onSubmit() {
      var _this2 = this;

      if ((0,_functions__WEBPACK_IMPORTED_MODULE_1__.isEmpty)((0,_functions_validator__WEBPACK_IMPORTED_MODULE_2__.validateAll)(_FormFields_orgpayments__WEBPACK_IMPORTED_MODULE_0__.default, this))) {
        var _this$$route$params = this.$route.params,
            id = _this$$route$params.id,
            payment_id = _this$$route$params.payment_id;
        var data = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.dataSetter)(field_values, this);
        this.submitting = true;
        var url = page_variables.add_url;

        if (this.edit) {
          url = page_variables.edit_url;
          data.edit = this.edit;
        }

        data.payment_id = payment_id;
        data.org_id = id;
        console.log(url);
        axios.post(url, data).then(function (res) {
          _this2.submitting = false;
          (0,_functions__WEBPACK_IMPORTED_MODULE_1__.toast)(res.data.status, res.data.message);

          if (res.data.status == "success") {
            (0,_functions__WEBPACK_IMPORTED_MODULE_1__.formClearer)(field_values, _this2);

            if (_this2.edit) {
              _this2.$router.push("/organizations/payments/".concat(_this2.$route.params.id));
            }

            _this2[page_variables.getter]({
              filter: _this2[page_variables.variable_name_plural].filter,
              order: _this2[page_variables.variable_name_plural].order,
              page: _this2[page_variables.variable_name_plural].page,
              rowsPerPage: _this2[page_variables.variable_name_plural].rowsPerPage,
              type: _this2[page_variables.variable_name_plural].type,
              org_id: id
            });
          }
        })["catch"](function (err) {
          _this2.submitting = false;
          (0,_functions__WEBPACK_IMPORTED_MODULE_1__.commonCatchBlock)(_this2, err);
        });
      }
    },
    orgpaymentGetter: function orgpaymentGetter() {
      var _this3 = this;

      var payment_id = this.$route.params.payment_id;
      axios.post(page_variables.get_url, {
        payment_id: payment_id
      }).then(function (res) {
        if (res.data.status == "success") {
          (0,_functions__WEBPACK_IMPORTED_MODULE_1__.formSetter)(field_values, _FormFields_orgpayments__WEBPACK_IMPORTED_MODULE_0__.default, res.data.result, _this3);
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
      var edit_url = "/organizations/payments/".concat(this.$route.params.id, "/edit/");

      if (this.$route.path.includes(edit_url)) {
        this.edit = true;
        var payment_id = this.$route.params.payment_id;
        console.log("SIDNEY", this.$route.params);
        var variable_name = page_variables.variable_name_plural;

        if (!(0,_functions__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(this[variable_name][variable_name])) {
          var res = this[variable_name][variable_name].filter(function (res) {
            return res.id == payment_id;
          })[0];
          (0,_functions__WEBPACK_IMPORTED_MODULE_1__.formSetter)(field_values, _FormFields_orgpayments__WEBPACK_IMPORTED_MODULE_0__.default, res, this);
        } else this.orgpaymentGetter();
      } else {
        this.edit = false;
        (0,_functions__WEBPACK_IMPORTED_MODULE_1__.formClearer)(field_values, this);
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/Orgpayments/AddOrgpayment.vue":
/*!**********************************************************!*\
  !*** ./resources/js/pages/Orgpayments/AddOrgpayment.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fields": () => (/* reexport safe */ _AddOrgpayment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.fields),
/* harmony export */   "page_variables": () => (/* reexport safe */ _AddOrgpayment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.page_variables),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddOrgpayment_vue_vue_type_template_id_479426cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddOrgpayment.vue?vue&type=template&id=479426cc& */ "./resources/js/pages/Orgpayments/AddOrgpayment.vue?vue&type=template&id=479426cc&");
/* harmony import */ var _AddOrgpayment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddOrgpayment.vue?vue&type=script&lang=js& */ "./resources/js/pages/Orgpayments/AddOrgpayment.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AddOrgpayment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AddOrgpayment_vue_vue_type_template_id_479426cc___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddOrgpayment_vue_vue_type_template_id_479426cc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Orgpayments/AddOrgpayment.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Orgpayments/AddOrgpayment.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/Orgpayments/AddOrgpayment.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "fields": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddOrgpayment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.fields),
/* harmony export */   "page_variables": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddOrgpayment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.page_variables)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddOrgpayment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddOrgpayment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Orgpayments/AddOrgpayment.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddOrgpayment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/Orgpayments/AddOrgpayment.vue?vue&type=template&id=479426cc&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/pages/Orgpayments/AddOrgpayment.vue?vue&type=template&id=479426cc& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddOrgpayment_vue_vue_type_template_id_479426cc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddOrgpayment_vue_vue_type_template_id_479426cc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddOrgpayment_vue_vue_type_template_id_479426cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddOrgpayment.vue?vue&type=template&id=479426cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Orgpayments/AddOrgpayment.vue?vue&type=template&id=479426cc&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Orgpayments/AddOrgpayment.vue?vue&type=template&id=479426cc&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Orgpayments/AddOrgpayment.vue?vue&type=template&id=479426cc& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
      "div",
      { staticClass: "flex flex-wrap justify-start" },
      [
        _c(
          "router-link",
          {
            staticClass: "btn btn-danger btn-sm",
            attrs: { to: "/organizations", tag: "button" }
          },
          [_vm._v("BACK")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        class: {
          "rounded p-4 transition-all duration-300": true,
          "bg-white": !_vm.edit,
          "bg-green-50": _vm.edit
        }
      },
      [
        _vm._v(
          "\n        Adding Payments for " +
            _vm._s(_vm.selected_org) +
            "\n        "
        ),
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
            _c("div", { staticClass: "grid grid-cols-4 gap-4 mt-4" }, [
              _c(
                "div",
                [
                  _c("CustomInput", {
                    attrs: {
                      inputData: {
                        field: _vm.fields.item,
                        value: _vm.item,
                        that: _vm.that
                      }
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                [
                  _c("CustomInput", {
                    attrs: {
                      inputData: {
                        field: _vm.fields.amount,
                        value: _vm.amount,
                        that: _vm.that
                      }
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                [
                  _c("CustomInput", {
                    attrs: {
                      inputData: {
                        field: _vm.fields.type,
                        value: _vm.type,
                        that: _vm.that,
                        menuItems: _vm.types.map(function(ref) {
                          var id = ref.id
                          var text = ref.text

                          return {
                            id: id,
                            text: text
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
                [
                  _c("CustomInput", {
                    attrs: {
                      inputData: {
                        field: _vm.fields.status,
                        value: _vm.status,
                        that: _vm.that,
                        menuItems: _vm.statuses.map(function(ref) {
                          var id = ref.id
                          var text = ref.text

                          return {
                            id: id,
                            text: text
                          }
                        })
                      }
                    }
                  })
                ],
                1
              )
            ]),
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
                        return _vm.$router.push(
                          "/organizations/payments/" + _vm.$route.params.id
                        )
                      }
                    }
                  },
                  [
                    _c(
                      "Submitting",
                      { attrs: { submitting: _vm.submitting } },
                      [_vm._v("Cancel")]
                    )
                  ],
                  1
                )
              : _vm._e()
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);