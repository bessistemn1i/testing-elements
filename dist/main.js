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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Sum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Sum */ \"./src/js/modules/Sum.js\");\n\r\n\r\n//import DataTest from \"./modules/DataTest\";\r\n//const dataT = new DataTest();\r\nconst sum = new _modules_Sum__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/Sum.js":
/*!*******************************!*\
  !*** ./src/js/modules/Sum.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Summ {\r\n    constructor() {\r\n        this.sum = document.querySelector('.sum');\r\n        this.errored = this.sum.querySelector('.errored');\r\n        this.canvas = document.querySelector('#arrow');\r\n        this.inputN = document.querySelector('.input-numb');\r\n        this.inputNSecond = document.querySelector('.input-numbSecond');\r\n        this.inputs = document.querySelectorAll('.input-numb');\r\n        this.message = document.createElement('div');\r\n        this.firstEl = [6, 7, 8, 9];\r\n        this.secondEl = [11,12,13,14];\r\n        this.firstResult = this.randomArr(this.firstEl);\r\n        this.secondResult = this.randomArr(this.secondEl);\r\n        this.coordX = (this.firstResult * 13.6) + 11;\r\n        this.coordXSecond = (this.secondResult * 13.6) + 11;\r\n        this.angle = (this.firstResult * 10) / 2 + 20;\r\n        this.angleSecond = ((this.secondResult + this.firstResult) * 10) / 2 + 40;\r\n        this.drawFirstArrow;\r\n        this.randomArr;\r\n        this.validateFirstNumb;\r\n        this.validateSecondNumb;\r\n        this.firstMessage = false;\r\n        this.secondMessage = false;\r\n        this.resultMessage;\r\n        this.events();\r\n    }\r\n    randomArr(arr) {\r\n        let sortedarr = arr.sort((a,b) => {\r\n            return a - b;\r\n        });\r\n        let max = sortedarr.length-1;\r\n        let min = 0;\r\n        return sortedarr[Math.floor((Math.random() * (max - min) + min))];\r\n    }\r\n\r\n    drawFirstArrow() {\r\n        let coordX = this.coordX;\r\n        let canvas = this.canvas;\r\n        let angle = this.angle;\r\n        let ctx = canvas.getContext('2d');\r\n        ctx.strokeWidth = 4;\r\n        ctx.moveTo(12,100);\r\n        ctx.quadraticCurveTo(angle, 10, coordX, 100);\r\n        ctx.moveTo(coordX,100);\r\n        ctx.lineTo((coordX - 7),95);\r\n        ctx.moveTo(coordX, 100);\r\n        ctx.lineTo((coordX - 0.5),91);\r\n        ctx.stroke();\r\n        this.inputN.style.left = coordX * 2 + 'px';\r\n    }\r\n \r\n    drawSecondArrow() {\r\n        let coordX = (this.coordXSecond);\r\n        let canvas = this.canvas;\r\n        let angle = this.angleSecond;\r\n        let ctx = canvas.getContext('2d');\r\n        ctx.moveTo(this.coordX, 100);\r\n        ctx.quadraticCurveTo(angle, 10, coordX, 100);\r\n        ctx.moveTo(coordX,100);\r\n        ctx.lineTo((coordX - 7),95);\r\n        ctx.moveTo(coordX, 100);\r\n        ctx.lineTo((coordX - 0.5),91);\r\n        ctx.stroke();\r\n        this.inputNSecond.classList.remove('input-numbSecond--visually-hidden');\r\n        this.inputNSecond.style.left = (this.coordX + this.coordXSecond) * 2 - 40 + 'px';\r\n    }\r\n\r\n    validateFirstNumb(evt) {\r\n        let firstRes = evt.target;\r\n        let max = firstRes.getAttribute('max');\r\n        if(firstRes.value > max) {\r\n            firstRes.value == max;\r\n        }\r\n        if(isNaN(firstRes.value)) {\r\n            firstRes.value = '';\r\n            this.errored.style.display = 'block';\r\n            this.errored.textContent = 'Enter your correct symbol. It must be a number'\r\n        }\r\n        else {\r\n            this.errored.style.display = 'none';\r\n        }\r\n\r\n        if(firstRes.value == this.firstResult && firstRes.value != '') {\r\n            firstRes.style.border = '2px solid green';\r\n            this.drawSecondArrow();\r\n            this.firstMessage = true;\r\n            this.inputN.setAttribute('disabled', 'disabled');\r\n        }\r\n        else if (firstRes.value != this.firstResult && firstRes.value != '') {\r\n            firstRes.style.border = '2px solid red';\r\n        }\r\n        else {\r\n            firstRes.style.border = '2px solid black';\r\n        }\r\n    }\r\n\r\n    validateSecondNumb(evt) {\r\n        let secondRes = evt.target;\r\n        if(isNaN(secondRes.value)) {\r\n            secondRes.value = '';\r\n            this.errored.style.display = 'block';\r\n            this.errored.textContent = 'Enter your correct symbol. It must be a number'\r\n        }\r\n        else {\r\n            this.errored.style.display = 'none';\r\n        }\r\n        if(secondRes.value == (this.secondResult - this.firstResult) && secondRes.value != '') {\r\n            secondRes.style.border = '2px solid green';\r\n            this.drawSecondArrow();\r\n            this.secondMessage = true;\r\n            this.inputNSecond.setAttribute('disabled', 'disabled');\r\n        }\r\n        else if (secondRes.value != (this.secondResult - this.firstResult) && secondRes.value != '') {\r\n            secondRes.style.border = '2px solid red';\r\n        }\r\n        else {\r\n            secondRes.style.border = '2px solid black';\r\n        }\r\n        if(secondRes.value != '') {\r\n            this.resultMessage(this.firstMessage, this.secondMessage);\r\n        }\r\n    }\r\n\r\n    resultMessage(f,s) {\r\n        if(f && s) {\r\n            this.message.classList.add('success');\r\n            this.message.textContent = 'You are correct. Congratulations!';\r\n        }\r\n\r\n        else {\r\n            this.message.classList.add('failed');\r\n            this.message.textContent = 'You are looser. Get lost';\r\n        }\r\n        this.sum.appendChild(this.message);\r\n        return this.message;\r\n    }\r\n\r\n    events() {\r\n        this.inputN.addEventListener('keyup', () => this.validateFirstNumb(event));\r\n        this.inputNSecond.addEventListener('keyup', () => this.validateSecondNumb(event));\r\n        this.drawFirstArrow(this.firstResult);\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Summ);\n\n//# sourceURL=webpack:///./src/js/modules/Sum.js?");

/***/ })

/******/ });