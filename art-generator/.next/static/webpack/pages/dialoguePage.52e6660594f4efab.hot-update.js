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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_assert_this_initialized.mjs */ \"./node_modules/@swc/helpers/src/_assert_this_initialized.mjs\");\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Components_hintCloud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/hintCloud */ \"./src/Components/hintCloud.js\");\n/* harmony import */ var _Components_prompt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/prompt */ \"./src/Components/prompt.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n\n\n\n\n\nvar ref = __webpack_require__(/*! ../Components/assembler_Obj */ \"./src/Components/assembler_Obj.js\"), responses = ref.responses, assembleResponse = ref.assembleResponse, storeResponse = ref.storeResponse;\n/**\n * The dialogue window\n * \n * Different prompts arise based on where the user is in the creation\n * journey.\n * \n * User gives any input.\n * \n * Tips are provided on the page as word-clouds related to given prompt.\n * \n * User can decide to quit/restart the process.\n * If inactive for X seconds, the user is asked if they want more ideas /\n * wish to start over / quit.\n * \n * Final page before the query is sent to be generated should show the resulting\n * sentence for user revision.\n * \n */ var DialoguePage = /*#__PURE__*/ function(_Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(DialoguePage, _Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(DialoguePage);\n    function DialoguePage() {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, DialoguePage);\n        var _this;\n        _this = _super.apply(this, arguments);\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_this), \"state\", {\n            stage: 0,\n            medium: \"\",\n            numStages: 7,\n            query: \"\"\n        });\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_this), \"incrementStage\", function() {\n            //increase value of current stage by 1, and update the buttons accordingly\n            var currentStage = _this.state.stage;\n            /**\n         * Button to previous stage:\n         * is enabled only if the current stage is greater than 1,\n         * otherwise it is disabled. \n         */ //return button appears after the increment button is first clicked\n            document.querySelector(\"#btn-previous-stage\").style.display = \"block\";\n            //enable the return button after the stage is larger than 1\n            if (currentStage >= 1) {\n                document.querySelector(\"#btn-previous-stage\").disabled = false;\n            }\n            /***\n         * Button to next stage:\n         * is enabled only if the current stage is less than last,\n         * at last stage is replaced by submit button which redirects to loading page.\n         * \n         * Text field is emptied and value stored.\n         */ //hide forward button, create a submit button\n            if (currentStage === _this.state.numStages - 2) {\n                //hide forward button\n                document.querySelector(\"#btn-next-stage\").style.display = \"none\";\n                //show submit button\n                document.querySelector(\"#btn-result\").style.display = \"block\";\n            }\n            //get text from input field and store it in the query array\n            var input = document.querySelector(\"#dialogue-input\").value;\n            //TODO: change to fit the correct structure\n            _this.setState({\n                query: input\n            });\n            /***\n         * Assign medium\n         */ if (_this.state.stage === 0) {\n                _this.setState({\n                    medium: input\n                });\n            }\n            /****\n         * Feed input to assembler\n         */ if (_this.state.stage !== 0) {\n                var userInput = document.querySelector(\"#dialogue-input\").value;\n                storeResponse(userInput, _this.state.stage, responses, _this.state.medium);\n            }\n            //empty the input field\n            document.querySelector(\"#dialogue-input\").value = \"\";\n            //increase stage by 1\n            _this.setState({\n                stage: currentStage + 1\n            });\n        });\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_this), \"returnToPreviousStage\", function() {\n            //decrease current stage by 1\n            var currentStage = _this.state.stage;\n            //disable the return button once the stage is 1\n            if (currentStage == 2) {\n                document.querySelector(\"#btn-previous-stage\").disabled = true;\n            }\n            //display correct forward button\n            if (currentStage != _this.state.numStages - 1) {\n                //hide submit button\n                document.querySelector(\"#btn-result\").style.display = \"none\";\n                //show forward button\n                document.querySelector(\"#btn-next-stage\").style.display = \"block\";\n            }\n            //TODO: fill input field with the last value in the query array\n            document.querySelector(\"#dialogue-input\").value = _this.state.query[_this.state.stage - 1];\n            _this.setState({\n                stage: currentStage - 1\n            });\n        });\n        return _this;\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(DialoguePage, [\n        {\n            key: \"render\",\n            value: function render() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"Dialogue Page\"\n                        }, void 0, false, {\n                            fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/art-generator/src/pages/dialoguePage.js\",\n                            lineNumber: 128,\n                            columnNumber: 16\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_hintCloud__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            medium: this.state.medium,\n                            stage: this.state.stage\n                        }, void 0, false, {\n                            fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/art-generator/src/pages/dialoguePage.js\",\n                            lineNumber: 131,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_prompt__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            medium: this.state.medium,\n                            stage: this.state.stage\n                        }, void 0, false, {\n                            fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/art-generator/src/pages/dialoguePage.js\",\n                            lineNumber: 133,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            id: \"btn-previous-stage\",\n                            type: \"submit\",\n                            onClick: this.returnToPreviousStage,\n                            value: \"Previous stage\"\n                        }, void 0, false, {\n                            fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/art-generator/src/pages/dialoguePage.js\",\n                            lineNumber: 135,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            id: \"dialogue-input\",\n                            type: \"text\"\n                        }, void 0, false, {\n                            fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/art-generator/src/pages/dialoguePage.js\",\n                            lineNumber: 140,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            id: \"btn-next-stage\",\n                            type: \"submit\",\n                            onClick: this.incrementStage,\n                            value: \"Next\"\n                        }, void 0, false, {\n                            fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/art-generator/src/pages/dialoguePage.js\",\n                            lineNumber: 142,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            href: \"/loadingPage\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                id: \"btn-result\",\n                                children: \"Results\"\n                            }, void 0, false, {\n                                fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/art-generator/src/pages/dialoguePage.js\",\n                                lineNumber: 148,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/art-generator/src/pages/dialoguePage.js\",\n                            lineNumber: 147,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/art-generator/src/pages/dialoguePage.js\",\n                    lineNumber: 127,\n                    columnNumber: 13\n                }, this);\n            }\n        }\n    ]);\n    return DialoguePage;\n}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));\n/* harmony default export */ __webpack_exports__[\"default\"] = (DialoguePage);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGlhbG9ndWVQYWdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0FBQTBCO0FBQ3NCO0FBQ047QUFDYjtBQUU3QixJQUF1REksR0FBc0MsR0FBdENBLG1CQUFPLENBQUMsc0VBQTZCLENBQUMsRUFBckZDLFNBQVMsR0FBc0NELEdBQXNDLENBQXJGQyxTQUFTLEVBQUVDLGdCQUFnQixHQUFvQkYsR0FBc0MsQ0FBMUVFLGdCQUFnQixFQUFFQyxhQUFhLEdBQUtILEdBQXNDLENBQXhERyxhQUFhO0FBRWxEOzs7Ozs7Ozs7Ozs7Ozs7OztDQWlCQyxHQUVBLGdCQUFrQixpQkFxSWhCOzs7O2FBcklJQyxZQUFZOzs7O1FBRWZDLGdGQUFBQSxDQUFBQSx3RkFBQUEsU0FBQUEsT0FBSyxFQUFHO1lBQ0pDLEtBQUssRUFBRSxDQUFDO1lBQ1JDLE1BQU0sRUFBRSxFQUFFO1lBQ1ZDLFNBQVMsRUFBRSxDQUFDO1lBQ1pDLEtBQUssRUFBRSxFQUFFO1NBQ1o7UUFFREMsZ0ZBQUFBLENBQUFBLHdGQUFBQSxTQUFBQSxnQkFBYyxFQUFHLFdBQU07WUFDbkIsMEVBQTBFO1lBRTFFLElBQUlDLFlBQVksR0FBRyxNQUFLTixLQUFLLENBQUNDLEtBQUs7WUFFbkM7Ozs7U0FJQyxHQUVELG1FQUFtRTtZQUNuRU0sUUFBUSxDQUFDQyxhQUFhLENBQUMscUJBQXFCLENBQUMsQ0FBQ0MsS0FBSyxDQUFDQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBRXRFLDJEQUEyRDtZQUMzRCxJQUFHSixZQUFZLElBQUksQ0FBQyxFQUFFO2dCQUNsQkMsUUFBUSxDQUFDQyxhQUFhLENBQUMscUJBQXFCLENBQUMsQ0FBQ0csUUFBUSxHQUFHLEtBQUssQ0FBQzthQUNsRTtZQUVEOzs7Ozs7U0FNQyxHQUVELDZDQUE2QztZQUM3QyxJQUFHTCxZQUFZLEtBQUssTUFBS04sS0FBSyxDQUFDRyxTQUFTLEdBQUcsQ0FBQyxFQUFFO2dCQUMxQyxxQkFBcUI7Z0JBQ3JCSSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDQyxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNLENBQUM7Z0JBRWpFLG9CQUFvQjtnQkFDcEJILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDQyxLQUFLLENBQUNDLE9BQU8sR0FBRyxPQUFPLENBQUM7YUFDakU7WUFFRCwyREFBMkQ7WUFDM0QsSUFBSUUsS0FBSyxHQUFHTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDSyxLQUFLO1lBQzNELDJDQUEyQztZQUMzQyxNQUFLQyxRQUFRLENBQUM7Z0JBQUNWLEtBQUssRUFBRVEsS0FBSzthQUFDLENBQUMsQ0FBQztZQUk5Qjs7U0FFQyxHQUNELElBQUcsTUFBS1osS0FBSyxDQUFDQyxLQUFLLEtBQUssQ0FBQyxFQUFFO2dCQUN2QixNQUFLYSxRQUFRLENBQUM7b0JBQUNaLE1BQU0sRUFBRVUsS0FBSztpQkFBQyxDQUFDLENBQUM7YUFDbEM7WUFFRDs7U0FFQyxHQUNELElBQUcsTUFBS1osS0FBSyxDQUFDQyxLQUFLLEtBQUssQ0FBQyxFQUFFO2dCQUN2QixJQUFJYyxTQUFTLEdBQUdSLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUNLLEtBQUs7Z0JBQy9EZixhQUFhLENBQUNpQixTQUFTLEVBQUUsTUFBS2YsS0FBSyxDQUFDQyxLQUFLLEVBQUVMLFNBQVMsRUFBRSxNQUFLSSxLQUFLLENBQUNFLE1BQU0sQ0FBQyxDQUFDO2FBQzVFO1lBRUQsdUJBQXVCO1lBQ3ZCSyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDSyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBRXJELHFCQUFxQjtZQUNyQixNQUFLQyxRQUFRLENBQUM7Z0JBQUNiLEtBQUssRUFBRUssWUFBWSxHQUFHLENBQUM7YUFBQyxDQUFDLENBQUM7U0FDNUM7UUFFRFUsZ0ZBQUFBLENBQUFBLHdGQUFBQSxTQUFBQSx1QkFBcUIsRUFBRyxXQUFNO1lBQzFCLDZCQUE2QjtZQUM3QixJQUFJVixZQUFZLEdBQUcsTUFBS04sS0FBSyxDQUFDQyxLQUFLO1lBRW5DLCtDQUErQztZQUMvQyxJQUFHSyxZQUFZLElBQUksQ0FBQyxFQUFFO2dCQUNsQkMsUUFBUSxDQUFDQyxhQUFhLENBQUMscUJBQXFCLENBQUMsQ0FBQ0csUUFBUSxHQUFHLElBQUksQ0FBQzthQUNqRTtZQUVELGdDQUFnQztZQUNoQyxJQUFHTCxZQUFZLElBQUksTUFBS04sS0FBSyxDQUFDRyxTQUFTLEdBQUcsQ0FBQyxFQUFFO2dCQUN6QyxvQkFBb0I7Z0JBQ3BCSSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQ0MsS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTSxDQUFDO2dCQUM3RCxxQkFBcUI7Z0JBQ3JCSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDQyxLQUFLLENBQUNDLE9BQU8sR0FBRyxPQUFPLENBQUM7YUFDckU7WUFFRCwrREFBK0Q7WUFDL0RILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUNLLEtBQUssR0FBRyxNQUFLYixLQUFLLENBQUNJLEtBQUssQ0FBQyxNQUFLSixLQUFLLENBQUNDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztZQUV6RixNQUFLYSxRQUFRLENBQUM7Z0JBQUNiLEtBQUssRUFBRUssWUFBWSxHQUFHLENBQUM7YUFBQyxDQUFDO1NBQzNDOzs7OztZQUVEVyxHQUFNLEVBQU5BLFFBQU07bUJBQU5BLFNBQUFBLE1BQU0sR0FBRztnQkFFTCxxQkFDSSw4REFBQ0MsS0FBRzs7c0NBQ0QsOERBQUNDLElBQUU7c0NBQUMsZUFBYTs7Ozs7Z0NBQUs7c0NBR3JCLDhEQUFDM0IsNkRBQVM7NEJBQUNVLE1BQU0sRUFBRSxJQUFJLENBQUNGLEtBQUssQ0FBQ0UsTUFBTTs0QkFBRUQsS0FBSyxFQUFFLElBQUksQ0FBQ0QsS0FBSyxDQUFDQyxLQUFLOzs7OztnQ0FBRztzQ0FFaEUsOERBQUNSLDBEQUFNOzRCQUFDUyxNQUFNLEVBQUUsSUFBSSxDQUFDRixLQUFLLENBQUNFLE1BQU07NEJBQUVELEtBQUssRUFBRSxJQUFJLENBQUNELEtBQUssQ0FBQ0MsS0FBSzs7Ozs7Z0NBQUc7c0NBRTdELDhEQUFDVyxPQUFLOzRCQUFDUSxFQUFFLEVBQUMsb0JBQW9COzRCQUFDQyxJQUFJLEVBQUMsUUFBUTs0QkFDeENDLE9BQU8sRUFBSSxJQUFJLENBQUNOLHFCQUFxQjs0QkFDckNILEtBQUssRUFBQyxnQkFBZ0I7Ozs7O2dDQUN4QjtzQ0FFRiw4REFBQ0QsT0FBSzs0QkFBQ1EsRUFBRSxFQUFDLGdCQUFnQjs0QkFBQ0MsSUFBSSxFQUFDLE1BQU07Ozs7O2dDQUFTO3NDQUUvQyw4REFBQ1QsT0FBSzs0QkFBQ1EsRUFBRSxFQUFDLGdCQUFnQjs0QkFBQ0MsSUFBSSxFQUFDLFFBQVE7NEJBQ3BDQyxPQUFPLEVBQUksSUFBSSxDQUFDakIsY0FBYzs0QkFDOUJRLEtBQUssRUFBRyxNQUFNOzs7OztnQ0FDaEI7c0NBRUYsOERBQUNuQixrREFBSTs0QkFBRTZCLElBQUksRUFBRSxjQUFjO3NDQUN2Qiw0RUFBQ0MsUUFBTTtnQ0FBQ0osRUFBRSxFQUFDLFlBQVk7MENBQUMsU0FFeEI7Ozs7O29DQUFTOzs7OztnQ0FDTjs7Ozs7O3dCQUVMLENBRVQ7YUFDSjs7OztDQUVKLENBbkkyQjdCLHdEQUFlLENBbUkxQztBQUVELCtEQUFlUSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2RpYWxvZ3VlUGFnZS5qcz83MzM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIaW50Q2xvdWQgZnJvbSBcIi4uL0NvbXBvbmVudHMvaGludENsb3VkXCI7XG5pbXBvcnQgUHJvbXB0IGZyb20gXCIuLi9Db21wb25lbnRzL3Byb21wdFwiO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgeyByZXNwb25zZXMsIGFzc2VtYmxlUmVzcG9uc2UsIHN0b3JlUmVzcG9uc2UgfSA9IHJlcXVpcmUoJy4uL0NvbXBvbmVudHMvYXNzZW1ibGVyX09iaicpO1xuXG4vKipcbiAqIFRoZSBkaWFsb2d1ZSB3aW5kb3dcbiAqIFxuICogRGlmZmVyZW50IHByb21wdHMgYXJpc2UgYmFzZWQgb24gd2hlcmUgdGhlIHVzZXIgaXMgaW4gdGhlIGNyZWF0aW9uXG4gKiBqb3VybmV5LlxuICogXG4gKiBVc2VyIGdpdmVzIGFueSBpbnB1dC5cbiAqIFxuICogVGlwcyBhcmUgcHJvdmlkZWQgb24gdGhlIHBhZ2UgYXMgd29yZC1jbG91ZHMgcmVsYXRlZCB0byBnaXZlbiBwcm9tcHQuXG4gKiBcbiAqIFVzZXIgY2FuIGRlY2lkZSB0byBxdWl0L3Jlc3RhcnQgdGhlIHByb2Nlc3MuXG4gKiBJZiBpbmFjdGl2ZSBmb3IgWCBzZWNvbmRzLCB0aGUgdXNlciBpcyBhc2tlZCBpZiB0aGV5IHdhbnQgbW9yZSBpZGVhcyAvXG4gKiB3aXNoIHRvIHN0YXJ0IG92ZXIgLyBxdWl0LlxuICogXG4gKiBGaW5hbCBwYWdlIGJlZm9yZSB0aGUgcXVlcnkgaXMgc2VudCB0byBiZSBnZW5lcmF0ZWQgc2hvdWxkIHNob3cgdGhlIHJlc3VsdGluZ1xuICogc2VudGVuY2UgZm9yIHVzZXIgcmV2aXNpb24uXG4gKiBcbiAqL1xuXG4gY2xhc3MgRGlhbG9ndWVQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHN0YXRlID0ge1xuICAgICAgICBzdGFnZTogMCxcbiAgICAgICAgbWVkaXVtOiBcIlwiLFxuICAgICAgICBudW1TdGFnZXM6IDcsXG4gICAgICAgIHF1ZXJ5OiBcIlwiLFxuICAgIH1cblxuICAgIGluY3JlbWVudFN0YWdlID0gKCkgPT4ge1xuICAgICAgICAvL2luY3JlYXNlIHZhbHVlIG9mIGN1cnJlbnQgc3RhZ2UgYnkgMSwgYW5kIHVwZGF0ZSB0aGUgYnV0dG9ucyBhY2NvcmRpbmdseVxuICAgICAgICBcbiAgICAgICAgbGV0IGN1cnJlbnRTdGFnZSA9IHRoaXMuc3RhdGUuc3RhZ2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJ1dHRvbiB0byBwcmV2aW91cyBzdGFnZTpcbiAgICAgICAgICogaXMgZW5hYmxlZCBvbmx5IGlmIHRoZSBjdXJyZW50IHN0YWdlIGlzIGdyZWF0ZXIgdGhhbiAxLFxuICAgICAgICAgKiBvdGhlcndpc2UgaXQgaXMgZGlzYWJsZWQuIFxuICAgICAgICAgKi9cblxuICAgICAgICAvL3JldHVybiBidXR0b24gYXBwZWFycyBhZnRlciB0aGUgaW5jcmVtZW50IGJ1dHRvbiBpcyBmaXJzdCBjbGlja2VkXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG4tcHJldmlvdXMtc3RhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICAgICAgICAvL2VuYWJsZSB0aGUgcmV0dXJuIGJ1dHRvbiBhZnRlciB0aGUgc3RhZ2UgaXMgbGFyZ2VyIHRoYW4gMVxuICAgICAgICBpZihjdXJyZW50U3RhZ2UgPj0gMSkge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bi1wcmV2aW91cy1zdGFnZScpLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvKioqXG4gICAgICAgICAqIEJ1dHRvbiB0byBuZXh0IHN0YWdlOlxuICAgICAgICAgKiBpcyBlbmFibGVkIG9ubHkgaWYgdGhlIGN1cnJlbnQgc3RhZ2UgaXMgbGVzcyB0aGFuIGxhc3QsXG4gICAgICAgICAqIGF0IGxhc3Qgc3RhZ2UgaXMgcmVwbGFjZWQgYnkgc3VibWl0IGJ1dHRvbiB3aGljaCByZWRpcmVjdHMgdG8gbG9hZGluZyBwYWdlLlxuICAgICAgICAgKiBcbiAgICAgICAgICogVGV4dCBmaWVsZCBpcyBlbXB0aWVkIGFuZCB2YWx1ZSBzdG9yZWQuXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8vaGlkZSBmb3J3YXJkIGJ1dHRvbiwgY3JlYXRlIGEgc3VibWl0IGJ1dHRvblxuICAgICAgICBpZihjdXJyZW50U3RhZ2UgPT09IHRoaXMuc3RhdGUubnVtU3RhZ2VzIC0gMikge1xuICAgICAgICAgICAgLy9oaWRlIGZvcndhcmQgYnV0dG9uXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuLW5leHQtc3RhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgICAgICAvL3Nob3cgc3VibWl0IGJ1dHRvblxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bi1yZXN1bHQnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vZ2V0IHRleHQgZnJvbSBpbnB1dCBmaWVsZCBhbmQgc3RvcmUgaXQgaW4gdGhlIHF1ZXJ5IGFycmF5XG4gICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaWFsb2d1ZS1pbnB1dCcpLnZhbHVlO1xuICAgICAgICAvL1RPRE86IGNoYW5nZSB0byBmaXQgdGhlIGNvcnJlY3Qgc3RydWN0dXJlXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3F1ZXJ5OiBpbnB1dH0pO1xuXG4gICAgICAgIFxuXG4gICAgICAgIC8qKipcbiAgICAgICAgICogQXNzaWduIG1lZGl1bVxuICAgICAgICAgKi9cbiAgICAgICAgaWYodGhpcy5zdGF0ZS5zdGFnZSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVkaXVtOiBpbnB1dH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqKipcbiAgICAgICAgICogRmVlZCBpbnB1dCB0byBhc3NlbWJsZXJcbiAgICAgICAgICovXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuc3RhZ2UgIT09IDApIHtcbiAgICAgICAgICAgIGxldCB1c2VySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlhbG9ndWUtaW5wdXQnKS52YWx1ZTtcbiAgICAgICAgICAgIHN0b3JlUmVzcG9uc2UodXNlcklucHV0LCB0aGlzLnN0YXRlLnN0YWdlLCByZXNwb25zZXMsIHRoaXMuc3RhdGUubWVkaXVtKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy9lbXB0eSB0aGUgaW5wdXQgZmllbGRcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RpYWxvZ3VlLWlucHV0JykudmFsdWUgPSAnJztcblxuICAgICAgICAvL2luY3JlYXNlIHN0YWdlIGJ5IDFcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RhZ2U6IGN1cnJlbnRTdGFnZSArIDF9KTtcbiAgICB9XG5cbiAgICByZXR1cm5Ub1ByZXZpb3VzU3RhZ2UgPSAoKSA9PiB7XG4gICAgICAgIC8vZGVjcmVhc2UgY3VycmVudCBzdGFnZSBieSAxXG4gICAgICAgIGxldCBjdXJyZW50U3RhZ2UgPSB0aGlzLnN0YXRlLnN0YWdlO1xuXG4gICAgICAgIC8vZGlzYWJsZSB0aGUgcmV0dXJuIGJ1dHRvbiBvbmNlIHRoZSBzdGFnZSBpcyAxXG4gICAgICAgIGlmKGN1cnJlbnRTdGFnZSA9PSAyKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuLXByZXZpb3VzLXN0YWdlJykuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9kaXNwbGF5IGNvcnJlY3QgZm9yd2FyZCBidXR0b25cbiAgICAgICAgaWYoY3VycmVudFN0YWdlICE9IHRoaXMuc3RhdGUubnVtU3RhZ2VzIC0gMSkge1xuICAgICAgICAgICAgLy9oaWRlIHN1Ym1pdCBidXR0b25cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG4tcmVzdWx0Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIC8vc2hvdyBmb3J3YXJkIGJ1dHRvblxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bi1uZXh0LXN0YWdlJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH1cblxuICAgICAgICAvL1RPRE86IGZpbGwgaW5wdXQgZmllbGQgd2l0aCB0aGUgbGFzdCB2YWx1ZSBpbiB0aGUgcXVlcnkgYXJyYXlcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RpYWxvZ3VlLWlucHV0JykudmFsdWUgPSB0aGlzLnN0YXRlLnF1ZXJ5W3RoaXMuc3RhdGUuc3RhZ2UgLSAxXTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzdGFnZTogY3VycmVudFN0YWdlIC0gMX0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICA8aDE+RGlhbG9ndWUgUGFnZTwvaDE+XG5cbiAgICAgICAgICAgICAgICB7LyogVE9ETzogdXBkYXRlIGhpbnQgY2xvdWQgKi99XG4gICAgICAgICAgICAgICAgPEhpbnRDbG91ZCBtZWRpdW09e3RoaXMuc3RhdGUubWVkaXVtfSBzdGFnZT17dGhpcy5zdGF0ZS5zdGFnZX0vPlxuXG4gICAgICAgICAgICAgICAgPFByb21wdCBtZWRpdW09e3RoaXMuc3RhdGUubWVkaXVtfSBzdGFnZT17dGhpcy5zdGF0ZS5zdGFnZX0vPlxuXG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiYnRuLXByZXZpb3VzLXN0YWdlXCIgdHlwZT0nc3VibWl0J1xuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPSB7IHRoaXMucmV0dXJuVG9QcmV2aW91c1N0YWdlIH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9J1ByZXZpb3VzIHN0YWdlJ1xuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJkaWFsb2d1ZS1pbnB1dFwiIHR5cGU9J3RleHQnPjwvaW5wdXQ+XG5cbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJidG4tbmV4dC1zdGFnZVwiIHR5cGU9J3N1Ym1pdCdcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz0geyB0aGlzLmluY3JlbWVudFN0YWdlIH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSAnTmV4dCdcbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPExpbmsgIGhyZWY9eycvbG9hZGluZ1BhZ2UnfT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImJ0bi1yZXN1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFJlc3VsdHMgXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgIClcbiAgICB9IFxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IERpYWxvZ3VlUGFnZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJIaW50Q2xvdWQiLCJQcm9tcHQiLCJMaW5rIiwicmVxdWlyZSIsInJlc3BvbnNlcyIsImFzc2VtYmxlUmVzcG9uc2UiLCJzdG9yZVJlc3BvbnNlIiwiRGlhbG9ndWVQYWdlIiwic3RhdGUiLCJzdGFnZSIsIm1lZGl1bSIsIm51bVN0YWdlcyIsInF1ZXJ5IiwiaW5jcmVtZW50U3RhZ2UiLCJjdXJyZW50U3RhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImRpc3BsYXkiLCJkaXNhYmxlZCIsImlucHV0IiwidmFsdWUiLCJzZXRTdGF0ZSIsInVzZXJJbnB1dCIsInJldHVyblRvUHJldmlvdXNTdGFnZSIsInJlbmRlciIsImRpdiIsImgxIiwiaWQiLCJ0eXBlIiwib25DbGljayIsImhyZWYiLCJidXR0b24iLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/dialoguePage.js\n"));

/***/ })

});