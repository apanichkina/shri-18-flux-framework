/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/Users/a.panichkina/shri-18-flux-framework";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/public/src/Action.js":
/*!**********************************!*\
  !*** ./lib/public/src/Action.js ***!
  \**********************************/
/*! exports provided: createAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createAction\", function() { return createAction; });\nfunction createAction(type, payload) {\n    var result;\n    if (payload) {\n        result = { type: type, payload: payload };\n    }\n    else {\n        result = { type: type };\n    }\n    return result;\n}\n//# sourceMappingURL=Action.js.map\n\n//# sourceURL=webpack:///./lib/public/src/Action.js?");

/***/ }),

/***/ "./lib/public/src/Store.js":
/*!*********************************!*\
  !*** ./lib/public/src/Store.js ***!
  \*********************************/
/*! exports provided: StateSingletonClass, dispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StateSingletonClass\", function() { return StateSingletonClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dispatch\", function() { return dispatch; });\nvar __assign = (undefined && undefined.__assign) || Object.assign || function(t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n        s = arguments[i];\n        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n            t[p] = s[p];\n    }\n    return t;\n};\nvar StateSingletonClass = (function () {\n    function StateSingletonClass() {\n        this.reducers = {};\n        this.store = {};\n        this.listeners = [];\n        if (StateSingletonClass.instance) {\n            throw new Error('Error: Instantiation failed: Use StateSingletonClass.getInstance() instead of new.');\n        }\n        StateSingletonClass.instance = this;\n    }\n    StateSingletonClass.prototype.emitChangedEvent = function () {\n        this.listeners.forEach(function (clb) {\n            clb.render();\n        });\n        console.log('changed');\n    };\n    StateSingletonClass.getInstance = function () {\n        return StateSingletonClass.instance;\n    };\n    StateSingletonClass.prototype.setInitialState = function (data) {\n        this.store = data;\n    };\n    StateSingletonClass.prototype.addReducers = function (reducers) {\n        this.reducers = __assign({}, this.reducers, reducers);\n    };\n    StateSingletonClass.prototype.getStore = function () {\n        return this.store;\n    };\n    StateSingletonClass.prototype.dispatch = function (action) {\n        var _this = this;\n        console.log('get store');\n        Object.keys(this.reducers).forEach(function (key) {\n            console.log(key);\n            _this.store[key] = _this.reducers[key](_this.store[key], action);\n        });\n        this.emitChangedEvent();\n        return this.store;\n    };\n    StateSingletonClass.prototype.addListener = function (listener) {\n        this.listeners.push(listener);\n    };\n    return StateSingletonClass;\n}());\n\nStateSingletonClass.instance = new StateSingletonClass();\nfunction dispatch(evt, action) {\n    var data = action.payload || {};\n    var event = new CustomEvent(action.type, data);\n    evt.dispatchEvent(event);\n}\n// public dispatch(action: IAction):void {\n//\n// \tlet changed = false;\n//\n// \tthis._reducers.forEach((reducer) => {\n// \t\tchanged = reducer(this._data, action) || changed\n// \t})\n// }\n// const test = createAction('hello', {foo: 'bar'})\n// console.log(target)\n// target.addEventListener('resize', (evt) => {\n// \tconsole.log(evt)\n// })\n// dispatch(evt.target, test)\n//# sourceMappingURL=Store.js.map\n\n//# sourceURL=webpack:///./lib/public/src/Store.js?");

/***/ }),

/***/ "./public/index.ts":
/*!*************************!*\
  !*** ./public/index.ts ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_public_src_Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/public/src/Action */ \"./lib/public/src/Action.js\");\n/* harmony import */ var _lib_public_src_Store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/public/src/Store */ \"./lib/public/src/Store.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var store = _lib_public_src_Store__WEBPACK_IMPORTED_MODULE_1__[\"StateSingletonClass\"].getInstance();\n  store.setInitialState({\n    name: 'Anna'\n  });\n  store.addReducers({\n    name: function name(store, action) {\n      if (store === void 0) {\n        store = 'some body';\n      }\n\n      switch (action.type) {\n        case 'nevPerson':\n          return action.payload.name;\n\n        default:\n          return store;\n      }\n    },\n    age: function age(store, action) {\n      if (store === void 0) {\n        store = 0;\n      }\n\n      switch (action.type) {\n        case 'nevPerson':\n          return 22;\n\n        default:\n          return store;\n      }\n    }\n  });\n  console.log('class initial: ', store.getStore());\n  var action = Object(_lib_public_src_Action__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])('nevPerson', {\n    name: 'Oleg'\n  });\n  var target = document.getElementById('root');\n\n  if (target) {\n    var render = function render() {\n      console.log('render');\n      var state = store.getStore();\n      target.innerText = state.name + state.age;\n    };\n\n    render();\n    store.addListener({\n      render: render\n    });\n    setTimeout(function () {\n      console.log('timeout');\n      store.dispatch(action);\n    }, 3000);\n  }\n});\n\n//# sourceURL=webpack:///./public/index.ts?");

/***/ })

/******/ });