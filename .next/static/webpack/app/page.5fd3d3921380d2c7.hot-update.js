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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Board; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./.yarn/__virtual__/next-virtual-7b2e7b0c22/5/AppData/Local/Yarn/Berry/cache/next-npm-14.2.4-37fb4e5b51-10c0.zip/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./.yarn/__virtual__/next-virtual-7b2e7b0c22/5/AppData/Local/Yarn/Berry/cache/next-npm-14.2.4-37fb4e5b51-10c0.zip/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/style.css */ \"(app-pages-browser)/./src/css/style.css\");\n/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cell */ \"(app-pages-browser)/./src/components/cell.jsx\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header */ \"(app-pages-browser)/./src/components/header.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nfunction Board(param) {\n    let { boardColumns, boardData } = param;\n    const boardDimensions = {\n        display: \"grid\"\n    };\n    function handleCellClick() {\n        testButtonCell();\n    }\n    function uncoverHiddenCell() {}\n    function testButtonCell() {\n        console.log(\"On cell clicked haha.\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"board\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\board.jsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                class: \"minefield\",\n                children: boardData.map((row, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: row.map((cell, index)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_cell__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                onCellClick: handleCellClick\n                            }, index, false, {\n                                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\board.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 41\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\board.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 25\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\board.jsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\board.jsx\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, this);\n}\n_c = Board;\nvar _c;\n$RefreshReg$(_c, \"Board\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2JvYXJkLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNnQztBQUVQO0FBQ0E7QUFDSTtBQUVkLFNBQVNHLE1BQU0sS0FBMkI7UUFBM0IsRUFBRUMsWUFBWSxFQUFFQyxTQUFTLEVBQUUsR0FBM0I7SUFJMUIsTUFBTUMsa0JBQWtCO1FBQ3BCQyxTQUFTO0lBQ2I7SUFFQSxTQUFTQztRQUNMQztJQUNKO0lBRUEsU0FBU0MscUJBRVQ7SUFFQSxTQUFTRDtRQUNMRSxRQUFRQyxHQUFHLENBQUM7SUFDaEI7SUFDQSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNaLCtDQUFNQTs7Ozs7MEJBRVAsOERBQUNhO2dCQUFNQyxPQUFNOzBCQUNSWCxVQUFVWSxHQUFHLENBQUMsQ0FBQ0MsS0FBS0M7b0JBQ2pCLHFCQUNJLDhEQUFDQztrQ0FFT0YsSUFBSUQsR0FBRyxDQUFDLENBQUNJLE1BQU1GOzRCQUNYLHFCQUNJLDhEQUFDbEIsNkNBQUlBO2dDQUFhcUIsYUFBYWQ7K0JBQXBCVzs7Ozs7d0JBRW5COzs7Ozs7Z0JBSWhCOzs7Ozs7Ozs7Ozs7QUFLaEI7S0F6Q3dCaEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYm9hcmQuanN4PzU4YmEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuaW1wb3J0IFwiLi4vY3NzL3N0eWxlLmNzc1wiXHJcbmltcG9ydCBDZWxsIGZyb20gXCIuL2NlbGxcIlxyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2hlYWRlclwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb2FyZCh7IGJvYXJkQ29sdW1ucywgYm9hcmREYXRhIH0pIHtcclxuXHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBib2FyZERpbWVuc2lvbnMgPSB7XHJcbiAgICAgICAgZGlzcGxheTogXCJncmlkXCJcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDZWxsQ2xpY2soKSB7XHJcbiAgICAgICAgdGVzdEJ1dHRvbkNlbGwoKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVuY292ZXJIaWRkZW5DZWxsKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0ZXN0QnV0dG9uQ2VsbCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9uIGNlbGwgY2xpY2tlZCBoYWhhLlwiKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkXCI+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuXHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cIm1pbmVmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAge2JvYXJkRGF0YS5tYXAoKHJvdywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93Lm1hcCgoY2VsbCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDZWxsIGtleT17aW5kZXh9IG9uQ2VsbENsaWNrPXtoYW5kbGVDZWxsQ2xpY2t9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJDZWxsIiwiSGVhZGVyIiwiQm9hcmQiLCJib2FyZENvbHVtbnMiLCJib2FyZERhdGEiLCJib2FyZERpbWVuc2lvbnMiLCJkaXNwbGF5IiwiaGFuZGxlQ2VsbENsaWNrIiwidGVzdEJ1dHRvbkNlbGwiLCJ1bmNvdmVySGlkZGVuQ2VsbCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJ0YWJsZSIsImNsYXNzIiwibWFwIiwicm93IiwiaW5kZXgiLCJ0ciIsImNlbGwiLCJvbkNlbGxDbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/board.jsx\n"));

/***/ })

});