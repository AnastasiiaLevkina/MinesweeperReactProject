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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Board; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./.yarn/__virtual__/next-virtual-7b2e7b0c22/5/AppData/Local/Yarn/Berry/cache/next-npm-14.2.4-37fb4e5b51-10c0.zip/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./.yarn/__virtual__/next-virtual-7b2e7b0c22/5/AppData/Local/Yarn/Berry/cache/next-npm-14.2.4-37fb4e5b51-10c0.zip/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/style.css */ \"(app-pages-browser)/./src/css/style.css\");\n/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cell */ \"(app-pages-browser)/./src/components/cell.jsx\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header */ \"(app-pages-browser)/./src/components/header.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Board(param) {\n    let { boardData, minesNum, resetGame } = param;\n    _s();\n    const [flagsLeft, setFlagsLeft] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(minesNum);\n    function handleCellClick() {\n        testButtonCell();\n    }\n    function handleRightCellClick() {\n        setFlagsLeft((flagsLeft)=>flagsLeft - 1);\n    }\n    function testButtonCell() {\n        console.log(\"On cell clicked haha.\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"board\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                flagsLeft: flagsLeft,\n                onEmojiButtonClick: resetGame,\n                minesNum: minesNum\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\board.jsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"minefield\",\n                children: boardData.map((row, i)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            flexDirection: \"row\"\n                        },\n                        children: row.map((cell, j)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_cell__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                onCellClick: handleCellClick,\n                                value: boardData[i][j]\n                            }, j, false, {\n                                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\board.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 41\n                            }, this);\n                        })\n                    }, i, false, {\n                        fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\board.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 25\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\board.jsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\board.jsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, this);\n}\n_s(Board, \"jBK8c0+LI2qMwvL+Sc45Qk1Onio=\");\n_c = Board;\nvar _c;\n$RefreshReg$(_c, \"Board\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2JvYXJkLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDZ0M7QUFFUDtBQUNBO0FBQ0k7QUFFZCxTQUFTRyxNQUFNLEtBQWtDO1FBQWxDLEVBQUVDLFNBQVMsRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUUsR0FBbEM7O0lBQzFCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHUiwrQ0FBUUEsQ0FBQ0s7SUFFM0MsU0FBU0k7UUFDTEM7SUFDSjtJQUVBLFNBQVNDO1FBQ0xILGFBQWFELENBQUFBLFlBQWFBLFlBQVU7SUFDeEM7SUFFQSxTQUFTRztRQUNMRSxRQUFRQyxHQUFHLENBQUM7SUFDaEI7SUFFQSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNiLCtDQUFNQTtnQkFDUEssV0FBV0E7Z0JBQ1hTLG9CQUNJVjtnQkFFQUQsVUFBVUE7Ozs7OzswQkFFZCw4REFBQ1M7Z0JBQUlDLFdBQVU7MEJBQ1ZYLFVBQVVhLEdBQUcsQ0FBQyxDQUFDQyxLQUFLQztvQkFDakIscUJBQ0ksOERBQUNMO3dCQUFZTSxPQUFPOzRCQUFFQyxTQUFTOzRCQUFRQyxlQUFlO3dCQUFNO2tDQUVwREosSUFBSUQsR0FBRyxDQUFDLENBQUNNLE1BQU1DOzRCQUNYLHFCQUNJLDhEQUFDdkIsNkNBQUlBO2dDQUFTd0IsYUFBYWhCO2dDQUFpQmlCLE9BQU90QixTQUFTLENBQUNlLEVBQUUsQ0FBQ0ssRUFBRTsrQkFBdkRBOzs7Ozt3QkFFbkI7dUJBTkVMOzs7OztnQkFVbEI7Ozs7Ozs7Ozs7OztBQUtoQjtHQTFDd0JoQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9ib2FyZC5qc3g/NThiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5pbXBvcnQgXCIuLi9jc3Mvc3R5bGUuY3NzXCJcclxuaW1wb3J0IENlbGwgZnJvbSBcIi4vY2VsbFwiXHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vaGVhZGVyXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvYXJkKHsgYm9hcmREYXRhLCBtaW5lc051bSwgcmVzZXRHYW1lIH0pIHtcclxuICAgIGNvbnN0IFtmbGFnc0xlZnQsIHNldEZsYWdzTGVmdF0gPSB1c2VTdGF0ZShtaW5lc051bSlcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDZWxsQ2xpY2soKSB7XHJcbiAgICAgICAgdGVzdEJ1dHRvbkNlbGwoKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVSaWdodENlbGxDbGljaygpIHtcclxuICAgICAgICBzZXRGbGFnc0xlZnQoZmxhZ3NMZWZ0ID0+IGZsYWdzTGVmdC0xKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRlc3RCdXR0b25DZWxsKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT24gY2VsbCBjbGlja2VkIGhhaGEuXCIpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkXCI+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgXHJcbiAgICAgICAgICAgIGZsYWdzTGVmdD17ZmxhZ3NMZWZ0fVxyXG4gICAgICAgICAgICBvbkVtb2ppQnV0dG9uQ2xpY2s9e1xyXG4gICAgICAgICAgICAgICAgcmVzZXRHYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG1pbmVzTnVtPXttaW5lc051bX0gLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluZWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICB7Ym9hcmREYXRhLm1hcCgocm93LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5tYXAoKGNlbGwsIGopID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDZWxsIGtleT17an0gb25DZWxsQ2xpY2s9e2hhbmRsZUNlbGxDbGlja30gdmFsdWU9e2JvYXJkRGF0YVtpXVtqXX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQ2VsbCIsIkhlYWRlciIsIkJvYXJkIiwiYm9hcmREYXRhIiwibWluZXNOdW0iLCJyZXNldEdhbWUiLCJmbGFnc0xlZnQiLCJzZXRGbGFnc0xlZnQiLCJoYW5kbGVDZWxsQ2xpY2siLCJ0ZXN0QnV0dG9uQ2VsbCIsImhhbmRsZVJpZ2h0Q2VsbENsaWNrIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsIm9uRW1vamlCdXR0b25DbGljayIsIm1hcCIsInJvdyIsImkiLCJzdHlsZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiY2VsbCIsImoiLCJvbkNlbGxDbGljayIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/board.jsx\n"));

/***/ })

});