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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Calculator */ \"./src/js/modules/Calculator.js\");\n\r\nconst calc = new _modules_Calculator__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/Calculator.js":
/*!**************************************!*\
  !*** ./src/js/modules/Calculator.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Calculator {\r\n    constructor() {\r\n        this.inputs = document.querySelectorAll('input[type=\"number\"]');\r\n        this.result = document.querySelector('.calc-block__result-numb');\r\n        this.reset = document.querySelector('.calc-block__reset');\r\n        this.items = document.querySelectorAll('.basket__item');\r\n        this.spinnerBtns = document.querySelectorAll('.spinner__button');\r\n        this.res = 0;\r\n        this.events();\r\n    }\r\n\r\n    summing(el, price, amount_input) {\r\n        const cost = el.querySelector('.basket__item-cost');\r\n        let num2 = +amount_input.value;\r\n        let result = price * num2;\r\n        cost.textContent = result;\r\n        return result;\r\n    }\r\n    \r\n    delitins(el) {\r\n        const elCost = el.querySelector('.basket__item-cost');\r\n        const elPrice = el.querySelector('.spinner__input');\r\n        elCost.textContent = '0';\r\n        elPrice.value = 0;\r\n\r\n    }\r\n\r\n    counting(el) {\r\n        const price = +el.querySelector('.basket__item-price').textContent;\r\n        const reset = el.querySelector('.basket__item-remove');\r\n        const amount_input = el.querySelector('.spinner__input');\r\n        amount_input.addEventListener('input', () => this.summing(el, price, amount_input));\r\n        reset.addEventListener('click', () => this.delitins(el));\r\n    }\r\n\r\n    findParent(el, cls) {\r\n        while((el = el.parentElement) && !el.classList.contains(cls));\r\n        return el;\r\n    }\r\n\r\n    countingSpin(evt, spBtn) {\r\n        const spinInput = spBtn.parentElement.querySelector('.spinner__input');\r\n        const cost = this.findParent(spBtn, 'basket__item').querySelector('.basket__item-cost');\r\n        const price = this.findParent(spBtn, 'basket__item').querySelector('.basket__item-price');\r\n        console.log(cost);\r\n        console.log(price);\r\n        if(spBtn.classList.contains('spinner__plus')) {\r\n            spinInput.value = parseInt(spinInput.value, 10)+1;\r\n            return cost.textContent = +spinInput.value * +price.textContent;\r\n        }\r\n        \r\n        if(spBtn.classList.contains('spinner__minus')) {\r\n            spinInput.value = parseInt(spinInput.value, 10)-1;\r\n            return cost.textContent = +spinInput.value * +price.textContent;\r\n        }\r\n    }\r\n\r\n    events() {\r\n        this.items.forEach((el) => this.counting(el));\r\n        this.spinnerBtns.forEach((spBtn) => spBtn.addEventListener('click', () => this.countingSpin(event, spBtn)));\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calculator);\n\n//# sourceURL=webpack:///./src/js/modules/Calculator.js?");

/***/ })

/******/ });