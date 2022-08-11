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

/***/ "./src/Components/prompt.js":
/*!**********************************!*\
  !*** ./src/Components/prompt.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_assert_this_initialized.mjs */ \"./node_modules/@swc/helpers/src/_assert_this_initialized.mjs\");\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Components_hintCloud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/hintCloud */ \"./src/Components/hintCloud.js\");\n\n\n\n\n\n\n\n\n\n/**\n * \n * Various prompts are available to guide the user\n * through. \n * \n * Each prompt appears in different stage of the process.\n * \n */ var Prompt = /*#__PURE__*/ function(_Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Prompt, _Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Prompt);\n    function Prompt() {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, Prompt);\n        var _this;\n        _this = _super.apply(this, arguments);\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_this), \"prompt_text\", {\n            medium: \"The first decision every artist has to make is choosing a medium: what kind of artwork will it be? Each choice has its own specificities and will lead you down a slightly different creative path. Which of these is your calling?\",\n            painting: {\n                //lookup holds the hint cloud variable for each stage ordered by stage id\n                lookup: [\n                    \"painting_types\",\n                    \"painting_content\",\n                    \"painting_setting\",\n                    \"emotions\",\n                    \"looks_techniques\",\n                    \"art_styles\"\n                ],\n                //holds the guiding prompt for each dialogue stage named by stage id (such that it can be called as prompt[stage])\n                1: [\n                    \"Let’s get more specific. There are endless possibilities of what to do on a canvas. You might prefer the expressive colours of oil paint, or the gentler approach of pencil drawings. However, technical sketches and mosaics are not off the table! Each form has its magic and all of them are at your disposal. Now, which one will it be?\"\n                ],\n                2: [\n                    \"Once we know how to approach the artwork, we can start filling it in. Think of things, characters - truly anything. Renaissance artworks are often full of people, abstract artworks are full of shapes and colors, and some can just be filled with emptiness. Go ahead, dream away:\"\n                ],\n                3: [\n                    \"We know what we are focusing on, but what about everything all around. Where is this scene set? Is there even a setting? Maybe you are fine with what you’ve chosen. That is fine by me as well.\"\n                ],\n                4: [\n                    \"Now that we know what is in the artwork, we also need to know how it will be depicted. Canvases will often radiate some energy - calming, energizing, they can even make you tired. This goes hand in hand with emotions. Artists will often want to communicate some sort of emotion through their art. This can come out softly - through colour tones and structure, but also explicitly - through dreadful expressions or symbolism. Think of emotions and energies you would want to convey through your artwork!\"\n                ],\n                5: [\n                    \"We are getting close. There are endless styles in the world of art - these either help bring out the visuality of your scene, or better communicate the desired message. With my help, try to brainstorm styles, techinques and looks that will help shape your artwork into a truly personal masterpiece. Think about styles from history, but also also contemporary aesthetics. Perhaps you are a pioneer and don’t want to model yourself on any existing look, so this is not a must! \"\n                ],\n                6: [\n                    \"Most of us will be driven by outer inspiration, whill often take shape in a person or a group. Do you have an inspiration? Is there someone, or something that you admire and wish to follow in their footsteps? Perhaps you will want to finish you artwork off in the style of…\"\n                ]\n            },\n            sculpture: {},\n            photography: {}\n        });\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_this), \"selectText\", function(medium, stage) {\n            //select the accompanying text for each stage\n            if (medium === \"\") {\n                return _this.prompt_text.medium;\n            } else if (medium === \"painting\") {\n                console.log(_this.prompt_text[medium][\"lookup\"][String(stage + 1)]);\n                //depending on the stage, return the appropriate text\n                return _this.prompt_text.painting[stage];\n            } else if (medium === \"sculpture\") {\n            //depending on the stage, return the appropriate text\n            } else if (medium === \"photography\") {\n            //depending on the stage, return the appropriate text\n            }\n        });\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_this), \"selectStageName\", function(medium, stage) {\n            if (medium !== \"\") {\n                return _this.prompt_text[medium];\n            }\n        });\n        return _this;\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Prompt, [\n        {\n            key: \"render\",\n            value: function render() {\n                var _props = this.props, medium = _props.medium, stage = _props.stage;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: this.selectText(medium, stage)\n                    }, void 0, false, {\n                        fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/art-generator/src/Components/prompt.js\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/art-generator/src/Components/prompt.js\",\n                    lineNumber: 63,\n                    columnNumber: 13\n                }, this);\n            }\n        }\n    ]);\n    return Prompt;\n}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Prompt);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9wcm9tcHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7QUFBMEI7QUFFMEI7QUFFcEQ7Ozs7Ozs7Q0FPQyxHQUVBLFVBQVksaUJBNkRWOzs7O2FBN0RJRSxNQUFNOzs7O1FBRVRDLGdGQUFBQSxDQUFBQSx3RkFBQUEsU0FBQUEsYUFBVyxFQUFHO1lBQ1ZDLE1BQU0sRUFBRSxxT0FBcU87WUFDN09DLFFBQVEsRUFBRTtnQkFDTix5RUFBeUU7Z0JBQ3pFQyxNQUFNLEVBQUU7b0JBQUMsZ0JBQWdCO29CQUFFLGtCQUFrQjtvQkFBRSxrQkFBa0I7b0JBQUMsVUFBVTtvQkFBRSxrQkFBa0I7b0JBQUMsWUFBWTtpQkFBQztnQkFDOUcsa0hBQWtIO0FBQ2xILGlCQUFDLEVBQUU7b0JBQUMsK1VBQStVO2lCQUFDO0FBQ3BWLGlCQUFDLEVBQUU7b0JBQUMsdVJBQXVSO2lCQUFDO0FBQzVSLGlCQUFDLEVBQUU7b0JBQUMsa01BQWtNO2lCQUFDO0FBQ3ZNLGlCQUFDLEVBQUU7b0JBQUMsd2ZBQXdmO2lCQUFDO0FBQzdmLGlCQUFDLEVBQUU7b0JBQUMsNmRBQTZkO2lCQUFDO0FBQ2xlLGlCQUFDLEVBQUU7b0JBQUMsbVJBQW1SO2lCQUFDO2FBQzNSO1lBQ0RDLFNBQVMsRUFBRSxFQUFFO1lBQ2JDLFdBQVcsRUFBRSxFQUFFO1NBQ2xCO1FBRURDLGdGQUFBQSxDQUFBQSx3RkFBQUEsU0FBQUEsWUFBVSxFQUFHLFNBQUNMLE1BQU0sRUFBRU0sS0FBSyxFQUFLO1lBRTVCLDZDQUE2QztZQUM3QyxJQUFHTixNQUFNLEtBQUssRUFBRSxFQUFFO2dCQUVkLE9BQU8sTUFBS0QsV0FBVyxDQUFDQyxNQUFNLENBQUM7YUFDbEMsTUFBTSxJQUFHQSxNQUFNLEtBQUssVUFBVSxFQUFFO2dCQUM3Qk8sT0FBTyxDQUFDQyxHQUFHLENBQUMsTUFBS1QsV0FBVyxDQUFDQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQ1MsTUFBTSxDQUFDSCxLQUFLLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqRSxxREFBcUQ7Z0JBQ3JELE9BQU8sTUFBS1AsV0FBVyxDQUFDRSxRQUFRLENBQUNLLEtBQUssQ0FBQyxDQUFDO2FBRTNDLE1BQU0sSUFBR04sTUFBTSxLQUFLLFdBQVcsRUFBRTtZQUM5QixxREFBcUQ7YUFDeEQsTUFBTSxJQUFHQSxNQUFNLEtBQUssYUFBYSxFQUFFO1lBQ2hDLHFEQUFxRDthQUN4RDtTQUVKO1FBRURVLGdGQUFBQSxDQUFBQSx3RkFBQUEsU0FBQUEsaUJBQWUsRUFBRyxTQUFDVixNQUFNLEVBQUVNLEtBQUssRUFBSztZQUNqQyxJQUFHTixNQUFNLEtBQUssRUFBRSxFQUFFO2dCQUVkLE9BQU8sTUFBS0QsV0FBVyxDQUFDQyxNQUFNLENBQUMsQ0FBQzthQUNuQztTQUNKOzs7OztZQUVEVyxHQUFNLEVBQU5BLFFBQU07bUJBQU5BLFNBQUFBLE1BQU0sR0FBRztnQkFDTCxJQUEwQixNQUFVLEdBQVYsSUFBSSxDQUFDQyxLQUFLLEVBQTVCWixNQUFNLEdBQVksTUFBVSxDQUE1QkEsTUFBTSxFQUFFTSxLQUFLLEdBQUssTUFBVSxDQUFwQkEsS0FBSztnQkFFckIscUJBQ0ksOERBQUNPLEtBQUc7OEJBR0EsNEVBQUNDLEdBQUM7a0NBQUUsSUFBSSxDQUFDVCxVQUFVLENBQUNMLE1BQU0sRUFBRU0sS0FBSyxDQUFDOzs7Ozs0QkFBSzs7Ozs7d0JBQ3JDLENBRVQ7YUFDSjs7OztDQUdKLENBM0RxQlYsd0RBQWUsQ0EyRHBDO0FBRUQsK0RBQWVFLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvQ29tcG9uZW50cy9wcm9tcHQuanM/NTFiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IEhpbnRDbG91ZCB9IGZyb20gJy4uL0NvbXBvbmVudHMvaGludENsb3VkJztcblxuLyoqXG4gKiBcbiAqIFZhcmlvdXMgcHJvbXB0cyBhcmUgYXZhaWxhYmxlIHRvIGd1aWRlIHRoZSB1c2VyXG4gKiB0aHJvdWdoLiBcbiAqIFxuICogRWFjaCBwcm9tcHQgYXBwZWFycyBpbiBkaWZmZXJlbnQgc3RhZ2Ugb2YgdGhlIHByb2Nlc3MuXG4gKiBcbiAqL1xuXG4gY2xhc3MgUHJvbXB0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHByb21wdF90ZXh0ID0ge1xuICAgICAgICBtZWRpdW06ICdUaGUgZmlyc3QgZGVjaXNpb24gZXZlcnkgYXJ0aXN0IGhhcyB0byBtYWtlIGlzIGNob29zaW5nIGEgbWVkaXVtOiB3aGF0IGtpbmQgb2YgYXJ0d29yayB3aWxsIGl0IGJlPyBFYWNoIGNob2ljZSBoYXMgaXRzIG93biBzcGVjaWZpY2l0aWVzIGFuZCB3aWxsIGxlYWQgeW91IGRvd24gYSBzbGlnaHRseSBkaWZmZXJlbnQgY3JlYXRpdmUgcGF0aC4gV2hpY2ggb2YgdGhlc2UgaXMgeW91ciBjYWxsaW5nPycsXG4gICAgICAgIHBhaW50aW5nOiB7XG4gICAgICAgICAgICAvL2xvb2t1cCBob2xkcyB0aGUgaGludCBjbG91ZCB2YXJpYWJsZSBmb3IgZWFjaCBzdGFnZSBvcmRlcmVkIGJ5IHN0YWdlIGlkXG4gICAgICAgICAgICBsb29rdXA6IFsncGFpbnRpbmdfdHlwZXMnLCAncGFpbnRpbmdfY29udGVudCcsICdwYWludGluZ19zZXR0aW5nJywnZW1vdGlvbnMnLCAnbG9va3NfdGVjaG5pcXVlcycsJ2FydF9zdHlsZXMnXSxcbiAgICAgICAgICAgIC8vaG9sZHMgdGhlIGd1aWRpbmcgcHJvbXB0IGZvciBlYWNoIGRpYWxvZ3VlIHN0YWdlIG5hbWVkIGJ5IHN0YWdlIGlkIChzdWNoIHRoYXQgaXQgY2FuIGJlIGNhbGxlZCBhcyBwcm9tcHRbc3RhZ2VdKVxuICAgICAgICAgICAgMTogWydMZXTigJlzIGdldCBtb3JlIHNwZWNpZmljLiBUaGVyZSBhcmUgZW5kbGVzcyBwb3NzaWJpbGl0aWVzIG9mIHdoYXQgdG8gZG8gb24gYSBjYW52YXMuIFlvdSBtaWdodCBwcmVmZXIgdGhlIGV4cHJlc3NpdmUgY29sb3VycyBvZiBvaWwgcGFpbnQsIG9yIHRoZSBnZW50bGVyIGFwcHJvYWNoIG9mIHBlbmNpbCBkcmF3aW5ncy4gSG93ZXZlciwgdGVjaG5pY2FsIHNrZXRjaGVzIGFuZCBtb3NhaWNzIGFyZSBub3Qgb2ZmIHRoZSB0YWJsZSEgRWFjaCBmb3JtIGhhcyBpdHMgbWFnaWMgYW5kIGFsbCBvZiB0aGVtIGFyZSBhdCB5b3VyIGRpc3Bvc2FsLiBOb3csIHdoaWNoIG9uZSB3aWxsIGl0IGJlPyddLFxuICAgICAgICAgICAgMjogWydPbmNlIHdlIGtub3cgaG93IHRvIGFwcHJvYWNoIHRoZSBhcnR3b3JrLCB3ZSBjYW4gc3RhcnQgZmlsbGluZyBpdCBpbi4gVGhpbmsgb2YgdGhpbmdzLCBjaGFyYWN0ZXJzIC0gdHJ1bHkgYW55dGhpbmcuIFJlbmFpc3NhbmNlIGFydHdvcmtzIGFyZSBvZnRlbiBmdWxsIG9mIHBlb3BsZSwgYWJzdHJhY3QgYXJ0d29ya3MgYXJlIGZ1bGwgb2Ygc2hhcGVzIGFuZCBjb2xvcnMsIGFuZCBzb21lIGNhbiBqdXN0IGJlIGZpbGxlZCB3aXRoIGVtcHRpbmVzcy4gR28gYWhlYWQsIGRyZWFtIGF3YXk6J10sXG4gICAgICAgICAgICAzOiBbJ1dlIGtub3cgd2hhdCB3ZSBhcmUgZm9jdXNpbmcgb24sIGJ1dCB3aGF0IGFib3V0IGV2ZXJ5dGhpbmcgYWxsIGFyb3VuZC4gV2hlcmUgaXMgdGhpcyBzY2VuZSBzZXQ/IElzIHRoZXJlIGV2ZW4gYSBzZXR0aW5nPyBNYXliZSB5b3UgYXJlIGZpbmUgd2l0aCB3aGF0IHlvdeKAmXZlIGNob3Nlbi4gVGhhdCBpcyBmaW5lIGJ5IG1lIGFzIHdlbGwuJ10sXG4gICAgICAgICAgICA0OiBbJ05vdyB0aGF0IHdlIGtub3cgd2hhdCBpcyBpbiB0aGUgYXJ0d29yaywgd2UgYWxzbyBuZWVkIHRvIGtub3cgaG93IGl0IHdpbGwgYmUgZGVwaWN0ZWQuIENhbnZhc2VzIHdpbGwgb2Z0ZW4gcmFkaWF0ZSBzb21lIGVuZXJneSAtIGNhbG1pbmcsIGVuZXJnaXppbmcsIHRoZXkgY2FuIGV2ZW4gbWFrZSB5b3UgdGlyZWQuIFRoaXMgZ29lcyBoYW5kIGluIGhhbmQgd2l0aCBlbW90aW9ucy4gQXJ0aXN0cyB3aWxsIG9mdGVuIHdhbnQgdG8gY29tbXVuaWNhdGUgc29tZSBzb3J0IG9mIGVtb3Rpb24gdGhyb3VnaCB0aGVpciBhcnQuIFRoaXMgY2FuIGNvbWUgb3V0IHNvZnRseSAtIHRocm91Z2ggY29sb3VyIHRvbmVzIGFuZCBzdHJ1Y3R1cmUsIGJ1dCBhbHNvIGV4cGxpY2l0bHkgLSB0aHJvdWdoIGRyZWFkZnVsIGV4cHJlc3Npb25zIG9yIHN5bWJvbGlzbS4gVGhpbmsgb2YgZW1vdGlvbnMgYW5kIGVuZXJnaWVzIHlvdSB3b3VsZCB3YW50IHRvIGNvbnZleSB0aHJvdWdoIHlvdXIgYXJ0d29yayEnXSxcbiAgICAgICAgICAgIDU6IFsnV2UgYXJlIGdldHRpbmcgY2xvc2UuIFRoZXJlIGFyZSBlbmRsZXNzIHN0eWxlcyBpbiB0aGUgd29ybGQgb2YgYXJ0IC0gdGhlc2UgZWl0aGVyIGhlbHAgYnJpbmcgb3V0IHRoZSB2aXN1YWxpdHkgb2YgeW91ciBzY2VuZSwgb3IgYmV0dGVyIGNvbW11bmljYXRlIHRoZSBkZXNpcmVkIG1lc3NhZ2UuIFdpdGggbXkgaGVscCwgdHJ5IHRvIGJyYWluc3Rvcm0gc3R5bGVzLCB0ZWNoaW5xdWVzIGFuZCBsb29rcyB0aGF0IHdpbGwgaGVscCBzaGFwZSB5b3VyIGFydHdvcmsgaW50byBhIHRydWx5IHBlcnNvbmFsIG1hc3RlcnBpZWNlLiBUaGluayBhYm91dCBzdHlsZXMgZnJvbSBoaXN0b3J5LCBidXQgYWxzbyBhbHNvIGNvbnRlbXBvcmFyeSBhZXN0aGV0aWNzLiBQZXJoYXBzIHlvdSBhcmUgYSBwaW9uZWVyIGFuZCBkb27igJl0IHdhbnQgdG8gbW9kZWwgeW91cnNlbGYgb24gYW55IGV4aXN0aW5nIGxvb2ssIHNvIHRoaXMgaXMgbm90IGEgbXVzdCEgJ10sXG4gICAgICAgICAgICA2OiBbJ01vc3Qgb2YgdXMgd2lsbCBiZSBkcml2ZW4gYnkgb3V0ZXIgaW5zcGlyYXRpb24sIHdoaWxsIG9mdGVuIHRha2Ugc2hhcGUgaW4gYSBwZXJzb24gb3IgYSBncm91cC4gRG8geW91IGhhdmUgYW4gaW5zcGlyYXRpb24/IElzIHRoZXJlIHNvbWVvbmUsIG9yIHNvbWV0aGluZyB0aGF0IHlvdSBhZG1pcmUgYW5kIHdpc2ggdG8gZm9sbG93IGluIHRoZWlyIGZvb3RzdGVwcz8gUGVyaGFwcyB5b3Ugd2lsbCB3YW50IHRvIGZpbmlzaCB5b3UgYXJ0d29yayBvZmYgaW4gdGhlIHN0eWxlIG9m4oCmJ11cbiAgICAgICAgfSxcbiAgICAgICAgc2N1bHB0dXJlOiB7fSxcbiAgICAgICAgcGhvdG9ncmFwaHk6IHt9XG4gICAgfVxuXG4gICAgc2VsZWN0VGV4dCA9IChtZWRpdW0sIHN0YWdlKSA9PiB7XG4gICAgICAgIFxuICAgICAgICAvL3NlbGVjdCB0aGUgYWNjb21wYW55aW5nIHRleHQgZm9yIGVhY2ggc3RhZ2VcbiAgICAgICAgaWYobWVkaXVtID09PSBcIlwiKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb21wdF90ZXh0Lm1lZGl1bTtcbiAgICAgICAgfSBlbHNlIGlmKG1lZGl1bSA9PT0gXCJwYWludGluZ1wiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb21wdF90ZXh0W21lZGl1bV1bJ2xvb2t1cCddW1N0cmluZyhzdGFnZSsxKV0pO1xuICAgICAgICAgICAgLy9kZXBlbmRpbmcgb24gdGhlIHN0YWdlLCByZXR1cm4gdGhlIGFwcHJvcHJpYXRlIHRleHRcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb21wdF90ZXh0LnBhaW50aW5nW3N0YWdlXTtcblxuICAgICAgICB9IGVsc2UgaWYobWVkaXVtID09PSBcInNjdWxwdHVyZVwiKSB7XG4gICAgICAgICAgICAvL2RlcGVuZGluZyBvbiB0aGUgc3RhZ2UsIHJldHVybiB0aGUgYXBwcm9wcmlhdGUgdGV4dFxuICAgICAgICB9IGVsc2UgaWYobWVkaXVtID09PSBcInBob3RvZ3JhcGh5XCIpIHtcbiAgICAgICAgICAgIC8vZGVwZW5kaW5nIG9uIHRoZSBzdGFnZSwgcmV0dXJuIHRoZSBhcHByb3ByaWF0ZSB0ZXh0XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBcbiAgICBzZWxlY3RTdGFnZU5hbWUgPSAobWVkaXVtLCBzdGFnZSkgPT4ge1xuICAgICAgICBpZihtZWRpdW0gIT09IFwiXCIpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvbXB0X3RleHRbbWVkaXVtXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBtZWRpdW0sIHN0YWdlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgey8qIDxIaW50Q2xvdWQgY3VycmVudFN0YWdlPXt0aGlzLnNlbGVjdFN0YWdlTmFtZShtZWRpdW0sc3RhZ2UpfS8+ICovfVxuXG4gICAgICAgICAgICAgICAgPHA+e3RoaXMuc2VsZWN0VGV4dChtZWRpdW0sIHN0YWdlKX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICApXG4gICAgfSBcblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb21wdDsiXSwibmFtZXMiOlsiUmVhY3QiLCJIaW50Q2xvdWQiLCJQcm9tcHQiLCJwcm9tcHRfdGV4dCIsIm1lZGl1bSIsInBhaW50aW5nIiwibG9va3VwIiwic2N1bHB0dXJlIiwicGhvdG9ncmFwaHkiLCJzZWxlY3RUZXh0Iiwic3RhZ2UiLCJjb25zb2xlIiwibG9nIiwiU3RyaW5nIiwic2VsZWN0U3RhZ2VOYW1lIiwicmVuZGVyIiwicHJvcHMiLCJkaXYiLCJwIiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Components/prompt.js\n"));

/***/ })

});