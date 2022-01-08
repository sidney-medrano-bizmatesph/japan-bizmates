(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_CustomInput_vue-_6c341"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomInput.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomInput.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions */ "./resources/js/functions/index.js");
/* harmony import */ var _functions_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/validator */ "./resources/js/functions/validator.js");
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
//
//
//
//
//
//
//
//
//
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
  props: ["inputData"],
  data: function data() {
    return _objectSpread({}, _functions__WEBPACK_IMPORTED_MODULE_0__.defaultClasses);
  },
  mounted: function mounted() {
    var _this$inputData = this.inputData,
        that = _this$inputData.that,
        field = _this$inputData.field,
        trumbowygConfig = _this$inputData.trumbowygConfig,
        value = _this$inputData.value;

    if (field.type == "trumbowyg") {
      var id = "#".concat(field.id ? field.id : field.name);
      $(id).trumbowyg("html", value);
      $(id).trumbowyg(_objectSpread({}, trumbowygConfig)).on("tbwblur", function () {
        that[field.name] = $(id).trumbowyg("html");
        (0,_functions_validator__WEBPACK_IMPORTED_MODULE_1__.validate)(field, $(id).trumbowyg("html"), that);
      });
    }
  },
  // watch: {
  //     "inputData.value": function (newValue) {
  //         let { that, field, trumbowygConfig, value } = this.inputData;
  //         if (field.type == "trumbowyg") {
  //             let id = `#${field.id ? field.id : field.name}`;
  //             $(id).trumbowyg("html", newValue);
  //         }
  //     },
  // },
  components: {
    CustomSelectSync: function CustomSelectSync() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_CustomSelect2Sync_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./CustomSelect2Sync */ "./resources/js/components/CustomSelect2Sync.vue"));
    },
    CustomSelect: function CustomSelect() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_CustomSelect2_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./CustomSelect2 */ "./resources/js/components/CustomSelect2.vue"));
    }
  },
  computed: {
    error: function error() {
      var that = this.inputData.that,
          inputData = this.inputData;
      var temp = that.errors[inputData.field.name];

      if (!(0,_functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(temp)) {
        if (Array.isArray(temp)) {
          return temp.toString();
        } else {
          return temp;
        }
      } else {
        return temp;
      }
    },
    success: function success() {
      var that = this.inputData.that,
          inputData = this.inputData;
      return that.successes[inputData.field.name];
    }
  },
  methods: {
    ifEmptyThen: _functions__WEBPACK_IMPORTED_MODULE_0__.ifEmptyThen,
    isEmpty: _functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty,
    onChange: function onChange(event) {
      event.preventDefault();
      var that = this.inputData.that,
          inputData = this.inputData;
      if (inputData.onChangeBefore != undefined) inputData.onChangeBefore(event);

      if (inputData.onChange != undefined) {
        inputData.onChange(event);
      } else {
        that[event.target.name] = $("#".concat(inputData.field.name)).val();
        (0,_functions_validator__WEBPACK_IMPORTED_MODULE_1__.validate)(inputData.field, event.target.value, that);

        if (inputData.onChangeAfter != undefined) {
          inputData.onChangeAfter(event);
        }
      }
    },
    select2Select: function select2Select(event) {
      var data = event.params.data;
      var _this$inputData2 = this.inputData,
          field = _this$inputData2.field,
          that = _this$inputData2.that,
          inputData = this.inputData;

      if (inputData.onChange) {
        inputData.onChange(field, data);
        /*
        onChange(field, data){
            that[field.name] = { id: data.id, text: data.text };
            validate(field, data.id, that);
        }
        */
      } else {
        that[field.name] = _objectSpread({}, data);
        (0,_functions_validator__WEBPACK_IMPORTED_MODULE_1__.validate)(field, data.id, that);
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/functions/validator.js":
/*!*********************************************!*\
  !*** ./resources/js/functions/validator.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validate": () => (/* binding */ validate),
/* harmony export */   "myValidator": () => (/* binding */ myValidator),
/* harmony export */   "validateAll": () => (/* binding */ validateAll)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./resources/js/functions/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var validate = function validate(field, value, that) {
  var hasError = false;

  if (field.validation == undefined) {
    return true;
  }

  field.validation.every(function (validate) {
    var paramIndex = validate.indexOf(":");
    var validateString = validate;
    var localValue = value; // if (field.type == "react-draft") {
    //     localValue =
    //         draftToHtml(convertToRaw(value.getCurrentContent())).trim() ==
    //         "<p></p>"
    //             ? ""
    //             : draftToHtml(convertToRaw(value.getCurrentContent()))
    //                   .trim()
    //                   .replace(/(<([^>]+)>)/gi, "");
    // }

    if (paramIndex >= 0) {
      validateString = validate.substring(0, paramIndex);
      var parameter = validate.substring(paramIndex + 1);
    }

    switch (validateString) {
      case "required":
        {
          hasError = myValidator(field.name, [{
            errorTrap: (0,_index__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(localValue),
            errorText: field.messages ? field.messages.required ? field.messages.required : field.labelText + " is required." : field.labelText + " is required."
          }], that);
          break;
        }

      case "max":
        {
          hasError = myValidator(field.name, [{
            errorTrap: localValue > parseInt(parameter),
            errorText: field.messages ? field.messages.max ? field.messages.max : field.labelText + " should not be greater than " + parameter + "." : field.labelText + " should not be greater than " + parameter + "."
          }], that);
          break;
        }

      case "min":
        {
          hasError = myValidator(field.name, [{
            errorTrap: localValue < parseInt(parameter),
            errorText: field.messages ? field.messages.min ? field.messages.min : field.labelText + " should not be lesser than " + parameter + "." : field.labelText + " should not be lesser than " + parameter + "."
          }], that);
          break;
        }

      case "max_len":
        {
          hasError = myValidator(field.name, [{
            errorTrap: localValue.length > parseInt(parameter),
            errorText: field.messages ? field.messages.max_len ? field.messages.max_len : field.labelText + " should not be greater than " + parameter + "." : field.labelText + " should not be greater than " + parameter + "."
          }], that);
          break;
        }

      case "min_len":
        {
          hasError = myValidator(field.name, [{
            errorTrap: localValue.length < parseInt(parameter),
            errorText: field.messages ? field.messages.min_len ? field.messages.min_len : field.labelText + " should not be less than " + parameter + "." : field.labelText + " should not be less than " + parameter + "."
          }], that);
          break;
        }

      case "number":
        {
          hasError = myValidator(field.name, [{
            errorTrap: isNaN(localValue),
            errorText: field.messages && field.messages.min_len ? field.messages.min_len : field.labelText + " should all be a number."
          }], that);
          break;
        }

      case "s_equal":
        {
          hasError = myValidator(field.name, [{
            errorTrap: that[field.name] != that[parameter],
            errorText: field.messages && field.messages.s_equal ? field.messages.s_equal : field.labelText + " should be equal to ".concat(that.fieldsValidation[parameter].labelText, ".")
          }], that);
          break;
        }

      case "email":
        {
          var re = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
          hasError = myValidator(field.name, [{
            errorTrap: !re.test(that[field.name]),
            errorText: field.messages && field.messages.email ? field.messages.email : field.labelText + " must be a valid email."
          }], that);
          break;
        }

      case "success":
        {
          hasError = myValidator(field.name, [{
            errorTrap: false,
            errorText: ""
          }], that);
          break;
        }
    }

    if (hasError) {
      return false;
    } else {
      return true;
    }
  });
  return hasError;
};
var myValidator = function myValidator(name, conditions, that) {
  var state = {};
  conditions.forEach(function (condition) {
    if (condition.errorTrap) {
      state = {
        error: _defineProperty({}, name, condition.errorText)
      };
    }
  });

  if (!(0,_index__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(state)) {
    var successes = that.successes;
    delete successes[name];
    vue__WEBPACK_IMPORTED_MODULE_1__.default.set(that, "errors", _objectSpread(_objectSpread({}, that.errors), state.error));
    vue__WEBPACK_IMPORTED_MODULE_1__.default.set(that, "successes", _objectSpread({}, successes));
  } else {
    var errors = that.errors;
    delete errors[name];
    vue__WEBPACK_IMPORTED_MODULE_1__.default.set(that, "errors", _objectSpread({}, errors));
    vue__WEBPACK_IMPORTED_MODULE_1__.default.set(that, "successes", _objectSpread(_objectSpread({}, that.successes), {}, _defineProperty({}, name, true)));
  }

  return !(0,_index__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(state);
};
var validateAll = function validateAll(fields, that) {
  var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var errors = [];
  var additionalValidation = that.additionalValidation;

  if ((0,_index__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(additionalValidation)) {
    additionalValidation = {};
  }

  Object.keys(fields).map(function (fieldName) {
    if (fields[fieldName].validation != undefined && validate(additionalValidation[fieldName] ? _objectSpread(_objectSpread({}, fields[fieldName]), {}, {
      validation: additionalValidation[fieldName]
    }) : fields[fieldName], values[fieldName] != undefined ? values[fieldName] : that[fieldName], that)) errors.push(true);
  });
  return errors;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomInput.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomInput.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".trumbowyg-editor img {\n  display: inline !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomInput.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomInput.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomInput_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomInput.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomInput.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomInput_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomInput_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/CustomInput.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/CustomInput.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomInput_vue_vue_type_template_id_14677d84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomInput.vue?vue&type=template&id=14677d84& */ "./resources/js/components/CustomInput.vue?vue&type=template&id=14677d84&");
/* harmony import */ var _CustomInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomInput.vue?vue&type=script&lang=js& */ "./resources/js/components/CustomInput.vue?vue&type=script&lang=js&");
/* harmony import */ var _CustomInput_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomInput.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/CustomInput.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _CustomInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CustomInput_vue_vue_type_template_id_14677d84___WEBPACK_IMPORTED_MODULE_0__.render,
  _CustomInput_vue_vue_type_template_id_14677d84___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CustomInput.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/CustomInput.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/CustomInput.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomInput.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/CustomInput.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/CustomInput.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomInput_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomInput.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomInput.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/CustomInput.vue?vue&type=template&id=14677d84&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/CustomInput.vue?vue&type=template&id=14677d84& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomInput_vue_vue_type_template_id_14677d84___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomInput_vue_vue_type_template_id_14677d84___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomInput_vue_vue_type_template_id_14677d84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomInput.vue?vue&type=template&id=14677d84& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomInput.vue?vue&type=template&id=14677d84&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomInput.vue?vue&type=template&id=14677d84&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomInput.vue?vue&type=template&id=14677d84& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _obj, _obj$1, _obj$2, _obj$3, _obj$4, _obj$5, _obj$6, _obj$7, _obj$8
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class:
        ((_obj = {
          "form-control": true
        }),
        (_obj[_vm.inputData.field.wrapperClass] =
          _vm.inputData.field.wrapperClass != undefined),
        _obj)
    },
    [
      !_vm.isEmpty(_vm.inputData.field.labelText)
        ? _c(
            "label",
            {
              class:
                ((_obj$1 = {
                  "block mb-2 text-sm font-bold text-gray-700": true
                }),
                (_obj$1[_vm.inputData.field.labelClass] =
                  _vm.inputData.field.labelClass != undefined),
                (_obj$1["text-red-500"] = _vm.error && _vm.error != ""),
                (_obj$1["text-gray-400"] = _vm.inputData.disabled),
                _obj$1),
              attrs: {
                for:
                  _vm.inputData.field.type == "tumbowyg"
                    ? ""
                    : _vm.inputData.field.name
              }
            },
            [
              _vm._v(
                "\n        " + _vm._s(_vm.inputData.field.labelText) + "\n    "
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.inputData.field.type == "text" ||
      _vm.inputData.field.type == "number" ||
      _vm.inputData.field.type == "password" ||
      _vm.inputData.field.type == "email" ||
      _vm.inputData.field.type == "date"
        ? [
            _vm.ifEmptyThen(_vm.inputData.field.type, "text") === "checkbox"
              ? _c(
                  "input",
                  _vm._b(
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.inputData.value,
                          expression: "inputData.value"
                        }
                      ],
                      class: !_vm.inputData.field.inputClassOverride
                        ? ((_obj$2 = {
                            "input input-bordered": true
                          }),
                          (_obj$2[_vm.inputData.field.inputClass] =
                            _vm.inputData.field.inputClass != undefined),
                          (_obj$2["input-info"] =
                            !(_vm.error && _vm.error != "") &&
                            !_vm.success &&
                            !_vm.inputData.disabled),
                          (_obj$2["input-error"] =
                            _vm.error && _vm.error != ""),
                          (_obj$2["input-success"] =
                            _vm.success && !(_vm.error && _vm.error != "")),
                          _obj$2)
                        : _vm.inputData.field.inputClassOverride,
                      attrs: {
                        id: !_vm.isEmpty(_vm.inputData.field.id)
                          ? _vm.inputData.field.id
                          : _vm.inputData.field.name,
                        name: _vm.inputData.field.name,
                        placeholder: _vm.ifEmptyThen(
                          _vm.inputData.field.placeholder,
                          ""
                        ),
                        type: "checkbox"
                      },
                      domProps: {
                        checked: Array.isArray(_vm.inputData.value)
                          ? _vm._i(_vm.inputData.value, null) > -1
                          : _vm.inputData.value
                      },
                      on: {
                        keyup: _vm.onChange,
                        change: [
                          function($event) {
                            var $$a = _vm.inputData.value,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = null,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(
                                    _vm.inputData,
                                    "value",
                                    $$a.concat([$$v])
                                  )
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    _vm.inputData,
                                    "value",
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(_vm.inputData, "value", $$c)
                            }
                          },
                          _vm.onChange
                        ]
                      }
                    },
                    "input",
                    Object.assign({}, _vm.inputData.field.inputProps),
                    false
                  )
                )
              : _vm.ifEmptyThen(_vm.inputData.field.type, "text") === "radio"
              ? _c(
                  "input",
                  _vm._b(
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.inputData.value,
                          expression: "inputData.value"
                        }
                      ],
                      class: !_vm.inputData.field.inputClassOverride
                        ? ((_obj$3 = {
                            "input input-bordered": true
                          }),
                          (_obj$3[_vm.inputData.field.inputClass] =
                            _vm.inputData.field.inputClass != undefined),
                          (_obj$3["input-info"] =
                            !(_vm.error && _vm.error != "") &&
                            !_vm.success &&
                            !_vm.inputData.disabled),
                          (_obj$3["input-error"] =
                            _vm.error && _vm.error != ""),
                          (_obj$3["input-success"] =
                            _vm.success && !(_vm.error && _vm.error != "")),
                          _obj$3)
                        : _vm.inputData.field.inputClassOverride,
                      attrs: {
                        id: !_vm.isEmpty(_vm.inputData.field.id)
                          ? _vm.inputData.field.id
                          : _vm.inputData.field.name,
                        name: _vm.inputData.field.name,
                        placeholder: _vm.ifEmptyThen(
                          _vm.inputData.field.placeholder,
                          ""
                        ),
                        type: "radio"
                      },
                      domProps: { checked: _vm._q(_vm.inputData.value, null) },
                      on: {
                        keyup: _vm.onChange,
                        change: [
                          function($event) {
                            return _vm.$set(_vm.inputData, "value", null)
                          },
                          _vm.onChange
                        ]
                      }
                    },
                    "input",
                    Object.assign({}, _vm.inputData.field.inputProps),
                    false
                  )
                )
              : _c(
                  "input",
                  _vm._b(
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.inputData.value,
                          expression: "inputData.value"
                        }
                      ],
                      class: !_vm.inputData.field.inputClassOverride
                        ? ((_obj$4 = {
                            "input input-bordered": true
                          }),
                          (_obj$4[_vm.inputData.field.inputClass] =
                            _vm.inputData.field.inputClass != undefined),
                          (_obj$4["input-info"] =
                            !(_vm.error && _vm.error != "") &&
                            !_vm.success &&
                            !_vm.inputData.disabled),
                          (_obj$4["input-error"] =
                            _vm.error && _vm.error != ""),
                          (_obj$4["input-success"] =
                            _vm.success && !(_vm.error && _vm.error != "")),
                          _obj$4)
                        : _vm.inputData.field.inputClassOverride,
                      attrs: {
                        id: !_vm.isEmpty(_vm.inputData.field.id)
                          ? _vm.inputData.field.id
                          : _vm.inputData.field.name,
                        name: _vm.inputData.field.name,
                        placeholder: _vm.ifEmptyThen(
                          _vm.inputData.field.placeholder,
                          ""
                        ),
                        type: _vm.ifEmptyThen(_vm.inputData.field.type, "text")
                      },
                      domProps: { value: _vm.inputData.value },
                      on: {
                        keyup: _vm.onChange,
                        change: _vm.onChange,
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.inputData, "value", $event.target.value)
                        }
                      }
                    },
                    "input",
                    Object.assign({}, _vm.inputData.field.inputProps),
                    false
                  )
                )
          ]
        : _vm.inputData.field.type == "textarea"
        ? [
            _c(
              "textarea",
              _vm._b(
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.inputData.value,
                      expression: "inputData.value"
                    }
                  ],
                  class: !_vm.inputData.field.inputClassOverride
                    ? ((_obj$5 = {
                        "input input-bordered": true
                      }),
                      (_obj$5[_vm.inputData.field.inputClass] =
                        _vm.inputData.field.inputClass != undefined),
                      (_obj$5["input-info"] =
                        !(_vm.error && _vm.error != "") &&
                        !_vm.success &&
                        !_vm.inputData.disabled),
                      (_obj$5["input-error"] = _vm.error && _vm.error != ""),
                      (_obj$5["input-success"] =
                        _vm.success && !(_vm.error && _vm.error != "")),
                      _obj$5)
                    : _vm.inputData.field.inputClassOverride,
                  attrs: {
                    name: _vm.inputData.field.name,
                    id: _vm.inputData.field.id
                      ? _vm.inputData.field.id
                      : _vm.inputData.field.name,
                    cols: "30",
                    rows: "10",
                    placeholder: _vm.inputData.field.placeholder
                  },
                  domProps: { value: _vm.inputData.value },
                  on: {
                    keyup: _vm.onChange,
                    change: _vm.onChange,
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.inputData, "value", $event.target.value)
                    }
                  }
                },
                "textarea",
                Object.assign({}, _vm.inputData.field.inputProps),
                false
              )
            )
          ]
        : _vm.inputData.field.type == "trumbowyg"
        ? [
            _c(
              "textarea",
              _vm._b(
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.inputData.value,
                      expression: "inputData.value"
                    }
                  ],
                  attrs: {
                    name: _vm.inputData.field.name,
                    id: _vm.inputData.field.id
                      ? _vm.inputData.field.id
                      : _vm.inputData.field.name,
                    rows: "5",
                    placeholder: _vm.inputData.field.placeholder
                  },
                  domProps: { value: _vm.inputData.value },
                  on: {
                    blur: _vm.onChange,
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.inputData, "value", $event.target.value)
                    }
                  }
                },
                "textarea",
                Object.assign({}, _vm.inputData.field.inputProps),
                false
              )
            )
          ]
        : _vm.inputData.field.type == "select2Async"
        ? [
            !_vm.inputData.readonly
              ? _c("CustomSelect", {
                  attrs: {
                    field: _vm.inputData.field,
                    onChange: _vm.select2Select,
                    value: _vm.inputData.value,
                    error: _vm.error,
                    success: _vm.success,
                    functions: _vm.inputData.functions
                      ? _vm.inputData.functions
                      : {},
                    disabled: _vm.inputData.disabled
                      ? _vm.inputData.disabled
                      : false,
                    multiple: _vm.inputData.multiple
                      ? _vm.inputData.multiple
                      : false
                  }
                })
              : _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.inputData.value.text,
                      expression: "inputData.value.text"
                    }
                  ],
                  class:
                    ((_obj$6 = {}),
                    (_obj$6[_vm.alwaysTrueClass] = true),
                    (_obj$6[_vm.errorClass] = _vm.error && _vm.error != ""),
                    (_obj$6[_vm.successColor] = _vm.success),
                    (_obj$6[_vm.defaultClass] = !_vm.error && !_vm.success),
                    _obj$6),
                  attrs: {
                    name: _vm.inputData.field.name,
                    placeholder: _vm.inputData.field.placeholder,
                    type: "text",
                    readonly: true
                  },
                  domProps: { value: _vm.inputData.value.text },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.inputData.value, "text", $event.target.value)
                    }
                  }
                })
          ]
        : _vm.inputData.field.type == "select2Sync"
        ? [
            !_vm.inputData.readonly
              ? _c("CustomSelectSync", {
                  attrs: {
                    field: _vm.inputData.field,
                    onChange: _vm.select2Select,
                    value: _vm.inputData.value,
                    error: _vm.error,
                    success: _vm.success,
                    disabled: _vm.inputData.disabled
                      ? _vm.inputData.disabled
                      : false,
                    menuItems: _vm.inputData.menuItems
                  }
                })
              : _c("input", {
                  class:
                    ((_obj$7 = {}),
                    (_obj$7[_vm.alwaysTrueClass] = true),
                    (_obj$7[_vm.errorClass] = _vm.error && _vm.error != ""),
                    (_obj$7[_vm.successColor] = _vm.success),
                    (_obj$7[_vm.defaultClass] = !_vm.error && !_vm.success),
                    _obj$7),
                  attrs: {
                    name: _vm.inputData.field.name,
                    placeholder: _vm.inputData.field.placeholder
                      ? _vm.inputData.field.placeholder
                      : "",
                    type: "text",
                    readonly: true
                  },
                  domProps: {
                    value:
                      _vm.inputData.value && _vm.inputData.value.text
                        ? _vm.inputData.value.text
                        : ""
                  }
                })
          ]
        : _vm.inputData.field.type == "select"
        ? [
            _c(
              "select",
              _vm._b(
                {
                  class: !_vm.inputData.field.inputClassOverride
                    ? ((_obj$8 = {
                        "input input-bordered": true
                      }),
                      (_obj$8[_vm.inputData.field.inputClass] =
                        _vm.inputData.field.inputClass != undefined),
                      (_obj$8["input-error"] = _vm.error && _vm.error != ""),
                      (_obj$8["input-success"] = _vm.success),
                      (_obj$8["input-info"] = !_vm.error && !_vm.success),
                      _obj$8)
                    : _vm.inputData.field.inputClassOverride,
                  attrs: {
                    name: _vm.inputData.field.name,
                    id: _vm.inputData.field.name
                  },
                  on: { change: _vm.onChange }
                },
                "select",
                Object.assign({}, _vm.inputData.field.inputProps),
                false
              ),
              _vm._l(_vm.inputData.menuItems, function(menuItem) {
                return _c(
                  "option",
                  {
                    key: menuItem.key,
                    domProps: {
                      value: menuItem.id,
                      selected:
                        typeof _vm.inputData.value == "string" ||
                        Array.isArray(_vm.inputData.value)
                          ? _vm.inputData.value.includes(menuItem.id)
                          : _vm.inputData.value == menuItem.id
                    }
                  },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(menuItem.text) +
                        "\n            "
                    )
                  ]
                )
              }),
              0
            )
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.inputData.field.helperText
        ? _c("span", { class: "text-gray-500 text-sm block" }, [
            _vm._v(_vm._s(_vm.inputData.field.helperText))
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.error != "" && _vm.error
        ? _c("span", { class: "text-red-500 text-sm block" }, [
            _vm._v(_vm._s(_vm.error))
          ])
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);