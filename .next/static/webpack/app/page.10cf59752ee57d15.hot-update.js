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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Board; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./.yarn/__virtual__/next-virtual-7b2e7b0c22/5/AppData/Local/Yarn/Berry/cache/next-npm-14.2.4-37fb4e5b51-10c0.zip/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./.yarn/__virtual__/next-virtual-7b2e7b0c22/5/AppData/Local/Yarn/Berry/cache/next-npm-14.2.4-37fb4e5b51-10c0.zip/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/style.css */ \"(app-pages-browser)/./src/css/style.css\");\n/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cell */ \"(app-pages-browser)/./src/components/cell.jsx\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header */ \"(app-pages-browser)/./src/components/header.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Board(param) {\n    let { boardRows, boardColumns, minesNum } = param;\n    _s();\n    const [boardData, setBoardData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(boardRows).fill(Array(boardColumns).fill(\"*\")));\n    const [flagsLeft, setFlagsLeft] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(minesNum);\n    function generateNewBoard() {\n        setBoardData(Array(boardRows).fill(Array(boardColumns).fill(\"*\")));\n    //console.log(boardData)\n    }\n    function handleCellClick() {\n        testButtonCell();\n    }\n    function handleRightCellClick() {\n        setFlagsLeft();\n    }\n    function testButtonCell() {\n        console.log(\"On cell clicked haha.\");\n    }\n    console.log(\"ROWS: \" + boardRows + \" COLUMNS: \" + boardColumns + \" MINES: \" + minesNum);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"board\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onEmojiButtonClick: generateNewBoard,\n                minesNum: minesNum\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\board.jsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"minefield\",\n                children: boardData.map((row, i)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            flexDirection: \"row\"\n                        },\n                        children: row.map((cell, j)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_cell__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                onCellClick: handleCellClick,\n                                value: boardData[i][j]\n                            }, j, false, {\n                                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\board.jsx\",\n                                lineNumber: 45,\n                                columnNumber: 41\n                            }, this);\n                        })\n                    }, i, false, {\n                        fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\board.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 25\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\board.jsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\board.jsx\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, this);\n}\n_s(Board, \"QVB2mkSmBl8MXwFgCUh8Tg1iy/8=\");\n_c = Board;\nvar _c;\n$RefreshReg$(_c, \"Board\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2JvYXJkLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDZ0M7QUFFUDtBQUNBO0FBQ0k7QUFFZCxTQUFTRyxNQUFNLEtBQXFDO1FBQXJDLEVBQUVDLFNBQVMsRUFBRUMsWUFBWSxFQUFFQyxRQUFRLEVBQUUsR0FBckM7O0lBQzFCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHUiwrQ0FBUUEsQ0FBQ1MsTUFBTUwsV0FBV00sSUFBSSxDQUFDRCxNQUFNSixjQUFjSyxJQUFJLENBQUM7SUFDMUYsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdaLCtDQUFRQSxDQUFDTTtJQUUzQyxTQUFTTztRQUNMTCxhQUFhQyxNQUFNTCxXQUFXTSxJQUFJLENBQUNELE1BQU1KLGNBQWNLLElBQUksQ0FBQztJQUU1RCx3QkFBd0I7SUFDNUI7SUFFQSxTQUFTSTtRQUNMQztJQUNKO0lBRUEsU0FBU0M7UUFDTEo7SUFDSjtJQUVBLFNBQVNHO1FBQ0xFLFFBQVFDLEdBQUcsQ0FBQztJQUNoQjtJQUVBRCxRQUFRQyxHQUFHLENBQUMsV0FBV2QsWUFBWSxlQUFlQyxlQUFlLGFBQWFDO0lBQzlFLHFCQUNJLDhEQUFDYTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ2xCLCtDQUFNQTtnQkFBQ21CLG9CQUNKUjtnQkFFQVAsVUFBVUE7Ozs7OzswQkFFZCw4REFBQ2E7Z0JBQUlDLFdBQVU7MEJBQ1ZiLFVBQVVlLEdBQUcsQ0FBQyxDQUFDQyxLQUFLQztvQkFDakIscUJBQ0ksOERBQUNMO3dCQUFZTSxPQUFPOzRCQUFFQyxTQUFTOzRCQUFRQyxlQUFlO3dCQUFNO2tDQUVwREosSUFBSUQsR0FBRyxDQUFDLENBQUNNLE1BQU1DOzRCQUNYLHFCQUNJLDhEQUFDNUIsNkNBQUlBO2dDQUFTNkIsYUFBYWhCO2dDQUFpQmlCLE9BQU94QixTQUFTLENBQUNpQixFQUFFLENBQUNLLEVBQUU7K0JBQXZEQTs7Ozs7d0JBRW5CO3VCQU5FTDs7Ozs7Z0JBVWxCOzs7Ozs7Ozs7Ozs7QUFLaEI7R0FoRHdCckI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYm9hcmQuanN4PzU4YmEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuaW1wb3J0IFwiLi4vY3NzL3N0eWxlLmNzc1wiXHJcbmltcG9ydCBDZWxsIGZyb20gXCIuL2NlbGxcIlxyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2hlYWRlclwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb2FyZCh7IGJvYXJkUm93cywgYm9hcmRDb2x1bW5zLCBtaW5lc051bSB9KSB7XHJcbiAgICBjb25zdCBbYm9hcmREYXRhLCBzZXRCb2FyZERhdGFdID0gdXNlU3RhdGUoQXJyYXkoYm9hcmRSb3dzKS5maWxsKEFycmF5KGJvYXJkQ29sdW1ucykuZmlsbCgnKicpKSlcclxuICAgIGNvbnN0IFtmbGFnc0xlZnQsIHNldEZsYWdzTGVmdF0gPSB1c2VTdGF0ZShtaW5lc051bSlcclxuXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZU5ld0JvYXJkKCkge1xyXG4gICAgICAgIHNldEJvYXJkRGF0YShBcnJheShib2FyZFJvd3MpLmZpbGwoQXJyYXkoYm9hcmRDb2x1bW5zKS5maWxsKCcqJykpKVxyXG5cclxuICAgICAgICAvL2NvbnNvbGUubG9nKGJvYXJkRGF0YSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDZWxsQ2xpY2soKSB7XHJcbiAgICAgICAgdGVzdEJ1dHRvbkNlbGwoKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVSaWdodENlbGxDbGljaygpIHtcclxuICAgICAgICBzZXRGbGFnc0xlZnQoKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRlc3RCdXR0b25DZWxsKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT24gY2VsbCBjbGlja2VkIGhhaGEuXCIpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJST1dTOiBcIiArIGJvYXJkUm93cyArIFwiIENPTFVNTlM6IFwiICsgYm9hcmRDb2x1bW5zICsgXCIgTUlORVM6IFwiICsgbWluZXNOdW0pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9hcmRcIj5cclxuICAgICAgICAgICAgPEhlYWRlciBvbkVtb2ppQnV0dG9uQ2xpY2s9e1xyXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVOZXdCb2FyZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBtaW5lc051bT17bWluZXNOdW19IC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbmVmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAge2JvYXJkRGF0YS5tYXAoKHJvdywgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJyb3dcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cubWFwKChjZWxsLCBqKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2VsbCBrZXk9e2p9IG9uQ2VsbENsaWNrPXtoYW5kbGVDZWxsQ2xpY2t9IHZhbHVlPXtib2FyZERhdGFbaV1bal19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkNlbGwiLCJIZWFkZXIiLCJCb2FyZCIsImJvYXJkUm93cyIsImJvYXJkQ29sdW1ucyIsIm1pbmVzTnVtIiwiYm9hcmREYXRhIiwic2V0Qm9hcmREYXRhIiwiQXJyYXkiLCJmaWxsIiwiZmxhZ3NMZWZ0Iiwic2V0RmxhZ3NMZWZ0IiwiZ2VuZXJhdGVOZXdCb2FyZCIsImhhbmRsZUNlbGxDbGljayIsInRlc3RCdXR0b25DZWxsIiwiaGFuZGxlUmlnaHRDZWxsQ2xpY2siLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwib25FbW9qaUJ1dHRvbkNsaWNrIiwibWFwIiwicm93IiwiaSIsInN0eWxlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJjZWxsIiwiaiIsIm9uQ2VsbENsaWNrIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/board.jsx\n"));

/***/ })

});