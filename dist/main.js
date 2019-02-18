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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Proto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Proto */ \"./src/js/modules/Proto.js\");\n/* harmony import */ var _modules_Oop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Oop */ \"./src/js/modules/Oop.js\");\n/* harmony import */ var _modules_DataTest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/DataTest */ \"./src/js/modules/DataTest.js\");\n/* harmony import */ var _modules_SliderOnMobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/SliderOnMobile */ \"./src/js/modules/SliderOnMobile.js\");\n\r\n\r\n\r\n\r\n\r\nconst gen = new _modules_Proto__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n    amountOfSlides: 3\r\n});\r\n//const oop = new Oop();\r\nconst dataT = new _modules_DataTest__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\nconst sliderOnMob = new _modules_SliderOnMobile__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/DataTest.js":
/*!************************************!*\
  !*** ./src/js/modules/DataTest.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass DataTest {\r\n    constructor() {\r\n        this.events();\r\n    }\r\n\r\n    events() {\r\n        let url = 'https://reqres.in/api/users?page=2';\r\n        let template = document.querySelector('.data-test__template').content.querySelector('.data-test__template-content');\r\n\r\n        (function grabData() {\r\n            let xhr = new XMLHttpRequest();\r\n            xhr.open('GET', url);\r\n            xhr.addEventListener('load', function () {\r\n                if(xhr.readyState == 4 && xhr.status == 200) {\r\n                    let dataObj = xhr.responseText;\r\n                    dataObj = JSON.parse(dataObj);\r\n                    showData(dataObj.data);\r\n                }\r\n            });\r\n            xhr.send();\r\n        })();\r\n\r\n        function showData(dataFromServer) {\r\n            dataFromServer.forEach(function (obj) {\r\n                console.log(obj);\r\n            });\r\n        };\r\n\r\n        function generateDomElement() {\r\n            \r\n        }\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataTest);\n\n//# sourceURL=webpack:///./src/js/modules/DataTest.js?");

/***/ }),

/***/ "./src/js/modules/Oop.js":
/*!*******************************!*\
  !*** ./src/js/modules/Oop.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Oop {\r\n    constructor() {\r\n        this.events()\r\n    }\r\n\r\n    events() {\r\n        (function () {\r\n            function onLoad (data) {\r\n                console.log(data);\r\n            }\r\n            function onError(message) {\r\n                console.error(message);\r\n            }\r\n            window.onload = {\r\n                save(onLoad, onError) {\r\n                    let url = 'http://jsonplaceholder.typicode.com/posts';\r\n                    let xhr = new XMLHttpRequest();\r\n                    xhr.open('GET', url);\r\n                    xhr.addEventListener('load', function () {\r\n                        if(xhr.readyState == 4) {\r\n                            if (xhr.status == 200) {\r\n                                onLoad(xhr.responseText);\r\n                            }\r\n                        }\r\n                        else {\r\n                            onError('You have a new error. Try again later.')\r\n                        }\r\n                    });\r\n                    xhr.send();\r\n                }\r\n            }\r\n            window.onload.save(onLoad, onError);\r\n        })();\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Oop);\n\n//# sourceURL=webpack:///./src/js/modules/Oop.js?");

/***/ }),

/***/ "./src/js/modules/Proto.js":
/*!*********************************!*\
  !*** ./src/js/modules/Proto.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Generator {\r\n    constructor(obj) {\r\n        this.amountOfSlides = obj.amountOfSlides;\r\n        this.events();\r\n    }\r\n\r\n    events() {\r\n        const buttons = document.querySelectorAll('[data-direction]');\r\n        const slides = Array.from(document.querySelectorAll('.slide'));\r\n        const sliderContainer = document.querySelector('.slider__container');\r\n        let distanceFromStart = 0;\r\n        let slideGapInProcent;\r\n        let distanceBetweenSlides;\r\n        let maxDistanceFromStart;\r\n        let minDistanceFromStart;\r\n        let amountOfSlides = this.amountOfSlides;\r\n        function locateSlides() {\r\n            let slideWidthInTheString = (window.getComputedStyle(slides[0])).getPropertyValue('max-width');\r\n            let slideWidthInProcent = +(slideWidthInTheString.match(/\\d/g).join(''));\r\n            slideGapInProcent = Math.round(((100 - (slideWidthInProcent * amountOfSlides)) / (amountOfSlides - 1)) * 100 / slideWidthInProcent);\r\n            distanceBetweenSlides = (slideGapInProcent + 100);\r\n            maxDistanceFromStart = (slideGapInProcent + 100) * (slides.length - 1);\r\n            minDistanceFromStart = -(slideGapInProcent + 100);\r\n            \r\n            for(let i = 0; i < slides.length; i++) {\r\n            const slide = slides[i];\r\n            distanceFromStart = (slideGapInProcent + 100) * i;\r\n            slide.style.transform = `translateX(${distanceFromStart}%)`;\r\n            }\r\n        };\r\n        locateSlides();\r\n\r\n        function debounceOnResize(func) {\r\n            let timer;\r\n            return function (event) {\r\n                if(timer) clearTimeout(timer);\r\n                timer = setTimeout(func, 400, event);\r\n            }\r\n        }\r\n\r\n        window.addEventListener('resize', debounceOnResize(locateSlides));\r\n\r\n        function moveSlides() {\r\n            if(this.dataset.direction == 'prev') {\r\n                slides.unshift(slides.pop());\r\n                slides.map(slide => {\r\n                    let locationFromStart = slide.style.transform;\r\n                    sliderContainer.appendChild(slide);\r\n\r\n                    const locationFromStartInDigit = +(locationFromStart.match(/[\\d]/g).join(''));\r\n                    let locationOnClickFromStart = locationFromStartInDigit + distanceBetweenSlides;\r\n                    slide.style.opacity = 1;\r\n                    if(locationOnClickFromStart > maxDistanceFromStart) {\r\n                        locationOnClickFromStart = minDistanceFromStart;\r\n                        slide.style.opacity = 0;\r\n                        slide.style.transform = `translateX(${locationOnClickFromStart}%)`;\r\n                    }\r\n                    setTimeout(() => {\r\n                        sliderContainer.firstElementChild.style.transform = `translateX(0%)`;\r\n                        sliderContainer.firstElementChild.style.opacity = 1;\r\n                        slide.style.transform = `translateX(${locationOnClickFromStart}%)`;\r\n                        slide.style.transition = `all 0.25s ease-in-out`;\r\n                    }, 0);\r\n                    \r\n                });\r\n            }\r\n\r\n            if (this.dataset.direction == 'next') {\r\n                slides.push(slides.shift());\r\n                slides.map(slide => {\r\n                    sliderContainer.appendChild(slide);\r\n                    let locationFromStart = slide.style.transform;\r\n                    const locationFromStartInDigit = +(locationFromStart.match(/[\\d]/g).join(''));\r\n                    let locationOnClickFromStart = locationFromStartInDigit - distanceBetweenSlides;\r\n                    \r\n                    if(locationOnClickFromStart < 0) {\r\n                        locationOnClickFromStart = minDistanceFromStart;\r\n                    }\r\n\r\n                    let counter = 0;\r\n                    setTimeout(() => {\r\n                        slide.style.transform = `translateX(${locationOnClickFromStart}%)`;\r\n                        slide.style.transition = `transform 0.25s ease-in-out`;\r\n                        slide.style.opacity = 1;\r\n                        let firstInterval = setInterval(() => {\r\n                            counter++;\r\n                            if(counter >= 35) {\r\n                                clearInterval(firstInterval);\r\n                                sliderContainer.lastElementChild.style.opacity = 0;\r\n                                locationOnClickFromStart = maxDistanceFromStart;\r\n                                sliderContainer.lastElementChild.style.transform = `translateX(${locationOnClickFromStart}%)`;\r\n                            }\r\n                        }, 1);\r\n                    }, 0);\r\n                });\r\n            }\r\n        }\r\n        buttons.forEach(btn => btn.addEventListener('click', moveSlides));\r\n    }\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Generator);\r\n\n\n//# sourceURL=webpack:///./src/js/modules/Proto.js?");

/***/ }),

/***/ "./src/js/modules/SliderOnMobile.js":
/*!******************************************!*\
  !*** ./src/js/modules/SliderOnMobile.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass SliderOnMobile {\r\n    constructor() {\r\n        this.amountOfSlides = 3;\r\n        this.events();\r\n    }\r\n\r\n    events() {\r\n        let sliderOnMobile = document.querySelector('.sliderOnMobile');\r\n        let slides = Array.from(document.querySelectorAll('.slideOnMobile'));\r\n        let slider;\r\n        let sliderContainer;\r\n        let distanceFromStart = 0;\r\n        let slideGapInProcent;\r\n        let distanceBetweenSlides;\r\n        let maxDistanceFromStart;\r\n        let minDistanceFromStart;\r\n        let amountOfSlides = this.amountOfSlides;\r\n        function locateSlides() {\r\n            let slideWidthInTheString = (window.getComputedStyle(slides[0])).getPropertyValue('max-width');\r\n            console.log(slideWidthInTheString);\r\n            let slideWidthInProcent = +(slideWidthInTheString.match(/\\d/g).join(''));\r\n            slideGapInProcent = Math.round(((100 - (slideWidthInProcent * amountOfSlides)) / (amountOfSlides - 1)) * 100 / slideWidthInProcent);\r\n            distanceBetweenSlides = (slideGapInProcent + 100);\r\n            maxDistanceFromStart = (slideGapInProcent + 100) * (slides.length - 1);\r\n            minDistanceFromStart = -(slideGapInProcent + 100);\r\n            \r\n            for(let i = 0; i < slides.length; i++) {\r\n            const slide = slides[i];\r\n            distanceFromStart = (slideGapInProcent + 100) * i;\r\n            slide.style.transform = `translateX(${distanceFromStart}%)`;\r\n            }\r\n        };\r\n        \r\n        function checkSlider() {\r\n            if(window.innerWidth > 1200 && !slider) {\r\n                slider = document.createElement('div');\r\n                slider.classList.add('slider');\r\n                sliderContainer = document.createElement('div');\r\n                sliderContainer.classList.add('slider-container');\r\n                slides.forEach(function (slide) {\r\n                    slide.classList.remove('slideOnMobile');\r\n                    slide.classList.add('slide');\r\n                    sliderContainer.appendChild(slide);\r\n                });\r\n                slider.appendChild(sliderContainer);\r\n                sliderOnMobile.appendChild(slider);\r\n                \r\n            }\r\n            locateSlides();\r\n        }\r\n\r\n        function debaunceOnResize(func) {\r\n            let timer;\r\n            return function (event) {\r\n                clearTimeout(timer);\r\n                timer = setTimeout(func, 300, event);\r\n            }\r\n        }\r\n\r\n        window.addEventListener('resize', debaunceOnResize(checkSlider));\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (SliderOnMobile);\n\n//# sourceURL=webpack:///./src/js/modules/SliderOnMobile.js?");

/***/ })

/******/ });