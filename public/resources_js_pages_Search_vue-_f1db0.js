(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Search_vue-_f1db0"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Search.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Search.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions */ "./resources/js/functions/index.js");
/* harmony import */ var _functions_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/validator */ "./resources/js/functions/validator.js");
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


/**
 * Fields for CustomInput containing properties for each input
 * @type {Object.<string, Object>}
 */

var fields = {
  looking_for: _defineProperty({
    name: "looking_for",
    labelText: "Looking for",
    placeholder: "Looking for",
    type: "text",
    wrapperClass: "",
    validation: ["success"]
  }, "wrapperClass", "mr-4"),
  place: _defineProperty({
    name: "place",
    labelText: "City",
    placeholder: "City",
    type: "select",
    wrapperClass: "",
    validation: ["required"]
  }, "wrapperClass", "mr-4"),
  radius: _defineProperty({
    name: "radius",
    labelText: "Radius",
    labelClass: "text-white",
    placeholder: "Radius",
    type: "number",
    wrapperClass: "",
    validation: ["required"],
    inputProps: {
      min: 0,
      max: 100000
    },
    helperText: "in meters"
  }, "wrapperClass", "mr-4")
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mounted: function mounted() {
    this.mounting();
  },
  data: function data() {
    return {
      successes: {},
      errors: {},
      that: this,
      place: "",
      looking_for: "",
      radius: 2000,
      fields: fields
    };
  },
  methods: {
    /**
     * To assign values
     * @param {Object} route vue-router object
     */
    mounting: function mounting() {
      var route = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

      if (route == "") {
        route = this.$route;
      }

      this.looking_for = route.query.query_string ? route.query.query_string : "";
      this.radius = route.query.radius ? route.query.radius : 2000;
      this.place = route.params.place ? route.params.place : "";
    },

    /**
     * Redirects to page if the required fields are filled
     */
    submitSearch: function submitSearch() {
      if ((0,_functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty)((0,_functions_validator__WEBPACK_IMPORTED_MODULE_1__.validateAll)(fields, this))) {
        this.$router.push({
          path: "/places/".concat(this.place),
          query: {
            query_string: this.looking_for,
            radius: this.radius
          }
        });
      }
    }
  },
  components: {
    CustomInput: function CustomInput() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_CustomInput_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../components/CustomInput */ "./resources/js/components/CustomInput.vue"));
    }
  },
  watch: _defineProperty({}, "$route", function $route(newValue) {
    this.mounting(newValue);
  })
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

/***/ "./resources/js/pages/Search.vue":
/*!***************************************!*\
  !*** ./resources/js/pages/Search.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Search_vue_vue_type_template_id_7262a471___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Search.vue?vue&type=template&id=7262a471& */ "./resources/js/pages/Search.vue?vue&type=template&id=7262a471&");
/* harmony import */ var _Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Search.vue?vue&type=script&lang=js& */ "./resources/js/pages/Search.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Search_vue_vue_type_template_id_7262a471___WEBPACK_IMPORTED_MODULE_0__.render,
  _Search_vue_vue_type_template_id_7262a471___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Search.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Search.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/pages/Search.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Search.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Search.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/Search.vue?vue&type=template&id=7262a471&":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/Search.vue?vue&type=template&id=7262a471& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_template_id_7262a471___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_template_id_7262a471___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_template_id_7262a471___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Search.vue?vue&type=template&id=7262a471& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Search.vue?vue&type=template&id=7262a471&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Search.vue?vue&type=template&id=7262a471&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Search.vue?vue&type=template&id=7262a471& ***!
  \*************************************************************************************************************************************************************************************************************/
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
      staticClass: "flex flex-wrap",
      attrs: { "data-aos": "fade-up" },
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.submitSearch($event)
        }
      }
    },
    [
      _c("CustomInput", {
        attrs: {
          inputData: {
            field: _vm.fields.looking_for,
            value: _vm.looking_for,
            that: _vm.that
          }
        }
      }),
      _vm._v(" "),
      _c("CustomInput", {
        attrs: {
          inputData: {
            field: _vm.fields.place,
            value: _vm.place,
            that: _vm.that,
            menuItems: [
              { id: "", text: "Please select." },
              {
                id: "tokyo",
                text: "Tokyo"
              },
              { id: "yokohama", text: "Yokohama" },
              {
                id: "kyoto",
                text: "Kyoto"
              },
              { id: "osaka", text: "Osaka" },
              {
                id: "sapporo",
                text: "Sapporo"
              },
              {
                id: "nagoya",
                text: "Nagoya"
              }
            ]
          }
        }
      }),
      _vm._v(" "),
      _c("CustomInput", {
        attrs: {
          inputData: {
            field: _vm.fields.radius,
            value: _vm.radius,
            that: _vm.that
          }
        }
      }),
      _vm._v(" "),
      _vm._m(0)
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { "padding-top": "28px" } }, [
      _c("button", { staticClass: "btn btn-primary" }, [
        _c("i", { staticClass: "fas fa-search" })
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);