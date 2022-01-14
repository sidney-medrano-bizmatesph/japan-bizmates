(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Place_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Place.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Place.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./resources/js/functions/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      place: {},
      photos: [],
      tips: [],
      today: moment__WEBPACK_IMPORTED_MODULE_0___default()().isoWeekday(),
      links: {
        facebook_id: "https://www.facebook.com/",
        twitter: "https://twitter.com/",
        instagram: "https://www.instagram.com/"
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    /**
     * get place details, photos and tips
     */
    axios.post("/get-place", {
      fsq_id: this.$route.params.fsq_id
    }).then(function (res) {
      _this.place = res.data.place_details;
      _this.photos = res.data.photos;
      _this.tips = res.data.tips;
    })["catch"](function (err) {
      (0,_functions__WEBPACK_IMPORTED_MODULE_1__.commonCatchBlock)(_this, err);
    });
  },
  methods: {
    moment: (moment__WEBPACK_IMPORTED_MODULE_0___default())
  }
});

/***/ }),

/***/ "./resources/js/pages/Place.vue":
/*!**************************************!*\
  !*** ./resources/js/pages/Place.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Place_vue_vue_type_template_id_0cb7c5ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Place.vue?vue&type=template&id=0cb7c5ce& */ "./resources/js/pages/Place.vue?vue&type=template&id=0cb7c5ce&");
/* harmony import */ var _Place_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Place.vue?vue&type=script&lang=js& */ "./resources/js/pages/Place.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Place_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Place_vue_vue_type_template_id_0cb7c5ce___WEBPACK_IMPORTED_MODULE_0__.render,
  _Place_vue_vue_type_template_id_0cb7c5ce___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Place.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Place.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/pages/Place.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Place_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Place.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Place.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Place_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/Place.vue?vue&type=template&id=0cb7c5ce&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/Place.vue?vue&type=template&id=0cb7c5ce& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Place_vue_vue_type_template_id_0cb7c5ce___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Place_vue_vue_type_template_id_0cb7c5ce___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Place_vue_vue_type_template_id_0cb7c5ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Place.vue?vue&type=template&id=0cb7c5ce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Place.vue?vue&type=template&id=0cb7c5ce&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Place.vue?vue&type=template&id=0cb7c5ce&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Place.vue?vue&type=template&id=0cb7c5ce& ***!
  \************************************************************************************************************************************************************************************************************/
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
    { staticClass: "section", staticStyle: { "padding-top": "74px" } },
    [
      _c("div", { staticClass: "bg-white rounded-lg mb-4" }, [
        _c("div", { staticClass: "breadcrumbs" }, [
          _c("ul", [
            _c(
              "li",
              [_c("router-link", { attrs: { to: "/" } }, [_vm._v("Home")])],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c(
                  "router-link",
                  {
                    attrs: {
                      to: {
                        path: "/places/" + _vm.$route.params.place,
                        query: _vm.$route.query
                      }
                    }
                  },
                  [
                    _vm._v(
                      _vm._s(
                        _vm.$route.params.place.charAt(0).toUpperCase() +
                          _vm.$route.params.place.slice(1)
                      )
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("li", [_vm._v(_vm._s(_vm.place.name))])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "p-4 bg-white mb-4 rounded-lg" }, [
        _c(
          "div",
          { staticClass: "mb-2" },
          [
            _c(
              "splide",
              {
                attrs: {
                  slides: _vm.photos,
                  options: {
                    classes: {
                      pagination: "splide__pagination hidden"
                    },
                    width: "100%",
                    perPage: 5,
                    autoWidth: true,
                    rewind: true,
                    gap: "50px",
                    padding: {
                      left: "75px",
                      right: "75px"
                    },
                    breakpoints: {
                      1500: { perPage: 4 },
                      1366: {
                        perPage: 3
                      },
                      768: {
                        perPage: 2
                      },
                      767: {
                        perPage: 1
                      }
                    }
                  }
                }
              },
              _vm._l(_vm.photos, function(photo, key) {
                return _c("splide-slide", { key: "photo-" + key }, [
                  _c("div", [
                    _c(
                      "a",
                      {
                        staticClass: "spotlight",
                        attrs: {
                          href: photo.prefix + "original" + photo.suffix
                        }
                      },
                      [
                        _c("img", {
                          attrs: {
                            src: photo.prefix + "300x300" + photo.suffix,
                            alt: "Photo of " + _vm.place.name + "."
                          }
                        })
                      ]
                    )
                  ])
                ])
              }),
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _vm.place.stats && _vm.place.stats.total_ratings
          ? _c("div", { staticClass: "flex flex-wrap content-center" }, [
              _c("h2", { staticClass: "my-2 mr-2" }, [
                _vm._v(_vm._s(_vm.place.name))
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "self-center m-0" }, [
                _c("span", { staticClass: "badge badge-success badge-lg" }, [
                  _c("i", { staticClass: "fas fa-star mr-3" }),
                  _vm._v(
                    " " +
                      _vm._s(_vm.place.rating) +
                      " /\n                    10\n                "
                  )
                ]),
                _vm._v(
                  "\n                / " +
                    _vm._s(_vm.place.stats.total_ratings) +
                    " ratings\n            "
                )
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _c(
          "p",
          _vm._l(_vm.place.categories, function(category, key) {
            return _c("span", { key: "category-key-" + key }, [
              _vm._v(
                "\n                " +
                  _vm._s(category.name) +
                  _vm._s(key + 1 != _vm.place.categories.length ? "," : "") +
                  "\n            "
              )
            ])
          }),
          0
        ),
        _vm._v(" "),
        _vm.place.location && _vm.place.location.address
          ? _c("p", { staticClass: "mb-0" }, [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.place.location.address) +
                  ", " +
                  _vm._s(_vm.place.location.region) +
                  "\n        "
              )
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "grid grid-cols-5 gap-4" }, [
        _c(
          "div",
          {
            staticClass:
              "\n                col-span-1\n                md:col-span-5\n                min-md:col-span-2\n                min-lg:col-span-1\n            "
          },
          [
            _c(
              "div",
              { staticClass: "p-4 bg-white mb-4 rounded-lg" },
              [
                _vm.place.hours && _vm.place.hours.open_now
                  ? _c(
                      "p",
                      {
                        class: {
                          "font-bold": true,
                          "text-green-500": _vm.place.hours.open_now,
                          "text-red-500": !_vm.place.hours.open_now
                        }
                      },
                      [
                        _vm._v(
                          "\n                    " +
                            _vm._s(
                              _vm.place.hours.open_now ? "Open now" : "Closed"
                            ) +
                            "\n                "
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.place.hours &&
                _vm.place.hours.regular &&
                _vm.place.hours.regular.filter(function(res) {
                  return res.day == _vm.today
                }).length > 0
                  ? [
                      _c("p", { staticClass: "font-bold" }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.moment().format("dddd")) +
                            "\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "p",
                        [
                          _c("i", { staticClass: "fas fa-clock mr-2" }),
                          _vm._v(" "),
                          _vm._l(
                            _vm.place.hours.regular.filter(function(res) {
                              return res.day == _vm.today
                            }),
                            function(hour, key) {
                              return _c("span", { key: "hour-" + key }, [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(
                                      _vm
                                        .moment(
                                          hour.open.match(/.{1,2}/g).join(":"),
                                          "HH:mm"
                                        )
                                        .format("hh:mm a")
                                    ) +
                                    "\n                            -\n                            " +
                                    _vm._s(
                                      _vm
                                        .moment(
                                          hour.close.match(/.{1,2}/g).join(":"),
                                          "HH:mm"
                                        )
                                        .format("hh:mm a")
                                    ) +
                                    _vm._s(
                                      key + 1 !=
                                        _vm.place.hours.regular.filter(function(
                                          res
                                        ) {
                                          return res.day == _vm.today
                                        }).length
                                        ? ","
                                        : ""
                                    ) +
                                    "\n                        "
                                )
                              ])
                            }
                          )
                        ],
                        2
                      )
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _vm.place.tel != ""
                  ? [
                      _c("p", [
                        _c("i", { staticClass: "fas fa-phone mr-2" }),
                        _vm._v(_vm._s(_vm.place.tel))
                      ])
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _vm.place.website && _vm.place.website != ""
                  ? [
                      _c(
                        "a",
                        {
                          staticClass: "link no-underline",
                          attrs: { href: _vm.place.website, target: "_blank" }
                        },
                        [_vm._m(0)]
                      )
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _vm.place.social_media
                  ? _vm._l(Object.keys(_vm.place.social_media), function(
                      soc_med,
                      key
                    ) {
                      return _c(
                        "a",
                        {
                          key: "soc-med-" + key,
                          staticClass: "link no-underline",
                          attrs: {
                            href:
                              "" +
                              _vm.links[soc_med] +
                              _vm.place.social_media[soc_med],
                            target: "_blank"
                          }
                        },
                        [
                          _c("p", [
                            _c("i", {
                              class:
                                "fab fa-" +
                                (soc_med == "facebook_id"
                                  ? "facebook"
                                  : soc_med) +
                                " mr-2"
                            }),
                            _vm._v(
                              _vm._s(_vm.place.social_media[soc_med]) +
                                "\n                        "
                            )
                          ])
                        ]
                      )
                    })
                  : _vm._e()
              ],
              2
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "\n                p-4\n                bg-white\n                mb-4\n                rounded-lg\n                md:col-span-5\n                min-md:col-span-3\n                min-lg:col-span-4\n                col-span-4\n            "
          },
          [
            _vm.place.stats && _vm.place.stats.total_tips
              ? _c("h3", { staticClass: "my-2" }, [
                  _vm._v(
                    "\n                Tips - " +
                      _vm._s(_vm.tips.length) +
                      "/" +
                      _vm._s(_vm.place.stats.total_tips) +
                      "\n            "
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm._l(_vm.tips, function(tip, key) {
              return _c(
                "div",
                {
                  key: "tip-" + key,
                  staticStyle: { "border-bottom": "2px solid #c5c5c5" }
                },
                [
                  _c("p", [
                    _vm._v(
                      "\n                    " +
                        _vm._s(
                          _vm.moment(tip.created_at).format("MMMM DD, YYYY")
                        ) +
                        "\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      staticClass: "text-lg pl-4 py-2",
                      staticStyle: {
                        "border-left": "2px solid rgb(59, 130, 246)"
                      }
                    },
                    [
                      _vm._v(
                        "\n                    " +
                          _vm._s(tip.text) +
                          "\n                "
                      )
                    ]
                  )
                ]
              )
            })
          ],
          2
        )
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("i", { staticClass: "fas fa-globe mr-2" }),
      _vm._v(
        "Official\n                            Website\n                        "
      )
    ])
  }
]
render._withStripped = true



/***/ })

}]);