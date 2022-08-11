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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_assert_this_initialized.mjs */ \"./node_modules/@swc/helpers/src/_assert_this_initialized.mjs\");\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _dataFile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataFile */ \"./src/Components/dataFile.js\");\n/* harmony import */ var _dataFile__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dataFile__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\n\n\n\n\n/***\n * Inspiration for the user\n * \n * Tips are provided from predefined arrays of contextually\n * relevant keywords.\n * \n * Based on stage of the dialogue, different array is used, from which\n * random words are selected to be shown.\n * \n */ var HintCloud = /*#__PURE__*/ function(_Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(HintCloud, _Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(HintCloud);\n    function HintCloud() {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, HintCloud);\n        var _this;\n        _this = _super.apply(this, arguments);\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_this), \"state\", {\n            NUM_FACTS: 10,\n            INTERVAL_LENGTH: 3000,\n            hint_elements: [],\n            interval: null\n        });\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_this), \"getStage\", function(medium, stage) {\n            if (medium !== \"\") {\n                var stageName = _dataFile__WEBPACK_IMPORTED_MODULE_2__.Prompts[medium].lookup[String(stage - 1)];\n                return _dataFile__WEBPACK_IMPORTED_MODULE_2__.Facts[stageName];\n            } else {\n                console.log(\"medium not defined\");\n                return [];\n            }\n        });\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_this), \"generateHints\", function() {\n            //gereate NUM_FACTS random hints from given stage\n            //create a <p> element for each hint\n            // Shuffle array\n            var shuffled = _this.getStage(_this.props.medium, _this.props.stage).sort(function() {\n                return 0.5 - Math.random();\n            });\n            // Get sub-array of first n elements after shuffled\n            var selected = shuffled.slice(0, _this.state.NUM_FACTS);\n            return selected;\n        });\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_this), \"setupHints\", function() {\n            //create the elements which will hold the hints\n            var firstSet = _this.generateHints();\n            for(var i = 0; i < firstSet.length; i++){\n                var para = document.createElement(\"p\");\n                para.className = \"hint\";\n                para.innerHTML = firstSet[i];\n                _this.state.hint_elements.push(para);\n                document.querySelector(\"div\").appendChild(para);\n            }\n        });\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_this), \"populateHints\", function() {\n            //setup the elements for hints\n            _this.setupHints();\n            //change the hint cloud every INTERVAL_LENGTH milliseconds\n            _this.state.interval = setInterval(function() {\n                //generate new hints\n                var newHints = _this.generateHints(_this.props.currentStage);\n                //replace text in existing hints\n                for(var i = 0; i < _this.state.hint_elements.length; i++){\n                    _this.state.hint_elements[i].innerHTML = newHints[i];\n                }\n            }, _this.state.INTERVAL_LENGTH);\n        });\n        return _this;\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(HintCloud, [\n        {\n            key: \"componentDidMount\",\n            value: function componentDidMount() {\n                this.populateHints();\n            }\n        },\n        {\n            key: \"componentWillUnmount\",\n            value: function componentWillUnmount() {\n                clearInterval(this.state.interval);\n                //remove para elements from the page    \n                this.state.hint_elements.forEach(function(element) {\n                    element.remove();\n                });\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                    fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/art-generator/src/Components/hintCloud.js\",\n                    lineNumber: 94,\n                    columnNumber: 13\n                }, this);\n            }\n        }\n    ]);\n    return HintCloud;\n}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));\n/* harmony default export */ __webpack_exports__[\"default\"] = (HintCloud);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLENBQUU7b0JBQ3JELE1BQUt2QixLQUFLLENBQUNHLGFBQWEsQ0FBQ29CLENBQUMsQ0FBQyxDQUFDTSxTQUFTLEdBQUdNLFFBQVEsQ0FBQ1osQ0FBQyxDQUFDLENBQUM7aUJBQ3ZEO2FBQ0osRUFBRSxNQUFLdkIsS0FBSyxDQUFDRSxlQUFlLENBQUMsQ0FBQztTQUVsQzs7Ozs7WUFsRURtQyxHQUFpQixFQUFqQkEsbUJBQWlCO21CQUFqQkEsU0FBQUEsaUJBQWlCLEdBQUc7Z0JBQ2hCLElBQUksQ0FBQ0osYUFBYSxFQUFFLENBQUM7YUFDeEI7OztZQUVESyxHQUFvQixFQUFwQkEsc0JBQW9CO21CQUFwQkEsU0FBQUEsb0JBQW9CLEdBQUc7Z0JBQ25CQyxhQUFhLENBQUMsSUFBSSxDQUFDdkMsS0FBSyxDQUFDSSxRQUFRLENBQUMsQ0FBQztnQkFDbkMsd0NBQXdDO2dCQUN4QyxJQUFJLENBQUNKLEtBQUssQ0FBQ0csYUFBYSxDQUFDcUMsT0FBTyxDQUFDQyxTQUFBQSxPQUFPLEVBQUk7b0JBQ3hDQSxPQUFPLENBQUNDLE1BQU0sRUFBRSxDQUFDO2lCQUNwQixDQUFDLENBQUM7YUFFTjs7O1lBeUREQyxHQUFNLEVBQU5BLFFBQU07bUJBQU5BLFNBQUFBLE1BQU0sR0FBRztnQkFDTCxxQkFDSSw4REFBQ0MsS0FBRzs7Ozt3QkFFRSxDQUVUO2FBQ0o7Ozs7Q0FHSixDQXZGd0JoRCx3REFBZSxDQXVGdkM7QUFFRCwrREFBZUcsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db21wb25lbnRzL2hpbnRDbG91ZC5qcz9kY2MzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZhY3RzLCBQcm9tcHRzIH0gZnJvbSAnLi9kYXRhRmlsZSc7XG5cbi8qKipcbiAqIEluc3BpcmF0aW9uIGZvciB0aGUgdXNlclxuICogXG4gKiBUaXBzIGFyZSBwcm92aWRlZCBmcm9tIHByZWRlZmluZWQgYXJyYXlzIG9mIGNvbnRleHR1YWxseVxuICogcmVsZXZhbnQga2V5d29yZHMuXG4gKiBcbiAqIEJhc2VkIG9uIHN0YWdlIG9mIHRoZSBkaWFsb2d1ZSwgZGlmZmVyZW50IGFycmF5IGlzIHVzZWQsIGZyb20gd2hpY2hcbiAqIHJhbmRvbSB3b3JkcyBhcmUgc2VsZWN0ZWQgdG8gYmUgc2hvd24uXG4gKiBcbiAqL1xuXG4gY2xhc3MgSGludENsb3VkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHN0YXRlID0ge1xuICAgICAgICBOVU1fRkFDVFM6IDEwLFxuICAgICAgICBJTlRFUlZBTF9MRU5HVEg6IDMwMDAsXG4gICAgICAgIGhpbnRfZWxlbWVudHM6IFtdLFxuICAgICAgICBpbnRlcnZhbDogbnVsbCxcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5wb3B1bGF0ZUhpbnRzKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zdGF0ZS5pbnRlcnZhbCk7XG4gICAgICAgIC8vcmVtb3ZlIHBhcmEgZWxlbWVudHMgZnJvbSB0aGUgcGFnZSAgICBcbiAgICAgICAgdGhpcy5zdGF0ZS5oaW50X2VsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZ2V0U3RhZ2UgPSAobWVkaXVtLCBzdGFnZSkgPT4ge1xuICAgICAgICBpZihtZWRpdW0gIT09IFwiXCIpIHtcbiAgICAgICAgICAgIGxldCBzdGFnZU5hbWUgPSBQcm9tcHRzW21lZGl1bV0ubG9va3VwW1N0cmluZyhzdGFnZS0xKV07XG4gICAgICAgICAgICByZXR1cm4gRmFjdHNbc3RhZ2VOYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibWVkaXVtIG5vdCBkZWZpbmVkXCIpXG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGdlbmVyYXRlSGludHMgPSAoKSA9PiB7XG4gICAgICAgIC8vZ2VyZWF0ZSBOVU1fRkFDVFMgcmFuZG9tIGhpbnRzIGZyb20gZ2l2ZW4gc3RhZ2VcbiAgICAgICAgLy9jcmVhdGUgYSA8cD4gZWxlbWVudCBmb3IgZWFjaCBoaW50XG5cbiAgICAgICAgLy8gU2h1ZmZsZSBhcnJheVxuICAgICAgICBjb25zdCBzaHVmZmxlZCA9IHRoaXMuZ2V0U3RhZ2UodGhpcy5wcm9wcy5tZWRpdW0sIHRoaXMucHJvcHMuc3RhZ2UgKS5zb3J0KCgpID0+IDAuNSAtIE1hdGgucmFuZG9tKCkpO1xuXG4gICAgICAgIC8vIEdldCBzdWItYXJyYXkgb2YgZmlyc3QgbiBlbGVtZW50cyBhZnRlciBzaHVmZmxlZFxuICAgICAgICBsZXQgc2VsZWN0ZWQgPSBzaHVmZmxlZC5zbGljZSgwLCB0aGlzLnN0YXRlLk5VTV9GQUNUUyk7XG5cbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkO1xuICAgIH1cblxuICAgIHNldHVwSGludHMgPSAoKSA9PiB7XG4gICAgICAgIC8vY3JlYXRlIHRoZSBlbGVtZW50cyB3aGljaCB3aWxsIGhvbGQgdGhlIGhpbnRzXG4gICAgICAgIFxuICAgICAgICBsZXQgZmlyc3RTZXQgPSB0aGlzLmdlbmVyYXRlSGludHMoKTtcbiAgICAgICAgXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBmaXJzdFNldC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBwYXJhLmNsYXNzTmFtZSA9IFwiaGludFwiO1xuICAgICAgICAgICAgcGFyYS5pbm5lckhUTUwgPSBmaXJzdFNldFtpXTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuaGludF9lbGVtZW50cy5wdXNoKHBhcmEpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2JykuYXBwZW5kQ2hpbGQocGFyYSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwb3B1bGF0ZUhpbnRzID0gKCkgPT4ge1xuXG4gICAgICAgIC8vc2V0dXAgdGhlIGVsZW1lbnRzIGZvciBoaW50c1xuICAgICAgICB0aGlzLnNldHVwSGludHMoKTtcblxuICAgICAgICAvL2NoYW5nZSB0aGUgaGludCBjbG91ZCBldmVyeSBJTlRFUlZBTF9MRU5HVEggbWlsbGlzZWNvbmRzXG4gICAgICAgIHRoaXMuc3RhdGUuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAvL2dlbmVyYXRlIG5ldyBoaW50c1xuICAgICAgICAgICAgbGV0IG5ld0hpbnRzID0gdGhpcy5nZW5lcmF0ZUhpbnRzKHRoaXMucHJvcHMuY3VycmVudFN0YWdlKTtcbiAgICAgICAgICAgIC8vcmVwbGFjZSB0ZXh0IGluIGV4aXN0aW5nIGhpbnRzXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5oaW50X2VsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5oaW50X2VsZW1lbnRzW2ldLmlubmVySFRNTCA9IG5ld0hpbnRzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzLnN0YXRlLklOVEVSVkFMX0xFTkdUSCk7XG5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgIClcbiAgICB9IFxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGludENsb3VkOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkZhY3RzIiwiUHJvbXB0cyIsIkhpbnRDbG91ZCIsInN0YXRlIiwiTlVNX0ZBQ1RTIiwiSU5URVJWQUxfTEVOR1RIIiwiaGludF9lbGVtZW50cyIsImludGVydmFsIiwiZ2V0U3RhZ2UiLCJtZWRpdW0iLCJzdGFnZSIsInN0YWdlTmFtZSIsImxvb2t1cCIsIlN0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJnZW5lcmF0ZUhpbnRzIiwic2h1ZmZsZWQiLCJwcm9wcyIsInNvcnQiLCJNYXRoIiwicmFuZG9tIiwic2VsZWN0ZWQiLCJzbGljZSIsInNldHVwSGludHMiLCJmaXJzdFNldCIsImkiLCJsZW5ndGgiLCJwYXJhIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaW5uZXJIVE1MIiwicHVzaCIsInF1ZXJ5U2VsZWN0b3IiLCJhcHBlbmRDaGlsZCIsInBvcHVsYXRlSGludHMiLCJzZXRJbnRlcnZhbCIsIm5ld0hpbnRzIiwiY3VycmVudFN0YWdlIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImNsZWFySW50ZXJ2YWwiLCJmb3JFYWNoIiwiZWxlbWVudCIsInJlbW92ZSIsInJlbmRlciIsImRpdiIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Components/hintCloud.js\n"));

/***/ })

});