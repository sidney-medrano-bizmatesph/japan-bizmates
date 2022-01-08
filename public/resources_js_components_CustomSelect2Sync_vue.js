(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_CustomSelect2Sync_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomSelect2Sync.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomSelect2Sync.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions */ "./resources/js/functions/index.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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


var tokens = {};
var results = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["field", "className", "onChange", "error", "success", "value", "disabled", "readonly", "menuItems"],
  mounted: function mounted() {
    var that = this;
    var field = this.field,
        value = this.value;
    $("#".concat(field.id ? field.id : field.name)).on("select2:select", this.onChange);
    $("#".concat(field.id ? field.id : field.name)).select2({
      readonly: this.readonly,
      width: "100%",
      theme: "bootstrap",
      placeholder: field.placeholder,
      data: that.menuItems
    });

    if (value != null && !(0,_functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(value)) {
      if (value.id == undefined) {
        $("#".concat(field.id ? field.id : field.name)).val(value); // Select the option with a value of '1'
      } else {
        $("#".concat(field.id ? field.id : field.name)).val(value.id); // Select the option with a value of '1'
      }

      $("#".concat(field.id ? field.id : field.name)).trigger("change");
    } else {
      $("#".concat(field.id ? field.id : field.name)).val(null); // Select the option with a value of '1'

      $("#".concat(field.id ? field.id : field.name)).trigger("change");
    }

    $("#".concat(field.id ? field.id : field.name, " ~ .select2-container > .selection > .select2-selection")).addClass("form-control input-bordered input-primary height-37px");
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)(["logoutUser"])), {}, {
    isEmpty: _functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty
  }),
  watch: {
    value: function value(newValue) {
      var field = this.field;

      if (newValue != null && !(0,_functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(newValue)) {
        $("#".concat(field.id ? field.id : field.name)).val(newValue.id); // Select the option with a value of '1'

        $("#".concat(field.id ? field.id : field.name)).trigger("change");
      } else {
        $("#".concat(field.id ? field.id : field.name)).val(null); // Select the option with a value of '1'

        $("#".concat(field.id ? field.id : field.name)).trigger("change");
      }
    },
    menuItems: function menuItems(newValue) {
      var field = this.field,
          value = this.value,
          error = this.error,
          success = this.success;
      console.log(newValue, field);
      $("#".concat(field.id ? field.id : field.name)).empty().select2({
        width: "100%",
        theme: "bootstrap",
        placeholder: field.placeholder,
        data: newValue
      });
      $("#".concat(field.id ? field.id : field.name, " ~ .select2-container > .selection > .select2-selection")).addClass("form-control input-bordered input-primary height-37px");

      if (value != null && !(0,_functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(value)) {
        $("#".concat(field.id ? field.id : field.name)).val(value.id); // Select the option with a value of '1'

        $("#".concat(field.id ? field.id : field.name)).trigger("change");
      } else {
        $("#".concat(field.id ? field.id : field.name)).val(null); // Select the option with a value of '1'

        $("#".concat(field.id ? field.id : field.name)).trigger("change");
      }

      if (!(0,_functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(error)) {
        $("#".concat(field.id ? field.id : field.name, " ~ .select2-container > .selection > .select2-selection")).addClass("input-error");
        $("#".concat(field.id ? field.id : field.name, " ~ .select2-container > .selection > .select2-selection")).removeClass(["input-success", "input-primary"]);
      } else {
        $("#".concat(field.id ? field.id : field.name, " ~ .select2-container > .selection > .select2-selection")).addClass("input-primary");
        $("#".concat(field.id ? field.id : field.name, " ~ .select2-container > .selection > .select2-selection")).removeClass("input-error");

        if (success) {
          $("#".concat(field.id ? field.id : field.name, " ~ .select2-container > .selection > .select2-selection")).addClass("input-success");
          $("#".concat(field.id ? field.id : field.name, " ~ .select2-container > .selection > .select2-selection")).removeClass(["input-error", "input-primary"]);
        } else {
          $("#".concat(field.id ? field.id : field.name, " ~ .select2-container > .selection > .select2-selection")).addClass("input-primary");
          $("#".concat(field.id ? field.id : field.name, " ~ .select2-container > .selection > .select2-selection")).removeClass("input-success");
        }
      }
    },
    error: function error() {
      var thisOfThis = this;
      var field = this.field,
          error = this.error,
          success = this.success;

      if (!(0,_functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(error)) {
        $("#".concat(field.id ? field.id : field.name, " ~ .select2-container > .selection > .select2-selection")).addClass("input-error");
        $("#".concat(field.id ? field.id : field.name, " ~ .select2-container > .selection > .select2-selection")).removeClass(["input-success", "input-primary"]);
      } else {
        $("#".concat(field.id ? field.id : field.name, " ~ .select2-container > .selection > .select2-selection")).addClass("input-primary");
        $("#".concat(field.id ? field.id : field.name, " ~ .select2-container > .selection > .select2-selection")).removeClass("input-error");
      }
    },
    success: function success() {
      var thisOfThis = this;
      var field = this.field,
          error = this.error,
          success = this.success;

      if (success && (0,_functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(error)) {
        $("#".concat(field.id ? field.id : field.name, " ~ .select2-container > .selection > .select2-selection")).addClass("input-success");
        $("#".concat(field.id ? field.id : field.name, " ~ .select2-container > .selection > .select2-selection")).removeClass(["input-error", "input-primary"]);
      } else {
        $("#".concat(field.id ? field.id : field.name, " ~ .select2-container > .selection > .select2-selection")).addClass("input-primary");
        $("#".concat(field.id ? field.id : field.name, " ~ .select2-container > .selection > .select2-selection")).removeClass("input-success");
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/CustomSelect2Sync.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/CustomSelect2Sync.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomSelect2Sync_vue_vue_type_template_id_a776d136___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomSelect2Sync.vue?vue&type=template&id=a776d136& */ "./resources/js/components/CustomSelect2Sync.vue?vue&type=template&id=a776d136&");
/* harmony import */ var _CustomSelect2Sync_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomSelect2Sync.vue?vue&type=script&lang=js& */ "./resources/js/components/CustomSelect2Sync.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CustomSelect2Sync_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CustomSelect2Sync_vue_vue_type_template_id_a776d136___WEBPACK_IMPORTED_MODULE_0__.render,
  _CustomSelect2Sync_vue_vue_type_template_id_a776d136___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CustomSelect2Sync.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/CustomSelect2Sync.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/CustomSelect2Sync.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSelect2Sync_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomSelect2Sync.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomSelect2Sync.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSelect2Sync_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/CustomSelect2Sync.vue?vue&type=template&id=a776d136&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/CustomSelect2Sync.vue?vue&type=template&id=a776d136& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSelect2Sync_vue_vue_type_template_id_a776d136___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSelect2Sync_vue_vue_type_template_id_a776d136___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSelect2Sync_vue_vue_type_template_id_a776d136___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomSelect2Sync.vue?vue&type=template&id=a776d136& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomSelect2Sync.vue?vue&type=template&id=a776d136&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomSelect2Sync.vue?vue&type=template&id=a776d136&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomSelect2Sync.vue?vue&type=template&id=a776d136& ***!
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
  return _c("div", [
    _c("select", {
      attrs: {
        id: !_vm.isEmpty(_vm.field.id) ? _vm.field.id : _vm.field.name,
        name: _vm.field.name,
        disabled: _vm.disabled
      }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);