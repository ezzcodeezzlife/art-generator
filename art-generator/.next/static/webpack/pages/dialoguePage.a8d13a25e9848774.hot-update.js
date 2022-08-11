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

/***/ "./src/pages/dialoguePage.js":
/*!***********************************!*\
  !*** ./src/pages/dialoguePage.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_assert_this_initialized.mjs */ \"./node_modules/@swc/helpers/src/_assert_this_initialized.mjs\");\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Components_hintCloud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/hintCloud */ \"./src/Components/hintCloud.js\");\n/* harmony import */ var _Components_prompt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/prompt */ \"./src/Components/prompt.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n\n\n\n\n\nvar assembler = __webpack_require__(/*! ../Components/assembler_Obj */ \"./src/Components/assembler_Obj.js\");\n/**\n * The dialogue window\n * \n * Different prompts arise based on where the user is in the creation\n * journey.\n * \n * User gives any input.\n * \n * Tips are provided on the page as word-clouds related to given prompt.\n * \n * User can decide to quit/restart the process.\n * If inactive for X seconds, the user is asked if they want more ideas /\n * wish to start over / quit.\n * \n * Final page before the query is sent to be generated should show the resulting\n * sentence for user revision.\n * \n */ var DialoguePage = /*#__PURE__*/ function(_Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(DialoguePage, _Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(DialoguePage);\n    function DialoguePage() {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, DialoguePage);\n        var _this;\n        _this = _super.apply(this, arguments);\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_this), \"state\", {\n            stage: 0,\n            medium: \"\",\n            numStages: 6,\n            stageNames: [\n                \"emotions\",\n                \"structure_form\",\n                \"looks_techniques\",\n                \"art_styles\",\n                \"artists\"\n            ],\n            query: \"\"\n        });\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_this), \"incrementStage\", function() {\n            //increase value of current stage by 1, and update the buttons accordingly\n            var currentStage = _this.state.stage;\n            /**\n         * Button to previous stage:\n         * is enabled only if the current stage is greater than 1,\n         * otherwise it is disabled. \n         */ //return button appears after the increment button is first clicked\n            document.querySelector(\"#btn-previous-stage\").style.display = \"block\";\n            //enable the return button after the stage is larger than 1\n            if (currentStage >= 1) {\n                document.querySelector(\"#btn-previous-stage\").disabled = false;\n            }\n            /***\n         * Button to next stage:\n         * is enabled only if the current stage is less than last,\n         * at last stage is replaced by submit button which redirects to loading page.\n         * \n         * Text field is emptied and value stored.\n         */ //hide forward button, create a submit button\n            if (currentStage === _this.state.numStages - 1) {\n                //hide forward button\n                document.querySelector(\"#btn-next-stage\").style.display = \"none\";\n                //show submit button\n                document.querySelector(\"#btn-result\").style.display = \"block\";\n            }\n            //get text from input field and store it in the query array\n            var input = document.querySelector(\"#dialogue-input\").value;\n            //TODO: change to fit the correct structure\n            _this.setState({\n                query: input\n            });\n            //empty the input field\n            document.querySelector(\"#dialogue-input\").value = \"\";\n            //increase stage by 1\n            _this.setState({\n                stage: currentStage + 1\n            });\n        });\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_this), \"returnToPreviousStage\", function() {\n            //decrease current stage by 1\n            var currentStage = _this.state.stage;\n            //disable the return button once the stage is 1\n            if (currentStage == 2) {\n                document.querySelector(\"#btn-previous-stage\").disabled = true;\n            }\n            //display correct forward button\n            if (currentStage != _this.state.numStages - 1) {\n                //hide submit button\n                document.querySelector(\"#btn-result\").style.display = \"none\";\n                //show forward button\n                document.querySelector(\"#btn-next-stage\").style.display = \"block\";\n            }\n            //TODO: fill input field with the last value in the query array\n            document.querySelector(\"#dialogue-input\").value = _this.state.query[_this.state.stage - 1];\n            _this.setState({\n                stage: currentStage - 1\n            });\n        });\n        return _this;\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(DialoguePage, [\n        {\n            key: \"render\",\n            value: function render() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"Dialogue Page\"\n                        }, void 0, false, {\n                            fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/art-generator/src/pages/dialoguePage.js\",\n                            lineNumber: 114,\n                            columnNumber: 16\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_prompt__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            medium: this.state.medium,\n                            stage: this.state.stage\n                        }, void 0, false, {\n                            fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/art-generator/src/pages/dialoguePage.js\",\n                            lineNumber: 119,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            id: \"btn-previous-stage\",\n                            type: \"submit\",\n                            onClick: this.returnToPreviousStage,\n                            value: \"Previous stage\"\n                        }, void 0, false, {\n                            fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/art-generator/src/pages/dialoguePage.js\",\n                            lineNumber: 121,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            id: \"dialogue-input\",\n                            type: \"text\"\n                        }, void 0, false, {\n                            fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/art-generator/src/pages/dialoguePage.js\",\n                            lineNumber: 126,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            id: \"btn-next-stage\",\n                            type: \"submit\",\n                            onClick: this.incrementStage,\n                            value: \"Next\"\n                        }, void 0, false, {\n                            fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/art-generator/src/pages/dialoguePage.js\",\n                            lineNumber: 128,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            id: \"btn-result\",\n                            href: \"/loadingPage\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"Results\"\n                            }, void 0, false, {\n                                fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/art-generator/src/pages/dialoguePage.js\",\n                                lineNumber: 134,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/art-generator/src/pages/dialoguePage.js\",\n                            lineNumber: 133,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/art-generator/src/pages/dialoguePage.js\",\n                    lineNumber: 113,\n                    columnNumber: 13\n                }, this);\n            }\n        }\n    ]);\n    return DialoguePage;\n}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));\n/* harmony default export */ __webpack_exports__[\"default\"] = (DialoguePage);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNDLFFBQU07MENBQUMsU0FFUjs7Ozs7b0NBQVM7Ozs7O2dDQUNOOzs7Ozs7d0JBRUwsQ0FFVDthQUNKOzs7O0NBRUosQ0FySDJCL0Isd0RBQWUsQ0FxSDFDO0FBRUQsK0RBQWVNLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvZGlhbG9ndWVQYWdlLmpzPzczMzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhpbnRDbG91ZCBmcm9tIFwiLi4vQ29tcG9uZW50cy9oaW50Q2xvdWRcIjtcbmltcG9ydCBQcm9tcHQgZnJvbSBcIi4uL0NvbXBvbmVudHMvcHJvbXB0XCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBhc3NlbWJsZXIgPSByZXF1aXJlKCcuLi9Db21wb25lbnRzL2Fzc2VtYmxlcl9PYmonKVxuXG4vKipcbiAqIFRoZSBkaWFsb2d1ZSB3aW5kb3dcbiAqIFxuICogRGlmZmVyZW50IHByb21wdHMgYXJpc2UgYmFzZWQgb24gd2hlcmUgdGhlIHVzZXIgaXMgaW4gdGhlIGNyZWF0aW9uXG4gKiBqb3VybmV5LlxuICogXG4gKiBVc2VyIGdpdmVzIGFueSBpbnB1dC5cbiAqIFxuICogVGlwcyBhcmUgcHJvdmlkZWQgb24gdGhlIHBhZ2UgYXMgd29yZC1jbG91ZHMgcmVsYXRlZCB0byBnaXZlbiBwcm9tcHQuXG4gKiBcbiAqIFVzZXIgY2FuIGRlY2lkZSB0byBxdWl0L3Jlc3RhcnQgdGhlIHByb2Nlc3MuXG4gKiBJZiBpbmFjdGl2ZSBmb3IgWCBzZWNvbmRzLCB0aGUgdXNlciBpcyBhc2tlZCBpZiB0aGV5IHdhbnQgbW9yZSBpZGVhcyAvXG4gKiB3aXNoIHRvIHN0YXJ0IG92ZXIgLyBxdWl0LlxuICogXG4gKiBGaW5hbCBwYWdlIGJlZm9yZSB0aGUgcXVlcnkgaXMgc2VudCB0byBiZSBnZW5lcmF0ZWQgc2hvdWxkIHNob3cgdGhlIHJlc3VsdGluZ1xuICogc2VudGVuY2UgZm9yIHVzZXIgcmV2aXNpb24uXG4gKiBcbiAqL1xuXG4gY2xhc3MgRGlhbG9ndWVQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHN0YXRlID0ge1xuICAgICAgICBzdGFnZTogMCxcbiAgICAgICAgbWVkaXVtOiBcIlwiLFxuICAgICAgICBudW1TdGFnZXM6IDYsXG4gICAgICAgIHN0YWdlTmFtZXM6IFtcbiAgICAgICAgICAgICdlbW90aW9ucycsICdzdHJ1Y3R1cmVfZm9ybScsICdsb29rc190ZWNobmlxdWVzJywgJ2FydF9zdHlsZXMnLCAnYXJ0aXN0cydcbiAgICAgICAgXSxcbiAgICAgICAgcXVlcnk6IFwiXCIsXG4gICAgfVxuXG4gICAgaW5jcmVtZW50U3RhZ2UgPSAoKSA9PiB7XG4gICAgICAgIC8vaW5jcmVhc2UgdmFsdWUgb2YgY3VycmVudCBzdGFnZSBieSAxLCBhbmQgdXBkYXRlIHRoZSBidXR0b25zIGFjY29yZGluZ2x5XG4gICAgICAgIFxuICAgICAgICBsZXQgY3VycmVudFN0YWdlID0gdGhpcy5zdGF0ZS5zdGFnZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQnV0dG9uIHRvIHByZXZpb3VzIHN0YWdlOlxuICAgICAgICAgKiBpcyBlbmFibGVkIG9ubHkgaWYgdGhlIGN1cnJlbnQgc3RhZ2UgaXMgZ3JlYXRlciB0aGFuIDEsXG4gICAgICAgICAqIG90aGVyd2lzZSBpdCBpcyBkaXNhYmxlZC4gXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8vcmV0dXJuIGJ1dHRvbiBhcHBlYXJzIGFmdGVyIHRoZSBpbmNyZW1lbnQgYnV0dG9uIGlzIGZpcnN0IGNsaWNrZWRcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bi1wcmV2aW91cy1zdGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgICAgIC8vZW5hYmxlIHRoZSByZXR1cm4gYnV0dG9uIGFmdGVyIHRoZSBzdGFnZSBpcyBsYXJnZXIgdGhhbiAxXG4gICAgICAgIGlmKGN1cnJlbnRTdGFnZSA+PSAxKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuLXByZXZpb3VzLXN0YWdlJykuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKipcbiAgICAgICAgICogQnV0dG9uIHRvIG5leHQgc3RhZ2U6XG4gICAgICAgICAqIGlzIGVuYWJsZWQgb25seSBpZiB0aGUgY3VycmVudCBzdGFnZSBpcyBsZXNzIHRoYW4gbGFzdCxcbiAgICAgICAgICogYXQgbGFzdCBzdGFnZSBpcyByZXBsYWNlZCBieSBzdWJtaXQgYnV0dG9uIHdoaWNoIHJlZGlyZWN0cyB0byBsb2FkaW5nIHBhZ2UuXG4gICAgICAgICAqIFxuICAgICAgICAgKiBUZXh0IGZpZWxkIGlzIGVtcHRpZWQgYW5kIHZhbHVlIHN0b3JlZC5cbiAgICAgICAgICovXG5cbiAgICAgICAgLy9oaWRlIGZvcndhcmQgYnV0dG9uLCBjcmVhdGUgYSBzdWJtaXQgYnV0dG9uXG4gICAgICAgIGlmKGN1cnJlbnRTdGFnZSA9PT0gdGhpcy5zdGF0ZS5udW1TdGFnZXMgLSAxKSB7XG4gICAgICAgICAgICAvL2hpZGUgZm9yd2FyZCBidXR0b25cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG4tbmV4dC1zdGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgICAgIC8vc2hvdyBzdWJtaXQgYnV0dG9uXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuLXJlc3VsdCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9nZXQgdGV4dCBmcm9tIGlucHV0IGZpZWxkIGFuZCBzdG9yZSBpdCBpbiB0aGUgcXVlcnkgYXJyYXlcbiAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RpYWxvZ3VlLWlucHV0JykudmFsdWU7XG4gICAgICAgIC8vVE9ETzogY2hhbmdlIHRvIGZpdCB0aGUgY29ycmVjdCBzdHJ1Y3R1cmVcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cXVlcnk6IGlucHV0fSk7XG5cbiAgICAgICAgLy9lbXB0eSB0aGUgaW5wdXQgZmllbGRcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RpYWxvZ3VlLWlucHV0JykudmFsdWUgPSAnJztcblxuICAgICAgICAvL2luY3JlYXNlIHN0YWdlIGJ5IDFcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RhZ2U6IGN1cnJlbnRTdGFnZSArIDF9KTtcbiAgICB9XG5cbiAgICByZXR1cm5Ub1ByZXZpb3VzU3RhZ2UgPSAoKSA9PiB7XG4gICAgICAgIC8vZGVjcmVhc2UgY3VycmVudCBzdGFnZSBieSAxXG4gICAgICAgIGxldCBjdXJyZW50U3RhZ2UgPSB0aGlzLnN0YXRlLnN0YWdlO1xuXG4gICAgICAgIC8vZGlzYWJsZSB0aGUgcmV0dXJuIGJ1dHRvbiBvbmNlIHRoZSBzdGFnZSBpcyAxXG4gICAgICAgIGlmKGN1cnJlbnRTdGFnZSA9PSAyKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuLXByZXZpb3VzLXN0YWdlJykuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9kaXNwbGF5IGNvcnJlY3QgZm9yd2FyZCBidXR0b25cbiAgICAgICAgaWYoY3VycmVudFN0YWdlICE9IHRoaXMuc3RhdGUubnVtU3RhZ2VzIC0gMSkge1xuICAgICAgICAgICAgLy9oaWRlIHN1Ym1pdCBidXR0b25cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG4tcmVzdWx0Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIC8vc2hvdyBmb3J3YXJkIGJ1dHRvblxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bi1uZXh0LXN0YWdlJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH1cblxuICAgICAgICAvL1RPRE86IGZpbGwgaW5wdXQgZmllbGQgd2l0aCB0aGUgbGFzdCB2YWx1ZSBpbiB0aGUgcXVlcnkgYXJyYXlcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RpYWxvZ3VlLWlucHV0JykudmFsdWUgPSB0aGlzLnN0YXRlLnF1ZXJ5W3RoaXMuc3RhdGUuc3RhZ2UgLSAxXTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzdGFnZTogY3VycmVudFN0YWdlIC0gMX0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICA8aDE+RGlhbG9ndWUgUGFnZTwvaDE+XG5cbiAgICAgICAgICAgICAgICB7LyogVE9ETzogdXBkYXRlIGhpbnQgY2xvdWQgKi99XG4gICAgICAgICAgICAgICAgey8qIDxIaW50Q2xvdWQgY3VycmVudFN0YWdlPXt0aGlzLnN0YXRlLnN0YWdlTmFtZXNbdGhpcy5zdGF0ZS5zdGFnZV19Lz4gKi99XG5cbiAgICAgICAgICAgICAgICA8UHJvbXB0IG1lZGl1bT17dGhpcy5zdGF0ZS5tZWRpdW19IHN0YWdlPXt0aGlzLnN0YXRlLnN0YWdlfS8+XG5cbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJidG4tcHJldmlvdXMtc3RhZ2VcIiB0eXBlPSdzdWJtaXQnXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9IHsgdGhpcy5yZXR1cm5Ub1ByZXZpb3VzU3RhZ2UgfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT0nUHJldmlvdXMgc3RhZ2UnXG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImRpYWxvZ3VlLWlucHV0XCIgdHlwZT0ndGV4dCc+PC9pbnB1dD5cblxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImJ0bi1uZXh0LXN0YWdlXCIgdHlwZT0nc3VibWl0J1xuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPSB7IHRoaXMuaW5jcmVtZW50U3RhZ2UgfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9ICdOZXh0J1xuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8TGluayBpZD1cImJ0bi1yZXN1bHRcIiBocmVmPXsnL2xvYWRpbmdQYWdlJ30+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICBSZXN1bHRzIFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICApXG4gICAgfSBcblxufVxuXG5leHBvcnQgZGVmYXVsdCBEaWFsb2d1ZVBhZ2U7Il0sIm5hbWVzIjpbIlJlYWN0IiwiSGludENsb3VkIiwiUHJvbXB0IiwiTGluayIsImFzc2VtYmxlciIsInJlcXVpcmUiLCJEaWFsb2d1ZVBhZ2UiLCJzdGF0ZSIsInN0YWdlIiwibWVkaXVtIiwibnVtU3RhZ2VzIiwic3RhZ2VOYW1lcyIsInF1ZXJ5IiwiaW5jcmVtZW50U3RhZ2UiLCJjdXJyZW50U3RhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImRpc3BsYXkiLCJkaXNhYmxlZCIsImlucHV0IiwidmFsdWUiLCJzZXRTdGF0ZSIsInJldHVyblRvUHJldmlvdXNTdGFnZSIsInJlbmRlciIsImRpdiIsImgxIiwiaWQiLCJ0eXBlIiwib25DbGljayIsImhyZWYiLCJidXR0b24iLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/dialoguePage.js\n"));

/***/ })

});