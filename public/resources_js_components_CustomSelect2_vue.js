(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_CustomSelect2_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomSelect2.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomSelect2.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions */ "./resources/js/functions/index.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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




var CancelToken = (axios__WEBPACK_IMPORTED_MODULE_1___default().CancelToken);
var tokens = {};
var results = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["field", "className", "onChange", "error", "success", "value", "functions", "disabled", "readonly", "multiple"],
  beforeDestroy: function beforeDestroy() {
    var field = this.field,
        value = this.value;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(field.name)).select2("destroy");
  },
  mounted: function mounted() {
    var that = this;
    var field = this.field,
        value = this.value;
    var mySelect2 = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(field.name)).select2({
      width: "100%",
      theme: "bootstrap",
      placeholder: field.placeholder,
      ajax: {
        data: that.functions.dataFunction ? that.functions.dataFunction : function (params) {
          return {
            filter: [{
              searchValue: params.term ? params.term : "",
              searchField: field.loadParameters.searchField,
              type: field.loadParameters.type,
              DBRaw: field.loadParameters.DBRaw != undefined ? field.loadParameters.DBRaw : ""
            }],
            order: _defineProperty({}, field.loadParameters.searchField, {
              type: "asc"
            }),
            additionalParameters: field.additionalParameters,
            rowsPerPage: field.loadParameters.rowsPerPage,
            page: params.page ? params.page - 1 : 0
          };
        },
        transport: that.functions.transportFunction ? that.functions.transportFunction : function (params, success, failure) {
          var url = field.loadParameters.url;

          if (tokens[url] != undefined) {
            tokens[url]();
          }

          axios__WEBPACK_IMPORTED_MODULE_1___default().post(field.loadParameters.url, params.data, {
            cancelToken: new CancelToken(function executor(c) {
              // An executor function receives a cancel function as a parameter
              tokens[url] = c;
            })
          }).then(function (res) {
            tokens[url] = undefined;
            success(res.data);
          })["catch"](function (err) {
            if (err.response && err.response.data && err.response.data.message && err.response.data.message == "Token has expired") {
              that.logoutUser();
            }
          });
        },
        processResults: that.functions.processResults ? that.functions.processResults : function (data, params) {
          return {
            results: data.result.map(function (item) {
              return {
                id: item.id,
                text: item[field.loadParameters.searchField]
              };
            }),
            pagination: {
              more: (params.page ? params.page : 0 + 1) * field.loadParameters.rowsPerPage < data.count
            } // totals: data.count

          };
        }
      }
    });

    if (this.multiple == false) {
      if (value != null && !(0,_functions__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(value)) jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(field.name)).append("<option value=".concat(value.id, " selected>").concat(value.text, "</option>"));
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(field.name)).on("select2:select", this.onChange);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(field.name)).on("select2:unselect", function (event) {});
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(field.name)).on("select2:select", function (event) {
        var option = new Option("Sidney", 60759, true, true);
        var options = [];
        options.push(option);
        mySelect2.append(options).trigger("change");
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(field.name)).on("select2:unselect", function (event) {
        var remainingData = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(field.name)).select2("data").filter(function (res) {
          return parseFloat(res.id) != event.params.data.id;
        }).map(function (res) {
          return res.id;
        });
        mySelect2.val(remainingData).trigger("change");
      });
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(field.name, " ~ .select2-container > .selection > .select2-selection")).addClass("default-form-control");
  },
  methods: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapActions)(["logoutUser"])),
  watch: {
    error: function error() {
      var thisOfThis = this;
      var field = this.field,
          error = this.error,
          success = this.success;

      if (!(0,_functions__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(error)) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(field.name, " ~ .select2-container > .selection > .select2-selection")).addClass("error-form-control");
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(field.name, " ~ .select2-container > .selection > .select2-selection")).removeClass(["success-form-control", "default-form-control"]);
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(field.name, " ~ .select2-container > .selection > .select2-selection")).addClass("default-form-control");
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(field.name, " ~ .select2-container > .selection > .select2-selection")).removeClass("error-form-control");
      }
    },
    success: function success() {
      var thisOfThis = this;
      var field = this.field,
          error = this.error,
          success = this.success;

      if (success && (0,_functions__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(error)) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(field.name, " ~ .select2-container > .selection > .select2-selection")).addClass("success-form-control");
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(field.name, " ~ .select2-container > .selection > .select2-selection")).removeClass("error-form-control default-form-control");
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(field.name, " ~ .select2-container > .selection > .select2-selection")).addClass("default-form-control");
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(field.name, " ~ .select2-container > .selection > .select2-selection")).removeClass("success-form-control");
      }
    },
    value: function value(newValue, oldValue) {
      var field = this.field;

      if (!(0,_functions__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(newValue) && newValue != null) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(field.name)).append("<option value=".concat(newValue.id, " selected>").concat(newValue.text, "</option>"));
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(field.name)).append("<option value='' selected></option>");
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/CustomSelect2.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/CustomSelect2.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomSelect2_vue_vue_type_template_id_0f41772a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomSelect2.vue?vue&type=template&id=0f41772a& */ "./resources/js/components/CustomSelect2.vue?vue&type=template&id=0f41772a&");
/* harmony import */ var _CustomSelect2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomSelect2.vue?vue&type=script&lang=js& */ "./resources/js/components/CustomSelect2.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CustomSelect2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CustomSelect2_vue_vue_type_template_id_0f41772a___WEBPACK_IMPORTED_MODULE_0__.render,
  _CustomSelect2_vue_vue_type_template_id_0f41772a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CustomSelect2.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/CustomSelect2.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/CustomSelect2.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSelect2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomSelect2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomSelect2.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSelect2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/CustomSelect2.vue?vue&type=template&id=0f41772a&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/CustomSelect2.vue?vue&type=template&id=0f41772a& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSelect2_vue_vue_type_template_id_0f41772a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSelect2_vue_vue_type_template_id_0f41772a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSelect2_vue_vue_type_template_id_0f41772a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomSelect2.vue?vue&type=template&id=0f41772a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomSelect2.vue?vue&type=template&id=0f41772a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomSelect2.vue?vue&type=template&id=0f41772a&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomSelect2.vue?vue&type=template&id=0f41772a& ***!
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
  return _c("div", [
    _c("select", {
      attrs: {
        id: _vm.field.id ? _vm.field.id : _vm.field.name,
        name: _vm.field.name,
        disabled: _vm.disabled,
        multiple: _vm.multiple
      }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);