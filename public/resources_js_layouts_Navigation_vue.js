(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_layouts_Navigation_vue"],{

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/ScriptLoader.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/ScriptLoader.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScriptLoader": () => (/* binding */ ScriptLoader)
/* harmony export */ });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/Utils.js");
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

var createState = function () {
    return {
        listeners: [],
        scriptId: (0,_Utils__WEBPACK_IMPORTED_MODULE_0__.uuid)('tiny-script'),
        scriptLoaded: false
    };
};
var CreateScriptLoader = function () {
    var state = createState();
    var injectScriptTag = function (scriptId, doc, url, callback) {
        var scriptTag = doc.createElement('script');
        scriptTag.referrerPolicy = 'origin';
        scriptTag.type = 'application/javascript';
        scriptTag.id = scriptId;
        scriptTag.src = url;
        var handler = function () {
            scriptTag.removeEventListener('load', handler);
            callback();
        };
        scriptTag.addEventListener('load', handler);
        if (doc.head) {
            doc.head.appendChild(scriptTag);
        }
    };
    var load = function (doc, url, callback) {
        if (state.scriptLoaded) {
            callback();
        }
        else {
            state.listeners.push(callback);
            if (!doc.getElementById(state.scriptId)) {
                injectScriptTag(state.scriptId, doc, url, function () {
                    state.listeners.forEach(function (fn) { return fn(); });
                    state.scriptLoaded = true;
                });
            }
        }
    };
    // Only to be used by tests.
    var reinitialize = function () {
        state = createState();
    };
    return {
        load: load,
        reinitialize: reinitialize
    };
};
var ScriptLoader = CreateScriptLoader();



/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/TinyMCE.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/TinyMCE.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTinymce": () => (/* binding */ getTinymce)
/* harmony export */ });
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var getGlobal = function () { return (typeof window !== 'undefined' ? window : __webpack_require__.g); };
var getTinymce = function () {
    var global = getGlobal();
    return global && global.tinymce ? global.tinymce : null;
};



/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/Utils.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/Utils.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bindHandlers": () => (/* binding */ bindHandlers),
/* harmony export */   "bindModelHandlers": () => (/* binding */ bindModelHandlers),
/* harmony export */   "initEditor": () => (/* binding */ initEditor),
/* harmony export */   "isValidKey": () => (/* binding */ isValidKey),
/* harmony export */   "uuid": () => (/* binding */ uuid),
/* harmony export */   "isTextarea": () => (/* binding */ isTextarea),
/* harmony export */   "mergePlugins": () => (/* binding */ mergePlugins),
/* harmony export */   "isNullOrUndefined": () => (/* binding */ isNullOrUndefined)
/* harmony export */ });
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var validEvents = [
    'onActivate',
    'onAddUndo',
    'onBeforeAddUndo',
    'onBeforeExecCommand',
    'onBeforeGetContent',
    'onBeforeRenderUI',
    'onBeforeSetContent',
    'onBeforePaste',
    'onBlur',
    'onChange',
    'onClearUndos',
    'onClick',
    'onContextMenu',
    'onCopy',
    'onCut',
    'onDblclick',
    'onDeactivate',
    'onDirty',
    'onDrag',
    'onDragDrop',
    'onDragEnd',
    'onDragGesture',
    'onDragOver',
    'onDrop',
    'onExecCommand',
    'onFocus',
    'onFocusIn',
    'onFocusOut',
    'onGetContent',
    'onHide',
    'onInit',
    'onKeyDown',
    'onKeyPress',
    'onKeyUp',
    'onLoadContent',
    'onMouseDown',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onNodeChange',
    'onObjectResizeStart',
    'onObjectResized',
    'onObjectSelected',
    'onPaste',
    'onPostProcess',
    'onPostRender',
    'onPreProcess',
    'onProgressState',
    'onRedo',
    'onRemove',
    'onReset',
    'onSaveContent',
    'onSelectionChange',
    'onSetAttrib',
    'onSetContent',
    'onShow',
    'onSubmit',
    'onUndo',
    'onVisualAid'
];
var isValidKey = function (key) { return validEvents.map(function (event) { return event.toLowerCase(); }).indexOf(key.toLowerCase()) !== -1; };
var bindHandlers = function (initEvent, listeners, editor) {
    Object.keys(listeners)
        .filter(isValidKey)
        .forEach(function (key) {
        var handler = listeners[key];
        if (typeof handler === 'function') {
            if (key === 'onInit') {
                handler(initEvent, editor);
            }
            else {
                editor.on(key.substring(2), function (e) { return handler(e, editor); });
            }
        }
    });
};
var bindModelHandlers = function (ctx, editor) {
    var modelEvents = ctx.$props.modelEvents ? ctx.$props.modelEvents : null;
    var normalizedEvents = Array.isArray(modelEvents) ? modelEvents.join(' ') : modelEvents;
    editor.on(normalizedEvents ? normalizedEvents : 'change input undo redo', function () {
        ctx.$emit('input', editor.getContent({ format: ctx.$props.outputFormat }));
    });
};
var initEditor = function (initEvent, ctx, editor) {
    var value = ctx.$props.value ? ctx.$props.value : '';
    var initialValue = ctx.$props.initialValue ? ctx.$props.initialValue : '';
    editor.setContent(value || (ctx.initialized ? ctx.cache : initialValue));
    // Always bind the value listener in case users use :value instead of v-model
    ctx.$watch('value', function (val, prevVal) {
        if (editor && typeof val === 'string' && val !== prevVal && val !== editor.getContent({ format: ctx.$props.outputFormat })) {
            editor.setContent(val);
        }
    });
    // checks if the v-model shorthand is used (which sets an v-on:input listener) and then binds either
    // specified the events or defaults to "change keyup" event and emits the editor content on that event
    if (ctx.$listeners.input) {
        bindModelHandlers(ctx, editor);
    }
    bindHandlers(initEvent, ctx.$listeners, editor);
    ctx.initialized = true;
};
var unique = 0;
var uuid = function (prefix) {
    var time = Date.now();
    var random = Math.floor(Math.random() * 1000000000);
    unique++;
    return prefix + '_' + random + unique + String(time);
};
var isTextarea = function (element) {
    return element !== null && element.tagName.toLowerCase() === 'textarea';
};
var normalizePluginArray = function (plugins) {
    if (typeof plugins === 'undefined' || plugins === '') {
        return [];
    }
    return Array.isArray(plugins) ? plugins : plugins.split(' ');
};
var mergePlugins = function (initPlugins, inputPlugins) {
    return normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins));
};
var isNullOrUndefined = function (value) { return value === null || value === undefined; };



/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/Editor.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/Editor.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Editor": () => (/* binding */ Editor)
/* harmony export */ });
/* harmony import */ var _ScriptLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ScriptLoader */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/ScriptLoader.js");
/* harmony import */ var _TinyMCE__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TinyMCE */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/TinyMCE.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/Utils.js");
/* harmony import */ var _EditorPropTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditorPropTypes */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/EditorPropTypes.js");
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};




var renderInline = function (h, id, tagName) {
    return h(tagName ? tagName : 'div', {
        attrs: { id: id }
    });
};
var renderIframe = function (h, id) {
    return h('textarea', {
        attrs: { id: id },
        style: { visibility: 'hidden' }
    });
};
var initialise = function (ctx) { return function () {
    var finalInit = __assign(__assign({}, ctx.$props.init), { readonly: ctx.$props.disabled, selector: "#" + ctx.elementId, plugins: (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.mergePlugins)(ctx.$props.init && ctx.$props.init.plugins, ctx.$props.plugins), toolbar: ctx.$props.toolbar || (ctx.$props.init && ctx.$props.init.toolbar), inline: ctx.inlineEditor, setup: function (editor) {
            ctx.editor = editor;
            editor.on('init', function (e) { return (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.initEditor)(e, ctx, editor); });
            if (ctx.$props.init && typeof ctx.$props.init.setup === 'function') {
                ctx.$props.init.setup(editor);
            }
        } });
    if ((0,_Utils__WEBPACK_IMPORTED_MODULE_2__.isTextarea)(ctx.element)) {
        ctx.element.style.visibility = '';
        ctx.element.style.display = '';
    }
    (0,_TinyMCE__WEBPACK_IMPORTED_MODULE_1__.getTinymce)().init(finalInit);
}; };
var Editor = {
    props: _EditorPropTypes__WEBPACK_IMPORTED_MODULE_3__.editorProps,
    created: function () {
        this.elementId = this.$props.id || (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.uuid)('tiny-vue');
        this.inlineEditor = (this.$props.init && this.$props.init.inline) || this.$props.inline;
        this.initialized = false;
    },
    watch: {
        disabled: function () {
            this.editor.setMode(this.disabled ? 'readonly' : 'design');
        }
    },
    mounted: function () {
        this.element = this.$el;
        if ((0,_TinyMCE__WEBPACK_IMPORTED_MODULE_1__.getTinymce)() !== null) {
            initialise(this)();
        }
        else if (this.element && this.element.ownerDocument) {
            var channel = this.$props.cloudChannel ? this.$props.cloudChannel : '5';
            var apiKey = this.$props.apiKey ? this.$props.apiKey : 'no-api-key';
            var scriptSrc = (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(this.$props.tinymceScriptSrc) ?
                "https://cdn.tiny.cloud/1/" + apiKey + "/tinymce/" + channel + "/tinymce.min.js" :
                this.$props.tinymceScriptSrc;
            _ScriptLoader__WEBPACK_IMPORTED_MODULE_0__.ScriptLoader.load(this.element.ownerDocument, scriptSrc, initialise(this));
        }
    },
    beforeDestroy: function () {
        if ((0,_TinyMCE__WEBPACK_IMPORTED_MODULE_1__.getTinymce)() !== null) {
            (0,_TinyMCE__WEBPACK_IMPORTED_MODULE_1__.getTinymce)().remove(this.editor);
        }
    },
    deactivated: function () {
        var _a;
        if (!this.inlineEditor) {
            this.cache = this.editor.getContent();
            (_a = (0,_TinyMCE__WEBPACK_IMPORTED_MODULE_1__.getTinymce)()) === null || _a === void 0 ? void 0 : _a.remove(this.editor);
        }
    },
    activated: function () {
        if (!this.inlineEditor && this.initialized) {
            initialise(this)();
        }
    },
    render: function (h) {
        return this.inlineEditor ? renderInline(h, this.elementId, this.$props.tagName) : renderIframe(h, this.elementId);
    }
};


/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/EditorPropTypes.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/EditorPropTypes.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editorProps": () => (/* binding */ editorProps)
/* harmony export */ });
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var editorProps = {
    apiKey: String,
    cloudChannel: String,
    id: String,
    init: Object,
    initialValue: String,
    inline: Boolean,
    modelEvents: [String, Array],
    plugins: [String, Array],
    tagName: String,
    toolbar: [String, Array],
    value: String,
    disabled: Boolean,
    tinymceScriptSrc: String,
    outputFormat: {
        type: String,
        validator: function (prop) { return prop === 'html' || prop === 'text'; }
    },
};


/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Editor */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/Editor.js");
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_components_Editor__WEBPACK_IMPORTED_MODULE_0__.Editor);


/***/ }),

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
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions */ "./resources/js/functions/index.js");
/* harmony import */ var _routes_guest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes/guest */ "./resources/js/routes/guest.js");
/* harmony import */ var _routes_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes/auth */ "./resources/js/routes/auth.js");
/* harmony import */ var _routes_loggedIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes/loggedIn */ "./resources/js/routes/loggedIn.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");
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





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      isOpen: false,
      guestRoutes: _routes_guest__WEBPACK_IMPORTED_MODULE_1__.default,
      hostname: window.location.hostname,
      launched: true
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapState)(["auth", "general"])),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapActions)(["logoutUser"])), {}, {
    isEmpty: _functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty,
    drawer: function drawer() {
      this.isOpen = !this.isOpen;
    }
  }),
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
  components: {
    Footer: function Footer() {
      return __webpack_require__.e(/*! import() */ "resources_js_layouts_Footer_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./Footer.vue */ "./resources/js/layouts/Footer.vue"));
    }
  }
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/About.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/About.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
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


var fields = {
  title: {
    type: "tiny",
    name: "title",
    labelText: "Title",
    placeholder: "Title",
    wrapperClass: "mb-2 mr-2",
    validation: ["required"]
  },
  content: {
    type: "tiny",
    name: "content",
    labelText: "Content",
    placeholder: "Content",
    wrapperClass: "mb-2 mr-2",
    validation: ["required"]
  },
  picture: {
    name: "picture",
    labelText: "File",
    accept: "image/*",
    type: "file",
    max_size: "50",
    //MB,
    multiple: false,
    validation: ["success"],
    sortable: false,
    filterable: false,
    hidden: true
  }
};
var field_values = {
  title: "",
  content: "",
  picture: []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return _objectSpread(_objectSpread({
      successes: {},
      errors: {},
      that: this,
      submitting: false,
      fields: fields
    }, field_values), {}, {
      current_picture: ""
    });
  },
  computed: {
    preview: function preview() {
      return this.picture.length > 0 ? URL.createObjectURL(file) : "";
    }
  },
  mounted: function mounted() {
    this.getter();
  },
  methods: {
    isEmpty: _functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty,
    getter: function getter() {
      var _this = this;

      axios.post("/about-initialize").then(function (res) {
        _this.title = res.data.title;
        _this.content = res.data.content;
        _this.current_picture = res.data.picture;
      })["catch"](function (err) {
        (0,_functions__WEBPACK_IMPORTED_MODULE_0__.commonCatchBlock)(_this, err);
      });
    },
    onSubmit: function onSubmit() {
      var _this2 = this;

      if ((0,_functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty)((0,_functions_validator__WEBPACK_IMPORTED_MODULE_1__.validateAll)(fields, this))) {
        var data = new FormData();
        if (this.picture.length > 0) data.append("picture", this.picture[0]);
        data.append("title", this.title);
        data.append("content", this.content);
        this.submitting = true;
        var config = {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        };
        axios.post("/about-cms", data, config).then(function (res) {
          _this2.submitting = false;
          (0,_functions__WEBPACK_IMPORTED_MODULE_0__.toast)(res.data.status, res.data.message);

          if (res.data.status == "success") {
            _this2.getter();

            _this2.picture = [];
          }
        })["catch"](function (err) {
          _this2.submitting = false;
          (0,_functions__WEBPACK_IMPORTED_MODULE_0__.commonCatchBlock)(_this2, err);
        });
      }
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
    CustomFileInput: function CustomFileInput() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_CustomFileInput_vue-_6e000").then(__webpack_require__.bind(__webpack_require__, /*! ../components/CustomFileInput */ "./resources/js/components/CustomFileInput.vue"));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/ContentPartner.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/ContentPartner.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
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


var fields = {
  title: {
    type: "tiny",
    name: "title",
    labelText: "Title",
    placeholder: "Title",
    wrapperClass: "mb-2 mr-2 inline-block",
    validation: ["required"]
  },
  description: {
    type: "tiny",
    name: "description",
    labelText: "Description",
    placeholder: "Description",
    wrapperClass: "mb-2 mr-2 inline-block",
    validation: ["required"]
  }
};
var field_values = {
  title: "",
  description: ""
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return _objectSpread({
      successes: {},
      errors: {},
      that: this,
      submitting: false,
      fields: fields
    }, field_values);
  },
  computed: {},
  mounted: function mounted() {
    this.getter();
  },
  methods: {
    isEmpty: _functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty,
    getter: function getter() {
      var _this = this;

      axios.post("/content-partner-initialize").then(function (res) {
        _this.title = res.data.title;
        _this.description = res.data.description;
      })["catch"](function (err) {
        (0,_functions__WEBPACK_IMPORTED_MODULE_0__.commonCatchBlock)(_this, err);
      });
    },
    onSubmit: function onSubmit() {
      var _this2 = this;

      if ((0,_functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty)((0,_functions_validator__WEBPACK_IMPORTED_MODULE_1__.validateAll)(fields, this))) {
        var data = {
          title: this.title,
          description: this.description
        };
        this.submitting = true;
        axios.post("/content-partner-cms", data).then(function (res) {
          _this2.submitting = false;
          (0,_functions__WEBPACK_IMPORTED_MODULE_0__.toast)(res.data.status, res.data.message); // if (res.data.status == "success") {
          //     this.getter();
          // }
        })["catch"](function (err) {
          _this2.submitting = false;
          (0,_functions__WEBPACK_IMPORTED_MODULE_0__.commonCatchBlock)(_this2, err);
        });
      }
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
    ContentPartnerItems: function ContentPartnerItems() {
      return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./ContentPartnerItems.vue */ "./resources/js/webCMS/ContentPartnerItems.vue"));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/Footer.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/Footer.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
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


var fields = {
  emails: {
    type: "text",
    name: "emails",
    labelText: "Emails",
    placeholder: "Emails",
    wrapperClass: "mb-2 mr-2",
    validation: ["required"],
    helperText: "Separate with comma (,)"
  },
  contact_numbers: {
    type: "text",
    name: "contact_numbers",
    labelText: "Contact numbers",
    placeholder: "Contact numbers",
    wrapperClass: "mb-2 mr-2",
    validation: ["required"],
    helperText: "Separate with comma (,)"
  },
  logo: {
    name: "logo",
    labelText: "Logo",
    accept: "image/*",
    type: "file",
    max_size: "50",
    //MB,
    multiple: false,
    validation: ["success"],
    sortable: false,
    filterable: false,
    hidden: true
  },
  facebook: {
    type: "text",
    name: "facebook",
    labelText: "Facebook",
    placeholder: "Facebook",
    wrapperClass: "mb-2 mr-2",
    validation: ["required"]
  },
  instagram: {
    type: "text",
    name: "instagram",
    labelText: "Instagram",
    placeholder: "Instagram",
    wrapperClass: "mb-2 mr-2",
    validation: ["required"]
  },
  twitter: {
    type: "text",
    name: "twitter",
    labelText: "Twitter",
    placeholder: "Twitter",
    wrapperClass: "mb-2 mr-2",
    validation: ["required"]
  }
};
var field_values = {
  emails: "",
  contact_numbers: "",
  logo: [],
  facebook: "",
  instagram: "",
  twitter: ""
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return _objectSpread(_objectSpread({
      successes: {},
      errors: {},
      that: this,
      submitting: false,
      fields: fields
    }, field_values), {}, {
      current_logo: ""
    });
  },
  computed: {
    preview: function preview() {
      return this.logo.length > 0 ? URL.createObjectURL(file) : "";
    }
  },
  mounted: function mounted() {
    this.getter();
  },
  methods: {
    isEmpty: _functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty,
    getter: function getter() {
      var _this = this;

      axios.post("/footer-initialize").then(function (res) {
        (0,_functions__WEBPACK_IMPORTED_MODULE_0__.formSetter)(field_values, fields, res.data, _this);
        _this.current_logo = res.data.logo;
      })["catch"](function (err) {
        (0,_functions__WEBPACK_IMPORTED_MODULE_0__.commonCatchBlock)(_this, err);
      });
    },
    onSubmit: function onSubmit() {
      var _this2 = this;

      if ((0,_functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty)((0,_functions_validator__WEBPACK_IMPORTED_MODULE_1__.validateAll)(fields, this))) {
        var data = new FormData();
        if (this.logo.length > 0) data.append("logo", this.logo[0]);
        data.append("emails", this.emails);
        data.append("contact_numbers", this.contact_numbers);
        data.append("facebook", this.facebook);
        data.append("twitter", this.twitter);
        data.append("instagram", this.instagram);
        this.submitting = true;
        var config = {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        };
        axios.post("/footer-cms", data, config).then(function (res) {
          _this2.submitting = false;
          (0,_functions__WEBPACK_IMPORTED_MODULE_0__.toast)(res.data.status, res.data.message);

          if (res.data.status == "success") {
            _this2.getter();

            _this2.logo = [];
          }
        })["catch"](function (err) {
          _this2.submitting = false;
          (0,_functions__WEBPACK_IMPORTED_MODULE_0__.commonCatchBlock)(_this2, err);
        });
      }
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
    CustomFileInput: function CustomFileInput() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_CustomFileInput_vue-_6e000").then(__webpack_require__.bind(__webpack_require__, /*! ../components/CustomFileInput */ "./resources/js/components/CustomFileInput.vue"));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/FutureOfferings.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/FutureOfferings.vue?vue&type=script&lang=js& ***!
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


var fields = {
  title: {
    type: "tiny",
    name: "title",
    labelText: "Title",
    placeholder: "Title",
    wrapperClass: "mb-2 mr-2",
    validation: ["required"]
  },
  content: {
    type: "tiny",
    name: "content",
    labelText: "Content",
    placeholder: "Content",
    wrapperClass: "mb-2 mr-2",
    validation: ["required"]
  },
  picture: {
    name: "picture",
    labelText: "File",
    accept: "image/*",
    type: "file",
    max_size: "50",
    //MB,
    multiple: false,
    validation: ["success"],
    sortable: false,
    filterable: false,
    hidden: true
  }
};
var field_values = {
  title: "",
  content: "",
  picture: []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return _objectSpread(_objectSpread({
      successes: {},
      errors: {},
      that: this,
      submitting: false,
      fields: fields
    }, field_values), {}, {
      current_picture: "",
      defaultInit: _functions__WEBPACK_IMPORTED_MODULE_0__.defaultInit
    });
  },
  computed: {
    csrf_token: function csrf_token() {
      return $("meta[name='csrf-token']").attr("content");
    },
    preview: function preview() {
      return this.picture.length > 0 ? URL.createObjectURL(file) : "";
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.getter();
    axios.post("/delete-unused-images").then(function (res) {
      (0,_functions__WEBPACK_IMPORTED_MODULE_0__.toast)(res.data.status, res.data.message);
    })["catch"](function (err) {
      (0,_functions__WEBPACK_IMPORTED_MODULE_0__.commonCatchBlock)(_this, err);
    });
  },
  methods: {
    toast: _functions__WEBPACK_IMPORTED_MODULE_0__.toast,
    isEmpty: _functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty,
    getter: function getter() {
      var _this2 = this;

      axios.post("/future-offerings-initialize").then(function (res) {
        _this2.title = res.data.title;
        _this2.content = res.data.content;
        _this2.current_picture = res.data.picture;
      })["catch"](function (err) {
        (0,_functions__WEBPACK_IMPORTED_MODULE_0__.commonCatchBlock)(_this2, err);
      });
    },
    onSubmit: function onSubmit() {
      var _this3 = this;

      if ((0,_functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty)((0,_functions_validator__WEBPACK_IMPORTED_MODULE_1__.validateAll)(fields, this))) {
        var data = new FormData();
        if (this.picture.length > 0) data.append("picture", this.picture[0]);
        data.append("title", this.title);
        data.append("content", this.content);
        this.submitting = true;
        var config = {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        };
        axios.post("/future-offerings-cms", data, config).then(function (res) {
          _this3.submitting = false;
          (0,_functions__WEBPACK_IMPORTED_MODULE_0__.toast)(res.data.status, res.data.message);

          if (res.data.status == "success") {
            _this3.getter();

            _this3.picture = [];
          }
        })["catch"](function (err) {
          _this3.submitting = false;
          (0,_functions__WEBPACK_IMPORTED_MODULE_0__.commonCatchBlock)(_this3, err);
        });
      }
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
    CustomFileInput: function CustomFileInput() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_CustomFileInput_vue-_6e000").then(__webpack_require__.bind(__webpack_require__, /*! ../components/CustomFileInput */ "./resources/js/components/CustomFileInput.vue"));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/General.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/General.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
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


var fields = {
  round_logo: {
    name: "round_logo",
    labelText: "Round logo",
    accept: "image/*",
    type: "file",
    max_size: "50",
    //MB,
    multiple: false,
    validation: ["success"],
    sortable: false,
    filterable: false,
    hidden: true
  },
  logo: {
    name: "logo",
    labelText: "Logo",
    accept: "image/*",
    type: "file",
    max_size: "50",
    //MB,
    multiple: false,
    validation: ["success"],
    sortable: false,
    filterable: false,
    hidden: true
  }
};
var field_values = {
  round_logo: [],
  logo: []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return _objectSpread(_objectSpread({
      successes: {},
      errors: {},
      that: this,
      submitting: false,
      fields: fields
    }, field_values), {}, {
      round_logo_preview: "",
      logo_preview: ""
    });
  },
  computed: {// current_round_logo_preview() {
    //     return this.round_logo.length > 0 ? URL.createObjectURL(file) : "";
    // },
    // current_logo_preview() {
    //     return this.logo.length > 0 ? URL.createObjectURL(file) : "";
    // },
  },
  mounted: function mounted() {
    this.getter();
  },
  methods: {
    isEmpty: _functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty,
    getter: function getter() {
      var _this = this;

      axios.post("/general-initialize").then(function (res) {
        _this.logo_preview = res.data.logo;
        _this.round_logo_preview = res.data.round_logo;
      })["catch"](function (err) {
        (0,_functions__WEBPACK_IMPORTED_MODULE_0__.commonCatchBlock)(_this, err);
      });
    },
    onSubmit: function onSubmit() {
      var _this2 = this;

      if ((0,_functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty)((0,_functions_validator__WEBPACK_IMPORTED_MODULE_1__.validateAll)(fields, this))) {
        var data = new FormData();
        if (this.round_logo.length > 0) data.append("round_logo", this.round_logo[0]);

        if (this.logo.length > 0) {
          data.append("logo", this.logo[0]);
        }

        this.submitting = true;
        var config = {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        };
        (0,_functions__WEBPACK_IMPORTED_MODULE_0__.loader)("Uploading");
        axios.post("/general-cms", data, config).then(function (res) {
          Swal.close();
          _this2.submitting = false;
          (0,_functions__WEBPACK_IMPORTED_MODULE_0__.toast)(res.data.status, res.data.message);

          if (res.data.status == "success") {
            _this2.getter();

            _this2.round_logo = [];
            _this2.logo = [];
          }
        })["catch"](function (err) {
          Swal.close();
          _this2.submitting = false;
          (0,_functions__WEBPACK_IMPORTED_MODULE_0__.commonCatchBlock)(_this2, err);
        });
      }
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
    CustomFileInput: function CustomFileInput() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_CustomFileInput_vue-_6e000").then(__webpack_require__.bind(__webpack_require__, /*! ../components/CustomFileInput */ "./resources/js/components/CustomFileInput.vue"));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/Home.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/Home.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions */ "./resources/js/functions/index.js");
/* harmony import */ var _functions_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/validator */ "./resources/js/functions/validator.js");
/* harmony import */ var _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tinymce/tinymce-vue */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js");
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



var fields = {
  title: {
    type: "tiny",
    name: "title",
    labelText: "Title",
    placeholder: "Title",
    wrapperClass: "mb-2 mr-2 inline-block",
    validation: ["required"]
  },
  subtitle: {
    type: "tiny",
    name: "subtitle",
    labelText: "Subtitle",
    placeholder: "Subtitle",
    wrapperClass: "mb-2 mr-2 inline-block",
    validation: ["required"]
  },
  heading: {
    type: "tiny",
    name: "heading",
    labelText: "Heading",
    placeholder: "Heading",
    wrapperClass: "mb-2 mr-2 inline-block",
    validation: ["required"]
  },
  description: {
    type: "tiny",
    name: "description",
    labelText: "Description",
    placeholder: "Description",
    wrapperClass: "mb-2 mr-2 inline-block",
    validation: ["required"]
  } // files: {
  //     name: "files",
  //     labelText: "File",
  //     wrapperClassName: "col-md-6",
  //     accept: "application/pdf",
  //     type: "file",
  //     max_size: "50", //MB,
  //     acceptedExtensions: [".pdf"],
  //     multiple: false,
  //     validation: ["required"],
  //     sortable: false,
  //     filterable: false,
  //     hidden: true,
  // },

};
var field_values = {
  title: "",
  subtitle: "",
  heading: "",
  description: "" // files: []

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return _objectSpread(_objectSpread({
      successes: {},
      errors: {},
      that: this,
      submitting: false,
      fields: fields
    }, field_values), {}, {
      cms: "home"
    });
  },
  updated: function updated() {},
  mounted: function mounted() {
    var _this = this;

    var cms = this.$route.query.cms;

    if (cms) {
      this.cms = cms;
    }

    axios.post("/home-initialize").then(function (res) {
      _this.title = res.data.title;
      _this.subtitle = res.data.subtitle;
      _this.heading = res.data.heading;
      _this.description = res.data.description;
    })["catch"](function (err) {
      (0,_functions__WEBPACK_IMPORTED_MODULE_0__.commonCatchBlock)(_this, err);
    });
  },
  methods: {
    isEmpty: _functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty,
    onSubmit: function onSubmit() {
      var _this2 = this;

      if ((0,_functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty)((0,_functions_validator__WEBPACK_IMPORTED_MODULE_1__.validateAll)(fields, this))) {
        var data = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.dataSetter)(field_values, this);
        this.submitting = true;
        axios.post("/home-cms", data).then(function (res) {
          _this2.submitting = false;
          (0,_functions__WEBPACK_IMPORTED_MODULE_0__.toast)(res.data.status, res.data.message);
        })["catch"](function (err) {
          _this2.submitting = false;
          (0,_functions__WEBPACK_IMPORTED_MODULE_0__.commonCatchBlock)(_this2, err);
        });
      }
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
    CustomFileInput: function CustomFileInput() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_CustomFileInput_vue-_6e000").then(__webpack_require__.bind(__webpack_require__, /*! ../components/CustomFileInput */ "./resources/js/components/CustomFileInput.vue"));
    },
    Features: function Features() {
      return __webpack_require__.e(/*! import() */ "resources_js_webCMS_Features_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./Features.vue */ "./resources/js/webCMS/Features.vue"));
    },
    Events: function Events() {
      return __webpack_require__.e(/*! import() */ "resources_js_webCMS_Events_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./Events.vue */ "./resources/js/webCMS/Events.vue"));
    },
    StudyGuide: function StudyGuide() {
      return __webpack_require__.e(/*! import() */ "resources_js_webCMS_StudyGuide_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./StudyGuide.vue */ "./resources/js/webCMS/StudyGuide.vue"));
    },
    Inspiration: function Inspiration() {
      return __webpack_require__.e(/*! import() */ "resources_js_webCMS_Inspiration_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./Inspiration.vue */ "./resources/js/webCMS/Inspiration.vue"));
    },
    Editor: _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_2__.default
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/Mission.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/Mission.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
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


var fields = {
  title: {
    type: "tiny",
    name: "title",
    labelText: "Title",
    placeholder: "Title",
    wrapperClass: "mb-2 mr-2",
    validation: ["required"]
  },
  content: {
    type: "tiny",
    name: "content",
    labelText: "Content",
    placeholder: "Content",
    wrapperClass: "mb-2 mr-2",
    validation: ["required"]
  },
  picture: {
    name: "picture",
    labelText: "File",
    accept: "image/*",
    type: "file",
    max_size: "50",
    //MB,
    multiple: false,
    validation: ["success"],
    sortable: false,
    filterable: false,
    hidden: true
  }
};
var field_values = {
  title: "",
  content: "",
  picture: []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return _objectSpread(_objectSpread({
      successes: {},
      errors: {},
      that: this,
      submitting: false,
      fields: fields
    }, field_values), {}, {
      current_picture: ""
    });
  },
  computed: {
    preview: function preview() {
      return this.picture.length > 0 ? URL.createObjectURL(file) : "";
    }
  },
  mounted: function mounted() {
    this.getter();
  },
  methods: {
    isEmpty: _functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty,
    getter: function getter() {
      var _this = this;

      axios.post("/mission-initialize").then(function (res) {
        _this.title = res.data.title;
        _this.content = res.data.content;
        _this.current_picture = res.data.picture;
      })["catch"](function (err) {
        (0,_functions__WEBPACK_IMPORTED_MODULE_0__.commonCatchBlock)(_this, err);
      });
    },
    onSubmit: function onSubmit() {
      var _this2 = this;

      if ((0,_functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty)((0,_functions_validator__WEBPACK_IMPORTED_MODULE_1__.validateAll)(fields, this))) {
        var data = new FormData();
        if (this.picture.length > 0) data.append("picture", this.picture[0]);
        data.append("title", this.title);
        data.append("content", this.content);
        this.submitting = true;
        var config = {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        };
        axios.post("/mission-cms", data, config).then(function (res) {
          _this2.submitting = false;
          (0,_functions__WEBPACK_IMPORTED_MODULE_0__.toast)(res.data.status, res.data.message);

          if (res.data.status == "success") {
            _this2.getter();

            _this2.picture = [];
          }
        })["catch"](function (err) {
          _this2.submitting = false;
          (0,_functions__WEBPACK_IMPORTED_MODULE_0__.commonCatchBlock)(_this2, err);
        });
      }
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
    CustomFileInput: function CustomFileInput() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_CustomFileInput_vue-_6e000").then(__webpack_require__.bind(__webpack_require__, /*! ../components/CustomFileInput */ "./resources/js/components/CustomFileInput.vue"));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/OurTeam.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/OurTeam.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
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


var fields = {
  title: {
    type: "tiny",
    name: "title",
    labelText: "Title",
    placeholder: "Title",
    wrapperClass: "mb-2 mr-2 inline-block",
    validation: ["required"]
  },
  description: {
    type: "tiny",
    name: "description",
    labelText: "Description",
    placeholder: "Description",
    wrapperClass: "mb-2 mr-2 inline-block",
    validation: ["required"]
  }
};
var field_values = {
  title: "",
  description: ""
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return _objectSpread({
      successes: {},
      errors: {},
      that: this,
      submitting: false,
      fields: fields
    }, field_values);
  },
  computed: {},
  mounted: function mounted() {
    this.getter();
  },
  methods: {
    isEmpty: _functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty,
    getter: function getter() {
      var _this = this;

      axios.post("/our-team-initialize").then(function (res) {
        _this.title = res.data.title;
        _this.description = res.data.description;
      })["catch"](function (err) {
        (0,_functions__WEBPACK_IMPORTED_MODULE_0__.commonCatchBlock)(_this, err);
      });
    },
    onSubmit: function onSubmit() {
      var _this2 = this;

      if ((0,_functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty)((0,_functions_validator__WEBPACK_IMPORTED_MODULE_1__.validateAll)(fields, this))) {
        var data = {
          title: this.title,
          description: this.description
        };
        this.submitting = true;
        axios.post("/our-team-cms", data).then(function (res) {
          _this2.submitting = false;
          (0,_functions__WEBPACK_IMPORTED_MODULE_0__.toast)(res.data.status, res.data.message); // if (res.data.status == "success") {
          //     this.getter();
          // }
        })["catch"](function (err) {
          _this2.submitting = false;
          (0,_functions__WEBPACK_IMPORTED_MODULE_0__.commonCatchBlock)(_this2, err);
        });
      }
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
    OurTeamMembers: function OurTeamMembers() {
      return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./OurTeamMembers.vue */ "./resources/js/webCMS/OurTeamMembers.vue"));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/SubscriptionList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/SubscriptionList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
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


var fields = {
  title: {
    type: "tiny",
    name: "title",
    labelText: "Title",
    placeholder: "Title",
    wrapperClass: "mb-2 mr-2 inline-block",
    validation: ["required"]
  },
  bundle_header: {
    type: "tiny",
    name: "bundle_header",
    labelText: "Bundle header",
    placeholder: "Bundle header",
    wrapperClass: "mb-2 mr-2 inline-block",
    validation: ["required"]
  },
  one_year_header: {
    type: "tiny",
    name: "one_year_header",
    labelText: "One year header",
    placeholder: "One year header",
    wrapperClass: "mb-2 mr-2 inline-block",
    validation: ["required"]
  },
  avail_all_header: {
    type: "tiny",
    name: "avail_all_header",
    labelText: "Avail all header",
    placeholder: "Avail all header",
    wrapperClass: "mb-2 mr-2 inline-block",
    validation: ["required"]
  },
  button: {
    type: "text",
    name: "button",
    labelText: "Button text",
    placeholder: "Button text",
    wrapperClass: "mb-2 mr-2 inline-block",
    validation: ["required"]
  }
};
var field_values = {
  title: "",
  bundle_header: "",
  avail_all_header: "",
  one_year_header: "",
  button: ""
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return _objectSpread({
      successes: {},
      errors: {},
      that: this,
      submitting: false,
      fields: fields
    }, field_values);
  },
  computed: {},
  mounted: function mounted() {
    this.getter();
  },
  methods: {
    isEmpty: _functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty,
    getter: function getter() {
      var _this = this;

      axios.post("/subscription-list-initialize").then(function (res) {
        _this.button = res.data.button;
        _this.title = res.data.title;
        _this.bundle_header = res.data.bundle_header;
        _this.avail_all_header = res.data.avail_all_header;
        _this.one_year_header = res.data.one_year_header;
      })["catch"](function (err) {
        (0,_functions__WEBPACK_IMPORTED_MODULE_0__.commonCatchBlock)(_this, err);
      });
    },
    onSubmit: function onSubmit() {
      var _this2 = this;

      if ((0,_functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty)((0,_functions_validator__WEBPACK_IMPORTED_MODULE_1__.validateAll)(fields, this))) {
        var data = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.dataSetter)(field_values, this);
        this.submitting = true;
        axios.post("/subscription-list-cms", data).then(function (res) {
          _this2.submitting = false;
          (0,_functions__WEBPACK_IMPORTED_MODULE_0__.toast)(res.data.status, res.data.message); // if (res.data.status == "success") {
          //     this.getter();
          // }
        })["catch"](function (err) {
          _this2.submitting = false;
          (0,_functions__WEBPACK_IMPORTED_MODULE_0__.commonCatchBlock)(_this2, err);
        });
      }
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
    SubscriptionListItems: function SubscriptionListItems() {
      return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./SubscriptionListItems.vue */ "./resources/js/webCMS/SubscriptionListItems.vue"));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/Vision.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/Vision.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
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


var fields = {
  title: {
    type: "tiny",
    name: "title",
    labelText: "Title",
    placeholder: "Title",
    wrapperClass: "mb-2 mr-2",
    validation: ["required"]
  },
  content: {
    type: "tiny",
    name: "content",
    labelText: "Content",
    placeholder: "Content",
    wrapperClass: "mb-2 mr-2",
    validation: ["required"]
  },
  picture: {
    name: "picture",
    labelText: "File",
    accept: "image/*",
    type: "file",
    max_size: "50",
    //MB,
    multiple: false,
    validation: ["success"],
    sortable: false,
    filterable: false,
    hidden: true
  }
};
var field_values = {
  title: "",
  content: "",
  picture: []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return _objectSpread(_objectSpread({
      successes: {},
      errors: {},
      that: this,
      submitting: false,
      fields: fields
    }, field_values), {}, {
      current_picture: ""
    });
  },
  computed: {
    preview: function preview() {
      return this.picture.length > 0 ? URL.createObjectURL(file) : "";
    }
  },
  mounted: function mounted() {
    this.getter();
  },
  methods: {
    isEmpty: _functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty,
    getter: function getter() {
      var _this = this;

      axios.post("/vision-initialize").then(function (res) {
        _this.title = res.data.title;
        _this.content = res.data.content;
        _this.current_picture = res.data.picture;
      })["catch"](function (err) {
        (0,_functions__WEBPACK_IMPORTED_MODULE_0__.commonCatchBlock)(_this, err);
      });
    },
    onSubmit: function onSubmit() {
      var _this2 = this;

      if ((0,_functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty)((0,_functions_validator__WEBPACK_IMPORTED_MODULE_1__.validateAll)(fields, this))) {
        var data = new FormData();
        if (this.picture.length > 0) data.append("picture", this.picture[0]);
        data.append("title", this.title);
        data.append("content", this.content);
        this.submitting = true;
        var config = {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        };
        axios.post("/vision-cms", data, config).then(function (res) {
          _this2.submitting = false;
          (0,_functions__WEBPACK_IMPORTED_MODULE_0__.toast)(res.data.status, res.data.message);

          if (res.data.status == "success") {
            _this2.getter();

            _this2.picture = [];
          }
        })["catch"](function (err) {
          _this2.submitting = false;
          (0,_functions__WEBPACK_IMPORTED_MODULE_0__.commonCatchBlock)(_this2, err);
        });
      }
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
    CustomFileInput: function CustomFileInput() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_CustomFileInput_vue-_6e000").then(__webpack_require__.bind(__webpack_require__, /*! ../components/CustomFileInput */ "./resources/js/components/CustomFileInput.vue"));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/Welcome.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/Welcome.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
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


var fields = {
  content: {
    type: "tiny",
    name: "content",
    labelText: "Content",
    placeholder: "Content",
    wrapperClass: "mb-2 mr-2 inline-block",
    validation: ["required"]
  },
  picture: {
    name: "picture",
    labelText: "File",
    accept: "image/*",
    type: "file",
    max_size: "50",
    //MB,
    multiple: false,
    validation: ["success"],
    sortable: false,
    filterable: false,
    hidden: true
  }
};
var field_values = {
  content: "",
  picture: []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return _objectSpread(_objectSpread({
      successes: {},
      errors: {},
      that: this,
      submitting: false,
      fields: fields
    }, field_values), {}, {
      current_picture: ""
    });
  },
  computed: {
    preview: function preview() {
      return this.picture.length > 0 ? URL.createObjectURL(file) : "";
    }
  },
  mounted: function mounted() {
    this.getter();
  },
  methods: {
    isEmpty: _functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty,
    getter: function getter() {
      var _this = this;

      axios.post("/welcome-initialize").then(function (res) {
        _this.content = res.data.content;
        _this.current_picture = res.data.picture;
      })["catch"](function (err) {
        (0,_functions__WEBPACK_IMPORTED_MODULE_0__.commonCatchBlock)(_this, err);
      });
    },
    onSubmit: function onSubmit() {
      var _this2 = this;

      if ((0,_functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty)((0,_functions_validator__WEBPACK_IMPORTED_MODULE_1__.validateAll)(fields, this))) {
        var data = new FormData();
        if (this.picture.length > 0) data.append("picture", this.picture[0]);
        data.append("content", this.content);
        this.submitting = true;
        var config = {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        };
        axios.post("/welcome-cms", data, config).then(function (res) {
          _this2.submitting = false;
          (0,_functions__WEBPACK_IMPORTED_MODULE_0__.toast)(res.data.status, res.data.message);

          if (res.data.status == "success") {
            _this2.getter();

            _this2.picture = [];
          }
        })["catch"](function (err) {
          _this2.submitting = false;
          (0,_functions__WEBPACK_IMPORTED_MODULE_0__.commonCatchBlock)(_this2, err);
        });
      }
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
    CustomFileInput: function CustomFileInput() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_CustomFileInput_vue-_6e000").then(__webpack_require__.bind(__webpack_require__, /*! ../components/CustomFileInput */ "./resources/js/components/CustomFileInput.vue"));
    }
  }
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
/* harmony import */ var _webCMS_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../webCMS/Home */ "./resources/js/webCMS/Home.vue");
/* harmony import */ var _webCMS_General__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webCMS/General */ "./resources/js/webCMS/General.vue");
/* harmony import */ var _webCMS_Welcome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webCMS/Welcome */ "./resources/js/webCMS/Welcome.vue");
/* harmony import */ var _webCMS_Vision__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../webCMS/Vision */ "./resources/js/webCMS/Vision.vue");
/* harmony import */ var _webCMS_Mission__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../webCMS/Mission */ "./resources/js/webCMS/Mission.vue");
/* harmony import */ var _webCMS_About__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../webCMS/About */ "./resources/js/webCMS/About.vue");
/* harmony import */ var _webCMS_FutureOfferings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../webCMS/FutureOfferings */ "./resources/js/webCMS/FutureOfferings.vue");
/* harmony import */ var _webCMS_ContentPartner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../webCMS/ContentPartner */ "./resources/js/webCMS/ContentPartner.vue");
/* harmony import */ var _webCMS_OurTeam__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../webCMS/OurTeam */ "./resources/js/webCMS/OurTeam.vue");
/* harmony import */ var _webCMS_SubscriptionList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../webCMS/SubscriptionList */ "./resources/js/webCMS/SubscriptionList.vue");
/* harmony import */ var _webCMS_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../webCMS/Footer */ "./resources/js/webCMS/Footer.vue");
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./website */ "./resources/js/routes/website.js");












/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  users: [2],
  path: "/cms/general",
  title: "General",
  meta: {
    title: "General - " + _website__WEBPACK_IMPORTED_MODULE_11__.default,
    topBar: "General",
    layout: "sidebar"
  },
  component: _webCMS_General__WEBPACK_IMPORTED_MODULE_1__.default,
  icon: 'las la-angle-double-right text-2xl'
}, {
  users: [2],
  path: "/cms/home",
  title: "Home",
  meta: {
    title: "Home - " + _website__WEBPACK_IMPORTED_MODULE_11__.default,
    topBar: "Home",
    layout: "sidebar"
  },
  component: _webCMS_Home__WEBPACK_IMPORTED_MODULE_0__.default,
  icon: 'las la-angle-double-right text-2xl'
}, {
  users: [2],
  path: "/cms/home/study-guide-videos/edit/:id",
  title: "Home",
  meta: {
    title: "Home - " + _website__WEBPACK_IMPORTED_MODULE_11__.default,
    topBar: "Home",
    layout: "sidebar"
  },
  component: _webCMS_Home__WEBPACK_IMPORTED_MODULE_0__.default,
  icon: 'las la-angle-double-right text-2xl',
  hidden: true
}, {
  users: [2],
  path: "/cms/home/inspiration-videos/edit/:id",
  title: "Home",
  meta: {
    title: "Home - " + _website__WEBPACK_IMPORTED_MODULE_11__.default,
    topBar: "Home",
    layout: "sidebar"
  },
  component: _webCMS_Home__WEBPACK_IMPORTED_MODULE_0__.default,
  icon: 'las la-angle-double-right text-2xl',
  hidden: true
}, {
  users: [2],
  path: "/cms/welcome",
  title: "Welcome",
  meta: {
    title: "Welcome - " + _website__WEBPACK_IMPORTED_MODULE_11__.default,
    topBar: "Welcome",
    layout: "sidebar"
  },
  component: _webCMS_Welcome__WEBPACK_IMPORTED_MODULE_2__.default,
  icon: 'las la-angle-double-right text-2xl'
}, {
  users: [2],
  path: "/cms/vision",
  title: "Vision",
  meta: {
    title: "Vision - " + _website__WEBPACK_IMPORTED_MODULE_11__.default,
    topBar: "Vision",
    layout: "sidebar"
  },
  component: _webCMS_Vision__WEBPACK_IMPORTED_MODULE_3__.default,
  icon: 'las la-angle-double-right text-2xl'
}, {
  users: [2],
  path: "/cms/mission",
  title: "Mission",
  meta: {
    title: "Mission - " + _website__WEBPACK_IMPORTED_MODULE_11__.default,
    topBar: "Mission",
    layout: "sidebar"
  },
  component: _webCMS_Mission__WEBPACK_IMPORTED_MODULE_4__.default,
  icon: 'las la-angle-double-right text-2xl'
}, {
  users: [2],
  path: "/cms/about",
  title: "About the program",
  meta: {
    title: "About the program - " + _website__WEBPACK_IMPORTED_MODULE_11__.default,
    topBar: "About the program",
    layout: "sidebar"
  },
  component: _webCMS_About__WEBPACK_IMPORTED_MODULE_5__.default,
  icon: 'las la-angle-double-right text-2xl'
}, {
  users: [2],
  path: "/cms/future-offerings",
  title: "Future offerings",
  meta: {
    title: "Future offerings - " + _website__WEBPACK_IMPORTED_MODULE_11__.default,
    topBar: "Future offerings",
    layout: "sidebar"
  },
  component: _webCMS_FutureOfferings__WEBPACK_IMPORTED_MODULE_6__.default,
  icon: 'las la-angle-double-right text-2xl'
}, {
  users: [2],
  path: "/cms/content-partners",
  title: "Content partners",
  meta: {
    title: "Content partners - " + _website__WEBPACK_IMPORTED_MODULE_11__.default,
    topBar: "Content partners",
    layout: "sidebar"
  },
  component: _webCMS_ContentPartner__WEBPACK_IMPORTED_MODULE_7__.default,
  icon: 'las la-angle-double-right text-2xl'
}, {
  users: [2],
  path: "/cms/content-partners/edit/:id",
  title: "Edit Content partners",
  meta: {
    title: "Edit Content partners - " + _website__WEBPACK_IMPORTED_MODULE_11__.default,
    topBar: "Edit Content partners",
    layout: "sidebar"
  },
  component: _webCMS_ContentPartner__WEBPACK_IMPORTED_MODULE_7__.default,
  icon: 'las la-angle-double-right text-2xl',
  hidden: true
}, {
  users: [2],
  path: "/cms/our-team",
  title: "Our Team",
  meta: {
    title: "Our Team - " + _website__WEBPACK_IMPORTED_MODULE_11__.default,
    topBar: "Our Team",
    layout: "sidebar"
  },
  component: _webCMS_OurTeam__WEBPACK_IMPORTED_MODULE_8__.default,
  icon: 'las la-angle-double-right text-2xl'
}, {
  users: [2],
  path: "/cms/our-team/edit/:id",
  title: "Edit our team",
  meta: {
    title: "Edit our team - " + _website__WEBPACK_IMPORTED_MODULE_11__.default,
    topBar: "Edit our team",
    layout: "sidebar"
  },
  component: _webCMS_OurTeam__WEBPACK_IMPORTED_MODULE_8__.default,
  icon: 'las la-angle-double-right text-2xl',
  hidden: true
}, {
  users: [2],
  path: "/cms/subscription-list",
  title: "Subscription list",
  meta: {
    title: "Subscription list - " + _website__WEBPACK_IMPORTED_MODULE_11__.default,
    topBar: "Subscription list",
    layout: "sidebar"
  },
  component: _webCMS_SubscriptionList__WEBPACK_IMPORTED_MODULE_9__.default,
  icon: 'las la-angle-double-right text-2xl'
}, {
  users: [2],
  path: "/cms/subscription-list/edit/:id",
  title: "Edit subscription list",
  meta: {
    title: "Edit subscription list - " + _website__WEBPACK_IMPORTED_MODULE_11__.default,
    topBar: "Edit subscription list",
    layout: "sidebar"
  },
  component: _webCMS_SubscriptionList__WEBPACK_IMPORTED_MODULE_9__.default,
  icon: 'las la-angle-double-right text-2xl',
  hidden: true
}, {
  users: [2],
  path: "/cms/footer",
  title: "Footer",
  meta: {
    title: "Footer - " + _website__WEBPACK_IMPORTED_MODULE_11__.default,
    topBar: "Footer",
    layout: "sidebar"
  },
  component: _webCMS_Footer__WEBPACK_IMPORTED_MODULE_10__.default,
  icon: 'las la-angle-double-right text-2xl'
}]);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Navigation.vue?vue&type=style&index=0&id=2c37d378&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Navigation.vue?vue&type=style&index=0&id=2c37d378&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".padding-top-63px[data-v-2c37d378] {\n  padding-top: 63px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Navigation.vue?vue&type=style&index=0&id=2c37d378&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Navigation.vue?vue&type=style&index=0&id=2c37d378&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_2c37d378_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=style&index=0&id=2c37d378&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Navigation.vue?vue&type=style&index=0&id=2c37d378&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_2c37d378_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_2c37d378_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

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
/* harmony import */ var _Navigation_vue_vue_type_template_id_2c37d378_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigation.vue?vue&type=template&id=2c37d378&scoped=true& */ "./resources/js/layouts/Navigation.vue?vue&type=template&id=2c37d378&scoped=true&");
/* harmony import */ var _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation.vue?vue&type=script&lang=js& */ "./resources/js/layouts/Navigation.vue?vue&type=script&lang=js&");
/* harmony import */ var _Navigation_vue_vue_type_style_index_0_id_2c37d378_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navigation.vue?vue&type=style&index=0&id=2c37d378&scoped=true&lang=css& */ "./resources/js/layouts/Navigation.vue?vue&type=style&index=0&id=2c37d378&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Navigation_vue_vue_type_template_id_2c37d378_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Navigation_vue_vue_type_template_id_2c37d378_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2c37d378",
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

/***/ "./resources/js/webCMS/About.vue":
/*!***************************************!*\
  !*** ./resources/js/webCMS/About.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _About_vue_vue_type_template_id_6e777431___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About.vue?vue&type=template&id=6e777431& */ "./resources/js/webCMS/About.vue?vue&type=template&id=6e777431&");
/* harmony import */ var _About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About.vue?vue&type=script&lang=js& */ "./resources/js/webCMS/About.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _About_vue_vue_type_template_id_6e777431___WEBPACK_IMPORTED_MODULE_0__.render,
  _About_vue_vue_type_template_id_6e777431___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/webCMS/About.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/webCMS/ContentPartner.vue":
/*!************************************************!*\
  !*** ./resources/js/webCMS/ContentPartner.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ContentPartner_vue_vue_type_template_id_473b8bca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContentPartner.vue?vue&type=template&id=473b8bca& */ "./resources/js/webCMS/ContentPartner.vue?vue&type=template&id=473b8bca&");
/* harmony import */ var _ContentPartner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContentPartner.vue?vue&type=script&lang=js& */ "./resources/js/webCMS/ContentPartner.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ContentPartner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ContentPartner_vue_vue_type_template_id_473b8bca___WEBPACK_IMPORTED_MODULE_0__.render,
  _ContentPartner_vue_vue_type_template_id_473b8bca___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/webCMS/ContentPartner.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/webCMS/Footer.vue":
/*!****************************************!*\
  !*** ./resources/js/webCMS/Footer.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Footer_vue_vue_type_template_id_627e87a7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=627e87a7& */ "./resources/js/webCMS/Footer.vue?vue&type=template&id=627e87a7&");
/* harmony import */ var _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&lang=js& */ "./resources/js/webCMS/Footer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Footer_vue_vue_type_template_id_627e87a7___WEBPACK_IMPORTED_MODULE_0__.render,
  _Footer_vue_vue_type_template_id_627e87a7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/webCMS/Footer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/webCMS/FutureOfferings.vue":
/*!*************************************************!*\
  !*** ./resources/js/webCMS/FutureOfferings.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FutureOfferings_vue_vue_type_template_id_675589ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FutureOfferings.vue?vue&type=template&id=675589ce& */ "./resources/js/webCMS/FutureOfferings.vue?vue&type=template&id=675589ce&");
/* harmony import */ var _FutureOfferings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FutureOfferings.vue?vue&type=script&lang=js& */ "./resources/js/webCMS/FutureOfferings.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _FutureOfferings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _FutureOfferings_vue_vue_type_template_id_675589ce___WEBPACK_IMPORTED_MODULE_0__.render,
  _FutureOfferings_vue_vue_type_template_id_675589ce___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/webCMS/FutureOfferings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/webCMS/General.vue":
/*!*****************************************!*\
  !*** ./resources/js/webCMS/General.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _General_vue_vue_type_template_id_3a4b7de8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./General.vue?vue&type=template&id=3a4b7de8& */ "./resources/js/webCMS/General.vue?vue&type=template&id=3a4b7de8&");
/* harmony import */ var _General_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./General.vue?vue&type=script&lang=js& */ "./resources/js/webCMS/General.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _General_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _General_vue_vue_type_template_id_3a4b7de8___WEBPACK_IMPORTED_MODULE_0__.render,
  _General_vue_vue_type_template_id_3a4b7de8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/webCMS/General.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/webCMS/Home.vue":
/*!**************************************!*\
  !*** ./resources/js/webCMS/Home.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_4ed79c2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=4ed79c2a& */ "./resources/js/webCMS/Home.vue?vue&type=template&id=4ed79c2a&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/webCMS/Home.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Home_vue_vue_type_template_id_4ed79c2a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Home_vue_vue_type_template_id_4ed79c2a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/webCMS/Home.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/webCMS/Mission.vue":
/*!*****************************************!*\
  !*** ./resources/js/webCMS/Mission.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Mission_vue_vue_type_template_id_00eac7b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mission.vue?vue&type=template&id=00eac7b0& */ "./resources/js/webCMS/Mission.vue?vue&type=template&id=00eac7b0&");
/* harmony import */ var _Mission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Mission.vue?vue&type=script&lang=js& */ "./resources/js/webCMS/Mission.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Mission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Mission_vue_vue_type_template_id_00eac7b0___WEBPACK_IMPORTED_MODULE_0__.render,
  _Mission_vue_vue_type_template_id_00eac7b0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/webCMS/Mission.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/webCMS/OurTeam.vue":
/*!*****************************************!*\
  !*** ./resources/js/webCMS/OurTeam.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OurTeam_vue_vue_type_template_id_ebdc8126___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OurTeam.vue?vue&type=template&id=ebdc8126& */ "./resources/js/webCMS/OurTeam.vue?vue&type=template&id=ebdc8126&");
/* harmony import */ var _OurTeam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OurTeam.vue?vue&type=script&lang=js& */ "./resources/js/webCMS/OurTeam.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _OurTeam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _OurTeam_vue_vue_type_template_id_ebdc8126___WEBPACK_IMPORTED_MODULE_0__.render,
  _OurTeam_vue_vue_type_template_id_ebdc8126___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/webCMS/OurTeam.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/webCMS/SubscriptionList.vue":
/*!**************************************************!*\
  !*** ./resources/js/webCMS/SubscriptionList.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SubscriptionList_vue_vue_type_template_id_52c60f32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubscriptionList.vue?vue&type=template&id=52c60f32& */ "./resources/js/webCMS/SubscriptionList.vue?vue&type=template&id=52c60f32&");
/* harmony import */ var _SubscriptionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubscriptionList.vue?vue&type=script&lang=js& */ "./resources/js/webCMS/SubscriptionList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _SubscriptionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SubscriptionList_vue_vue_type_template_id_52c60f32___WEBPACK_IMPORTED_MODULE_0__.render,
  _SubscriptionList_vue_vue_type_template_id_52c60f32___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/webCMS/SubscriptionList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/webCMS/Vision.vue":
/*!****************************************!*\
  !*** ./resources/js/webCMS/Vision.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Vision_vue_vue_type_template_id_d0198118___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vision.vue?vue&type=template&id=d0198118& */ "./resources/js/webCMS/Vision.vue?vue&type=template&id=d0198118&");
/* harmony import */ var _Vision_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vision.vue?vue&type=script&lang=js& */ "./resources/js/webCMS/Vision.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Vision_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Vision_vue_vue_type_template_id_d0198118___WEBPACK_IMPORTED_MODULE_0__.render,
  _Vision_vue_vue_type_template_id_d0198118___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/webCMS/Vision.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/webCMS/Welcome.vue":
/*!*****************************************!*\
  !*** ./resources/js/webCMS/Welcome.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Welcome_vue_vue_type_template_id_a381f2f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Welcome.vue?vue&type=template&id=a381f2f4& */ "./resources/js/webCMS/Welcome.vue?vue&type=template&id=a381f2f4&");
/* harmony import */ var _Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Welcome.vue?vue&type=script&lang=js& */ "./resources/js/webCMS/Welcome.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Welcome_vue_vue_type_template_id_a381f2f4___WEBPACK_IMPORTED_MODULE_0__.render,
  _Welcome_vue_vue_type_template_id_a381f2f4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/webCMS/Welcome.vue"
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

/***/ "./resources/js/webCMS/About.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/webCMS/About.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./About.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/About.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/webCMS/ContentPartner.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/webCMS/ContentPartner.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentPartner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ContentPartner.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/ContentPartner.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentPartner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/webCMS/Footer.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/webCMS/Footer.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/Footer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/webCMS/FutureOfferings.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/webCMS/FutureOfferings.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FutureOfferings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FutureOfferings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/FutureOfferings.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FutureOfferings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/webCMS/General.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/webCMS/General.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./General.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/General.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/webCMS/Home.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/webCMS/Home.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/Home.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/webCMS/Mission.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/webCMS/Mission.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Mission.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/Mission.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/webCMS/OurTeam.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/webCMS/OurTeam.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OurTeam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OurTeam.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/OurTeam.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OurTeam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/webCMS/SubscriptionList.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/webCMS/SubscriptionList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SubscriptionList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/SubscriptionList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/webCMS/Vision.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/webCMS/Vision.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Vision_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Vision.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/Vision.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Vision_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/webCMS/Welcome.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/webCMS/Welcome.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Welcome.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/Welcome.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/layouts/Navigation.vue?vue&type=style&index=0&id=2c37d378&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/layouts/Navigation.vue?vue&type=style&index=0&id=2c37d378&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_2c37d378_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=style&index=0&id=2c37d378&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Navigation.vue?vue&type=style&index=0&id=2c37d378&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/layouts/Navigation.vue?vue&type=template&id=2c37d378&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/layouts/Navigation.vue?vue&type=template&id=2c37d378&scoped=true& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_2c37d378_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_2c37d378_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_2c37d378_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=template&id=2c37d378&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Navigation.vue?vue&type=template&id=2c37d378&scoped=true&");


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

/***/ "./resources/js/webCMS/About.vue?vue&type=template&id=6e777431&":
/*!**********************************************************************!*\
  !*** ./resources/js/webCMS/About.vue?vue&type=template&id=6e777431& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_6e777431___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_6e777431___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_6e777431___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./About.vue?vue&type=template&id=6e777431& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/About.vue?vue&type=template&id=6e777431&");


/***/ }),

/***/ "./resources/js/webCMS/ContentPartner.vue?vue&type=template&id=473b8bca&":
/*!*******************************************************************************!*\
  !*** ./resources/js/webCMS/ContentPartner.vue?vue&type=template&id=473b8bca& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentPartner_vue_vue_type_template_id_473b8bca___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentPartner_vue_vue_type_template_id_473b8bca___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentPartner_vue_vue_type_template_id_473b8bca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ContentPartner.vue?vue&type=template&id=473b8bca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/ContentPartner.vue?vue&type=template&id=473b8bca&");


/***/ }),

/***/ "./resources/js/webCMS/Footer.vue?vue&type=template&id=627e87a7&":
/*!***********************************************************************!*\
  !*** ./resources/js/webCMS/Footer.vue?vue&type=template&id=627e87a7& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_627e87a7___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_627e87a7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_627e87a7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Footer.vue?vue&type=template&id=627e87a7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/Footer.vue?vue&type=template&id=627e87a7&");


/***/ }),

/***/ "./resources/js/webCMS/FutureOfferings.vue?vue&type=template&id=675589ce&":
/*!********************************************************************************!*\
  !*** ./resources/js/webCMS/FutureOfferings.vue?vue&type=template&id=675589ce& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FutureOfferings_vue_vue_type_template_id_675589ce___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FutureOfferings_vue_vue_type_template_id_675589ce___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FutureOfferings_vue_vue_type_template_id_675589ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FutureOfferings.vue?vue&type=template&id=675589ce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/FutureOfferings.vue?vue&type=template&id=675589ce&");


/***/ }),

/***/ "./resources/js/webCMS/General.vue?vue&type=template&id=3a4b7de8&":
/*!************************************************************************!*\
  !*** ./resources/js/webCMS/General.vue?vue&type=template&id=3a4b7de8& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_template_id_3a4b7de8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_template_id_3a4b7de8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_template_id_3a4b7de8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./General.vue?vue&type=template&id=3a4b7de8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/General.vue?vue&type=template&id=3a4b7de8&");


/***/ }),

/***/ "./resources/js/webCMS/Home.vue?vue&type=template&id=4ed79c2a&":
/*!*********************************************************************!*\
  !*** ./resources/js/webCMS/Home.vue?vue&type=template&id=4ed79c2a& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_4ed79c2a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_4ed79c2a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_4ed79c2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=template&id=4ed79c2a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/Home.vue?vue&type=template&id=4ed79c2a&");


/***/ }),

/***/ "./resources/js/webCMS/Mission.vue?vue&type=template&id=00eac7b0&":
/*!************************************************************************!*\
  !*** ./resources/js/webCMS/Mission.vue?vue&type=template&id=00eac7b0& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mission_vue_vue_type_template_id_00eac7b0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mission_vue_vue_type_template_id_00eac7b0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mission_vue_vue_type_template_id_00eac7b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Mission.vue?vue&type=template&id=00eac7b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/Mission.vue?vue&type=template&id=00eac7b0&");


/***/ }),

/***/ "./resources/js/webCMS/OurTeam.vue?vue&type=template&id=ebdc8126&":
/*!************************************************************************!*\
  !*** ./resources/js/webCMS/OurTeam.vue?vue&type=template&id=ebdc8126& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OurTeam_vue_vue_type_template_id_ebdc8126___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OurTeam_vue_vue_type_template_id_ebdc8126___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OurTeam_vue_vue_type_template_id_ebdc8126___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OurTeam.vue?vue&type=template&id=ebdc8126& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/OurTeam.vue?vue&type=template&id=ebdc8126&");


/***/ }),

/***/ "./resources/js/webCMS/SubscriptionList.vue?vue&type=template&id=52c60f32&":
/*!*********************************************************************************!*\
  !*** ./resources/js/webCMS/SubscriptionList.vue?vue&type=template&id=52c60f32& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionList_vue_vue_type_template_id_52c60f32___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionList_vue_vue_type_template_id_52c60f32___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionList_vue_vue_type_template_id_52c60f32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SubscriptionList.vue?vue&type=template&id=52c60f32& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/SubscriptionList.vue?vue&type=template&id=52c60f32&");


/***/ }),

/***/ "./resources/js/webCMS/Vision.vue?vue&type=template&id=d0198118&":
/*!***********************************************************************!*\
  !*** ./resources/js/webCMS/Vision.vue?vue&type=template&id=d0198118& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Vision_vue_vue_type_template_id_d0198118___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Vision_vue_vue_type_template_id_d0198118___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Vision_vue_vue_type_template_id_d0198118___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Vision.vue?vue&type=template&id=d0198118& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/Vision.vue?vue&type=template&id=d0198118&");


/***/ }),

/***/ "./resources/js/webCMS/Welcome.vue?vue&type=template&id=a381f2f4&":
/*!************************************************************************!*\
  !*** ./resources/js/webCMS/Welcome.vue?vue&type=template&id=a381f2f4& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_a381f2f4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_a381f2f4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_a381f2f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Welcome.vue?vue&type=template&id=a381f2f4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/Welcome.vue?vue&type=template&id=a381f2f4&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Navigation.vue?vue&type=template&id=2c37d378&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Navigation.vue?vue&type=template&id=2c37d378&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
              _c("router-link", { attrs: { to: "/home" } }, [
                _c("span", { staticClass: "nav-link" }, [
                  _c("span", [_vm._v("Home")])
                ])
              ])
            ],
            1
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
                  attrs: {
                    src: "/storage/webCMS/images/" + _vm.general.round_logo,
                    alt: "Logo"
                  }
                }),
                _vm._v(" "),
                _c("p", { staticClass: "ml-4 font-bold" }, [
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/About.vue?vue&type=template&id=6e777431&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/About.vue?vue&type=template&id=6e777431& ***!
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
  return _c("FormAndTable", {
    scopedSlots: _vm._u([
      {
        key: "form",
        fn: function() {
          return [
            _c("div", { staticClass: "section" }, [
              _c(
                "div",
                {
                  class: {
                    "rounded p-4 transition-all duration-300 bg-white my-6 shadow-lg": true
                  }
                },
                [
                  _c("h1", { staticClass: "text-4xl mb-4" }, [
                    _vm._v("About the program")
                  ]),
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
                            "grid grid-cols-1 min-md:grid-cols-2 gap-x-5"
                        },
                        [
                          _c(
                            "div",
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
                                    field: _vm.fields.content,
                                    value: _vm.content,
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
                              _c("CustomFileInput", {
                                attrs: {
                                  inputData: {
                                    field: _vm.fields.picture,
                                    that: _vm.that
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "flex" }, [
                                _vm.current_picture != ""
                                  ? _c("div", [
                                      _c("p", [_vm._v("Current picture")]),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass: "spotlight",
                                          attrs: {
                                            href:
                                              "/storage/webCMS/images/" +
                                              _vm.current_picture
                                          }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "max-h-80",
                                            attrs: {
                                              src:
                                                "/storage/webCMS/images/" +
                                                _vm.current_picture,
                                              alt: ""
                                            }
                                          })
                                        ]
                                      )
                                    ])
                                  : _vm._e()
                              ])
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
                      )
                    ]
                  )
                ]
              )
            ])
          ]
        },
        proxy: true
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/ContentPartner.vue?vue&type=template&id=473b8bca&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/ContentPartner.vue?vue&type=template&id=473b8bca& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
              { staticClass: "section" },
              [
                _c(
                  "div",
                  {
                    class: {
                      "rounded p-4 transition-all duration-300 bg-white my-6 shadow-lg mb-8": true
                    }
                  },
                  [
                    _c("h1", { staticClass: "text-4xl mb-4" }, [
                      _vm._v("Content partners")
                    ]),
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
                              "grid grid-cols-1 min-md:grid-cols-2 gap-x-5"
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
                                  field: _vm.fields.description,
                                  value: _vm.description,
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
                              disabled:
                                !_vm.isEmpty(_vm.errors) || _vm.submitting
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
                        )
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("ContentPartnerItems")
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/Footer.vue?vue&type=template&id=627e87a7&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/Footer.vue?vue&type=template&id=627e87a7& ***!
  \**************************************************************************************************************************************************************************************************************/
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
            _c("div", { staticClass: "section" }, [
              _c(
                "div",
                {
                  class: {
                    "rounded p-4 transition-all duration-300 bg-white my-6 shadow-lg": true
                  }
                },
                [
                  _c("h1", { staticClass: "text-4xl mb-4" }, [
                    _vm._v("Footer")
                  ]),
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
                            "grid grid-cols-1 min-md:grid-cols-2 gap-x-5"
                        },
                        [
                          _c(
                            "div",
                            [
                              _c("CustomInput", {
                                attrs: {
                                  inputData: {
                                    field: _vm.fields.emails,
                                    value: _vm.emails,
                                    that: _vm.that
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("CustomInput", {
                                attrs: {
                                  inputData: {
                                    field: _vm.fields.contact_numbers,
                                    value: _vm.contact_numbers,
                                    that: _vm.that
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("CustomInput", {
                                attrs: {
                                  inputData: {
                                    field: _vm.fields.facebook,
                                    value: _vm.facebook,
                                    that: _vm.that
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("CustomInput", {
                                attrs: {
                                  inputData: {
                                    field: _vm.fields.instagram,
                                    value: _vm.instagram,
                                    that: _vm.that
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("CustomInput", {
                                attrs: {
                                  inputData: {
                                    field: _vm.fields.twitter,
                                    value: _vm.twitter,
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
                              _c("CustomFileInput", {
                                attrs: {
                                  inputData: {
                                    field: _vm.fields.logo,
                                    that: _vm.that
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "flex" }, [
                                _vm.current_logo != ""
                                  ? _c("div", [
                                      _c("p", [_vm._v("Current logo")]),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass: "spotlight",
                                          attrs: {
                                            href:
                                              "/storage/webCMS/images/" +
                                              _vm.current_logo
                                          }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "max-h-80",
                                            attrs: {
                                              src:
                                                "/storage/webCMS/images/" +
                                                _vm.current_logo,
                                              alt: ""
                                            }
                                          })
                                        ]
                                      )
                                    ])
                                  : _vm._e()
                              ])
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
                      )
                    ]
                  )
                ]
              )
            ])
          ]
        },
        proxy: true
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/FutureOfferings.vue?vue&type=template&id=675589ce&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/FutureOfferings.vue?vue&type=template&id=675589ce& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
            _c("div", { staticClass: "section" }, [
              _c(
                "div",
                {
                  class: {
                    "rounded p-4 transition-all duration-300 bg-white my-6 shadow-lg": true
                  }
                },
                [
                  _c("h1", { staticClass: "text-4xl mb-4" }, [
                    _vm._v("Future offerings")
                  ]),
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
                            "grid grid-cols-1 min-md:grid-cols-2 gap-x-5"
                        },
                        [
                          _c(
                            "div",
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
                                    field: _vm.fields.content,
                                    value: _vm.content,
                                    that: _vm.that,
                                    init: Object.assign({}, _vm.defaultInit, {
                                      height: 500,
                                      images_upload_url:
                                        "/future-offerings-upload",
                                      toolbar:
                                        "undo redo | formatselect | bold italic underline strikethrough forecolor backcolor casechange | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | preview image | help"
                                    })
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
                              _c("CustomFileInput", {
                                attrs: {
                                  inputData: {
                                    field: _vm.fields.picture,
                                    that: _vm.that
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "flex" }, [
                                _vm.current_picture != ""
                                  ? _c("div", [
                                      _c("p", [_vm._v("Current picture")]),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass: "spotlight",
                                          attrs: {
                                            href:
                                              "/storage/webCMS/images/" +
                                              _vm.current_picture
                                          }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "max-h-80",
                                            attrs: {
                                              src:
                                                "/storage/webCMS/images/" +
                                                _vm.current_picture,
                                              alt: ""
                                            }
                                          })
                                        ]
                                      )
                                    ])
                                  : _vm._e()
                              ])
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
                      )
                    ]
                  )
                ]
              )
            ])
          ]
        },
        proxy: true
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/General.vue?vue&type=template&id=3a4b7de8&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/General.vue?vue&type=template&id=3a4b7de8& ***!
  \***************************************************************************************************************************************************************************************************************/
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
            _c("div", { staticClass: "section" }, [
              _c(
                "div",
                {
                  class: {
                    "rounded p-4 transition-all duration-300 bg-white my-6 shadow-lg": true
                  }
                },
                [
                  _c("h1", { staticClass: "text-4xl mb-4" }, [
                    _vm._v("General")
                  ]),
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
                            "grid grid-cols-1 min-md:grid-cols-2 gap-x-5"
                        },
                        [
                          _c(
                            "div",
                            [
                              _c("CustomFileInput", {
                                attrs: {
                                  inputData: {
                                    field: _vm.fields.round_logo,
                                    that: _vm.that
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "flex" }, [
                                _vm.round_logo_preview != ""
                                  ? _c("div", [
                                      _c("p", [_vm._v("Current round logo")]),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass: "spotlight",
                                          attrs: {
                                            href:
                                              "/storage/webCMS/images/" +
                                              _vm.round_logo_preview
                                          }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "max-h-80",
                                            attrs: {
                                              src:
                                                "/storage/webCMS/images/" +
                                                _vm.round_logo_preview,
                                              alt: ""
                                            }
                                          })
                                        ]
                                      )
                                    ])
                                  : _vm._e()
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            [
                              _c("CustomFileInput", {
                                attrs: {
                                  inputData: {
                                    field: _vm.fields.logo,
                                    that: _vm.that
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "flex" }, [
                                _vm.logo_preview != ""
                                  ? _c("div", [
                                      _c("p", [_vm._v("Current logo")]),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass: "spotlight",
                                          attrs: {
                                            href:
                                              "/storage/webCMS/images/" +
                                              _vm.logo_preview
                                          }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "max-h-80",
                                            attrs: {
                                              src:
                                                "/storage/webCMS/images/" +
                                                _vm.logo_preview,
                                              alt: ""
                                            }
                                          })
                                        ]
                                      )
                                    ])
                                  : _vm._e()
                              ])
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
                      )
                    ]
                  )
                ]
              )
            ])
          ]
        },
        proxy: true
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/Home.vue?vue&type=template&id=4ed79c2a&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/Home.vue?vue&type=template&id=4ed79c2a& ***!
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
  return _c("FormAndTable", {
    scopedSlots: _vm._u([
      {
        key: "form",
        fn: function() {
          return [
            _c("div", { staticClass: "section" }, [
              _c(
                "div",
                { staticClass: "rounded p-4 bg-white my-6 shadow-lg" },
                [
                  _c("CustomInput", {
                    attrs: {
                      inputData: {
                        field: {
                          name: "cms",
                          labelText: "CMS",
                          placeholder: "CMS",
                          type: "select"
                        },
                        value: _vm.cms,
                        that: _vm.that,
                        menuItems: [
                          { id: "home", text: "Home" },
                          { id: "features", text: "Features" },
                          { id: "study-guide", text: "Study Guide" },
                          { id: "inspirations", text: "Inspirations" },
                          { id: "events", text: "Events" }
                        ],
                        onChangeAfter: function(event) {
                          _vm.$router.push(
                            "/cms/home?cms=" + event.target.value
                          )
                        }
                      }
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _vm.cms == "home"
                ? _c(
                    "div",
                    {
                      class: {
                        "rounded p-4 transition-all duration-300 bg-white my-6 shadow-lg": true
                      }
                    },
                    [
                      _c("h1", { staticClass: "text-4xl mb-4" }, [
                        _vm._v("Home")
                      ]),
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
                                "grid grid-cols-1 min-md:grid-cols-2 gap-x-5"
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
                                    field: _vm.fields.subtitle,
                                    value: _vm.subtitle,
                                    that: _vm.that
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("CustomInput", {
                                attrs: {
                                  inputData: {
                                    field: _vm.fields.heading,
                                    value: _vm.heading,
                                    that: _vm.that
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("CustomInput", {
                                attrs: {
                                  inputData: {
                                    field: _vm.fields.description,
                                    value: _vm.description,
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
                                disabled:
                                  !_vm.isEmpty(_vm.errors) || _vm.submitting
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
                          )
                        ]
                      )
                    ]
                  )
                : _vm.cms == "features"
                ? _c("div", { staticClass: "mb-6" }, [_c("Features")], 1)
                : _vm.cms == "study-guide"
                ? _c("div", { staticClass: "mb-6" }, [_c("StudyGuide")], 1)
                : _vm.cms == "events"
                ? _c("div", { staticClass: "mb-6" }, [_c("Events")], 1)
                : _vm.cms == "inspirations"
                ? _c("div", { staticClass: "mb-6" }, [_c("Inspiration")], 1)
                : _vm._e()
            ])
          ]
        },
        proxy: true
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/Mission.vue?vue&type=template&id=00eac7b0&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/Mission.vue?vue&type=template&id=00eac7b0& ***!
  \***************************************************************************************************************************************************************************************************************/
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
            _c("div", { staticClass: "section" }, [
              _c(
                "div",
                {
                  class: {
                    "rounded p-4 transition-all duration-300 bg-white my-6 shadow-lg": true
                  }
                },
                [
                  _c("h1", { staticClass: "text-4xl mb-4" }, [
                    _vm._v("Mission")
                  ]),
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
                            "grid grid-cols-1 min-md:grid-cols-2 gap-x-5"
                        },
                        [
                          _c(
                            "div",
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
                                    field: _vm.fields.content,
                                    value: _vm.content,
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
                              _c("CustomFileInput", {
                                attrs: {
                                  inputData: {
                                    field: _vm.fields.picture,
                                    that: _vm.that
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "flex" }, [
                                _vm.current_picture != ""
                                  ? _c("div", [
                                      _c("p", [_vm._v("Current picture")]),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass: "spotlight",
                                          attrs: {
                                            href:
                                              "/storage/webCMS/images/" +
                                              _vm.current_picture
                                          }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "max-h-80",
                                            attrs: {
                                              src:
                                                "/storage/webCMS/images/" +
                                                _vm.current_picture,
                                              alt: ""
                                            }
                                          })
                                        ]
                                      )
                                    ])
                                  : _vm._e()
                              ])
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
                      )
                    ]
                  )
                ]
              )
            ])
          ]
        },
        proxy: true
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/OurTeam.vue?vue&type=template&id=ebdc8126&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/OurTeam.vue?vue&type=template&id=ebdc8126& ***!
  \***************************************************************************************************************************************************************************************************************/
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
              { staticClass: "section" },
              [
                _c(
                  "div",
                  {
                    class: {
                      "rounded p-4 transition-all duration-300 bg-white my-6 shadow-lg mb-8": true
                    }
                  },
                  [
                    _c("h1", { staticClass: "text-4xl mb-4" }, [
                      _vm._v("Our team")
                    ]),
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
                              "grid grid-cols-1 min-md:grid-cols-2 gap-x-5"
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
                                  field: _vm.fields.description,
                                  value: _vm.description,
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
                              disabled:
                                !_vm.isEmpty(_vm.errors) || _vm.submitting
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
                        )
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("OurTeamMembers")
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/SubscriptionList.vue?vue&type=template&id=52c60f32&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/SubscriptionList.vue?vue&type=template&id=52c60f32& ***!
  \************************************************************************************************************************************************************************************************************************/
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
              { staticClass: "section" },
              [
                _c(
                  "div",
                  {
                    class: {
                      "rounded p-4 transition-all duration-300 bg-white my-6 shadow-lg mb-8": true
                    }
                  },
                  [
                    _c("h1", { staticClass: "text-4xl mb-4" }, [
                      _vm._v("Payments")
                    ]),
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
                              "grid grid-cols-1 min-md:grid-cols-2 gap-x-5"
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
                                  field: _vm.fields.bundle_header,
                                  value: _vm.bundle_header,
                                  that: _vm.that
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("CustomInput", {
                              attrs: {
                                inputData: {
                                  field: _vm.fields.one_year_header,
                                  value: _vm.one_year_header,
                                  that: _vm.that
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("CustomInput", {
                              attrs: {
                                inputData: {
                                  field: _vm.fields.avail_all_header,
                                  value: _vm.avail_all_header,
                                  that: _vm.that
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("CustomInput", {
                              attrs: {
                                inputData: {
                                  field: _vm.fields.button,
                                  value: _vm.button,
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
                              disabled:
                                !_vm.isEmpty(_vm.errors) || _vm.submitting
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
                        )
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("SubscriptionListItems")
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/Vision.vue?vue&type=template&id=d0198118&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/Vision.vue?vue&type=template&id=d0198118& ***!
  \**************************************************************************************************************************************************************************************************************/
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
            _c("div", { staticClass: "section" }, [
              _c(
                "div",
                {
                  class: {
                    "rounded p-4 transition-all duration-300 bg-white my-6 shadow-lg": true
                  }
                },
                [
                  _c("h1", { staticClass: "text-4xl mb-4" }, [
                    _vm._v("Vision")
                  ]),
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
                            "grid grid-cols-1 min-md:grid-cols-2 gap-x-5"
                        },
                        [
                          _c(
                            "div",
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
                                    field: _vm.fields.content,
                                    value: _vm.content,
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
                              _c("CustomFileInput", {
                                attrs: {
                                  inputData: {
                                    field: _vm.fields.picture,
                                    that: _vm.that
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "flex" }, [
                                _vm.current_picture != ""
                                  ? _c("div", [
                                      _c("p", [_vm._v("Current picture")]),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass: "spotlight",
                                          attrs: {
                                            href:
                                              "/storage/webCMS/images/" +
                                              _vm.current_picture
                                          }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "max-h-80",
                                            attrs: {
                                              src:
                                                "/storage/webCMS/images/" +
                                                _vm.current_picture,
                                              alt: ""
                                            }
                                          })
                                        ]
                                      )
                                    ])
                                  : _vm._e()
                              ])
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
                      )
                    ]
                  )
                ]
              )
            ])
          ]
        },
        proxy: true
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/Welcome.vue?vue&type=template&id=a381f2f4&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/webCMS/Welcome.vue?vue&type=template&id=a381f2f4& ***!
  \***************************************************************************************************************************************************************************************************************/
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
            _c("div", { staticClass: "section" }, [
              _c(
                "div",
                {
                  class: {
                    "rounded p-4 transition-all duration-300 bg-white my-6 shadow-lg": true
                  }
                },
                [
                  _c("h1", { staticClass: "text-4xl mb-4" }, [
                    _vm._v("Welcome")
                  ]),
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
                            "grid grid-cols-1 min-md:grid-cols-2 gap-x-5"
                        },
                        [
                          _c(
                            "div",
                            [
                              _c("CustomFileInput", {
                                attrs: {
                                  inputData: {
                                    field: _vm.fields.picture,
                                    that: _vm.that
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "flex" }, [
                                _vm.current_picture != ""
                                  ? _c("div", [
                                      _c("p", [_vm._v("Current picture")]),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass: "spotlight",
                                          attrs: {
                                            href:
                                              "/storage/webCMS/images/" +
                                              _vm.current_picture
                                          }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "max-h-80",
                                            attrs: {
                                              src:
                                                "/storage/webCMS/images/" +
                                                _vm.current_picture,
                                              alt: ""
                                            }
                                          })
                                        ]
                                      )
                                    ])
                                  : _vm._e()
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("CustomInput", {
                            attrs: {
                              inputData: {
                                field: _vm.fields.content,
                                value: _vm.content,
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
                      )
                    ]
                  )
                ]
              )
            ])
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