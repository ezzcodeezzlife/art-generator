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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_assert_this_initialized.mjs */ \"./node_modules/@swc/helpers/src/_assert_this_initialized.mjs\");\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _dataFile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataFile */ \"./src/Components/dataFile.js\");\n/* harmony import */ var _dataFile__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dataFile__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\n\n\n\n\n/***\n * Inspiration for the user\n * \n * Tips are provided from predefined arrays of contextually\n * relevant keywords.\n * \n * Based on stage of the dialogue, different array is used, from which\n * random words are selected to be shown.\n * \n */ var HintCloud = /*#__PURE__*/ function(_Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(HintCloud, _Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(HintCloud);\n    function HintCloud() {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, HintCloud);\n        var _this;\n        _this = _super.apply(this, arguments);\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_this), \"state\", {\n            NUM_FACTS: 10,\n            INTERVAL_LENGTH: 3000,\n            hint_elements: [],\n            interval: null\n        });\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_this), \"getStage\", function(medium, stage) {\n            if (medium !== \"\") {\n                var stageName = _dataFile__WEBPACK_IMPORTED_MODULE_2__.Prompts[medium].lookup[String(stage - 1)];\n                return _dataFile__WEBPACK_IMPORTED_MODULE_2__.Facts[stageName];\n            } else {\n                return [];\n            }\n        });\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_this), \"generateHints\", function() {\n            //gereate NUM_FACTS random hints from given stage\n            //create a <p> element for each hint\n            // Shuffle array\n            var shuffled = _this.getStage(_this.props.medium, _this.props.stage).sort(function() {\n                return 0.5 - Math.random();\n            });\n            // Get sub-array of first n elements after shuffled\n            var selected = shuffled.slice(0, _this.state.NUM_FACTS);\n            return selected;\n        });\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_this), \"setupHints\", function() {\n            //create the elements which will hold the hints\n            var firstSet = _this.generateHints();\n            for(var i = 0; i < firstSet.length; i++){\n                var para = document.createElement(\"p\");\n                para.className = \"hint\";\n                para.innerHTML = firstSet[i];\n                _this.state.hint_elements.push(para);\n                document.querySelector(\"div\").appendChild(para);\n            }\n        });\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_this), \"populateHints\", function() {\n            //setup the elements for hints\n            _this.setupHints();\n            //change the hint cloud every INTERVAL_LENGTH milliseconds\n            _this.state.interval = setInterval(function() {\n                //generate new hints\n                var newHints = _this.generateHints();\n                //replace text in existing hints\n                for(var i = 0; i < _this.state.hint_elements.length; i++){\n                    _this.state.hint_elements[i].innerHTML = newHints[i];\n                }\n            }, _this.state.INTERVAL_LENGTH);\n        });\n        return _this;\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(HintCloud, [\n        {\n            key: \"componentDidMount\",\n            value: function componentDidMount() {\n                this.populateHints();\n            }\n        },\n        {\n            key: \"componentWillUnmount\",\n            value: function componentWillUnmount() {\n                clearInterval(this.state.interval);\n                //remove para elements from the page    \n                this.state.hint_elements.forEach(function(element) {\n                    element.remove();\n                });\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                    fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/art-generator/src/Components/hintCloud.js\",\n                    lineNumber: 93,\n                    columnNumber: 13\n                }, this);\n            }\n        }\n    ]);\n    return HintCloud;\n}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));\n/* harmony default export */ __webpack_exports__[\"default\"] = (HintCloud);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUdNLFFBQVEsQ0FBQ1osQ0FBQyxDQUFDLENBQUM7aUJBQ3ZEO2FBQ0osRUFBRSxNQUFLckIsS0FBSyxDQUFDRSxlQUFlLENBQUMsQ0FBQztTQUVsQzs7Ozs7WUFqRURnQyxHQUFpQixFQUFqQkEsbUJBQWlCO21CQUFqQkEsU0FBQUEsaUJBQWlCLEdBQUc7Z0JBQ2hCLElBQUksQ0FBQ0gsYUFBYSxFQUFFLENBQUM7YUFDeEI7OztZQUVESSxHQUFvQixFQUFwQkEsc0JBQW9CO21CQUFwQkEsU0FBQUEsb0JBQW9CLEdBQUc7Z0JBQ25CQyxhQUFhLENBQUMsSUFBSSxDQUFDcEMsS0FBSyxDQUFDSSxRQUFRLENBQUMsQ0FBQztnQkFDbkMsd0NBQXdDO2dCQUN4QyxJQUFJLENBQUNKLEtBQUssQ0FBQ0csYUFBYSxDQUFDa0MsT0FBTyxDQUFDQyxTQUFBQSxPQUFPLEVBQUk7b0JBQ3hDQSxPQUFPLENBQUNDLE1BQU0sRUFBRSxDQUFDO2lCQUNwQixDQUFDLENBQUM7YUFFTjs7O1lBd0REQyxHQUFNLEVBQU5BLFFBQU07bUJBQU5BLFNBQUFBLE1BQU0sR0FBRztnQkFDTCxxQkFDSSw4REFBQ0MsS0FBRzs7Ozt3QkFFRSxDQUVUO2FBQ0o7Ozs7Q0FHSixDQXRGd0I3Qyx3REFBZSxDQXNGdkM7QUFFRCwrREFBZUcsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db21wb25lbnRzL2hpbnRDbG91ZC5qcz9kY2MzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZhY3RzLCBQcm9tcHRzIH0gZnJvbSAnLi9kYXRhRmlsZSc7XG5cbi8qKipcbiAqIEluc3BpcmF0aW9uIGZvciB0aGUgdXNlclxuICogXG4gKiBUaXBzIGFyZSBwcm92aWRlZCBmcm9tIHByZWRlZmluZWQgYXJyYXlzIG9mIGNvbnRleHR1YWxseVxuICogcmVsZXZhbnQga2V5d29yZHMuXG4gKiBcbiAqIEJhc2VkIG9uIHN0YWdlIG9mIHRoZSBkaWFsb2d1ZSwgZGlmZmVyZW50IGFycmF5IGlzIHVzZWQsIGZyb20gd2hpY2hcbiAqIHJhbmRvbSB3b3JkcyBhcmUgc2VsZWN0ZWQgdG8gYmUgc2hvd24uXG4gKiBcbiAqL1xuXG4gY2xhc3MgSGludENsb3VkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHN0YXRlID0ge1xuICAgICAgICBOVU1fRkFDVFM6IDEwLFxuICAgICAgICBJTlRFUlZBTF9MRU5HVEg6IDMwMDAsXG4gICAgICAgIGhpbnRfZWxlbWVudHM6IFtdLFxuICAgICAgICBpbnRlcnZhbDogbnVsbCxcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5wb3B1bGF0ZUhpbnRzKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zdGF0ZS5pbnRlcnZhbCk7XG4gICAgICAgIC8vcmVtb3ZlIHBhcmEgZWxlbWVudHMgZnJvbSB0aGUgcGFnZSAgICBcbiAgICAgICAgdGhpcy5zdGF0ZS5oaW50X2VsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZ2V0U3RhZ2UgPSAobWVkaXVtLCBzdGFnZSkgPT4ge1xuICAgICAgICBpZihtZWRpdW0gIT09IFwiXCIpIHtcbiAgICAgICAgICAgIGxldCBzdGFnZU5hbWUgPSBQcm9tcHRzW21lZGl1bV0ubG9va3VwW1N0cmluZyhzdGFnZS0xKV07XG4gICAgICAgICAgICByZXR1cm4gRmFjdHNbc3RhZ2VOYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZ2VuZXJhdGVIaW50cyA9ICgpID0+IHtcbiAgICAgICAgLy9nZXJlYXRlIE5VTV9GQUNUUyByYW5kb20gaGludHMgZnJvbSBnaXZlbiBzdGFnZVxuICAgICAgICAvL2NyZWF0ZSBhIDxwPiBlbGVtZW50IGZvciBlYWNoIGhpbnRcblxuICAgICAgICAvLyBTaHVmZmxlIGFycmF5XG4gICAgICAgIGNvbnN0IHNodWZmbGVkID0gdGhpcy5nZXRTdGFnZSh0aGlzLnByb3BzLm1lZGl1bSwgdGhpcy5wcm9wcy5zdGFnZSApLnNvcnQoKCkgPT4gMC41IC0gTWF0aC5yYW5kb20oKSk7XG5cbiAgICAgICAgLy8gR2V0IHN1Yi1hcnJheSBvZiBmaXJzdCBuIGVsZW1lbnRzIGFmdGVyIHNodWZmbGVkXG4gICAgICAgIGxldCBzZWxlY3RlZCA9IHNodWZmbGVkLnNsaWNlKDAsIHRoaXMuc3RhdGUuTlVNX0ZBQ1RTKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBzZWxlY3RlZDtcbiAgICB9XG5cbiAgICBzZXR1cEhpbnRzID0gKCkgPT4ge1xuICAgICAgICAvL2NyZWF0ZSB0aGUgZWxlbWVudHMgd2hpY2ggd2lsbCBob2xkIHRoZSBoaW50c1xuICAgICAgICBcbiAgICAgICAgbGV0IGZpcnN0U2V0ID0gdGhpcy5nZW5lcmF0ZUhpbnRzKCk7XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGZpcnN0U2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHBhcmEuY2xhc3NOYW1lID0gXCJoaW50XCI7XG4gICAgICAgICAgICBwYXJhLmlubmVySFRNTCA9IGZpcnN0U2V0W2ldO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5oaW50X2VsZW1lbnRzLnB1c2gocGFyYSk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYnKS5hcHBlbmRDaGlsZChwYXJhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBvcHVsYXRlSGludHMgPSAoKSA9PiB7XG5cbiAgICAgICAgLy9zZXR1cCB0aGUgZWxlbWVudHMgZm9yIGhpbnRzXG4gICAgICAgIHRoaXMuc2V0dXBIaW50cygpO1xuXG4gICAgICAgIC8vY2hhbmdlIHRoZSBoaW50IGNsb3VkIGV2ZXJ5IElOVEVSVkFMX0xFTkdUSCBtaWxsaXNlY29uZHNcbiAgICAgICAgdGhpcy5zdGF0ZS5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIC8vZ2VuZXJhdGUgbmV3IGhpbnRzXG4gICAgICAgICAgICBsZXQgbmV3SGludHMgPSB0aGlzLmdlbmVyYXRlSGludHMoKTtcbiAgICAgICAgICAgIC8vcmVwbGFjZSB0ZXh0IGluIGV4aXN0aW5nIGhpbnRzXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5oaW50X2VsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5oaW50X2VsZW1lbnRzW2ldLmlubmVySFRNTCA9IG5ld0hpbnRzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzLnN0YXRlLklOVEVSVkFMX0xFTkdUSCk7XG5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgIClcbiAgICB9IFxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGludENsb3VkOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkZhY3RzIiwiUHJvbXB0cyIsIkhpbnRDbG91ZCIsInN0YXRlIiwiTlVNX0ZBQ1RTIiwiSU5URVJWQUxfTEVOR1RIIiwiaGludF9lbGVtZW50cyIsImludGVydmFsIiwiZ2V0U3RhZ2UiLCJtZWRpdW0iLCJzdGFnZSIsInN0YWdlTmFtZSIsImxvb2t1cCIsIlN0cmluZyIsImdlbmVyYXRlSGludHMiLCJzaHVmZmxlZCIsInByb3BzIiwic29ydCIsIk1hdGgiLCJyYW5kb20iLCJzZWxlY3RlZCIsInNsaWNlIiwic2V0dXBIaW50cyIsImZpcnN0U2V0IiwiaSIsImxlbmd0aCIsInBhcmEiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJpbm5lckhUTUwiLCJwdXNoIiwicXVlcnlTZWxlY3RvciIsImFwcGVuZENoaWxkIiwicG9wdWxhdGVIaW50cyIsInNldEludGVydmFsIiwibmV3SGludHMiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiY2xlYXJJbnRlcnZhbCIsImZvckVhY2giLCJlbGVtZW50IiwicmVtb3ZlIiwicmVuZGVyIiwiZGl2IiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Components/hintCloud.js\n"));

/***/ })

});