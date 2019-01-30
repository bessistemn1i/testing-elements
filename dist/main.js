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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Proto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Proto */ \"./src/js/modules/Proto.js\");\n\r\n\r\nconst gen = new _modules_Proto__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/Proto.js":
/*!*********************************!*\
  !*** ./src/js/modules/Proto.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Generator {\r\n    constructor() {\r\n        this.events();\r\n    }\r\n\r\n    events() {\r\n        const bts = document.querySelectorAll('[data-direction]');\r\n        const slides = Array.from(document.querySelectorAll('.slide'));\r\n        const arrCT = document.querySelector('.slider__contaner');\r\n        let numb = 0;\r\n        function moving() {\r\n            let slideWidth = 30;\r\n\r\n            for(let i = 0; i < slides.length; i++) {\r\n            const slide = slides[i];\r\n            numb = ((slideWidth - 13) + 100) * i;\r\n            slide.style.maxWidth = `${slideWidth}%`;\r\n            slide.style.transform = `translateX(${numb}%)`;\r\n            }\r\n            \r\n        }\r\n        moving();\r\n\r\n        let n = 0;\r\n        function debounce(func, wait = 300, immediate = true) {\r\n            let timeout;\r\n            return function () {\r\n                let context = this,\r\n                    args = arguments;\r\n                \r\n                let later = function () {\r\n                    timeout = null;\r\n                    if(!immediate) func.apply(context, args);\r\n                };\r\n                let callNow = immediate && !timeout;\r\n                clearTimeout(timeout);\r\n                timeout = setTimeout(later, wait);\r\n                if(callNow) func.apply(context, args);\r\n            };\r\n        };\r\n\r\n        function sliding() {\r\n            \r\n            if(this.dataset.direction == 'prev') {\r\n                n+=35;\r\n                slides.unshift(slides.pop());\r\n                slides.map(item => {\r\n                    arrCT.appendChild(item);\r\n\r\n                    let resPrev = item.style.transform;\r\n                    const resNumb = +(resPrev.match(/[\\d]/g).join(''));\r\n                    let resToSlidePrev = resNumb + 117;\r\n                    item.style.opacity = 1;\r\n                    if(resToSlidePrev > 468) {\r\n                        resToSlidePrev = -117;\r\n                        item.style.opacity = 0;\r\n                        item.style.transform = `translateX(${resToSlidePrev}%)`;\r\n                    }\r\n                    setTimeout(() => {\r\n                        arrCT.firstElementChild.style.transform = `translateX(0%)`;\r\n                        arrCT.firstElementChild.style.opacity = 1;\r\n                        item.style.transform = `translateX(${resToSlidePrev}%)`;\r\n                        item.style.transition = `all 0.3s ease-in-out`;\r\n                    }, 0);\r\n                });\r\n            }\r\n\r\n            if (this.dataset.direction == 'next') {\r\n                n -= 35;\r\n                slides.push(slides.shift());\r\n                slides.map(item => {\r\n                    arrCT.appendChild(item);\r\n                    let resNext = item.style.transform;\r\n                    const resNumb = +(resNext.match(/[\\d]/g).join(''));\r\n                    let resToSlide = resNumb - 117;\r\n                    if(resToSlide < 0) {\r\n                        resToSlide = -117;\r\n                        item.style.transition = `transform 0.3s ease`;\r\n                        item.style.transform = `translateX(0%)`;\r\n                        setTimeout(() => {\r\n                            item.style.transform = `translateX(${resToSlide}%)`;\r\n                            resToSlide = 468;\r\n                            item.style.opacity = 0;\r\n                            item.style.transform = `translateX(${resToSlide}%)`;\r\n                        }, 300);\r\n                    }\r\n                    setTimeout(() => {\r\n                        item.style.transform = `translateX(${resToSlide}%)`;\r\n                        item.style.transition = `transform 0.3s ease-in-out`;\r\n                        item.style.opacity = 1;\r\n                    }, 0);\r\n                });\r\n            }\r\n        }\r\n\r\n        bts.forEach(btn => btn.addEventListener('click', debounce(sliding)));\r\n    }\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Generator);\r\n\n\n//# sourceURL=webpack:///./src/js/modules/Proto.js?");

/***/ })

/******/ });