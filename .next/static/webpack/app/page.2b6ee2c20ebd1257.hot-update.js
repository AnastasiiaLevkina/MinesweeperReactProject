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

/***/ "(app-pages-browser)/./src/components/header.jsx":
/*!***********************************!*\
  !*** ./src/components/header.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./.yarn/__virtual__/next-virtual-7b2e7b0c22/5/AppData/Local/Yarn/Berry/cache/next-npm-14.2.4-37fb4e5b51-10c0.zip/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./.yarn/__virtual__/next-virtual-7b2e7b0c22/5/AppData/Local/Yarn/Berry/cache/next-npm-14.2.4-37fb4e5b51-10c0.zip/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/style.css */ \"(app-pages-browser)/./src/css/style.css\");\n/* harmony import */ var _numberdisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./numberdisplay */ \"(app-pages-browser)/./src/components/numberdisplay.jsx\");\n/* harmony import */ var _emojibutton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./emojibutton */ \"(app-pages-browser)/./src/components/emojibutton.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Header(param) {\n    let { onEmojiButtonClick, flagsLeft } = param;\n    _s();\n    const [secondsPassed, setSecondsPassed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [onPause, setOnPause] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const getTime = ()=>{\n        const time = Date.parse();\n    };\n    function handleEmojiButtonClicked() {\n        console.log(\"EMOJI BUTTON PRESSED\");\n        setSecondsPassed(0);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"board-header\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_numberdisplay__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                value: flagsLeft ? flagsLeft : 0\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\header.jsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_emojibutton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onButtonClick: onEmojiButtonClick\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\header.jsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_numberdisplay__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                value: secondsPassed\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\header.jsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\levki\\\\Desktop\\\\Travelport\\\\code\\\\Minesweeper\\\\src\\\\components\\\\header.jsx\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, this);\n}\n_s(Header, \"2FwWsdHDj5/x9U1Tz60L2y5BPuE=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2hlYWRlci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ2dDO0FBQ1A7QUFDa0I7QUFDSjtBQUV4QixTQUFTRyxPQUFPLEtBQWlDO1FBQWpDLEVBQUVDLGtCQUFrQixFQUFFQyxTQUFTLEVBQUUsR0FBakM7O0lBQzNCLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ25ELE1BQU0sQ0FBQ1EsU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNVSxVQUFVO1FBQ1osTUFBTUMsT0FBT0MsS0FBS0MsS0FBSztJQUMzQjtJQUVBLFNBQVNDO1FBQ0xDLFFBQVFDLEdBQUcsQ0FBQztRQUNaVCxpQkFBaUI7SUFDckI7SUFFQSxxQkFDSSw4REFBQ1U7UUFBSUMsV0FBVTs7MEJBRVgsOERBQUNqQixzREFBYUE7Z0JBQUNrQixPQUFPZCxZQUFZQSxZQUFZOzs7Ozs7MEJBQzlDLDhEQUFDSCxvREFBV0E7Z0JBQUNrQixlQUFlaEI7Ozs7OzswQkFDNUIsOERBQUNILHNEQUFhQTtnQkFBQ2tCLE9BQU9iOzs7Ozs7Ozs7Ozs7QUFHbEM7R0FyQndCSDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuanN4PzFmZTciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgXCIuLi9jc3Mvc3R5bGUuY3NzXCJcclxuaW1wb3J0IE51bWJlckRpc3BsYXkgZnJvbSBcIi4vbnVtYmVyZGlzcGxheVwiXHJcbmltcG9ydCBFbW9qaUJ1dHRvbiBmcm9tIFwiLi9lbW9qaWJ1dHRvblwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoeyBvbkVtb2ppQnV0dG9uQ2xpY2ssIGZsYWdzTGVmdCB9KSB7XHJcbiAgICBjb25zdCBbc2Vjb25kc1Bhc3NlZCwgc2V0U2Vjb25kc1Bhc3NlZF0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW29uUGF1c2UsIHNldE9uUGF1c2VdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3QgZ2V0VGltZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB0aW1lID0gRGF0ZS5wYXJzZSgpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRW1vamlCdXR0b25DbGlja2VkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRU1PSkkgQlVUVE9OIFBSRVNTRURcIilcclxuICAgICAgICBzZXRTZWNvbmRzUGFzc2VkKDApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkLWhlYWRlclwiPlxyXG5cclxuICAgICAgICAgICAgPE51bWJlckRpc3BsYXkgdmFsdWU9e2ZsYWdzTGVmdCA/IGZsYWdzTGVmdCA6IDB9IC8+XHJcbiAgICAgICAgICAgIDxFbW9qaUJ1dHRvbiBvbkJ1dHRvbkNsaWNrPXtvbkVtb2ppQnV0dG9uQ2xpY2t9IC8+XHJcbiAgICAgICAgICAgIDxOdW1iZXJEaXNwbGF5IHZhbHVlPXtzZWNvbmRzUGFzc2VkfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTnVtYmVyRGlzcGxheSIsIkVtb2ppQnV0dG9uIiwiSGVhZGVyIiwib25FbW9qaUJ1dHRvbkNsaWNrIiwiZmxhZ3NMZWZ0Iiwic2Vjb25kc1Bhc3NlZCIsInNldFNlY29uZHNQYXNzZWQiLCJvblBhdXNlIiwic2V0T25QYXVzZSIsImdldFRpbWUiLCJ0aW1lIiwiRGF0ZSIsInBhcnNlIiwiaGFuZGxlRW1vamlCdXR0b25DbGlja2VkIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInZhbHVlIiwib25CdXR0b25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/header.jsx\n"));

/***/ })

});