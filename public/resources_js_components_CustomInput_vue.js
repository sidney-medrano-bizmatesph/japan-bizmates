(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_CustomInput_vue"],{

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
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["inputData"],
  data: function data() {
    return {
      defaultInit: _functions__WEBPACK_IMPORTED_MODULE_0__.defaultInit
    };
  },
  components: {
    CustomSelectSync: function CustomSelectSync() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_CustomSelect2Sync_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./CustomSelect2Sync */ "./resources/js/components/CustomSelect2Sync.vue"));
    },
    CustomSelect: function CustomSelect() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_CustomSelect2_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./CustomSelect2 */ "./resources/js/components/CustomSelect2.vue"));
    },
    Editor: function Editor() {
      return __webpack_require__.e(/*! import() */ "node_modules_tinymce_tinymce-vue_lib_es2015_main_ts_index_js").then(__webpack_require__.bind(__webpack_require__, /*! @tinymce/tinymce-vue */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js"));
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
    onChangeTiny: function onChangeTiny(event, editor) {
      var that = this.inputData.that,
          inputData = this.inputData;
      if (inputData.onChangeBefore != undefined) inputData.onChangeBefore(event, editor);

      if (inputData.onChange != undefined) {
        inputData.onChange(event, editor);
      } else {
        that[inputData.field.name] = editor.getContent();
        (0,_functions_validator__WEBPACK_IMPORTED_MODULE_1__.validate)(inputData.field, editor.getContent(), that);

        if (inputData.onChangeAfter != undefined) {
          inputData.onChangeAfter(event, editor);
        }
      }

      (0,_functions_validator__WEBPACK_IMPORTED_MODULE_1__.validate)(inputData.field, editor.getContent(), that); // alert(editor.getContent());
    },
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
      var _this$inputData = this.inputData,
          field = _this$inputData.field,
          that = _this$inputData.that,
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
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
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
                  "block mb-2 text-sm font-bold text-gray-700": true,

                  "text-red-500": _vm.error && _vm.error != "",
                  // 'text-gray-500': success && !(error && error != ''),
                  "text-gray-400": _vm.inputData.disabled
                }),
                (_obj$1[_vm.inputData.field.labelClass] =
                  _vm.inputData.field.labelClass != undefined),
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
                          (_obj$2["input-primary"] =
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
                          (_obj$3["input-primary"] =
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
                          (_obj$4["input-primary"] =
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
                      (_obj$5["input-primary"] =
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
        : _vm.inputData.field.type == "tiny"
        ? [
            _c(
              "Editor",
              _vm._b(
                {
                  attrs: {
                    "api-key":
                      "op65uuks84ilm2ymjosobqkizu8m9wlfs283br53r6ds2xby",
                    id: _vm.inputData.field.id
                      ? _vm.inputData.field.id
                      : _vm.inputData.field.name,
                    init: _vm.inputData.init
                      ? _vm.inputData.init
                      : _vm.defaultInit
                  },
                  on: { onBlur: _vm.onChangeTiny },
                  model: {
                    value: _vm.inputData.value,
                    callback: function($$v) {
                      _vm.$set(_vm.inputData, "value", $$v)
                    },
                    expression: "inputData.value"
                  }
                },
                "Editor",
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
                        "select select-bordered": true
                      }),
                      (_obj$8[_vm.inputData.field.inputClass] =
                        _vm.inputData.field.inputClass != undefined),
                      (_obj$8["select-error"] = _vm.error && _vm.error != ""),
                      (_obj$8["select-success"] = _vm.success),
                      (_obj$8["select-primary"] = !_vm.error && !_vm.success),
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
        ? _c(
            "span",
            {
              class: _vm.inputData.field.helperTextClassOverride
                ? _vm.inputData.field.helperTextClassOverride
                : "text-gray-500 text-sm block"
            },
            [_vm._v(_vm._s(_vm.inputData.field.helperText))]
          )
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