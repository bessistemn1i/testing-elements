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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Proto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Proto */ \"./src/js/modules/Proto.js\");\n/* harmony import */ var _modules_Oop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Oop */ \"./src/js/modules/Oop.js\");\n/* harmony import */ var _modules_Canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Canvas */ \"./src/js/modules/Canvas.js\");\n\r\n\r\n\r\n\r\nconst gen = new _modules_Proto__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n//const oop = new Oop();\r\nconst canvas = new _modules_Canvas__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/Canvas.js":
/*!**********************************!*\
  !*** ./src/js/modules/Canvas.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Canvas {\r\n    constructor() {\r\n        this.events();\r\n    }\r\n    events() {\r\n        const canvas = document.querySelector('#canvas');\r\n        let ctx = canvas.getContext('2d');\r\n        ctx.beginPath();\r\n        ctx.moveTo(100, 100);\r\n        ctx.lineTo(80, 60);\r\n        ctx.stroke();\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Canvas);\n\n//# sourceURL=webpack:///./src/js/modules/Canvas.js?");

/***/ }),

/***/ "./src/js/modules/Oop.js":
/*!*******************************!*\
  !*** ./src/js/modules/Oop.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Oop {\r\n    constructor() {\r\n        this.events()\r\n    }\r\n\r\n    events() {\r\n        let myFamily = (function () {\r\n            let family = [];\r\n\r\n            return {\r\n                addMember: function (member) {\r\n                    family.push(member);\r\n                },\r\n\r\n                removeMember: function (member) {\r\n                    let familyIndex = family.indexOf(member);\r\n                    if(familyIndex >= 0) {\r\n                        family.splice(familyIndex, 1);\r\n                    }\r\n                },\r\n\r\n                getFamilyMemebers: function () {\r\n                    return JSON.parse(JSON.stringify(family));\r\n                }\r\n            }\r\n        })();\r\n        myFamily.addMember('Ed');\r\n        myFamily.addMember('Uncle Alexander');\r\n        myFamily.addMember('Vera');\r\n        myFamily.addMember('Sonya');\r\n        myFamily.addMember('Uliana');\r\n        console.log(myFamily.getFamilyMemebers());\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Oop);\n\n//# sourceURL=webpack:///./src/js/modules/Oop.js?");

/***/ }),

/***/ "./src/js/modules/Proto.js":
/*!*********************************!*\
  !*** ./src/js/modules/Proto.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Generator {\r\n    constructor() {\r\n        this.events();\r\n    }\r\n\r\n    events() {\r\n        const buttons = document.querySelectorAll('[data-direction]');\r\n        const slides = Array.from(document.querySelectorAll('.slide'));\r\n        const sliderContainer = document.querySelector('.slider__container');\r\n        let distanceFromStart = 0;\r\n        let slideGapInProcent;\r\n        let distanceBetweenSlides;\r\n        let maxDistanceFromStart;\r\n        let minDistanceFromStart;\r\n        \r\n        function locateSlides() {\r\n            let slideWidthInTheString = (window.getComputedStyle(slides[0])).getPropertyValue('max-width');\r\n            let slideWidthInProcent = +(slideWidthInTheString.match(/\\d/g).join(''));\r\n            slideGapInProcent = Math.round(((100 - (slideWidthInProcent * 3)) / 2) * 100 / slideWidthInProcent);\r\n            distanceBetweenSlides = (slideGapInProcent + 100);\r\n            maxDistanceFromStart = (slideGapInProcent + 100) * (slides.length - 1);\r\n            minDistanceFromStart = -(slideGapInProcent + 100);\r\n            for(let i = 0; i < slides.length; i++) {\r\n            const slide = slides[i];\r\n            distanceFromStart = (slideGapInProcent + 100) * i;\r\n            slide.style.transform = `translateX(${distanceFromStart}%)`;\r\n            }\r\n        };\r\n        locateSlides();\r\n        function debounce(func, wait = 300, immediate = true) {\r\n            let timeout;\r\n            return function () {\r\n                let context = this,\r\n                    args = arguments;\r\n                \r\n                let later = function () {\r\n                    timeout = null;\r\n                    if(!immediate) func.apply(context, args);\r\n                };\r\n                let callNow = immediate && !timeout;\r\n                clearTimeout(timeout);\r\n                timeout = setTimeout(later, wait);\r\n                if(callNow) func.apply(context, args);\r\n            };\r\n        };\r\n\r\n        function debounceOnResize(func) {\r\n            let timer;\r\n            return function (event) {\r\n                if(timer) clearTimeout(timer);\r\n                timer = setTimeout(func, 400, event);\r\n            }\r\n        }\r\n        window.addEventListener('resize', debounceOnResize(locateSlides));\r\n\r\n        function moveSlides() {\r\n            if(this.dataset.direction == 'prev') {\r\n                slides.unshift(slides.pop());\r\n                slides.map(slide => {\r\n                    let locationFromStart = slide.style.transform;\r\n                    sliderContainer.appendChild(slide);\r\n\r\n                    const locationFromStartInDigit = +(locationFromStart.match(/[\\d]/g).join(''));\r\n                    let locationOnClickFromStart = locationFromStartInDigit + distanceBetweenSlides;\r\n                    slide.style.opacity = 1;\r\n                    if(locationOnClickFromStart > maxDistanceFromStart) {\r\n                        locationOnClickFromStart = minDistanceFromStart;\r\n                        slide.style.opacity = 0;\r\n                        slide.style.transform = `translateX(${locationOnClickFromStart}%)`;\r\n                    }\r\n                    setTimeout(() => {\r\n                        sliderContainer.firstElementChild.style.transform = `translateX(0%)`;\r\n                        sliderContainer.firstElementChild.style.opacity = 1;\r\n                        slide.style.transform = `translateX(${locationOnClickFromStart}%)`;\r\n                        slide.style.transition = `all 0.2s ease-in-out`;\r\n                    }, 0);\r\n                });\r\n            }\r\n\r\n            if (this.dataset.direction == 'next') {\r\n                slides.push(slides.shift());\r\n                slides.map(slide => {\r\n                    sliderContainer.appendChild(slide);\r\n                    let locationFromStart = slide.style.transform;\r\n                    const locationFromStartInDigit = +(locationFromStart.match(/[\\d]/g).join(''));\r\n                    let locationOnClickFromStart = locationFromStartInDigit - distanceBetweenSlides;\r\n                    if(locationOnClickFromStart < 0) {\r\n                        locationOnClickFromStart = minDistanceFromStart;\r\n                        slide.style.transition = `transform 0.2s ease-in-out`;\r\n                        slide.style.transform = `translateX(0%)`;\r\n                        setTimeout(() => {\r\n                            slide.style.transform = `translateX(${locationOnClickFromStart}%)`;\r\n                            locationOnClickFromStart = maxDistanceFromStart;\r\n                            slide.style.opacity = 0;\r\n                            slide.style.transform = `translateX(${locationOnClickFromStart}%)`;\r\n                        }, 300);\r\n                    }\r\n                    setTimeout(() => {\r\n                        slide.style.transform = `translateX(${locationOnClickFromStart}%)`;\r\n                        slide.style.transition = `transform 0.2s ease-in-out`;\r\n                        slide.style.opacity = 1;\r\n                    }, 0);\r\n                });\r\n            }\r\n        }\r\n\r\n        buttons.forEach(btn => btn.addEventListener('click', debounce(moveSlides)));\r\n    }\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Generator);\r\n\n\n//# sourceURL=webpack:///./src/js/modules/Proto.js?");

/***/ })

/******/ });