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

/***/ "./src/Components/assembler_Obj.js":
/*!*****************************************!*\
  !*** ./src/Components/assembler_Obj.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

eval(__webpack_require__.ts("/****\n * This object stores the user input for various stages \n * which can be assembled at the end to form full string input into DALLE2.\n */ \nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nvar _slicedToArray = (__webpack_require__(/*! @swc/helpers/lib/_sliced_to_array.js */ \"./node_modules/@swc/helpers/lib/_sliced_to_array.js\")[\"default\"]);\nvar responses = {\n    painting: {\n        medium: \"\",\n        content: [],\n        setting: [],\n        emotion: [],\n        looks: [],\n        style: []\n    },\n    sculpture: {},\n    photography: {}\n};\n//Function to assemble full response (input int DALLE)\nfunction assembleResponse(responses) {\n    /***\n     * This function assembles the user input from all stages into a full string input into DALLE2.\n     * responses: object containing user input for each stage (object)\n     */ var assembledResponse = \"\";\n    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n    try {\n        for(var _iterator = Object.entries(responses)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n            var _value = _slicedToArray(_step.value, 2), key = _value[0], value = _value[1];\n            if (value.constructor == Array) {\n                assembledResponse += value.join(\"\");\n            } else {\n                assembledResponse += value;\n            }\n        }\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally{\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return != null) {\n                _iterator.return();\n            }\n        } finally{\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n    return assembledResponse;\n}\nfunction storeResponse(userInput, stage, responses) {\n    /***\n     * This function stores the user input for the current stage into Responses_Painting object.\n     * userInput: input from the user for the current stage (string)\n     * stage: current stage id (integer)\n     */ if (stage == 1) {\n        responses[Object.keys(responses)[stage - 1]] = userInput;\n    } else if (stage == 2 && userInput.length > 0) {\n        responses[Object.keys(responses)[stage - 1]].push(\" of \" + userInput);\n    } else if (stage == 3 && userInput.length > 0) {\n        responses[Object.keys(responses)[stage - 1]].push(\" \" + userInput);\n    } else if ((stage == 4 || stage == 5) && userInput.length > 0) {\n        responses[Object.keys(responses)[stage - 1]].push(\", \" + userInput);\n    } else if (stage == 6 && userInput.length > 0) {\n        responses[Object.keys(responses)[stage - 1]].push(\", in the style of \" + userInput);\n    }\n}\nmodule.exports = {\n    responses: responses,\n    assembleResponse: assembleResponse,\n    storeResponse: storeResponse\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9hc3NlbWJsZXJfT2JqLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBOzs7Q0FHQyxHQUVEOzs7OztBQUFBLElBQUlBLFNBQVMsR0FBRztJQUNaQyxRQUFRLEVBQUU7UUFDTkMsTUFBTSxFQUFFLEVBQUU7UUFFVkMsT0FBTyxFQUFFLEVBQUU7UUFFWEMsT0FBTyxFQUFFLEVBQUU7UUFFWEMsT0FBTyxFQUFFLEVBQUU7UUFFWEMsS0FBSyxFQUFFLEVBQUU7UUFFVEMsS0FBSyxFQUFFLEVBQUU7S0FDWjtJQUVEQyxTQUFTLEVBQUUsRUFBRTtJQUViQyxXQUFXLEVBQUUsRUFBRTtDQUNsQjtBQUVELHNEQUFzRDtBQUN0RCxTQUFTQyxnQkFBZ0IsQ0FBQ1YsU0FBUyxFQUFFO0lBQ2pDOzs7S0FHQyxHQUNELElBQUlXLGlCQUFpQixHQUFHLEVBQUU7UUFDckIseUJBQWtCLFNBQWxCLGlCQUFrQixVQUFsQixjQUFrQjs7UUFBdkIsUUFBSyxTQUFrQixHQUFJQyxNQUFNLENBQUNDLE9BQU8sQ0FBQ2IsU0FBUyxDQUFDLHFCQUEvQyxLQUFrQixJQUFsQix5QkFBa0IsSUFBbEIsS0FBa0IsR0FBbEIsU0FBa0IsZ0JBQWxCLHlCQUFrQixRQUErQjtZQUFqRCxpQ0FBa0IsWUFBWGMsR0FBRyxjQUFFQyxLQUFLO1lBRWxCLElBQUlBLEtBQUssQ0FBQ0MsV0FBVyxJQUFJQyxLQUFLLEVBQUM7Z0JBQUNOLGlCQUFpQixJQUFJSSxLQUFLLENBQUNHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUFDLE1BR2hFO2dCQUNEUCxpQkFBaUIsSUFBSUksS0FBSyxDQUFDO2FBQUM7U0FDL0I7O1FBUEEsaUJBQWtCO1FBQWxCLGNBQWtCOzs7aUJBQWxCLHlCQUFrQixJQUFsQixTQUFrQjtnQkFBbEIsU0FBa0I7OztnQkFBbEIsaUJBQWtCO3NCQUFsQixjQUFrQjs7OztJQVFuQixPQUFPSixpQkFBaUIsQ0FBQztDQUM1QjtBQUdMLFNBQVNRLGFBQWEsQ0FBQ0MsU0FBUyxFQUFFQyxLQUFLLEVBQUVyQixTQUFTLEVBQUU7SUFDaEQ7Ozs7S0FJQyxHQUNBLElBQUlxQixLQUFLLElBQUksQ0FBQyxFQUFFO1FBQ2hCckIsU0FBUyxDQUFDWSxNQUFNLENBQUNVLElBQUksQ0FBQ3RCLFNBQVMsQ0FBQyxDQUFDcUIsS0FBSyxHQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdELFNBQVMsQ0FBQztLQUFFLE1BQ3hELElBQUlDLEtBQUssSUFBSSxDQUFDLElBQUlELFNBQVMsQ0FBQ0csTUFBTSxHQUFHLENBQUMsRUFBRTtRQUN6Q3ZCLFNBQVMsQ0FBQ1ksTUFBTSxDQUFDVSxJQUFJLENBQUN0QixTQUFTLENBQUMsQ0FBQ3FCLEtBQUssR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDRyxJQUFJLENBQUMsTUFBTSxHQUFHSixTQUFTLENBQUMsQ0FBQztLQUFDLE1BQ2xFLElBQUlDLEtBQUssSUFBSSxDQUFDLElBQUlELFNBQVMsQ0FBQ0csTUFBTSxHQUFHLENBQUMsRUFBRTtRQUMzQ3ZCLFNBQVMsQ0FBQ1ksTUFBTSxDQUFDVSxJQUFJLENBQUN0QixTQUFTLENBQUMsQ0FBQ3FCLEtBQUssR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDRyxJQUFJLENBQUMsR0FBRyxHQUFHSixTQUFTLENBQUMsQ0FBQztLQUFDLE1BQy9ELElBQUksQ0FBQ0MsS0FBSyxJQUFJLENBQUMsSUFBSUEsS0FBSyxJQUFJLENBQUMsQ0FBQyxJQUFJRCxTQUFTLENBQUNHLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDM0R2QixTQUFTLENBQUNZLE1BQU0sQ0FBQ1UsSUFBSSxDQUFDdEIsU0FBUyxDQUFDLENBQUNxQixLQUFLLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0csSUFBSSxDQUFDLElBQUksR0FBR0osU0FBUyxDQUFDLENBQUM7S0FBQyxNQUNoRSxJQUFJQyxLQUFLLElBQUksQ0FBQyxJQUFJRCxTQUFTLENBQUNHLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDM0N2QixTQUFTLENBQUNZLE1BQU0sQ0FBQ1UsSUFBSSxDQUFDdEIsU0FBUyxDQUFDLENBQUNxQixLQUFLLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0csSUFBSSxDQUFDLG9CQUFvQixHQUFHSixTQUFTLENBQUMsQ0FBQztLQUFDO0NBQ3ZGO0FBRURLLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHO0lBQUUxQixTQUFTLEVBQVRBLFNBQVM7SUFBRVUsZ0JBQWdCLEVBQWhCQSxnQkFBZ0I7SUFBRVMsYUFBYSxFQUFiQSxhQUFhO0NBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvQ29tcG9uZW50cy9hc3NlbWJsZXJfT2JqLmpzPzAyMzciXSwic291cmNlc0NvbnRlbnQiOlsiLyoqKipcbiAqIFRoaXMgb2JqZWN0IHN0b3JlcyB0aGUgdXNlciBpbnB1dCBmb3IgdmFyaW91cyBzdGFnZXMgXG4gKiB3aGljaCBjYW4gYmUgYXNzZW1ibGVkIGF0IHRoZSBlbmQgdG8gZm9ybSBmdWxsIHN0cmluZyBpbnB1dCBpbnRvIERBTExFMi5cbiAqL1xuXG52YXIgcmVzcG9uc2VzID0ge1xuICAgIHBhaW50aW5nOiB7XG4gICAgICAgIG1lZGl1bTogXCJcIixcblxuICAgICAgICBjb250ZW50OiBbXSwvL2FkZCBuZXcgYXMgJyBvZiAnICsgJ2RyYWdvbnMnIE9SICcgYW5kICcgKyAnaG91c2VwbGFudHMnXG4gICAgICAgIFxuICAgICAgICBzZXR0aW5nOiBbXSwgLy9hZGQgbmV3IGFzICcgJysnaW4gYSBwYXJrJ1xuICAgIFxuICAgICAgICBlbW90aW9uOiBbXSwvL2FkZCBuZXcgYXMgJywgJyArICdncmltbSdcbiAgICBcbiAgICAgICAgbG9va3M6IFtdLC8vYWRkIG5ldyBhcyAnLCAnICsgJ2Z1dHVyaXN0aWMnXG4gICAgICAgIFxuICAgICAgICBzdHlsZTogW11cbiAgICB9LFxuXG4gICAgc2N1bHB0dXJlOiB7fSxcblxuICAgIHBob3RvZ3JhcGh5OiB7fSxcbn07XG5cbi8vRnVuY3Rpb24gdG8gYXNzZW1ibGUgZnVsbCByZXNwb25zZSAoaW5wdXQgaW50IERBTExFKVxuZnVuY3Rpb24gYXNzZW1ibGVSZXNwb25zZShyZXNwb25zZXMpIHtcbiAgICAvKioqXG4gICAgICogVGhpcyBmdW5jdGlvbiBhc3NlbWJsZXMgdGhlIHVzZXIgaW5wdXQgZnJvbSBhbGwgc3RhZ2VzIGludG8gYSBmdWxsIHN0cmluZyBpbnB1dCBpbnRvIERBTExFMi5cbiAgICAgKiByZXNwb25zZXM6IG9iamVjdCBjb250YWluaW5nIHVzZXIgaW5wdXQgZm9yIGVhY2ggc3RhZ2UgKG9iamVjdClcbiAgICAgKi9cbiAgICBsZXQgYXNzZW1ibGVkUmVzcG9uc2UgPSAnJztcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhyZXNwb25zZXMpKSB7XG4gICAgICAgIFxuICAgICAgICBpZiAodmFsdWUuY29uc3RydWN0b3IgPT0gQXJyYXkpe2Fzc2VtYmxlZFJlc3BvbnNlICs9IHZhbHVlLmpvaW4oJycpO31cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFzc2VtYmxlZFJlc3BvbnNlICs9IHZhbHVlO31cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXNzZW1ibGVkUmVzcG9uc2U7XG4gICAgfVxuICAgIFxuICAgXG5mdW5jdGlvbiBzdG9yZVJlc3BvbnNlKHVzZXJJbnB1dCwgc3RhZ2UsIHJlc3BvbnNlcykge1xuICAgIC8qKipcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHN0b3JlcyB0aGUgdXNlciBpbnB1dCBmb3IgdGhlIGN1cnJlbnQgc3RhZ2UgaW50byBSZXNwb25zZXNfUGFpbnRpbmcgb2JqZWN0LlxuICAgICAqIHVzZXJJbnB1dDogaW5wdXQgZnJvbSB0aGUgdXNlciBmb3IgdGhlIGN1cnJlbnQgc3RhZ2UgKHN0cmluZylcbiAgICAgKiBzdGFnZTogY3VycmVudCBzdGFnZSBpZCAoaW50ZWdlcilcbiAgICAgKi9cbiAgICAgaWYgKHN0YWdlID09IDEpIHtcbiAgICBcdHJlc3BvbnNlc1tPYmplY3Qua2V5cyhyZXNwb25zZXMpW3N0YWdlLTFdXSA9IHVzZXJJbnB1dDsgfVxuXHRlbHNlIGlmIChzdGFnZSA9PSAyICYmIHVzZXJJbnB1dC5sZW5ndGggPiAwKSB7XG4gICAgXHRyZXNwb25zZXNbT2JqZWN0LmtleXMocmVzcG9uc2VzKVtzdGFnZS0xXV0ucHVzaCgnIG9mICcgKyB1c2VySW5wdXQpO31cbiAgXHRlbHNlIGlmIChzdGFnZSA9PSAzICYmIHVzZXJJbnB1dC5sZW5ndGggPiAwKSB7XG4gICAgXHRyZXNwb25zZXNbT2JqZWN0LmtleXMocmVzcG9uc2VzKVtzdGFnZS0xXV0ucHVzaCgnICcgKyB1c2VySW5wdXQpO31cbiAgXHRlbHNlIGlmICgoc3RhZ2UgPT0gNCB8fCBzdGFnZSA9PSA1KSAmJiB1c2VySW5wdXQubGVuZ3RoID4gMCkge1xuICAgIFx0cmVzcG9uc2VzW09iamVjdC5rZXlzKHJlc3BvbnNlcylbc3RhZ2UtMV1dLnB1c2goJywgJyArIHVzZXJJbnB1dCk7fVxuICBcdGVsc2UgaWYgKHN0YWdlID09IDYgJiYgdXNlcklucHV0Lmxlbmd0aCA+IDApIHtcbiAgICBcdHJlc3BvbnNlc1tPYmplY3Qua2V5cyhyZXNwb25zZXMpW3N0YWdlLTFdXS5wdXNoKCcsIGluIHRoZSBzdHlsZSBvZiAnICsgdXNlcklucHV0KTt9IFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVzcG9uc2VzLCBhc3NlbWJsZVJlc3BvbnNlLCBzdG9yZVJlc3BvbnNlIH07Il0sIm5hbWVzIjpbInJlc3BvbnNlcyIsInBhaW50aW5nIiwibWVkaXVtIiwiY29udGVudCIsInNldHRpbmciLCJlbW90aW9uIiwibG9va3MiLCJzdHlsZSIsInNjdWxwdHVyZSIsInBob3RvZ3JhcGh5IiwiYXNzZW1ibGVSZXNwb25zZSIsImFzc2VtYmxlZFJlc3BvbnNlIiwiT2JqZWN0IiwiZW50cmllcyIsImtleSIsInZhbHVlIiwiY29uc3RydWN0b3IiLCJBcnJheSIsImpvaW4iLCJzdG9yZVJlc3BvbnNlIiwidXNlcklucHV0Iiwic3RhZ2UiLCJrZXlzIiwibGVuZ3RoIiwicHVzaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Components/assembler_Obj.js\n"));

/***/ })

});