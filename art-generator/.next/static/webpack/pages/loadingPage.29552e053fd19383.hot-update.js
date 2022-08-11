"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/loadingPage",{

/***/ "./src/Components/assembler_Obj.js":
/*!*****************************************!*\
  !*** ./src/Components/assembler_Obj.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

eval(__webpack_require__.ts("/****\n * This object stores the user input for various stages \n * which can be assembled at the end to form full string input into DALLE2.\n */ \nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nvar _slicedToArray = (__webpack_require__(/*! @swc/helpers/lib/_sliced_to_array.js */ \"./node_modules/@swc/helpers/lib/_sliced_to_array.js\")[\"default\"]);\nvar responses = {\n    painting: {\n        type: \"\",\n        content: [],\n        setting: [],\n        emotion: [],\n        looks: [],\n        style: []\n    },\n    sculpture: {},\n    photography: {}\n};\nvar finalDalleAssembled = {\n    text: \"\"\n};\nfunction assembleFinalDalle(text) {\n    finalDalleAssembled.text = text;\n}\n//Function to assemble full response (input int DALLE)\nfunction assembleResponse(responses, medium) {\n    /***\n     * This function assembles the user input from all stages into a full string input into DALLE2.\n     * responses: object containing user input for each stage (object)\n     */ var assembledResponse = \"\";\n    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n    try {\n        for(var _iterator = Object.entries(responses[medium])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n            var _value = _slicedToArray(_step.value, 2), key = _value[0], value = _value[1];\n            if (value.constructor == Array) {\n                assembledResponse += value.join(\"\");\n            } else {\n                assembledResponse += value;\n            }\n        }\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally{\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return != null) {\n                _iterator.return();\n            }\n        } finally{\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n    return assembledResponse;\n}\nfunction storeResponse(userInput, stage, responses, medium) {\n    /***\n     * This function stores the user input for the current stage into Responses_Painting object.\n     * userInput: input from the user for the current stage (string)\n     * stage: current stage id (integer)\n     */ if (medium === \"painting\") {\n        if (stage == 1) {\n            responses[medium][Object.keys(responses[medium])[stage - 1]] = userInput;\n        } else if (stage == 2 && userInput.length > 0) {\n            responses[medium][Object.keys(responses[medium])[stage - 1]].push(\" of \" + userInput);\n        } else if (stage == 3 && userInput.length > 0) {\n            responses[medium][Object.keys(responses[medium])[stage - 1]].push(\" \" + userInput);\n        } else if ((stage == 4 || stage == 5) && userInput.length > 0) {\n            responses[medium][Object.keys(responses[medium])[stage - 1]].push(\", \" + userInput);\n        } else if (stage == 6 && userInput.length > 0) {\n            responses[medium][Object.keys(responses[medium])[stage - 1]].push(\", in the style of \" + userInput);\n        }\n    }\n}\nmodule.exports = {\n    responses: responses,\n    assembleFinalDalle: assembleFinalDalle,\n    finalDalleAssembled: finalDalleAssembled,\n    assembleResponse: assembleResponse,\n    storeResponse: storeResponse\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9hc3NlbWJsZXJfT2JqLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBOzs7Q0FHQyxHQUVEOzs7OztBQUFBLElBQUlBLFNBQVMsR0FBRztJQUNaQyxRQUFRLEVBQUU7UUFDTkMsSUFBSSxFQUFFLEVBQUU7UUFFUkMsT0FBTyxFQUFFLEVBQUU7UUFFWEMsT0FBTyxFQUFFLEVBQUU7UUFFWEMsT0FBTyxFQUFFLEVBQUU7UUFFWEMsS0FBSyxFQUFFLEVBQUU7UUFFVEMsS0FBSyxFQUFFLEVBQUU7S0FDWjtJQUVEQyxTQUFTLEVBQUUsRUFBRTtJQUViQyxXQUFXLEVBQUUsRUFBRTtDQUNsQjtBQUVELElBQUlDLG1CQUFtQixHQUFHO0lBQ3RCQyxJQUFJLEVBQUUsRUFBRTtDQUNYO0FBRUQsU0FBU0Msa0JBQWtCLENBQUNELElBQUksRUFBRTtJQUM5QkQsbUJBQW1CLENBQUNDLElBQUksR0FBR0EsSUFBSSxDQUFDO0NBQ25DO0FBRUQsc0RBQXNEO0FBQ3RELFNBQVNFLGdCQUFnQixDQUFDYixTQUFTLEVBQUVjLE1BQU0sRUFBRTtJQUN6Qzs7O0tBR0MsR0FDRCxJQUFJQyxpQkFBaUIsR0FBRyxFQUFFO1FBQ3JCLHlCQUFrQixTQUFsQixpQkFBa0IsVUFBbEIsY0FBa0I7O1FBQXZCLFFBQUssU0FBa0IsR0FBSUMsTUFBTSxDQUFDQyxPQUFPLENBQUNqQixTQUFTLENBQUNjLE1BQU0sQ0FBQyxDQUFDLHFCQUF2RCxLQUFrQixJQUFsQix5QkFBa0IsSUFBbEIsS0FBa0IsR0FBbEIsU0FBa0IsZ0JBQWxCLHlCQUFrQixRQUF1QztZQUF6RCxpQ0FBa0IsWUFBWEksR0FBRyxjQUFFQyxLQUFLO1lBRWxCLElBQUlBLEtBQUssQ0FBQ0MsV0FBVyxJQUFJQyxLQUFLLEVBQUM7Z0JBQzNCTixpQkFBaUIsSUFBSUksS0FBSyxDQUFDRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDdkMsTUFFRDtnQkFDSVAsaUJBQWlCLElBQUlJLEtBQUssQ0FBQzthQUM5QjtTQUNKOztRQVRJLGlCQUFrQjtRQUFsQixjQUFrQjs7O2lCQUFsQix5QkFBa0IsSUFBbEIsU0FBa0I7Z0JBQWxCLFNBQWtCOzs7Z0JBQWxCLGlCQUFrQjtzQkFBbEIsY0FBa0I7Ozs7SUFVdkIsT0FBT0osaUJBQWlCLENBQUM7Q0FDNUI7QUFHRCxTQUFTUSxhQUFhLENBQUNDLFNBQVMsRUFBRUMsS0FBSyxFQUFFekIsU0FBUyxFQUFFYyxNQUFNLEVBQUU7SUFDeEQ7Ozs7S0FJQyxHQUVELElBQUdBLE1BQU0sS0FBSyxVQUFVLEVBQUU7UUFDdEIsSUFBSVcsS0FBSyxJQUFJLENBQUMsRUFDZDtZQUNJekIsU0FBUyxDQUFDYyxNQUFNLENBQUMsQ0FBQ0UsTUFBTSxDQUFDVSxJQUFJLENBQUMxQixTQUFTLENBQUNjLE1BQU0sQ0FBQyxDQUFDLENBQUNXLEtBQUssR0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHRCxTQUFTLENBQUM7U0FDMUUsTUFDSSxJQUFJQyxLQUFLLElBQUksQ0FBQyxJQUFJRCxTQUFTLENBQUNHLE1BQU0sR0FBRyxDQUFDLEVBQzNDO1lBQ0kzQixTQUFTLENBQUNjLE1BQU0sQ0FBQyxDQUFDRSxNQUFNLENBQUNVLElBQUksQ0FBQzFCLFNBQVMsQ0FBQ2MsTUFBTSxDQUFDLENBQUMsQ0FBQ1csS0FBSyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNHLElBQUksQ0FBQyxNQUFNLEdBQUdKLFNBQVMsQ0FBQyxDQUFDO1NBQ3ZGLE1BQ0ksSUFBSUMsS0FBSyxJQUFJLENBQUMsSUFBSUQsU0FBUyxDQUFDRyxNQUFNLEdBQUcsQ0FBQyxFQUMzQztZQUNJM0IsU0FBUyxDQUFDYyxNQUFNLENBQUMsQ0FBQ0UsTUFBTSxDQUFDVSxJQUFJLENBQUMxQixTQUFTLENBQUNjLE1BQU0sQ0FBQyxDQUFDLENBQUNXLEtBQUssR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDRyxJQUFJLENBQUMsR0FBRyxHQUFHSixTQUFTLENBQUMsQ0FBQztTQUNwRixNQUNJLElBQUksQ0FBQ0MsS0FBSyxJQUFJLENBQUMsSUFBSUEsS0FBSyxJQUFJLENBQUMsQ0FBQyxJQUFJRCxTQUFTLENBQUNHLE1BQU0sR0FBRyxDQUFDLEVBQzNEO1lBQ0kzQixTQUFTLENBQUNjLE1BQU0sQ0FBQyxDQUFDRSxNQUFNLENBQUNVLElBQUksQ0FBQzFCLFNBQVMsQ0FBQ2MsTUFBTSxDQUFDLENBQUMsQ0FBQ1csS0FBSyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNHLElBQUksQ0FBQyxJQUFJLEdBQUdKLFNBQVMsQ0FBQyxDQUFDO1NBQ3JGLE1BQ0ksSUFBSUMsS0FBSyxJQUFJLENBQUMsSUFBSUQsU0FBUyxDQUFDRyxNQUFNLEdBQUcsQ0FBQyxFQUMzQztZQUNJM0IsU0FBUyxDQUFDYyxNQUFNLENBQUMsQ0FBQ0UsTUFBTSxDQUFDVSxJQUFJLENBQUMxQixTQUFTLENBQUNjLE1BQU0sQ0FBQyxDQUFDLENBQUNXLEtBQUssR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDRyxJQUFJLENBQUMsb0JBQW9CLEdBQUdKLFNBQVMsQ0FBQyxDQUFDO1NBQ3JHO0tBQ0o7Q0FHSjtBQUVESyxNQUFNLENBQUNDLE9BQU8sR0FBRztJQUFFOUIsU0FBUyxFQUFUQSxTQUFTO0lBQUVZLGtCQUFrQixFQUFsQkEsa0JBQWtCO0lBQUVGLG1CQUFtQixFQUFuQkEsbUJBQW1CO0lBQUVHLGdCQUFnQixFQUFoQkEsZ0JBQWdCO0lBQUVVLGFBQWEsRUFBYkEsYUFBYTtDQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvYXNzZW1ibGVyX09iai5qcz8wMjM3Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKioqXG4gKiBUaGlzIG9iamVjdCBzdG9yZXMgdGhlIHVzZXIgaW5wdXQgZm9yIHZhcmlvdXMgc3RhZ2VzIFxuICogd2hpY2ggY2FuIGJlIGFzc2VtYmxlZCBhdCB0aGUgZW5kIHRvIGZvcm0gZnVsbCBzdHJpbmcgaW5wdXQgaW50byBEQUxMRTIuXG4gKi9cblxudmFyIHJlc3BvbnNlcyA9IHtcbiAgICBwYWludGluZzoge1xuICAgICAgICB0eXBlOiBcIlwiLFxuXG4gICAgICAgIGNvbnRlbnQ6IFtdLC8vYWRkIG5ldyBhcyAnIG9mICcgKyAnZHJhZ29ucycgT1IgJyBhbmQgJyArICdob3VzZXBsYW50cydcbiAgICAgICAgXG4gICAgICAgIHNldHRpbmc6IFtdLCAvL2FkZCBuZXcgYXMgJyAnKydpbiBhIHBhcmsnXG4gICAgXG4gICAgICAgIGVtb3Rpb246IFtdLC8vYWRkIG5ldyBhcyAnLCAnICsgJ2dyaW1tJ1xuICAgIFxuICAgICAgICBsb29rczogW10sLy9hZGQgbmV3IGFzICcsICcgKyAnZnV0dXJpc3RpYydcbiAgICAgICAgXG4gICAgICAgIHN0eWxlOiBbXVxuICAgIH0sXG5cbiAgICBzY3VscHR1cmU6IHt9LFxuXG4gICAgcGhvdG9ncmFwaHk6IHt9LFxufTtcblxudmFyIGZpbmFsRGFsbGVBc3NlbWJsZWQgPSB7XG4gICAgdGV4dDogXCJcIixcbn07XG5cbmZ1bmN0aW9uIGFzc2VtYmxlRmluYWxEYWxsZSh0ZXh0KSB7XG4gICAgZmluYWxEYWxsZUFzc2VtYmxlZC50ZXh0ID0gdGV4dDtcbn1cblxuLy9GdW5jdGlvbiB0byBhc3NlbWJsZSBmdWxsIHJlc3BvbnNlIChpbnB1dCBpbnQgREFMTEUpXG5mdW5jdGlvbiBhc3NlbWJsZVJlc3BvbnNlKHJlc3BvbnNlcywgbWVkaXVtKSB7XG4gICAgLyoqKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gYXNzZW1ibGVzIHRoZSB1c2VyIGlucHV0IGZyb20gYWxsIHN0YWdlcyBpbnRvIGEgZnVsbCBzdHJpbmcgaW5wdXQgaW50byBEQUxMRTIuXG4gICAgICogcmVzcG9uc2VzOiBvYmplY3QgY29udGFpbmluZyB1c2VyIGlucHV0IGZvciBlYWNoIHN0YWdlIChvYmplY3QpXG4gICAgICovXG4gICAgbGV0IGFzc2VtYmxlZFJlc3BvbnNlID0gJyc7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocmVzcG9uc2VzW21lZGl1bV0pKSB7XG4gICAgICAgIFxuICAgICAgICBpZiAodmFsdWUuY29uc3RydWN0b3IgPT0gQXJyYXkpe1xuICAgICAgICAgICAgYXNzZW1ibGVkUmVzcG9uc2UgKz0gdmFsdWUuam9pbignJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBcbiAgICAgICAge1xuICAgICAgICAgICAgYXNzZW1ibGVkUmVzcG9uc2UgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFzc2VtYmxlZFJlc3BvbnNlO1xufVxuICAgIFxuICAgXG5mdW5jdGlvbiBzdG9yZVJlc3BvbnNlKHVzZXJJbnB1dCwgc3RhZ2UsIHJlc3BvbnNlcywgbWVkaXVtKSB7XG4gICAgLyoqKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gc3RvcmVzIHRoZSB1c2VyIGlucHV0IGZvciB0aGUgY3VycmVudCBzdGFnZSBpbnRvIFJlc3BvbnNlc19QYWludGluZyBvYmplY3QuXG4gICAgICogdXNlcklucHV0OiBpbnB1dCBmcm9tIHRoZSB1c2VyIGZvciB0aGUgY3VycmVudCBzdGFnZSAoc3RyaW5nKVxuICAgICAqIHN0YWdlOiBjdXJyZW50IHN0YWdlIGlkIChpbnRlZ2VyKVxuICAgICAqL1xuXG4gICAgaWYobWVkaXVtID09PSBcInBhaW50aW5nXCIpIHtcbiAgICAgICAgaWYgKHN0YWdlID09IDEpIFxuICAgICAgICB7XG4gICAgICAgICAgICByZXNwb25zZXNbbWVkaXVtXVtPYmplY3Qua2V5cyhyZXNwb25zZXNbbWVkaXVtXSlbc3RhZ2UtMV1dID0gdXNlcklucHV0OyBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGFnZSA9PSAyICYmIHVzZXJJbnB1dC5sZW5ndGggPiAwKSBcbiAgICAgICAge1xuICAgICAgICAgICAgcmVzcG9uc2VzW21lZGl1bV1bT2JqZWN0LmtleXMocmVzcG9uc2VzW21lZGl1bV0pW3N0YWdlLTFdXS5wdXNoKCcgb2YgJyArIHVzZXJJbnB1dCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhZ2UgPT0gMyAmJiB1c2VySW5wdXQubGVuZ3RoID4gMCkgXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlc3BvbnNlc1ttZWRpdW1dW09iamVjdC5rZXlzKHJlc3BvbnNlc1ttZWRpdW1dKVtzdGFnZS0xXV0ucHVzaCgnICcgKyB1c2VySW5wdXQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKChzdGFnZSA9PSA0IHx8IHN0YWdlID09IDUpICYmIHVzZXJJbnB1dC5sZW5ndGggPiAwKSBcbiAgICAgICAge1xuICAgICAgICAgICAgcmVzcG9uc2VzW21lZGl1bV1bT2JqZWN0LmtleXMocmVzcG9uc2VzW21lZGl1bV0pW3N0YWdlLTFdXS5wdXNoKCcsICcgKyB1c2VySW5wdXQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0YWdlID09IDYgJiYgdXNlcklucHV0Lmxlbmd0aCA+IDApIFxuICAgICAgICB7XG4gICAgICAgICAgICByZXNwb25zZXNbbWVkaXVtXVtPYmplY3Qua2V5cyhyZXNwb25zZXNbbWVkaXVtXSlbc3RhZ2UtMV1dLnB1c2goJywgaW4gdGhlIHN0eWxlIG9mICcgKyB1c2VySW5wdXQpO1xuICAgICAgICB9IFxuICAgIH1cbiAgICBcbiAgICBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IHJlc3BvbnNlcywgYXNzZW1ibGVGaW5hbERhbGxlLCBmaW5hbERhbGxlQXNzZW1ibGVkLCBhc3NlbWJsZVJlc3BvbnNlLCBzdG9yZVJlc3BvbnNlIH07Il0sIm5hbWVzIjpbInJlc3BvbnNlcyIsInBhaW50aW5nIiwidHlwZSIsImNvbnRlbnQiLCJzZXR0aW5nIiwiZW1vdGlvbiIsImxvb2tzIiwic3R5bGUiLCJzY3VscHR1cmUiLCJwaG90b2dyYXBoeSIsImZpbmFsRGFsbGVBc3NlbWJsZWQiLCJ0ZXh0IiwiYXNzZW1ibGVGaW5hbERhbGxlIiwiYXNzZW1ibGVSZXNwb25zZSIsIm1lZGl1bSIsImFzc2VtYmxlZFJlc3BvbnNlIiwiT2JqZWN0IiwiZW50cmllcyIsImtleSIsInZhbHVlIiwiY29uc3RydWN0b3IiLCJBcnJheSIsImpvaW4iLCJzdG9yZVJlc3BvbnNlIiwidXNlcklucHV0Iiwic3RhZ2UiLCJrZXlzIiwibGVuZ3RoIiwicHVzaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Components/assembler_Obj.js\n"));

/***/ })

});