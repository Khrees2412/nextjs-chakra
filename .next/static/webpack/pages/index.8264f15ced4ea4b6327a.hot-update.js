webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/icons */ "./node_modules/@chakra-ui/icons/dist/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);




var _jsxFileName = "C:\\Users\\john\\Desktop\\next-pro\\components\\Header.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var MenuItems = function MenuItems(props) {
  var children = props.children,
      isLast = props.isLast,
      _props$to = props.to,
      to = _props$to === void 0 ? "/" : _props$to,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "isLast", "to"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Text"], _objectSpread(_objectSpread({
    mb: {
      base: isLast ? 0 : 8,
      sm: 0
    },
    mr: {
      base: 0,
      sm: isLast ? 0 : 8
    },
    display: "block"
  }, rest), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: to,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }, _this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }, _this);
};

_c = MenuItems;

var Header = function Header(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      show = _useState[0],
      setShow = _useState[1];

  var toggleMenu = function toggleMenu() {
    return setShow(!show);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Flex"], _objectSpread(_objectSpread({
    as: "nav",
    align: "center",
    justify: "space-between",
    wrap: "wrap",
    w: "100%",
    mb: 8,
    p: 8,
    bg: "blue.700",
    color: ["white", "white", "primary.700", "primary.700"]
  }, props), {}, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
      align: "center",
      children: "Fantasia"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      display: {
        base: "block",
        md: "none"
      },
      cursor: "pointer",
      onClick: toggleMenu,
      children: show ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["CloseButton"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__["HamburgerIcon"], {
        boxSize: 8,
        color: "gray.50"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 31
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }, _this), show && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
      orientation: "horizontal"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      display: {
        base: show ? "block" : "none",
        md: "block"
      },
      flexBasis: {
        base: "100%",
        md: "auto"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
        align: ["center", "center", "center", "center"],
        justify: ["center", "space-between", "flex-end", "flex-end"],
        direction: ["column", "row", "row", "row"],
        pt: [4, 8, 0, 0],
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(MenuItems, {
          _hover: {
            shadow: "outline",
            p: "2",
            transition: "0.5s ease-out",
            borderRadius: "3px"
          },
          to: "/",
          children: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(MenuItems, {
          _hover: {
            shadow: "outline",
            p: "2",
            transition: "0.5s ease-out",
            borderRadius: "3px"
          },
          to: "/",
          children: ["How It works", " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(MenuItems, {
          _hover: {
            shadow: "outline",
            p: "2",
            transition: "0.5s ease-out",
            borderRadius: "3px"
          },
          to: "/",
          children: ["Features", " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(MenuItems, {
          _hover: {
            shadow: "outline",
            p: "2",
            transition: "0.5s ease-out",
            borderRadius: "3px"
          },
          to: "/",
          children: ["Pricing", " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(MenuItems, {
          to: "/",
          isLast: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
            size: "sm",
            rounded: "md",
            color: ["red.500", "red.500", "white", "white"],
            bg: ["white", "white", "gray.500", "gray.500"],
            _hover: {
              bg: ["primary.100", "primary.100", "primary.600", "primary.600"]
            },
            children: "Create Account"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 4
    }, _this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 3
  }, _this);
};

_s(Header, "NKb1ZOdhT+qUsWLXSgjSS2bk2C4=");

_c2 = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c, _c2;

$RefreshReg$(_c, "MenuItems");
$RefreshReg$(_c2, "Header");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiTWVudUl0ZW1zIiwicHJvcHMiLCJjaGlsZHJlbiIsImlzTGFzdCIsInRvIiwicmVzdCIsImJhc2UiLCJzbSIsIkhlYWRlciIsInVzZVN0YXRlIiwic2hvdyIsInNldFNob3ciLCJ0b2dnbGVNZW51IiwibWQiLCJzaGFkb3ciLCJwIiwidHJhbnNpdGlvbiIsImJvcmRlclJhZGl1cyIsImJnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFBQyxLQUFLLEVBQUk7QUFBQSxNQUNsQkMsUUFEa0IsR0FDc0JELEtBRHRCLENBQ2xCQyxRQURrQjtBQUFBLE1BQ1JDLE1BRFEsR0FDc0JGLEtBRHRCLENBQ1JFLE1BRFE7QUFBQSxrQkFDc0JGLEtBRHRCLENBQ0FHLEVBREE7QUFBQSxNQUNBQSxFQURBLDBCQUNLLEdBREw7QUFBQSxNQUNhQyxJQURiLHNHQUNzQkosS0FEdEI7O0FBRTFCLHNCQUNDLHFFQUFDLHFEQUFEO0FBQU0sTUFBRSxFQUFFO0FBQUVLLFVBQUksRUFBRUgsTUFBTSxHQUFHLENBQUgsR0FBTyxDQUFyQjtBQUF3QkksUUFBRSxFQUFFO0FBQTVCLEtBQVY7QUFBMkMsTUFBRSxFQUFFO0FBQUVELFVBQUksRUFBRSxDQUFSO0FBQVdDLFFBQUUsRUFBRUosTUFBTSxHQUFHLENBQUgsR0FBTztBQUE1QixLQUEvQztBQUFnRixXQUFPLEVBQUM7QUFBeEYsS0FBb0dFLElBQXBHO0FBQUEsMkJBQ0MscUVBQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUVELEVBQVo7QUFBQSw2QkFDQztBQUFBLGtCQUFJRjtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxX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QWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODI2NGYxNWNlZDRlYTRiNjMyN2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgRmxleCwgVGV4dCwgQnV0dG9uLCBDbG9zZUJ1dHRvbiwgRGl2aWRlciB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IEhhbWJ1cmdlckljb24gfSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBNZW51SXRlbXMgPSBwcm9wcyA9PiB7XHJcblx0Y29uc3QgeyBjaGlsZHJlbiwgaXNMYXN0LCB0byA9IFwiL1wiLCAuLi5yZXN0IH0gPSBwcm9wcztcclxuXHRyZXR1cm4gKFxyXG5cdFx0PFRleHQgbWI9e3sgYmFzZTogaXNMYXN0ID8gMCA6IDgsIHNtOiAwIH19IG1yPXt7IGJhc2U6IDAsIHNtOiBpc0xhc3QgPyAwIDogOCB9fSBkaXNwbGF5PVwiYmxvY2tcIiB7Li4ucmVzdH0+XHJcblx0XHRcdDxMaW5rIGhyZWY9e3RvfT5cclxuXHRcdFx0XHQ8YT57Y2hpbGRyZW59PC9hPlxyXG5cdFx0XHQ8L0xpbms+XHJcblx0XHQ8L1RleHQ+XHJcblx0KTtcclxufTtcclxuXHJcbmNvbnN0IEhlYWRlciA9IHByb3BzID0+IHtcclxuXHRjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgdG9nZ2xlTWVudSA9ICgpID0+IHNldFNob3coIXNob3cpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEZsZXhcclxuXHRcdFx0YXM9XCJuYXZcIlxyXG5cdFx0XHRhbGlnbj1cImNlbnRlclwiXHJcblx0XHRcdGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcclxuXHRcdFx0d3JhcD1cIndyYXBcIlxyXG5cdFx0XHR3PVwiMTAwJVwiXHJcblx0XHRcdG1iPXs4fVxyXG5cdFx0XHRwPXs4fVxyXG5cdFx0XHRiZz1cImJsdWUuNzAwXCJcclxuXHRcdFx0Y29sb3I9e1tcIndoaXRlXCIsIFwid2hpdGVcIiwgXCJwcmltYXJ5LjcwMFwiLCBcInByaW1hcnkuNzAwXCJdfVxyXG5cdFx0XHR7Li4ucHJvcHN9XHJcblx0XHQ+XHJcblx0XHRcdDxGbGV4IGFsaWduPVwiY2VudGVyXCI+RmFudGFzaWE8L0ZsZXg+XHJcblxyXG5cdFx0XHQ8Qm94IGRpc3BsYXk9e3sgYmFzZTogXCJibG9ja1wiLCBtZDogXCJub25lXCIgfX0gY3Vyc29yPVwicG9pbnRlclwiIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9PlxyXG5cdFx0XHRcdHtzaG93ID8gPENsb3NlQnV0dG9uIC8+IDogPEhhbWJ1cmdlckljb24gYm94U2l6ZT17OH0gY29sb3I9XCJncmF5LjUwXCIgLz59XHJcblx0XHRcdDwvQm94PlxyXG5cdFx0XHR7c2hvdyAmJiA8RGl2aWRlciBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiAvPn1cclxuXHRcdFx0PEJveCBkaXNwbGF5PXt7IGJhc2U6IHNob3cgPyBcImJsb2NrXCIgOiBcIm5vbmVcIiwgbWQ6IFwiYmxvY2tcIiB9fSBmbGV4QmFzaXM9e3sgYmFzZTogXCIxMDAlXCIsIG1kOiBcImF1dG9cIiB9fT5cclxuXHRcdFx0XHQ8RmxleFxyXG5cdFx0XHRcdFx0YWxpZ249e1tcImNlbnRlclwiLCBcImNlbnRlclwiLCBcImNlbnRlclwiLCBcImNlbnRlclwiXX1cclxuXHRcdFx0XHRcdGp1c3RpZnk9e1tcImNlbnRlclwiLCBcInNwYWNlLWJldHdlZW5cIiwgXCJmbGV4LWVuZFwiLCBcImZsZXgtZW5kXCJdfVxyXG5cdFx0XHRcdFx0ZGlyZWN0aW9uPXtbXCJjb2x1bW5cIiwgXCJyb3dcIiwgXCJyb3dcIiwgXCJyb3dcIl19XHJcblx0XHRcdFx0XHRwdD17WzQsIDgsIDAsIDBdfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxNZW51SXRlbXNcclxuXHRcdFx0XHRcdFx0X2hvdmVyPXt7IHNoYWRvdzogXCJvdXRsaW5lXCIsIHA6IFwiMlwiLCB0cmFuc2l0aW9uOiBcIjAuNXMgZWFzZS1vdXRcIiwgYm9yZGVyUmFkaXVzOiBcIjNweFwiIH19XHJcblx0XHRcdFx0XHRcdHRvPVwiL1wiXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdEhvbWVcclxuXHRcdFx0XHRcdDwvTWVudUl0ZW1zPlxyXG5cdFx0XHRcdFx0PE1lbnVJdGVtc1xyXG5cdFx0XHRcdFx0XHRfaG92ZXI9e3sgc2hhZG93OiBcIm91dGxpbmVcIiwgcDogXCIyXCIsIHRyYW5zaXRpb246IFwiMC41cyBlYXNlLW91dFwiLCBib3JkZXJSYWRpdXM6IFwiM3B4XCIgfX1cclxuXHRcdFx0XHRcdFx0dG89XCIvXCJcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0SG93IEl0IHdvcmtze1wiIFwifVxyXG5cdFx0XHRcdFx0PC9NZW51SXRlbXM+XHJcblx0XHRcdFx0XHQ8TWVudUl0ZW1zXHJcblx0XHRcdFx0XHRcdF9ob3Zlcj17eyBzaGFkb3c6IFwib3V0bGluZVwiLCBwOiBcIjJcIiwgdHJhbnNpdGlvbjogXCIwLjVzIGVhc2Utb3V0XCIsIGJvcmRlclJhZGl1czogXCIzcHhcIiB9fVxyXG5cdFx0XHRcdFx0XHR0bz1cIi9cIlxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRGZWF0dXJlc3tcIiBcIn1cclxuXHRcdFx0XHRcdDwvTWVudUl0ZW1zPlxyXG5cdFx0XHRcdFx0PE1lbnVJdGVtc1xyXG5cdFx0XHRcdFx0XHRfaG92ZXI9e3sgc2hhZG93OiBcIm91dGxpbmVcIiwgcDogXCIyXCIsIHRyYW5zaXRpb246IFwiMC41cyBlYXNlLW91dFwiLCBib3JkZXJSYWRpdXM6IFwiM3B4XCIgfX1cclxuXHRcdFx0XHRcdFx0dG89XCIvXCJcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0UHJpY2luZ3tcIiBcIn1cclxuXHRcdFx0XHRcdDwvTWVudUl0ZW1zPlxyXG5cdFx0XHRcdFx0PE1lbnVJdGVtcyB0bz1cIi9cIiBpc0xhc3Q+XHJcblx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRzaXplPVwic21cIlxyXG5cdFx0XHRcdFx0XHRcdHJvdW5kZWQ9XCJtZFwiXHJcblx0XHRcdFx0XHRcdFx0Y29sb3I9e1tcInJlZC41MDBcIiwgXCJyZWQuNTAwXCIsIFwid2hpdGVcIiwgXCJ3aGl0ZVwiXX1cclxuXHRcdFx0XHRcdFx0XHRiZz17W1wid2hpdGVcIiwgXCJ3aGl0ZVwiLCBcImdyYXkuNTAwXCIsIFwiZ3JheS41MDBcIl19XHJcblx0XHRcdFx0XHRcdFx0X2hvdmVyPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRiZzogW1wicHJpbWFyeS4xMDBcIiwgXCJwcmltYXJ5LjEwMFwiLCBcInByaW1hcnkuNjAwXCIsIFwicHJpbWFyeS42MDBcIl1cclxuXHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0Q3JlYXRlIEFjY291bnRcclxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHQ8L01lbnVJdGVtcz5cclxuXHRcdFx0XHQ8L0ZsZXg+XHJcblx0XHRcdDwvQm94PlxyXG5cdFx0PC9GbGV4PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=