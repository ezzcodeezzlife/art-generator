"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./src/styles/globals.css":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./src/styles/globals.css ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* TODO:\\n* - Add support for media queries ???\\n* perhaps highlight words in word cloud to suggest they are clickable\\n*/\\n\\nbody {\\n  background: rgb(168,90,94);\\nbackground: linear-gradient(90deg, rgba(168,90,94,1) 0%, rgba(218,173,85,1) 48%, rgba(70,200,169,1) 88%, rgba(139,169,175,1) 100%);\\n  margin: 0;\\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\\n    sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n\\nh1 {\\n  margin-top: 10%;\\n  text-align: center;\\n  font-size: 2rem;\\n  font-weight: 600;\\n  margin-bottom: 0.5rem;\\n}\\n\\nh3 {\\n  margin-top: 4%;\\n  text-align: center;\\n  font-size: 1.5rem;\\n  font-weight: 500;\\n  margin-bottom: 2rem;\\n}\\n\\np {\\n  display: block;\\n  margin: auto;\\n  padding-top: 4rem;\\n  padding-bottom: 4rem;\\n  text-align: center;\\n  font-size: 1.2rem;\\n  font-weight: 400;\\n  max-width: 60%;\\n}\\n\\n.btn {\\n  background-color: rgba(39, 39, 39, 0.1);\\n  border-radius: 8px;\\n  border-width: 0;\\n  color: #333333;\\n  cursor: crosshair;\\n  display: inline-block;\\n  font-family: \\\"Haas Grot Text R Web\\\", \\\"Helvetica Neue\\\", Helvetica, Arial, sans-serif;\\n  font-size: 14px;\\n  font-weight: 600;\\n  line-height: 20px;\\n  list-style: none;\\n  display: block;\\n  margin: auto;\\n  padding: 10px 12px;\\n  text-align: center;\\n  transition: all 200ms;\\n  white-space: nowrap;\\n  user-select: none;\\n  -webkit-user-select: none;\\n  touch-action: manipulation;\\n}\\n\\n.btn:hover {\\n  background-color: rgba(39, 39, 39, 0.2);\\n}\\n\\n.btn-medium {\\n  font-size: 1.2rem;\\n  padding: 10px 14px;\\n  margin: 2% 5%;\\n  display: inline;\\n}\\n\\n.div-medium {\\n  text-align: center;\\n}\\n\\n.input {\\n  display: block;\\n  margin: auto;\\n  margin-bottom: 2%;\\n  margin-top: 2%;\\n  text-align: center;\\n  box-shadow: inset #abacaf 0 0 0 2px;\\n  border: 0;\\n  background: rgba(180, 180, 180, 0.3);\\n  appearance: none;\\n  width: 20%;\\n  position: relative;\\n  border-radius: 3px;\\n  padding: 9px 12px;\\n  line-height: 1.4;\\n  color: rgb(203, 203, 203);\\n  font-size: 16px;\\n  font-weight: 400;\\n  height: 40px;\\n  transition: all .2s ease;\\n}\\n\\n.input:hover {\\n  box-shadow: 0 0 0 0 #fff inset, #a24e78 0 0 0 2px;\\n}\\n\\n.input:focus {\\n  background: rgb(144, 144, 144, 0.3);\\n      outline: 0;\\n      box-shadow: 0 0 0 0 #fff inset, #a24e78 0 0 0 3px;\\n}\\n\\n.cloud {\\n  display: block;\\n  margin: auto;\\n  text-align: center;\\n}\\n\\n.hint {\\n  float: left;\\n  padding-left: 2%;\\n  font-weight: 200;\\n  animation: fadeIn 1s;\\n  cursor: crosshair;\\n}\\n\\n.hint:hover {\\n  color: #a24e78;\\n}\\n\\ncode {\\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\\n    monospace;\\n}\\n\\n#share {\\n  display: none;\\n}\\n\\n#buy {\\n  display: none;\\n}\\n\\n#btn-previous-stage {\\n  display: none;\\n}\\n\\n#btn-result {\\n  display: none;\\n}\\n\\n#fact {\\n  animation: fadeIn 1s;\\n  display: block;\\n  margin: auto;\\n  text-align: center;\\n  margin-top: 3rem;\\n  bottom: 1rem;\\n  max-width: 70%;\\n  font-weight: 300;\\n}\\n\\n@keyframes fadeIn {\\n  0% { opacity: 0; }\\n  100% { opacity: 1; }\\n}\\n\\n.grid {\\n  display: flex;\\n  padding-left: 5.5rem;\\n  align-items: center;\\n  justify-content: right;\\n  flex-wrap: wrap;\\n  max-width: 1200px;\\n}\\n\\n.card {\\n  margin: 1rem; \\n  color: inherit;\\n  text-decoration: none;\\n  border-radius: 10px;\\n  transition: color 0.15s ease, border-color 0.15s ease;\\n  max-width: 260px;\\n}\\n\\n.imgPreview {\\n  width: 100%;\\n  border-radius: 10px;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA;;;CAGC;;AAED;EACE,0BAA0B;AAC5B,kIAAkI;EAChI,SAAS;EACT;;cAEY;EACZ,mCAAmC;EACnC,kCAAkC;AACpC;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,iBAAiB;EACjB,oBAAoB;EACpB,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,uCAAuC;EACvC,kBAAkB;EAClB,eAAe;EACf,cAAc;EACd,iBAAiB;EACjB,qBAAqB;EACrB,mFAAmF;EACnF,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;EAChB,cAAc;EACd,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;EACrB,mBAAmB;EACnB,iBAAiB;EACjB,yBAAyB;EACzB,0BAA0B;AAC5B;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,iBAAiB;EACjB,cAAc;EACd,kBAAkB;EAClB,mCAAmC;EACnC,SAAS;EACT,oCAAoC;EACpC,gBAAgB;EAChB,UAAU;EACV,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;EAChB,yBAAyB;EACzB,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,wBAAwB;AAC1B;;AAEA;EACE,iDAAiD;AACnD;;AAEA;EACE,mCAAmC;MAC/B,UAAU;MACV,iDAAiD;AACvD;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,gBAAgB;EAChB,oBAAoB;EACpB,iBAAiB;AACnB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE;aACW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,oBAAoB;EACpB,cAAc;EACd,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,YAAY;EACZ,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,KAAK,UAAU,EAAE;EACjB,OAAO,UAAU,EAAE;AACrB;;AAEA;EACE,aAAa;EACb,oBAAoB;EACpB,mBAAmB;EACnB,sBAAsB;EACtB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,qBAAqB;EACrB,mBAAmB;EACnB,qDAAqD;EACrD,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,mBAAmB;AACrB\",\"sourcesContent\":[\"/* TODO:\\n* - Add support for media queries ???\\n* perhaps highlight words in word cloud to suggest they are clickable\\n*/\\n\\nbody {\\n  background: rgb(168,90,94);\\nbackground: linear-gradient(90deg, rgba(168,90,94,1) 0%, rgba(218,173,85,1) 48%, rgba(70,200,169,1) 88%, rgba(139,169,175,1) 100%);\\n  margin: 0;\\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\\n    sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n\\nh1 {\\n  margin-top: 10%;\\n  text-align: center;\\n  font-size: 2rem;\\n  font-weight: 600;\\n  margin-bottom: 0.5rem;\\n}\\n\\nh3 {\\n  margin-top: 4%;\\n  text-align: center;\\n  font-size: 1.5rem;\\n  font-weight: 500;\\n  margin-bottom: 2rem;\\n}\\n\\np {\\n  display: block;\\n  margin: auto;\\n  padding-top: 4rem;\\n  padding-bottom: 4rem;\\n  text-align: center;\\n  font-size: 1.2rem;\\n  font-weight: 400;\\n  max-width: 60%;\\n}\\n\\n.btn {\\n  background-color: rgba(39, 39, 39, 0.1);\\n  border-radius: 8px;\\n  border-width: 0;\\n  color: #333333;\\n  cursor: crosshair;\\n  display: inline-block;\\n  font-family: \\\"Haas Grot Text R Web\\\", \\\"Helvetica Neue\\\", Helvetica, Arial, sans-serif;\\n  font-size: 14px;\\n  font-weight: 600;\\n  line-height: 20px;\\n  list-style: none;\\n  display: block;\\n  margin: auto;\\n  padding: 10px 12px;\\n  text-align: center;\\n  transition: all 200ms;\\n  white-space: nowrap;\\n  user-select: none;\\n  -webkit-user-select: none;\\n  touch-action: manipulation;\\n}\\n\\n.btn:hover {\\n  background-color: rgba(39, 39, 39, 0.2);\\n}\\n\\n.btn-medium {\\n  font-size: 1.2rem;\\n  padding: 10px 14px;\\n  margin: 2% 5%;\\n  display: inline;\\n}\\n\\n.div-medium {\\n  text-align: center;\\n}\\n\\n.input {\\n  display: block;\\n  margin: auto;\\n  margin-bottom: 2%;\\n  margin-top: 2%;\\n  text-align: center;\\n  box-shadow: inset #abacaf 0 0 0 2px;\\n  border: 0;\\n  background: rgba(180, 180, 180, 0.3);\\n  appearance: none;\\n  width: 20%;\\n  position: relative;\\n  border-radius: 3px;\\n  padding: 9px 12px;\\n  line-height: 1.4;\\n  color: rgb(203, 203, 203);\\n  font-size: 16px;\\n  font-weight: 400;\\n  height: 40px;\\n  transition: all .2s ease;\\n}\\n\\n.input:hover {\\n  box-shadow: 0 0 0 0 #fff inset, #a24e78 0 0 0 2px;\\n}\\n\\n.input:focus {\\n  background: rgb(144, 144, 144, 0.3);\\n      outline: 0;\\n      box-shadow: 0 0 0 0 #fff inset, #a24e78 0 0 0 3px;\\n}\\n\\n.cloud {\\n  display: block;\\n  margin: auto;\\n  text-align: center;\\n}\\n\\n.hint {\\n  float: left;\\n  padding-left: 2%;\\n  font-weight: 200;\\n  animation: fadeIn 1s;\\n  cursor: crosshair;\\n}\\n\\n.hint:hover {\\n  color: #a24e78;\\n}\\n\\ncode {\\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\\n    monospace;\\n}\\n\\n#share {\\n  display: none;\\n}\\n\\n#buy {\\n  display: none;\\n}\\n\\n#btn-previous-stage {\\n  display: none;\\n}\\n\\n#btn-result {\\n  display: none;\\n}\\n\\n#fact {\\n  animation: fadeIn 1s;\\n  display: block;\\n  margin: auto;\\n  text-align: center;\\n  margin-top: 3rem;\\n  bottom: 1rem;\\n  max-width: 70%;\\n  font-weight: 300;\\n}\\n\\n@keyframes fadeIn {\\n  0% { opacity: 0; }\\n  100% { opacity: 1; }\\n}\\n\\n.grid {\\n  display: flex;\\n  padding-left: 5.5rem;\\n  align-items: center;\\n  justify-content: right;\\n  flex-wrap: wrap;\\n  max-width: 1200px;\\n}\\n\\n.card {\\n  margin: 1rem; \\n  color: inherit;\\n  text-decoration: none;\\n  border-radius: 10px;\\n  transition: color 0.15s ease, border-color 0.15s ease;\\n  max-width: 260px;\\n}\\n\\n.imgPreview {\\n  width: 100%;\\n  border-radius: 10px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOF0udXNlWzJdIS4vc3JjL3N0eWxlcy9nbG9iYWxzLmNzcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUMySDtBQUMzSCw4QkFBOEIsa0hBQTJCO0FBQ3pEO0FBQ0EsOEtBQThLLCtCQUErQixxSUFBcUksY0FBYyw2S0FBNkssd0NBQXdDLHVDQUF1QyxHQUFHLFFBQVEsb0JBQW9CLHVCQUF1QixvQkFBb0IscUJBQXFCLDBCQUEwQixHQUFHLFFBQVEsbUJBQW1CLHVCQUF1QixzQkFBc0IscUJBQXFCLHdCQUF3QixHQUFHLE9BQU8sbUJBQW1CLGlCQUFpQixzQkFBc0IseUJBQXlCLHVCQUF1QixzQkFBc0IscUJBQXFCLG1CQUFtQixHQUFHLFVBQVUsNENBQTRDLHVCQUF1QixvQkFBb0IsbUJBQW1CLHNCQUFzQiwwQkFBMEIsNEZBQTRGLG9CQUFvQixxQkFBcUIsc0JBQXNCLHFCQUFxQixtQkFBbUIsaUJBQWlCLHVCQUF1Qix1QkFBdUIsMEJBQTBCLHdCQUF3QixzQkFBc0IsOEJBQThCLCtCQUErQixHQUFHLGdCQUFnQiw0Q0FBNEMsR0FBRyxpQkFBaUIsc0JBQXNCLHVCQUF1QixrQkFBa0Isb0JBQW9CLEdBQUcsaUJBQWlCLHVCQUF1QixHQUFHLFlBQVksbUJBQW1CLGlCQUFpQixzQkFBc0IsbUJBQW1CLHVCQUF1Qix3Q0FBd0MsY0FBYyx5Q0FBeUMscUJBQXFCLGVBQWUsdUJBQXVCLHVCQUF1QixzQkFBc0IscUJBQXFCLDhCQUE4QixvQkFBb0IscUJBQXFCLGlCQUFpQiw2QkFBNkIsR0FB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LHVCQUF1QixzQkFBc0IscUJBQXFCLDhCQUE4QixvQkFBb0IscUJBQXFCLGlCQUFpQiw2QkFBNkIsR0FBRyxrQkFBa0Isc0RBQXNELEdBQUcsa0JBQWtCLHdDQUF3QyxtQkFBbUIsMERBQTBELEdBQUcsWUFBWSxtQkFBbUIsaUJBQWlCLHVCQUF1QixHQUFHLFdBQVcsZ0JBQWdCLHFCQUFxQixxQkFBcUIseUJBQXlCLHNCQUFzQixHQUFHLGlCQUFpQixtQkFBbUIsR0FBRyxVQUFVLHlGQUF5RixHQUFHLFlBQVksa0JBQWtCLEdBQUcsVUFBVSxrQkFBa0IsR0FBRyx5QkFBeUIsa0JBQWtCLEdBQUcsaUJBQWlCLGtCQUFrQixHQUFHLFdBQVcseUJBQXlCLG1CQUFtQixpQkFBaUIsdUJBQXVCLHFCQUFxQixpQkFBaUIsbUJBQW1CLHFCQUFxQixHQUFHLHVCQUF1QixTQUFTLGFBQWEsV0FBVyxhQUFhLEdBQUcsV0FBVyxrQkFBa0IseUJBQXlCLHdCQUF3QiwyQkFBMkIsb0JBQW9CLHNCQUFzQixHQUFHLFdBQVcsa0JBQWtCLG1CQUFtQiwwQkFBMEIsd0JBQXdCLDBEQUEwRCxxQkFBcUIsR0FBRyxpQkFBaUIsZ0JBQWdCLHdCQUF3QixHQUFHLHFCQUFxQjtBQUM5cFI7QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzPzBmMzciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIFRPRE86XFxuKiAtIEFkZCBzdXBwb3J0IGZvciBtZWRpYSBxdWVyaWVzID8/P1xcbiogcGVyaGFwcyBoaWdobGlnaHQgd29yZHMgaW4gd29yZCBjbG91ZCB0byBzdWdnZXN0IHRoZXkgYXJlIGNsaWNrYWJsZVxcbiovXFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTY4LDkwLDk0KTtcXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMTY4LDkwLDk0LDEpIDAlLCByZ2JhKDIxOCwxNzMsODUsMSkgNDglLCByZ2JhKDcwLDIwMCwxNjksMSkgODglLCByZ2JhKDEzOSwxNjksMTc1LDEpIDEwMCUpO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgJ1JvYm90bycsICdPeHlnZW4nLFxcbiAgICAnVWJ1bnR1JywgJ0NhbnRhcmVsbCcsICdGaXJhIFNhbnMnLCAnRHJvaWQgU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsXFxuICAgIHNhbnMtc2VyaWY7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxufVxcblxcbmgxIHtcXG4gIG1hcmdpbi10b3A6IDEwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbmgzIHtcXG4gIG1hcmdpbi10b3A6IDQlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxucCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmctdG9wOiA0cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDRyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBtYXgtd2lkdGg6IDYwJTtcXG59XFxuXFxuLmJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgMzksIDAuMSk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3JkZXItd2lkdGg6IDA7XFxuICBjb2xvcjogIzMzMzMzMztcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIYWFzIEdyb3QgVGV4dCBSIFdlYlxcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiAxMHB4IDEycHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxufVxcblxcbi5idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDM5LCAwLjIpO1xcbn1cXG5cXG4uYnRuLW1lZGl1bSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHBhZGRpbmc6IDEwcHggMTRweDtcXG4gIG1hcmdpbjogMiUgNSU7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbi5kaXYtbWVkaXVtIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmlucHV0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMiU7XFxuICBtYXJnaW4tdG9wOiAyJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IGluc2V0ICNhYmFjYWYgMCAwIDAgMnB4O1xcbiAgYm9yZGVyOiAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgxODAsIDE4MCwgMTgwLCAwLjMpO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIHdpZHRoOiAyMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwYWRkaW5nOiA5cHggMTJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBjb2xvcjogcmdiKDIwMywgMjAzLCAyMDMpO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGhlaWdodDogNDBweDtcXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcXG59XFxuXFxuLmlucHV0OmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAgI2ZmZiBpbnNldCwgI2EyNGU3OCAwIDAgMCAycHg7XFxufVxcblxcbi5pbnB1dDpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTQ0LCAxNDQsIDE0NCwgMC4zKTtcXG4gICAgICBvdXRsaW5lOiAwO1xcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgI2ZmZiBpbnNldCwgI2EyNGU3OCAwIDAgMCAzcHg7XFxufVxcblxcbi5jbG91ZCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmhpbnQge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBwYWRkaW5nLWxlZnQ6IDIlO1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gIGFuaW1hdGlvbjogZmFkZUluIDFzO1xcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcblxcbi5oaW50OmhvdmVyIHtcXG4gIGNvbG9yOiAjYTI0ZTc4O1xcbn1cXG5cXG5jb2RlIHtcXG4gIGZvbnQtZmFtaWx5OiBzb3VyY2UtY29kZS1wcm8sIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCAnQ291cmllciBOZXcnLFxcbiAgICBtb25vc3BhY2U7XFxufVxcblxcbiNzaGFyZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jYnV5IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNidG4tcHJldmlvdXMtc3RhZ2Uge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2J0bi1yZXN1bHQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2ZhY3Qge1xcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMXM7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDNyZW07XFxuICBib3R0b206IDFyZW07XFxuICBtYXgtd2lkdGg6IDcwJTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gIDAlIHsgb3BhY2l0eTogMDsgfVxcbiAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cXG59XFxuXFxuLmdyaWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmctbGVmdDogNS41cmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG59XFxuXFxuLmNhcmQge1xcbiAgbWFyZ2luOiAxcmVtOyBcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlO1xcbiAgbWF4LXdpZHRoOiAyNjBweDtcXG59XFxuXFxuLmltZ1ByZXZpZXcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlcy9nbG9iYWxzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7O0FBRUQ7RUFDRSwwQkFBMEI7QUFDNUIsa0lBQWtJO0VBQ2hJLFNBQVM7RUFDVDs7Y0FFWTtFQUNaLG1DQUFtQztFQUNuQyxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsbUZBQW1GO0VBQ25GLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUNuQyxTQUFTO0VBQ1Qsb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxtQ0FBbUM7TUFDL0IsVUFBVTtNQUNWLGlEQUFpRDtBQUN2RDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTthQUNXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsS0FBSyxVQUFVLEVBQUU7RUFDakIsT0FBTyxVQUFVLEVBQUU7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixxREFBcUQ7RUFDckQsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBUT0RPOlxcbiogLSBBZGQgc3VwcG9ydCBmb3IgbWVkaWEgcXVlcmllcyA/Pz9cXG4qIHBlcmhhcHMgaGlnaGxpZ2h0IHdvcmRzIGluIHdvcmQgY2xvdWQgdG8gc3VnZ2VzdCB0aGV5IGFyZSBjbGlja2FibGVcXG4qL1xcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogcmdiKDE2OCw5MCw5NCk7XFxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDE2OCw5MCw5NCwxKSAwJSwgcmdiYSgyMTgsMTczLDg1LDEpIDQ4JSwgcmdiYSg3MCwyMDAsMTY5LDEpIDg4JSwgcmdiYSgxMzksMTY5LDE3NSwxKSAxMDAlKTtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsICdSb2JvdG8nLCAnT3h5Z2VuJyxcXG4gICAgJ1VidW50dScsICdDYW50YXJlbGwnLCAnRmlyYSBTYW5zJywgJ0Ryb2lkIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLFxcbiAgICBzYW5zLXNlcmlmO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbn1cXG5cXG5oMSB7XFxuICBtYXJnaW4tdG9wOiAxMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG5oMyB7XFxuICBtYXJnaW4tdG9wOiA0JTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbnAge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nLXRvcDogNHJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiA0cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbWF4LXdpZHRoOiA2MCU7XFxufVxcblxcbi5idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDM5LCAwLjEpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbiAgY29sb3I6ICMzMzMzMzM7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGFhcyBHcm90IFRleHQgUiBXZWJcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMTBweCAxMnB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcbn1cXG5cXG4uYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCAzOSwgMC4yKTtcXG59XFxuXFxuLmJ0bi1tZWRpdW0ge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBwYWRkaW5nOiAxMHB4IDE0cHg7XFxuICBtYXJnaW46IDIlIDUlO1xcbiAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG4uZGl2LW1lZGl1bSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5pbnB1dCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDIlO1xcbiAgbWFyZ2luLXRvcDogMiU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiBpbnNldCAjYWJhY2FmIDAgMCAwIDJweDtcXG4gIGJvcmRlcjogMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMTgwLCAxODAsIDE4MCwgMC4zKTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICB3aWR0aDogMjAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcGFkZGluZzogOXB4IDEycHg7XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgY29sb3I6IHJnYigyMDMsIDIwMywgMjAzKTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XFxufVxcblxcbi5pbnB1dDpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwIDAgMCAwICNmZmYgaW5zZXQsICNhMjRlNzggMCAwIDAgMnB4O1xcbn1cXG5cXG4uaW5wdXQ6Zm9jdXMge1xcbiAgYmFja2dyb3VuZDogcmdiKDE0NCwgMTQ0LCAxNDQsIDAuMyk7XFxuICAgICAgb3V0bGluZTogMDtcXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAwICNmZmYgaW5zZXQsICNhMjRlNzggMCAwIDAgM3B4O1xcbn1cXG5cXG4uY2xvdWQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5oaW50IHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgcGFkZGluZy1sZWZ0OiAyJTtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICBhbmltYXRpb246IGZhZGVJbiAxcztcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4uaGludDpob3ZlciB7XFxuICBjb2xvcjogI2EyNGU3ODtcXG59XFxuXFxuY29kZSB7XFxuICBmb250LWZhbWlseTogc291cmNlLWNvZGUtcHJvLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgJ0NvdXJpZXIgTmV3JyxcXG4gICAgbW9ub3NwYWNlO1xcbn1cXG5cXG4jc2hhcmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2J1eSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jYnRuLXByZXZpb3VzLXN0YWdlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNidG4tcmVzdWx0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNmYWN0IHtcXG4gIGFuaW1hdGlvbjogZmFkZUluIDFzO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgYm90dG9tOiAxcmVtO1xcbiAgbWF4LXdpZHRoOiA3MCU7XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAwJSB7IG9wYWNpdHk6IDA7IH1cXG4gIDEwMCUgeyBvcGFjaXR5OiAxOyB9XFxufVxcblxcbi5ncmlkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nLWxlZnQ6IDUuNXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxufVxcblxcbi5jYXJkIHtcXG4gIG1hcmdpbjogMXJlbTsgXFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcXG4gIG1heC13aWR0aDogMjYwcHg7XFxufVxcblxcbi5pbWdQcmV2aWV3IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./src/styles/globals.css\n"));

/***/ })

});