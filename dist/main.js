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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Proto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Proto */ \"./src/js/modules/Proto.js\");\n/* harmony import */ var _modules_Oop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Oop */ \"./src/js/modules/Oop.js\");\n\r\n\r\n\r\nconst gen = new _modules_Proto__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n    amountOfSlides: 3\r\n});\r\nconst oop = new _modules_Oop__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/Oop.js":
/*!*******************************!*\
  !*** ./src/js/modules/Oop.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Oop {\r\n    constructor() {\r\n        this.events()\r\n    }\r\n\r\n    events() {\r\n        let eBlock = document.querySelector('.eventBlock');\r\n        let blockToMove = document.querySelector('.blockToMove');\r\n\r\n        let arrOfColors = [\r\n            'green',\r\n            'black',\r\n            'yellow',\r\n            'blue',\r\n            'red'\r\n        ]\r\n\r\n        function generateColors(arr) {\r\n            return arr[Math.floor((Math.random() * arr.length - 1)) + 1];\r\n        }\r\n\r\n        blockToMove.addEventListener('mousedown', function (evt) {\r\n            evt.preventDefault();\r\n\r\n            let start = {\r\n                x: evt.clientX,\r\n                y: evt.clientY\r\n            };\r\n\r\n            function startToMove(evtMove) {\r\n                evt\r\n            }\r\n            document.addEventListener('mousemove', startToMove);\r\n        })\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Oop);\n\n//# sourceURL=webpack:///./src/js/modules/Oop.js?");

/***/ }),

/***/ "./src/js/modules/Proto.js":
/*!*********************************!*\
  !*** ./src/js/modules/Proto.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Generator {\r\n    constructor(obj) {\r\n        this.amountOfSlides = obj.amountOfSlides;\r\n        this.events();\r\n    }\r\n\r\n    events() {\r\n        const buttons = document.querySelectorAll('[data-direction]');\r\n        const slides = Array.from(document.querySelectorAll('.slide'));\r\n        const sliderContainer = document.querySelector('.slider__container');\r\n        let distanceFromStart = 0;\r\n        let slideGapInProcent;\r\n        let distanceBetweenSlides;\r\n        let maxDistanceFromStart;\r\n        let minDistanceFromStart;\r\n        let amountOfSlides = this.amountOfSlides;\r\n        function locateSlides() {\r\n            let slideWidthInTheString = (window.getComputedStyle(slides[0])).getPropertyValue('max-width');\r\n            let slideWidthInProcent = +(slideWidthInTheString.match(/\\d/g).join(''));\r\n            slideGapInProcent = Math.round(((100 - (slideWidthInProcent * amountOfSlides)) / (amountOfSlides - 1)) * 100 / slideWidthInProcent);\r\n            distanceBetweenSlides = (slideGapInProcent + 100);\r\n            maxDistanceFromStart = (slideGapInProcent + 100) * (slides.length - 1);\r\n            minDistanceFromStart = -(slideGapInProcent + 100);\r\n            \r\n            for(let i = 0; i < slides.length; i++) {\r\n            const slide = slides[i];\r\n            distanceFromStart = (slideGapInProcent + 100) * i;\r\n            slide.style.transform = `translateX(${distanceFromStart}%)`;\r\n            }\r\n        };\r\n        locateSlides();\r\n\r\n        function debounceOnResize(func) {\r\n            let timer;\r\n            return function (event) {\r\n                if(timer) clearTimeout(timer);\r\n                timer = setTimeout(func, 400, event);\r\n            }\r\n        }\r\n\r\n        window.addEventListener('resize', debounceOnResize(locateSlides));\r\n\r\n        function moveSlides() {\r\n            if(this.dataset.direction == 'prev') {\r\n                slides.unshift(slides.pop());\r\n                slides.map(slide => {\r\n                    let locationFromStart = slide.style.transform;\r\n                    sliderContainer.appendChild(slide);\r\n\r\n                    const locationFromStartInDigit = +(locationFromStart.match(/[\\d]/g).join(''));\r\n                    let locationOnClickFromStart = locationFromStartInDigit + distanceBetweenSlides;\r\n                    slide.style.opacity = 1;\r\n                    if(locationOnClickFromStart > maxDistanceFromStart) {\r\n                        locationOnClickFromStart = minDistanceFromStart;\r\n                        slide.style.opacity = 0;\r\n                        slide.style.transform = `translateX(${locationOnClickFromStart}%)`;\r\n                    }\r\n                    setTimeout(() => {\r\n                        sliderContainer.firstElementChild.style.transform = `translateX(0%)`;\r\n                        sliderContainer.firstElementChild.style.opacity = 1;\r\n                        slide.style.transform = `translateX(${locationOnClickFromStart}%)`;\r\n                        slide.style.transition = `all 0.25s ease-in-out`;\r\n                    }, 0);\r\n                    \r\n                });\r\n            }\r\n\r\n            if (this.dataset.direction == 'next') {\r\n                slides.push(slides.shift());\r\n                slides.map(slide => {\r\n                    sliderContainer.appendChild(slide);\r\n                    let locationFromStart = slide.style.transform;\r\n                    const locationFromStartInDigit = +(locationFromStart.match(/[\\d]/g).join(''));\r\n                    let locationOnClickFromStart = locationFromStartInDigit - distanceBetweenSlides;\r\n                    \r\n                    if(locationOnClickFromStart < 0) {\r\n                        locationOnClickFromStart = minDistanceFromStart;\r\n                    }\r\n\r\n                    let counter = 0;\r\n                    setTimeout(() => {\r\n                        slide.style.transform = `translateX(${locationOnClickFromStart}%)`;\r\n                        slide.style.transition = `transform 0.25s ease-in-out`;\r\n                        slide.style.opacity = 1;\r\n                        let firstInterval = setInterval(() => {\r\n                            counter++;\r\n                            if(counter >= 35) {\r\n                                clearInterval(firstInterval);\r\n                                sliderContainer.lastElementChild.style.opacity = 0;\r\n                                locationOnClickFromStart = maxDistanceFromStart;\r\n                                sliderContainer.lastElementChild.style.transform = `translateX(${locationOnClickFromStart}%)`;\r\n                            }\r\n                        }, 1);\r\n                    }, 0);\r\n                });\r\n            }\r\n        }\r\n        buttons.forEach(btn => btn.addEventListener('click', moveSlides));\r\n    }\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Generator);\r\n\n\n//# sourceURL=webpack:///./src/js/modules/Proto.js?");

/***/ })

/******/ });