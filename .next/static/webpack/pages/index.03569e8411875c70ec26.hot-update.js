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
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      display: {
        base: "block",
        md: "none"
      },
      mb: "2",
      cursor: "pointer",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        onClick: toggleColorMode,
        children: [colorMode === "light" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__["MoonIcon"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 31
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__["SunIcon"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 46
        }, _this), colorMode === "light" ? "Dark" : "Light"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      display: {
        base: "block",
        md: "none"
      },
      cursor: "pointer",
      onClick: toggleMenu,
      children: show ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["CloseButton"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__["HamburgerIcon"], {
        boxSize: 8,
        color: "gray.50"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 31
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 4
    }, _this), show && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
      orientation: "horizontal"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
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
          lineNumber: 55,
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
          lineNumber: 58,
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
          lineNumber: 61,
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
          lineNumber: 64,
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
            lineNumber: 68,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiTWVudUl0ZW1zIiwicHJvcHMiLCJjaGlsZHJlbiIsImlzTGFzdCIsInRvIiwicmVzdCIsImJhc2UiLCJzbSIsIkhlYWRlciIsInVzZVN0YXRlIiwic2hvdyIsInNldFNob3ciLCJ0b2dnbGVNZW51IiwidXNlQ29sb3JNb2RlIiwiY29sb3JNb2RlIiwidG9nZ2xlQ29sb3JNb2RlIiwibWQiLCJzaGFkb3ciLCJwIiwiYm9yZGVyUmFkaXVzIiwiYmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUFDLEtBQUssRUFBSTtBQUFBLE1BQ2xCQyxRQURrQixHQUNzQkQsS0FEdEIsQ0FDbEJDLFFBRGtCO0FBQUEsTUFDUkMsTUFEUSxHQUNzQkYsS0FEdEIsQ0FDUkUsTUFEUTtBQUFBLGtCQUNzQkYsS0FEdEIsQ0FDQUcsRUFEQTtBQUFBLE1BQ0FBLEVBREEsMEJBQ0ssR0FETDtBQUFBLE1BQ2FDLElBRGIsc0dBQ3NCSixLQUR0Qjs7QUFFMUIsc0JBQ0MscUVBQUMscURBQUQ7QUFBTSxNQUFFLEVBQUU7QUFBRUssVUFBSSxFQUFFSCxNQUFNLEdBQUcsQ0FBSCxHQUFPLENBQXJCO0FBQXdCSSxRQUFFLEVBQUU7QUFBNUIsS0FBVjtBQUEyQyxNQUFFLEVBQUU7QUFBRUQsVUFBSSxFQUFFLENBQVI7QUFBV0MsUUFBRSxFQUFFSixNQUFNLEdBQUcsQ0FBSCxHQUFPO0FBQTVCLEtBQS9DO0FBQWdGLFdBQU8sRUFBQztBQUF4RixLQUFvR0UsSUFBcEc7QUFBQSwyQkFDQyxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRUQsRUFBWjtBQUFBLDZCQUNDO0FBQUEsa0JBQUlGO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFB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QUFPLEVBQUMsSUFGVDtBQUdDLGlCQUFLLEVBQUMsU0FIUDtBQUlDLGNBQUUsRUFBQyxPQUpKO0FBS0Msa0JBQU0sRUFBRTtBQUNQQyxnQkFBRSxFQUFFLENBQUMsYUFBRCxFQUFnQixhQUFoQixFQUErQixhQUEvQixFQUE4QyxhQUE5QztBQURHLGFBTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWxCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBekJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBOERBLENBbkVEOztHQUFNWixNO1VBSWtDSyw2RDs7O01BSmxDTCxNO0FBcUVTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wMzU2OWU4NDExODc1YzcwZWMyNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBGbGV4LCBUZXh0LCBCdXR0b24sIENsb3NlQnV0dG9uLCBEaXZpZGVyLCB1c2VDb2xvck1vZGUgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBIYW1idXJnZXJJY29uLCBNb29uSWNvbiwgU3VuSWNvbiB9IGZyb20gXCJAY2hha3JhLXVpL2ljb25zXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IE1lbnVJdGVtcyA9IHByb3BzID0+IHtcclxuXHRjb25zdCB7IGNoaWxkcmVuLCBpc0xhc3QsIHRvID0gXCIvXCIsIC4uLnJlc3QgfSA9IHByb3BzO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8VGV4dCBtYj17eyBiYXNlOiBpc0xhc3QgPyAwIDogOCwgc206IDAgfX0gbXI9e3sgYmFzZTogMCwgc206IGlzTGFzdCA/IDAgOiA4IH19IGRpc3BsYXk9XCJibG9ja1wiIHsuLi5yZXN0fT5cclxuXHRcdFx0PExpbmsgaHJlZj17dG99PlxyXG5cdFx0XHRcdDxhPntjaGlsZHJlbn08L2E+XHJcblx0XHRcdDwvTGluaz5cclxuXHRcdDwvVGV4dD5cclxuXHQpO1xyXG59O1xyXG5cclxuY29uc3QgSGVhZGVyID0gcHJvcHMgPT4ge1xyXG5cdGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4gc2V0U2hvdyghc2hvdyk7XHJcblxyXG5cdGNvbnN0IHsgY29sb3JNb2RlLCB0b2dnbGVDb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8RmxleFxyXG5cdFx0XHRhcz1cIm5hdlwiXHJcblx0XHRcdGFsaWduPVwiY2VudGVyXCJcclxuXHRcdFx0anVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxyXG5cdFx0XHR3cmFwPVwid3JhcFwiXHJcblx0XHRcdHc9XCIxMDAlXCJcclxuXHRcdFx0bWI9ezh9XHJcblx0XHRcdHA9ezh9XHJcblx0XHRcdGJnPVwiYmx1ZS43MDBcIlxyXG5cdFx0XHRjb2xvcj17W1wid2hpdGVcIiwgXCJ3aGl0ZVwiLCBcInByaW1hcnkuNzAwXCIsIFwicHJpbWFyeS43MDBcIl19XHJcblx0XHRcdHsuLi5wcm9wc31cclxuXHRcdD5cclxuXHRcdFx0PEZsZXggYWxpZ249XCJjZW50ZXJcIj5GYW50YXNpYTwvRmxleD5cclxuXHJcblx0XHRcdDxCb3ggZGlzcGxheT17eyBiYXNlOiBcImJsb2NrXCIsIG1kOiBcIm5vbmVcIiB9fSBtYj1cIjJcIiBjdXJzb3I9XCJwb2ludGVyXCI+XHJcblx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVDb2xvck1vZGV9PlxyXG5cdFx0XHRcdFx0e2NvbG9yTW9kZSA9PT0gXCJsaWdodFwiID8gPE1vb25JY29uIC8+IDogPFN1bkljb24gLz59XHJcblx0XHRcdFx0XHR7Y29sb3JNb2RlID09PSBcImxpZ2h0XCIgPyBcIkRhcmtcIiA6IFwiTGlnaHRcIn1cclxuXHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0PC9Cb3g+XHJcblxyXG5cdFx0XHQ8QnV0dG9uIGRpc3BsYXk9e3sgYmFzZTogXCJibG9ja1wiLCBtZDogXCJub25lXCIgfX0gY3Vyc29yPVwicG9pbnRlclwiIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9PlxyXG5cdFx0XHRcdHtzaG93ID8gPENsb3NlQnV0dG9uIC8+IDogPEhhbWJ1cmdlckljb24gYm94U2l6ZT17OH0gY29sb3I9XCJncmF5LjUwXCIgLz59XHJcblx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHR7c2hvdyAmJiA8RGl2aWRlciBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiAvPn1cclxuXHRcdFx0PEJveCBkaXNwbGF5PXt7IGJhc2U6IHNob3cgPyBcImJsb2NrXCIgOiBcIm5vbmVcIiwgbWQ6IFwiYmxvY2tcIiB9fSBmbGV4QmFzaXM9e3sgYmFzZTogXCIxMDAlXCIsIG1kOiBcImF1dG9cIiB9fT5cclxuXHRcdFx0XHQ8RmxleFxyXG5cdFx0XHRcdFx0YWxpZ249e1tcImNlbnRlclwiLCBcImNlbnRlclwiLCBcImNlbnRlclwiLCBcImNlbnRlclwiXX1cclxuXHRcdFx0XHRcdGp1c3RpZnk9e1tcImNlbnRlclwiLCBcInNwYWNlLWJldHdlZW5cIiwgXCJmbGV4LWVuZFwiLCBcImZsZXgtZW5kXCJdfVxyXG5cdFx0XHRcdFx0ZGlyZWN0aW9uPXtbXCJjb2x1bW5cIiwgXCJyb3dcIiwgXCJyb3dcIiwgXCJyb3dcIl19XHJcblx0XHRcdFx0XHRwdD17WzQsIDgsIDAsIDBdfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxNZW51SXRlbXMgX2hvdmVyPXt7IHNoYWRvdzogXCJvdXRsaW5lXCIsIHA6IFwiMVwiLCBib3JkZXJSYWRpdXM6IFwiM3B4XCIgfX0gdG89XCIvXCI+XHJcblx0XHRcdFx0XHRcdEhvbWVcclxuXHRcdFx0XHRcdDwvTWVudUl0ZW1zPlxyXG5cdFx0XHRcdFx0PE1lbnVJdGVtcyBfaG92ZXI9e3sgc2hhZG93OiBcIm91dGxpbmVcIiwgcDogXCIxXCIsIGJvcmRlclJhZGl1czogXCIzcHhcIiB9fSB0bz1cIi9cIj5cclxuXHRcdFx0XHRcdFx0SG93IEl0IHdvcmtze1wiIFwifVxyXG5cdFx0XHRcdFx0PC9NZW51SXRlbXM+XHJcblx0XHRcdFx0XHQ8TWVudUl0ZW1zIF9ob3Zlcj17eyBzaGFkb3c6IFwib3V0bGluZVwiLCBwOiBcIjFcIiwgYm9yZGVyUmFkaXVzOiBcIjNweFwiIH19IHRvPVwiL1wiPlxyXG5cdFx0XHRcdFx0XHRGZWF0dXJlc3tcIiBcIn1cclxuXHRcdFx0XHRcdDwvTWVudUl0ZW1zPlxyXG5cdFx0XHRcdFx0PE1lbnVJdGVtcyBfaG92ZXI9e3sgc2hhZG93OiBcIm91dGxpbmVcIiwgcDogXCIxXCIsIGJvcmRlclJhZGl1czogXCIzcHhcIiB9fSB0bz1cIi9cIj5cclxuXHRcdFx0XHRcdFx0UHJpY2luZ3tcIiBcIn1cclxuXHRcdFx0XHRcdDwvTWVudUl0ZW1zPlxyXG5cdFx0XHRcdFx0PE1lbnVJdGVtcyB0bz1cIi9cIiBpc0xhc3Q+XHJcblx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRzaXplPVwic21cIlxyXG5cdFx0XHRcdFx0XHRcdHJvdW5kZWQ9XCJtZFwiXHJcblx0XHRcdFx0XHRcdFx0Y29sb3I9XCJyZWQuNTAwXCJcclxuXHRcdFx0XHRcdFx0XHRiZz1cIndoaXRlXCJcclxuXHRcdFx0XHRcdFx0XHRfaG92ZXI9e3tcclxuXHRcdFx0XHRcdFx0XHRcdGJnOiBbXCJwcmltYXJ5LjEwMFwiLCBcInByaW1hcnkuMTAwXCIsIFwicHJpbWFyeS42MDBcIiwgXCJwcmltYXJ5LjYwMFwiXVxyXG5cdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRDcmVhdGUgQWNjb3VudFxyXG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdDwvTWVudUl0ZW1zPlxyXG5cdFx0XHRcdDwvRmxleD5cclxuXHRcdFx0PC9Cb3g+XHJcblx0XHQ8L0ZsZXg+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==