(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_layouts_Navigation_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Navigation.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Navigation.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions */ "./resources/js/functions/index.js");
/* harmony import */ var _routes_guest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes/guest */ "./resources/js/routes/guest.js");
/* harmony import */ var _routes_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes/auth */ "./resources/js/routes/auth.js");
/* harmony import */ var _routes_loggedIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes/loggedIn */ "./resources/js/routes/loggedIn.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      isOpen: false,
      guestRoutes: _routes_guest__WEBPACK_IMPORTED_MODULE_1__.default
    };
  },
  computed: {},
  methods: {
    isEmpty: _functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty,
    drawer: function drawer() {
      this.isOpen = !this.isOpen;
    }
  },
  watch: {
    isOpen: {
      immediate: true,
      handler: function handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");else document.body.style.removeProperty("overflow");
        }
      }
    }
  },
  mounted: function mounted() {},
  components: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/Login.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/Login.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions */ "./resources/js/functions/index.js");
/* harmony import */ var _FormFields_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../FormFields/login */ "./resources/js/FormFields/login.js");
/* harmony import */ var _functions_setAuthToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../functions/setAuthToken */ "./resources/js/functions/setAuthToken.js");
/* harmony import */ var _functions_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../functions/validator */ "./resources/js/functions/validator.js");
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





var field_values = {
  email: "",
  password: ""
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return _objectSpread(_objectSpread({
      fields: _FormFields_login__WEBPACK_IMPORTED_MODULE_1__.default,
      successes: {},
      errors: {},
      that: this
    }, field_values), {}, {
      invalid_credentials: "",
      remember: false,
      try_after: 0,
      try_after_message: ""
    });
  },
  components: {
    CustomInput: function CustomInput() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_CustomInput_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/CustomInput */ "./resources/js/components/CustomInput.vue"));
    },
    CustomButton: function CustomButton() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_CustomButton_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/CustomButton */ "./resources/js/components/CustomButton.vue"));
    }
  },
  mounted: function mounted() {// loader("Loading");
    // toast("success", "asldkfjlaksdjf");
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapActions)([])), {}, {
    isEmpty: _functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty,
    startTimer: function startTimer(duration) {
      var timer = duration,
          minutes,
          seconds;
      var that = this;
      var interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        that.try_after = minutes + ":" + seconds;

        if (--timer < 0) {
          that.errors = {};
          that.try_after = 0;
          clearInterval(interval);
        }
      }, 1000);
    },
    onSubmit: function onSubmit(event) {
      var _this = this;

      var email = this.email,
          password = this.password,
          remember = this.remember;

      if ((0,_functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty)((0,_functions_validator__WEBPACK_IMPORTED_MODULE_3__.validateAll)(_FormFields_login__WEBPACK_IMPORTED_MODULE_1__.default, this))) {
        (0,_functions__WEBPACK_IMPORTED_MODULE_0__.loader)("Loggin you in.");
        axios.post("/login", {
          email: email,
          password: password,
          remember: remember
        }).then(function (res) {
          Swal.close();

          if (res.data.status == "success") {
            window.location.href = "/";
          } else {
            (0,_functions__WEBPACK_IMPORTED_MODULE_0__.toast)("error", res.data.message); // Vue.$toast.open({
            //     message: res.data.message,
            //     type: "error",
            //     duration: 3000,
            //     dismissible: true,
            //     position: "top-right"
            // });
          }
        })["catch"](function (err) {
          Swal.close();

          if (err && err.response && err.response.status == 429 && false) {
            (0,_functions__WEBPACK_IMPORTED_MODULE_0__.toast)("error", "Too many incorrect attempts.");
            _this.errors.email = "Too many attempts";
            _this.errors.password = "Too many attempts";

            _this.startTimer(err.response.headers["retry-after"]);
          } else {
            (0,_functions__WEBPACK_IMPORTED_MODULE_0__.commonCatchBlock)(_this, err);
          }
        });
      }
    }
  })
});

/***/ }),

/***/ "./resources/js/FormFields/login.js":
/*!******************************************!*\
  !*** ./resources/js/FormFields/login.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  email: {
    name: "email",
    placeholder: "Email",
    labelText: "Email",
    type: "text",
    wrapperClass: "flex flex-col space-y-1",
    validation: ["required", "email"]
  },
  password: {
    name: "password",
    placeholder: "Password",
    labelText: "Password",
    type: "password",
    wrapperClass: "flex flex-col space-y-1 mb-4",
    validation: ["required"]
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

/***/ "./resources/js/routes/auth.js":
/*!*************************************!*\
  !*** ./resources/js/routes/auth.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pages_auth_Login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/auth/Login */ "./resources/js/pages/auth/Login.vue");
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./website */ "./resources/js/routes/website.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  0: [{
    path: "/login",
    title: "Login",
    component: _pages_auth_Login__WEBPACK_IMPORTED_MODULE_0__.default,
    // breadCrumbs: [{ title: "Login" }],
    meta: {
      title: "Login - " + _website__WEBPACK_IMPORTED_MODULE_1__.default,
      topBar: "Login",
      layout: "sidebar"
    },
    icon: ""
  }],
  1: []
});

/***/ }),

/***/ "./resources/js/routes/loggedIn.js":
/*!*****************************************!*\
  !*** ./resources/js/routes/loggedIn.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ "./resources/js/routes/website.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([]);

/***/ }),

/***/ "./resources/js/layouts/Navigation.vue":
/*!*********************************************!*\
  !*** ./resources/js/layouts/Navigation.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Navigation_vue_vue_type_template_id_2c37d378___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigation.vue?vue&type=template&id=2c37d378& */ "./resources/js/layouts/Navigation.vue?vue&type=template&id=2c37d378&");
/* harmony import */ var _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation.vue?vue&type=script&lang=js& */ "./resources/js/layouts/Navigation.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Navigation_vue_vue_type_template_id_2c37d378___WEBPACK_IMPORTED_MODULE_0__.render,
  _Navigation_vue_vue_type_template_id_2c37d378___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/Navigation.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/auth/Login.vue":
/*!*******************************************!*\
  !*** ./resources/js/pages/auth/Login.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Login_vue_vue_type_template_id_42c42d6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=42c42d6a& */ "./resources/js/pages/auth/Login.vue?vue&type=template&id=42c42d6a&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/pages/auth/Login.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Login_vue_vue_type_template_id_42c42d6a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Login_vue_vue_type_template_id_42c42d6a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/auth/Login.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/Navigation.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/layouts/Navigation.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Navigation.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/auth/Login.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/auth/Login.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/Login.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/layouts/Navigation.vue?vue&type=template&id=2c37d378&":
/*!****************************************************************************!*\
  !*** ./resources/js/layouts/Navigation.vue?vue&type=template&id=2c37d378& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_2c37d378___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_2c37d378___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_2c37d378___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=template&id=2c37d378& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Navigation.vue?vue&type=template&id=2c37d378&");


/***/ }),

/***/ "./resources/js/pages/auth/Login.vue?vue&type=template&id=42c42d6a&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/auth/Login.vue?vue&type=template&id=42c42d6a& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_42c42d6a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_42c42d6a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_42c42d6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=template&id=42c42d6a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/Login.vue?vue&type=template&id=42c42d6a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Navigation.vue?vue&type=template&id=2c37d378&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Navigation.vue?vue&type=template&id=2c37d378& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
      "nav",
      {
        class: {
          "nav-bar": true
        }
      },
      [
        _c(
          "div",
          { staticClass: "flex items-center" },
          [
            !_vm.isOpen
              ? [
                  _c("img", {
                    class: {
                      "h-8 transition-all ease-in-out duration-300 rounded": true
                    },
                    attrs: { src: "/images/logo.png", alt: "Logo" }
                  }),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      class: {
                        "ml-2 font-bold transition-all ease-in-out duration-300 text-white text-lg": true
                      }
                    },
                    [
                      _vm._v(
                        "\n                    More Fun in Japan\n                "
                      )
                    ]
                  )
                ]
              : _vm._e()
          ],
          2
        ),
        _vm._v(" "),
        _c("div", { staticClass: "flex items-center" }, [
          _c(
            "div",
            { staticClass: "flex justify-between bg-transparent xl:hidden" },
            [
              _vm._l(_vm.guestRoutes, function(guestRoute, key) {
                return [
                  !guestRoute.hidden
                    ? _c(
                        "router-link",
                        {
                          key: "guest-route-key-" + key,
                          attrs: { to: guestRoute.path }
                        },
                        [
                          _c("span", { staticClass: "nav-link" }, [
                            _c("span", [_vm._v(_vm._s(guestRoute.title))])
                          ])
                        ]
                      )
                    : _vm._e()
                ]
              })
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass:
                "\n                    ml-2\n                    mr-2\n                    min-xl:hidden\n                    text-white\n                    btn-own btn-transparent\n                ",
              attrs: { "aria-label": "Open Menu" },
              on: { click: _vm.drawer }
            },
            [
              _c(
                "svg",
                {
                  staticClass: "w-8 h-8",
                  attrs: {
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    viewBox: "0 0 24 24"
                  }
                },
                [_c("path", { attrs: { d: "M4 6h16M4 12h16M4 18h16" } })]
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c(
          "aside",
          {
            class: {
              "transform top-0 left-0 w-full bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 border-r-2 ": true,
              "translate-x-0 opacity-100": _vm.isOpen,
              "-translate-x-full opacity-0": !_vm.isOpen
            }
          },
          [
            _c(
              "span",
              {
                staticClass:
                  "\n                    flex\n                    w-full\n                    items-center\n                    justify-between\n                    border-b\n                    p-4\n                "
              },
              [
                _c("img", {
                  staticClass: "h-8 rounded",
                  attrs: { src: "/images/logo.png", alt: "Logo" }
                }),
                _vm._v(" "),
                _c("p", { staticClass: "ml-4 font-bold text-black" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(
                        !_vm.isEmpty(_vm.$route.meta.topBar)
                          ? _vm.$route.meta.topBar
                          : ""
                      ) +
                      "\n                "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "ml-2 mr-2 text-black btn-own btn-transparent",
                    attrs: { "aria-label": "Open Menu" },
                    on: { click: _vm.drawer }
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticClass: "w-8 h-8",
                        attrs: {
                          fill: "none",
                          stroke: "currentColor",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          viewBox: "0 0 24 24"
                        }
                      },
                      [_c("path", { attrs: { d: "M4 6h16M4 12h16M4 18h16" } })]
                    )
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _vm._l(_vm.guestRoutes, function(route, key) {
              return [
                !route.hidden && route.path != ""
                  ? _c(
                      "router-link",
                      {
                        key: "guestRoute-" + key,
                        attrs: { to: route.path },
                        nativeOn: {
                          click: function($event) {
                            _vm.isOpen = false
                          }
                        }
                      },
                      [
                        _c(
                          "span",
                          {
                            staticClass:
                              "\n                            flex\n                            items-center\n                            p-4\n                            text-black\n                            hover:bg-blue-900 hover:text-white\n                        "
                          },
                          [
                            _c("span", { staticClass: "mr-2" }, [
                              _c("i", {
                                class: !_vm.isEmpty(route.icon)
                                  ? route.icon
                                  : "far fa-user"
                              })
                            ]),
                            _vm._v(" "),
                            _c("span", [_vm._v(_vm._s(route.title))])
                          ]
                        )
                      ]
                    )
                  : route.path == ""
                  ? _c(
                      "span",
                      {
                        key: "guestRoute-" + key,
                        staticClass: "p-4 font-bold text-black"
                      },
                      [_vm._v("\n                    " + _vm._s(route.title))]
                    )
                  : _vm._e()
              ]
            })
          ],
          2
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        class: {
          "page-content": true
        },
        attrs: { id: "page-content" }
      },
      [
        _c(
          "transition",
          { attrs: { name: "fade", mode: "out-in" } },
          [_c("router-view")],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/Login.vue?vue&type=template&id=42c42d6a&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/Login.vue?vue&type=template&id=42c42d6a& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
      staticClass:
        "\n        flex\n        items-center\n        justify-center\n        min-md:w-2/3 min-xl:w-1/2\n        md:w-full\n        p-6\n        m-auto\n        bg-white\n        shadow-md\n        rounded\n        mt-6\n    "
    },
    [
      _c(
        "form",
        {
          staticClass: "grid grid-cols-1 w-full",
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.onSubmit($event)
            }
          }
        },
        [
          _c("p", { staticClass: "text-4xl mb-4" }, [_vm._v("Login")]),
          _vm._v(" "),
          _c("CustomInput", {
            attrs: {
              inputData: {
                field: _vm.fields.email,
                value: _vm.email,
                that: _vm.that
              }
            }
          }),
          _vm._v(" "),
          _c("CustomInput", {
            attrs: {
              inputData: {
                field: _vm.fields.password,
                value: _vm.password,
                that: _vm.that
              }
            }
          }),
          _vm._v(" "),
          _c("div", [
            _c(
              "button",
              {
                staticClass: "btn btn-dark w-full",
                attrs: { type: "submit", disabled: _vm.try_after != 0 }
              },
              [
                _vm.try_after != 0
                  ? _c("span", [
                      _vm._v(
                        "\n                    Try after: " +
                          _vm._s(_vm.try_after) +
                          "\n                "
                      )
                    ])
                  : _c("span", [_vm._v(" Login ")])
              ]
            )
          ])
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);