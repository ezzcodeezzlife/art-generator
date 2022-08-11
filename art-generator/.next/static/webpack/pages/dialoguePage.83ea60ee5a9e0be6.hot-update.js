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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_assert_this_initialized.mjs */ \"./node_modules/@swc/helpers/src/_assert_this_initialized.mjs\");\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _dataFile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataFile */ \"./src/Components/dataFile.js\");\n/* harmony import */ var _dataFile__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dataFile__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\n\n\n\n\n/***\n * Inspiration for the user\n * \n * Tips are provided from predefined arrays of contextually\n * relevant keywords.\n * \n * Based on stage of the dialogue, different array is used, from which\n * random words are selected to be shown.\n * \n */ var HintCloud = /*#__PURE__*/ function(_Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(HintCloud, _Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(HintCloud);\n    function HintCloud() {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, HintCloud);\n        var _this;\n        _this = _super.apply(this, arguments);\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_this), \"state\", {\n            NUM_FACTS: 10,\n            INTERVAL_LENGTH: 3000,\n            hint_elements: [],\n            interval: null\n        });\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_this), \"generateHints\", function(stage) {\n            //gereate NUM_FACTS random hints from given stage\n            //create a <p> element for each hint\n            // Shuffle array\n            var shuffled = _dataFile__WEBPACK_IMPORTED_MODULE_2__.Facts[stage].sort(function() {\n                return 0.5 - Math.random();\n            });\n            // Get sub-array of first n elements after shuffled\n            var selected = shuffled.slice(0, _this.state.NUM_FACTS);\n            return selected;\n        });\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_this), \"setupHints\", function() {\n            //create the elements which will hold the hints\n            var firstSet = _this.generateHints(_this.props.currentStage);\n            for(var i = 0; i < firstSet.length; i++){\n                var para = document.createElement(\"p\");\n                para.className = \"hint\";\n                para.innerHTML = firstSet[i];\n                _this.state.hint_elements.push(para);\n                document.querySelector(\"div\").appendChild(para);\n            }\n        });\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_this), \"populateHints\", function() {\n            //setup the elements for hints\n            _this.setupHints();\n            //change the hint cloud every INTERVAL_LENGTH milliseconds\n            _this.state.interval = setInterval(function() {\n                //generate new hints\n                var newHints = _this.generateHints(_this.props.currentStage);\n                //replace text in existing hints\n                for(var i = 0; i < _this.state.hint_elements.length; i++){\n                    _this.state.hint_elements[i].innerHTML = newHints[i];\n                }\n            }, _this.state.INTERVAL_LENGTH);\n        });\n        return _this;\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(HintCloud, [\n        {\n            key: \"componentDidMount\",\n            value: function componentDidMount() {\n                this.populateHints();\n                console.log(this.props.currentStage);\n            }\n        },\n        {\n            key: \"componentWillUnmount\",\n            value: function componentWillUnmount() {\n                clearInterval(this.state.interval);\n                //remove para elements from the page    \n                this.state.hint_elements.forEach(function(element) {\n                    element.remove();\n                });\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                    fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/art-generator/src/Components/hintCloud.js\",\n                    lineNumber: 84,\n                    columnNumber: 13\n                }, this);\n            }\n        }\n    ]);\n    return HintCloud;\n}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));\n/* harmony default export */ __webpack_exports__[\"default\"] = (HintCloud);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBb0I7bUJBQXBCQSxTQUFBQSxvQkFBb0IsR0FBRztnQkFDbkJDLGFBQWEsQ0FBQyxJQUFJLENBQUNsQyxLQUFLLENBQUNJLFFBQVEsQ0FBQyxDQUFDO2dCQUNuQyx3Q0FBd0M7Z0JBQ3hDLElBQUksQ0FBQ0osS0FBSyxDQUFDRyxhQUFhLENBQUNnQyxPQUFPLENBQUNDLFNBQUFBLE9BQU8sRUFBSTtvQkFDeENBLE9BQU8sQ0FBQ0MsTUFBTSxFQUFFLENBQUM7aUJBQ3BCLENBQUMsQ0FBQzthQUVOOzs7WUE4Q0RDLEdBQU0sRUFBTkEsUUFBTTttQkFBTkEsU0FBQUEsTUFBTSxHQUFHO2dCQUNMLHFCQUNJLDhEQUFDQyxLQUFHOzs7O3dCQUVFLENBRVQ7YUFDSjs7OztDQUdKLENBN0V3QjFDLHdEQUFlLENBNkV2QztBQUVELCtEQUFlRSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvaGludENsb3VkLmpzP2RjYzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmFjdHMgfSBmcm9tICcuL2RhdGFGaWxlJztcblxuLyoqKlxuICogSW5zcGlyYXRpb24gZm9yIHRoZSB1c2VyXG4gKiBcbiAqIFRpcHMgYXJlIHByb3ZpZGVkIGZyb20gcHJlZGVmaW5lZCBhcnJheXMgb2YgY29udGV4dHVhbGx5XG4gKiByZWxldmFudCBrZXl3b3Jkcy5cbiAqIFxuICogQmFzZWQgb24gc3RhZ2Ugb2YgdGhlIGRpYWxvZ3VlLCBkaWZmZXJlbnQgYXJyYXkgaXMgdXNlZCwgZnJvbSB3aGljaFxuICogcmFuZG9tIHdvcmRzIGFyZSBzZWxlY3RlZCB0byBiZSBzaG93bi5cbiAqIFxuICovXG5cbiBjbGFzcyBIaW50Q2xvdWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIE5VTV9GQUNUUzogMTAsXG4gICAgICAgIElOVEVSVkFMX0xFTkdUSDogMzAwMCxcbiAgICAgICAgaGludF9lbGVtZW50czogW10sXG4gICAgICAgIGludGVydmFsOiBudWxsLFxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnBvcHVsYXRlSGludHMoKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5jdXJyZW50U3RhZ2UpXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zdGF0ZS5pbnRlcnZhbCk7XG4gICAgICAgIC8vcmVtb3ZlIHBhcmEgZWxlbWVudHMgZnJvbSB0aGUgcGFnZSAgICBcbiAgICAgICAgdGhpcy5zdGF0ZS5oaW50X2VsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZ2VuZXJhdGVIaW50cyA9IChzdGFnZSkgPT4ge1xuICAgICAgICAvL2dlcmVhdGUgTlVNX0ZBQ1RTIHJhbmRvbSBoaW50cyBmcm9tIGdpdmVuIHN0YWdlXG4gICAgICAgIC8vY3JlYXRlIGEgPHA+IGVsZW1lbnQgZm9yIGVhY2ggaGludFxuXG4gICAgICAgIC8vIFNodWZmbGUgYXJyYXlcbiAgICAgICAgY29uc3Qgc2h1ZmZsZWQgPSBGYWN0c1tzdGFnZV0uc29ydCgoKSA9PiAwLjUgLSBNYXRoLnJhbmRvbSgpKTtcblxuICAgICAgICAvLyBHZXQgc3ViLWFycmF5IG9mIGZpcnN0IG4gZWxlbWVudHMgYWZ0ZXIgc2h1ZmZsZWRcbiAgICAgICAgbGV0IHNlbGVjdGVkID0gc2h1ZmZsZWQuc2xpY2UoMCwgdGhpcy5zdGF0ZS5OVU1fRkFDVFMpO1xuXG4gICAgICAgIHJldHVybiBzZWxlY3RlZDtcbiAgICB9XG5cbiAgICBzZXR1cEhpbnRzID0gKCkgPT4ge1xuICAgICAgICAvL2NyZWF0ZSB0aGUgZWxlbWVudHMgd2hpY2ggd2lsbCBob2xkIHRoZSBoaW50c1xuICAgICAgICBcbiAgICAgICAgbGV0IGZpcnN0U2V0ID0gdGhpcy5nZW5lcmF0ZUhpbnRzKHRoaXMucHJvcHMuY3VycmVudFN0YWdlKTtcbiAgICAgICAgXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBmaXJzdFNldC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBwYXJhLmNsYXNzTmFtZSA9IFwiaGludFwiO1xuICAgICAgICAgICAgcGFyYS5pbm5lckhUTUwgPSBmaXJzdFNldFtpXTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuaGludF9lbGVtZW50cy5wdXNoKHBhcmEpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2JykuYXBwZW5kQ2hpbGQocGFyYSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwb3B1bGF0ZUhpbnRzID0gKCkgPT4ge1xuXG4gICAgICAgIC8vc2V0dXAgdGhlIGVsZW1lbnRzIGZvciBoaW50c1xuICAgICAgICB0aGlzLnNldHVwSGludHMoKTtcblxuICAgICAgICAvL2NoYW5nZSB0aGUgaGludCBjbG91ZCBldmVyeSBJTlRFUlZBTF9MRU5HVEggbWlsbGlzZWNvbmRzXG4gICAgICAgIHRoaXMuc3RhdGUuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAvL2dlbmVyYXRlIG5ldyBoaW50c1xuICAgICAgICAgICAgbGV0IG5ld0hpbnRzID0gdGhpcy5nZW5lcmF0ZUhpbnRzKHRoaXMucHJvcHMuY3VycmVudFN0YWdlKTtcbiAgICAgICAgICAgIC8vcmVwbGFjZSB0ZXh0IGluIGV4aXN0aW5nIGhpbnRzXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5oaW50X2VsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5oaW50X2VsZW1lbnRzW2ldLmlubmVySFRNTCA9IG5ld0hpbnRzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzLnN0YXRlLklOVEVSVkFMX0xFTkdUSCk7XG5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgIClcbiAgICB9IFxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGludENsb3VkOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkZhY3RzIiwiSGludENsb3VkIiwic3RhdGUiLCJOVU1fRkFDVFMiLCJJTlRFUlZBTF9MRU5HVEgiLCJoaW50X2VsZW1lbnRzIiwiaW50ZXJ2YWwiLCJnZW5lcmF0ZUhpbnRzIiwic3RhZ2UiLCJzaHVmZmxlZCIsInNvcnQiLCJNYXRoIiwicmFuZG9tIiwic2VsZWN0ZWQiLCJzbGljZSIsInNldHVwSGludHMiLCJmaXJzdFNldCIsInByb3BzIiwiY3VycmVudFN0YWdlIiwiaSIsImxlbmd0aCIsInBhcmEiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJpbm5lckhUTUwiLCJwdXNoIiwicXVlcnlTZWxlY3RvciIsImFwcGVuZENoaWxkIiwicG9wdWxhdGVIaW50cyIsInNldEludGVydmFsIiwibmV3SGludHMiLCJjb21wb25lbnREaWRNb3VudCIsImNvbnNvbGUiLCJsb2ciLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImNsZWFySW50ZXJ2YWwiLCJmb3JFYWNoIiwiZWxlbWVudCIsInJlbW92ZSIsInJlbmRlciIsImRpdiIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Components/hintCloud.js\n"));

/***/ })

});