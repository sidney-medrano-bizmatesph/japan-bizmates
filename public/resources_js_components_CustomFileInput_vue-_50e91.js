(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_CustomFileInput_vue-_50e91"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CustomFileInput.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CustomFileInput.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CustomFileInput.vue?vue&type=template&id=11538922&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CustomFileInput.vue?vue&type=template&id=11538922&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-11538922");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-11538922");

var _hoisted_1 = {
  key: 0,
  "class": "text-red-600"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "fa fa-upload strong-upload-text"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("strong", {
  "class": "strong-upload-text"
}, "Drag"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" your file(s) or "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("strong", {
  "class": "strong-upload-text"
}, "click"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" to browse ")], -1
/* HOISTED */
);

var _hoisted_3 = {
  key: 1
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "text-red-600 m-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("b", null, "Un accepted files: ")], -1
/* HOISTED */
);

var _hoisted_5 = {
  key: 0,
  "class": "text-red-600"
};
var _hoisted_6 = {
  key: 1,
  "class": "text-red-600"
};
var _hoisted_7 = {
  key: 0,
  "class": "table-responsive"
};
var _hoisted_8 = {
  "class": "table-own"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", null, "Action"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", null, "Preview"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", null, "Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", null, "Size")])], -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "fa fa-times"
}, null, -1
/* HOISTED */
);

var _hoisted_11 = {
  key: 4,
  "class": "helper-text block text-red-600"
};
var _hoisted_12 = {
  key: 5,
  "class": "helper-text block"
};

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
    "class": _defineProperty({}, $props.inputData.field.wrapperClassName, $props.inputData.field.wrapperClassName)
  }, [$props.inputData.field.labelText && $props.inputData.field.labelText != '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("label", {
    key: 0,
    "for": $props.inputData.field.name,
    "class": {
      'text-red-600': $options.error && $options.error != '',
      'text-green-600': $options.success,
      'disabled-text': $props.inputData.disabled
    }
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.inputData.field.labelText) + " ", 1
  /* TEXT */
  ), $props.inputData.field.validation && $props.inputData.field.validation.includes('required') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_1, "*")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
  /* CLASS, PROPS */
  , ["for"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    "class": _defineProperty({
      'dropbox mb-2': true,
      'success-form-control': $options.success,
      'error-form-control': $options.error && $options.error != '',
      'default-form-control': !$options.error && !$options.success
    }, $props.inputData.field.className, $props.inputData.field.className != undefined)
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("input", {
    type: "file",
    multiple: $props.inputData.field.multiple != undefined ? $props.inputData.field.multiple : true,
    name: $props.inputData.field.name,
    onChange: _cache[1] || (_cache[1] = function () {
      return $options.onChange && $options.onChange.apply($options, arguments);
    }),
    accept: $props.inputData.field.accept ? $props.inputData.field.accept : '*',
    "class": "input-file",
    key: $data.key
  }, null, 40
  /* PROPS, HYDRATE_EVENTS */
  , ["multiple", "name", "accept"])), _hoisted_2], 2
  /* CLASS */
  ), !$options.isEmpty($data.unAccepted) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("ul", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.unAccepted, function (file, key) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("li", {
      key: key
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(file.file.name) + " ", 1
    /* TEXT */
    ), file.error == 'size' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_5, "Size exceeded the limit: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(Math.ceil($props.inputData.field.max_size)) + "MB", 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), file.error == 'fileType' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_6, "File type not accepted.")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.inputData.noPreview ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "preview", {
    key: 2
  }, undefined, true) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 3
  }, [$options.filesCount > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("table", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.inputData.that[$props.inputData.field.name], function (file, key) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("tr", {
      key: key
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
      type: "button",
      "class": "btn btn-error",
      onClick: function onClick($event) {
        return $options.remove(key);
      }
    }, [_hoisted_10], 8
    /* PROPS */
    , ["onClick"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, [file.type.split('/')[0] == 'image' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("a", {
      key: 0,
      href: $options.display(file),
      "class": "spotlight"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
      src: $options.display(file),
      "class": "preview",
      alt: ""
    }, null, 8
    /* PROPS */
    , ["src"])], 8
    /* PROPS */
    , ["href"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("img", {
      key: 1,
      src: $options.display(file),
      alt: "",
      "class": "preview"
    }, null, 8
    /* PROPS */
    , ["src"]))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(file.name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(Math.round(file.size / 1024 / 1024 * 100) / 100) + "MB ", 1
    /* TEXT */
    )]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  )), $props.inputData.that.errors[$props.inputData.field.name] != '' && $props.inputData.that.errors[$props.inputData.field.name] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.errorText), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.inputData.field.max_size != undefined ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)("Max size: ".concat($props.inputData.field.max_size, "MB")), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  );
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CustomFileInput.vue?vue&type=style&index=0&id=11538922&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CustomFileInput.vue?vue&type=style&index=0&id=11538922&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CustomFileInput.vue?vue&type=style&index=0&id=11538922&lang=scss&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CustomFileInput.vue?vue&type=style&index=0&id=11538922&lang=scss&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CustomFileInput_vue_vue_type_style_index_0_id_11538922_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CustomFileInput.vue?vue&type=style&index=0&id=11538922&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CustomFileInput.vue?vue&type=style&index=0&id=11538922&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CustomFileInput_vue_vue_type_style_index_0_id_11538922_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CustomFileInput_vue_vue_type_style_index_0_id_11538922_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

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
/* harmony import */ var _CustomFileInput_vue_vue_type_template_id_11538922_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomFileInput.vue?vue&type=template&id=11538922&scoped=true */ "./resources/js/components/CustomFileInput.vue?vue&type=template&id=11538922&scoped=true");
/* harmony import */ var _CustomFileInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomFileInput.vue?vue&type=script&lang=js */ "./resources/js/components/CustomFileInput.vue?vue&type=script&lang=js");
/* harmony import */ var _CustomFileInput_vue_vue_type_style_index_0_id_11538922_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomFileInput.vue?vue&type=style&index=0&id=11538922&lang=scss&scoped=true */ "./resources/js/components/CustomFileInput.vue?vue&type=style&index=0&id=11538922&lang=scss&scoped=true");




;
_CustomFileInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _CustomFileInput_vue_vue_type_template_id_11538922_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_CustomFileInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-11538922"
/* hot reload */
if (false) {}

_CustomFileInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/CustomFileInput.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_CustomFileInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/CustomFileInput.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/CustomFileInput.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CustomFileInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CustomFileInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CustomFileInput.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CustomFileInput.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/CustomFileInput.vue?vue&type=template&id=11538922&scoped=true":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/CustomFileInput.vue?vue&type=template&id=11538922&scoped=true ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CustomFileInput_vue_vue_type_template_id_11538922_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CustomFileInput_vue_vue_type_template_id_11538922_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CustomFileInput.vue?vue&type=template&id=11538922&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CustomFileInput.vue?vue&type=template&id=11538922&scoped=true");


/***/ }),

/***/ "./resources/js/components/CustomFileInput.vue?vue&type=style&index=0&id=11538922&lang=scss&scoped=true":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/CustomFileInput.vue?vue&type=style&index=0&id=11538922&lang=scss&scoped=true ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CustomFileInput_vue_vue_type_style_index_0_id_11538922_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CustomFileInput.vue?vue&type=style&index=0&id=11538922&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CustomFileInput.vue?vue&type=style&index=0&id=11538922&lang=scss&scoped=true");


/***/ })

}]);