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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Slider */ \"./src/js/modules/Slider.js\");\n\r\n\r\nnew _modules_Slider__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/Slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/Slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Slider; });\nclass Slider {\r\n    constructor() {\r\n        this.slider = document.querySelector('.slider');\r\n        this.nav = document.querySelector('.slider__nav');\r\n        this.prev = this.nav.querySelector('[data-path=\"prev\"]');\r\n        this.next = this.nav.querySelector('[data-path=\"next\"]');\r\n        this.sliderContainer = this.slider.querySelector('.slider__container');\r\n        this.slides = [...document.querySelectorAll('.slide')];\r\n        this.counter = 0;\r\n        this.counterSlide = 0;\r\n        this.counterHandler = 0;\r\n        this.pos = 0;\r\n        this.addEvents();\r\n    }\r\n\r\n    posSlides(arr) {\r\n        arr.map((el, idx) => {\r\n            const SLIDE_WIDTH = 300;\r\n            el.style.marginLeft = `${SLIDE_WIDTH * idx}px`;\r\n        });\r\n    }\r\n\r\n    moveBackward(arr) {\r\n        arr[0].style.background = 'red';\r\n        const sliderNext = arr.slice(0, -1);\r\n        this.pos++;\r\n        this.sliderContainer.insertBefore(sliderNext[0], arr[1]);\r\n        arr[arr.length - 1].style.marginLeft = '-300px';\r\n        setTimeout(() => {\r\n            arr.unshift(arr.pop());\r\n            this.posSlides(sliderNext);\r\n        }, 10);\r\n    }\r\n\r\n    moveForward(arr) {\r\n        arr[0].style.background = 'blue';\r\n        const newSlider = arr.slice(1);\r\n        this.pos--;\r\n        \r\n        this.sliderContainer.appendChild(newSlider[newSlider.length - 1]);\r\n        arr[0].style.marginLeft = '-300px';\r\n        setTimeout(() => {\r\n            arr.push(arr.shift());\r\n            this.posSlides(newSlider);\r\n        }, 10);\r\n    }\r\n    \r\n    addEvents() {\r\n        this.posSlides(this.slides);\r\n        this.prev.addEventListener('click', () => this.moveBackward(this.slides));\r\n        this.next.addEventListener(\"click\", () =>this.moveForward(this.slides));\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/modules/Slider.js?");

/***/ })

/******/ });