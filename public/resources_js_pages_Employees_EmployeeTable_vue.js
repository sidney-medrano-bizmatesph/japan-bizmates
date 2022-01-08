(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Employees_EmployeeTable_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomModal.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomModal.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    showModal: {
      type: Boolean,
      "default": false
    },
    afterHideModal: {
      type: Function
    },
    header: {
      type: String,
      "default": ""
    }
  },
  data: function data() {
    return {
      showModalLocal: false
    };
  },
  methods: {
    hideModal: function hideModal() {
      this.showModalLocal = false;

      if (this.afterHideModal) {
        this.afterHideModal();
      }
    }
  },
  watch: {
    showModal: function showModal(newValue) {
      this.showModalLocal = newValue;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Contributions/AddContributions.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Contributions/AddContributions.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "page_variables": () => (/* binding */ page_variables),
/* harmony export */   "fields": () => (/* reexport safe */ _FormFields_contributions__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _FormFields_contributions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../FormFields/contributions */ "./resources/js/FormFields/contributions.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../functions */ "./resources/js/functions/index.js");
/* harmony import */ var _functions_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../functions/validator */ "./resources/js/functions/validator.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  variable_name: "contribution",
  variable_name_plural: "contributions",
  parent_url: "/employees",
  add_url: "/add-contribution/",
  edit_url: "/contributions/edit/",
  get_url: "/get-contribution",
  getter: "getContributions",
  setter: "setVarContributions",
  contrib_url: "/contributions/"
};

var field_values = {
  tax: 0,
  tax_type_id: 0,
  gsis: 0,
  sss: 0,
  philhealth: 0,
  pagibig: 0
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mounted: function mounted() {
    var _this = this;

    if (this.$route.path.includes(page_variables.contrib_url)) {
      this.edit = true;
      this.contributionGetter();
    } else {
      this.edit = false;
    }

    axios.post("/get-tax-type").then(function (res) {
      _this.setVarEmployees({
        menuItems: _objectSpread(_objectSpread({}, _this.employees.menuItems), {}, {
          tax_types: res.data.result
        })
      });
    })["catch"](function (err) {
      (0,_functions__WEBPACK_IMPORTED_MODULE_1__.commonCatchBlock)(_this, err);
    });
  },
  data: function data() {
    return _objectSpread(_objectSpread({
      page_variables: page_variables,
      fields: _FormFields_contributions__WEBPACK_IMPORTED_MODULE_0__.default,
      successes: {},
      errors: {},
      that: this,
      submitting: false,
      edit: false
    }, field_values), {}, {
      employee_name: "",
      tax_types: []
    });
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapState)(["auth", "contributions", "employees"])),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapActions)([page_variables.getter, page_variables.setter, "setVarEmployees"])), {}, {
    isEmpty: _functions__WEBPACK_IMPORTED_MODULE_1__.isEmpty,
    onSubmit: function onSubmit() {
      var _this2 = this;

      if ((0,_functions__WEBPACK_IMPORTED_MODULE_1__.isEmpty)((0,_functions_validator__WEBPACK_IMPORTED_MODULE_2__.validateAll)(_FormFields_contributions__WEBPACK_IMPORTED_MODULE_0__.default, this))) {
        var pi_id = this.$route.params.pi_id;
        var data = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.dataSetter)(field_values, this);
        this.submitting = true;
        var url = page_variables.add_url;

        if (this.edit) {
          url = page_variables.edit_url;
          data.edit = this.edit;
          data.pi_id = pi_id;
        }

        axios.post(url, data).then(function (res) {
          _this2.submitting = false;
          (0,_functions__WEBPACK_IMPORTED_MODULE_1__.toast)(res.data.status, res.data.message);

          if (res.data.status == "success") {
            (0,_functions__WEBPACK_IMPORTED_MODULE_1__.formClearer)(field_values, _this2);

            if (_this2.edit) {
              _this2.$router.push(page_variables.parent_url);
            }

            _this2[page_variables.getter]({
              filter: _this2[page_variables.variable_name_plural].filter,
              order: _this2[page_variables.variable_name_plural].order,
              page: _this2[page_variables.variable_name_plural].page,
              rowsPerPage: _this2[page_variables.variable_name_plural].rowsPerPage,
              type: _this2[page_variables.variable_name_plural].type
            });
          }
        })["catch"](function (err) {
          _this2.submitting = false;
          (0,_functions__WEBPACK_IMPORTED_MODULE_1__.commonCatchBlock)(_this2, err);
        });
      }
    },
    contributionGetter: function contributionGetter() {
      var _this3 = this;

      var pi_id = this.$route.params.pi_id;
      (0,_functions__WEBPACK_IMPORTED_MODULE_1__.loader)("Loading");
      axios.post(page_variables.get_url, {
        pi_id: pi_id
      }).then(function (res) {
        Swal.close();

        if (res.data.status == "success") {
          (0,_functions__WEBPACK_IMPORTED_MODULE_1__.formSetter)(field_values, _FormFields_contributions__WEBPACK_IMPORTED_MODULE_0__.default, res.data.result, _this3);

          _this3.setVarEmployees({
            active_employee: res.data.employee
          });
        } else {
          (0,_functions__WEBPACK_IMPORTED_MODULE_1__.toast)(res.data.status, res.data.message);

          _this3.$router.push(page_variables.parent_url);
        }
      })["catch"](function (err) {
        Swal.close();
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

      if (this.$route.path.includes(page_variables.contrib_url)) {
        this.edit = true;
        this.contributionGetter();
      } else {
        this.edit = false;
        (0,_functions__WEBPACK_IMPORTED_MODULE_1__.formClearer)(field_values, this);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/DeductionsEarnings/DeductionEarnings.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/DeductionsEarnings/DeductionEarnings.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "page_variables": () => (/* binding */ page_variables),
/* harmony export */   "fields": () => (/* reexport safe */ _FormFields_deductions_earnings__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _FormFields_deductions_earnings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../FormFields/deductions_earnings */ "./resources/js/FormFields/deductions_earnings.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../functions */ "./resources/js/functions/index.js");
/* harmony import */ var _functions_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../functions/validator */ "./resources/js/functions/validator.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  variable_name: "deductions_earning",
  variable_name_plural: "deductions_earnings",
  parent_url: "/employees",
  add_url: "/add-deductions_earning/",
  edit_url: "/deductions_earnings/edit/",
  get_url: "/get-deductions-earning",
  getter: "getDeductions_Earnings",
  setter: "setVarDeductions_Earnings",
  deduct_earning_url: "/deductions_earnings/"
};

var field_values = {
  item: "",
  amount: 0,
  type: 0,
  status: 0
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mounted: function mounted() {
    if (this.$route.path.includes(page_variables.deduct_earning_url)) {
      this.deductions_earningGetter();
    } else {// this.edit = false;
    }
  },
  data: function data() {
    return _objectSpread(_objectSpread({
      page_variables: page_variables,
      fields: _FormFields_deductions_earnings__WEBPACK_IMPORTED_MODULE_0__.default,
      successes: {},
      errors: {},
      deductions_earnings_list: [],
      that: this,
      submitting: false,
      edit: false
    }, field_values), {}, {
      active_item: {}
    });
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapState)(["auth", "deductions_earnings", "employees"])),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapActions)([page_variables.getter, page_variables.setter, "setVarEmployees"])), {}, {
    isEmpty: _functions__WEBPACK_IMPORTED_MODULE_1__.isEmpty,
    onSubmit: function onSubmit() {
      var _this = this;

      if ((0,_functions__WEBPACK_IMPORTED_MODULE_1__.isEmpty)((0,_functions_validator__WEBPACK_IMPORTED_MODULE_2__.validateAll)(_FormFields_deductions_earnings__WEBPACK_IMPORTED_MODULE_0__.default, this))) {
        var pi_id = this.$route.params.pi_id;
        var data = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.dataSetter)(field_values, this);
        this.submitting = true;
        var url = page_variables.add_url;

        if (this.edit) {
          data.edit = this.edit;
          data.pi_id = pi_id;
          data.id = this.active_item.id;
        } else {
          data.pi_id = pi_id;
        }

        axios.post(url, data).then(function (res) {
          _this.submitting = false;
          (0,_functions__WEBPACK_IMPORTED_MODULE_1__.toast)(res.data.status, res.data.message);

          if (res.data.status == "success") {
            (0,_functions__WEBPACK_IMPORTED_MODULE_1__.formClearer)(field_values, _this);

            _this.deductions_earningGetter();

            _this.edit = false;
          }
        })["catch"](function (err) {
          _this.submitting = false;
          (0,_functions__WEBPACK_IMPORTED_MODULE_1__.commonCatchBlock)(_this, err);
        });
      }
    },
    deductions_earningGetter: function deductions_earningGetter() {
      var _this2 = this;

      var pi_id = this.$route.params.pi_id;
      (0,_functions__WEBPACK_IMPORTED_MODULE_1__.loader)("Loading");
      axios.post(page_variables.get_url, {
        pi_id: pi_id
      }).then(function (res) {
        Swal.close();

        if (res.data.status == "success") {
          (0,_functions__WEBPACK_IMPORTED_MODULE_1__.formSetter)(field_values, _FormFields_deductions_earnings__WEBPACK_IMPORTED_MODULE_0__.default, res.data.result, _this2);
          _this2.deductions_earnings_list = res.data.result;

          _this2.setVarEmployees({
            active_employee: res.data.employee
          });
        } else {
          (0,_functions__WEBPACK_IMPORTED_MODULE_1__.toast)(res.data.status, res.data.message);

          _this2.$router.push(page_variables.parent_url);
        }
      })["catch"](function (err) {
        Swal.close();
        (0,_functions__WEBPACK_IMPORTED_MODULE_1__.commonCatchBlock)(_this2, err);
      });
    },
    edit_deductions_earning: function edit_deductions_earning(item) {
      this.active_item = item;

      if (this.edit == false) {
        this.edit = true;
        this.item = item.item;
        this.amount = item.amount;
        this.type = item.type;
        this.status = item.status;
      } else {
        this.edit = false;
        (0,_functions__WEBPACK_IMPORTED_MODULE_1__.formClearer)(field_values, this);
      }
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
    },
    CustomTable: function CustomTable() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_CustomTable_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/CustomTable */ "./resources/js/components/CustomTable.vue"));
    },
    CustomFilter: function CustomFilter() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_CustomFilter_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/CustomFilter */ "./resources/js/components/CustomFilter.vue"));
    }
  },
  watch: {
    $route: function $route() {
      this.errors = {};
      this.successes = {};

      if (this.$route.path.includes(page_variables.deduct_earning_url)) {
        // this.edit = true;
        this.deductions_earningGetter();
      } else {
        // this.edit = false;
        (0,_functions__WEBPACK_IMPORTED_MODULE_1__.formClearer)(field_values, this);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Employees/EmployeeTable.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Employees/EmployeeTable.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions */ "./resources/js/functions/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../FormFields/employees'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Contributions_AddContributions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Contributions/AddContributions */ "./resources/js/pages/Contributions/AddContributions.vue");
/* harmony import */ var _DeductionsEarnings_DeductionEarnings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DeductionsEarnings/DeductionEarnings */ "./resources/js/pages/DeductionsEarnings/DeductionEarnings.vue");
/* harmony import */ var _Salaries_Salaries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Salaries/Salaries */ "./resources/js/pages/Salaries/Salaries.vue");
/* harmony import */ var _Loans_Loans__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Loans/Loans */ "./resources/js/pages/Loans/Loans.vue");
/* harmony import */ var _components_CustomModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/CustomModal */ "./resources/js/components/CustomModal.vue");
var _watch;

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









var page_variables = {
  variable_name: "employee",
  variable_name_plural: "employees",
  parent_url: "/employees",
  add_url: "/add-employee/",
  edit_url: "/employees/edit/",
  get_url: "/get-employee/",
  getter: "getEmployees",
  setter: "setVarEmployees",
  contrib_url: "/contributions/",
  deduct_earning_url: "/deductions_earnings/",
  salary_setting_url: "/salaries/",
  loan_url: "/loans/"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mounted: function mounted() {
    this.getter();

    if (this.$route.path.includes(page_variables.contrib_url)) {
      this.toShow = "contribution";
      console.log("on contrib");
    } else if (this.$route.path.includes(page_variables.deduct_earning_url)) {
      console.log("on deduct_earning_url");
      this.toShow = "deduct_earning_url";
    } else if (this.$route.path.includes(page_variables.salary_setting_url)) {
      console.log("on salary_setting_url");
      this.toShow = "salary_setting_url";
    } else if (this.$route.path.includes(page_variables.loan_url)) {
      console.log("on loan_url");
      this.toShow = "loan_url";
    } else {}
  },
  data: function data() {
    return {
      that: this,
      data: [],
      fields: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../FormFields/employees'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
      page_variables: page_variables,
      toShow: ""
    };
  },
  components: {
    Contributions: _Contributions_AddContributions__WEBPACK_IMPORTED_MODULE_2__.default,
    DeductionsEarnings: _DeductionsEarnings_DeductionEarnings__WEBPACK_IMPORTED_MODULE_3__.default,
    Salaries: _Salaries_Salaries__WEBPACK_IMPORTED_MODULE_4__.default,
    Loans: _Loans_Loans__WEBPACK_IMPORTED_MODULE_5__.default,
    CustomTable: function CustomTable() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_CustomTable_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/CustomTable */ "./resources/js/components/CustomTable.vue"));
    },
    CustomFilter: function CustomFilter() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_CustomFilter_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/CustomFilter */ "./resources/js/components/CustomFilter.vue"));
    },
    CustomPagination: function CustomPagination() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_CustomPagination_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/CustomPagination */ "./resources/js/components/CustomPagination.vue"));
    },
    CustomTableGroup: function CustomTableGroup() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_CustomTableGroup_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/CustomTableGroup */ "./resources/js/components/CustomTableGroup.vue"));
    },
    CustomModal: _components_CustomModal__WEBPACK_IMPORTED_MODULE_6__.default
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_7__.mapState)(["employees"])),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_7__.mapActions)([page_variables.getter, page_variables.setter])), {}, {
    hideModalEmployeesModal: function hideModalEmployeesModal() {
      this.$router.push(page_variables.parent_url);
    },
    getter: function getter(data) {
      var defaultData = {
        filter: this[page_variables.variable_name_plural].filter,
        order: this[page_variables.variable_name_plural].order,
        page: this[page_variables.variable_name_plural].page,
        rowsPerPage: this[page_variables.variable_name_plural].rowsPerPage,
        type: this[page_variables.variable_name_plural].type
      };

      if (!(0,_functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(data)) {
        defaultData = _objectSpread(_objectSpread({}, defaultData), data);
      }

      this[page_variables.getter](defaultData);
    },
    deleteButton: function deleteButton() {
      alert("pakyu sidney");
    }
  }),
  watch: (_watch = {}, _defineProperty(_watch, "".concat(page_variables.variable_name_plural, ".").concat(page_variables.variable_name_plural), {
    immediate: true,
    deept: true,
    handler: function handler(newValue, oldValue) {
      var data = [];
      var count = 0;
      var that = this;
      count = this[page_variables.variable_name_plural].rowsPerPage * this[page_variables.variable_name_plural].page;
      newValue.map(function (result, key) {
        var toConcat = [];
        ++count;
        toConcat = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../FormFields/employees'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(toConcat, that, result, count);
        data.push(toConcat);
      });
      this.data = data;
    }
  }), _defineProperty(_watch, "$route", function $route() {
    this.errors = {};
    this.successes = {};

    if (this.$route.path.includes(page_variables.contrib_url)) {
      this.toShow = "contribution";
      console.log("on contrib");
    } else if (this.$route.path.includes(page_variables.deduct_earning_url)) {
      console.log("on deduct_earning_url");
      this.toShow = "deduct_earning_url";
    } else if (this.$route.path.includes(page_variables.salary_setting_url)) {
      console.log("on salary_setting_url");
      this.toShow = "salary_setting_url";
    } else if (this.$route.path.includes(page_variables.loan_url)) {
      console.log("on loan_url");
      this.toShow = "loan_url";
    } else {
      this.toShow = "";
    }
  }), _watch)
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Loans/Loans.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Loans/Loans.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "page_variables": () => (/* binding */ page_variables),
/* harmony export */   "fields": () => (/* reexport safe */ _FormFields_loans__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _FormFields_loans__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../FormFields/loans */ "./resources/js/FormFields/loans.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../functions */ "./resources/js/functions/index.js");
/* harmony import */ var _functions_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../functions/validator */ "./resources/js/functions/validator.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  variable_name: "loans",
  variable_name_plural: "loans",
  parent_url: "/employees",
  add_url: "/add-loan/",
  edit_url: "/loans/edit/",
  get_url: "/get-loan",
  getter: "getLoans",
  setter: "setVarLoans",
  loan_url: "/loans/"
};

var field_values = {
  loan_description: "",
  loan_amt: 0,
  monthly_amor: 0,
  remaining_times_topay: 0
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mounted: function mounted() {
    if (this.$route.path.includes(page_variables.loan_url)) {
      this.loansGetter();
    } else {// this.edit = false;
    }
  },
  data: function data() {
    return _objectSpread(_objectSpread({
      page_variables: page_variables,
      fields: _FormFields_loans__WEBPACK_IMPORTED_MODULE_0__.default,
      successes: {},
      errors: {},
      loans_list: [],
      that: this,
      submitting: false,
      edit: false
    }, field_values), {}, {
      active_item: {}
    });
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapState)(["auth", "loans", "employees"])),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapActions)([page_variables.getter, page_variables.setter, "setVarEmployees"])), {}, {
    isEmpty: _functions__WEBPACK_IMPORTED_MODULE_1__.isEmpty,
    onSubmit: function onSubmit() {
      var _this = this;

      if ((0,_functions__WEBPACK_IMPORTED_MODULE_1__.isEmpty)((0,_functions_validator__WEBPACK_IMPORTED_MODULE_2__.validateAll)(_FormFields_loans__WEBPACK_IMPORTED_MODULE_0__.default, this))) {
        var pi_id = this.$route.params.pi_id;
        var data = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.dataSetter)(field_values, this);
        this.submitting = true;
        var url = page_variables.add_url;

        if (this.edit) {
          data.edit = this.edit;
          data.pi_id = pi_id;
          data.id = this.active_item.id;
        } else {
          data.pi_id = pi_id;
        }

        axios.post(url, data).then(function (res) {
          _this.submitting = false;
          (0,_functions__WEBPACK_IMPORTED_MODULE_1__.toast)(res.data.status, res.data.message);

          if (res.data.status == "success") {
            (0,_functions__WEBPACK_IMPORTED_MODULE_1__.formClearer)(field_values, _this);

            _this.loansGetter();

            _this.edit = false;
          }
        })["catch"](function (err) {
          _this.submitting = false;
          (0,_functions__WEBPACK_IMPORTED_MODULE_1__.commonCatchBlock)(_this, err);
        });
      }
    },
    loansGetter: function loansGetter() {
      var _this2 = this;

      var pi_id = this.$route.params.pi_id;
      (0,_functions__WEBPACK_IMPORTED_MODULE_1__.loader)("Loading");
      axios.post(page_variables.get_url, {
        pi_id: pi_id
      }).then(function (res) {
        Swal.close();

        if (res.data.status == "success") {
          (0,_functions__WEBPACK_IMPORTED_MODULE_1__.formSetter)(field_values, _FormFields_loans__WEBPACK_IMPORTED_MODULE_0__.default, res.data.result, _this2);
          _this2.loans_list = res.data.result;

          _this2.setVarEmployees({
            active_employee: res.data.employee
          });
        } else {
          (0,_functions__WEBPACK_IMPORTED_MODULE_1__.toast)(res.data.status, res.data.message);

          _this2.$router.push(page_variables.parent_url);
        }
      })["catch"](function (err) {
        Swal.close();
        (0,_functions__WEBPACK_IMPORTED_MODULE_1__.commonCatchBlock)(_this2, err);
      });
    },
    edit_loans: function edit_loans(item) {
      this.active_item = item;
      console.log(item);

      if (this.edit == false) {
        this.edit = true;
        this.loan_description = item.loan_description;
        this.loan_amt = item.loan_amt;
        this.monthly_amor = item.monthly_amor;
        this.remaining_times_topay = item.remaining_times_topay;
      } else {
        this.edit = false;
        (0,_functions__WEBPACK_IMPORTED_MODULE_1__.formClearer)(field_values, this);
      }
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
    },
    CustomTable: function CustomTable() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_CustomTable_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/CustomTable */ "./resources/js/components/CustomTable.vue"));
    }
  },
  watch: {
    $route: function $route() {
      this.errors = {};
      this.successes = {};

      if (this.$route.path.includes(page_variables.loan_url)) {
        // this.edit = true;
        this.loansGetter();
      } else {
        // this.edit = false;
        (0,_functions__WEBPACK_IMPORTED_MODULE_1__.formClearer)(field_values, this);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Salaries/Salaries.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Salaries/Salaries.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "page_variables": () => (/* binding */ page_variables),
/* harmony export */   "fields": () => (/* reexport safe */ _FormFields_salaries__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _FormFields_salaries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../FormFields/salaries */ "./resources/js/FormFields/salaries.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../functions */ "./resources/js/functions/index.js");
/* harmony import */ var _functions_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../functions/validator */ "./resources/js/functions/validator.js");
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




var page_variables = {
  variable_name: "salary",
  variable_name_plural: "salaries",
  parent_url: "/employees",
  add_url: "/add-salary/",
  edit_url: "/salaries/edit/",
  get_url: "/get-salary",
  getter: "getSalaries",
  setter: "setVarSalaries",
  contrib_url: "/salaries/"
};

var field_values = {
  monthly_salary: 0
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mounted: function mounted() {
    if (this.$route.path.includes(page_variables.contrib_url)) {
      this.edit = true;
      this.salaryGetter();
    } else {
      this.edit = false;
    } // axios
    //     .post("/get-salary")
    //     .then((res) => {
    //         console.log(res.data.result);
    //         this.salary = res.data.result.monthly_salary;
    //     })
    //     .catch((err) => {
    //         commonCatchBlock(this, err);
    //     });

  },
  data: function data() {
    return _objectSpread(_objectSpread({
      page_variables: page_variables,
      fields: _FormFields_salaries__WEBPACK_IMPORTED_MODULE_0__.default,
      successes: {},
      errors: {},
      that: this,
      submitting: false,
      edit: false
    }, field_values), {}, {
      employee_name: ""
    });
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapState)(["auth", "salaries", "employees"])),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapActions)([page_variables.getter, page_variables.setter, "setVarEmployees"])), {}, {
    isEmpty: _functions__WEBPACK_IMPORTED_MODULE_1__.isEmpty,
    onSubmit: function onSubmit() {
      var _this = this;

      if ((0,_functions__WEBPACK_IMPORTED_MODULE_1__.isEmpty)((0,_functions_validator__WEBPACK_IMPORTED_MODULE_2__.validateAll)(_FormFields_salaries__WEBPACK_IMPORTED_MODULE_0__.default, this))) {
        var pi_id = this.$route.params.pi_id;
        var data = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.dataSetter)(field_values, this);
        this.submitting = true;
        var url = page_variables.add_url;

        if (this.edit) {
          data.edit = this.edit;
          data.pi_id = pi_id;
        } else {
          data.pi_id = pi_id;
        }

        axios.post(url, data).then(function (res) {
          _this.submitting = false;
          (0,_functions__WEBPACK_IMPORTED_MODULE_1__.toast)(res.data.status, res.data.message);

          if (res.data.status == "success") {
            _this[page_variables.getter]({
              filter: _this[page_variables.variable_name_plural].filter,
              order: _this[page_variables.variable_name_plural].order,
              page: _this[page_variables.variable_name_plural].page,
              rowsPerPage: _this[page_variables.variable_name_plural].rowsPerPage,
              type: _this[page_variables.variable_name_plural].type
            });
          }
        })["catch"](function (err) {
          _this.submitting = false;
          (0,_functions__WEBPACK_IMPORTED_MODULE_1__.commonCatchBlock)(_this, err);
        });
      }
    },
    salaryGetter: function salaryGetter() {
      var _this2 = this;

      var pi_id = this.$route.params.pi_id;
      (0,_functions__WEBPACK_IMPORTED_MODULE_1__.loader)("Loading");
      axios.post(page_variables.get_url, {
        pi_id: pi_id
      }).then(function (res) {
        Swal.close();

        if (res.data.status == "success") {
          console.log(res.data);

          if (res.data.result) {
            _this2.monthly_salary = res.data.result.monthly_salary;
          } else {
            _this2.monthly_salary = 0;
          }

          _this2.setVarEmployees({
            active_employee: res.data.employee
          });
        } else {
          (0,_functions__WEBPACK_IMPORTED_MODULE_1__.toast)(res.data.status, res.data.message);

          _this2.$router.push(page_variables.parent_url);
        }
      })["catch"](function (err) {
        Swal.close();
        (0,_functions__WEBPACK_IMPORTED_MODULE_1__.commonCatchBlock)(_this2, err);
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

      if (this.$route.path.includes(page_variables.contrib_url)) {
        this.edit = true;
        this.salaryGetter();
      } else {
        this.edit = false;
        (0,_functions__WEBPACK_IMPORTED_MODULE_1__.formClearer)(field_values, this);
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/FormFields/contributions.js":
/*!**************************************************!*\
  !*** ./resources/js/FormFields/contributions.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var _actions$tax$tax_type;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_actions$tax$tax_type = {
  actions: {
    name: "actions",
    labelText: "Actions",
    filterable: false,
    sortable: false,
    wrapperClass: "w-2",
    thClass: "width-700px"
  },
  tax: {
    name: "tax",
    placeholder: "Tax",
    labelText: "Tax",
    type: "select",
    wrapperClass: "mb-2",
    validation: ["required"]
  },
  tax_type_id: {
    name: "tax_type_id",
    placeholder: "Tax Percentage",
    labelText: "Tax Percentage",
    type: "select",
    wrapperClass: "mb-2",
    validation: ["required"]
  },
  gsis: {
    name: "gsis",
    placeholder: "GSIS",
    labelText: "GSIS",
    type: "select",
    wrapperClass: "mb-2",
    validation: ["required"]
  },
  sss: {
    name: "sss",
    placeholder: "SSS",
    labelText: "SSS",
    type: "select",
    wrapperClass: "mb-2",
    validation: ["required"]
  },
  philhealth: {
    name: "philhealth",
    placeholder: "Philhealth",
    labelText: "Philhealth",
    type: "select",
    wrapperClass: "mb-2",
    validation: ["required"]
  }
}, _defineProperty(_actions$tax$tax_type, "philhealth", {
  name: "philhealth",
  placeholder: "Philhealth",
  labelText: "Philhealth",
  type: "select",
  wrapperClass: "mb-2",
  validation: ["required"]
}), _defineProperty(_actions$tax$tax_type, "pagibig", {
  name: "pagibig",
  placeholder: "Pagibig",
  labelText: "Pagibig",
  type: "select",
  wrapperClass: "mb-2",
  validation: ["required"]
}), _actions$tax$tax_type);

/***/ }),

/***/ "./resources/js/FormFields/deductions_earnings.js":
/*!********************************************************!*\
  !*** ./resources/js/FormFields/deductions_earnings.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  actions: {
    name: "actions",
    labelText: "Actions",
    filterable: false,
    sortable: false,
    wrapperClass: "w-2",
    thClass: "width-700px"
  },
  item: {
    name: "item",
    placeholder: "Item",
    labelText: "Item",
    type: "text",
    wrapperClass: "mb-2",
    validation: ["required"]
  },
  amount: {
    name: "amount",
    placeholder: "Amount",
    labelText: "Amount",
    type: "text",
    wrapperClass: "mb-2",
    validation: ["required"]
  },
  type: {
    name: "type",
    placeholder: "Type",
    labelText: "Type",
    type: "select",
    wrapperClass: "mb-2",
    validation: ["required"]
  },
  status: {
    name: "status",
    placeholder: "Status",
    labelText: "Status",
    type: "select",
    wrapperClass: "mb-2",
    validation: ["required"]
  }
});

/***/ }),

/***/ "./resources/js/FormFields/loans.js":
/*!******************************************!*\
  !*** ./resources/js/FormFields/loans.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  loan_description: {
    name: "loan_description",
    placeholder: "Loan Description",
    labelText: "Loan Description",
    type: "text",
    wrapperClass: "mb-2",
    validation: ["required"]
  },
  loan_amt: {
    name: "loan_amt",
    placeholder: "Loan Amount",
    labelText: "Loan Amount",
    type: "text",
    wrapperClass: "mb-2",
    validation: ["required"]
  },
  monthly_amor: {
    name: "monthly_amor",
    placeholder: "Monthly Amortization",
    labelText: "Monthly Amortization",
    type: "text",
    wrapperClass: "mb-2",
    validation: ["required"]
  },
  remaining_times_topay: {
    name: "remaining_times_topay",
    placeholder: "Times to pay",
    labelText: "Times to pay",
    type: "text",
    wrapperClass: "mb-2",
    validation: ["required"]
  }
});

/***/ }),

/***/ "./resources/js/FormFields/salaries.js":
/*!*********************************************!*\
  !*** ./resources/js/FormFields/salaries.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  monthly_salary: {
    name: "monthly_salary",
    placeholder: "Monthly Salary",
    labelText: "Monthly Salary",
    type: "text",
    wrapperClass: "mb-2",
    validation: ["required"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomModal.vue?vue&type=style&index=0&id=1162baa1&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomModal.vue?vue&type=style&index=0&id=1162baa1&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".modal[data-v-1162baa1] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  margin: auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  max-width: 22em;\n  padding: 1rem;\n  border-radius: 1rem;\n  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);\n  background: #fff;\n  z-index: 999;\n  transform: none;\n  overflow: auto;\n  max-height: 90vh;\n  margin-top: 5vh;\n}\n\n/* // Extra small devices (portrait phones, less than 576px) */\n@media (max-width: 575.98px) {\n.modal[data-v-1162baa1] {\n    min-width: calc(100% - 5px);\n}\n}\n@media (min-width: 576px) and (max-width: 767.98px) {\n.modal[data-v-1162baa1] {\n    min-width: calc(100% - 20px);\n}\n}\n@media (min-width: 768px) and (max-width: 991.98px) {\n.modal[data-v-1162baa1] {\n    min-width: calc(100% - 100px);\n}\n}\n@media (min-width: 992px) and (max-width: 1199.98px) {\n.modal[data-v-1162baa1] {\n    min-width: calc(100% - 200px);\n}\n}\n@media (min-width: 1200px) {\n.modal[data-v-1162baa1] {\n    min-width: calc(100% - 600px);\n}\n}\n.modal h1[data-v-1162baa1] {\n  margin: 0 0 1rem;\n}\n.modal-overlay[data-v-1162baa1] {\n  content: \"\";\n  position: absolute;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 998;\n  background: #2c3e50;\n  opacity: 0.6;\n  cursor: pointer;\n}\n\n/* ---------------------------------- */\n.fade-enter-active[data-v-1162baa1],\r\n.fade-leave-active[data-v-1162baa1] {\n  transition: opacity 0.4s linear;\n}\n.fade-enter[data-v-1162baa1],\r\n.fade-leave-to[data-v-1162baa1] {\n  opacity: 0;\n}\n.pop-enter-active[data-v-1162baa1],\r\n.pop-leave-active[data-v-1162baa1] {\n  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;\n}\n.pop-enter[data-v-1162baa1],\r\n.pop-leave-to[data-v-1162baa1] {\n  opacity: 0;\n  transform: scale(0.3) translateY(-50%);\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomModal.vue?vue&type=style&index=0&id=1162baa1&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomModal.vue?vue&type=style&index=0&id=1162baa1&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomModal_vue_vue_type_style_index_0_id_1162baa1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomModal.vue?vue&type=style&index=0&id=1162baa1&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomModal.vue?vue&type=style&index=0&id=1162baa1&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomModal_vue_vue_type_style_index_0_id_1162baa1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomModal_vue_vue_type_style_index_0_id_1162baa1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/CustomModal.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/CustomModal.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomModal_vue_vue_type_template_id_1162baa1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomModal.vue?vue&type=template&id=1162baa1&scoped=true& */ "./resources/js/components/CustomModal.vue?vue&type=template&id=1162baa1&scoped=true&");
/* harmony import */ var _CustomModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomModal.vue?vue&type=script&lang=js& */ "./resources/js/components/CustomModal.vue?vue&type=script&lang=js&");
/* harmony import */ var _CustomModal_vue_vue_type_style_index_0_id_1162baa1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomModal.vue?vue&type=style&index=0&id=1162baa1&scoped=true&lang=css& */ "./resources/js/components/CustomModal.vue?vue&type=style&index=0&id=1162baa1&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _CustomModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CustomModal_vue_vue_type_template_id_1162baa1_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _CustomModal_vue_vue_type_template_id_1162baa1_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1162baa1",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CustomModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Contributions/AddContributions.vue":
/*!***************************************************************!*\
  !*** ./resources/js/pages/Contributions/AddContributions.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fields": () => (/* reexport safe */ _AddContributions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.fields),
/* harmony export */   "page_variables": () => (/* reexport safe */ _AddContributions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.page_variables),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddContributions_vue_vue_type_template_id_ebc15352___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddContributions.vue?vue&type=template&id=ebc15352& */ "./resources/js/pages/Contributions/AddContributions.vue?vue&type=template&id=ebc15352&");
/* harmony import */ var _AddContributions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddContributions.vue?vue&type=script&lang=js& */ "./resources/js/pages/Contributions/AddContributions.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AddContributions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AddContributions_vue_vue_type_template_id_ebc15352___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddContributions_vue_vue_type_template_id_ebc15352___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Contributions/AddContributions.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/DeductionsEarnings/DeductionEarnings.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/DeductionsEarnings/DeductionEarnings.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fields": () => (/* reexport safe */ _DeductionEarnings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.fields),
/* harmony export */   "page_variables": () => (/* reexport safe */ _DeductionEarnings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.page_variables),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DeductionEarnings_vue_vue_type_template_id_6a3dbb7f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeductionEarnings.vue?vue&type=template&id=6a3dbb7f& */ "./resources/js/pages/DeductionsEarnings/DeductionEarnings.vue?vue&type=template&id=6a3dbb7f&");
/* harmony import */ var _DeductionEarnings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeductionEarnings.vue?vue&type=script&lang=js& */ "./resources/js/pages/DeductionsEarnings/DeductionEarnings.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _DeductionEarnings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _DeductionEarnings_vue_vue_type_template_id_6a3dbb7f___WEBPACK_IMPORTED_MODULE_0__.render,
  _DeductionEarnings_vue_vue_type_template_id_6a3dbb7f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/DeductionsEarnings/DeductionEarnings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Employees/EmployeeTable.vue":
/*!********************************************************!*\
  !*** ./resources/js/pages/Employees/EmployeeTable.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EmployeeTable_vue_vue_type_template_id_d672cfc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmployeeTable.vue?vue&type=template&id=d672cfc6& */ "./resources/js/pages/Employees/EmployeeTable.vue?vue&type=template&id=d672cfc6&");
/* harmony import */ var _EmployeeTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmployeeTable.vue?vue&type=script&lang=js& */ "./resources/js/pages/Employees/EmployeeTable.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _EmployeeTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _EmployeeTable_vue_vue_type_template_id_d672cfc6___WEBPACK_IMPORTED_MODULE_0__.render,
  _EmployeeTable_vue_vue_type_template_id_d672cfc6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Employees/EmployeeTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Loans/Loans.vue":
/*!********************************************!*\
  !*** ./resources/js/pages/Loans/Loans.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fields": () => (/* reexport safe */ _Loans_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.fields),
/* harmony export */   "page_variables": () => (/* reexport safe */ _Loans_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.page_variables),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Loans_vue_vue_type_template_id_081a4144___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loans.vue?vue&type=template&id=081a4144& */ "./resources/js/pages/Loans/Loans.vue?vue&type=template&id=081a4144&");
/* harmony import */ var _Loans_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loans.vue?vue&type=script&lang=js& */ "./resources/js/pages/Loans/Loans.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Loans_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Loans_vue_vue_type_template_id_081a4144___WEBPACK_IMPORTED_MODULE_0__.render,
  _Loans_vue_vue_type_template_id_081a4144___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Loans/Loans.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Salaries/Salaries.vue":
/*!**************************************************!*\
  !*** ./resources/js/pages/Salaries/Salaries.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fields": () => (/* reexport safe */ _Salaries_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.fields),
/* harmony export */   "page_variables": () => (/* reexport safe */ _Salaries_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.page_variables),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Salaries_vue_vue_type_template_id_6ac5b6d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Salaries.vue?vue&type=template&id=6ac5b6d4& */ "./resources/js/pages/Salaries/Salaries.vue?vue&type=template&id=6ac5b6d4&");
/* harmony import */ var _Salaries_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Salaries.vue?vue&type=script&lang=js& */ "./resources/js/pages/Salaries/Salaries.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Salaries_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Salaries_vue_vue_type_template_id_6ac5b6d4___WEBPACK_IMPORTED_MODULE_0__.render,
  _Salaries_vue_vue_type_template_id_6ac5b6d4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Salaries/Salaries.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/CustomModal.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/CustomModal.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomModal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/Contributions/AddContributions.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/Contributions/AddContributions.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "fields": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddContributions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.fields),
/* harmony export */   "page_variables": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddContributions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.page_variables)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddContributions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddContributions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Contributions/AddContributions.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddContributions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/DeductionsEarnings/DeductionEarnings.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/pages/DeductionsEarnings/DeductionEarnings.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "fields": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeductionEarnings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.fields),
/* harmony export */   "page_variables": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeductionEarnings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.page_variables)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeductionEarnings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DeductionEarnings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/DeductionsEarnings/DeductionEarnings.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeductionEarnings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/Employees/EmployeeTable.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/Employees/EmployeeTable.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmployeeTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Employees/EmployeeTable.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/Loans/Loans.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/Loans/Loans.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "fields": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loans_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.fields),
/* harmony export */   "page_variables": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loans_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.page_variables)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loans_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Loans.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Loans/Loans.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loans_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/Salaries/Salaries.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/Salaries/Salaries.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "fields": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Salaries_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.fields),
/* harmony export */   "page_variables": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Salaries_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.page_variables)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Salaries_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Salaries.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Salaries/Salaries.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Salaries_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/CustomModal.vue?vue&type=style&index=0&id=1162baa1&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/CustomModal.vue?vue&type=style&index=0&id=1162baa1&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomModal_vue_vue_type_style_index_0_id_1162baa1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomModal.vue?vue&type=style&index=0&id=1162baa1&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomModal.vue?vue&type=style&index=0&id=1162baa1&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/CustomModal.vue?vue&type=template&id=1162baa1&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/CustomModal.vue?vue&type=template&id=1162baa1&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomModal_vue_vue_type_template_id_1162baa1_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomModal_vue_vue_type_template_id_1162baa1_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomModal_vue_vue_type_template_id_1162baa1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomModal.vue?vue&type=template&id=1162baa1&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomModal.vue?vue&type=template&id=1162baa1&scoped=true&");


/***/ }),

/***/ "./resources/js/pages/Contributions/AddContributions.vue?vue&type=template&id=ebc15352&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/pages/Contributions/AddContributions.vue?vue&type=template&id=ebc15352& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddContributions_vue_vue_type_template_id_ebc15352___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddContributions_vue_vue_type_template_id_ebc15352___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddContributions_vue_vue_type_template_id_ebc15352___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddContributions.vue?vue&type=template&id=ebc15352& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Contributions/AddContributions.vue?vue&type=template&id=ebc15352&");


/***/ }),

/***/ "./resources/js/pages/DeductionsEarnings/DeductionEarnings.vue?vue&type=template&id=6a3dbb7f&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/pages/DeductionsEarnings/DeductionEarnings.vue?vue&type=template&id=6a3dbb7f& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeductionEarnings_vue_vue_type_template_id_6a3dbb7f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeductionEarnings_vue_vue_type_template_id_6a3dbb7f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeductionEarnings_vue_vue_type_template_id_6a3dbb7f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DeductionEarnings.vue?vue&type=template&id=6a3dbb7f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/DeductionsEarnings/DeductionEarnings.vue?vue&type=template&id=6a3dbb7f&");


/***/ }),

/***/ "./resources/js/pages/Employees/EmployeeTable.vue?vue&type=template&id=d672cfc6&":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/Employees/EmployeeTable.vue?vue&type=template&id=d672cfc6& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeTable_vue_vue_type_template_id_d672cfc6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeTable_vue_vue_type_template_id_d672cfc6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeTable_vue_vue_type_template_id_d672cfc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmployeeTable.vue?vue&type=template&id=d672cfc6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Employees/EmployeeTable.vue?vue&type=template&id=d672cfc6&");


/***/ }),

/***/ "./resources/js/pages/Loans/Loans.vue?vue&type=template&id=081a4144&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/Loans/Loans.vue?vue&type=template&id=081a4144& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loans_vue_vue_type_template_id_081a4144___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loans_vue_vue_type_template_id_081a4144___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loans_vue_vue_type_template_id_081a4144___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Loans.vue?vue&type=template&id=081a4144& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Loans/Loans.vue?vue&type=template&id=081a4144&");


/***/ }),

/***/ "./resources/js/pages/Salaries/Salaries.vue?vue&type=template&id=6ac5b6d4&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/Salaries/Salaries.vue?vue&type=template&id=6ac5b6d4& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Salaries_vue_vue_type_template_id_6ac5b6d4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Salaries_vue_vue_type_template_id_6ac5b6d4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Salaries_vue_vue_type_template_id_6ac5b6d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Salaries.vue?vue&type=template&id=6ac5b6d4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Salaries/Salaries.vue?vue&type=template&id=6ac5b6d4&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomModal.vue?vue&type=template&id=1162baa1&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomModal.vue?vue&type=template&id=1162baa1&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "app" } },
    [
      _c("transition", { attrs: { name: "fade", appear: "" } }, [
        _vm.showModalLocal
          ? _c("div", {
              staticClass: "modal-overlay",
              on: { click: _vm.hideModal }
            })
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("transition", { attrs: { name: "pop", appear: "" } }, [
        _vm.showModalLocal
          ? _c(
              "div",
              { staticClass: "modal", attrs: { role: "dialog" } },
              [
                _vm.header != ""
                  ? _c(
                      "div",
                      {
                        staticClass: "header flex justify-between items-center"
                      },
                      [
                        _c("h1", { staticClass: "text-xl" }, [
                          _vm._v(_vm._s(_vm.header))
                        ]),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-transparent",
                            on: { click: _vm.hideModal }
                          },
                          [_vm._v("\n                    x\n                ")]
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm._t("default")
              ],
              2
            )
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Contributions/AddContributions.vue?vue&type=template&id=ebc15352&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Contributions/AddContributions.vue?vue&type=template&id=ebc15352& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
        "rounded p-4": true,
        "bg-white": !_vm.edit,
        "bg-green-50": _vm.edit
      }
    },
    [
      _c(
        "div",
        { staticClass: "col-span-5 mb-5 flex items-center justify-between" },
        [
          _c("div", {}, [
            _vm._v("\n            Contributions\n            "),
            !_vm.isEmpty(_vm.employees.active_employee)
              ? _c("span", [
                  _vm._v(
                    "\n                of " +
                      _vm._s(_vm.employees.active_employee.full_name)
                  )
                ])
              : _vm._e()
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "form",
        {
          staticClass: "grid grid-cols-1 md:grid-cols-6 gap-2",
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.onSubmit($event)
            }
          }
        },
        [
          _c("CustomInput", {
            attrs: {
              inputData: {
                field: _vm.fields.tax,
                value: _vm.tax,
                that: _vm.that,
                menuItems: [
                  {
                    id: 1,
                    text: "ON"
                  },
                  {
                    id: 0,
                    text: "OFF"
                  }
                ]
              }
            }
          }),
          _vm._v(" "),
          _c("CustomInput", {
            attrs: {
              inputData: {
                field: _vm.fields.tax_type_id,
                value: _vm.tax_type_id,
                that: _vm.that,
                menuItems: _vm.employees.menuItems.tax_types.map(function(res) {
                  return {
                    id: res.id,
                    text: res.tax + "%"
                  }
                })
              }
            }
          }),
          _vm._v(" "),
          _c("CustomInput", {
            attrs: {
              inputData: {
                field: _vm.fields.gsis,
                value: _vm.gsis,
                that: _vm.that,
                menuItems: [
                  {
                    id: 1,
                    text: "ON"
                  },
                  {
                    id: 0,
                    text: "OFF"
                  }
                ]
              }
            }
          }),
          _vm._v(" "),
          _c("CustomInput", {
            attrs: {
              inputData: {
                field: _vm.fields.sss,
                value: _vm.sss,
                that: _vm.that,
                menuItems: [
                  {
                    id: 1,
                    text: "ON"
                  },
                  {
                    id: 0,
                    text: "OFF"
                  }
                ]
              }
            }
          }),
          _vm._v(" "),
          _c("CustomInput", {
            attrs: {
              inputData: {
                field: _vm.fields.philhealth,
                value: _vm.philhealth,
                that: _vm.that,
                menuItems: [
                  {
                    id: 1,
                    text: "ON"
                  },
                  {
                    id: 0,
                    text: "OFF"
                  }
                ]
              }
            }
          }),
          _vm._v(" "),
          _c("CustomInput", {
            attrs: {
              inputData: {
                field: _vm.fields.pagibig,
                value: _vm.pagibig,
                that: _vm.that,
                menuItems: [
                  {
                    id: 1,
                    text: "ON"
                  },
                  {
                    id: 0,
                    text: "OFF"
                  }
                ]
              }
            }
          }),
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
            [_c("Submitting", { attrs: { submitting: _vm.submitting } })],
            1
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/DeductionsEarnings/DeductionEarnings.vue?vue&type=template&id=6a3dbb7f&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/DeductionsEarnings/DeductionEarnings.vue?vue&type=template&id=6a3dbb7f& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
        "rounded p-4": true,
        "bg-white": !_vm.edit,
        "bg-green-50": _vm.edit
      }
    },
    [
      _c(
        "div",
        { staticClass: "col-span-5 mb-5 flex items-center justify-between" },
        [
          _c("div", {}, [
            _vm._v("\n            Deductions | Earnings\n            "),
            !_vm.isEmpty(_vm.employees.active_employee)
              ? _c("span", [
                  _vm._v(
                    "\n                of " +
                      _vm._s(_vm.employees.active_employee.full_name)
                  )
                ])
              : _vm._e()
          ])
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
          _c("div", { staticClass: "grid grid-cols-1 gap-4" }, [
            _c("div", { staticClass: "bg-white-200" }, [
              _c("h1", { staticClass: "mb-5" }, [
                _c("strong", [_vm._v(_vm._s(_vm.edit ? "EDIT" : "ADD NEW"))])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "grid grid-cols-2 gap-4" },
                [
                  _c("CustomInput", {
                    attrs: {
                      inputData: {
                        field: _vm.fields.item,
                        value: _vm.item,
                        that: _vm.that
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("CustomInput", {
                    attrs: {
                      inputData: {
                        field: _vm.fields.amount,
                        value: _vm.amount,
                        that: _vm.that
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("CustomInput", {
                    attrs: {
                      inputData: {
                        field: _vm.fields.type,
                        value: _vm.type,
                        that: _vm.that,
                        menuItems: [
                          {
                            id: 1,
                            text: "Earning"
                          },
                          {
                            id: 0,
                            text: "Deduction"
                          }
                        ]
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("CustomInput", {
                    attrs: {
                      inputData: {
                        field: _vm.fields.status,
                        value: _vm.status,
                        that: _vm.that,
                        menuItems: [
                          {
                            id: 1,
                            text: "Active"
                          },
                          {
                            id: 0,
                            text: "Inactive"
                          }
                        ]
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
                [_c("Submitting", { attrs: { submitting: _vm.submitting } })],
                1
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              {},
              [
                _vm._m(0),
                _vm._v(" "),
                _c("CustomFilter", {
                  attrs: {
                    fields: _vm.fields,
                    getter: _vm.getter,
                    setter: _vm.that[_vm.page_variables.setter],
                    mainVariable: _vm.employees
                  }
                }),
                _vm._v(" "),
                _c(
                  "CustomTable",
                  {
                    attrs: {
                      wrapper_style: "height: 300px; overflow-y: auto;",
                      fields: {
                        actions: {
                          name: "actions",
                          labelText: "Actions",
                          filterable: false,
                          sortable: false,
                          wrapperClass: "w-2"
                        },
                        item: {
                          name: "item",
                          labelText: "Item",
                          filterable: false,
                          sortable: false,
                          wrapperClass: "w-2"
                        },
                        amount: {
                          name: "amount",
                          labelText: "Amount",
                          filterable: false,
                          sortable: false,
                          wrapperClass: "w-2"
                        },
                        type: {
                          name: "type",
                          labelText: "Type",
                          filterable: false,
                          sortable: true,
                          wrapperClass: "w-2"
                        },
                        status: {
                          name: "status",
                          labelText: "Status",
                          filterable: false,
                          sortable: true,
                          wrapperClass: "w-2"
                        }
                      },
                      getter: function() {},
                      setter: function() {},
                      mainVariable: {
                        process: "",
                        order: { type: { type: "asc" } }
                      },
                      data: [],
                      filterable: false,
                      sortable: false
                    }
                  },
                  _vm._l(_vm.deductions_earnings_list, function(
                    deduct_earning,
                    key
                  ) {
                    return _c("tr", { key: key }, [
                      _c("td", { staticClass: "bg-gray-200 px-4 py-4" }, [
                        _vm._v(
                          "\n                            " +
                            _vm._s(key + 1) +
                            "\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "px-4 py-4" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-success",
                            attrs: { type: "button" },
                            on: {
                              click: function() {
                                return _vm.edit_deductions_earning(
                                  deduct_earning
                                )
                              }
                            }
                          },
                          [
                            _vm.active_item.item == deduct_earning.item
                              ? [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(
                                        _vm.edit ? "Cancel Edit" : "Edit"
                                      ) +
                                      "\n                                "
                                  )
                                ]
                              : [_vm._v(" Edit ")]
                          ],
                          2
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "px-4 py-4" }, [
                        _vm._v(
                          "\n                            " +
                            _vm._s(deduct_earning.item) +
                            "\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "px-4 py-4" }, [
                        _vm._v(
                          "\n                            " +
                            _vm._s(deduct_earning.amount) +
                            "\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "px-4 py-4" }, [
                        deduct_earning.type == 1
                          ? _c("span", [_vm._v("Earning")])
                          : _vm._e(),
                        _vm._v(" "),
                        deduct_earning.type == 0
                          ? _c("span", [_vm._v("Deduction")])
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "px-4 py-4" }, [
                        deduct_earning.status == 1
                          ? _c("span", [_vm._v("Active")])
                          : _vm._e(),
                        _vm._v(" "),
                        deduct_earning.status == 0
                          ? _c("span", [_vm._v("Inactive")])
                          : _vm._e()
                      ])
                    ])
                  }),
                  0
                )
              ],
              1
            )
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h1", { staticClass: "mb-5" }, [
      _c("strong", [_vm._v("Earnings and Deductions")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Employees/EmployeeTable.vue?vue&type=template&id=d672cfc6&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Employees/EmployeeTable.vue?vue&type=template&id=d672cfc6& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
        "CustomModal",
        {
          attrs: {
            showModal: _vm.toShow != "",
            afterHideModal: _vm.hideModalEmployeesModal,
            header: _vm.$route.meta.topBar
          }
        },
        [
          _vm.toShow == "contribution"
            ? _c("Contributions", { staticClass: "mb-5" })
            : _vm._e(),
          _vm._v(" "),
          _vm.toShow == "deduct_earning_url"
            ? _c("DeductionsEarnings", { staticClass: "mb-5" })
            : _vm._e(),
          _vm._v(" "),
          _vm.toShow == "salary_setting_url"
            ? _c("Salaries", { staticClass: "mb-5" })
            : _vm._e(),
          _vm._v(" "),
          _vm.toShow == "loan_url"
            ? _c("Loans", { staticClass: "mb-5" })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "CustomTableGroup",
        { attrs: { tableGroupData: { tableName: "Employees Table" } } },
        [
          _c("CustomFilter", {
            attrs: {
              fields: _vm.fields,
              getter: _vm.getter,
              setter: _vm.that[_vm.page_variables.setter],
              mainVariable: _vm.employees
            }
          }),
          _vm._v(" "),
          _c("CustomTable", {
            attrs: {
              fields: _vm.fields,
              getter: _vm.getter,
              setter: _vm.that[_vm.page_variables.setter],
              mainVariable: _vm.employees,
              data: _vm.data
            }
          }),
          _vm._v(" "),
          _c("CustomPagination", {
            attrs: {
              getter: _vm.getter,
              setter: _vm.that[_vm.page_variables.setter],
              mainVariable: _vm.employees
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Loans/Loans.vue?vue&type=template&id=081a4144&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Loans/Loans.vue?vue&type=template&id=081a4144& ***!
  \******************************************************************************************************************************************************************************************************************/
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
        "rounded p-4": true,
        "bg-white": !_vm.edit,
        "bg-green-50": _vm.edit
      }
    },
    [
      _c(
        "div",
        { staticClass: "col-span-5 mb-5 flex items-center justify-between" },
        [
          _c("div", {}, [
            _vm._v("\n            Loans\n            "),
            !_vm.isEmpty(_vm.employees.active_employee)
              ? _c("span", [
                  _vm._v(
                    "\n                of " +
                      _vm._s(_vm.employees.active_employee.full_name)
                  )
                ])
              : _vm._e()
          ])
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
          _c("div", { staticClass: "grid grid-cols-1 gap-4" }, [
            _c("div", { staticClass: "bg-white-200" }, [
              _c("h1", { staticClass: "mb-5" }, [
                _c("strong", [_vm._v(_vm._s(_vm.edit ? "EDIT" : "ADD NEW"))])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "grid grid-cols-2 gap-4" },
                [
                  _c("CustomInput", {
                    attrs: {
                      inputData: {
                        field: _vm.fields.loan_description,
                        value: _vm.loan_description,
                        that: _vm.that
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("CustomInput", {
                    attrs: {
                      inputData: {
                        field: _vm.fields.loan_amt,
                        value: _vm.loan_amt,
                        that: _vm.that
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("CustomInput", {
                    attrs: {
                      inputData: {
                        field: _vm.fields.monthly_amor,
                        value: _vm.monthly_amor,
                        that: _vm.that
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("CustomInput", {
                    attrs: {
                      inputData: {
                        field: _vm.fields.remaining_times_topay,
                        value: _vm.remaining_times_topay,
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
                [_c("Submitting", { attrs: { submitting: _vm.submitting } })],
                1
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-span-4" },
              [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "CustomTable",
                  {
                    attrs: {
                      wrapper_style: "height: 300px; overflow-y: auto;",
                      fields: {
                        actions: {
                          name: "actions",
                          labelText: "Actions",
                          filterable: false,
                          sortable: false,
                          wrapperClass: "w-2"
                        },
                        loan_description: {
                          name: "loan_description",
                          labelText: "Loan Description",
                          filterable: false,
                          sortable: false,
                          wrapperClass: "w-2"
                        },
                        loan_amt: {
                          name: "loan_amt",
                          labelText: "Amount",
                          filterable: false,
                          sortable: false,
                          wrapperClass: "w-2"
                        },
                        monthly_amor: {
                          name: "monthly_amor",
                          labelText: "Monthly Amor",
                          filterable: false,
                          sortable: true,
                          wrapperClass: "w-2"
                        },
                        remaining_times_topay: {
                          name: "remaining_times_topay",
                          labelText: "Times to pay",
                          filterable: false,
                          sortable: true,
                          wrapperClass: "w-2"
                        },
                        status: {
                          name: "status",
                          labelText: "Status",
                          filterable: false,
                          sortable: true,
                          wrapperClass: "w-2"
                        }
                      },
                      getter: function() {},
                      setter: function() {},
                      mainVariable: {
                        process: "",
                        order: { type: { type: "asc" } }
                      },
                      data: [],
                      sortable: false,
                      filterable: false
                    }
                  },
                  _vm._l(_vm.loans_list, function(loan, key) {
                    return _c("tr", { key: key }, [
                      _c("td", { staticClass: "bg-gray-200 px-4 py-4" }, [
                        _vm._v(
                          "\n                            " +
                            _vm._s(key + 1) +
                            "\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "px-4 py-4" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-success",
                            attrs: { type: "button" },
                            on: {
                              click: function() {
                                return _vm.edit_loans(loan)
                              }
                            }
                          },
                          [
                            _vm.active_item.id == loan.id
                              ? [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(
                                        _vm.edit ? "Cancel Edit" : "Edit"
                                      ) +
                                      "\n                                "
                                  )
                                ]
                              : [_vm._v(" Edit ")]
                          ],
                          2
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "px-4 py-4" }, [
                        _vm._v(
                          "\n                            " +
                            _vm._s(loan.loan_description) +
                            "\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "px-4 py-4" }, [
                        _vm._v(
                          "\n                            " +
                            _vm._s(loan.loan_amt) +
                            "\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "px-4 py-4" }, [
                        _vm._v(
                          "\n                            " +
                            _vm._s(loan.monthly_amor) +
                            "\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "px-4 py-4" }, [
                        _vm._v(
                          "\n                            " +
                            _vm._s(loan.remaining_times_topay) +
                            "\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "px-4 py-4" }, [
                        loan.status == 1
                          ? _c("span", [_vm._v("Ongoing")])
                          : _vm._e(),
                        _vm._v(" "),
                        loan.status == 0
                          ? _c("span", [_vm._v("Paid")])
                          : _vm._e()
                      ])
                    ])
                  }),
                  0
                )
              ],
              1
            )
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h1", { staticClass: "mb-5" }, [
      _c("strong", [_vm._v("Loan List")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Salaries/Salaries.vue?vue&type=template&id=6ac5b6d4&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Salaries/Salaries.vue?vue&type=template&id=6ac5b6d4& ***!
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
  return _c(
    "div",
    {
      class: {
        "rounded p-4": true,
        "bg-white": !_vm.edit,
        "bg-green-50": _vm.edit
      }
    },
    [
      _c(
        "div",
        { staticClass: "col-span-5 mb-5 flex items-center justify-between" },
        [
          _c("div", {}, [
            _vm._v("\n            Salary\n            "),
            !_vm.isEmpty(_vm.employees.active_employee)
              ? _c("span", [
                  _vm._v(
                    "\n                of " +
                      _vm._s(_vm.employees.active_employee.full_name)
                  )
                ])
              : _vm._e()
          ])
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
            { staticClass: "grid grid-cols-1 md:grid-cols-6 gap-2" },
            [
              _c("CustomInput", {
                attrs: {
                  inputData: {
                    field: _vm.fields.monthly_salary,
                    value: _vm.monthly_salary,
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
            [_c("Submitting", { attrs: { submitting: _vm.submitting } })],
            1
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);