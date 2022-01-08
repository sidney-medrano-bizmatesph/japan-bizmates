(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_CustomTable_vue-_89f11"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomTable.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomTable.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions */ "./resources/js/functions/index.js");
/* harmony import */ var _FormFields_customFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FormFields/customFilter */ "./resources/js/FormFields/customFilter.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    filterable: {
      type: Boolean,
      "default": true
    },
    sortable: {
      type: Boolean,
      "default": true
    },
    no_count: {
      type: Boolean,
      "default": false
    },
    wrapper_style: {
      type: String,
      "default": ""
    },
    table_style: {
      type: String,
      "default": ""
    },
    getter: {
      type: Function,
      "default": function _default() {}
    },
    setter: {
      type: Function,
      "default": function _default() {}
    },
    data: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    fields: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    mainVariable: {
      type: Object,
      "default": function _default() {
        return {
          process: ""
        };
      }
    }
  },
  data: function data() {
    return {
      customFilterFields: _FormFields_customFilter__WEBPACK_IMPORTED_MODULE_1__.default
    };
  },
  components: {
    CustomButton: function CustomButton() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_CustomButton_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../components/CustomButton */ "./resources/js/components/CustomButton.vue"));
    }
  },
  computed: {
    nonHiddenFields: function nonHiddenFields() {
      return _.pickBy(this.fields, function (field) {
        return !field.hidden;
      });
    }
  },
  methods: {
    isEmpty: _functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty,
    clearFilter: function clearFilter() {
      var searchField = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var mainVariable = this.mainVariable,
          getter = this.getter,
          setter = this.setter,
          fields = this.fields;
      this.searchValue = "";

      var field = _.values(fields).filter(function (field) {
        return field.filterable == undefined;
      })[0];

      var defaultFilter = [{
        searchField: field.name,
        type: "begins",
        searchValue: "",
        fieldType: field.type,
        DBRaw: field.loadParameters && field.loadParameters.DBRaw ? field.loadParameters.DBRaw : ""
      }];
      var filters = [];

      if ((0,_functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(searchField)) {
        filters = defaultFilter;
      } else {
        filters = mainVariable.filter.filter(function (res, key) {
          return res.searchField != searchField;
        });
      }

      setter({
        filter: filters
      });
      getter({
        filter: filters
      });
    },
    onSort: function onSort(name) {
      var order = _.cloneDeep(this.mainVariable.order);

      var deleted = false;

      if (order[name]) {
        if (order[name].type == "asc") {
          order[name].type = "desc";
        } else if (order[name].type == "desc") {
          delete order[name];
          deleted = true;
        }
      } else {
        order[name] = {
          type: "asc"
        };
      }

      if (!deleted) order[name] = _objectSpread(_objectSpread({}, order[name]), {}, {
        sort: this.fields[name].sort ? this.fields[name].sort : undefined
      });
      this.setter({
        order: order
      });
      this.getter({
        order: order
      });
    },
    clearOrder: function clearOrder() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var getter = this.getter,
          setter = this.setter,
          mainVariable = this.mainVariable;
      var order = {};

      if (name != "") {
        order = _.omit(mainVariable.order, [name]);
      }

      setter({
        order: order
      });
      getter({
        filter: mainVariable.filter,
        order: order,
        page: mainVariable.page,
        rowsPerPage: mainVariable.rowsPerPage,
        category_id: mainVariable.category_id
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/FormFields/customFilter.js":
/*!*************************************************!*\
  !*** ./resources/js/FormFields/customFilter.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  searchField: {
    name: "searchField",
    type: "select",
    wrapperClass: "mb-2 mr-2 inline-block ",
    placeholder: "Please Select",
    inputClassOverride: "plain-form-control default-form-control"
  },
  type: {
    name: "type",
    type: "select",
    wrapperClass: "mb-2 mr-2 inline-block ",
    placeholder: "Please Select",
    menuItems: [{
      text: "Begins with",
      id: "begins"
    }, {
      text: "Does not begin",
      id: "not begins"
    }, {
      text: "Contains",
      id: "contains"
    }, {
      text: "Does not contain",
      id: "not contains"
    }, {
      text: "Ends with",
      id: "ends"
    }, {
      text: "Does not end with",
      id: "not ends"
    }, {
      text: "Equal to",
      id: "equal"
    }, {
      text: "Not equal to",
      id: "not equal"
    }],
    inputClassOverride: "plain-form-control default-form-control"
  },
  searchValue: {
    type: "text",
    name: "searchValue",
    placeholder: "Search",
    wrapperClass: "mb-2 mr-2 inline-block",
    inputProps: {
      size: 45
    },
    inputClassOverride: "plain-form-control default-form-control"
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomTable.vue?vue&type=style&index=1&id=19878342&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomTable.vue?vue&type=style&index=1&id=19878342&scoped=true&lang=css& ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n@-webkit-keyframes spinner-data-v-19878342 {\n0% {\r\n        -webkit-transform: rotate(0deg);\n}\n100% {\r\n        -webkit-transform: rotate(360deg);\n}\n}\n@keyframes spinner-data-v-19878342 {\n0% {\r\n        transform: rotate(0deg);\n}\n100% {\r\n        transform: rotate(360deg);\n}\n}\n.table-loader[data-v-19878342] {\r\n    margin-top: 36px;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: calc(100% - 36px);\r\n    background-color: rgba(255, 255, 255, 0.5);\r\n    padding-top: 20px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomTable.vue?vue&type=style&index=1&id=19878342&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomTable.vue?vue&type=style&index=1&id=19878342&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomTable_vue_vue_type_style_index_1_id_19878342_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomTable.vue?vue&type=style&index=1&id=19878342&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomTable.vue?vue&type=style&index=1&id=19878342&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomTable_vue_vue_type_style_index_1_id_19878342_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomTable_vue_vue_type_style_index_1_id_19878342_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/CustomTable.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/CustomTable.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomTable_vue_vue_type_template_id_19878342_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomTable.vue?vue&type=template&id=19878342&scoped=true& */ "./resources/js/components/CustomTable.vue?vue&type=template&id=19878342&scoped=true&");
/* harmony import */ var _CustomTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomTable.vue?vue&type=script&lang=js& */ "./resources/js/components/CustomTable.vue?vue&type=script&lang=js&");
/* harmony import */ var _CustomTable_vue_vue_type_style_index_1_id_19878342_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomTable.vue?vue&type=style&index=1&id=19878342&scoped=true&lang=css& */ "./resources/js/components/CustomTable.vue?vue&type=style&index=1&id=19878342&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _CustomTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CustomTable_vue_vue_type_template_id_19878342_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _CustomTable_vue_vue_type_template_id_19878342_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "19878342",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CustomTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/CustomTable.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/CustomTable.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomTable.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/CustomTable.vue?vue&type=style&index=1&id=19878342&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/CustomTable.vue?vue&type=style&index=1&id=19878342&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomTable_vue_vue_type_style_index_1_id_19878342_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomTable.vue?vue&type=style&index=1&id=19878342&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomTable.vue?vue&type=style&index=1&id=19878342&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/CustomTable.vue?vue&type=template&id=19878342&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/CustomTable.vue?vue&type=template&id=19878342&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomTable_vue_vue_type_template_id_19878342_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomTable_vue_vue_type_template_id_19878342_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomTable_vue_vue_type_template_id_19878342_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomTable.vue?vue&type=template&id=19878342&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomTable.vue?vue&type=template&id=19878342&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomTable.vue?vue&type=template&id=19878342&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomTable.vue?vue&type=template&id=19878342&scoped=true& ***!
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
    {
      staticClass: "overflow-x-auto w-full relative mt-1",
      style: _vm.wrapper_style
    },
    [
      _vm.mainVariable.process != ""
        ? _c("div", { staticClass: "table-loader" }, [
            _c("div", {
              staticClass: "loader loader-default-class h-20 w-20 m-auto"
            })
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.filterable != false
        ? _c(
            "div",
            { staticClass: "mb-1" },
            [
              _c("strong", [_vm._v("Filters:")]),
              _vm._v(" "),
              _vm.mainVariable.filter &&
              !_vm.isEmpty(
                _vm.mainVariable.filter.filter(function(res) {
                  return res.searchValue != ""
                })
              )
                ? [
                    _vm._l(
                      _vm.mainVariable.filter.filter(function(res) {
                        return res.searchValue != ""
                      }),
                      function(filterItem, key) {
                        return [
                          _c(
                            "a",
                            {
                              key: key,
                              on: {
                                click: function($event) {
                                  return _vm.clearFilter(
                                    _vm.fields[filterItem.searchField].name
                                  )
                                }
                              }
                            },
                            [
                              _c("span", { staticClass: "order-link" }, [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(
                                      _vm.fields[filterItem.searchField]
                                        .altLabelText
                                        ? _vm.fields[filterItem.searchField]
                                            .altLabelText
                                        : _vm.fields[filterItem.searchField]
                                            .labelText
                                    ) +
                                    "\n                    "
                                )
                              ]),
                              _vm._v(
                                "\n                    -\n                    " +
                                  _vm._s(
                                    _vm.customFilterFields.type.menuItems.filter(
                                      function(res) {
                                        return res.id == filterItem.type
                                      }
                                    )[0].text
                                  ) +
                                  '\n                    "' +
                                  _vm._s(filterItem.searchValue) +
                                  '" , ' +
                                  _vm._s(" ") +
                                  "\n                "
                              )
                            ]
                          )
                        ]
                      }
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "order-link",
                        on: {
                          click: function($event) {
                            return _vm.clearFilter()
                          }
                        }
                      },
                      [_vm._v("Clear")]
                    )
                  ]
                : [_vm._v("No filter")]
            ],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.sortable != false
        ? _c(
            "div",
            {},
            [
              _c("strong", [_vm._v("Sorting:")]),
              _vm._v(" "),
              _vm.mainVariable.order && !_vm.isEmpty(_vm.mainVariable.order)
                ? [
                    _vm._l(Object.keys(_vm.mainVariable.order), function(
                      orderKey
                    ) {
                      return [
                        _c(
                          "a",
                          {
                            key: orderKey,
                            staticClass: "order-link",
                            on: {
                              click: function($event) {
                                return _vm.clearOrder(orderKey)
                              }
                            }
                          },
                          [
                            _vm._v(
                              _vm._s(
                                _vm.nonHiddenFields[orderKey].altLabelText
                                  ? _vm.nonHiddenFields[orderKey].altLabelText
                                  : _vm.nonHiddenFields[orderKey].labelText
                              )
                            )
                          ]
                        ),
                        _vm._v(
                          "\n                : " +
                            _vm._s(_vm.mainVariable.order[orderKey].type) +
                            "\n            "
                        )
                      ]
                    })
                  ]
                : [_vm._v("No sorting")],
              _vm._v(" "),
              !_vm.isEmpty(_vm.mainVariable.order)
                ? _c(
                    "a",
                    {
                      staticClass: "order-link",
                      on: {
                        click: function($event) {
                          return _vm.clearOrder()
                        }
                      }
                    },
                    [_vm._v("Clear")]
                  )
                : _vm._e()
            ],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "table",
        {
          staticClass: "table-auto border-collapse w-full",
          style: _vm.table_style
        },
        [
          _c("thead", [
            _c(
              "tr",
              {
                staticClass:
                  "rounded-lg text-sm font-medium text-gray-700 text-left",
                staticStyle: { "font-size": "0.9674rem" }
              },
              [
                this.$slots.header == undefined
                  ? [
                      _vm.no_count == false || _vm.no_count == undefined
                        ? _c("th", {
                            staticClass: "px-4 py-2",
                            staticStyle: {
                              "background-color": "#f8f8f8",
                              width: "50px"
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _vm._l(_vm.nonHiddenFields, function(field) {
                        var _obj
                        return _c(
                          "th",
                          {
                            key: field.name,
                            class:
                              ((_obj = {
                                "px-4 py-2": true
                              }),
                              (_obj[field.thClass] =
                                field.thClass != undefined),
                              _obj),
                            style:
                              "background-color:#f8f8f8;" +
                              (field.thStyle ? field.thStyle : "")
                          },
                          [
                            field.sortable == undefined
                              ? [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "cursor-pointer",
                                      on: {
                                        click: function($event) {
                                          return _vm.onSort(field.name)
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                " +
                                          _vm._s(
                                            field.altLabelText
                                              ? field.altLabelText
                                              : field.labelText
                                          ) +
                                          "\n                                "
                                      ),
                                      _vm.mainVariable.order[field.name]
                                        ? _c("i", {
                                            class:
                                              _vm.mainVariable.order[field.name]
                                                .type == "asc"
                                                ? "fa fa-caret-up"
                                                : "fa fa-caret-down"
                                          })
                                        : _vm._e()
                                    ]
                                  )
                                ]
                              : [
                                  _c("span", [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(
                                          field.altLabelText
                                            ? field.altLabelText
                                            : field.labelText
                                        ) +
                                        "\n                            "
                                    )
                                  ])
                                ]
                          ],
                          2
                        )
                      })
                    ]
                  : [_vm._t("header")]
              ],
              2
            )
          ]),
          _vm._v(" "),
          this.$slots.default == undefined
            ? _c(
                "tbody",
                { staticClass: "text-sm font-normal text-gray-700" },
                [
                  _vm.isEmpty(_vm.data)
                    ? [
                        _c(
                          "tr",
                          {
                            staticClass:
                              "hover:bg-gray-100 border-b border-gray-200 py-10"
                          },
                          [
                            _c(
                              "td",
                              {
                                staticClass: "px-4 py-4 text-center",
                                attrs: {
                                  colspan:
                                    Object.keys(_vm.nonHiddenFields).length + 2
                                }
                              },
                              [
                                _c("p", { staticClass: "text-lg" }, [
                                  _vm._v("No Results")
                                ])
                              ]
                            )
                          ]
                        )
                      ]
                    : _vm._l(_vm.data, function(dataItem, key) {
                        return _c(
                          "tr",
                          {
                            key: key,
                            staticClass:
                              "hover:bg-gray-100 border-b border-gray-200 py-10",
                            attrs: { id: "tr_id_" + key }
                          },
                          _vm._l(dataItem, function(item) {
                            var _obj, _obj$1, _obj$2
                            return _c(
                              "td",
                              {
                                key: item.key,
                                class:
                                  ((_obj = {
                                    "px-4 py-4": true
                                  }),
                                  (_obj[item.className] = item.className),
                                  _obj)
                              },
                              [
                                Array.isArray(item)
                                  ? [
                                      _vm._l(item, function(result, item_key) {
                                        var _obj, _obj$1
                                        return [
                                          result.type == "button"
                                            ? _c(
                                                "button",
                                                {
                                                  key: item_key,
                                                  class:
                                                    ((_obj = {
                                                      btn: true
                                                    }),
                                                    (_obj[result.className] =
                                                      result.className),
                                                    _obj),
                                                  attrs: {
                                                    type: "button",
                                                    disabled: result.disabled
                                                  },
                                                  on: { click: result.onClick }
                                                },
                                                [
                                                  result.icon
                                                    ? _c("i", {
                                                        class:
                                                          ((_obj$1 = {}),
                                                          (_obj$1[result.icon] =
                                                            result.icon),
                                                          (_obj$1[
                                                            "mr-2"
                                                          ] = true),
                                                          _obj$1)
                                                      })
                                                    : _vm._e(),
                                                  _vm._v(
                                                    _vm._s(
                                                      result.altLabelText
                                                        ? result.altLabelText
                                                        : result.labelText
                                                    ) +
                                                      "\n                                "
                                                  )
                                                ]
                                              )
                                            : item.type == "html"
                                            ? _c("div", {
                                                key: result.key,
                                                class: item.wrapperClass,
                                                domProps: {
                                                  innerHTML: _vm._s(result.html)
                                                }
                                              })
                                            : _vm._e()
                                        ]
                                      })
                                    ]
                                  : typeof item == "object"
                                  ? [
                                      item.type == "html"
                                        ? _c("div", {
                                            class: item.wrapperClass,
                                            domProps: {
                                              innerHTML: _vm._s(item.html)
                                            }
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      item.type == "button"
                                        ? _c(
                                            "button",
                                            {
                                              key: _vm.item_key,
                                              class:
                                                ((_obj$1 = {
                                                  btn: true
                                                }),
                                                (_obj$1[item.className] =
                                                  item.className),
                                                _obj$1),
                                              attrs: {
                                                type: "button",
                                                disabled: item.disabled
                                              },
                                              on: { click: item.onClick }
                                            },
                                            [
                                              item.icon
                                                ? _c("i", {
                                                    class:
                                                      ((_obj$2 = {}),
                                                      (_obj$2[item.icon] =
                                                        item.icon),
                                                      (_obj$2["mr-2"] = true),
                                                      _obj$2)
                                                  })
                                                : _vm._e(),
                                              _vm._v(
                                                _vm._s(
                                                  item.altLabelText
                                                    ? item.altLabelText
                                                    : item.labelText
                                                ) +
                                                  "\n                            "
                                              )
                                            ]
                                          )
                                        : [
                                            _vm._v(
                                              "\n                                " +
                                                _vm._s(
                                                  item.altLabelText
                                                    ? item.altLabelText
                                                    : item.labelText
                                                ) +
                                                "\n                            "
                                            )
                                          ]
                                    ]
                                  : [_vm._v(_vm._s(item))]
                              ],
                              2
                            )
                          }),
                          0
                        )
                      })
                ],
                2
              )
            : _c("tbody", [_vm._t("default")], 2)
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);