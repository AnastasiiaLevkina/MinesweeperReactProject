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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./.yarn/__virtual__/next-virtual-7b2e7b0c22/5/AppData/Local/Yarn/Berry/cache/next-npm-14.2.4-37fb4e5b51-10c0.zip/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./.yarn/__virtual__/next-virtual-7b2e7b0c22/5/AppData/Local/Yarn/Berry/cache/next-npm-14.2.4-37fb4e5b51-10c0.zip/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _difficultybutton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./difficultybutton */ \"(app-pages-browser)/./src/components/difficultybutton.jsx\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./board */ \"(app-pages-browser)/./src/components/board.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Main() {\n    _s();\n    // The difficulty variables save the width, height and number of mines\n    const beginnerDifficulty = [\n        9,\n        9,\n        10\n    ];\n    const intermediateDifficulty = [\n        16,\n        16,\n        40\n    ];\n    const expertDifficulty = [\n        16,\n        30,\n        99\n    ];\n    const [isOnCustomDifficulty, setIsOnCustomDifficulty] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [boardRows, setBoardRows] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(expertDifficulty[0]);\n    const [boardColumns, setBoardColumns] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(expertDifficulty[1]);\n    const [minesNum, setMinesNum] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(expertDifficulty[2]);\n    const [boardData, setBoardData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(boardRows).fill(Array(boardColumns).fill(\"*\")));\n    function generateNewBoard() {\n        setBoardData(Array(boardRows).fill(Array(boardColumns).fill(\"*\")));\n        console.log(\"HEIGH: \" + boardRows);\n        console.log(\"WIDTH: \" + boardColumns);\n        console.log(\"MINES: \" + minesNum);\n        console.log(\"DATA: \" + boardData);\n    //console.log(boardData)\n    }\n    function handleCustomDifficultySelected() {\n        setIsOnCustomDifficulty(true);\n        console.log(\"ON CUSTOM DIFFICULTY\");\n    }\n    function onDifficultySelected(difficulty) {\n        console.log(\"SELECTED DIFFICULTY: \" + difficulty);\n        setIsOnCustomDifficulty(false);\n        setBoardRows(difficulty[0]);\n        setBoardColumns(difficulty[1]);\n        setMinesNum(difficulty[2]);\n        generateNewBoard();\n        console.log(\"MINES NUM: \" + minesNum);\n    }\n    function handleResetGameRequest() {\n        console.log(\"GAME RESET\");\n        generateNewBoard();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_difficultybutton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                value: \"Beginner\",\n                onButtonClicked: ()=>onDifficultySelected(beginnerDifficulty)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_difficultybutton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                value: \"Intermediate\",\n                onButtonClicked: ()=>onDifficultySelected(intermediateDifficulty)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_difficultybutton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                value: \"Expert\",\n                onButtonClicked: ()=>onDifficultySelected(expertDifficulty)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_difficultybutton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                value: \"Custom\",\n                onButtonClicked: ()=>handleCustomDifficultySelected,\n                selected: isOnCustomDifficulty\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this),\n            isOnCustomDifficulty && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                action: generateNewBoard,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container-row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"container-row\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: boardColumns,\n                                    children: \"Width\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 33\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    id: boardColumns,\n                                    type: \"number\",\n                                    min: \"1\",\n                                    max: \"10000\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 33\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                            lineNumber: 62,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"container-row\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: boardRows,\n                                    children: \"Height\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 33\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    id: boardRows,\n                                    type: \"number\",\n                                    min: \"1\",\n                                    max: \"10000\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 33\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                            lineNumber: 71,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"container-row\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: minesNum,\n                                    children: \"Mines\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 33\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    id: minesNum,\n                                    type: \"number\",\n                                    min: \"1\",\n                                    max: \"10000\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 33\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                            lineNumber: 80,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Update\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                            lineNumber: 89,\n                            columnNumber: 29\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                    lineNumber: 61,\n                    columnNumber: 25\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                lineNumber: 60,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                lineNumber: 94,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                lineNumber: 94,\n                columnNumber: 19\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_board__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                boardData: boardData,\n                minesNum: minesNum,\n                resetGame: handleResetGameRequest\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                lineNumber: 95,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Main, \"42yRIPca8JcLFdG4AIIEa0rzhUE=\");\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL21haW4uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQzhCO0FBQ0U7QUFDaUI7QUFDdEI7QUFFWixTQUFTSTs7SUFDcEIsc0VBQXNFO0lBQ3RFLE1BQU1DLHFCQUFxQjtRQUFDO1FBQUc7UUFBRztLQUFHO0lBQ3JDLE1BQU1DLHlCQUF5QjtRQUFDO1FBQUk7UUFBSTtLQUFHO0lBQzNDLE1BQU1DLG1CQUFtQjtRQUFDO1FBQUk7UUFBSTtLQUFHO0lBSXJDLE1BQU0sQ0FBQ0Msc0JBQXNCQyx3QkFBd0IsR0FBR1IsK0NBQVFBLENBQUM7SUFDakUsTUFBTSxDQUFDUyxXQUFXQyxhQUFhLEdBQUdWLCtDQUFRQSxDQUFDTSxnQkFBZ0IsQ0FBQyxFQUFFO0lBQzlELE1BQU0sQ0FBQ0ssY0FBY0MsZ0JBQWdCLEdBQUdaLCtDQUFRQSxDQUFDTSxnQkFBZ0IsQ0FBQyxFQUFFO0lBQ3BFLE1BQU0sQ0FBQ08sVUFBVUMsWUFBWSxHQUFHZCwrQ0FBUUEsQ0FBQ00sZ0JBQWdCLENBQUMsRUFBRTtJQUM1RCxNQUFNLENBQUNTLFdBQVdDLGFBQWEsR0FBR2hCLCtDQUFRQSxDQUFDaUIsTUFBTVIsV0FBV1MsSUFBSSxDQUFDRCxNQUFNTixjQUFjTyxJQUFJLENBQUM7SUFFMUYsU0FBU0M7UUFDTEgsYUFBYUMsTUFBTVIsV0FBV1MsSUFBSSxDQUFDRCxNQUFNTixjQUFjTyxJQUFJLENBQUM7UUFDNURFLFFBQVFDLEdBQUcsQ0FBQyxZQUFZWjtRQUN4QlcsUUFBUUMsR0FBRyxDQUFDLFlBQVlWO1FBQ3hCUyxRQUFRQyxHQUFHLENBQUMsWUFBWVI7UUFDeEJPLFFBQVFDLEdBQUcsQ0FBQyxXQUFXTjtJQUV2Qix3QkFBd0I7SUFDNUI7SUFFQSxTQUFTTztRQUNMZCx3QkFBd0I7UUFDeEJZLFFBQVFDLEdBQUcsQ0FBQztJQUNoQjtJQUVBLFNBQVNFLHFCQUFxQkMsVUFBVTtRQUNwQ0osUUFBUUMsR0FBRyxDQUFDLDBCQUEwQkc7UUFDdENoQix3QkFBd0I7UUFDeEJFLGFBQWFjLFVBQVUsQ0FBQyxFQUFFO1FBQzFCWixnQkFBZ0JZLFVBQVUsQ0FBQyxFQUFFO1FBQzdCVixZQUFZVSxVQUFVLENBQUMsRUFBRTtRQUN6Qkw7UUFDQUMsUUFBUUMsR0FBRyxDQUFDLGdCQUFnQlI7SUFDaEM7SUFFQSxTQUFTWTtRQUNMTCxRQUFRQyxHQUFHLENBQUM7UUFDWkY7SUFDSjtJQUVBLHFCQUNJOzswQkFDSSw4REFBQ2xCLHlEQUFnQkE7Z0JBQUN5QixPQUFPO2dCQUFZQyxpQkFBaUIsSUFBTUoscUJBQXFCbkI7Ozs7OzswQkFDakYsOERBQUNILHlEQUFnQkE7Z0JBQUN5QixPQUFPO2dCQUFnQkMsaUJBQWlCLElBQU1KLHFCQUFxQmxCOzs7Ozs7MEJBQ3JGLDhEQUFDSix5REFBZ0JBO2dCQUFDeUIsT0FBTztnQkFBVUMsaUJBQWlCLElBQU1KLHFCQUFxQmpCOzs7Ozs7MEJBQy9FLDhEQUFDTCx5REFBZ0JBO2dCQUFDeUIsT0FBTztnQkFBVUMsaUJBQWlCLElBQU1MO2dCQUFnQ00sVUFBVXJCOzs7Ozs7WUFDbkdBLHNDQUdPLDhEQUFDc0I7Z0JBQUtDLFFBQVFYOzBCQUNWLDRFQUFDWTtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ0M7b0NBQU1DLFNBQVN2Qjs4Q0FBYzs7Ozs7OzhDQUM5Qiw4REFBQ3dCO29DQUNHQyxJQUFJekI7b0NBQ0owQixNQUFLO29DQUNMQyxLQUFJO29DQUNKQyxLQUFJOzs7Ozs7Ozs7Ozs7c0NBR1osOERBQUNSOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ0M7b0NBQU1DLFNBQVN6Qjs4Q0FBVzs7Ozs7OzhDQUMzQiw4REFBQzBCO29DQUNHQyxJQUFJM0I7b0NBQ0o0QixNQUFLO29DQUNMQyxLQUFJO29DQUNKQyxLQUFJOzs7Ozs7Ozs7Ozs7c0NBR1osOERBQUNSOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ0M7b0NBQU1DLFNBQVNyQjs4Q0FBVTs7Ozs7OzhDQUMxQiw4REFBQ3NCO29DQUNHQyxJQUFJdkI7b0NBQ0p3QixNQUFLO29DQUNMQyxLQUFJO29DQUNKQyxLQUFJOzs7Ozs7Ozs7Ozs7c0NBR1osOERBQUNDOzRCQUFPSCxNQUFLO3NDQUFTOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFLdEMsOERBQUNJOzs7OzswQkFBSyw4REFBQ0E7Ozs7OzBCQUNQLDhEQUFDdkMsOENBQUtBO2dCQUFDYSxXQUFXQTtnQkFBV0YsVUFBVUE7Z0JBQVU2QixXQUFXakI7Ozs7Ozs7O0FBR3hFO0dBM0Z3QnRCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL21haW4uanN4PzgzYzQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IHsgdXNlSWQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IERpZmZpY3VsdHlCdXR0b24gZnJvbSBcIi4vZGlmZmljdWx0eWJ1dHRvblwiXHJcbmltcG9ydCBCb2FyZCBmcm9tIFwiLi9ib2FyZFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluKCkge1xyXG4gICAgLy8gVGhlIGRpZmZpY3VsdHkgdmFyaWFibGVzIHNhdmUgdGhlIHdpZHRoLCBoZWlnaHQgYW5kIG51bWJlciBvZiBtaW5lc1xyXG4gICAgY29uc3QgYmVnaW5uZXJEaWZmaWN1bHR5ID0gWzksIDksIDEwXVxyXG4gICAgY29uc3QgaW50ZXJtZWRpYXRlRGlmZmljdWx0eSA9IFsxNiwgMTYsIDQwXVxyXG4gICAgY29uc3QgZXhwZXJ0RGlmZmljdWx0eSA9IFsxNiwgMzAsIDk5XVxyXG5cclxuICAgIFxyXG5cclxuICAgIGNvbnN0IFtpc09uQ3VzdG9tRGlmZmljdWx0eSwgc2V0SXNPbkN1c3RvbURpZmZpY3VsdHldID0gdXNlU3RhdGUodHJ1ZSlcclxuICAgIGNvbnN0IFtib2FyZFJvd3MsIHNldEJvYXJkUm93c10gPSB1c2VTdGF0ZShleHBlcnREaWZmaWN1bHR5WzBdKVxyXG4gICAgY29uc3QgW2JvYXJkQ29sdW1ucywgc2V0Qm9hcmRDb2x1bW5zXSA9IHVzZVN0YXRlKGV4cGVydERpZmZpY3VsdHlbMV0pXHJcbiAgICBjb25zdCBbbWluZXNOdW0sIHNldE1pbmVzTnVtXSA9IHVzZVN0YXRlKGV4cGVydERpZmZpY3VsdHlbMl0pXHJcbiAgICBjb25zdCBbYm9hcmREYXRhLCBzZXRCb2FyZERhdGFdID0gdXNlU3RhdGUoQXJyYXkoYm9hcmRSb3dzKS5maWxsKEFycmF5KGJvYXJkQ29sdW1ucykuZmlsbCgnKicpKSlcclxuXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZU5ld0JvYXJkKCkge1xyXG4gICAgICAgIHNldEJvYXJkRGF0YShBcnJheShib2FyZFJvd3MpLmZpbGwoQXJyYXkoYm9hcmRDb2x1bW5zKS5maWxsKCcqJykpKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSEVJR0g6IFwiICsgYm9hcmRSb3dzKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiV0lEVEg6IFwiICsgYm9hcmRDb2x1bW5zKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTUlORVM6IFwiICsgbWluZXNOdW0pXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJEQVRBOiBcIiArIGJvYXJkRGF0YSlcclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhib2FyZERhdGEpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ3VzdG9tRGlmZmljdWx0eVNlbGVjdGVkKCkge1xyXG4gICAgICAgIHNldElzT25DdXN0b21EaWZmaWN1bHR5KHRydWUpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJPTiBDVVNUT00gRElGRklDVUxUWVwiKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uRGlmZmljdWx0eVNlbGVjdGVkKGRpZmZpY3VsdHkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNFTEVDVEVEIERJRkZJQ1VMVFk6IFwiICsgZGlmZmljdWx0eSlcclxuICAgICAgICBzZXRJc09uQ3VzdG9tRGlmZmljdWx0eShmYWxzZSlcclxuICAgICAgICBzZXRCb2FyZFJvd3MoZGlmZmljdWx0eVswXSlcclxuICAgICAgICBzZXRCb2FyZENvbHVtbnMoZGlmZmljdWx0eVsxXSlcclxuICAgICAgICBzZXRNaW5lc051bShkaWZmaWN1bHR5WzJdKVxyXG4gICAgICAgIGdlbmVyYXRlTmV3Qm9hcmQoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTUlORVMgTlVNOiBcIiArIG1pbmVzTnVtKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlc2V0R2FtZVJlcXVlc3QoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJHQU1FIFJFU0VUXCIpXHJcbiAgICAgICAgZ2VuZXJhdGVOZXdCb2FyZCgpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8RGlmZmljdWx0eUJ1dHRvbiB2YWx1ZT17XCJCZWdpbm5lclwifSBvbkJ1dHRvbkNsaWNrZWQ9eygpID0+IG9uRGlmZmljdWx0eVNlbGVjdGVkKGJlZ2lubmVyRGlmZmljdWx0eSl9IC8+XHJcbiAgICAgICAgICAgIDxEaWZmaWN1bHR5QnV0dG9uIHZhbHVlPXtcIkludGVybWVkaWF0ZVwifSBvbkJ1dHRvbkNsaWNrZWQ9eygpID0+IG9uRGlmZmljdWx0eVNlbGVjdGVkKGludGVybWVkaWF0ZURpZmZpY3VsdHkpfSAvPlxyXG4gICAgICAgICAgICA8RGlmZmljdWx0eUJ1dHRvbiB2YWx1ZT17XCJFeHBlcnRcIn0gb25CdXR0b25DbGlja2VkPXsoKSA9PiBvbkRpZmZpY3VsdHlTZWxlY3RlZChleHBlcnREaWZmaWN1bHR5KX0gLz5cclxuICAgICAgICAgICAgPERpZmZpY3VsdHlCdXR0b24gdmFsdWU9e1wiQ3VzdG9tXCJ9IG9uQnV0dG9uQ2xpY2tlZD17KCkgPT4gaGFuZGxlQ3VzdG9tRGlmZmljdWx0eVNlbGVjdGVkfSBzZWxlY3RlZD17aXNPbkN1c3RvbURpZmZpY3VsdHl9IC8+XHJcbiAgICAgICAgICAgIHtpc09uQ3VzdG9tRGlmZmljdWx0eSAmJlxyXG5cclxuICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249e2dlbmVyYXRlTmV3Qm9hcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtib2FyZENvbHVtbnN9PldpZHRoPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2JvYXJkQ29sdW1uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9XCIxMDAwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2JvYXJkUm93c30+SGVpZ2h0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2JvYXJkUm93c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9XCIxMDAwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e21pbmVzTnVtfT5NaW5lczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXttaW5lc051bX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9XCIxMDAwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+VXBkYXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8YnIgLz48YnIgLz5cclxuICAgICAgICAgICAgPEJvYXJkIGJvYXJkRGF0YT17Ym9hcmREYXRhfSBtaW5lc051bT17bWluZXNOdW19IHJlc2V0R2FtZT17aGFuZGxlUmVzZXRHYW1lUmVxdWVzdH0gLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VJZCIsInVzZVN0YXRlIiwiRGlmZmljdWx0eUJ1dHRvbiIsIkJvYXJkIiwiTWFpbiIsImJlZ2lubmVyRGlmZmljdWx0eSIsImludGVybWVkaWF0ZURpZmZpY3VsdHkiLCJleHBlcnREaWZmaWN1bHR5IiwiaXNPbkN1c3RvbURpZmZpY3VsdHkiLCJzZXRJc09uQ3VzdG9tRGlmZmljdWx0eSIsImJvYXJkUm93cyIsInNldEJvYXJkUm93cyIsImJvYXJkQ29sdW1ucyIsInNldEJvYXJkQ29sdW1ucyIsIm1pbmVzTnVtIiwic2V0TWluZXNOdW0iLCJib2FyZERhdGEiLCJzZXRCb2FyZERhdGEiLCJBcnJheSIsImZpbGwiLCJnZW5lcmF0ZU5ld0JvYXJkIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUN1c3RvbURpZmZpY3VsdHlTZWxlY3RlZCIsIm9uRGlmZmljdWx0eVNlbGVjdGVkIiwiZGlmZmljdWx0eSIsImhhbmRsZVJlc2V0R2FtZVJlcXVlc3QiLCJ2YWx1ZSIsIm9uQnV0dG9uQ2xpY2tlZCIsInNlbGVjdGVkIiwiZm9ybSIsImFjdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwiaWQiLCJ0eXBlIiwibWluIiwibWF4IiwiYnV0dG9uIiwiYnIiLCJyZXNldEdhbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/main.jsx\n"));

/***/ })

});