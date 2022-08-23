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

/***/ "./src/parentChildExample.js":
/*!***********************************!*\
  !*** ./src/parentChildExample.js ***!
  \***********************************/
/***/ (() => {

eval("\n\ndocument.onreadystatechange = () => {\n    if (document.readyState === \"complete\") {\n        debugNode();\n    }\n}\n\nconst debugNode = () => {\n    const btn = document.getElementById(\"btnDebug\");\n    btn.onclick = () => {\n        btn.parentNode.childNodes[1].style.backgroundColor = \"red\";\n        console.log(\"parent of button\", btn.parentNode.childNodes);\n        console.log(\"children of button\", btn.childNodes);\n    }\n}\n\n//# sourceURL=webpack://basic/./src/parentChildExample.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/parentChildExample.js"]();
/******/ 	
/******/ })()
;