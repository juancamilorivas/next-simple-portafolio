"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile */ \"./profile.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar PostCard = function(param) {\n    var post = param.post;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-md-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"overflow\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/\".concat(post.imageUrl),\n                        className: \"card-img-top\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bogot\\\\Desktop\\\\PROYECTOS\\\\next-simple-portafolio\\\\pages\\\\blog.js\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bogot\\\\Desktop\\\\PROYECTOS\\\\next-simple-portafolio\\\\pages\\\\blog.js\",\n                    lineNumber: 8,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card-body\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: post.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bogot\\\\Desktop\\\\PROYECTOS\\\\next-simple-portafolio\\\\pages\\\\blog.js\",\n                            lineNumber: 12,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: post.content\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bogot\\\\Desktop\\\\PROYECTOS\\\\next-simple-portafolio\\\\pages\\\\blog.js\",\n                            lineNumber: 13,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn btn-light\",\n                                children: \"Read\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bogot\\\\Desktop\\\\PROYECTOS\\\\next-simple-portafolio\\\\pages\\\\blog.js\",\n                                lineNumber: 15,\n                                columnNumber: 9\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bogot\\\\Desktop\\\\PROYECTOS\\\\next-simple-portafolio\\\\pages\\\\blog.js\",\n                            lineNumber: 14,\n                            columnNumber: 9\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\bogot\\\\Desktop\\\\PROYECTOS\\\\next-simple-portafolio\\\\pages\\\\blog.js\",\n                    lineNumber: 11,\n                    columnNumber: 7\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\bogot\\\\Desktop\\\\PROYECTOS\\\\next-simple-portafolio\\\\pages\\\\blog.js\",\n            lineNumber: 7,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\bogot\\\\Desktop\\\\PROYECTOS\\\\next-simple-portafolio\\\\pages\\\\blog.js\",\n        lineNumber: 6,\n        columnNumber: 3\n    }, _this);\n};\n_c = PostCard;\nvar Blog = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        footer: false,\n        title: \"My blog\",\n        dark: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: _profile__WEBPACK_IMPORTED_MODULE_2__.posts.map(function(post, i) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostCard, {\n                    post: post\n                }, i, false, {\n                    fileName: \"C:\\\\Users\\\\bogot\\\\Desktop\\\\PROYECTOS\\\\next-simple-portafolio\\\\pages\\\\blog.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\bogot\\\\Desktop\\\\PROYECTOS\\\\next-simple-portafolio\\\\pages\\\\blog.js\",\n            lineNumber: 26,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\bogot\\\\Desktop\\\\PROYECTOS\\\\next-simple-portafolio\\\\pages\\\\blog.js\",\n        lineNumber: 25,\n        columnNumber: 3\n    }, _this);\n};\n_c1 = Blog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\nvar _c, _c1;\n$RefreshReg$(_c, \"PostCard\");\n$RefreshReg$(_c1, \"Blog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBMEM7QUFDUDtBQUNQO0FBRTVCLElBQU1HLFFBQVEsR0FBRztRQUFFQyxJQUFJLFNBQUpBLElBQUk7eUJBQ3JCLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxVQUFVO2tCQUN2Qiw0RUFBQ0QsS0FBRztZQUFDQyxTQUFTLEVBQUMsTUFBTTs7OEJBQ25CLDhEQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsVUFBVTs4QkFDdkIsNEVBQUNDLEtBQUc7d0JBQUNDLEdBQUcsRUFBRSxHQUFFLENBQWdCLE9BQWRKLElBQUksQ0FBQ0ssUUFBUSxDQUFFO3dCQUFFSCxTQUFTLEVBQUMsY0FBYzs7Ozs7NkJBQUc7Ozs7O3lCQUN0RDs4QkFDTiw4REFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLFdBQVc7O3NDQUN4Qiw4REFBQ0ksSUFBRTtzQ0FBRU4sSUFBSSxDQUFDTyxLQUFLOzs7OztpQ0FBTTtzQ0FDckIsOERBQUNDLEdBQUM7c0NBQUVSLElBQUksQ0FBQ1MsT0FBTzs7Ozs7aUNBQUs7c0NBQ3JCLDhEQUFDWCxrREFBSTtzQ0FDTCw0RUFBQ1ksUUFBTTtnQ0FBQ1IsU0FBUyxFQUFDLGVBQWU7MENBQUMsTUFFbEM7Ozs7O3FDQUFTOzs7OztpQ0FDRjs7Ozs7O3lCQUNIOzs7Ozs7aUJBQ0Y7Ozs7O2FBQ0Y7Q0FDUDtBQWpCS0gsS0FBQUEsUUFBUTtBQW1CZCxJQUFNWSxJQUFJLEdBQUc7eUJBQ1gsOERBQUNmLDBEQUFNO1FBQUNnQixNQUFNLEVBQUUsS0FBSztRQUFFTCxLQUFLLEVBQUMsU0FBUztRQUFDTSxJQUFJO2tCQUN6Qyw0RUFBQ1osS0FBRztZQUFDQyxTQUFTLEVBQUMsS0FBSztzQkFDakJMLCtDQUFTLENBQUMsU0FBQ0csSUFBSSxFQUFFZSxDQUFDO3FDQUNqQiw4REFBQ2hCLFFBQVE7b0JBQUNDLElBQUksRUFBRUEsSUFBSTttQkFBT2UsQ0FBQzs7Ozt5QkFBRzthQUNoQyxDQUFDOzs7OztpQkFDRTs7Ozs7YUFDQztDQUNWO0FBUktKLE1BQUFBLElBQUk7QUFVViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Jsb2cuanM/Y2JiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgeyBwb3N0cyB9IGZyb20gXCIuLi9wcm9maWxlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IFBvc3RDYXJkID0gKHtwb3N0fSkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93XCI+XHJcbiAgICAgICAgPGltZyBzcmM9e2AvJHtwb3N0LmltYWdlVXJsfWB9IGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgIDxoMT57cG9zdC50aXRsZX08L2gxPlxyXG4gICAgICAgIDxwPntwb3N0LmNvbnRlbnR9PC9wPlxyXG4gICAgICAgIDxMaW5rPiBcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbGlnaHRcIj5cclxuICAgICAgICAgIFJlYWRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5jb25zdCBCbG9nID0gKCkgPT4gKFxyXG4gIDxMYXlvdXQgZm9vdGVyPXtmYWxzZX0gdGl0bGU9XCJNeSBibG9nXCIgZGFyaz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgIHtwb3N0cy5tYXAoKHBvc3QsIGkpID0+IChcclxuICAgICAgICA8UG9zdENhcmQgcG9zdD17cG9zdH0ga2V5PXtpfS8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgPC9MYXlvdXQ+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9nO1xyXG4iXSwibmFtZXMiOlsiTGF5b3V0IiwicG9zdHMiLCJMaW5rIiwiUG9zdENhcmQiLCJwb3N0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaW1hZ2VVcmwiLCJoMSIsInRpdGxlIiwicCIsImNvbnRlbnQiLCJidXR0b24iLCJCbG9nIiwiZm9vdGVyIiwiZGFyayIsIm1hcCIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog.js\n");

/***/ })

});