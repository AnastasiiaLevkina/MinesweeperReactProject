"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/main.jsx":
/*!*********************************!*\
  !*** ./src/components/main.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./.yarn/__virtual__/next-virtual-7b2e7b0c22/5/AppData/Local/Yarn/Berry/cache/next-npm-14.2.4-37fb4e5b51-10c0.zip/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./.yarn/__virtual__/next-virtual-7b2e7b0c22/5/AppData/Local/Yarn/Berry/cache/next-npm-14.2.4-37fb4e5b51-10c0.zip/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _difficultybutton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./difficultybutton */ \"(app-pages-browser)/./src/components/difficultybutton.jsx\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./board */ \"(app-pages-browser)/./src/components/board.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Main() {\n    _s();\n    // The difficulty variables save the width, height and number of mines\n    const beginnerDifficulty = [\n        9,\n        9,\n        10\n    ];\n    const intermediateDifficulty = [\n        16,\n        16,\n        40\n    ];\n    const expertDifficulty = [\n        16,\n        30,\n        99\n    ];\n    const [isOnCustomDifficulty, setIsOnCustomDifficulty] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [boardRows, setBoardRows] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(expertDifficulty[0]);\n    const [boardColumns, setBoardColumns] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(expertDifficulty[1]);\n    const [minesNum, setMinesNum] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(expertDifficulty[2]);\n    const [boardData, setBoardData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(boardRows).fill(Array(boardColumns).fill(\"*\")));\n    function generateNewBoard() {\n        setBoardData(Array(boardRows).fill(Array(boardColumns).fill(\"*\")));\n    //console.log(boardData)\n    }\n    function handleCustomDifficultySelected() {\n        setIsOnCustomDifficulty(true);\n    }\n    function onDifficultySelected(difficulty) {\n        setIsOnCustomDifficulty(false);\n        setBoardRows(difficulty[0]);\n        setBoardColumns(difficulty[1]);\n        setMinesNum(difficulty[2]);\n        console.log(difficulty);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_difficultybutton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                value: \"Beginner\",\n                onButtonClicked: ()=>onDifficultySelected(beginnerDifficulty)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_difficultybutton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                value: \"Intermediate\",\n                onButtonClicked: ()=>onDifficultySelected(intermediateDifficulty)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_difficultybutton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                value: \"Expert\",\n                onButtonClicked: ()=>onDifficultySelected(expertDifficulty)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_difficultybutton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                value: \"Custom\",\n                onButtonClicked: ()=>handleCustomDifficultySelected\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this),\n            isOnCustomDifficulty && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: (e)=>console.log(eee),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        placeholder: \"Message\",\n                        value: message,\n                        onChange: (e)=>setMessage(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                lineNumber: 46,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                lineNumber: 59,\n                columnNumber: 19\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_board__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                boardRows: boardRows,\n                boardColumns: boardColumns,\n                minesNum: minesNum\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Main, \"cjA9lPSkLDzyvGO4ZRJmDUSRBMA=\");\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL21haW4uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ2dDO0FBQ2lCO0FBQ3RCO0FBRVosU0FBU0c7O0lBQ3BCLHNFQUFzRTtJQUN0RSxNQUFNQyxxQkFBcUI7UUFBQztRQUFHO1FBQUc7S0FBRztJQUNyQyxNQUFNQyx5QkFBeUI7UUFBQztRQUFJO1FBQUk7S0FBRztJQUMzQyxNQUFNQyxtQkFBbUI7UUFBQztRQUFJO1FBQUk7S0FBRztJQUdyQyxNQUFNLENBQUNDLHNCQUFzQkMsd0JBQXdCLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ2pFLE1BQU0sQ0FBQ1MsV0FBV0MsYUFBYSxHQUFHViwrQ0FBUUEsQ0FBQ00sZ0JBQWdCLENBQUMsRUFBRTtJQUM5RCxNQUFNLENBQUNLLGNBQWNDLGdCQUFnQixHQUFHWiwrQ0FBUUEsQ0FBQ00sZ0JBQWdCLENBQUMsRUFBRTtJQUNwRSxNQUFNLENBQUNPLFVBQVVDLFlBQVksR0FBR2QsK0NBQVFBLENBQUNNLGdCQUFnQixDQUFDLEVBQUU7SUFDNUQsTUFBTSxDQUFDUyxXQUFXQyxhQUFhLEdBQUdoQiwrQ0FBUUEsQ0FBQ2lCLE1BQU1SLFdBQVdTLElBQUksQ0FBQ0QsTUFBTU4sY0FBY08sSUFBSSxDQUFDO0lBRTFGLFNBQVNDO1FBQ0xILGFBQWFDLE1BQU1SLFdBQVdTLElBQUksQ0FBQ0QsTUFBTU4sY0FBY08sSUFBSSxDQUFDO0lBRTVELHdCQUF3QjtJQUM1QjtJQUVBLFNBQVNFO1FBQ0xaLHdCQUF3QjtJQUM1QjtJQUVBLFNBQVNhLHFCQUFxQkMsVUFBVTtRQUNwQ2Qsd0JBQXdCO1FBQ3hCRSxhQUFhWSxVQUFVLENBQUMsRUFBRTtRQUMxQlYsZ0JBQWdCVSxVQUFVLENBQUMsRUFBRTtRQUM3QlIsWUFBWVEsVUFBVSxDQUFDLEVBQUU7UUFDekJDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDaEI7SUFFQSxxQkFDSTs7MEJBQ0ksOERBQUNyQix5REFBZ0JBO2dCQUFDd0IsT0FBTztnQkFBWUMsaUJBQWlCLElBQU1MLHFCQUFxQmpCOzs7Ozs7MEJBQ2pGLDhEQUFDSCx5REFBZ0JBO2dCQUFDd0IsT0FBTztnQkFBZ0JDLGlCQUFpQixJQUFNTCxxQkFBcUJoQjs7Ozs7OzBCQUNyRiw4REFBQ0oseURBQWdCQTtnQkFBQ3dCLE9BQU87Z0JBQVVDLGlCQUFpQixJQUFNTCxxQkFBcUJmOzs7Ozs7MEJBQy9FLDhEQUFDTCx5REFBZ0JBO2dCQUFDd0IsT0FBTztnQkFBVUMsaUJBQWlCLElBQU1OOzs7Ozs7WUFDekRiLHNDQUdPLDhEQUFDb0I7Z0JBQUtDLFVBQVUsQ0FBQ0MsSUFDYk4sUUFBUUMsR0FBRyxDQUFDTTs7a0NBR1osOERBQUNDO3dCQUNHQyxhQUFZO3dCQUNaUCxPQUFPUTt3QkFDUEMsVUFBVUwsQ0FBQUEsSUFBS00sV0FBV04sRUFBRU8sTUFBTSxDQUFDWCxLQUFLOzs7Ozs7a0NBRTVDLDhEQUFDWTt3QkFBT0MsTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7OzBCQUlsQyw4REFBQ0M7Ozs7OzBCQUFLLDhEQUFDQTs7Ozs7MEJBQ1AsOERBQUNyQyw4Q0FBS0E7Z0JBQUNPLFdBQVdBO2dCQUFXRSxjQUFjQTtnQkFBY0UsVUFBVUE7Ozs7Ozs7O0FBRy9FO0dBekR3QlY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbWFpbi5qc3g/ODNjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBEaWZmaWN1bHR5QnV0dG9uIGZyb20gXCIuL2RpZmZpY3VsdHlidXR0b25cIlxyXG5pbXBvcnQgQm9hcmQgZnJvbSBcIi4vYm9hcmRcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbigpIHtcclxuICAgIC8vIFRoZSBkaWZmaWN1bHR5IHZhcmlhYmxlcyBzYXZlIHRoZSB3aWR0aCwgaGVpZ2h0IGFuZCBudW1iZXIgb2YgbWluZXNcclxuICAgIGNvbnN0IGJlZ2lubmVyRGlmZmljdWx0eSA9IFs5LCA5LCAxMF1cclxuICAgIGNvbnN0IGludGVybWVkaWF0ZURpZmZpY3VsdHkgPSBbMTYsIDE2LCA0MF1cclxuICAgIGNvbnN0IGV4cGVydERpZmZpY3VsdHkgPSBbMTYsIDMwLCA5OV1cclxuXHJcblxyXG4gICAgY29uc3QgW2lzT25DdXN0b21EaWZmaWN1bHR5LCBzZXRJc09uQ3VzdG9tRGlmZmljdWx0eV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtib2FyZFJvd3MsIHNldEJvYXJkUm93c10gPSB1c2VTdGF0ZShleHBlcnREaWZmaWN1bHR5WzBdKVxyXG4gICAgY29uc3QgW2JvYXJkQ29sdW1ucywgc2V0Qm9hcmRDb2x1bW5zXSA9IHVzZVN0YXRlKGV4cGVydERpZmZpY3VsdHlbMV0pXHJcbiAgICBjb25zdCBbbWluZXNOdW0sIHNldE1pbmVzTnVtXSA9IHVzZVN0YXRlKGV4cGVydERpZmZpY3VsdHlbMl0pXHJcbiAgICBjb25zdCBbYm9hcmREYXRhLCBzZXRCb2FyZERhdGFdID0gdXNlU3RhdGUoQXJyYXkoYm9hcmRSb3dzKS5maWxsKEFycmF5KGJvYXJkQ29sdW1ucykuZmlsbCgnKicpKSlcclxuXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZU5ld0JvYXJkKCkge1xyXG4gICAgICAgIHNldEJvYXJkRGF0YShBcnJheShib2FyZFJvd3MpLmZpbGwoQXJyYXkoYm9hcmRDb2x1bW5zKS5maWxsKCcqJykpKVxyXG5cclxuICAgICAgICAvL2NvbnNvbGUubG9nKGJvYXJkRGF0YSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDdXN0b21EaWZmaWN1bHR5U2VsZWN0ZWQoKSB7XHJcbiAgICAgICAgc2V0SXNPbkN1c3RvbURpZmZpY3VsdHkodHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkRpZmZpY3VsdHlTZWxlY3RlZChkaWZmaWN1bHR5KSB7XHJcbiAgICAgICAgc2V0SXNPbkN1c3RvbURpZmZpY3VsdHkoZmFsc2UpXHJcbiAgICAgICAgc2V0Qm9hcmRSb3dzKGRpZmZpY3VsdHlbMF0pXHJcbiAgICAgICAgc2V0Qm9hcmRDb2x1bW5zKGRpZmZpY3VsdHlbMV0pXHJcbiAgICAgICAgc2V0TWluZXNOdW0oZGlmZmljdWx0eVsyXSlcclxuICAgICAgICBjb25zb2xlLmxvZyhkaWZmaWN1bHR5KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPERpZmZpY3VsdHlCdXR0b24gdmFsdWU9e1wiQmVnaW5uZXJcIn0gb25CdXR0b25DbGlja2VkPXsoKSA9PiBvbkRpZmZpY3VsdHlTZWxlY3RlZChiZWdpbm5lckRpZmZpY3VsdHkpfSAvPlxyXG4gICAgICAgICAgICA8RGlmZmljdWx0eUJ1dHRvbiB2YWx1ZT17XCJJbnRlcm1lZGlhdGVcIn0gb25CdXR0b25DbGlja2VkPXsoKSA9PiBvbkRpZmZpY3VsdHlTZWxlY3RlZChpbnRlcm1lZGlhdGVEaWZmaWN1bHR5KX0gLz5cclxuICAgICAgICAgICAgPERpZmZpY3VsdHlCdXR0b24gdmFsdWU9e1wiRXhwZXJ0XCJ9IG9uQnV0dG9uQ2xpY2tlZD17KCkgPT4gb25EaWZmaWN1bHR5U2VsZWN0ZWQoZXhwZXJ0RGlmZmljdWx0eSl9IC8+XHJcbiAgICAgICAgICAgIDxEaWZmaWN1bHR5QnV0dG9uIHZhbHVlPXtcIkN1c3RvbVwifSBvbkJ1dHRvbkNsaWNrZWQ9eygpID0+IGhhbmRsZUN1c3RvbURpZmZpY3VsdHlTZWxlY3RlZH0gLz5cclxuICAgICAgICAgICAge2lzT25DdXN0b21EaWZmaWN1bHR5ICYmXHJcblxyXG4gICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZWVlKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXttZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNlbmQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPGJyIC8+PGJyIC8+XHJcbiAgICAgICAgICAgIDxCb2FyZCBib2FyZFJvd3M9e2JvYXJkUm93c30gYm9hcmRDb2x1bW5zPXtib2FyZENvbHVtbnN9IG1pbmVzTnVtPXttaW5lc051bX0gLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkRpZmZpY3VsdHlCdXR0b24iLCJCb2FyZCIsIk1haW4iLCJiZWdpbm5lckRpZmZpY3VsdHkiLCJpbnRlcm1lZGlhdGVEaWZmaWN1bHR5IiwiZXhwZXJ0RGlmZmljdWx0eSIsImlzT25DdXN0b21EaWZmaWN1bHR5Iiwic2V0SXNPbkN1c3RvbURpZmZpY3VsdHkiLCJib2FyZFJvd3MiLCJzZXRCb2FyZFJvd3MiLCJib2FyZENvbHVtbnMiLCJzZXRCb2FyZENvbHVtbnMiLCJtaW5lc051bSIsInNldE1pbmVzTnVtIiwiYm9hcmREYXRhIiwic2V0Qm9hcmREYXRhIiwiQXJyYXkiLCJmaWxsIiwiZ2VuZXJhdGVOZXdCb2FyZCIsImhhbmRsZUN1c3RvbURpZmZpY3VsdHlTZWxlY3RlZCIsIm9uRGlmZmljdWx0eVNlbGVjdGVkIiwiZGlmZmljdWx0eSIsImNvbnNvbGUiLCJsb2ciLCJ2YWx1ZSIsIm9uQnV0dG9uQ2xpY2tlZCIsImZvcm0iLCJvblN1Ym1pdCIsImUiLCJlZWUiLCJ0ZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwibWVzc2FnZSIsIm9uQ2hhbmdlIiwic2V0TWVzc2FnZSIsInRhcmdldCIsImJ1dHRvbiIsInR5cGUiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/main.jsx\n"));

/***/ })

});