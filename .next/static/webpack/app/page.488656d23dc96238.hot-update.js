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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Board; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./.yarn/__virtual__/next-virtual-7b2e7b0c22/5/AppData/Local/Yarn/Berry/cache/next-npm-14.2.4-37fb4e5b51-10c0.zip/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./.yarn/__virtual__/next-virtual-7b2e7b0c22/5/AppData/Local/Yarn/Berry/cache/next-npm-14.2.4-37fb4e5b51-10c0.zip/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/style.css */ \"(app-pages-browser)/./src/css/style.css\");\n/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cell */ \"(app-pages-browser)/./src/components/cell.jsx\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header */ \"(app-pages-browser)/./src/components/header.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Board(param) {\n    let { boardData, minesNum, resetGame } = param;\n    _s();\n    const [flagsLeft, setFlagsLeft] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(minesNum);\n    const [hasWon, setHasWon] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [hasLost, setHasLost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    function handleCellClick(value) {\n        if (value === \"*\") {\n            handleUncoveredMinedCell();\n        } else {}\n    }\n    function countMinesAroundCell() {\n        console.log();\n    }\n    function handleUncoveredMinedCell() {\n        setHasLost(true);\n    }\n    function handleRightCellClick(flag) {\n        setFlagsLeft((flagsLeft)=>flagsLeft + flag);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"board\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                flagsLeft: flagsLeft,\n                onEmojiButtonClick: resetGame,\n                minesNum: minesNum\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\board.jsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"minefield\",\n                children: boardData.map((row, i)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            flexDirection: \"row\"\n                        },\n                        children: row.map((cell, j)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_cell__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                onCellClick: handleCellClick,\n                                onRightCellClick: handleRightCellClick,\n                                value: boardData[i][j],\n                                gameEnded: hasLost || hasWon\n                            }, j, false, {\n                                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\board.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 41\n                            }, this);\n                        })\n                    }, i, false, {\n                        fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\board.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 25\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\board.jsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\board.jsx\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, this);\n}\n_s(Board, \"csTHeVM1lW+nF5KFKTCfZONVPnw=\");\n_c = Board;\nvar _c;\n$RefreshReg$(_c, \"Board\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2JvYXJkLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDZ0M7QUFFUDtBQUNBO0FBQ0k7QUFFZCxTQUFTRyxNQUFNLEtBQWtDO1FBQWxDLEVBQUVDLFNBQVMsRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUUsR0FBbEM7O0lBQzFCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHUiwrQ0FBUUEsQ0FBQ0s7SUFDM0MsTUFBTSxDQUFDSSxRQUFRQyxVQUFVLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ1csU0FBU0MsV0FBVyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUd2QyxTQUFTYSxnQkFBZ0JDLEtBQUs7UUFDMUIsSUFBSUEsVUFBUSxLQUFLO1lBQ2JDO1FBQ0osT0FBTyxDQUVQO0lBQ0o7SUFFQSxTQUFTQztRQUNMQyxRQUFRQyxHQUFHO0lBQ2Y7SUFFQSxTQUFTSDtRQUNMSCxXQUFXO0lBQ2Y7SUFFQSxTQUFTTyxxQkFBcUJDLElBQUk7UUFDOUJaLGFBQWFELENBQUFBLFlBQWFBLFlBQVlhO0lBQzFDO0lBRUEscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDcEIsK0NBQU1BO2dCQUNISyxXQUFXQTtnQkFDWGdCLG9CQUNJakI7Z0JBRUpELFVBQVVBOzs7Ozs7MEJBRWQsOERBQUNnQjtnQkFBSUMsV0FBVTswQkFDVmxCLFVBQVVvQixHQUFHLENBQUMsQ0FBQ0MsS0FBS0M7b0JBQ2pCLHFCQUNJLDhEQUFDTDt3QkFBWU0sT0FBTzs0QkFBRUMsU0FBUzs0QkFBUUMsZUFBZTt3QkFBTTtrQ0FFcERKLElBQUlELEdBQUcsQ0FBQyxDQUFDTSxNQUFNQzs0QkFDWCxxQkFDSSw4REFBQzlCLDZDQUFJQTtnQ0FDRCtCLGFBQWFuQjtnQ0FDYm9CLGtCQUFrQmQ7Z0NBQ2xCTCxPQUFPVixTQUFTLENBQUNzQixFQUFFLENBQUNLLEVBQUU7Z0NBQ3RCRyxXQUFXdkIsV0FBV0Y7K0JBSmZzQjs7Ozs7d0JBT25CO3VCQVhFTDs7Ozs7Z0JBZWxCOzs7Ozs7Ozs7Ozs7QUFLaEI7R0ExRHdCdkI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYm9hcmQuanN4PzU4YmEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuaW1wb3J0IFwiLi4vY3NzL3N0eWxlLmNzc1wiXHJcbmltcG9ydCBDZWxsIGZyb20gXCIuL2NlbGxcIlxyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2hlYWRlclwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb2FyZCh7IGJvYXJkRGF0YSwgbWluZXNOdW0sIHJlc2V0R2FtZSB9KSB7XHJcbiAgICBjb25zdCBbZmxhZ3NMZWZ0LCBzZXRGbGFnc0xlZnRdID0gdXNlU3RhdGUobWluZXNOdW0pXHJcbiAgICBjb25zdCBbaGFzV29uLCBzZXRIYXNXb25dID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbaGFzTG9zdCwgc2V0SGFzTG9zdF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2VsbENsaWNrKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlPT09JyonKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZVVuY292ZXJlZE1pbmVkQ2VsbCgpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNvdW50TWluZXNBcm91bmRDZWxsKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVVbmNvdmVyZWRNaW5lZENlbGwoKSB7XHJcbiAgICAgICAgc2V0SGFzTG9zdCh0cnVlKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVJpZ2h0Q2VsbENsaWNrKGZsYWcpIHtcclxuICAgICAgICBzZXRGbGFnc0xlZnQoZmxhZ3NMZWZ0ID0+IGZsYWdzTGVmdCArIGZsYWcpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkXCI+XHJcbiAgICAgICAgICAgIDxIZWFkZXJcclxuICAgICAgICAgICAgICAgIGZsYWdzTGVmdD17ZmxhZ3NMZWZ0fVxyXG4gICAgICAgICAgICAgICAgb25FbW9qaUJ1dHRvbkNsaWNrPXtcclxuICAgICAgICAgICAgICAgICAgICByZXNldEdhbWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG1pbmVzTnVtPXttaW5lc051bX0gLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluZWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICB7Ym9hcmREYXRhLm1hcCgocm93LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5tYXAoKGNlbGwsIGopID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDZWxsIGtleT17an1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNlbGxDbGljaz17aGFuZGxlQ2VsbENsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmlnaHRDZWxsQ2xpY2s9e2hhbmRsZVJpZ2h0Q2VsbENsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtib2FyZERhdGFbaV1bal19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZUVuZGVkPXtoYXNMb3N0IHx8IGhhc1dvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkNlbGwiLCJIZWFkZXIiLCJCb2FyZCIsImJvYXJkRGF0YSIsIm1pbmVzTnVtIiwicmVzZXRHYW1lIiwiZmxhZ3NMZWZ0Iiwic2V0RmxhZ3NMZWZ0IiwiaGFzV29uIiwic2V0SGFzV29uIiwiaGFzTG9zdCIsInNldEhhc0xvc3QiLCJoYW5kbGVDZWxsQ2xpY2siLCJ2YWx1ZSIsImhhbmRsZVVuY292ZXJlZE1pbmVkQ2VsbCIsImNvdW50TWluZXNBcm91bmRDZWxsIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVJpZ2h0Q2VsbENsaWNrIiwiZmxhZyIsImRpdiIsImNsYXNzTmFtZSIsIm9uRW1vamlCdXR0b25DbGljayIsIm1hcCIsInJvdyIsImkiLCJzdHlsZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiY2VsbCIsImoiLCJvbkNlbGxDbGljayIsIm9uUmlnaHRDZWxsQ2xpY2siLCJnYW1lRW5kZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/board.jsx\n"));

/***/ })

});