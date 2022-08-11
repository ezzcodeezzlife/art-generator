"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/dalle2";
exports.ids = ["pages/api/dalle2"];
exports.modules = {

/***/ "dalle-node":
/*!*****************************!*\
  !*** external "dalle-node" ***!
  \*****************************/
/***/ ((module) => {

module.exports = import("dalle-node");;

/***/ }),

/***/ "(api)/./src/pages/api/dalle2.js":
/*!*********************************!*\
  !*** ./src/pages/api/dalle2.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var dalle_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dalle-node */ \"dalle-node\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([dalle_node__WEBPACK_IMPORTED_MODULE_0__]);\ndalle_node__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nasync function handler(req, res) {\n    const dalle = new dalle_node__WEBPACK_IMPORTED_MODULE_0__.Dalle(req.query.k);\n    const generations = await dalle.generate(req.query.q);\n    res.status(200).json({\n        result: generations\n    });\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2RhbGxlMi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFrQztBQUVuQixlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU1DLEtBQUssR0FBRyxJQUFJSiw2Q0FBSyxDQUFDRSxHQUFHLENBQUNHLEtBQUssQ0FBQ0MsQ0FBQyxDQUFDO0lBQ3BDLE1BQU1DLFdBQVcsR0FBRyxNQUFNSCxLQUFLLENBQUNJLFFBQVEsQ0FBQ04sR0FBRyxDQUFDRyxLQUFLLENBQUNJLENBQUMsQ0FBQztJQUNyRE4sR0FBRyxDQUFDTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztRQUFFQyxNQUFNLEVBQUVMLFdBQVc7S0FBRSxDQUFDO0NBQzlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXJ0LWdlbmVyYXRvci8uL3NyYy9wYWdlcy9hcGkvZGFsbGUyLmpzPzNhYjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGFsbGUgfSBmcm9tIFwiZGFsbGUtbm9kZVwiXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3QgZGFsbGUgPSBuZXcgRGFsbGUocmVxLnF1ZXJ5LmspO1xuICBjb25zdCBnZW5lcmF0aW9ucyA9IGF3YWl0IGRhbGxlLmdlbmVyYXRlKHJlcS5xdWVyeS5xKTtcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyByZXN1bHQ6IGdlbmVyYXRpb25zIH0pXG59XG4iXSwibmFtZXMiOlsiRGFsbGUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZGFsbGUiLCJxdWVyeSIsImsiLCJnZW5lcmF0aW9ucyIsImdlbmVyYXRlIiwicSIsInN0YXR1cyIsImpzb24iLCJyZXN1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/dalle2.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/dalle2.js"));
module.exports = __webpack_exports__;

})();