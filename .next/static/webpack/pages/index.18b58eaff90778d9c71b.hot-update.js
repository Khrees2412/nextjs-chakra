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

  var _useColorMode = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["useColorMode"])(),
      colorMode = _useColorMode.colorMode,
      toggleColorMode = _useColorMode.toggleColorMode;

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
      lineNumber: 35,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
      align: "center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Box"], {
        display: {
          base: "block",
          md: "none"
        },
        mr: "2",
        cursor: "pointer",
        onClick: toggleColorMode,
        children: colorMode === "light" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__["MoonIcon"], {
          boxSize: 6
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 31
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__["SunIcon"], {
          boxSize: 8
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 58
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Box"], {
        display: {
          base: "block",
          md: "none"
        },
        ml: "2",
        cursor: "pointer",
        onClick: toggleMenu,
        children: show ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["CloseButton"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 14
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__["HamburgerIcon"], {
          boxSize: 8,
          color: "gray.50"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 32
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }, _this), show && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
      orientation: "horizontal"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
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
            p: "1",
            borderRadius: "3px"
          },
          to: "/",
          children: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(MenuItems, {
          _hover: {
            shadow: "outline",
            p: "1",
            borderRadius: "3px"
          },
          to: "/",
          children: ["How It works", " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(MenuItems, {
          _hover: {
            shadow: "outline",
            p: "1",
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
            p: "1",
            borderRadius: "3px"
          },
          to: "/",
          children: ["Pricing", " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(MenuItems, {
          to: "/",
          isLast: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
            size: "sm",
            rounded: "md",
            color: "red.500",
            bg: "white",
            _hover: {
              bg: ["primary.100", "primary.100", "primary.600", "primary.600"]
            },
            children: "Create Account"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 4
    }, _this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 3
  }, _this);
};

_s(Header, "Qckt8wW16L2C0Ue1VYjXehzzCnQ=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["useColorMode"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiTWVudUl0ZW1zIiwicHJvcHMiLCJjaGlsZHJlbiIsImlzTGFzdCIsInRvIiwicmVzdCIsImJhc2UiLCJzbSIsIkhlYWRlciIsInVzZVN0YXRlIiwic2hvdyIsInNldFNob3ciLCJ0b2dnbGVNZW51IiwidXNlQ29sb3JNb2RlIiwiY29sb3JNb2RlIiwidG9nZ2xlQ29sb3JNb2RlIiwibWQiLCJzaGFkb3ciLCJwIiwiYm9yZGVyUmFkaXVzIiwiYmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUFDLEtBQUssRUFBSTtBQUFBLE1BQ2xCQyxRQURrQixHQUNzQkQsS0FEdEIsQ0FDbEJDLFFBRGtCO0FBQUEsTUFDUkMsTUFEUSxHQUNzQkYsS0FEdEIsQ0FDUkUsTUFEUTtBQUFBLGtCQUNzQkYsS0FEdEIsQ0FDQUcsRUFEQTtBQUFBLE1BQ0FBLEVBREEsMEJBQ0ssR0FETDtBQUFBLE1BQ2FDLElBRGIsc0dBQ3NCSixLQUR0Qjs7QUFFMUIsc0JBQ0MscUVBQUMscURBQUQ7QUFBTSxNQUFFLEVBQUU7QUFBRUssVUFBSSxFQUFFSCxNQUFNLEdBQUcsQ0FBSCxHQUFPLENBQXJCO0FBQXdCSSxRQUFFLEVBQUU7QUFBNUIsS0FBVjtBQUEyQyxNQUFFLEVBQUU7QUFBRUQsVUFBSSxFQUFFLENBQVI7QUFBV0MsUUFBRSxFQUFFSixNQUFNLEdBQUcsQ0FBSCxHQUFPO0FBQTVCLEtBQS9DO0FBQWdGLFdBQU8sRUFBQztBQUF4RixLQUFvR0UsSUFBcEc7QUFBQSwyQkFDQyxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRUQsRUFBWjtBQUFBLDZCQUNDO0FBQUEsa0JBQUlGO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFB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cUVBQUMsdURBQUQ7QUFDQyxnQkFBSSxFQUFDLElBRE47QUFFQyxtQkFBTyxFQUFDLElBRlQ7QUFHQyxpQkFBSyxFQUFDLFNBSFA7QUFJQyxjQUFFLEVBQUMsT0FKSjtBQUtDLGtCQUFNLEVBQUU7QUFDUEMsZ0JBQUUsRUFBRSxDQUFDLGFBQUQsRUFBZ0IsYUFBaEIsRUFBK0IsYUFBL0IsRUFBOEMsYUFBOUM7QUFERyxhQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXZCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQTREQSxDQWpFRDs7R0FBTVosTTtVQUlrQ0ssNkQ7OztNQUpsQ0wsTTtBQW1FU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMThiNThlYWZmOTA3NzhkOWM3MWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgRmxleCwgVGV4dCwgQnV0dG9uLCBDbG9zZUJ1dHRvbiwgRGl2aWRlciwgdXNlQ29sb3JNb2RlIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgSGFtYnVyZ2VySWNvbiwgTW9vbkljb24sIFN1bkljb24gfSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBNZW51SXRlbXMgPSBwcm9wcyA9PiB7XHJcblx0Y29uc3QgeyBjaGlsZHJlbiwgaXNMYXN0LCB0byA9IFwiL1wiLCAuLi5yZXN0IH0gPSBwcm9wcztcclxuXHRyZXR1cm4gKFxyXG5cdFx0PFRleHQgbWI9e3sgYmFzZTogaXNMYXN0ID8gMCA6IDgsIHNtOiAwIH19IG1yPXt7IGJhc2U6IDAsIHNtOiBpc0xhc3QgPyAwIDogOCB9fSBkaXNwbGF5PVwiYmxvY2tcIiB7Li4ucmVzdH0+XHJcblx0XHRcdDxMaW5rIGhyZWY9e3RvfT5cclxuXHRcdFx0XHQ8YT57Y2hpbGRyZW59PC9hPlxyXG5cdFx0XHQ8L0xpbms+XHJcblx0XHQ8L1RleHQ+XHJcblx0KTtcclxufTtcclxuXHJcbmNvbnN0IEhlYWRlciA9IHByb3BzID0+IHtcclxuXHRjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgdG9nZ2xlTWVudSA9ICgpID0+IHNldFNob3coIXNob3cpO1xyXG5cclxuXHRjb25zdCB7IGNvbG9yTW9kZSwgdG9nZ2xlQ29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PEZsZXhcclxuXHRcdFx0YXM9XCJuYXZcIlxyXG5cdFx0XHRhbGlnbj1cImNlbnRlclwiXHJcblx0XHRcdGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcclxuXHRcdFx0d3JhcD1cIndyYXBcIlxyXG5cdFx0XHR3PVwiMTAwJVwiXHJcblx0XHRcdG1iPXs4fVxyXG5cdFx0XHRwPXs4fVxyXG5cdFx0XHRiZz1cImJsdWUuNzAwXCJcclxuXHRcdFx0Y29sb3I9e1tcIndoaXRlXCIsIFwid2hpdGVcIiwgXCJwcmltYXJ5LjcwMFwiLCBcInByaW1hcnkuNzAwXCJdfVxyXG5cdFx0XHR7Li4ucHJvcHN9XHJcblx0XHQ+XHJcblx0XHRcdDxGbGV4IGFsaWduPVwiY2VudGVyXCI+RmFudGFzaWE8L0ZsZXg+XHJcblx0XHRcdDxGbGV4IGFsaWduPVwiY2VudGVyXCI+XHJcblx0XHRcdFx0PEJveCBkaXNwbGF5PXt7IGJhc2U6IFwiYmxvY2tcIiwgbWQ6IFwibm9uZVwiIH19IG1yPVwiMlwiIGN1cnNvcj1cInBvaW50ZXJcIiBvbkNsaWNrPXt0b2dnbGVDb2xvck1vZGV9PlxyXG5cdFx0XHRcdFx0e2NvbG9yTW9kZSA9PT0gXCJsaWdodFwiID8gPE1vb25JY29uIGJveFNpemU9ezZ9IC8+IDogPFN1bkljb24gYm94U2l6ZT17OH0gLz59XHJcblx0XHRcdFx0PC9Cb3g+XHJcblxyXG5cdFx0XHRcdDxCb3ggZGlzcGxheT17eyBiYXNlOiBcImJsb2NrXCIsIG1kOiBcIm5vbmVcIiB9fSBtbD1cIjJcIiBjdXJzb3I9XCJwb2ludGVyXCIgb25DbGljaz17dG9nZ2xlTWVudX0+XHJcblx0XHRcdFx0XHR7c2hvdyA/IDxDbG9zZUJ1dHRvbiAvPiA6IDxIYW1idXJnZXJJY29uIGJveFNpemU9ezh9IGNvbG9yPVwiZ3JheS41MFwiIC8+fVxyXG5cdFx0XHRcdDwvQm94PlxyXG5cdFx0XHQ8L0ZsZXg+XHJcblx0XHRcdHtzaG93ICYmIDxEaXZpZGVyIG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIC8+fVxyXG5cdFx0XHQ8Qm94IGRpc3BsYXk9e3sgYmFzZTogc2hvdyA/IFwiYmxvY2tcIiA6IFwibm9uZVwiLCBtZDogXCJibG9ja1wiIH19IGZsZXhCYXNpcz17eyBiYXNlOiBcIjEwMCVcIiwgbWQ6IFwiYXV0b1wiIH19PlxyXG5cdFx0XHRcdDxGbGV4XHJcblx0XHRcdFx0XHRhbGlnbj17W1wiY2VudGVyXCIsIFwiY2VudGVyXCIsIFwiY2VudGVyXCIsIFwiY2VudGVyXCJdfVxyXG5cdFx0XHRcdFx0anVzdGlmeT17W1wiY2VudGVyXCIsIFwic3BhY2UtYmV0d2VlblwiLCBcImZsZXgtZW5kXCIsIFwiZmxleC1lbmRcIl19XHJcblx0XHRcdFx0XHRkaXJlY3Rpb249e1tcImNvbHVtblwiLCBcInJvd1wiLCBcInJvd1wiLCBcInJvd1wiXX1cclxuXHRcdFx0XHRcdHB0PXtbNCwgOCwgMCwgMF19XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PE1lbnVJdGVtcyBfaG92ZXI9e3sgc2hhZG93OiBcIm91dGxpbmVcIiwgcDogXCIxXCIsIGJvcmRlclJhZGl1czogXCIzcHhcIiB9fSB0bz1cIi9cIj5cclxuXHRcdFx0XHRcdFx0SG9tZVxyXG5cdFx0XHRcdFx0PC9NZW51SXRlbXM+XHJcblx0XHRcdFx0XHQ8TWVudUl0ZW1zIF9ob3Zlcj17eyBzaGFkb3c6IFwib3V0bGluZVwiLCBwOiBcIjFcIiwgYm9yZGVyUmFkaXVzOiBcIjNweFwiIH19IHRvPVwiL1wiPlxyXG5cdFx0XHRcdFx0XHRIb3cgSXQgd29ya3N7XCIgXCJ9XHJcblx0XHRcdFx0XHQ8L01lbnVJdGVtcz5cclxuXHRcdFx0XHRcdDxNZW51SXRlbXMgX2hvdmVyPXt7IHNoYWRvdzogXCJvdXRsaW5lXCIsIHA6IFwiMVwiLCBib3JkZXJSYWRpdXM6IFwiM3B4XCIgfX0gdG89XCIvXCI+XHJcblx0XHRcdFx0XHRcdEZlYXR1cmVze1wiIFwifVxyXG5cdFx0XHRcdFx0PC9NZW51SXRlbXM+XHJcblx0XHRcdFx0XHQ8TWVudUl0ZW1zIF9ob3Zlcj17eyBzaGFkb3c6IFwib3V0bGluZVwiLCBwOiBcIjFcIiwgYm9yZGVyUmFkaXVzOiBcIjNweFwiIH19IHRvPVwiL1wiPlxyXG5cdFx0XHRcdFx0XHRQcmljaW5ne1wiIFwifVxyXG5cdFx0XHRcdFx0PC9NZW51SXRlbXM+XHJcblx0XHRcdFx0XHQ8TWVudUl0ZW1zIHRvPVwiL1wiIGlzTGFzdD5cclxuXHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdHNpemU9XCJzbVwiXHJcblx0XHRcdFx0XHRcdFx0cm91bmRlZD1cIm1kXCJcclxuXHRcdFx0XHRcdFx0XHRjb2xvcj1cInJlZC41MDBcIlxyXG5cdFx0XHRcdFx0XHRcdGJnPVwid2hpdGVcIlxyXG5cdFx0XHRcdFx0XHRcdF9ob3Zlcj17e1xyXG5cdFx0XHRcdFx0XHRcdFx0Ymc6IFtcInByaW1hcnkuMTAwXCIsIFwicHJpbWFyeS4xMDBcIiwgXCJwcmltYXJ5LjYwMFwiLCBcInByaW1hcnkuNjAwXCJdXHJcblx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdENyZWF0ZSBBY2NvdW50XHJcblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9NZW51SXRlbXM+XHJcblx0XHRcdFx0PC9GbGV4PlxyXG5cdFx0XHQ8L0JveD5cclxuXHRcdDwvRmxleD5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9