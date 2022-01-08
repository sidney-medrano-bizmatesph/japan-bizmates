(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_webCMS_StudyGuideVideos_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/webCMS/StudyGuideVideos.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/webCMS/StudyGuideVideos.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "page_variables": () => (/* binding */ page_variables),
/* harmony export */   "fields": () => (/* binding */ fields),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var trumbowyg_dist_ui_icons_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! trumbowyg/dist/ui/icons.svg */ "./node_modules/trumbowyg/dist/ui/icons.svg");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../functions/validator'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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




var page_variables = {
  variable_name: "study_guide_video",
  variable_name_plural: "study_guide_videos",
  parent_url: "/home?cms=study-guide",
  add_url: "/add-study-guide-video",
  edit_url: "/home/study-guide-videos/edit",
  get_url: "/get-study-guide-video",
  getter: "getStudyGuideVideos",
  setter: "setVarStudyGuideVideos"
};
var fields = {
  actions: {
    name: "actions",
    labelText: "Actions",
    filterable: false,
    sortable: false
  },
  sequence: {
    type: "text",
    name: "sequence",
    labelText: "Order",
    placeholder: "Order",
    wrapperClass: "mb-2 mr-2 inline-block",
    validation: ["required"],
    inputProps: {
      min: 1
    }
  },
  title: {
    type: "text",
    name: "title",
    labelText: "Title",
    placeholder: "Title",
    wrapperClass: "mb-2 mr-2 inline-block min-lg:col-span-2",
    validation: ["required"]
  },
  code: {
    type: "text",
    name: "code",
    labelText: "Youtube code",
    placeholder: "Youtube code",
    wrapperClass: "mb-2 mr-2 inline-block",
    validation: ["required"],
    helperText: "Copy the code: youtube.com/watch?v=<code>"
  }
};
var field_values = {
  title: "",
  code: "",
  sequence: 1
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return _objectSpread(_objectSpread({
      page_variables: page_variables,
      svgIcons: trumbowyg_dist_ui_icons_svg__WEBPACK_IMPORTED_MODULE_1__.default,
      successes: {},
      errors: {},
      that: this,
      submitting: false,
      fields: fields
    }, field_values), {}, {
      edit: false
    });
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapState)(["study_guide_videos"])),
  mounted: function mounted() {
    // $("#title").trumbowyg({ svgPath: svgIcons });
    this.getter();

    if (this.$route.path.includes(page_variables.edit_url)) {
      this.edit = true;
      this.studyGuideVideoGetter();
    }

    this.sequence = this.study_guide_videos.count + 1;
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)([page_variables.getter, page_variables.setter])), {}, {
    isEmpty: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    clear: function clear() {
      Object(function webpackMissingModule() { var e = new Error("Cannot find module '../functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(field_values, this, ["sequence"]);
    },
    studyGuideVideoGetter: function studyGuideVideoGetter() {
      var _this = this;

      var id = this.$route.params.id;
      axios.post(page_variables.get_url, {
        id: id
      }).then(function (res) {
        if (res.data.status == "success") {
          Object(function webpackMissingModule() { var e = new Error("Cannot find module '../functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(field_values, fields, res.data.result, _this);
        } else {
          Object(function webpackMissingModule() { var e = new Error("Cannot find module '../functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(res.data.status, res.data.message);

          _this.$router.push(page_variables.parent_url);
        }
      })["catch"](function (err) {
        Object(function webpackMissingModule() { var e = new Error("Cannot find module '../functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_this, err);
      });
    },
    getter: function getter(data) {
      var defaultData = {
        filter: this[page_variables.variable_name_plural].filter,
        order: this[page_variables.variable_name_plural].order,
        page: this[page_variables.variable_name_plural].page,
        rowsPerPage: this[page_variables.variable_name_plural].rowsPerPage,
        type: this[page_variables.variable_name_plural].type
      };

      if (!Object(function webpackMissingModule() { var e = new Error("Cannot find module '../functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(data)) {
        defaultData = _objectSpread(_objectSpread({}, defaultData), data);
      }

      this[page_variables.getter](defaultData);
    },
    onSubmit: function onSubmit() {
      var _this2 = this;

      var id = this.$route.params.id;

      if (Object(function webpackMissingModule() { var e = new Error("Cannot find module '../functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../functions/validator'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(fields, this))) {
        var data = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(field_values, this);

        if (this.edit) {
          data.edit = this.edit;
          data.id = id;
        }

        this.submitting = true;
        axios.post(page_variables.add_url, data).then(function (res) {
          _this2.submitting = false;
          Object(function webpackMissingModule() { var e = new Error("Cannot find module '../functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(res.data.status, res.data.message);

          if (res.data.status == "success") {
            _this2.clear();

            _this2.getter();

            if (_this2.edit) {
              _this2.$router.push(page_variables.parent_url);
            }
          }
        })["catch"](function (err) {
          _this2.submitting = false;
          Object(function webpackMissingModule() { var e = new Error("Cannot find module '../functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_this2, err);
        });
      }
    }
  }),
  watch: {
    $route: function $route() {
      this.errors = {};
      this.successes = {};

      if (this.$route.path.includes(page_variables.edit_url)) {
        this.edit = true;
        var id = this.$route.params.id;
        var variable_name = page_variables.variable_name_plural;

        if (!Object(function webpackMissingModule() { var e = new Error("Cannot find module '../functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this[variable_name][variable_name])) {
          var res = this[variable_name][variable_name].filter(function (res) {
            return res.id == id;
          })[0];
          Object(function webpackMissingModule() { var e = new Error("Cannot find module '../functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(field_values, fields, res, this);
        } else this.fundGetter();
      } else {
        this.edit = false;
        this.clear();
      }
    },
    "study_guide_videos.count": function study_guide_videosCount(newValue) {
      this.sequence = newValue + 1;
    }
  },
  components: {
    FormAndTable: function FormAndTable() {
      return Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module '../layouts/FormAndTable.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; });
    },
    CustomInput: function CustomInput() {
      return Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module '../components/CustomInput'"); e.code = 'MODULE_NOT_FOUND'; throw e; });
    },
    Submitting: function Submitting() {
      return Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module '../components/Submitting'"); e.code = 'MODULE_NOT_FOUND'; throw e; });
    },
    CustomFilter: function CustomFilter() {
      return Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module '../components/CustomFilter'"); e.code = 'MODULE_NOT_FOUND'; throw e; });
    },
    CustomTable: function CustomTable() {
      return Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module '../components/CustomTable'"); e.code = 'MODULE_NOT_FOUND'; throw e; });
    },
    CustomPagination: function CustomPagination() {
      return Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module '../components/CustomPagination'"); e.code = 'MODULE_NOT_FOUND'; throw e; });
    },
    CustomTableGroup: function CustomTableGroup() {
      return Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module '../components/CustomTableGroup'"); e.code = 'MODULE_NOT_FOUND'; throw e; });
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/webCMS/StudyGuideVideos.vue":
/*!********************************************************!*\
  !*** ./resources/js/pages/webCMS/StudyGuideVideos.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fields": () => (/* reexport safe */ _StudyGuideVideos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.fields),
/* harmony export */   "page_variables": () => (/* reexport safe */ _StudyGuideVideos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.page_variables),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StudyGuideVideos_vue_vue_type_template_id_4b5ba1ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StudyGuideVideos.vue?vue&type=template&id=4b5ba1ac& */ "./resources/js/pages/webCMS/StudyGuideVideos.vue?vue&type=template&id=4b5ba1ac&");
/* harmony import */ var _StudyGuideVideos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StudyGuideVideos.vue?vue&type=script&lang=js& */ "./resources/js/pages/webCMS/StudyGuideVideos.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _StudyGuideVideos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _StudyGuideVideos_vue_vue_type_template_id_4b5ba1ac___WEBPACK_IMPORTED_MODULE_0__.render,
  _StudyGuideVideos_vue_vue_type_template_id_4b5ba1ac___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/webCMS/StudyGuideVideos.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/webCMS/StudyGuideVideos.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/webCMS/StudyGuideVideos.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "fields": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StudyGuideVideos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.fields),
/* harmony export */   "page_variables": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StudyGuideVideos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.page_variables)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StudyGuideVideos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StudyGuideVideos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/webCMS/StudyGuideVideos.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StudyGuideVideos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/webCMS/StudyGuideVideos.vue?vue&type=template&id=4b5ba1ac&":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/webCMS/StudyGuideVideos.vue?vue&type=template&id=4b5ba1ac& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StudyGuideVideos_vue_vue_type_template_id_4b5ba1ac___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StudyGuideVideos_vue_vue_type_template_id_4b5ba1ac___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StudyGuideVideos_vue_vue_type_template_id_4b5ba1ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StudyGuideVideos.vue?vue&type=template&id=4b5ba1ac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/webCMS/StudyGuideVideos.vue?vue&type=template&id=4b5ba1ac&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/webCMS/StudyGuideVideos.vue?vue&type=template&id=4b5ba1ac&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/webCMS/StudyGuideVideos.vue?vue&type=template&id=4b5ba1ac& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _c("FormAndTable", {
    scopedSlots: _vm._u([
      {
        key: "form",
        fn: function() {
          return [
            _c(
              "div",
              {
                class: {
                  "rounded p-4 transition-all duration-300 shadow-lg mb-8": true,
                  "bg-white": !_vm.edit,
                  "bg-green-50 ring-2 ring-green-200": _vm.edit
                }
              },
              [
                _c("p", { staticClass: "text-xl" }, [_vm._v("Videos")]),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.onSubmit($event)
                      }
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "\n                        grid grid-cols-1\n                        min-md:grid-cols-2 min-lg:grid-cols-4\n                        gap-x-5\n                    "
                      },
                      [
                        _c("CustomInput", {
                          attrs: {
                            inputData: {
                              field: _vm.fields.title,
                              value: _vm.title,
                              that: _vm.that
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("CustomInput", {
                          attrs: {
                            inputData: {
                              field: _vm.fields.code,
                              value: _vm.code,
                              that: _vm.that
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("CustomInput", {
                          attrs: {
                            inputData: {
                              field: _vm.fields.sequence,
                              value: _vm.sequence,
                              that: _vm.that
                            }
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: {
                          type: "submit",
                          disabled: !_vm.isEmpty(_vm.errors) || _vm.submitting
                        }
                      },
                      [
                        _c(
                          "Submitting",
                          { attrs: { submitting: _vm.submitting } },
                          [_vm._v("Submit")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-dark",
                        attrs: { type: "button", disabled: _vm.submitting },
                        on: { click: _vm.clear }
                      },
                      [
                        _c(
                          "Submitting",
                          { attrs: { submitting: _vm.submitting } },
                          [_vm._v("Clear")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm.edit
                      ? _c(
                          "button",
                          {
                            staticClass: "btn btn-danger",
                            attrs: { type: "button", disabled: _vm.submitting },
                            on: {
                              click: function() {
                                return _vm.$router.push(
                                  _vm.page_variables.parent_url
                                )
                              }
                            }
                          },
                          [
                            _c(
                              "Submitting",
                              { attrs: { submitting: _vm.submitting } },
                              [_vm._v("Cancel")]
                            )
                          ],
                          1
                        )
                      : _vm._e()
                  ]
                )
              ]
            )
          ]
        },
        proxy: true
      },
      {
        key: "table",
        fn: function() {
          return [
            _c(
              "div",
              {
                staticClass:
                  "\n                rounded\n                p-4\n                transition-all\n                duration-300\n                bg-white\n                shadow-lg\n                mb-8\n            "
              },
              [
                _c(
                  "CustomTableGroup",
                  {
                    attrs: {
                      tableGroupData: { tableName: " Study guide videos table" }
                    }
                  },
                  [
                    _c("CustomFilter", {
                      attrs: {
                        fields: _vm.fields,
                        getter: _vm.getter,
                        setter: _vm.that[_vm.page_variables.setter],
                        mainVariable: _vm.study_guide_videos
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "CustomTable",
                      {
                        attrs: {
                          fields: _vm.fields,
                          getter: _vm.getter,
                          setter: _vm.that[_vm.page_variables.setter],
                          mainVariable: _vm.study_guide_videos
                        }
                      },
                      _vm._l(
                        _vm.study_guide_videos.study_guide_videos,
                        function(video, key) {
                          return _c("tr", { key: "video-" + key }, [
                            _c("td", [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(
                                    _vm.study_guide_videos.page *
                                      _vm.study_guide_videos.rowsPerPage +
                                      key +
                                      1
                                  ) +
                                  "\n                        "
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                _c(
                                  "router-link",
                                  {
                                    attrs: {
                                      to:
                                        "/home/study-guide-videos/edit/" +
                                        video.id +
                                        "?cms=study-guide"
                                    }
                                  },
                                  [
                                    _c(
                                      "span",
                                      { staticClass: "btn btn-primary" },
                                      [_vm._v("Edit")]
                                    )
                                  ]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(video.sequence))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(video.title))]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "a",
                                {
                                  staticClass: "text-blue-500 hover:underline",
                                  attrs: {
                                    href:
                                      "https://youtube.com/watch?v=" +
                                      video.code,
                                    target: "_blank"
                                  }
                                },
                                [_vm._v(_vm._s(video.code))]
                              )
                            ])
                          ])
                        }
                      ),
                      0
                    ),
                    _vm._v(" "),
                    _c("CustomPagination", {
                      attrs: {
                        getter: _vm.getter,
                        setter: _vm.that[_vm.page_variables.setter],
                        mainVariable: _vm.study_guide_videos
                      }
                    })
                  ],
                  1
                )
              ],
              1
            )
          ]
        },
        proxy: true
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);