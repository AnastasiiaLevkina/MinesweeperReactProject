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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./.yarn/__virtual__/next-virtual-7b2e7b0c22/5/AppData/Local/Yarn/Berry/cache/next-npm-14.2.4-37fb4e5b51-10c0.zip/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./.yarn/__virtual__/next-virtual-7b2e7b0c22/5/AppData/Local/Yarn/Berry/cache/next-npm-14.2.4-37fb4e5b51-10c0.zip/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _difficultybutton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./difficultybutton */ \"(app-pages-browser)/./src/components/difficultybutton.jsx\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./board */ \"(app-pages-browser)/./src/components/board.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Main() {\n    _s();\n    // The difficulty variables save the width, height and number of mines\n    const beginnerDifficulty = [\n        9,\n        9,\n        10\n    ];\n    const intermediateDifficulty = [\n        16,\n        16,\n        40\n    ];\n    const expertDifficulty = [\n        16,\n        30,\n        99\n    ];\n    const widthInputId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();\n    const heightInputId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();\n    const minesInputId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();\n    const [isOnCustomDifficulty, setIsOnCustomDifficulty] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [boardRows, setBoardRows] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(expertDifficulty[0]);\n    const [boardColumns, setBoardColumns] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(expertDifficulty[1]);\n    const [minesNum, setMinesNum] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(expertDifficulty[2]);\n    const [boardData, setBoardData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(boardRows).fill(Array(boardColumns).fill(\"*\")));\n    function generateNewBoard() {\n        setBoardData(Array(boardRows).fill(Array(boardColumns).fill(\"*\")));\n        console.log(\"HEIGH: \" + boardRows);\n        console.log(\"WIDTH: \" + boardColumns);\n        console.log(\"MINES: \" + minesNum);\n        console.log(\"DATA: \" + boardData);\n    //console.log(boardData)\n    }\n    function handleCustomDifficultySelected() {\n        setIsOnCustomDifficulty(true);\n        console.log(\"ON CUSTOM DIFFICULTY\");\n    }\n    function onDifficultySelected(difficulty) {\n        console.log(\"SELECTED DIFFICULTY: \" + difficulty);\n        setIsOnCustomDifficulty(false);\n        setBoardRows(difficulty[0]);\n        setBoardColumns(difficulty[1]);\n        setMinesNum(difficulty[2]);\n        generateNewBoard();\n        console.log(\"MINES NUM: \" + minesNum);\n    }\n    function handleResetGameRequest() {\n        console.log(\"GAME RESET\");\n        generateNewBoard();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_difficultybutton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                value: \"Beginner\",\n                onButtonClicked: ()=>onDifficultySelected(beginnerDifficulty)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_difficultybutton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                value: \"Intermediate\",\n                onButtonClicked: ()=>onDifficultySelected(intermediateDifficulty)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_difficultybutton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                value: \"Expert\",\n                onButtonClicked: ()=>onDifficultySelected(expertDifficulty)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_difficultybutton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                value: \"Custom\",\n                onButtonClicked: ()=>handleCustomDifficultySelected,\n                selected: isOnCustomDifficulty\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, this),\n            isOnCustomDifficulty && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                action: generateNewBoard,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container-row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"container-row\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: widthInputId,\n                                    children: \"Width\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 33\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    id: widthInputId,\n                                    type: \"number\",\n                                    min: \"1\",\n                                    max: \"10000\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 33\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                            lineNumber: 64,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"container-row\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: heightInputId,\n                                    children: \"Height\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 33\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    id: heightInputId,\n                                    type: \"number\",\n                                    min: \"1\",\n                                    max: \"10000\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 33\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                            lineNumber: 73,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"container-row\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: minesNum,\n                                    children: \"Mines\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 33\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    id: minesNum,\n                                    type: \"number\",\n                                    min: \"1\",\n                                    max: \"10000\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 33\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                            lineNumber: 82,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Update\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                            lineNumber: 91,\n                            columnNumber: 29\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                    lineNumber: 63,\n                    columnNumber: 25\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                lineNumber: 62,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                lineNumber: 96,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                lineNumber: 96,\n                columnNumber: 19\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_board__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                boardData: boardData,\n                minesNum: minesNum,\n                resetGame: handleResetGameRequest\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\main.jsx\",\n                lineNumber: 97,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Main, \"4y28nfQSV+jGg5AEp7AWuBGc+kI=\", false, function() {\n    return [\n        react__WEBPACK_IMPORTED_MODULE_1__.useId,\n        react__WEBPACK_IMPORTED_MODULE_1__.useId,\n        react__WEBPACK_IMPORTED_MODULE_1__.useId\n    ];\n});\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL21haW4uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQzhCO0FBQ0U7QUFDaUI7QUFDdEI7QUFFWixTQUFTSTs7SUFDcEIsc0VBQXNFO0lBQ3RFLE1BQU1DLHFCQUFxQjtRQUFDO1FBQUc7UUFBRztLQUFHO0lBQ3JDLE1BQU1DLHlCQUF5QjtRQUFDO1FBQUk7UUFBSTtLQUFHO0lBQzNDLE1BQU1DLG1CQUFtQjtRQUFDO1FBQUk7UUFBSTtLQUFHO0lBRXJDLE1BQU1DLGVBQWVSLDRDQUFLQTtJQUMxQixNQUFNUyxnQkFBZ0JULDRDQUFLQTtJQUMzQixNQUFNVSxlQUFlViw0Q0FBS0E7SUFFMUIsTUFBTSxDQUFDVyxzQkFBc0JDLHdCQUF3QixHQUFHWCwrQ0FBUUEsQ0FBQztJQUNqRSxNQUFNLENBQUNZLFdBQVdDLGFBQWEsR0FBR2IsK0NBQVFBLENBQUNNLGdCQUFnQixDQUFDLEVBQUU7SUFDOUQsTUFBTSxDQUFDUSxjQUFjQyxnQkFBZ0IsR0FBR2YsK0NBQVFBLENBQUNNLGdCQUFnQixDQUFDLEVBQUU7SUFDcEUsTUFBTSxDQUFDVSxVQUFVQyxZQUFZLEdBQUdqQiwrQ0FBUUEsQ0FBQ00sZ0JBQWdCLENBQUMsRUFBRTtJQUM1RCxNQUFNLENBQUNZLFdBQVdDLGFBQWEsR0FBR25CLCtDQUFRQSxDQUFDb0IsTUFBTVIsV0FBV1MsSUFBSSxDQUFDRCxNQUFNTixjQUFjTyxJQUFJLENBQUM7SUFFMUYsU0FBU0M7UUFDTEgsYUFBYUMsTUFBTVIsV0FBV1MsSUFBSSxDQUFDRCxNQUFNTixjQUFjTyxJQUFJLENBQUM7UUFDNURFLFFBQVFDLEdBQUcsQ0FBQyxZQUFZWjtRQUN4QlcsUUFBUUMsR0FBRyxDQUFDLFlBQVlWO1FBQ3hCUyxRQUFRQyxHQUFHLENBQUMsWUFBWVI7UUFDeEJPLFFBQVFDLEdBQUcsQ0FBQyxXQUFXTjtJQUV2Qix3QkFBd0I7SUFDNUI7SUFFQSxTQUFTTztRQUNMZCx3QkFBd0I7UUFDeEJZLFFBQVFDLEdBQUcsQ0FBQztJQUNoQjtJQUVBLFNBQVNFLHFCQUFxQkMsVUFBVTtRQUNwQ0osUUFBUUMsR0FBRyxDQUFDLDBCQUEwQkc7UUFDdENoQix3QkFBd0I7UUFDeEJFLGFBQWFjLFVBQVUsQ0FBQyxFQUFFO1FBQzFCWixnQkFBZ0JZLFVBQVUsQ0FBQyxFQUFFO1FBQzdCVixZQUFZVSxVQUFVLENBQUMsRUFBRTtRQUN6Qkw7UUFDQUMsUUFBUUMsR0FBRyxDQUFDLGdCQUFnQlI7SUFDaEM7SUFFQSxTQUFTWTtRQUNMTCxRQUFRQyxHQUFHLENBQUM7UUFDWkY7SUFDSjtJQUVBLHFCQUNJOzswQkFDSSw4REFBQ3JCLHlEQUFnQkE7Z0JBQUM0QixPQUFPO2dCQUFZQyxpQkFBaUIsSUFBTUoscUJBQXFCdEI7Ozs7OzswQkFDakYsOERBQUNILHlEQUFnQkE7Z0JBQUM0QixPQUFPO2dCQUFnQkMsaUJBQWlCLElBQU1KLHFCQUFxQnJCOzs7Ozs7MEJBQ3JGLDhEQUFDSix5REFBZ0JBO2dCQUFDNEIsT0FBTztnQkFBVUMsaUJBQWlCLElBQU1KLHFCQUFxQnBCOzs7Ozs7MEJBQy9FLDhEQUFDTCx5REFBZ0JBO2dCQUFDNEIsT0FBTztnQkFBVUMsaUJBQWlCLElBQU1MO2dCQUFnQ00sVUFBVXJCOzs7Ozs7WUFDbkdBLHNDQUdPLDhEQUFDc0I7Z0JBQUtDLFFBQVFYOzBCQUNWLDRFQUFDWTtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ0M7b0NBQU1DLFNBQVM5Qjs4Q0FBYzs7Ozs7OzhDQUM5Qiw4REFBQytCO29DQUNHQyxJQUFJaEM7b0NBQ0ppQyxNQUFLO29DQUNMQyxLQUFJO29DQUNKQyxLQUFJOzs7Ozs7Ozs7Ozs7c0NBR1osOERBQUNSOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ0M7b0NBQU1DLFNBQVM3Qjs4Q0FBZTs7Ozs7OzhDQUMvQiw4REFBQzhCO29DQUNHQyxJQUFJL0I7b0NBQ0pnQyxNQUFLO29DQUNMQyxLQUFJO29DQUNKQyxLQUFJOzs7Ozs7Ozs7Ozs7c0NBR1osOERBQUNSOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ0M7b0NBQU1DLFNBQVNyQjs4Q0FBVTs7Ozs7OzhDQUMxQiw4REFBQ3NCO29DQUNHQyxJQUFJdkI7b0NBQ0p3QixNQUFLO29DQUNMQyxLQUFJO29DQUNKQyxLQUFJOzs7Ozs7Ozs7Ozs7c0NBR1osOERBQUNDOzRCQUFPSCxNQUFLO3NDQUFTOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFLdEMsOERBQUNJOzs7OzswQkFBSyw4REFBQ0E7Ozs7OzBCQUNQLDhEQUFDMUMsOENBQUtBO2dCQUFDZ0IsV0FBV0E7Z0JBQVdGLFVBQVVBO2dCQUFVNkIsV0FBV2pCOzs7Ozs7OztBQUd4RTtHQTdGd0J6Qjs7UUFNQ0osd0NBQUtBO1FBQ0pBLHdDQUFLQTtRQUNOQSx3Q0FBS0E7OztLQVJOSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9tYWluLmpzeD84M2M0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCB7IHVzZUlkIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBEaWZmaWN1bHR5QnV0dG9uIGZyb20gXCIuL2RpZmZpY3VsdHlidXR0b25cIlxyXG5pbXBvcnQgQm9hcmQgZnJvbSBcIi4vYm9hcmRcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbigpIHtcclxuICAgIC8vIFRoZSBkaWZmaWN1bHR5IHZhcmlhYmxlcyBzYXZlIHRoZSB3aWR0aCwgaGVpZ2h0IGFuZCBudW1iZXIgb2YgbWluZXNcclxuICAgIGNvbnN0IGJlZ2lubmVyRGlmZmljdWx0eSA9IFs5LCA5LCAxMF1cclxuICAgIGNvbnN0IGludGVybWVkaWF0ZURpZmZpY3VsdHkgPSBbMTYsIDE2LCA0MF1cclxuICAgIGNvbnN0IGV4cGVydERpZmZpY3VsdHkgPSBbMTYsIDMwLCA5OV1cclxuXHJcbiAgICBjb25zdCB3aWR0aElucHV0SWQgPSB1c2VJZCgpXHJcbiAgICBjb25zdCBoZWlnaHRJbnB1dElkID0gdXNlSWQoKVxyXG4gICAgY29uc3QgbWluZXNJbnB1dElkID0gdXNlSWQoKVxyXG5cclxuICAgIGNvbnN0IFtpc09uQ3VzdG9tRGlmZmljdWx0eSwgc2V0SXNPbkN1c3RvbURpZmZpY3VsdHldID0gdXNlU3RhdGUodHJ1ZSlcclxuICAgIGNvbnN0IFtib2FyZFJvd3MsIHNldEJvYXJkUm93c10gPSB1c2VTdGF0ZShleHBlcnREaWZmaWN1bHR5WzBdKVxyXG4gICAgY29uc3QgW2JvYXJkQ29sdW1ucywgc2V0Qm9hcmRDb2x1bW5zXSA9IHVzZVN0YXRlKGV4cGVydERpZmZpY3VsdHlbMV0pXHJcbiAgICBjb25zdCBbbWluZXNOdW0sIHNldE1pbmVzTnVtXSA9IHVzZVN0YXRlKGV4cGVydERpZmZpY3VsdHlbMl0pXHJcbiAgICBjb25zdCBbYm9hcmREYXRhLCBzZXRCb2FyZERhdGFdID0gdXNlU3RhdGUoQXJyYXkoYm9hcmRSb3dzKS5maWxsKEFycmF5KGJvYXJkQ29sdW1ucykuZmlsbCgnKicpKSlcclxuXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZU5ld0JvYXJkKCkge1xyXG4gICAgICAgIHNldEJvYXJkRGF0YShBcnJheShib2FyZFJvd3MpLmZpbGwoQXJyYXkoYm9hcmRDb2x1bW5zKS5maWxsKCcqJykpKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSEVJR0g6IFwiICsgYm9hcmRSb3dzKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiV0lEVEg6IFwiICsgYm9hcmRDb2x1bW5zKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTUlORVM6IFwiICsgbWluZXNOdW0pXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJEQVRBOiBcIiArIGJvYXJkRGF0YSlcclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhib2FyZERhdGEpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ3VzdG9tRGlmZmljdWx0eVNlbGVjdGVkKCkge1xyXG4gICAgICAgIHNldElzT25DdXN0b21EaWZmaWN1bHR5KHRydWUpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJPTiBDVVNUT00gRElGRklDVUxUWVwiKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uRGlmZmljdWx0eVNlbGVjdGVkKGRpZmZpY3VsdHkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNFTEVDVEVEIERJRkZJQ1VMVFk6IFwiICsgZGlmZmljdWx0eSlcclxuICAgICAgICBzZXRJc09uQ3VzdG9tRGlmZmljdWx0eShmYWxzZSlcclxuICAgICAgICBzZXRCb2FyZFJvd3MoZGlmZmljdWx0eVswXSlcclxuICAgICAgICBzZXRCb2FyZENvbHVtbnMoZGlmZmljdWx0eVsxXSlcclxuICAgICAgICBzZXRNaW5lc051bShkaWZmaWN1bHR5WzJdKVxyXG4gICAgICAgIGdlbmVyYXRlTmV3Qm9hcmQoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTUlORVMgTlVNOiBcIiArIG1pbmVzTnVtKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlc2V0R2FtZVJlcXVlc3QoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJHQU1FIFJFU0VUXCIpXHJcbiAgICAgICAgZ2VuZXJhdGVOZXdCb2FyZCgpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8RGlmZmljdWx0eUJ1dHRvbiB2YWx1ZT17XCJCZWdpbm5lclwifSBvbkJ1dHRvbkNsaWNrZWQ9eygpID0+IG9uRGlmZmljdWx0eVNlbGVjdGVkKGJlZ2lubmVyRGlmZmljdWx0eSl9IC8+XHJcbiAgICAgICAgICAgIDxEaWZmaWN1bHR5QnV0dG9uIHZhbHVlPXtcIkludGVybWVkaWF0ZVwifSBvbkJ1dHRvbkNsaWNrZWQ9eygpID0+IG9uRGlmZmljdWx0eVNlbGVjdGVkKGludGVybWVkaWF0ZURpZmZpY3VsdHkpfSAvPlxyXG4gICAgICAgICAgICA8RGlmZmljdWx0eUJ1dHRvbiB2YWx1ZT17XCJFeHBlcnRcIn0gb25CdXR0b25DbGlja2VkPXsoKSA9PiBvbkRpZmZpY3VsdHlTZWxlY3RlZChleHBlcnREaWZmaWN1bHR5KX0gLz5cclxuICAgICAgICAgICAgPERpZmZpY3VsdHlCdXR0b24gdmFsdWU9e1wiQ3VzdG9tXCJ9IG9uQnV0dG9uQ2xpY2tlZD17KCkgPT4gaGFuZGxlQ3VzdG9tRGlmZmljdWx0eVNlbGVjdGVkfSBzZWxlY3RlZD17aXNPbkN1c3RvbURpZmZpY3VsdHl9IC8+XHJcbiAgICAgICAgICAgIHtpc09uQ3VzdG9tRGlmZmljdWx0eSAmJlxyXG5cclxuICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249e2dlbmVyYXRlTmV3Qm9hcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXt3aWR0aElucHV0SWR9PldpZHRoPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3dpZHRoSW5wdXRJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9XCIxMDAwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2hlaWdodElucHV0SWR9PkhlaWdodDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtoZWlnaHRJbnB1dElkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD1cIjEwMDAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17bWluZXNOdW19Pk1pbmVzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e21pbmVzTnVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD1cIjEwMDAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5VcGRhdGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxiciAvPjxiciAvPlxyXG4gICAgICAgICAgICA8Qm9hcmQgYm9hcmREYXRhPXtib2FyZERhdGF9IG1pbmVzTnVtPXttaW5lc051bX0gcmVzZXRHYW1lPXtoYW5kbGVSZXNldEdhbWVSZXF1ZXN0fSAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZUlkIiwidXNlU3RhdGUiLCJEaWZmaWN1bHR5QnV0dG9uIiwiQm9hcmQiLCJNYWluIiwiYmVnaW5uZXJEaWZmaWN1bHR5IiwiaW50ZXJtZWRpYXRlRGlmZmljdWx0eSIsImV4cGVydERpZmZpY3VsdHkiLCJ3aWR0aElucHV0SWQiLCJoZWlnaHRJbnB1dElkIiwibWluZXNJbnB1dElkIiwiaXNPbkN1c3RvbURpZmZpY3VsdHkiLCJzZXRJc09uQ3VzdG9tRGlmZmljdWx0eSIsImJvYXJkUm93cyIsInNldEJvYXJkUm93cyIsImJvYXJkQ29sdW1ucyIsInNldEJvYXJkQ29sdW1ucyIsIm1pbmVzTnVtIiwic2V0TWluZXNOdW0iLCJib2FyZERhdGEiLCJzZXRCb2FyZERhdGEiLCJBcnJheSIsImZpbGwiLCJnZW5lcmF0ZU5ld0JvYXJkIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUN1c3RvbURpZmZpY3VsdHlTZWxlY3RlZCIsIm9uRGlmZmljdWx0eVNlbGVjdGVkIiwiZGlmZmljdWx0eSIsImhhbmRsZVJlc2V0R2FtZVJlcXVlc3QiLCJ2YWx1ZSIsIm9uQnV0dG9uQ2xpY2tlZCIsInNlbGVjdGVkIiwiZm9ybSIsImFjdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwiaWQiLCJ0eXBlIiwibWluIiwibWF4IiwiYnV0dG9uIiwiYnIiLCJyZXNldEdhbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/main.jsx\n"));

/***/ })

});