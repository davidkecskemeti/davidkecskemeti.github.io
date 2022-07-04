"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/components/NavBar/NavBar.tsx":
/*!********************************************!*\
  !*** ./pages/components/NavBar/NavBar.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scrollspy */ "./node_modules/react-scrollspy/lib/scrollspy.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\davidk\\projects\\davidkecskemeti.github.io\\pages\\components\\NavBar\\NavBar.tsx",
    _s = $RefreshSig$();







const NavBar = () => {
  _s();

  const {
    0: menuShowing,
    1: setMenuShowing
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const showMenu = () => setMenuShowing(prev => !prev);

  const navOption = name => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
    className: "nav-item",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
      className: "nav-link",
      href: `#${name}`,
      onClick: () => showMenu,
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("nav", {
    className: "navbar navbar-expand-lg navbar-dark bg-primary fixed-top show",
    id: "sideNav",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
      className: "navbar-brand ",
      href: "#page-top",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
        className: "d-block d-lg-none",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
          src: "/profile.svg",
          alt: "Profile",
          width: 82,
          height: 20
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, undefined), "David Kecskemeti"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
        className: "d-none d-lg-block",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
          className: "img-fluid img-profile rounded-circle mx-auto mb-2",
          src: "/profile.png",
          alt: "Profile",
          width: "200",
          height: "150"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
      onClick: () => showMenu(),
      className: "navbar-toggler",
      type: "button",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
        className: "navbar-toggler-icon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: `collapse navbar-collapse ${menuShowing ? "show" : ""}`,
      id: "navbarSupportedContent",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_scrollspy__WEBPACK_IMPORTED_MODULE_2__.default, {
        className: "navbar-nav ",
        items: ["about", "experience"],
        currentClassName: "active",
        children: [navOption("about"), navOption("experience"), navOption("skills"), navOption("education")]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined);
};

_s(NavBar, "xdFoC3k7AYImzsXjOrwfoKwR9L4=");

_c = NavBar;
/* harmony default export */ __webpack_exports__["default"] = (NavBar);

var _c;

$RefreshReg$(_c, "NavBar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTVjYjZmODczNDQxNGJjMDBlM2YuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBSUEsTUFBTUksTUFBNkIsR0FBRyxNQUFNO0FBQUE7O0FBQzFDLFFBQU07QUFBQSxPQUFDQyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ0wsK0NBQVEsQ0FBVSxLQUFWLENBQTlDOztBQUVBLFFBQU1NLFFBQVEsR0FBRyxNQUFNRCxjQUFjLENBQUVFLElBQUQsSUFBVSxDQUFDQSxJQUFaLENBQXJDOztBQUVBLFFBQU1DLFNBQVMsR0FBSUMsSUFBRCxpQkFDaEI7QUFBSSxhQUFTLEVBQUMsVUFBZDtBQUFBLDJCQUNFO0FBQUcsZUFBUyxFQUFDLFVBQWI7QUFBd0IsVUFBSSxFQUFHLElBQUdBLElBQUssRUFBdkM7QUFBMEMsYUFBTyxFQUFFLE1BQU1ILFFBQXpEO0FBQUEsZ0JBQ0dHO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjs7QUFRQSxzQkFDRTtBQUNFLGFBQVMsRUFBQywrREFEWjtBQUVFLE1BQUUsRUFBQyxTQUZMO0FBQUEsNEJBSUU7QUFBRyxlQUFTLEVBQUMsZUFBYjtBQUE2QixVQUFJLEVBQUMsV0FBbEM7QUFBQSw4QkFDRTtBQUFNLGlCQUFTLEVBQUMsbUJBQWhCO0FBQUEsZ0NBQ0UsOERBQUMsbURBQUQ7QUFBTyxhQUFHLEVBQUMsY0FBWDtBQUEwQixhQUFHLEVBQUMsU0FBOUI7QUFBd0MsZUFBSyxFQUFFLEVBQS9DO0FBQW1ELGdCQUFNLEVBQUU7QUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFLRTtBQUFNLGlCQUFTLEVBQUMsbUJBQWhCO0FBQUEsK0JBQ0UsOERBQUMsbURBQUQ7QUFDRSxtQkFBUyxFQUFDLG1EQURaO0FBRUUsYUFBRyxFQUFDLGNBRk47QUFHRSxhQUFHLEVBQUMsU0FITjtBQUlFLGVBQUssRUFBQyxLQUpSO0FBS0UsZ0JBQU0sRUFBQztBQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRixlQW1CRTtBQUNFLGFBQU8sRUFBRSxNQUFNSCxRQUFRLEVBRHpCO0FBRUUsZUFBUyxFQUFDLGdCQUZaO0FBR0UsVUFBSSxFQUFDLFFBSFA7QUFJRSx1QkFBYyxPQUpoQjtBQUtFLG9CQUFXLG1CQUxiO0FBQUEsNkJBT0U7QUFBTSxpQkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQW5CRixlQTRCRTtBQUNFLGVBQVMsRUFBRyw0QkFBMkJGLFdBQVcsR0FBRyxNQUFILEdBQVksRUFBRyxFQURuRTtBQUVFLFFBQUUsRUFBQyx3QkFGTDtBQUFBLDZCQUlFLDhEQUFDLG9EQUFEO0FBQ0UsaUJBQVMsRUFBQyxhQURaO0FBRUUsYUFBSyxFQUFFLENBQUMsT0FBRCxFQUFVLFlBQVYsQ0FGVDtBQUdFLHdCQUFnQixFQUFDLFFBSG5CO0FBQUEsbUJBS0dJLFNBQVMsQ0FBQyxPQUFELENBTFosRUFNR0EsU0FBUyxDQUFDLFlBQUQsQ0FOWixFQU9HQSxTQUFTLENBQUMsUUFBRCxDQVBaLEVBUUdBLFNBQVMsQ0FBQyxXQUFELENBUlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE1QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUE4Q0QsQ0EzREQ7O0dBQU1MOztLQUFBQTtBQTZETiwrREFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL05hdkJhci9OYXZCYXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTY3JvbGxzcHkgZnJvbSBcInJlYWN0LXNjcm9sbHNweVwiO1xyXG5cclxuaW50ZXJmYWNlIE5hdkJhclByb3BzIHt9XHJcblxyXG5jb25zdCBOYXZCYXI6IFJlYWN0LkZDPE5hdkJhclByb3BzPiA9ICgpID0+IHtcclxuICBjb25zdCBbbWVudVNob3dpbmcsIHNldE1lbnVTaG93aW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgc2hvd01lbnUgPSAoKSA9PiBzZXRNZW51U2hvd2luZygocHJldikgPT4gIXByZXYpO1xyXG5cclxuICBjb25zdCBuYXZPcHRpb24gPSAobmFtZTogc3RyaW5nKSA9PiAoXHJcbiAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPXtgIyR7bmFtZX1gfSBvbkNsaWNrPXsoKSA9PiBzaG93TWVudX0+XHJcbiAgICAgICAge25hbWV9XHJcbiAgICAgIDwvYT5cclxuICAgIDwvbGk+XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXZcclxuICAgICAgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWRhcmsgYmctcHJpbWFyeSBmaXhlZC10b3Agc2hvd1wiXHJcbiAgICAgIGlkPVwic2lkZU5hdlwiXHJcbiAgICA+XHJcbiAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZCBcIiBocmVmPVwiI3BhZ2UtdG9wXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1ibG9jayBkLWxnLW5vbmVcIj5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9XCIvcHJvZmlsZS5zdmdcIiBhbHQ9XCJQcm9maWxlXCIgd2lkdGg9ezgyfSBoZWlnaHQ9ezIwfSAvPlxyXG4gICAgICAgICAgRGF2aWQgS2Vjc2tlbWV0aVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLW5vbmUgZC1sZy1ibG9ja1wiPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWctcHJvZmlsZSByb3VuZGVkLWNpcmNsZSBteC1hdXRvIG1iLTJcIlxyXG4gICAgICAgICAgICBzcmM9XCIvcHJvZmlsZS5wbmdcIlxyXG4gICAgICAgICAgICBhbHQ9XCJQcm9maWxlXCJcclxuICAgICAgICAgICAgd2lkdGg9XCIyMDBcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCIxNTBcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNob3dNZW51KCl9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIlxyXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlICR7bWVudVNob3dpbmcgPyBcInNob3dcIiA6IFwiXCJ9YH1cclxuICAgICAgICBpZD1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPFNjcm9sbHNweVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBcIlxyXG4gICAgICAgICAgaXRlbXM9e1tcImFib3V0XCIsIFwiZXhwZXJpZW5jZVwiXX1cclxuICAgICAgICAgIGN1cnJlbnRDbGFzc05hbWU9XCJhY3RpdmVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtuYXZPcHRpb24oXCJhYm91dFwiKX1cclxuICAgICAgICAgIHtuYXZPcHRpb24oXCJleHBlcmllbmNlXCIpfVxyXG4gICAgICAgICAge25hdk9wdGlvbihcInNraWxsc1wiKX1cclxuICAgICAgICAgIHtuYXZPcHRpb24oXCJlZHVjYXRpb25cIil9XHJcbiAgICAgICAgPC9TY3JvbGxzcHk+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcclxuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlU3RhdGUiLCJSZWFjdCIsIlNjcm9sbHNweSIsIk5hdkJhciIsIm1lbnVTaG93aW5nIiwic2V0TWVudVNob3dpbmciLCJzaG93TWVudSIsInByZXYiLCJuYXZPcHRpb24iLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==