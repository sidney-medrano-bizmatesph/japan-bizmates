(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_webCMS_OurTeamMembers_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/webCMS/OurTeamMembers.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/webCMS/OurTeamMembers.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "page_variables": () => (/* binding */ page_variables),
/* harmony export */   "fields": () => (/* binding */ fields),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../functions/validator'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  variable_name: "our_team_member",
  variable_name_plural: "our_team_members",
  parent_url: "/our-team",
  add_url: "/add-our-team-member",
  edit_url: "/our-team/edit",
  get_url: "/get-our-team-member",
  getter: "getOurTeamMembers",
  setter: "setVarOurTeamMembers"
};
var fields = {
  actions: {
    name: "actions",
    labelText: "Actions",
    filterable: false,
    sortable: false
  },
  picture: {
    name: "picture",
    labelText: "Picture",
    accept: "image/*",
    type: "file",
    max_size: "50",
    //MB,
    multiple: false,
    validation: ["success"],
    sortable: false,
    filterable: false
  },
  name: {
    type: "text",
    name: "name",
    labelText: "Name",
    placeholder: "Name",
    wrapperClass: "mb-2 mr-2 inline-block w-full",
    validation: ["required"]
  },
  position: {
    type: "text",
    name: "position",
    labelText: "Position",
    placeholder: "Position",
    wrapperClass: "mb-2 mr-2 inline-block w-full",
    validation: ["required"]
  },
  sequence: {
    type: "number",
    name: "sequence",
    labelText: "Order",
    placeholder: "Order",
    wrapperClass: "mb-2 mr-2 inline-block w-full",
    inputProps: {
      min: 1
    }
  }
};
var field_values = {
  position: "",
  name: "",
  sequence: 1,
  picture: []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return _objectSpread(_objectSpread({
      page_variables: page_variables,
      svgIcons: svgIcons,
      successes: {},
      errors: {},
      that: this,
      submitting: false,
      fields: fields
    }, field_values), {}, {
      edit: false,
      processProgress: 0,
      preview: ""
    });
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)([[page_variables.variable_name_plural]])),
  mounted: function mounted() {
    this.getter();

    if (this.$route.path.includes(page_variables.edit_url)) {
      this.edit = true;
      this.ourTeamGetter();
    }

    this.sequence = this.our_team_members.count + 1;
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)([page_variables.getter, page_variables.setter])), {}, {
    isEmpty: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    clear: function clear() {
      Object(function webpackMissingModule() { var e = new Error("Cannot find module '../functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(field_values, this, ["sequence"]);
      this.sequence = this.our_team_members.count + 1;
    },
    deleteMember: function deleteMember(_ref) {
      var _this = this;

      var id = _ref.id,
          name = _ref.name;
      Swal.fire({
        icon: "info",
        title: "Are you sure?",
        text: "This action will delete: ".concat(name),
        showCancelButton: true
      }).then(function (res) {
        if (res.value) {
          axios.post("/delete-our-team-member", {
            id: id
          }).then(function (res) {
            Object(function webpackMissingModule() { var e = new Error("Cannot find module '../functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(res.data.status, res.data.message);

            _this.getter();
          })["catch"](function (err) {
            Object(function webpackMissingModule() { var e = new Error("Cannot find module '../functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_this, err);
          });
        }
      });
    },
    ourTeamGetter: function ourTeamGetter() {
      var _this2 = this;

      var id = this.$route.params.id;
      axios.post(page_variables.get_url, {
        id: id
      }).then(function (res) {
        if (res.data.status == "success") {
          Object(function webpackMissingModule() { var e = new Error("Cannot find module '../functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(field_values, fields, res.data.result, _this2, ["picture"]);
          if (res.data.result.picture) _this2.preview = res.data.result.picture;
        } else {
          Object(function webpackMissingModule() { var e = new Error("Cannot find module '../functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(res.data.status, res.data.message);

          _this2.$router.push(page_variables.parent_url);
        }
      })["catch"](function (err) {
        Object(function webpackMissingModule() { var e = new Error("Cannot find module '../functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_this2, err);
      });
    },
    getter: function getter(data) {
      var defaultData = {
        filter: this[page_variables.variable_name_plural].filter,
        sequence: this[page_variables.variable_name_plural].sequence,
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
      var _this3 = this;

      var id = this.$route.params.id;

      var localFields = _.cloneDeep(fields);

      localFields.picture = _objectSpread(_objectSpread({}, localFields.picture), {}, {
        validation: ["".concat(this.edit ? "success" : "required")]
      });

      if (Object(function webpackMissingModule() { var e = new Error("Cannot find module '../functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../functions/validator'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(localFields, this))) {
        var data = new FormData();
        data.append("position", this.position);
        data.append("name", this.name);
        data.append("sequence", this.sequence);
        if (this.picture.length > 0) data.append("picture", this.picture[0]);

        if (this.edit) {
          data.append("edit", this.edit);
          data.append("id", id);
        }

        this.submitting = true;
        var that = this;
        var config = {
          headers: {
            "Content-Type": "multipart/form-data"
          },
          onUploadProgress: function onUploadProgress(progressEvent) {
            var percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);
            that.processProgress = percentCompleted;
          }
        };
        axios.post(page_variables.add_url, data, config).then(function (res) {
          _this3.submitting = false;
          Object(function webpackMissingModule() { var e = new Error("Cannot find module '../functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(res.data.status, res.data.message);

          if (res.data.status == "success") {
            _this3.clear();

            _this3.getter();

            if (_this3.edit) {
              _this3.$router.push(page_variables.parent_url);
            }
          }
        })["catch"](function (err) {
          _this3.submitting = false;
          Object(function webpackMissingModule() { var e = new Error("Cannot find module '../functions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_this3, err);
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
          if (res.picture) this.preview = res.picture;
        } else this.fundGetter();
      } else {
        this.edit = false;
        this.clear();
      }
    },
    "our_team_members.count": function our_team_membersCount(newValue) {
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
    CustomFileInput: function CustomFileInput() {
      return Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module '../components/CustomFileInput'"); e.code = 'MODULE_NOT_FOUND'; throw e; });
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

/***/ "./resources/js/pages/webCMS/OurTeamMembers.vue":
/*!******************************************************!*\
  !*** ./resources/js/pages/webCMS/OurTeamMembers.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fields": () => (/* reexport safe */ _OurTeamMembers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.fields),
/* harmony export */   "page_variables": () => (/* reexport safe */ _OurTeamMembers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.page_variables),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OurTeamMembers_vue_vue_type_template_id_c1289ade___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OurTeamMembers.vue?vue&type=template&id=c1289ade& */ "./resources/js/pages/webCMS/OurTeamMembers.vue?vue&type=template&id=c1289ade&");
/* harmony import */ var _OurTeamMembers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OurTeamMembers.vue?vue&type=script&lang=js& */ "./resources/js/pages/webCMS/OurTeamMembers.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _OurTeamMembers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _OurTeamMembers_vue_vue_type_template_id_c1289ade___WEBPACK_IMPORTED_MODULE_0__.render,
  _OurTeamMembers_vue_vue_type_template_id_c1289ade___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/webCMS/OurTeamMembers.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/webCMS/OurTeamMembers.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/webCMS/OurTeamMembers.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "fields": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OurTeamMembers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.fields),
/* harmony export */   "page_variables": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OurTeamMembers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.page_variables)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OurTeamMembers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OurTeamMembers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/webCMS/OurTeamMembers.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OurTeamMembers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/webCMS/OurTeamMembers.vue?vue&type=template&id=c1289ade&":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/webCMS/OurTeamMembers.vue?vue&type=template&id=c1289ade& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OurTeamMembers_vue_vue_type_template_id_c1289ade___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OurTeamMembers_vue_vue_type_template_id_c1289ade___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OurTeamMembers_vue_vue_type_template_id_c1289ade___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OurTeamMembers.vue?vue&type=template&id=c1289ade& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/webCMS/OurTeamMembers.vue?vue&type=template&id=c1289ade&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/webCMS/OurTeamMembers.vue?vue&type=template&id=c1289ade&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/webCMS/OurTeamMembers.vue?vue&type=template&id=c1289ade& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
                _c("p", { staticClass: "text-xl" }, [_vm._v("Members")]),
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
                          "\n                        grid grid-cols-1\n                        min-md:grid-cols-2 min-lg:grid-cols-3\n                        gap-x-5\n                    "
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "min-lg:col-span-2" },
                          [
                            _c("CustomInput", {
                              attrs: {
                                inputData: {
                                  field: _vm.fields.sequence,
                                  value: _vm.sequence,
                                  that: _vm.that
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("CustomInput", {
                              attrs: {
                                inputData: {
                                  field: _vm.fields.name,
                                  value: _vm.name,
                                  that: _vm.that
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("CustomInput", {
                              attrs: {
                                inputData: {
                                  field: _vm.fields.position,
                                  value: _vm.position,
                                  that: _vm.that
                                }
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          [
                            _vm.submitting
                              ? _c(
                                  "div",
                                  {
                                    staticClass:
                                      "shadow w-full bg-gray-300 mt-2 rounded"
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "\n                                    rounded\n                                    animate-pulse\n                                    bg-blue-900\n                                    text-xs\n                                    leading-none\n                                    py-1\n                                    text-center text-white\n                                    transition-all\n                                ",
                                        style:
                                          "width: " + _vm.processProgress + "%"
                                      },
                                      [
                                        _vm._v(
                                          "\n                                " +
                                            _vm._s(_vm.processProgress) +
                                            "%\n                            "
                                        )
                                      ]
                                    )
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _c("CustomFileInput", {
                              attrs: {
                                inputData: {
                                  field: Object.assign({}, _vm.fields.picture, {
                                    validation: [
                                      "" + (_vm.edit ? "success" : "required")
                                    ]
                                  }),
                                  value: _vm.picture,
                                  that: _vm.that
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.edit
                              ? _c("div", { staticClass: "w-full" }, [
                                  _c("p", [_vm._v("Current picture")]),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      staticClass: "spotlight",
                                      attrs: {
                                        href:
                                          "/storage/webCMS/images/" +
                                          _vm.preview
                                      }
                                    },
                                    [
                                      _c("img", {
                                        staticClass: "max-h-52",
                                        attrs: {
                                          src:
                                            "/storage/webCMS/images/" +
                                            _vm.preview,
                                          alt: ""
                                        }
                                      })
                                    ]
                                  )
                                ])
                              : _vm._e()
                          ],
                          1
                        )
                      ]
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
                  { attrs: { tableGroupData: { tableName: "Members table" } } },
                  [
                    _c("CustomFilter", {
                      attrs: {
                        fields: _vm.fields,
                        getter: _vm.getter,
                        setter: _vm.that[_vm.page_variables.setter],
                        mainVariable: _vm.our_team_members
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
                          mainVariable: _vm.our_team_members
                        }
                      },
                      _vm._l(_vm.our_team_members.our_team_members, function(
                        partner,
                        key
                      ) {
                        return _c("tr", { key: "partner-" + key }, [
                          _c("td", [
                            _vm._v(
                              "\n                            " +
                                _vm._s(
                                  _vm.our_team_members.page *
                                    _vm.our_team_members.rowsPerPage +
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
                                  attrs: { to: "/our-team/edit/" + partner.id }
                                },
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "btn btn-primary btn-sm mb-2 mr-2"
                                    },
                                    [_vm._v("Edit")]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-danger btn-sm",
                                  on: {
                                    click: function() {
                                      return _vm.deleteMember(partner)
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fas fa-trash" })]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "a",
                              {
                                staticClass: "spotlight",
                                attrs: {
                                  href:
                                    "/storage/webCMS/images/" + partner.picture
                                }
                              },
                              [
                                _c("img", {
                                  staticClass: "max-h-28",
                                  attrs: {
                                    src:
                                      "/storage/webCMS/images/" +
                                      partner.picture,
                                    alt: ""
                                  }
                                })
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(partner.name))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(partner.position))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(partner.sequence))])
                        ])
                      }),
                      0
                    ),
                    _vm._v(" "),
                    _c("CustomPagination", {
                      attrs: {
                        getter: _vm.getter,
                        setter: _vm.that[_vm.page_variables.setter],
                        mainVariable: _vm.our_team_members
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