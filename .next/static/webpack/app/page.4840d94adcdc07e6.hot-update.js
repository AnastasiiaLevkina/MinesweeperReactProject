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

/***/ "(app-pages-browser)/./src/components/board.jsx":
/*!**********************************!*\
  !*** ./src/components/board.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Board; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./.yarn/__virtual__/next-virtual-7b2e7b0c22/5/AppData/Local/Yarn/Berry/cache/next-npm-14.2.4-37fb4e5b51-10c0.zip/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./.yarn/__virtual__/next-virtual-7b2e7b0c22/5/AppData/Local/Yarn/Berry/cache/next-npm-14.2.4-37fb4e5b51-10c0.zip/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/style.css */ \"(app-pages-browser)/./src/css/style.css\");\n/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cell */ \"(app-pages-browser)/./src/components/cell.jsx\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header */ \"(app-pages-browser)/./src/components/header.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Board(param) {\n    let { boardRows, boardColumns, minesNum } = param;\n    _s();\n    const [boardData, setBoardData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(boardRows).fill(Array(boardColumns).fill(\"*\")));\n    const [flagsLeft, setFlagsLeft] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(minesNum);\n    function generateNewBoard() {\n        setBoardData(Array(boardRows).fill(Array(boardColumns).fill(\"*\")));\n    //console.log(boardData)\n    }\n    function handleCellClick() {\n        testButtonCell();\n    }\n    function testButtonCell() {\n        console.log(\"On cell clicked haha.\");\n    }\n    console.log(\"ROWS: \" + boardRows + \" COLUMNS: \" + boardColumns + \" MINES: \" + minesNum);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"board\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onEmojiButtonClick: generateNewBoard,\n                minesNum: minesNum\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\board.jsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"minefield\",\n                children: boardData.map((row, i)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            flexDirection: \"row\"\n                        },\n                        children: row.map((cell, j)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_cell__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                onCellClick: handleCellClick,\n                                value: boardData[i][j]\n                            }, j, false, {\n                                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\board.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 41\n                            }, this);\n                        })\n                    }, i, false, {\n                        fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\board.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 25\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\board.jsx\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\board.jsx\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, this);\n}\n_s(Board, \"QVB2mkSmBl8MXwFgCUh8Tg1iy/8=\");\n_c = Board;\nvar _c;\n$RefreshReg$(_c, \"Board\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2JvYXJkLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDZ0M7QUFFUDtBQUNBO0FBQ0k7QUFFZCxTQUFTRyxNQUFNLEtBQXFDO1FBQXJDLEVBQUVDLFNBQVMsRUFBRUMsWUFBWSxFQUFFQyxRQUFRLEVBQUUsR0FBckM7O0lBQzFCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHUiwrQ0FBUUEsQ0FBQ1MsTUFBTUwsV0FBV00sSUFBSSxDQUFDRCxNQUFNSixjQUFjSyxJQUFJLENBQUM7SUFDMUYsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdaLCtDQUFRQSxDQUFDTTtJQUUzQyxTQUFTTztRQUNMTCxhQUFhQyxNQUFNTCxXQUFXTSxJQUFJLENBQUNELE1BQU1KLGNBQWNLLElBQUksQ0FBQztJQUU1RCx3QkFBd0I7SUFDNUI7SUFFQSxTQUFTSTtRQUNMQztJQUNKO0lBRUEsU0FBU0E7UUFDTEMsUUFBUUMsR0FBRyxDQUFDO0lBQ2hCO0lBRUFELFFBQVFDLEdBQUcsQ0FBQyxXQUFXYixZQUFZLGVBQWVDLGVBQWUsYUFBYUM7SUFDOUUscUJBQ0ksOERBQUNZO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDakIsK0NBQU1BO2dCQUFDa0Isb0JBQ0pQO2dCQUVBUCxVQUFVQTs7Ozs7OzBCQUVkLDhEQUFDWTtnQkFBSUMsV0FBVTswQkFDVlosVUFBVWMsR0FBRyxDQUFDLENBQUNDLEtBQUtDO29CQUNqQixxQkFDSSw4REFBQ0w7d0JBQVlNLE9BQU87NEJBQUVDLFNBQVM7NEJBQVFDLGVBQWU7d0JBQU07a0NBRXBESixJQUFJRCxHQUFHLENBQUMsQ0FBQ00sTUFBTUM7NEJBQ1gscUJBQ0ksOERBQUMzQiw2Q0FBSUE7Z0NBQVM0QixhQUFhZjtnQ0FBaUJnQixPQUFPdkIsU0FBUyxDQUFDZ0IsRUFBRSxDQUFDSyxFQUFFOytCQUF2REE7Ozs7O3dCQUVuQjt1QkFORUw7Ozs7O2dCQVVsQjs7Ozs7Ozs7Ozs7O0FBS2hCO0dBNUN3QnBCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2JvYXJkLmpzeD81OGJhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbmltcG9ydCBcIi4uL2Nzcy9zdHlsZS5jc3NcIlxyXG5pbXBvcnQgQ2VsbCBmcm9tIFwiLi9jZWxsXCJcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9oZWFkZXJcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9hcmQoeyBib2FyZFJvd3MsIGJvYXJkQ29sdW1ucywgbWluZXNOdW0gfSkge1xyXG4gICAgY29uc3QgW2JvYXJkRGF0YSwgc2V0Qm9hcmREYXRhXSA9IHVzZVN0YXRlKEFycmF5KGJvYXJkUm93cykuZmlsbChBcnJheShib2FyZENvbHVtbnMpLmZpbGwoJyonKSkpXHJcbiAgICBjb25zdCBbZmxhZ3NMZWZ0LCBzZXRGbGFnc0xlZnRdID0gdXNlU3RhdGUobWluZXNOdW0pXHJcblxyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVOZXdCb2FyZCgpIHtcclxuICAgICAgICBzZXRCb2FyZERhdGEoQXJyYXkoYm9hcmRSb3dzKS5maWxsKEFycmF5KGJvYXJkQ29sdW1ucykuZmlsbCgnKicpKSlcclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhib2FyZERhdGEpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2VsbENsaWNrKCkge1xyXG4gICAgICAgIHRlc3RCdXR0b25DZWxsKClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0ZXN0QnV0dG9uQ2VsbCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9uIGNlbGwgY2xpY2tlZCBoYWhhLlwiKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiUk9XUzogXCIgKyBib2FyZFJvd3MgKyBcIiBDT0xVTU5TOiBcIiArIGJvYXJkQ29sdW1ucyArIFwiIE1JTkVTOiBcIiArIG1pbmVzTnVtKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkXCI+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgb25FbW9qaUJ1dHRvbkNsaWNrPXtcclxuICAgICAgICAgICAgICAgIGdlbmVyYXRlTmV3Qm9hcmRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbWluZXNOdW09e21pbmVzTnVtfSAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW5lZmllbGRcIj5cclxuICAgICAgICAgICAgICAgIHtib2FyZERhdGEubWFwKChyb3csIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwicm93XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93Lm1hcCgoY2VsbCwgaikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENlbGwga2V5PXtqfSBvbkNlbGxDbGljaz17aGFuZGxlQ2VsbENsaWNrfSB2YWx1ZT17Ym9hcmREYXRhW2ldW2pdfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJDZWxsIiwiSGVhZGVyIiwiQm9hcmQiLCJib2FyZFJvd3MiLCJib2FyZENvbHVtbnMiLCJtaW5lc051bSIsImJvYXJkRGF0YSIsInNldEJvYXJkRGF0YSIsIkFycmF5IiwiZmlsbCIsImZsYWdzTGVmdCIsInNldEZsYWdzTGVmdCIsImdlbmVyYXRlTmV3Qm9hcmQiLCJoYW5kbGVDZWxsQ2xpY2siLCJ0ZXN0QnV0dG9uQ2VsbCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJvbkVtb2ppQnV0dG9uQ2xpY2siLCJtYXAiLCJyb3ciLCJpIiwic3R5bGUiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImNlbGwiLCJqIiwib25DZWxsQ2xpY2siLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/board.jsx\n"));

/***/ })

});