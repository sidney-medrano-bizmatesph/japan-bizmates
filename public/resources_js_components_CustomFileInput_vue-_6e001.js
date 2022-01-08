(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_CustomFileInput_vue-_6e001"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomFileInput.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomFileInput.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./resources/js/functions/index.js");
/* harmony import */ var _functions_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/validator */ "./resources/js/functions/validator.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      uploadedFiles: [],
      uploadError: null,
      currentStatus: null,
      files: [],
      unAccepted: [],
      key: 0
    };
  },
  computed: {
    error: function error() {
      var that = this.inputData.that,
          inputData = this.inputData;
      return that.errors[inputData.field.name];
    },
    success: function success() {
      var that = this.inputData.that,
          inputData = this.inputData;
      return that.successes[inputData.field.name];
    },
    errorText: function errorText() {
      var that = this.inputData.that,
          inputData = this.inputData;
      var errorText = "";

      if (Array.isArray(inputData.that.errors[inputData.field.name])) {
        inputData.that.errors[inputData.field.name].map(function (res) {
          errorText += "".concat(res, " ");
        });
      } else {
        errorText = inputData.that.errors[inputData.field.name];
      }

      return errorText;
    },
    filesCount: function filesCount() {
      var that = this.inputData.that,
          inputData = this.inputData;
      return that[inputData.field.name].length;
    }
  },
  methods: {
    isEmpty: _functions__WEBPACK_IMPORTED_MODULE_1__.isEmpty,
    display: _functions__WEBPACK_IMPORTED_MODULE_1__.display,
    reset: function reset() {},
    save: function save(formData) {},
    onChange: function onChange(event) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var inputData, that, _event$target, name, files, acceptArray, unAccepted;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // event.preventDefault();
                inputData = _this.inputData, that = _this.inputData.that;
                _event$target = event.target, name = _event$target.name, files = _event$target.files;
                acceptArray = inputData.field.accept.split(",");

                if (inputData.onChange) {
                  inputData.onChange(event);
                }

                if (files.length) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return");

              case 6:
                unAccepted = [];
                that[name] = []; // that.errors[name] = {};

                if (!(files.length > 100)) {
                  _context.next = 13;
                  break;
                }

                Swal.fire({
                  icon: "error",
                  title: "Please don't upload more than 100 files at once."
                });
                return _context.abrupt("return");

              case 13:
                Array.from(Array(files.length).keys()).map(function (x) {
                  var file = files[x];
                  var size = Math.round(file.size / 1024 / 1024 * 100) / 100; // MB

                  var acceptedInFileType = false;
                  var fileNameSplit = file.name.split(".");
                  var extension = "." + fileNameSplit[fileNameSplit.length - 1];

                  if (inputData.field.acceptedExtensions || inputData.field.unAcceptedExtensions) {
                    if (inputData.field.acceptedExtensions && inputData.field.acceptedExtensions.includes(extension)) {
                      acceptedInFileType = true;
                    }

                    if (inputData.field.unAcceptedExtensions && inputData.field.unAcceptedExtensions.includes(extension)) {
                      acceptedInFileType = false;
                    } else if (inputData.field.acceptedExtensions == undefined) {
                      acceptedInFileType = true;
                    }
                  } else {
                    acceptedInFileType = true;
                  }

                  if (acceptedInFileType) {
                    if (inputData.field.max_size != undefined && size > Math.ceil(parseFloat(inputData.field.max_size))) {
                      unAccepted.push({
                        file: {
                          name: file.name,
                          size: file.size,
                          type: file.type
                        },
                        error: "size"
                      });
                    } else {
                      that[name].push(file);
                      (0,_functions_validator__WEBPACK_IMPORTED_MODULE_2__.validate)(inputData.field, 1, that);
                      $("#file-preview-".concat(_this.inputData.field.name)).collapse("show");
                    }
                  } else {
                    unAccepted.push({
                      file: {
                        name: file.name,
                        size: file.size,
                        type: file.type
                      },
                      error: "fileType"
                    });
                  }
                });
                _this.key = "".concat(_this.inputData.field.name, "-").concat(Date.now());
                _this.unAccepted = unAccepted;

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    remove: function remove(key) {
      var _this$inputData = this.inputData,
          that = _this$inputData.that,
          field = _this$inputData.field;
      var files = that[field.name];
      var keys = Array.from(Array(files.length).keys()).filter(function (x) {
        return x != key;
      });
      that[field.name] = [];
      keys.map(function (key) {
        that[field.name].push(files[key]);
      });
      (0,_functions_validator__WEBPACK_IMPORTED_MODULE_2__.validate)(field, that[field.name], that);

      if (that[field.name].length < 1) {
        $("#file-preview-".concat(this.inputData.field.name)).collapse("hide");
      }
    }
  },
  mounted: function mounted() {
    this.key = "".concat(this.inputData.field.name, "-").concat(Date.now());
    this.reset();
  },
  watch: {
    filesCount: function filesCount(newValue) {
      if (newValue < 1) {
        $("#file-preview-".concat(this.inputData.field.name)).collapse("hide");
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomFileInput.vue?vue&type=style&index=0&id=11538922&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomFileInput.vue?vue&type=style&index=0&id=11538922&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".dropbox[data-v-11538922] {\n  border: 2px dashed grey;\n  /* when mouse over to the drop zone, change color */\n  background: #f0f0f0;\n  color: dimgray;\n  position: relative;\n  cursor: pointer;\n  transition: all ease-in-out 0.3s;\n  border-radius: 20px;\n  min-height: 38px;\n}\n.input-file[data-v-11538922] {\n  opacity: 0;\n  /* invisible but it's there! */\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  cursor: pointer;\n}\n.dropbox[data-v-11538922]:hover {\n  border: 2px dashed #052683;\n  /* when mouse over to the drop zone, change color */\n  background: white;\n  color: black;\n}\n.strong-upload-text[data-v-11538922] {\n  transition: all ease-in-out 0.2s;\n}\n.dropbox:hover .strong-upload-text[data-v-11538922] {\n  color: #052683;\n}\n.dropbox p[data-v-11538922] {\n  text-align: center;\n  padding: 5px 0;\n  margin-bottom: 0px;\n}\n.preview[data-v-11538922] {\n  max-width: 100%;\n  max-height: 50px;\n  vertical-align: middle;\n  transition: all 0.3s ease-in-out;\n}\n.preview[data-v-11538922]:hover {\n  background-color: #c9c9c9;\n}\n.preview-overlay[data-v-11538922] {\n  position: absolute !important;\n  display: none;\n  bottom: 0;\n  right: 0;\n}\n.preview:hover ~ .preview-overlay[data-v-11538922],\n.preview-overlay[data-v-11538922]:hover {\n  display: inline-block;\n}\n.preview-container:hover .preview[data-v-11538922] {\n  filter: blur(8px);\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomFileInput.vue?vue&type=style&index=0&id=11538922&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomFileInput.vue?vue&type=style&index=0&id=11538922&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFileInput_vue_vue_type_style_index_0_id_11538922_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomFileInput.vue?vue&type=style&index=0&id=11538922&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomFileInput.vue?vue&type=style&index=0&id=11538922&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFileInput_vue_vue_type_style_index_0_id_11538922_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFileInput_vue_vue_type_style_index_0_id_11538922_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/CustomFileInput.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/CustomFileInput.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomFileInput_vue_vue_type_template_id_11538922_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomFileInput.vue?vue&type=template&id=11538922&scoped=true& */ "./resources/js/components/CustomFileInput.vue?vue&type=template&id=11538922&scoped=true&");
/* harmony import */ var _CustomFileInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomFileInput.vue?vue&type=script&lang=js& */ "./resources/js/components/CustomFileInput.vue?vue&type=script&lang=js&");
/* harmony import */ var _CustomFileInput_vue_vue_type_style_index_0_id_11538922_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomFileInput.vue?vue&type=style&index=0&id=11538922&lang=scss&scoped=true& */ "./resources/js/components/CustomFileInput.vue?vue&type=style&index=0&id=11538922&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _CustomFileInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CustomFileInput_vue_vue_type_template_id_11538922_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _CustomFileInput_vue_vue_type_template_id_11538922_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "11538922",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CustomFileInput.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/CustomFileInput.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/CustomFileInput.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFileInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomFileInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomFileInput.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFileInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/CustomFileInput.vue?vue&type=style&index=0&id=11538922&lang=scss&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/CustomFileInput.vue?vue&type=style&index=0&id=11538922&lang=scss&scoped=true& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFileInput_vue_vue_type_style_index_0_id_11538922_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomFileInput.vue?vue&type=style&index=0&id=11538922&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomFileInput.vue?vue&type=style&index=0&id=11538922&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/CustomFileInput.vue?vue&type=template&id=11538922&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/CustomFileInput.vue?vue&type=template&id=11538922&scoped=true& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFileInput_vue_vue_type_template_id_11538922_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFileInput_vue_vue_type_template_id_11538922_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFileInput_vue_vue_type_template_id_11538922_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomFileInput.vue?vue&type=template&id=11538922&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomFileInput.vue?vue&type=template&id=11538922&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomFileInput.vue?vue&type=template&id=11538922&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomFileInput.vue?vue&type=template&id=11538922&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _obj, _obj$1
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class:
        ((_obj = {}),
        (_obj[_vm.inputData.field.wrapperClassName] =
          _vm.inputData.field.wrapperClassName),
        _obj)
    },
    [
      _vm.inputData.field.labelText && _vm.inputData.field.labelText != ""
        ? _c(
            "label",
            {
              class: {
                "text-red-600": _vm.error && _vm.error != "",
                "text-green-600": _vm.success,
                "disabled-text": _vm.inputData.disabled
              },
              attrs: { for: _vm.inputData.field.name }
            },
            [
              _vm._v(
                "\n        " +
                  _vm._s(_vm.inputData.field.labelText) +
                  "\n        "
              ),
              _vm.inputData.field.validation &&
              _vm.inputData.field.validation.includes("required")
                ? _c("span", { staticClass: "text-red-600" }, [_vm._v("*")])
                : _vm._e()
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          class:
            ((_obj$1 = {
              "dropbox mb-2": true,
              "success-form-control": _vm.success,
              "error-form-control": _vm.error && _vm.error != "",
              "default-form-control": !_vm.error && !_vm.success
            }),
            (_obj$1[_vm.inputData.field.className] =
              _vm.inputData.field.className != undefined),
            _obj$1)
        },
        [
          _c("input", {
            key: _vm.key,
            staticClass: "input-file",
            attrs: {
              type: "file",
              multiple:
                _vm.inputData.field.multiple != undefined
                  ? _vm.inputData.field.multiple
                  : true,
              name: _vm.inputData.field.name,
              accept: _vm.inputData.field.accept
                ? _vm.inputData.field.accept
                : "*"
            },
            on: { change: _vm.onChange }
          }),
          _vm._v(" "),
          _vm._m(0)
        ]
      ),
      _vm._v(" "),
      !_vm.isEmpty(_vm.unAccepted)
        ? _c("div", [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "ul",
              _vm._l(_vm.unAccepted, function(file, key) {
                return _c("li", { key: key }, [
                  _vm._v(
                    "\n                " +
                      _vm._s(file.file.name) +
                      "\n                "
                  ),
                  file.error == "size"
                    ? _c("span", { staticClass: "text-red-600" }, [
                        _vm._v(
                          "Size exceeded the limit:\n                    " +
                            _vm._s(Math.ceil(_vm.inputData.field.max_size)) +
                            "MB"
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  file.error == "fileType"
                    ? _c("span", { staticClass: "text-red-600" }, [
                        _vm._v("File type not accepted.")
                      ])
                    : _vm._e()
                ])
              }),
              0
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.inputData.noPreview
        ? _vm._t("preview")
        : [
            _vm.filesCount > 0
              ? _c("div", { staticClass: "table-responsive" }, [
                  _c("table", { staticClass: "table-own" }, [
                    _vm._m(2),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(
                        _vm.inputData.that[_vm.inputData.field.name],
                        function(file, key) {
                          return _c("tr", { key: key }, [
                            _c("td", [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-error",
                                  attrs: { type: "button" },
                                  on: {
                                    click: function($event) {
                                      return _vm.remove(key)
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fa fa-times" })]
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              file.type.split("/")[0] == "image"
                                ? _c(
                                    "a",
                                    {
                                      staticClass: "spotlight",
                                      attrs: { href: _vm.display(file) }
                                    },
                                    [
                                      _c("img", {
                                        staticClass: "preview",
                                        attrs: {
                                          src: _vm.display(file),
                                          alt: ""
                                        }
                                      })
                                    ]
                                  )
                                : _c("img", {
                                    staticClass: "preview",
                                    attrs: { src: _vm.display(file), alt: "" }
                                  })
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(file.name))]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(
                                    Math.round(
                                      (file.size / 1024 / 1024) * 100
                                    ) / 100
                                  ) +
                                  "MB\n                        "
                              )
                            ])
                          ])
                        }
                      ),
                      0
                    )
                  ])
                ])
              : _vm._e()
          ],
      _vm._v(" "),
      _vm.inputData.that.errors[_vm.inputData.field.name] != "" &&
      _vm.inputData.that.errors[_vm.inputData.field.name]
        ? _c("span", { class: "helper-text block text-red-600" }, [
            _vm._v(_vm._s(_vm.errorText))
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.inputData.field.max_size != undefined
        ? _c("span", { class: "helper-text block" }, [
            _vm._v(_vm._s("Max size: " + _vm.inputData.field.max_size + "MB"))
          ])
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("i", { staticClass: "fa fa-upload strong-upload-text" }),
      _vm._v(" "),
      _c("strong", { staticClass: "strong-upload-text" }, [_vm._v("Drag")]),
      _vm._v(" your file(s) or\n            "),
      _c("strong", { staticClass: "strong-upload-text" }, [_vm._v("click")]),
      _vm._v(" to browse\n        ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-red-600 m-0" }, [
      _c("b", [_vm._v("Un accepted files: ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Action")]),
        _vm._v(" "),
        _c("th", [_vm._v("Preview")]),
        _vm._v(" "),
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Size")])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);