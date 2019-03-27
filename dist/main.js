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
eval("__webpack_require__.r(__webpack_exports__);\nclass Calculator {\r\n    constructor() {\r\n        this.inputs = document.querySelectorAll('input[type=\"number\"]');\r\n        this.reset = document.querySelector('.calc-block__reset');\r\n        this.items = document.querySelectorAll('.basket__item');\r\n        this.spinnerBtns = document.querySelectorAll('.spinner__button');\r\n        this.allResult = document.querySelector('.calc-block__result');\r\n        this.cost = document.querySelectorAll('.basket__item-cost');\r\n        this.arr = [];\r\n        this.res = 0;\r\n        this.result = 0;\r\n        this.events();\r\n    }\r\n\r\n    summ(el, price, amount_input, btnMinus, btnPlus) {\r\n        const cost = el.querySelector('.basket__item-cost');\r\n        if(+amount_input.value > 200 ) {\r\n            btnPlus.disabled = true;\r\n            btnMinus.disabled = false;\r\n            amount_input.value = 200;\r\n        }\r\n        if(+amount_input.value < 0) {\r\n            btnMinus.disabled = true;\r\n            btnPlus.disabled = false;\r\n            amount_input.value = 0;\r\n        }\r\n        if(+amount_input.value > 0 ) {\r\n            btnMinus.disabled = false;\r\n        }\r\n        \r\n        if(+amount_input.value == 0) {\r\n            btnMinus.disabled = true;\r\n        }\r\n        \r\n        let val = +amount_input.value;\r\n        val = +amount_input.value;\r\n        let result = price * val;\r\n        cost.textContent = result;\r\n        return result;\r\n    }\r\n    \r\n    delete(el) {\r\n        const elCost = el.querySelector('.basket__item-cost');\r\n        const elPrice = el.querySelector('.spinner__input');\r\n        const btnMinus = el.querySelector('.spinner__minus');\r\n        const elCostNum = +elCost.textContent;\r\n        this.res = +this.allResult.textContent - elCostNum\r\n        this.allResult.textContent = this.res;\r\n        btnMinus.disabled = true;\r\n        elCost.textContent = '0';\r\n        elPrice.value = 0;\r\n        let index = this.arr.indexOf(el);\r\n        this.arr.splice(index, 1);\r\n    }\r\n\r\n    count(el) {\r\n        console.log(el);\r\n        const price = +el.querySelector('.basket__item-price').textContent;\r\n        const reset = el.querySelector('.basket__item-remove');\r\n        const amount_input = el.querySelector('.spinner__input');\r\n        const buttonMinus = el.querySelector('.spinner__minus');\r\n        const buttonPlus = el.querySelector('.spinner__plus');\r\n\r\n        amount_input.addEventListener('input', () => this.summ(el, price, amount_input, buttonMinus, buttonPlus));\r\n        reset.addEventListener('click', () => this.delete(el));\r\n    }\r\n\r\n    findParent(el, cls) {\r\n        while((el = el.parentElement) && !el.classList.contains(cls));\r\n        return el;\r\n    }\r\n\r\n    countSpin(spBtn) {\r\n        const spinInput = this.findParent(spBtn, 'spinner').querySelector('.spinner__input');\r\n        \r\n        const cost = this.findParent(spBtn, 'basket__item').querySelector('.basket__item-cost');\r\n        \r\n        const price = this.findParent(spBtn, 'basket__item').querySelector('.basket__item-price');\r\n        \r\n        const buttonMinus = this.findParent(spBtn, 'basket__item').querySelector('.spinner__minus');\r\n        \r\n        const buttonPlus = this.findParent(spBtn, 'basket__item').querySelector('.spinner__plus');\r\n        \r\n        if(spBtn.classList.contains('spinner__plus')) {\r\n            spinInput.value = parseInt(spinInput.value, 10)+1;\r\n            buttonMinus.disabled = false;\r\n            let checker = +spinInput.value;\r\n            if(checker >= 200) {\r\n                checker = 200;\r\n                buttonPlus.disabled = true;\r\n            }\r\n\r\n            return cost.textContent = +spinInput.value * +price.textContent;\r\n        }\r\n        \r\n        if(spBtn.classList.contains('spinner__minus')) {\r\n            spinInput.value = parseInt(spinInput.value, 10)-1;\r\n            buttonPlus.disabled = false;\r\n            let checker = +spinInput.value;\r\n            if(checker <= 0) {\r\n                buttonMinus.disabled = true;\r\n            }\r\n\r\n            return cost.textContent = +spinInput.value * +price.textContent;\r\n        }\r\n    }\r\n\r\n    zeroize(el) {\r\n        if(el.value == '') {\r\n            el.value = 0;\r\n        }\r\n        else {\r\n            return;\r\n        }\r\n    }\r\n    \r\n    checkInput(input) {\r\n        this.arr.push(this.findParent(input, 'basket__item').querySelectorAll('.basket__item-cost'));\r\n        let digits = Array.from(this.arr).map((el) => +el[0].textContent);\r\n        digits.splice(4);\r\n        console.log(digits);\r\n        this.result = digits.reduce((sum, el) => {\r\n            return sum + el;\r\n        },0);\r\n        this.allResult.textContent = this.result;\r\n    }\r\n\r\n    resetAll() {\r\n        this.inputs.forEach((el) => {\r\n            el.value = 0;\r\n        });\r\n        this.cost.forEach((cos) => {\r\n            cos.textContent = '0';\r\n        });\r\n        this.res = 0;\r\n        this.allResult.textContent = '0';\r\n        this.spinnerBtns.forEach((btn) => {\r\n            if(btn.classList.contains('spinner__minus')) {\r\n                btn.disabled = true;\r\n            }\r\n        });\r\n        this.arr = [];\r\n    }\r\n\r\n    events() {\r\n        \r\n        this.items.forEach((el) => this.count(el));\r\n\r\n        this.inputs.forEach((el) => el.addEventListener('blur', () => this.zeroize(el)));\r\n\r\n        this.inputs.forEach((input) => input.addEventListener('change', () => this.checkInput(input)));\r\n        /* this.spinnerBtns.forEach((spBtn) => spBtn.addEventListener('click', () => this.countSpin(spBtn))); */\r\n\r\n\r\n        this.spinnerBtns.forEach((spBtn) => spBtn.addEventListener('click', () => {\r\n            const cost = +this.findParent(spBtn, 'basket__item').querySelector('.basket__item-cost').textContent;\r\n\r\n            this.countSpin(spBtn);\r\n            this.checkInput(spBtn);\r\n\r\n            if(spBtn.classList.contains('spinner__plus')) {\r\n                this.res += cost;\r\n            }\r\n            if(spBtn.classList.contains('spinner__minus')) {\r\n                this.res -= cost;\r\n            }\r\n            this.allResult.textContent = this.result;\r\n        }));\r\n\r\n        this.reset.addEventListener('click', () => this.resetAll());\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calculator);\n\n//# sourceURL=webpack:///./src/js/modules/Calculator.js?");

/***/ })

/******/ });