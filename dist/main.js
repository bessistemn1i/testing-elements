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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_FormTest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/FormTest */ \"./src/js/modules/FormTest.js\");\n\r\n\r\nconst form = new _modules_FormTest__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/FormTest.js":
/*!************************************!*\
  !*** ./src/js/modules/FormTest.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass FormTest {\r\n    constructor() {\r\n        this.form = document.querySelector('#form');\r\n        this.inputs = Array.from(document.querySelectorAll('input[type=\"text\"]'));\r\n        this.list = document.querySelector('.form-content');\r\n        this.itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];\r\n        this.data = JSON.parse(localStorage.getItem('items'));\r\n        this.objToLocal = {};\r\n        this.events();\r\n    }\r\n    getFormData(arr) {\r\n        let res = [];\r\n        arr.forEach((el) => {\r\n            res.push(el.value);\r\n        });\r\n        res = res.join(' ');\r\n        console.log(res);\r\n        return res;\r\n    }\r\n\r\n    getDataFromStorage(arr) {\r\n        arr.forEach((el) => {\r\n            return el;\r\n        });\r\n    }\r\n\r\n    clearFormData(arr) {\r\n        arr.forEach((el) => {\r\n            return el.value = '';\r\n        });\r\n    }\r\n\r\n    sendForm(evt) {\r\n        evt.preventDefault();\r\n        const li = document.createElement('li');\r\n        if(this.getFormData(this.inputs).length > 1) {\r\n            li.textContent = this.getFormData(this.inputs);\r\n            this.list.appendChild(li);\r\n            this.clearFormData(this.inputs);\r\n            localStorage.clear('items');\r\n        }\r\n    }\r\n\r\n    addToObj(evt) {\r\n        console.log(this.objToLocal);\r\n        if(evt.target.value != '') {\r\n            this.objToLocal[`${evt.target.getAttribute('name')}`] = evt.target.value;\r\n            localStorage.setItem('items', JSON.stringify(this.objToLocal));\r\n        }\r\n    }\r\n\r\n    events() {\r\n        localStorage.setItem('items', JSON.stringify(this.itemsArray));\r\n        if(this.itemsArray.length != 0) {\r\n            console.log(this.data);\r\n            for (const key in this.data) {\r\n                if (this.data.hasOwnProperty(key)) {\r\n                    const element = this.data[key];\r\n                    this.inputs.forEach((el) => {\r\n                        if(el.getAttribute('name') == key)\r\n                        el.value = element;\r\n                    })\r\n                }\r\n            }\r\n        }\r\n        \r\n        this.inputs.map((el) => el.addEventListener('blur', () => this.addToObj(event)));\r\n        this.form.addEventListener('submit', () => this.sendForm(event))\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormTest);\n\n//# sourceURL=webpack:///./src/js/modules/FormTest.js?");

/***/ })

/******/ });