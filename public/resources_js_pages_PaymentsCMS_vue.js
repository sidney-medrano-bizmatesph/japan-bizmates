(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_PaymentsCMS_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/PaymentsCMS.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/PaymentsCMS.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions */ "./resources/js/functions/index.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      selected: 0,
      payment: {},
      payments_upper: [],
      payments: [],
      payments_upper_ids: [],
      payments_ids: [],
      review_bundles: [],
      review_bundle_ids: [],
      podclass: [],
      podclass_ids: [],
      freetrials: [],
      freetrials_ids: [],
      today: new Date()
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios.post("/web/payments-initialize").then(function (res) {
      res.data.payments_upper.map(function (i) {
        _this.payments_upper_ids.push(i.id);
      });
      res.data.payments.map(function (i) {
        _this.payments_ids.push(i.id);
      });
      res.data.review_bundles.map(function (i) {
        _this.review_bundle_ids.push(i.id);
      });
      res.data.podclass.map(function (i) {
        _this.podclass_ids.push(i.id);
      });
      res.data.freetrials.map(function (i) {
        _this.freetrials_ids.push(i.id);
      });
      _this.freetrials = res.data.freetrials;
      _this.payment = res.data.payment;
      _this.payments_upper = res.data.payments_upper;
      _this.payments = res.data.payments;
      _this.review_bundles = res.data.review_bundles;
      _this.podclass = res.data.podclass;
    })["catch"](function (err) {
      (0,_functions__WEBPACK_IMPORTED_MODULE_0__.commonCatchBlock)(_this, err);
    });
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)(["general"])),
  methods: {
    isEmpty: _functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty,
    stringToDate: function stringToDate(date_string) {
      return new Date(date_string);
    },
    redirectToRegister: function redirectToRegister() {
      window.open("https://med.ple-reap.com/register");
    },
    numberWithCommas: function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    decimalPlaces: function decimalPlaces(val) {
      var places = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      return parseFloat(val).toFixed(places);
    },
    onClick: function onClick(id) {
      if (this.selected == id) {
        this.selected = 0;
      } else {
        this.selected = id;
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/PaymentsCMS.vue":
/*!********************************************!*\
  !*** ./resources/js/pages/PaymentsCMS.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PaymentsCMS_vue_vue_type_template_id_96e0743a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaymentsCMS.vue?vue&type=template&id=96e0743a& */ "./resources/js/pages/PaymentsCMS.vue?vue&type=template&id=96e0743a&");
/* harmony import */ var _PaymentsCMS_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaymentsCMS.vue?vue&type=script&lang=js& */ "./resources/js/pages/PaymentsCMS.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _PaymentsCMS_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _PaymentsCMS_vue_vue_type_template_id_96e0743a___WEBPACK_IMPORTED_MODULE_0__.render,
  _PaymentsCMS_vue_vue_type_template_id_96e0743a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/PaymentsCMS.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/PaymentsCMS.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/PaymentsCMS.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentsCMS_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PaymentsCMS.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/PaymentsCMS.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentsCMS_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/PaymentsCMS.vue?vue&type=template&id=96e0743a&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/PaymentsCMS.vue?vue&type=template&id=96e0743a& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentsCMS_vue_vue_type_template_id_96e0743a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentsCMS_vue_vue_type_template_id_96e0743a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentsCMS_vue_vue_type_template_id_96e0743a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PaymentsCMS.vue?vue&type=template&id=96e0743a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/PaymentsCMS.vue?vue&type=template&id=96e0743a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/PaymentsCMS.vue?vue&type=template&id=96e0743a&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/PaymentsCMS.vue?vue&type=template&id=96e0743a& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "payments-div mt-5" }, [
    _c(
      "div",
      {
        staticClass: "section payments full-page pb-8",
        attrs: { id: "payments" }
      },
      [
        _c("div", { staticClass: "flex items-center mb-8 w-full" }, [
          _c("img", {
            staticClass: "mr-4",
            staticStyle: { "max-height": "100px" },
            attrs: {
              src: "/storage/webCMS/images/" + _vm.general.round_logo,
              alt: ""
            }
          }),
          _vm._v(" "),
          _c("p", {
            staticClass:
              "\n                    text-4xl\n                    font-bold\n                    mb-4\n                    border-bottom-blue\n                    text-blue\n                    w-full\n                ",
            domProps: { innerHTML: _vm._s(_vm.payment.title) }
          })
        ]),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        !_vm.isEmpty(_vm.freetrials)
          ? [
              _c("p", { staticClass: "font-bold text-xl text-red mb-6" }, [
                _vm._v("Free trials")
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "py-5 px-16 border-2 border-red-500 rounded-3xl mb-10"
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "\n                        grid grid-cols-1\n                        min-xl:grid-cols-2\n                        gap-x-5 gap-y-3\n                        mb-6\n                    "
                    },
                    _vm._l(_vm.freetrials, function(payment_item) {
                      return _c(
                        "div",
                        { key: "freetrials-" + payment_item.id },
                        [
                          _c(
                            "p",
                            { staticClass: "text-red font-bold text-2xl mb-5" },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(payment_item.name) +
                                  "\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              class: {
                                "border-2  rounded-3xl flex justify-center p-9 cursor-pointer transition-all duration-150": true,
                                "bg-blue-100 border-blue ring-4 ring-blue-400":
                                  _vm.selected == payment_item.id,
                                "border-red-500":
                                  _vm.selected != payment_item.id
                              },
                              staticStyle: { "min-width": "200px" },
                              on: {
                                click: function() {
                                  return _vm.onClick(payment_item.id)
                                }
                              }
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "text-center" },
                                [
                                  _c("p", {
                                    class: {
                                      "font-bold": true,
                                      "text-red":
                                        _vm.selected != payment_item.id,
                                      "text-blue":
                                        _vm.selected == payment_item.id
                                    }
                                  }),
                                  _vm._v(" "),
                                  payment_item.pre_selling != null &&
                                  _vm.stringToDate(payment_item.pre_selling) >=
                                    _vm.today
                                    ? [
                                        _c("div", [
                                          payment_item.promo_details != null
                                            ? _c(
                                                "p",
                                                {
                                                  staticClass:
                                                    "text-lg text-red"
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                            " +
                                                      _vm._s(
                                                        payment_item.promo_details
                                                      ) +
                                                      "\n                                        "
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ])
                                      ]
                                    : [
                                        payment_item.promo_details != null
                                          ? _c(
                                              "p",
                                              {
                                                staticClass: "text-lg text-red"
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                        " +
                                                    _vm._s(
                                                      payment_item.promo_details
                                                    ) +
                                                    "\n                                    "
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ]
                                ],
                                2
                              )
                            ]
                          )
                        ]
                      )
                    }),
                    0
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn-own btn-danger w-full",
                      attrs: {
                        disabled: !_vm.freetrials_ids.includes(_vm.selected)
                      },
                      on: { click: _vm.redirectToRegister }
                    },
                    [
                      _vm._v(
                        "\n                    " +
                          _vm._s(_vm.payment.button) +
                          "\n                "
                      )
                    ]
                  )
                ]
              )
            ]
          : _vm._e(),
        _vm._v(" "),
        _c("p", {
          staticClass: "font-bold text-xl text-red mb-6",
          domProps: { innerHTML: _vm._s(_vm.payment.bundle_header) }
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "py-5 px-16 border-2 border-red-500 rounded-3xl mb-10"
          },
          [
            _c("p", {
              staticClass: "text-xl text-red font-bold mb-6",
              domProps: { innerHTML: _vm._s(_vm.payment.one_year_header) }
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "\n                    grid grid-cols-1\n                    min-xl:grid-cols-2\n                    gap-x-5 gap-y-3\n                    mb-6\n                "
              },
              _vm._l(_vm.payments_upper, function(payment_item) {
                return _c(
                  "div",
                  {
                    key: "payment-item-" + payment_item.id,
                    class: {
                      "border-2  rounded-3xl flex justify-center p-9 cursor-pointer transition-all duration-150": true,
                      "bg-blue-100 border-blue ring-4 ring-blue-400":
                        _vm.selected == payment_item.id,
                      "border-red-500": _vm.selected != payment_item.id
                    },
                    staticStyle: { "min-width": "200px" },
                    on: {
                      click: function() {
                        return _vm.onClick(payment_item.id)
                      }
                    }
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "text-center" },
                      [
                        _c(
                          "p",
                          {
                            class: {
                              "font-bold": true,
                              "text-red": _vm.selected != payment_item.id,
                              "text-blue": _vm.selected == payment_item.id
                            }
                          },
                          [
                            _c("span", { staticClass: "text-5xl" }, [
                              _vm._v(_vm._s(payment_item.subjects))
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "text-3xl underline" }, [
                              _vm._v("Subjects")
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        payment_item.pre_selling != null &&
                        _vm.stringToDate(payment_item.pre_selling) >= _vm.today
                          ? [
                              _c("div", [
                                _c("p", { staticClass: "font-bold text-4xl" }, [
                                  _vm._v(
                                    "\n                                    Php\n                                    " +
                                      _vm._s(
                                        _vm.numberWithCommas(
                                          _vm.decimalPlaces(
                                            payment_item.amount *
                                              (payment_item.discount / 100),
                                            2
                                          )
                                        )
                                      ) +
                                      "\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                payment_item.promo_details != null
                                  ? _c(
                                      "p",
                                      { staticClass: "text-lg text-red" },
                                      [
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(payment_item.promo_details) +
                                            "\n                                "
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ])
                            ]
                          : [
                              _c("p", { staticClass: "font-bold text-4xl" }, [
                                _vm._v(
                                  "\n                                Php\n                                " +
                                    _vm._s(
                                      _vm.numberWithCommas(
                                        _vm.decimalPlaces(
                                          payment_item.amount,
                                          2
                                        )
                                      )
                                    ) +
                                    "\n                            "
                                )
                              ]),
                              _vm._v(" "),
                              payment_item.promo_details != null
                                ? _c("p", { staticClass: "text-lg text-red" }, [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(payment_item.promo_details) +
                                        "\n                            "
                                    )
                                  ])
                                : _vm._e()
                            ]
                      ],
                      2
                    )
                  ]
                )
              }),
              0
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn-own btn-danger w-full",
                attrs: {
                  disabled: !_vm.payments_upper_ids.includes(_vm.selected)
                },
                on: { click: _vm.redirectToRegister }
              },
              [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.payment.button) +
                    "\n            "
                )
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c("p", {
          staticClass: "font-bold text-xl text-red mb-6",
          domProps: { innerHTML: _vm._s(_vm.payment.avail_all_header) }
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "py-5 px-16 border-2 border-red-500 rounded-3xl mb-10"
          },
          [
            _c(
              "div",
              {
                staticClass:
                  "\n                    grid grid-cols-1\n                    min-xl:grid-cols-2\n                    gap-x-5 gap-y-3\n                    mb-6\n                "
              },
              _vm._l(_vm.payments, function(payment_item) {
                return _c("div", { key: "payments-" + payment_item.id }, [
                  _c("p", { staticClass: "text-red font-bold text-2xl mb-5" }, [
                    _vm._v(
                      "\n                        " +
                        _vm._s(payment_item.name) +
                        "\n                    "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      class: {
                        "border-2  rounded-3xl flex justify-center p-9 cursor-pointer transition-all duration-150": true,
                        "bg-blue-100 border-blue ring-4 ring-blue-400":
                          _vm.selected == payment_item.id,
                        "border-red-500": _vm.selected != payment_item.id
                      },
                      staticStyle: { "min-width": "200px" },
                      on: {
                        click: function() {
                          return _vm.onClick(payment_item.id)
                        }
                      }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "text-center" },
                        [
                          _c("p", {
                            class: {
                              "font-bold": true,
                              "text-red": _vm.selected != payment_item.id,
                              "text-blue": _vm.selected == payment_item.id
                            }
                          }),
                          _vm._v(" "),
                          payment_item.pre_selling != null &&
                          _vm.stringToDate(payment_item.pre_selling) >=
                            _vm.today
                            ? [
                                _c("div", [
                                  _c(
                                    "p",
                                    { staticClass: "font-bold text-4xl" },
                                    [
                                      _vm._v(
                                        "\n                                        Php\n                                        " +
                                          _vm._s(
                                            _vm.numberWithCommas(
                                              _vm.decimalPlaces(
                                                payment_item.amount *
                                                  (payment_item.discount / 100),
                                                2
                                              )
                                            )
                                          ) +
                                          "\n                                    "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  payment_item.promo_details != null
                                    ? _c(
                                        "p",
                                        { staticClass: "text-lg text-red" },
                                        [
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(
                                                payment_item.promo_details
                                              ) +
                                              "\n                                    "
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ])
                              ]
                            : [
                                _c("p", { staticClass: "font-bold text-4xl" }, [
                                  _vm._v(
                                    "\n                                    Php\n                                    " +
                                      _vm._s(
                                        _vm.numberWithCommas(
                                          _vm.decimalPlaces(
                                            payment_item.amount,
                                            2
                                          )
                                        )
                                      ) +
                                      "\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                payment_item.promo_details != null
                                  ? _c(
                                      "p",
                                      { staticClass: "text-lg text-red" },
                                      [
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(payment_item.promo_details) +
                                            "\n                                "
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]
                        ],
                        2
                      )
                    ]
                  )
                ])
              }),
              0
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn-own btn-danger w-full",
                attrs: { disabled: !_vm.payments_ids.includes(_vm.selected) },
                on: { click: _vm.redirectToRegister }
              },
              [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.payment.button) +
                    "\n            "
                )
              ]
            )
          ]
        ),
        _vm._v(" "),
        !_vm.isEmpty(_vm.review_bundles)
          ? [
              _c("p", { staticClass: "font-bold text-xl text-red mb-6" }, [
                _vm._v(
                  "\n                Review bundle - Lifelines Lecture Series\n            "
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "py-5 px-16 border-2 border-red-500 rounded-3xl mb-10"
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "\n                        grid grid-cols-1\n                        min-xl:grid-cols-2\n                        gap-x-5 gap-y-3\n                        mb-6\n                    "
                    },
                    _vm._l(_vm.review_bundles, function(payment_item) {
                      return _c(
                        "div",
                        { key: "review_bundles-" + payment_item.id },
                        [
                          _c(
                            "p",
                            { staticClass: "text-red font-bold text-2xl mb-5" },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(payment_item.name) +
                                  "\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              class: {
                                "border-2  rounded-3xl flex justify-center p-9 cursor-pointer transition-all duration-150": true,
                                "bg-blue-100 border-blue ring-4 ring-blue-400":
                                  _vm.selected == payment_item.id,
                                "border-red-500":
                                  _vm.selected != payment_item.id
                              },
                              staticStyle: { "min-width": "200px" },
                              on: {
                                click: function() {
                                  return _vm.onClick(payment_item.id)
                                }
                              }
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "text-center" },
                                [
                                  _c("p", {
                                    class: {
                                      "font-bold": true,
                                      "text-red":
                                        _vm.selected != payment_item.id,
                                      "text-blue":
                                        _vm.selected == payment_item.id
                                    }
                                  }),
                                  _vm._v(" "),
                                  payment_item.pre_selling != null &&
                                  _vm.stringToDate(payment_item.pre_selling) >=
                                    _vm.today
                                    ? [
                                        _c("div", [
                                          _c(
                                            "p",
                                            {
                                              staticClass: "font-bold text-4xl"
                                            },
                                            [
                                              _vm._v(
                                                "\n                                            Php\n                                            " +
                                                  _vm._s(
                                                    _vm.numberWithCommas(
                                                      _vm.decimalPlaces(
                                                        payment_item.amount *
                                                          (payment_item.discount /
                                                            100),
                                                        2
                                                      )
                                                    )
                                                  ) +
                                                  "\n                                        "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          payment_item.promo_details != null
                                            ? _c(
                                                "p",
                                                {
                                                  staticClass:
                                                    "text-lg text-red"
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                            " +
                                                      _vm._s(
                                                        payment_item.promo_details
                                                      ) +
                                                      "\n                                        "
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ])
                                      ]
                                    : [
                                        _c(
                                          "p",
                                          { staticClass: "font-bold text-4xl" },
                                          [
                                            _vm._v(
                                              "\n                                        Php\n                                        " +
                                                _vm._s(
                                                  _vm.numberWithCommas(
                                                    _vm.decimalPlaces(
                                                      payment_item.amount,
                                                      2
                                                    )
                                                  )
                                                ) +
                                                "\n                                    "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        payment_item.promo_details != null
                                          ? _c(
                                              "p",
                                              {
                                                staticClass: "text-lg text-red"
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                        " +
                                                    _vm._s(
                                                      payment_item.promo_details
                                                    ) +
                                                    "\n                                    "
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ]
                                ],
                                2
                              )
                            ]
                          )
                        ]
                      )
                    }),
                    0
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn-own btn-danger w-full",
                      attrs: {
                        disabled: !_vm.review_bundle_ids.includes(_vm.selected)
                      },
                      on: { click: _vm.redirectToRegister }
                    },
                    [
                      _vm._v(
                        "\n                    " +
                          _vm._s(_vm.payment.button) +
                          "\n                "
                      )
                    ]
                  )
                ]
              )
            ]
          : _vm._e(),
        _vm._v(" "),
        !_vm.isEmpty(_vm.podclass)
          ? [
              _c("p", { staticClass: "font-bold text-xl text-red mb-6" }, [
                _vm._v("PLE AMC Pod Class")
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "py-5 px-16 border-2 border-red-500 rounded-3xl mb-10"
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "\n                        grid grid-cols-1\n                        min-xl:grid-cols-2\n                        gap-x-5 gap-y-3\n                        mb-6\n                    "
                    },
                    _vm._l(_vm.podclass, function(payment_item) {
                      return _c("div", { key: "podclass-" + payment_item.id }, [
                        _c(
                          "p",
                          { staticClass: "text-red font-bold text-2xl mb-5" },
                          [
                            _vm._v(
                              "\n                            " +
                                _vm._s(payment_item.name) +
                                "\n                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            class: {
                              "border-2  rounded-3xl flex justify-center p-9 cursor-pointer transition-all duration-150": true,
                              "bg-blue-100 border-blue ring-4 ring-blue-400":
                                _vm.selected == payment_item.id,
                              "border-red-500": _vm.selected != payment_item.id
                            },
                            staticStyle: { "min-width": "200px" },
                            on: {
                              click: function() {
                                return _vm.onClick(payment_item.id)
                              }
                            }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "text-center" },
                              [
                                _c("p", {
                                  class: {
                                    "font-bold": true,
                                    "text-red": _vm.selected != payment_item.id,
                                    "text-blue": _vm.selected == payment_item.id
                                  }
                                }),
                                _vm._v(" "),
                                payment_item.pre_selling != null &&
                                _vm.stringToDate(payment_item.pre_selling) >=
                                  _vm.today
                                  ? [
                                      _c("div", [
                                        _c(
                                          "p",
                                          { staticClass: "font-bold text-4xl" },
                                          [
                                            _vm._v(
                                              "\n                                            Php\n                                            " +
                                                _vm._s(
                                                  _vm.numberWithCommas(
                                                    _vm.decimalPlaces(
                                                      payment_item.amount *
                                                        (payment_item.discount /
                                                          100),
                                                      2
                                                    )
                                                  )
                                                ) +
                                                "\n                                        "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        payment_item.promo_details != null
                                          ? _c(
                                              "p",
                                              {
                                                staticClass: "text-lg text-red"
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                            " +
                                                    _vm._s(
                                                      payment_item.promo_details
                                                    ) +
                                                    "\n                                        "
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ])
                                    ]
                                  : [
                                      _c(
                                        "p",
                                        { staticClass: "font-bold text-4xl" },
                                        [
                                          _vm._v(
                                            "\n                                        Php\n                                        " +
                                              _vm._s(
                                                _vm.numberWithCommas(
                                                  _vm.decimalPlaces(
                                                    payment_item.amount,
                                                    2
                                                  )
                                                )
                                              ) +
                                              "\n                                    "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      payment_item.promo_details != null
                                        ? _c(
                                            "p",
                                            { staticClass: "text-lg text-red" },
                                            [
                                              _vm._v(
                                                "\n                                        " +
                                                  _vm._s(
                                                    payment_item.promo_details
                                                  ) +
                                                  "\n                                    "
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ]
                              ],
                              2
                            )
                          ]
                        )
                      ])
                    }),
                    0
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn-own btn-danger w-full",
                      attrs: {
                        disabled: !_vm.podclass_ids.includes(_vm.selected)
                      },
                      on: { click: _vm.redirectToRegister }
                    },
                    [
                      _vm._v(
                        "\n                    " +
                          _vm._s(_vm.payment.button) +
                          "\n                "
                      )
                    ]
                  )
                ]
              )
            ]
          : _vm._e()
      ],
      2
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex justify-center" }, [
      _c("div", { staticClass: "mx-6 my-4 text-white" }, [
        _c("img", {
          staticClass: "lg:mb-4 ml-auto mr-auto",
          staticStyle: { "max-height": "100%" },
          attrs: { src: "/img/SUBJECTS.png", alt: "", srcset: "" }
        })
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);