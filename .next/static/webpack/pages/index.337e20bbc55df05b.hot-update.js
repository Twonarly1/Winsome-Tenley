"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ThemeSwitcher/index.tsx":
/*!********************************************!*\
  !*** ./components/ThemeSwitcher/index.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ThemeSwitcher\": function() { return /* binding */ ThemeSwitcher; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.modern.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar ThemeSwitcher = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), mounted = ref[0], setMounted = ref[1];\n    var ref1 = (0,next_themes__WEBPACK_IMPORTED_MODULE_1__.useTheme)(), theme = ref1.theme, setTheme = ref1.setTheme;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        return setMounted(true);\n    }, []);\n    if (!mounted) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        \"aria-label\": \"Toggle Dark Mode\",\n        type: \"button\",\n        className: \" h-9 items-center\",\n        onClick: function() {\n            return setTheme(theme === \"dark\" ? \"light\" : \"dark\");\n        },\n        children: theme === \"dark\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n            xmlns: \"http://www.w3.org/2000/svg\",\n            \"aria-hidden\": \"true\",\n            role: \"img\",\n            width: \"1.5em\",\n            height: \"1.5em\",\n            preserveAspectRatio: \"xMidYMid meet\",\n            viewBox: \"0 0 24 24\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                fill: \"currentColor\",\n                d: \"M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993S6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007S8.993 13.658 8.993 12S10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122l1.415 1.414l-2.12 2.122zM16.24 6.344l2.122-2.122l1.414 1.414l-2.122 2.122zM6.342 7.759L4.22 5.637l1.415-1.414l2.12 2.122zm13.434 10.605l-1.414 1.414l-2.122-2.122l1.414-1.414z\"\n            }, void 0, false, {\n                fileName: \"/Users/hawk/papa-react/Winsome-Tenley/components/ThemeSwitcher/index.tsx\",\n                lineNumber: 29,\n                columnNumber: 11\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/hawk/papa-react/Winsome-Tenley/components/ThemeSwitcher/index.tsx\",\n            lineNumber: 20,\n            columnNumber: 9\n        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n            xmlns: \"http://www.w3.org/2000/svg\",\n            \"aria-hidden\": \"true\",\n            role: \"img\",\n            width: \"1.5em\",\n            height: \"1.5em\",\n            preserveAspectRatio: \"xMidYMid meet\",\n            viewBox: \"0 0 16 16\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                fill: \"none\",\n                stroke: \"currentColor\",\n                strokeLinecap: \"round\",\n                strokeLinejoin: \"round\",\n                strokeWidth: \"1.5\",\n                d: \"M1.75 8c0 3.45 2.8 6.25 6.25 6.25c3.41-.003 6.25-3 6.25-6c-1 .5-4 1.5-6-.5s-1-5-.5-6c-3 0-6 2.84-6 6.25z\"\n            }, void 0, false, {\n                fileName: \"/Users/hawk/papa-react/Winsome-Tenley/components/ThemeSwitcher/index.tsx\",\n                lineNumber: 44,\n                columnNumber: 11\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/hawk/papa-react/Winsome-Tenley/components/ThemeSwitcher/index.tsx\",\n            lineNumber: 35,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/hawk/papa-react/Winsome-Tenley/components/ThemeSwitcher/index.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, _this);\n};\n_s(ThemeSwitcher, \"uNC5hNpPhoX77Cz14X5Emb+eflA=\", false, function() {\n    return [\n        next_themes__WEBPACK_IMPORTED_MODULE_1__.useTheme\n    ];\n});\n_c = ThemeSwitcher;\nvar _c;\n$RefreshReg$(_c, \"ThemeSwitcher\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RoZW1lU3dpdGNoZXIvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUFzQztBQUNLOztBQUVwQyxJQUFNRyxhQUFhLEdBQUcsV0FBTTs7SUFDakMsSUFBOEJELEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFKL0MsT0FJZ0IsR0FBZ0JBLEdBQWUsR0FBL0IsRUFKaEIsVUFJNEIsR0FBSUEsR0FBZSxHQUFuQjtJQUMxQixJQUE0QkYsSUFBVSxHQUFWQSxxREFBUSxFQUFFLEVBQTlCTSxLQUFLLEdBQWVOLElBQVUsQ0FBOUJNLEtBQUssRUFBRUMsUUFBUSxHQUFLUCxJQUFVLENBQXZCTyxRQUFRO0lBRXZCTixnREFBUyxDQUFDO2VBQU1JLFVBQVUsQ0FBQyxJQUFJLENBQUM7S0FBQSxFQUFFLEVBQUUsQ0FBQztJQUVyQyxJQUFJLENBQUNELE9BQU8sRUFBRSxPQUFPLElBQUk7SUFFekIscUJBQ0UsOERBQUNJLFFBQU07UUFDTEMsWUFBVSxFQUFDLGtCQUFrQjtRQUM3QkMsSUFBSSxFQUFDLFFBQVE7UUFDYkMsU0FBUyxFQUFDLG1CQUFtQjtRQUM3QkMsT0FBTyxFQUFFO21CQUFNTCxRQUFRLENBQUNELEtBQUssS0FBSyxNQUFNLEdBQUcsT0FBTyxHQUFHLE1BQU0sQ0FBQztTQUFBO2tCQUUzREEsS0FBSyxLQUFLLE1BQU0saUJBQ2YsOERBQUNPLEtBQUc7WUFDRkMsS0FBSyxFQUFDLDRCQUE0QjtZQUNsQ0MsYUFBVyxFQUFDLE1BQU07WUFDbEJDLElBQUksRUFBQyxLQUFLO1lBQ1ZDLEtBQUssRUFBQyxPQUFPO1lBQ2JDLE1BQU0sRUFBQyxPQUFPO1lBQ2RDLG1CQUFtQixFQUFDLGVBQWU7WUFDbkNDLE9BQU8sRUFBQyxXQUFXO3NCQUVuQiw0RUFBQ0MsTUFBSTtnQkFDSEMsSUFBSSxFQUFDLGNBQWM7Z0JBQ25CQyxDQUFDLEVBQUMsNmRBQTZkOzs7OztxQkFDL2Q7Ozs7O2lCQUNFLGlCQUVOLDhEQUFDVixLQUFHO1lBQ0ZDLEtBQUssRUFBQyw0QkFBNEI7WUFDbENDLGFBQVcsRUFBQyxNQUFNO1lBQ2xCQyxJQUFJLEVBQUMsS0FBSztZQUNWQyxLQUFLLEVBQUMsT0FBTztZQUNiQyxNQUFNLEVBQUMsT0FBTztZQUNkQyxtQkFBbUIsRUFBQyxlQUFlO1lBQ25DQyxPQUFPLEVBQUMsV0FBVztzQkFFbkIsNEVBQUNDLE1BQUk7Z0JBQ0hDLElBQUksRUFBQyxNQUFNO2dCQUNYRSxNQUFNLEVBQUMsY0FBYztnQkFDckJDLGFBQWEsRUFBQyxPQUFPO2dCQUNyQkMsY0FBYyxFQUFDLE9BQU87Z0JBQ3RCQyxXQUFXLEVBQUMsS0FBSztnQkFDakJKLENBQUMsRUFBQywwR0FBMEc7Ozs7O3FCQUM1Rzs7Ozs7aUJBQ0U7Ozs7O2FBRUQsQ0FDVjtDQUNGO0dBcERZcEIsYUFBYTs7UUFFSUgsaURBQVE7OztBQUZ6QkcsS0FBQUEsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RoZW1lU3dpdGNoZXIvaW5kZXgudHN4PzVmOGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICduZXh0LXRoZW1lcydcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGNvbnN0IFRoZW1lU3dpdGNoZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFttb3VudGVkLCBzZXRNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCB7IHRoZW1lLCBzZXRUaGVtZSB9ID0gdXNlVGhlbWUoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiBzZXRNb3VudGVkKHRydWUpLCBbXSlcblxuICBpZiAoIW1vdW50ZWQpIHJldHVybiBudWxsXG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIERhcmsgTW9kZVwiXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIGNsYXNzTmFtZT1cIiBoLTkgaXRlbXMtY2VudGVyXCJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRoZW1lKHRoZW1lID09PSAnZGFyaycgPyAnbGlnaHQnIDogJ2RhcmsnKX1cbiAgICA+XG4gICAgICB7dGhlbWUgPT09ICdkYXJrJyA/IChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgcm9sZT1cImltZ1wiXG4gICAgICAgICAgd2lkdGg9XCIxLjVlbVwiXG4gICAgICAgICAgaGVpZ2h0PVwiMS41ZW1cIlxuICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIGQ9XCJNNi45OTMgMTJjMCAyLjc2MSAyLjI0NiA1LjAwNyA1LjAwNyA1LjAwN3M1LjAwNy0yLjI0NiA1LjAwNy01LjAwN1MxNC43NjEgNi45OTMgMTIgNi45OTNTNi45OTMgOS4yMzkgNi45OTMgMTJ6TTEyIDguOTkzYzEuNjU4IDAgMy4wMDcgMS4zNDkgMy4wMDcgMy4wMDdTMTMuNjU4IDE1LjAwNyAxMiAxNS4wMDdTOC45OTMgMTMuNjU4IDguOTkzIDEyUzEwLjM0MiA4Ljk5MyAxMiA4Ljk5M3pNMTAuOTk4IDE5aDJ2M2gtMnptMC0xN2gydjNoLTJ6bS05IDloM3YyaC0zem0xNyAwaDN2MmgtM3pNNC4yMTkgMTguMzYzbDIuMTItMi4xMjJsMS40MTUgMS40MTRsLTIuMTIgMi4xMjJ6TTE2LjI0IDYuMzQ0bDIuMTIyLTIuMTIybDEuNDE0IDEuNDE0bC0yLjEyMiAyLjEyMnpNNi4zNDIgNy43NTlMNC4yMiA1LjYzN2wxLjQxNS0xLjQxNGwyLjEyIDIuMTIyem0xMy40MzQgMTAuNjA1bC0xLjQxNCAxLjQxNGwtMi4xMjItMi4xMjJsMS40MTQtMS40MTR6XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgICAgIHdpZHRoPVwiMS41ZW1cIlxuICAgICAgICAgIGhlaWdodD1cIjEuNWVtXCJcbiAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgICAgIGQ9XCJNMS43NSA4YzAgMy40NSAyLjggNi4yNSA2LjI1IDYuMjVjMy40MS0uMDAzIDYuMjUtMyA2LjI1LTZjLTEgLjUtNCAxLjUtNi0uNXMtMS01LS41LTZjLTMgMC02IDIuODQtNiA2LjI1elwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICApfVxuICAgIDwvYnV0dG9uPlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlVGhlbWUiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRoZW1lU3dpdGNoZXIiLCJtb3VudGVkIiwic2V0TW91bnRlZCIsInRoZW1lIiwic2V0VGhlbWUiLCJidXR0b24iLCJhcmlhLWxhYmVsIiwidHlwZSIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJzdmciLCJ4bWxucyIsImFyaWEtaGlkZGVuIiwicm9sZSIsIndpZHRoIiwiaGVpZ2h0IiwicHJlc2VydmVBc3BlY3RSYXRpbyIsInZpZXdCb3giLCJwYXRoIiwiZmlsbCIsImQiLCJzdHJva2UiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJzdHJva2VXaWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ThemeSwitcher/index.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Carousel_Carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Carousel/Carousel */ \"./components/Carousel/Carousel.tsx\");\n/* harmony import */ var _components_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ThemeSwitcher */ \"./components/ThemeSwitcher/index.tsx\");\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sanity */ \"./sanity.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function(param) {\n    var collections = param.collections;\n    var _this1 = _this;\n    _s();\n    var asPath = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)().asPath;\n    // You can switch out this provider with any wallet or provider setup you like.\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-auto flex min-h-screen max-w-7xl flex-col bg-[#dddddd] py-20 px-10 text-black dark:bg-[#272727] dark:text-white 2xl:px-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Winsome Tenley\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hawk/papa-react/Winsome-Tenley/pages/index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/two.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hawk/papa-react/Winsome-Tenley/pages/index.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hawk/papa-react/Winsome-Tenley/pages/index.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Carousel_Carousel__WEBPACK_IMPORTED_MODULE_4__.Carousel, {}, void 0, false, {\n                fileName: \"/Users/hawk/papa-react/Winsome-Tenley/pages/index.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" \",\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_5__.ThemeSwitcher, {}, void 0, false, {\n                        fileName: \"/Users/hawk/papa-react/Winsome-Tenley/pages/index.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hawk/papa-react/Winsome-Tenley/pages/index.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center text-lg font-bold\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mx-auto mt-20 items-center text-6xl lg:text-6xl\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-2xl text-red-900\",\n                            children: \"Choose a collection to mint from.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hawk/papa-react/Winsome-Tenley/pages/index.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-grow border-t border-gray-400 p-1\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hawk/papa-react/Winsome-Tenley/pages/index.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, _this),\n                        \"THE WINSOME TENLEY\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/hawk/papa-react/Winsome-Tenley/pages/index.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/hawk/papa-react/Winsome-Tenley/pages/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"mt-20 bg-slate-100 p-10 shadow-xl shadow-red-900\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid space-x-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4\",\n                    children: collections.map(function(collection, i) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/nft/\".concat(collection.slug.current),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-4 flex cursor-pointer flex-col items-center transition-all duration-200 hover:scale-105\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        className: \"h-40 w-80 rounded-2xl object-cover md:h-96 md:w-60\",\n                                        src: (0,_sanity__WEBPACK_IMPORTED_MODULE_6__.urlFor)(collection.mainImage).url(),\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hawk/papa-react/Winsome-Tenley/pages/index.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 17\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: \"mt-4 text-center text-3xl\",\n                                                children: collection.title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hawk/papa-react/Winsome-Tenley/pages/index.tsx\",\n                                                lineNumber: 56,\n                                                columnNumber: 19\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"items-center text-center text-sm text-red-900\",\n                                                children: collection.description\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hawk/papa-react/Winsome-Tenley/pages/index.tsx\",\n                                                lineNumber: 59,\n                                                columnNumber: 19\n                                            }, _this1)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/hawk/papa-react/Winsome-Tenley/pages/index.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 17\n                                    }, _this1)\n                                ]\n                            }, i, true, {\n                                fileName: \"/Users/hawk/papa-react/Winsome-Tenley/pages/index.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 15\n                            }, _this1)\n                        }, i, false, {\n                            fileName: \"/Users/hawk/papa-react/Winsome-Tenley/pages/index.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/hawk/papa-react/Winsome-Tenley/pages/index.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/hawk/papa-react/Winsome-Tenley/pages/index.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hawk/papa-react/Winsome-Tenley/pages/index.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"9pMG9Ra3x5O/yaZiUz6XxVJ+Rds=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Home;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0FBQzRCO0FBQ0E7QUFDVztBQUNtQjtBQUNDO0FBQ1g7O0FBUWhELElBQU1NLElBQUksR0FBRyxnQkFBNEI7UUFBekJDLFdBQVcsU0FBWEEsV0FBVzs7O0lBQ3pCLElBQU0sTUFBUSxHQUFLTCxzREFBUyxFQUFFLENBQXRCTSxNQUFNO0lBRWQsK0VBQStFO0lBRS9FLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyw2SEFBNkg7OzBCQUMxSSw4REFBQ1Ysa0RBQUk7O2tDQUNILDhEQUFDVyxPQUFLO2tDQUFDLGdCQUFjOzs7Ozs2QkFBUTtrQ0FDN0IsOERBQUNDLE1BQUk7d0JBQUNDLEdBQUcsRUFBQyxNQUFNO3dCQUFDQyxJQUFJLEVBQUMsVUFBVTs7Ozs7NkJBQUc7Ozs7OztxQkFDOUI7WUFBQyxHQUFHOzBCQUNYLDhEQUFDWCxtRUFBUTs7OztxQkFBRzswQkFDWiw4REFBQ00sS0FBRztnQkFBQ0MsU0FBUyxFQUFDLEdBQUc7O29CQUNmLEdBQUc7a0NBQ0osOERBQUNOLG9FQUFhOzs7OzZCQUFHOzs7Ozs7cUJBQ2I7WUFBQyxHQUFHOzBCQUNWLDhEQUFDSyxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsK0JBQStCOzBCQUM1Qyw0RUFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLGlEQUFpRDs7c0NBQzlELDhEQUFDSyxNQUFJOzRCQUFDTCxTQUFTLEVBQUMsdUJBQXVCO3NDQUFDLG1DQUV4Qzs7Ozs7aUNBQU87c0NBQ1AsOERBQUNELEtBQUc7NEJBQUNDLFNBQVMsRUFBQyx3Q0FBd0M7Ozs7O2lDQUFPO3dCQUFBLG9CQUVoRTs7Ozs7O3lCQUFNOzs7OztxQkFDRjswQkFDTiw4REFBQ00sTUFBSTtnQkFBQ04sU0FBUyxFQUFDLGtEQUFrRDswQkFDaEUsNEVBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQyw4REFBOEQ7OEJBQzFFSCxXQUFXLENBQUNVLEdBQUcsQ0FBQyxTQUFDQyxVQUFVLEVBQUVDLENBQUM7NkNBQzdCLDhEQUFDbEIsa0RBQUk7NEJBQVNhLElBQUksRUFBRSxPQUFNLENBQTBCLE9BQXhCSSxVQUFVLENBQUNFLElBQUksQ0FBQ0MsT0FBTyxDQUFFO3NDQUNuRCw0RUFBQ1osS0FBRztnQ0FFRkMsU0FBUyxFQUFDLDRGQUE2Rjs7a0RBRXZHLDhEQUFDWSxLQUFHO3dDQUNGWixTQUFTLEVBQUMsb0RBQW9EO3dDQUM5RGEsR0FBRyxFQUFFbEIsK0NBQU0sQ0FBQ2EsVUFBVSxDQUFDTSxTQUFTLENBQUMsQ0FBQ0MsR0FBRyxFQUFFO3dDQUN2Q0MsR0FBRyxFQUFDLEVBQUU7Ozs7OzhDQUNOO2tEQUNGLDhEQUFDakIsS0FBRzs7MERBQ0YsOERBQUNrQixJQUFFO2dEQUFDakIsU0FBUyxFQUFDLDJCQUEyQjswREFDdENRLFVBQVUsQ0FBQ1AsS0FBSzs7Ozs7c0RBQ2Q7MERBQ0wsOERBQUNpQixHQUFDO2dEQUFDbEIsU0FBUyxFQUFDLCtDQUErQzswREFDekRRLFVBQVUsQ0FBQ1csV0FBVzs7Ozs7c0RBQ3JCOzs7Ozs7OENBQ0E7OytCQWZEVixDQUFDOzs7O3NDQWdCRjsyQkFsQkdBLENBQUM7Ozs7a0NBbUJMO3FCQUNSLENBQUM7Ozs7O3lCQUNFOzs7OztxQkFDRDs7Ozs7O2FBQ0gsQ0FDUDtDQUNGO0dBckRLYixJQUFJOztRQUNXSixrREFBUzs7O0FBRHhCSSxLQUFBQSxJQUFJOztBQXVEViwrREFBZUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAbmV4dC9uZXh0L25vLWltZy1lbGVtZW50ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAbmV4dC9uZXh0L2xpbmstcGFzc2hyZWYgKi9cbmltcG9ydCB0eXBlIHsgR2V0U2VydmVyU2lkZVByb3BzLCBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSAnLi4vY29tcG9uZW50cy9DYXJvdXNlbC9DYXJvdXNlbCdcbmltcG9ydCB7IFRoZW1lU3dpdGNoZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL1RoZW1lU3dpdGNoZXInXG5pbXBvcnQgeyBzYW5pdHlDbGllbnQsIHVybEZvciB9IGZyb20gJy4uL3Nhbml0eSdcbmltcG9ydCB7IENvbGxlY3Rpb24sIHVuY2xhaW1lZE5GVHMgfSBmcm9tICcuLi90eXBpbmdzJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjb2xsZWN0aW9uczogQ29sbGVjdGlvbltdXG4gIHVuY2xhaW1lZE5GVHM6IHVuY2xhaW1lZE5GVHNbXVxufVxuXG5jb25zdCBIb21lID0gKHsgY29sbGVjdGlvbnMgfTogUHJvcHMpID0+IHtcbiAgY29uc3QgeyBhc1BhdGggfSA9IHVzZVJvdXRlcigpXG5cbiAgLy8gWW91IGNhbiBzd2l0Y2ggb3V0IHRoaXMgcHJvdmlkZXIgd2l0aCBhbnkgd2FsbGV0IG9yIHByb3ZpZGVyIHNldHVwIHlvdSBsaWtlLlxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIGZsZXggbWluLWgtc2NyZWVuIG1heC13LTd4bCBmbGV4LWNvbCBiZy1bI2RkZGRkZF0gcHktMjAgcHgtMTAgdGV4dC1ibGFjayBkYXJrOmJnLVsjMjcyNzI3XSBkYXJrOnRleHQtd2hpdGUgMnhsOnB4LTBcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+V2luc29tZSBUZW5sZXk8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi90d28ucG5nXCIgLz5cbiAgICAgIDwvSGVhZD57JyAnfVxuICAgICAgPENhcm91c2VsIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBcIj5cbiAgICAgICAgeycgJ31cbiAgICAgICAgPFRoZW1lU3dpdGNoZXIgLz5cbiAgICAgIDwvZGl2PnsnICd9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtbGcgZm9udC1ib2xkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtdC0yMCBpdGVtcy1jZW50ZXIgdGV4dC02eGwgbGc6dGV4dC02eGxcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LXJlZC05MDBcIj5cbiAgICAgICAgICAgIENob29zZSBhIGNvbGxlY3Rpb24gdG8gbWludCBmcm9tLlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBib3JkZXItdCBib3JkZXItZ3JheS00MDAgcC0xXCI+PC9kaXY+XG4gICAgICAgICAgVEhFIFdJTlNPTUUgVEVOTEVZXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJtdC0yMCBiZy1zbGF0ZS0xMDAgcC0xMCBzaGFkb3cteGwgc2hhZG93LXJlZC05MDBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIHNwYWNlLXgtMyBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyAyeGw6Z3JpZC1jb2xzLTRcIj5cbiAgICAgICAgICB7Y29sbGVjdGlvbnMubWFwKChjb2xsZWN0aW9uLCBpKSA9PiAoXG4gICAgICAgICAgICA8TGluayBrZXk9e2l9IGhyZWY9e2AvbmZ0LyR7Y29sbGVjdGlvbi5zbHVnLmN1cnJlbnR9YH0+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNCBmbGV4IGN1cnNvci1wb2ludGVyIGZsZXgtY29sIGl0ZW1zLWNlbnRlciAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwIGhvdmVyOnNjYWxlLTEwNVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTQwIHctODAgcm91bmRlZC0yeGwgb2JqZWN0LWNvdmVyIG1kOmgtOTYgbWQ6dy02MFwiXG4gICAgICAgICAgICAgICAgICBzcmM9e3VybEZvcihjb2xsZWN0aW9uLm1haW5JbWFnZSkudXJsKCl9XG4gICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtdC00IHRleHQtY2VudGVyIHRleHQtM3hsXCI+XG4gICAgICAgICAgICAgICAgICAgIHtjb2xsZWN0aW9uLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtcmVkLTkwMFwiPlxuICAgICAgICAgICAgICAgICAgICB7Y29sbGVjdGlvbi5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBxdWVyeSA9IGAqW190eXBlID09IFwiY29sbGVjdGlvblwiXXtcbiAgICAgIF9pZCxcbiAgICAgIHRpdGxlLFxuICAgICAgYWRkcmVzcyxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgbmZ0Q29sbGVjdGlvbk5hbWUsXG4gICAgICBtYWluSW1hZ2Uge1xuICAgICAgICBhc3NldFxuICAgICAgfSxcbiAgICAgIHByZXZpZXdJbWFnZSB7XG4gICAgICAgIGFzc2V0XG4gICAgICB9LFxuICAgICAgc2x1ZyB7XG4gICAgICAgIGN1cnJlbnRcbiAgICAgIH0sXG4gICAgICBjcmVhdG9yLT4ge1xuICAgICAgICBfaWQsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIGFkZHJlc3MsXG4gICAgICAgIHNsdWcge1xuICAgICAgICAgIGN1cnJlbnRcbiAgICAgIH0sXG4gICAgfSxcbiAgfWBcblxuICBjb25zdCBjb2xsZWN0aW9ucyA9IGF3YWl0IHNhbml0eUNsaWVudC5mZXRjaChxdWVyeSlcbiAgY29uc29sZS5sb2coY29sbGVjdGlvbnMpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgY29sbGVjdGlvbnMsXG4gICAgfSxcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJMaW5rIiwidXNlUm91dGVyIiwiQ2Fyb3VzZWwiLCJUaGVtZVN3aXRjaGVyIiwidXJsRm9yIiwiSG9tZSIsImNvbGxlY3Rpb25zIiwiYXNQYXRoIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsInNwYW4iLCJtYWluIiwibWFwIiwiY29sbGVjdGlvbiIsImkiLCJzbHVnIiwiY3VycmVudCIsImltZyIsInNyYyIsIm1haW5JbWFnZSIsInVybCIsImFsdCIsImgyIiwicCIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});