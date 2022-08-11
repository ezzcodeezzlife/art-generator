"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dialoguePage",{

/***/ "./src/Components/hintCloud.js":
/*!*************************************!*\
  !*** ./src/Components/hintCloud.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_assert_this_initialized.mjs */ \"./node_modules/@swc/helpers/src/_assert_this_initialized.mjs\");\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _dataFile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataFile */ \"./src/Components/dataFile.js\");\n/* harmony import */ var _dataFile__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dataFile__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\n\n\n\n\n/***\n * Inspiration for the user\n * \n * Tips are provided from predefined arrays of contextually\n * relevant keywords.\n * \n * Based on stage of the dialogue, different array is used, from which\n * random words are selected to be shown.\n * \n */ var HintCloud = /*#__PURE__*/ function(_Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(HintCloud, _Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(HintCloud);\n    function HintCloud() {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, HintCloud);\n        var _this;\n        _this = _super.apply(this, arguments);\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_this), \"state\", {\n            NUM_FACTS: 10,\n            INTERVAL_LENGTH: 3000,\n            hint_elements: [],\n            interval: null\n        });\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_this), \"getStage\", function(medium, stage) {\n            if (medium !== \"\") {\n                var stageName = _dataFile__WEBPACK_IMPORTED_MODULE_2__.Prompts[medium].lookup[String(stage - 1)];\n                return _dataFile__WEBPACK_IMPORTED_MODULE_2__.Facts[stageName];\n            } else {\n                return [];\n            }\n        });\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_this), \"generateHints\", function() {\n            //gereate NUM_FACTS random hints from given stage\n            //create a <p> element for each hint\n            // Shuffle array\n            var shuffled = _this.getStage(_this.props.medium, _this.props.stage).sort(function() {\n                return 0.5 - Math.random();\n            });\n            // Get sub-array of first n elements after shuffled\n            var selected = shuffled.slice(0, _this.state.NUM_FACTS);\n            return selected;\n        });\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_this), \"setupHints\", function() {\n            //create the elements which will hold the hints\n            var firstSet = _this.generateHints();\n            console.log(firstSet);\n            for(var i = 0; i < firstSet.length; i++){\n                var para = document.createElement(\"p\");\n                para.className = \"hint\";\n                para.innerHTML = firstSet[i];\n                _this.state.hint_elements.push(para);\n                document.querySelector(\"div\").appendChild(para);\n            }\n        });\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_this), \"populateHints\", function() {\n            //setup the elements for hints\n            _this.setupHints();\n            //change the hint cloud every INTERVAL_LENGTH milliseconds\n            _this.state.interval = setInterval(function() {\n                //generate new hints\n                var newHints = _this.generateHints(_this.props.currentStage);\n                //replace text in existing hints\n                for(var i = 0; i < _this.state.hint_elements.length; i++){\n                    _this.state.hint_elements[i].innerHTML = newHints[i];\n                }\n            }, _this.state.INTERVAL_LENGTH);\n        });\n        return _this;\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(HintCloud, [\n        {\n            key: \"componentDidMount\",\n            value: function componentDidMount() {\n                this.populateHints();\n            }\n        },\n        {\n            key: \"componentWillUnmount\",\n            value: function componentWillUnmount() {\n                clearInterval(this.state.interval);\n                //remove para elements from the page    \n                this.state.hint_elements.forEach(function(element) {\n                    element.remove();\n                });\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                    fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/art-generator/src/Components/hintCloud.js\",\n                    lineNumber: 95,\n                    columnNumber: 13\n                }, this);\n            }\n        }\n    ]);\n    return HintCloud;\n}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));\n/* harmony default export */ __webpack_exports__[\"default\"] = (HintCloud);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxDQUFFO29CQUNyRCxNQUFLdkIsS0FBSyxDQUFDRyxhQUFhLENBQUNvQixDQUFDLENBQUMsQ0FBQ00sU0FBUyxHQUFHTSxRQUFRLENBQUNaLENBQUMsQ0FBQyxDQUFDO2lCQUN2RDthQUNKLEVBQUUsTUFBS3ZCLEtBQUssQ0FBQ0UsZUFBZSxDQUFDLENBQUM7U0FFbEM7Ozs7O1lBbkVEbUMsR0FBaUIsRUFBakJBLG1CQUFpQjttQkFBakJBLFNBQUFBLGlCQUFpQixHQUFHO2dCQUNoQixJQUFJLENBQUNKLGFBQWEsRUFBRSxDQUFDO2FBQ3hCOzs7WUFFREssR0FBb0IsRUFBcEJBLHNCQUFvQjttQkFBcEJBLFNBQUFBLG9CQUFvQixHQUFHO2dCQUNuQkMsYUFBYSxDQUFDLElBQUksQ0FBQ3ZDLEtBQUssQ0FBQ0ksUUFBUSxDQUFDLENBQUM7Z0JBQ25DLHdDQUF3QztnQkFDeEMsSUFBSSxDQUFDSixLQUFLLENBQUNHLGFBQWEsQ0FBQ3FDLE9BQU8sQ0FBQ0MsU0FBQUEsT0FBTyxFQUFJO29CQUN4Q0EsT0FBTyxDQUFDQyxNQUFNLEVBQUUsQ0FBQztpQkFDcEIsQ0FBQyxDQUFDO2FBRU47OztZQTBEREMsR0FBTSxFQUFOQSxRQUFNO21CQUFOQSxTQUFBQSxNQUFNLEdBQUc7Z0JBQ0wscUJBQ0ksOERBQUNDLEtBQUc7Ozs7d0JBRUUsQ0FFVDthQUNKOzs7O0NBR0osQ0F4RndCaEQsd0RBQWUsQ0F3RnZDO0FBRUQsK0RBQWVHLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvQ29tcG9uZW50cy9oaW50Q2xvdWQuanM/ZGNjMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGYWN0cywgUHJvbXB0cyB9IGZyb20gJy4vZGF0YUZpbGUnO1xuXG4vKioqXG4gKiBJbnNwaXJhdGlvbiBmb3IgdGhlIHVzZXJcbiAqIFxuICogVGlwcyBhcmUgcHJvdmlkZWQgZnJvbSBwcmVkZWZpbmVkIGFycmF5cyBvZiBjb250ZXh0dWFsbHlcbiAqIHJlbGV2YW50IGtleXdvcmRzLlxuICogXG4gKiBCYXNlZCBvbiBzdGFnZSBvZiB0aGUgZGlhbG9ndWUsIGRpZmZlcmVudCBhcnJheSBpcyB1c2VkLCBmcm9tIHdoaWNoXG4gKiByYW5kb20gd29yZHMgYXJlIHNlbGVjdGVkIHRvIGJlIHNob3duLlxuICogXG4gKi9cblxuIGNsYXNzIEhpbnRDbG91ZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgTlVNX0ZBQ1RTOiAxMCxcbiAgICAgICAgSU5URVJWQUxfTEVOR1RIOiAzMDAwLFxuICAgICAgICBoaW50X2VsZW1lbnRzOiBbXSxcbiAgICAgICAgaW50ZXJ2YWw6IG51bGwsXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMucG9wdWxhdGVIaW50cygpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuc3RhdGUuaW50ZXJ2YWwpO1xuICAgICAgICAvL3JlbW92ZSBwYXJhIGVsZW1lbnRzIGZyb20gdGhlIHBhZ2UgICAgXG4gICAgICAgIHRoaXMuc3RhdGUuaGludF9lbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGdldFN0YWdlID0gKG1lZGl1bSwgc3RhZ2UpID0+IHtcbiAgICAgICAgaWYobWVkaXVtICE9PSBcIlwiKSB7XG4gICAgICAgICAgICBsZXQgc3RhZ2VOYW1lID0gUHJvbXB0c1ttZWRpdW1dLmxvb2t1cFtTdHJpbmcoc3RhZ2UtMSldO1xuICAgICAgICAgICAgcmV0dXJuIEZhY3RzW3N0YWdlTmFtZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGdlbmVyYXRlSGludHMgPSAoKSA9PiB7XG4gICAgICAgIC8vZ2VyZWF0ZSBOVU1fRkFDVFMgcmFuZG9tIGhpbnRzIGZyb20gZ2l2ZW4gc3RhZ2VcbiAgICAgICAgLy9jcmVhdGUgYSA8cD4gZWxlbWVudCBmb3IgZWFjaCBoaW50XG5cbiAgICAgICAgLy8gU2h1ZmZsZSBhcnJheVxuICAgICAgICBjb25zdCBzaHVmZmxlZCA9IHRoaXMuZ2V0U3RhZ2UodGhpcy5wcm9wcy5tZWRpdW0sIHRoaXMucHJvcHMuc3RhZ2UgKS5zb3J0KCgpID0+IDAuNSAtIE1hdGgucmFuZG9tKCkpO1xuXG4gICAgICAgIC8vIEdldCBzdWItYXJyYXkgb2YgZmlyc3QgbiBlbGVtZW50cyBhZnRlciBzaHVmZmxlZFxuICAgICAgICBsZXQgc2VsZWN0ZWQgPSBzaHVmZmxlZC5zbGljZSgwLCB0aGlzLnN0YXRlLk5VTV9GQUNUUyk7XG5cbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkO1xuICAgIH1cblxuICAgIHNldHVwSGludHMgPSAoKSA9PiB7XG4gICAgICAgIC8vY3JlYXRlIHRoZSBlbGVtZW50cyB3aGljaCB3aWxsIGhvbGQgdGhlIGhpbnRzXG4gICAgICAgIFxuICAgICAgICBsZXQgZmlyc3RTZXQgPSB0aGlzLmdlbmVyYXRlSGludHMoKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKGZpcnN0U2V0KVxuICAgICAgICBcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGZpcnN0U2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHBhcmEuY2xhc3NOYW1lID0gXCJoaW50XCI7XG4gICAgICAgICAgICBwYXJhLmlubmVySFRNTCA9IGZpcnN0U2V0W2ldO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5oaW50X2VsZW1lbnRzLnB1c2gocGFyYSk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYnKS5hcHBlbmRDaGlsZChwYXJhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBvcHVsYXRlSGludHMgPSAoKSA9PiB7XG5cbiAgICAgICAgLy9zZXR1cCB0aGUgZWxlbWVudHMgZm9yIGhpbnRzXG4gICAgICAgIHRoaXMuc2V0dXBIaW50cygpO1xuXG4gICAgICAgIC8vY2hhbmdlIHRoZSBoaW50IGNsb3VkIGV2ZXJ5IElOVEVSVkFMX0xFTkdUSCBtaWxsaXNlY29uZHNcbiAgICAgICAgdGhpcy5zdGF0ZS5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIC8vZ2VuZXJhdGUgbmV3IGhpbnRzXG4gICAgICAgICAgICBsZXQgbmV3SGludHMgPSB0aGlzLmdlbmVyYXRlSGludHModGhpcy5wcm9wcy5jdXJyZW50U3RhZ2UpO1xuICAgICAgICAgICAgLy9yZXBsYWNlIHRleHQgaW4gZXhpc3RpbmcgaGludHNcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLmhpbnRfZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmhpbnRfZWxlbWVudHNbaV0uaW5uZXJIVE1MID0gbmV3SGludHNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMuc3RhdGUuSU5URVJWQUxfTEVOR1RIKTtcblxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgKVxuICAgIH0gXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBIaW50Q2xvdWQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwiRmFjdHMiLCJQcm9tcHRzIiwiSGludENsb3VkIiwic3RhdGUiLCJOVU1fRkFDVFMiLCJJTlRFUlZBTF9MRU5HVEgiLCJoaW50X2VsZW1lbnRzIiwiaW50ZXJ2YWwiLCJnZXRTdGFnZSIsIm1lZGl1bSIsInN0YWdlIiwic3RhZ2VOYW1lIiwibG9va3VwIiwiU3RyaW5nIiwiZ2VuZXJhdGVIaW50cyIsInNodWZmbGVkIiwicHJvcHMiLCJzb3J0IiwiTWF0aCIsInJhbmRvbSIsInNlbGVjdGVkIiwic2xpY2UiLCJzZXR1cEhpbnRzIiwiZmlyc3RTZXQiLCJjb25zb2xlIiwibG9nIiwiaSIsImxlbmd0aCIsInBhcmEiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJpbm5lckhUTUwiLCJwdXNoIiwicXVlcnlTZWxlY3RvciIsImFwcGVuZENoaWxkIiwicG9wdWxhdGVIaW50cyIsInNldEludGVydmFsIiwibmV3SGludHMiLCJjdXJyZW50U3RhZ2UiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiY2xlYXJJbnRlcnZhbCIsImZvckVhY2giLCJlbGVtZW50IiwicmVtb3ZlIiwicmVuZGVyIiwiZGl2IiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Components/hintCloud.js\n"));

/***/ })

});