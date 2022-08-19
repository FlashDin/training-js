/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/string.js":
/*!***********************!*\
  !*** ./src/string.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stringFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stringFunction */ \"./src/stringFunction.js\");\n\n\n\nlet a = null;\nlet hasil = null;\ndocument.onreadystatechange = () => {\n    if (document.readyState === \"complete\") {\n        a = document.getElementsByName(\"a\");\n        hasil = document.getElementById(\"hasil\");\n        form();\n    }\n}\n\nconst form = () =>{\n    const formNames = document.getElementsByName(\"calculatorForm\");\n    formNames[0].onsubmit = (e) => {\n        e.preventDefault();\n        console.log(e.submitter.id);\n        switch(e.submitter.id) {\n            case \"toUpper\":\n                toUpperal();\n                break;\n            case \"toLower\":\n                toLoweral();\n                break;\n            case \"toCamel\":\n                toCamelal();\n                break;\n            case \"toPascal\":\n                toPascalal();\n                break;\n            case \"toSnake\":\n                toSnakeal();\n                break;\n            case \"toKebab\":\n                toKebabal();\n                break;\n            case \"toHuman\":\n                toHumanal();\n                break;\n            case \"toTitle\":\n                toTitleal();\n                break;\n            case \"isLetter\":\n                isLetteral();\n                break;\n            default:\n                toUpperal();\n                break;\n        }\n    }\n}\n\nconst toUpperal = () => {\n    hasil.innerText = (0,_stringFunction__WEBPACK_IMPORTED_MODULE_0__.toUpper)(a[0].value);\n}\n\nconst toLoweral = () => {\n}\n\nconst toCamelal = () => {\n}\n\nconst toPascalal = () => {\n}\n\nconst toSnakeal = () => {\n}\n\nconst toKebabal = () => {\n}\n\nconst toHumanal = () => {\n}\n\nconst toTitleal = () => {\n}\n\nconst isLetteral = () => {\n}\n\n//# sourceURL=webpack://basic/./src/string.js?");

/***/ }),

/***/ "./src/stringFunction.js":
/*!*******************************!*\
  !*** ./src/stringFunction.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toLower\": () => (/* binding */ toLower),\n/* harmony export */   \"toUpper\": () => (/* binding */ toUpper)\n/* harmony export */ });\n// in: abcd\n// out: ABCD\nfunction toUpper(str) {\n    let upper = [\"A\", \"B\", \"C\", \"D\", \"E\", \"F\"];\n    let lower = [\"a\", \"b\", \"c\", \"d\", \"e\", \"f\"];\n    let res = \"\";\n    for (let i = 0; i < str.length; i++) {\n        for (let j = 0; j < lower.length; j++) {\n            if (str.charAt(i) === lower[j]) {\n                res += upper[j];\n            }\n        }\n    }\n    return res;\n}\n\n// in: ABCD\n// out: abcd\nfunction toLower(str) {\n\n}\n\n// in: a bcd\n// out: aBcd\nfunction toCamel(str) {\n\n}\n\n// in: a bcd\n// out: ABcd\nfunction toPascal(str) {\n\n}\n\n// in: a bcd\n// out: a_bcd\nfunction toSnake(str) {\n\n}\n\n// in: a bcd\n// out: a-bcd\nfunction toKebab() {\n\n}\n\n// in: a_bcd\n// out: A bcd\nfunction toHuman() {\n\n}\n\n// in: a_bcd\n// out: A Bcd\nfunction toTitle() {\n\n}\n\n// in: 3\n// out: false\n// in: a\n// out: true\nfunction isLetter() {\n    return true;\n}\n\n\n\n\n//# sourceURL=webpack://basic/./src/stringFunction.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/string.js");
/******/ 	
/******/ })()
;