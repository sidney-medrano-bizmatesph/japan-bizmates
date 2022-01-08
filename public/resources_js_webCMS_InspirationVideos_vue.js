(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_webCMS_InspirationVideos_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/InspirationVideos.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/InspirationVideos.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "page_variables": () => (/* binding */ page_variables),
/* harmony export */   "fields": () => (/* binding */ fields),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions */ "./resources/js/functions/index.js");
/* harmony import */ var trumbowyg_dist_ui_icons_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! trumbowyg/dist/ui/icons.svg */ "./node_modules/trumbowyg/dist/ui/icons.svg");
/* harmony import */ var _functions_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/validator */ "./resources/js/functions/validator.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  variable_name: "inspiration_video",
  variable_name_plural: "inspiration_videos",
  parent_url: "/home?cms=inspirations",
  add_url: "/add-inspiration-video",
  edit_url: "/home/inspiration-videos/edit",
  get_url: "/get-inspiration-video",
  getter: "getInspirationVideos",
  setter: "setVarInspirationVideos"
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
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapState)(["inspiration_videos"])),
  mounted: function mounted() {
    // $("#title").trumbowyg({ svgPath: svgIcons });
    this.getter();

    if (this.$route.path.includes(page_variables.edit_url)) {
      this.edit = true;
      this.inspirationVideoGetter();
    }

    this.sequence = this.inspiration_videos.count + 1;
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapActions)([page_variables.getter, page_variables.setter])), {}, {
    isEmpty: _functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty,
    clear: function clear() {
      (0,_functions__WEBPACK_IMPORTED_MODULE_0__.formClearer)(field_values, this, ["sequence"]);
    },
    deleteVideo: function deleteVideo(_ref) {
      var _this = this;

      var id = _ref.id,
          title = _ref.title;
      Swal.fire({
        icon: "info",
        title: "Are you sure?",
        text: "This action will delete the video: ".concat(title),
        showCancelButton: true
      }).then(function (res) {
        if (res.value) {
          axios.post("/delete-inspiration-video", {
            id: id
          }).then(function (res) {
            (0,_functions__WEBPACK_IMPORTED_MODULE_0__.toast)(res.data.status, res.data.message);

            _this.getter();
          })["catch"](function (err) {
            (0,_functions__WEBPACK_IMPORTED_MODULE_0__.commonCatchBlock)(_this, err);
          });
        }
      });
    },
    inspirationVideoGetter: function inspirationVideoGetter() {
      var _this2 = this;

      var id = this.$route.params.id;
      axios.post(page_variables.get_url, {
        id: id
      }).then(function (res) {
        if (res.data.status == "success") {
          (0,_functions__WEBPACK_IMPORTED_MODULE_0__.formSetter)(field_values, fields, res.data.result, _this2);
        } else {
          (0,_functions__WEBPACK_IMPORTED_MODULE_0__.toast)(res.data.status, res.data.message);

          _this2.$router.push(page_variables.parent_url);
        }
      })["catch"](function (err) {
        (0,_functions__WEBPACK_IMPORTED_MODULE_0__.commonCatchBlock)(_this2, err);
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

      if (!(0,_functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(data)) {
        defaultData = _objectSpread(_objectSpread({}, defaultData), data);
      }

      this[page_variables.getter](defaultData);
    },
    onSubmit: function onSubmit() {
      var _this3 = this;

      var id = this.$route.params.id;

      if ((0,_functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty)((0,_functions_validator__WEBPACK_IMPORTED_MODULE_2__.validateAll)(fields, this))) {
        var data = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.dataSetter)(field_values, this);

        if (this.edit) {
          data.edit = this.edit;
          data.id = id;
        }

        this.submitting = true;
        axios.post(page_variables.add_url, data).then(function (res) {
          _this3.submitting = false;
          (0,_functions__WEBPACK_IMPORTED_MODULE_0__.toast)(res.data.status, res.data.message);

          if (res.data.status == "success") {
            _this3.clear();

            _this3.getter();

            if (_this3.edit) {
              _this3.$router.push(page_variables.parent_url);
            }
          }
        })["catch"](function (err) {
          _this3.submitting = false;
          (0,_functions__WEBPACK_IMPORTED_MODULE_0__.commonCatchBlock)(_this3, err);
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

        if (!(0,_functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(this[variable_name][variable_name])) {
          var res = this[variable_name][variable_name].filter(function (res) {
            return res.id == id;
          })[0];
          (0,_functions__WEBPACK_IMPORTED_MODULE_0__.formSetter)(field_values, fields, res, this);
        } else this.fundGetter();
      } else {
        this.edit = false;
        this.clear();
      }
    },
    "inspiration_videos.count": function inspiration_videosCount(newValue) {
      this.sequence = newValue + 1;
    }
  },
  components: {
    FormAndTable: function FormAndTable() {
      return __webpack_require__.e(/*! import() */ "resources_js_layouts_FormAndTable_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../layouts/FormAndTable.vue */ "./resources/js/layouts/FormAndTable.vue"));
    },
    CustomInput: function CustomInput() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_CustomInput_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../components/CustomInput */ "./resources/js/components/CustomInput.vue"));
    },
    Submitting: function Submitting() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_Submitting_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../components/Submitting */ "./resources/js/components/Submitting.vue"));
    },
    CustomFilter: function CustomFilter() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_CustomFilter_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../components/CustomFilter */ "./resources/js/components/CustomFilter.vue"));
    },
    CustomTable: function CustomTable() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_CustomTable_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../components/CustomTable */ "./resources/js/components/CustomTable.vue"));
    },
    CustomPagination: function CustomPagination() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_CustomPagination_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../components/CustomPagination */ "./resources/js/components/CustomPagination.vue"));
    },
    CustomTableGroup: function CustomTableGroup() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_CustomTableGroup_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../components/CustomTableGroup */ "./resources/js/components/CustomTableGroup.vue"));
    }
  }
});

/***/ }),

/***/ "./resources/js/webCMS/InspirationVideos.vue":
/*!***************************************************!*\
  !*** ./resources/js/webCMS/InspirationVideos.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fields": () => (/* reexport safe */ _InspirationVideos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.fields),
/* harmony export */   "page_variables": () => (/* reexport safe */ _InspirationVideos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.page_variables),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InspirationVideos_vue_vue_type_template_id_6e75a706___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InspirationVideos.vue?vue&type=template&id=6e75a706& */ "./resources/js/webCMS/InspirationVideos.vue?vue&type=template&id=6e75a706&");
/* harmony import */ var _InspirationVideos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InspirationVideos.vue?vue&type=script&lang=js& */ "./resources/js/webCMS/InspirationVideos.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _InspirationVideos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _InspirationVideos_vue_vue_type_template_id_6e75a706___WEBPACK_IMPORTED_MODULE_0__.render,
  _InspirationVideos_vue_vue_type_template_id_6e75a706___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/webCMS/InspirationVideos.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/webCMS/InspirationVideos.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/webCMS/InspirationVideos.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "fields": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InspirationVideos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.fields),
/* harmony export */   "page_variables": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InspirationVideos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.page_variables)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InspirationVideos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InspirationVideos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/InspirationVideos.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InspirationVideos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/webCMS/InspirationVideos.vue?vue&type=template&id=6e75a706&":
/*!**********************************************************************************!*\
  !*** ./resources/js/webCMS/InspirationVideos.vue?vue&type=template&id=6e75a706& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InspirationVideos_vue_vue_type_template_id_6e75a706___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InspirationVideos_vue_vue_type_template_id_6e75a706___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InspirationVideos_vue_vue_type_template_id_6e75a706___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InspirationVideos.vue?vue&type=template&id=6e75a706& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/InspirationVideos.vue?vue&type=template&id=6e75a706&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/InspirationVideos.vue?vue&type=template&id=6e75a706&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/InspirationVideos.vue?vue&type=template&id=6e75a706& ***!
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
                      tableGroupData: { tableName: " Inspiration videos table" }
                    }
                  },
                  [
                    _c("CustomFilter", {
                      attrs: {
                        fields: _vm.fields,
                        getter: _vm.getter,
                        setter: _vm.that[_vm.page_variables.setter],
                        mainVariable: _vm.inspiration_videos
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
                          mainVariable: _vm.inspiration_videos
                        }
                      },
                      _vm._l(
                        _vm.inspiration_videos.inspiration_videos,
                        function(video, key) {
                          return _c("tr", { key: "video-" + key }, [
                            _c("td", [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(
                                    _vm.inspiration_videos.page *
                                      _vm.inspiration_videos.rowsPerPage +
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
                                        "/home/inspiration-videos/edit/" +
                                        video.id +
                                        "?cms=inspiration"
                                    }
                                  },
                                  [
                                    _c(
                                      "span",
                                      { staticClass: "btn btn-primary" },
                                      [_vm._v("Edit")]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-danger",
                                    on: {
                                      click: function() {
                                        return _vm.deleteVideo(video)
                                      }
                                    }
                                  },
                                  [_c("i", { staticClass: "fas fa-trash" })]
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
                        mainVariable: _vm.inspiration_videos
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