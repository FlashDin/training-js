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

/***/ "./src/array.js":
/*!**********************!*\
  !*** ./src/array.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"posts\": () => (/* binding */ posts)\n/* harmony export */ });\n\n\nconst posts = [\n    {\n        id: 1,\n        title: \"wiki\",\n        body: \"wiki is\"\n    },\n    {\n        id: 2,\n        title: \"wiki 1\",\n        body: \"wiki 1 is\"\n    },\n    {\n        id: 3,\n        title: \"wiki 2\",\n        body: \"wiki 2 is\"\n    }\n]\n\n\n//# sourceURL=webpack://basic/./src/array.js?");

/***/ }),

/***/ "./src/arrayToHtml.js":
/*!****************************!*\
  !*** ./src/arrayToHtml.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array.js */ \"./src/array.js\");\n\n;\n\nconst frAdd = document.getElementById(\"frAdd\");\nconst titleName = document.getElementsByName(\"title\")[0];\nconst bodyName = document.getElementsByName(\"body\")[0];\nconst formDiv = document.getElementById(\"formDiv\");\nconst tableDiv = document.getElementById(\"tableDiv\");\nconst btnShow = document.getElementById(\"btnShow\");\nconst btnKembali = document.getElementById(\"btnKembali\");\nformDiv.style.display = 'none';\nbtnShow.onclick = () => {\n    tableDiv.style.display = 'none';\n    formDiv.style.display = 'block';\n};\nbtnKembali.onclick = () => {\n    formDiv.style.display = 'none';\n    tableDiv.style.display = 'block';\n};\n\nrenderTableRow();\n\nfunction renderTableRow() {\n    const table = tableDiv.childNodes[3];\n    let tr = '';\n    table.childNodes[3].innerHTML = tr;\n    // bisa pakai ini -> for (const post of posts)\n    for (let i = 0; i < _array_js__WEBPACK_IMPORTED_MODULE_0__.posts.length; i++) {\n        tr += `<tr>\n                <td>${_array_js__WEBPACK_IMPORTED_MODULE_0__.posts[i][\"id\"]}</td>\n                <td>${_array_js__WEBPACK_IMPORTED_MODULE_0__.posts[i][\"title\"]}</td>\n                <td>${_array_js__WEBPACK_IMPORTED_MODULE_0__.posts[i][\"body\"]}</td>\n                <td>\n                    <button name=\"edit\" value=\"${_array_js__WEBPACK_IMPORTED_MODULE_0__.posts[i][\"id\"]}\">Edit</button>\n                    <button name=\"delete\" value=\"${_array_js__WEBPACK_IMPORTED_MODULE_0__.posts[i][\"id\"]}\">Hapus</button>\n                </td>\n            </tr>`;\n    }\n    table.childNodes[3].innerHTML = tr;\n    document.getElementsByName(\"delete\").forEach(t => {\n        t.onclick = (e) => {\n            deleteData(e.target.value);\n        };\n    });\n    document.getElementsByName(\"edit\").forEach(t => {\n        t.onclick = (e) => {\n            editData(e.target.value);\n        };\n    });\n}\n\nfrAdd.onsubmit = (e) => {\n    e.preventDefault();\n    saveData(e);\n}\n\nfunction saveData(e) {\n    if (e.submitter.value === \"\") {\n        _array_js__WEBPACK_IMPORTED_MODULE_0__.posts.push({\n            id: \"\",\n            title: titleName.value,\n            body: bodyName.value,\n        });\n    } else {\n        // posts.splice()\n    }\n    renderTableRow();\n    btnKembali.click();\n}\n\nfunction editData(id) {\n    let data = {};\n    for (let i = 0; i < _array_js__WEBPACK_IMPORTED_MODULE_0__.posts.length; i++) {\n        if (_array_js__WEBPACK_IMPORTED_MODULE_0__.posts[i].id.toString() === id) {\n            data = _array_js__WEBPACK_IMPORTED_MODULE_0__.posts[i];\n        }\n    }\n    btnShow.click();\n    titleName.value = data.title;\n    bodyName.value = data.body;\n}\n\nfunction deleteData(id) {\n    let text;\n    if (confirm(\"Apakah anda yakin akan hapus data?\")) {\n        for (let i = 0; i < _array_js__WEBPACK_IMPORTED_MODULE_0__.posts.length; i++) {\n            if (_array_js__WEBPACK_IMPORTED_MODULE_0__.posts[i].id.toString() === id) {\n                _array_js__WEBPACK_IMPORTED_MODULE_0__.posts.splice(i, 1);\n            }\n        }\n        text = \"Terhapus\";\n        renderTableRow();\n    } else {\n        text = \"Batal\";\n    }\n    alert(id + \" \" + text);\n}\n\n//# sourceURL=webpack://basic/./src/arrayToHtml.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/arrayToHtml.js");
/******/ 	
/******/ })()
;