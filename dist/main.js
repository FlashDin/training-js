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

/***/ "./src/calculator.js":
/*!***************************!*\
  !*** ./src/calculator.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addition\": () => (/* binding */ addition)\n/* harmony export */ });\n\n\nfunction addition(a, b) {\n    return a + b;\n}\n\nfunction subtraction(a, b) {\n    return a - b;\n}\n\nfunction multiplication(a, b) {\n    return a * b;\n}\n\nfunction exponen(a, b) {\n    return a ** b;\n}\n\nfunction division(a, b) {\n    return a / b;\n}\n\nfunction modulus(a, b) {\n    return a % b;\n}\n\nfunction percent(num) {\n    return num / 100;\n}\n\nfunction discount(price, num) {\n    return price * num / 100;\n}\n\nfunction lastPriceOfDiscount(price, num) {\n    return price - (price * num / 100);\n}\n\n// prime = angka inputan hanya bisa dibagi dirinya sendiri\nfunction isPrime(num) {\n    for (let i = 2; i < num; i++) {\n        if (num % i === 0) {\n            return false;\n        }\n    }\n    return true;\n}\n\nfunction isPrime1(num) {\n    for (let i = num; i >= 2; i--) {\n        if (num % i === 0) {\n            return false;\n        }\n    }\n    return true;\n}\n\n// recursive function example\nfunction isPrime2(realNum, num) {\n    let decNum = num - 1;\n    if (decNum === 2) {\n        return true;\n    }\n    if (realNum % decNum === 0) {\n        return false;\n    }\n    return isPrime2(realNum, decNum);\n}\n\nfunction factorial(num) {\n    let factorial = num;\n    for (let i = 1; i < num; i++) {\n        factorial = factorial * i;\n    }\n    return factorial;\n}\n\nfunction factorial1(num) {\n    let i = 1;\n    let factorial = num;\n    while (i < num) {\n        factorial *= i;\n        i++;\n    }\n    return factorial;\n}\n\n\nfunction sum(num) {\n    for (let i = 1; i <= num; i++) {\n        console.log(\"before\", i);\n        let res = i;\n        res += i;\n        console.log(\"after\", i);\n        // res = res + i;\n        // 1 = 1 + 1;\n        // 2 = 2 + 2;\n        // 3 = 3 + 3;\n        if (i === num) {\n            return res;\n        }\n    }\n}\n\n// jumlahkan input dalam array\nfunction sumArray(arrNum) {\n    // output penjumlahan array\n    // misal: [1, 2, 3, 4, 4] = 6\n    // deklarasi variable sum di isi 0\n    // lakukan perulangan sejumlah array\n    // dalam perulangan lakukan penjumlahan pada array ke index dengan memasukkan ke variable sum\n    // kembalikan nilai ke sum\n    let sum = 0;\n    for (let i = 0; i < arrNum.length; i++) {\n        sum += arrNum[i];\n        // sum = sum + arrNum[i];\n    }\n    return sum;\n}\n\nfunction person(name) {\n    return name;\n}\n\nconst person1 = (name) => {\n    const person = {\n        address: \"yogyakarta\"\n    };\n    return person;\n};\n\nconst person2 = (name) => {\n    return name;\n};\n\n\n\n//# sourceURL=webpack://basic/./src/calculator.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculator */ \"./src/calculator.js\");\n\n\n\ndocument.onreadystatechange = () => {\n    if (document.readyState === \"complete\") {\n        form();\n    }\n}\n\nconst form = () =>{\n    const form = document.getElementsByName(\"calculatorForm\");\n    form[0].onsubmit = (e) => {\n        e.preventDefault();\n        additional();\n        subtractional();\n        multiplicational();\n        exponenal();\n        divisional();\n        modulusal();\n        percental();\n        lastPriceOfDiscountal();\n        isPrimeal();\n        factorialal();\n    }\n}\n\nconst additional = () => {\n    let a = document.getElementsByName(\"a\");\n    let b = document.getElementsByName(\"b\");\n    let hasil = document.getElementById(\"hasil\");\n    hasil.innerText = (0,_calculator__WEBPACK_IMPORTED_MODULE_0__.addition)(parseInt(a[0].value), parseInt(b[0].value));\n}\nconst subtractional = () => {\n\n}\nconst multiplicational = () => {\n\n}\nconst exponenal = () => {\n\n}\nconst divisional = () => {\n\n}\nconst modulusal = () => {\n\n}\nconst percental = () => {\n\n}\nconst lastPriceOfDiscountal = () => {\n\n}\nconst isPrimeal = () => {\n\n}\nconst factorialal = () => {\n\n}\n\n//# sourceURL=webpack://basic/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;