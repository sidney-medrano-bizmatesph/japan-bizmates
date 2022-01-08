(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_CustomFilter_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomFilter.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomFilter.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FormFields_customFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../FormFields/customFilter */ "./resources/js/FormFields/customFilter.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./resources/js/functions/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["fields", "mainVariable", "getter", "setter", "id"],
  data: function data() {
    return {
      customFilterFields: _FormFields_customFilter__WEBPACK_IMPORTED_MODULE_0__.default,
      searchField: this.mainVariable.filter[0].searchField,
      type: this.mainVariable.filter[0].type,
      searchValue: this.mainVariable.filter[0].searchValue,
      fieldType: this.mainVariable.filter[0].fieldType,
      DBRaw: this.mainVariable.filter[0].DBRaw,
      that: this,
      successes: {},
      errors: {}
    };
  },
  computed: {
    filterableFields: function filterableFields() {
      var filterableFields = _.pickBy(this.fields, function (value, key) {
        return value.filterable == undefined;
      });

      return Object.keys(filterableFields).map(function (filterable) {
        return {
          text: filterableFields[filterable].labelText,
          id: filterableFields[filterable].name
        };
      });
    }
  },
  methods: {
    isEmpty: _functions__WEBPACK_IMPORTED_MODULE_1__.isEmpty,
    onChange: function onChange(event) {
      event.preventDefault();
      this.searchValue = "";
      this.fieldType = this.fields[event.target.value].type;
      this.DBRaw = this.fields[event.target.value].loadParameters && this.fields[event.target.value].loadParameters.DBRaw ? this.fields[event.target.value].loadParameters.DBRaw : "";
      this[event.target.name] = event.target.value;
    },
    clearSearch: function clearSearch(event) {
      var fields = this.fields;
      this.searchValue = "";

      var field = _.values(fields).filter(function (field) {
        return field.filterable == undefined;
      })[0];

      this.setter({
        page: 0,
        filter: [{
          searchField: field.name,
          type: "begins",
          searchValue: "",
          fieldType: field.type,
          DBRaw: field.loadParameters && field.loadParameters.DBRaw ? field.loadParameters.DBRaw : ""
        }]
      });
      this.getter({
        page: 0,
        filter: [{
          searchField: field.name,
          type: "begins",
          searchValue: "",
          fieldType: field.type,
          DBRaw: field.loadParameters && field.loadParameters.DBRaw ? field.loadParameters.DBRaw : ""
        }]
      });
    },
    onSubmit: function onSubmit(event) {
      var _this = this;

      event.preventDefault();
      var newFilter = {
        searchField: this.searchField,
        type: this.type,
        searchValue: this.searchValue,
        fieldType: this.fieldType,
        DBRaw: this.DBRaw
      };
      var filters = this.mainVariable.filter;
      var index = 0;
      var selectedFilter = filters.filter(function (res, key) {
        if (res.searchField == _this.searchField) {
          index = key;
          return true;
        }
      });

      if ((0,_functions__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(selectedFilter)) {
        filters.push(newFilter);
      } else {
        filters[index] = newFilter;
      }

      this.setter({
        page: 0,
        filter: filters
      });
      this.getter({
        page: 0,
        filter: filters
      });
    }
  },
  components: {
    CustomInput: function CustomInput() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_CustomInput_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./CustomInput */ "./resources/js/components/CustomInput.vue"));
    },
    CustomButton: function CustomButton() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_CustomButton_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./CustomButton */ "./resources/js/components/CustomButton.vue"));
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

/***/ "./resources/js/components/CustomFilter.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/CustomFilter.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomFilter_vue_vue_type_template_id_172351b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomFilter.vue?vue&type=template&id=172351b4& */ "./resources/js/components/CustomFilter.vue?vue&type=template&id=172351b4&");
/* harmony import */ var _CustomFilter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomFilter.vue?vue&type=script&lang=js& */ "./resources/js/components/CustomFilter.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CustomFilter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CustomFilter_vue_vue_type_template_id_172351b4___WEBPACK_IMPORTED_MODULE_0__.render,
  _CustomFilter_vue_vue_type_template_id_172351b4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CustomFilter.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/CustomFilter.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/CustomFilter.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFilter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomFilter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomFilter.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFilter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/CustomFilter.vue?vue&type=template&id=172351b4&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/CustomFilter.vue?vue&type=template&id=172351b4& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFilter_vue_vue_type_template_id_172351b4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFilter_vue_vue_type_template_id_172351b4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFilter_vue_vue_type_template_id_172351b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomFilter.vue?vue&type=template&id=172351b4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomFilter.vue?vue&type=template&id=172351b4&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomFilter.vue?vue&type=template&id=172351b4&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomFilter.vue?vue&type=template&id=172351b4& ***!
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
    "form",
    {
      staticClass: "flex flex-wrap items-baseline",
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
            field: _vm.customFilterFields.searchField,
            value: _vm.searchField,
            that: _vm.that,
            menuItems: _vm.filterableFields,
            onChange: _vm.onChange
          }
        }
      }),
      _vm._v(" "),
      _c("CustomInput", {
        attrs: {
          inputData: {
            field: _vm.customFilterFields.type,
            value: _vm.type,
            that: _vm.that,
            menuItems: _vm.customFilterFields.type.menuItems
          }
        }
      }),
      _vm._v(" "),
      _c("CustomInput", {
        attrs: {
          inputData: {
            field: _vm.customFilterFields.searchValue,
            value: _vm.searchValue,
            that: _vm.that
          }
        }
      }),
      _vm._v(" "),
      _c(
        "CustomButton",
        {
          attrs: {
            buttonType: "submit",
            type: "primary",
            buttonClass: "filter-button mb-2"
          }
        },
        [_c("i", { staticClass: "fas fa-search" })]
      ),
      _vm._v(" "),
      _c(
        "CustomButton",
        {
          attrs: {
            buttonType: "button",
            type: "error",
            buttonClass: "filter-button mb-2",
            onClick: _vm.clearSearch
          }
        },
        [_c("i", { staticClass: "fas fa-times" })]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);