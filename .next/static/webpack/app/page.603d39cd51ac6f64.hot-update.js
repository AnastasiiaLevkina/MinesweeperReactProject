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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./.yarn/__virtual__/next-virtual-7b2e7b0c22/5/AppData/Local/Yarn/Berry/cache/next-npm-14.2.4-37fb4e5b51-10c0.zip/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./.yarn/__virtual__/next-virtual-7b2e7b0c22/5/AppData/Local/Yarn/Berry/cache/next-npm-14.2.4-37fb4e5b51-10c0.zip/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _difficultybutton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./difficultybutton */ \"(app-pages-browser)/./src/components/difficultybutton.jsx\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./board */ \"(app-pages-browser)/./src/components/board.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Main() {\n    _s();\n    // The difficulty variables save the width, height and number of mines\n    const beginnerDifficulty = [\n        9,\n        9,\n        10\n    ];\n    const intermediateDifficulty = [\n        16,\n        16,\n        40\n    ];\n    const expertDifficulty = [\n        16,\n        30,\n        99\n    ];\n    const [isOnCustomDifficulty, setIsOnCustomDifficulty] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [boardRows, setBoardRows] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(expertDifficulty[0]);\n    const [boardColumns, setBoardColumns] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(expertDifficulty[1]);\n    const [minesNum, setMinesNum] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(expertDifficulty[2]);\n    const [boardData, setBoardData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(boardRows).fill(Array(boardColumns).fill(\"*\")));\n    function generateNewBoard() {\n        setBoardData(Array(boardRows).fill(Array(boardColumns).fill(\"*\")));\n        console.log(\"HEIGH: \" + boardRows);\n        console.log(\"WIDTH: \" + boardColumns);\n        console.log(\"MINES: \" + minesNum);\n        console.log(\"DATA: \" + boardData);\n    }\n    function handleCustomDifficultySelected() {\n        setIsOnCustomDifficulty(true);\n        console.log(\"ON CUSTOM DIFFICULTY\");\n    }\n    function onDifficultySelected(difficulty) {\n        console.log(\"SELECTED DIFFICULTY: \" + difficulty);\n        setIsOnCustomDifficulty(false);\n        setBoardRows(difficulty[0]);\n        setBoardColumns(difficulty[1]);\n        setMinesNum(difficulty[2]);\n        generateNewBoard();\n        console.log(\"MINES NUM: \" + minesNum);\n    }\n    function handleResetGameRequest() {\n        console.log(\"GAME RESET\");\n        generateNewBoard();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_difficultybutton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                value: \"Beginner\",\n                onButtonClicked: ()=>onDifficultySelected(beginnerDifficulty)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_difficultybutton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                value: \"Intermediate\",\n                onButtonClicked: ()=>onDifficultySelected(intermediateDifficulty)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_difficultybutton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                value: \"Expert\",\n                onButtonClicked: ()=>onDifficultySelected(expertDifficulty)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_difficultybutton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                value: \"Custom\",\n                onButtonClicked: ()=>handleCustomDifficultySelected,\n                selected: isOnCustomDifficulty\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this),\n            isOnCustomDifficulty && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                action: generateNewBoard,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container-row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"container-row\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: \"Width\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 33\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"number\",\n                                    min: \"1\",\n                                    max: \"10000\",\n                                    onChange: (e)=>set(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 33\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"container-row\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: heightInputId,\n                                    children: \"Height\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 33\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    id: heightInputId,\n                                    type: \"number\",\n                                    min: \"1\",\n                                    max: \"10000\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 33\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                            lineNumber: 66,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"container-row\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: minesInputId,\n                                    children: \"Mines\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 33\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    id: minesInputId,\n                                    type: \"number\",\n                                    min: \"1\",\n                                    max: \"10000\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 33\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                            lineNumber: 75,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Update\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                            lineNumber: 84,\n                            columnNumber: 29\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                    lineNumber: 56,\n                    columnNumber: 25\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                lineNumber: 55,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                lineNumber: 89,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                lineNumber: 89,\n                columnNumber: 19\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_board__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                boardData: boardData,\n                minesNum: minesNum,\n                resetGame: handleResetGameRequest\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                lineNumber: 90,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Main, \"42yRIPca8JcLFdG4AIIEa0rzhUE=\");\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL21haW4uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ2dDO0FBQ2lCO0FBQ3RCO0FBRVosU0FBU0c7O0lBQ3BCLHNFQUFzRTtJQUN0RSxNQUFNQyxxQkFBcUI7UUFBQztRQUFHO1FBQUc7S0FBRztJQUNyQyxNQUFNQyx5QkFBeUI7UUFBQztRQUFJO1FBQUk7S0FBRztJQUMzQyxNQUFNQyxtQkFBbUI7UUFBQztRQUFJO1FBQUk7S0FBRztJQUVyQyxNQUFNLENBQUNDLHNCQUFzQkMsd0JBQXdCLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ2pFLE1BQU0sQ0FBQ1MsV0FBV0MsYUFBYSxHQUFHViwrQ0FBUUEsQ0FBQ00sZ0JBQWdCLENBQUMsRUFBRTtJQUM5RCxNQUFNLENBQUNLLGNBQWNDLGdCQUFnQixHQUFHWiwrQ0FBUUEsQ0FBQ00sZ0JBQWdCLENBQUMsRUFBRTtJQUNwRSxNQUFNLENBQUNPLFVBQVVDLFlBQVksR0FBR2QsK0NBQVFBLENBQUNNLGdCQUFnQixDQUFDLEVBQUU7SUFDNUQsTUFBTSxDQUFDUyxXQUFXQyxhQUFhLEdBQUdoQiwrQ0FBUUEsQ0FBQ2lCLE1BQU1SLFdBQVdTLElBQUksQ0FBQ0QsTUFBTU4sY0FBY08sSUFBSSxDQUFDO0lBRTFGLFNBQVNDO1FBQ0xILGFBQWFDLE1BQU1SLFdBQVdTLElBQUksQ0FBQ0QsTUFBTU4sY0FBY08sSUFBSSxDQUFDO1FBQzVERSxRQUFRQyxHQUFHLENBQUMsWUFBWVo7UUFDeEJXLFFBQVFDLEdBQUcsQ0FBQyxZQUFZVjtRQUN4QlMsUUFBUUMsR0FBRyxDQUFDLFlBQVlSO1FBQ3hCTyxRQUFRQyxHQUFHLENBQUMsV0FBV047SUFDM0I7SUFFQSxTQUFTTztRQUNMZCx3QkFBd0I7UUFDeEJZLFFBQVFDLEdBQUcsQ0FBQztJQUNoQjtJQUVBLFNBQVNFLHFCQUFxQkMsVUFBVTtRQUNwQ0osUUFBUUMsR0FBRyxDQUFDLDBCQUEwQkc7UUFDdENoQix3QkFBd0I7UUFDeEJFLGFBQWFjLFVBQVUsQ0FBQyxFQUFFO1FBQzFCWixnQkFBZ0JZLFVBQVUsQ0FBQyxFQUFFO1FBQzdCVixZQUFZVSxVQUFVLENBQUMsRUFBRTtRQUN6Qkw7UUFDQUMsUUFBUUMsR0FBRyxDQUFDLGdCQUFnQlI7SUFDaEM7SUFFQSxTQUFTWTtRQUNMTCxRQUFRQyxHQUFHLENBQUM7UUFDWkY7SUFDSjtJQUVBLHFCQUNJOzswQkFDSSw4REFBQ2xCLHlEQUFnQkE7Z0JBQUN5QixPQUFPO2dCQUFZQyxpQkFBaUIsSUFBTUoscUJBQXFCbkI7Ozs7OzswQkFDakYsOERBQUNILHlEQUFnQkE7Z0JBQUN5QixPQUFPO2dCQUFnQkMsaUJBQWlCLElBQU1KLHFCQUFxQmxCOzs7Ozs7MEJBQ3JGLDhEQUFDSix5REFBZ0JBO2dCQUFDeUIsT0FBTztnQkFBVUMsaUJBQWlCLElBQU1KLHFCQUFxQmpCOzs7Ozs7MEJBQy9FLDhEQUFDTCx5REFBZ0JBO2dCQUFDeUIsT0FBTztnQkFBVUMsaUJBQWlCLElBQU1MO2dCQUFnQ00sVUFBVXJCOzs7Ozs7WUFDbkdBLHNDQUdPLDhEQUFDc0I7Z0JBQUtDLFFBQVFYOzBCQUNWLDRFQUFDWTtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ0M7OENBQU07Ozs7Ozs4Q0FDUCw4REFBQ0M7b0NBQ0dDLE1BQUs7b0NBQ0xDLEtBQUk7b0NBQ0pDLEtBQUk7b0NBQ0pDLFVBQVVDLENBQUFBLElBQUtDLElBQUlELEVBQUVFLE1BQU0sQ0FBQ2YsS0FBSzs7Ozs7Ozs7Ozs7O3NDQUd6Qyw4REFBQ0s7NEJBQUlDLFdBQVU7OzhDQUNYLDhEQUFDQztvQ0FBTVMsU0FBU0M7OENBQWU7Ozs7Ozs4Q0FDL0IsOERBQUNUO29DQUNHVSxJQUFJRDtvQ0FDSlIsTUFBSztvQ0FDTEMsS0FBSTtvQ0FDSkMsS0FBSTs7Ozs7Ozs7Ozs7O3NDQUdaLDhEQUFDTjs0QkFBSUMsV0FBVTs7OENBQ1gsOERBQUNDO29DQUFNUyxTQUFTRzs4Q0FBYzs7Ozs7OzhDQUM5Qiw4REFBQ1g7b0NBQ0dVLElBQUlDO29DQUNKVixNQUFLO29DQUNMQyxLQUFJO29DQUNKQyxLQUFJOzs7Ozs7Ozs7Ozs7c0NBR1osOERBQUNTOzRCQUFPWCxNQUFLO3NDQUFTOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFLdEMsOERBQUNZOzs7OzswQkFBSyw4REFBQ0E7Ozs7OzBCQUNQLDhEQUFDN0MsOENBQUtBO2dCQUFDYSxXQUFXQTtnQkFBV0YsVUFBVUE7Z0JBQVVtQyxXQUFXdkI7Ozs7Ozs7O0FBR3hFO0dBdkZ3QnRCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL21haW4uanN4PzgzYzQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgRGlmZmljdWx0eUJ1dHRvbiBmcm9tIFwiLi9kaWZmaWN1bHR5YnV0dG9uXCJcclxuaW1wb3J0IEJvYXJkIGZyb20gXCIuL2JvYXJkXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4oKSB7XHJcbiAgICAvLyBUaGUgZGlmZmljdWx0eSB2YXJpYWJsZXMgc2F2ZSB0aGUgd2lkdGgsIGhlaWdodCBhbmQgbnVtYmVyIG9mIG1pbmVzXHJcbiAgICBjb25zdCBiZWdpbm5lckRpZmZpY3VsdHkgPSBbOSwgOSwgMTBdXHJcbiAgICBjb25zdCBpbnRlcm1lZGlhdGVEaWZmaWN1bHR5ID0gWzE2LCAxNiwgNDBdXHJcbiAgICBjb25zdCBleHBlcnREaWZmaWN1bHR5ID0gWzE2LCAzMCwgOTldXHJcblxyXG4gICAgY29uc3QgW2lzT25DdXN0b21EaWZmaWN1bHR5LCBzZXRJc09uQ3VzdG9tRGlmZmljdWx0eV0gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gICAgY29uc3QgW2JvYXJkUm93cywgc2V0Qm9hcmRSb3dzXSA9IHVzZVN0YXRlKGV4cGVydERpZmZpY3VsdHlbMF0pXHJcbiAgICBjb25zdCBbYm9hcmRDb2x1bW5zLCBzZXRCb2FyZENvbHVtbnNdID0gdXNlU3RhdGUoZXhwZXJ0RGlmZmljdWx0eVsxXSlcclxuICAgIGNvbnN0IFttaW5lc051bSwgc2V0TWluZXNOdW1dID0gdXNlU3RhdGUoZXhwZXJ0RGlmZmljdWx0eVsyXSlcclxuICAgIGNvbnN0IFtib2FyZERhdGEsIHNldEJvYXJkRGF0YV0gPSB1c2VTdGF0ZShBcnJheShib2FyZFJvd3MpLmZpbGwoQXJyYXkoYm9hcmRDb2x1bW5zKS5maWxsKCcqJykpKVxyXG5cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlTmV3Qm9hcmQoKSB7XHJcbiAgICAgICAgc2V0Qm9hcmREYXRhKEFycmF5KGJvYXJkUm93cykuZmlsbChBcnJheShib2FyZENvbHVtbnMpLmZpbGwoJyonKSkpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJIRUlHSDogXCIgKyBib2FyZFJvd3MpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJXSURUSDogXCIgKyBib2FyZENvbHVtbnMpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJNSU5FUzogXCIgKyBtaW5lc051bSlcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRBVEE6IFwiICsgYm9hcmREYXRhKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUN1c3RvbURpZmZpY3VsdHlTZWxlY3RlZCgpIHtcclxuICAgICAgICBzZXRJc09uQ3VzdG9tRGlmZmljdWx0eSh0cnVlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT04gQ1VTVE9NIERJRkZJQ1VMVFlcIilcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkRpZmZpY3VsdHlTZWxlY3RlZChkaWZmaWN1bHR5KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTRUxFQ1RFRCBESUZGSUNVTFRZOiBcIiArIGRpZmZpY3VsdHkpXHJcbiAgICAgICAgc2V0SXNPbkN1c3RvbURpZmZpY3VsdHkoZmFsc2UpXHJcbiAgICAgICAgc2V0Qm9hcmRSb3dzKGRpZmZpY3VsdHlbMF0pXHJcbiAgICAgICAgc2V0Qm9hcmRDb2x1bW5zKGRpZmZpY3VsdHlbMV0pXHJcbiAgICAgICAgc2V0TWluZXNOdW0oZGlmZmljdWx0eVsyXSlcclxuICAgICAgICBnZW5lcmF0ZU5ld0JvYXJkKClcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk1JTkVTIE5VTTogXCIgKyBtaW5lc051bSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVSZXNldEdhbWVSZXF1ZXN0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR0FNRSBSRVNFVFwiKVxyXG4gICAgICAgIGdlbmVyYXRlTmV3Qm9hcmQoKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPERpZmZpY3VsdHlCdXR0b24gdmFsdWU9e1wiQmVnaW5uZXJcIn0gb25CdXR0b25DbGlja2VkPXsoKSA9PiBvbkRpZmZpY3VsdHlTZWxlY3RlZChiZWdpbm5lckRpZmZpY3VsdHkpfSAvPlxyXG4gICAgICAgICAgICA8RGlmZmljdWx0eUJ1dHRvbiB2YWx1ZT17XCJJbnRlcm1lZGlhdGVcIn0gb25CdXR0b25DbGlja2VkPXsoKSA9PiBvbkRpZmZpY3VsdHlTZWxlY3RlZChpbnRlcm1lZGlhdGVEaWZmaWN1bHR5KX0gLz5cclxuICAgICAgICAgICAgPERpZmZpY3VsdHlCdXR0b24gdmFsdWU9e1wiRXhwZXJ0XCJ9IG9uQnV0dG9uQ2xpY2tlZD17KCkgPT4gb25EaWZmaWN1bHR5U2VsZWN0ZWQoZXhwZXJ0RGlmZmljdWx0eSl9IC8+XHJcbiAgICAgICAgICAgIDxEaWZmaWN1bHR5QnV0dG9uIHZhbHVlPXtcIkN1c3RvbVwifSBvbkJ1dHRvbkNsaWNrZWQ9eygpID0+IGhhbmRsZUN1c3RvbURpZmZpY3VsdHlTZWxlY3RlZH0gc2VsZWN0ZWQ9e2lzT25DdXN0b21EaWZmaWN1bHR5fSAvPlxyXG4gICAgICAgICAgICB7aXNPbkN1c3RvbURpZmZpY3VsdHkgJiZcclxuXHJcbiAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPXtnZW5lcmF0ZU5ld0JvYXJkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+V2lkdGg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD1cIjEwMDAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17aGVpZ2h0SW5wdXRJZH0+SGVpZ2h0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2hlaWdodElucHV0SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PVwiMTAwMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXttaW5lc0lucHV0SWR9Pk1pbmVzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e21pbmVzSW5wdXRJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9XCIxMDAwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+VXBkYXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8YnIgLz48YnIgLz5cclxuICAgICAgICAgICAgPEJvYXJkIGJvYXJkRGF0YT17Ym9hcmREYXRhfSBtaW5lc051bT17bWluZXNOdW19IHJlc2V0R2FtZT17aGFuZGxlUmVzZXRHYW1lUmVxdWVzdH0gLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkRpZmZpY3VsdHlCdXR0b24iLCJCb2FyZCIsIk1haW4iLCJiZWdpbm5lckRpZmZpY3VsdHkiLCJpbnRlcm1lZGlhdGVEaWZmaWN1bHR5IiwiZXhwZXJ0RGlmZmljdWx0eSIsImlzT25DdXN0b21EaWZmaWN1bHR5Iiwic2V0SXNPbkN1c3RvbURpZmZpY3VsdHkiLCJib2FyZFJvd3MiLCJzZXRCb2FyZFJvd3MiLCJib2FyZENvbHVtbnMiLCJzZXRCb2FyZENvbHVtbnMiLCJtaW5lc051bSIsInNldE1pbmVzTnVtIiwiYm9hcmREYXRhIiwic2V0Qm9hcmREYXRhIiwiQXJyYXkiLCJmaWxsIiwiZ2VuZXJhdGVOZXdCb2FyZCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDdXN0b21EaWZmaWN1bHR5U2VsZWN0ZWQiLCJvbkRpZmZpY3VsdHlTZWxlY3RlZCIsImRpZmZpY3VsdHkiLCJoYW5kbGVSZXNldEdhbWVSZXF1ZXN0IiwidmFsdWUiLCJvbkJ1dHRvbkNsaWNrZWQiLCJzZWxlY3RlZCIsImZvcm0iLCJhY3Rpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsIm1pbiIsIm1heCIsIm9uQ2hhbmdlIiwiZSIsInNldCIsInRhcmdldCIsImh0bWxGb3IiLCJoZWlnaHRJbnB1dElkIiwiaWQiLCJtaW5lc0lucHV0SWQiLCJidXR0b24iLCJiciIsInJlc2V0R2FtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/main.jsx\n"));

/***/ })

});