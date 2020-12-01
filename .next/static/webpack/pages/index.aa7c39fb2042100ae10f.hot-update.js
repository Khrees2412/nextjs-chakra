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
            p: "1",
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
            p: "1",
            borderRadius: "3px"
          },
          to: "/",
          children: ["How It works", " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
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
          lineNumber: 53,
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
          lineNumber: 56,
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
            lineNumber: 60,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiTWVudUl0ZW1zIiwicHJvcHMiLCJjaGlsZHJlbiIsImlzTGFzdCIsInRvIiwicmVzdCIsImJhc2UiLCJzbSIsIkhlYWRlciIsInVzZVN0YXRlIiwic2hvdyIsInNldFNob3ciLCJ0b2dnbGVNZW51IiwibWQiLCJzaGFkb3ciLCJwIiwiYm9yZGVyUmFkaXVzIiwiYmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUFDLEtBQUssRUFBSTtBQUFBLE1BQ2xCQyxRQURrQixHQUNzQkQsS0FEdEIsQ0FDbEJDLFFBRGtCO0FBQUEsTUFDUkMsTUFEUSxHQUNzQkYsS0FEdEIsQ0FDUkUsTUFEUTtBQUFBLGtCQUNzQkYsS0FEdEIsQ0FDQUcsRUFEQTtBQUFBLE1BQ0FBLEVBREEsMEJBQ0ssR0FETDtBQUFBLE1BQ2FDLElBRGIsc0dBQ3NCSixLQUR0Qjs7QUFFMUIsc0JBQ0MscUVBQUMscURBQUQ7QUFBTSxNQUFFLEVBQUU7QUFBRUssVUFBSSxFQUFFSCxNQUFNLEdBQUcsQ0FBSCxHQUFPLENBQXJCO0FBQXdCSSxRQUFFLEVBQUU7QUFBNUIsS0FBVjtBQUEyQyxNQUFFLEVBQUU7QUFBRUQsVUFBSSxFQUFFLENBQVI7QUFBV0MsUUFBRSxFQUFFSixNQUFNLEdBQUcsQ0FBSCxHQUFPO0FBQTVCLEtBQS9DO0FBQWdGLFdBQU8sRUFBQztBQUF4RixLQUFvR0UsSUFBcEc7QUFBQSwyQkFDQyxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRUQsRUFBWjtBQUFBLDZCQUNDO0FBQUEsa0JBQUlGO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFPQSxDQVRE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QTZCQyx3QkFBWSxFQUFFO0FBQTNDLFdBQW5CO0FBQXVFLFlBQUUsRUFBQyxHQUExRTtBQUFBLGlDQUNVLEdBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpELGVBZUMscUVBQUMsU0FBRDtBQUFXLGdCQUFNLEVBQUU7QUFBRUYsa0JBQU0sRUFBRSxTQUFWO0FBQXFCQyxhQUFDLEVBQUUsR0FBeEI7QUFBNkJDLHdCQUFZLEVBQUU7QUFBM0MsV0FBbkI7QUFBdUUsWUFBRSxFQUFDLEdBQTFFO0FBQUEsZ0NBQ1MsR0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZkQsZUFrQkMscUVBQUMsU0FBRDtBQUFXLFlBQUUsRUFBQyxHQUFkO0FBQWtCLGdCQUFNLE1BQXhCO0FBQUEsaUNBQ0MscUVBQUMsdURBQUQ7QUFDQyxnQkFBSSxFQUFDLElBRE47QUFFQyxtQkFBTyxFQUFDLElBRlQ7QUFHQyxpQkFBSyxFQUFFLENBQUMsU0FBRCxFQUFZLFNBQVosRUFBdUIsT0FBdkIsRUFBZ0MsT0FBaEMsQ0FIUjtBQUlDLGNBQUUsRUFBRSxDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLFVBQW5CLEVBQStCLFVBQS9CLENBSkw7QUFLQyxrQkFBTSxFQUFFO0FBQ1BDLGdCQUFFLEVBQUUsQ0FBQyxhQUFELEVBQWdCLGFBQWhCLEVBQStCLGFBQS9CLEVBQThDLGFBQTlDO0FBREcsYUFMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUF1REEsQ0EzREQ7O0dBQU1ULE07O01BQUFBLE07QUE2RFNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFhN2MzOWZiMjA0MjEwMGFlMTBmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEZsZXgsIFRleHQsIEJ1dHRvbiwgQ2xvc2VCdXR0b24sIERpdmlkZXIgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBIYW1idXJnZXJJY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvaWNvbnNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgTWVudUl0ZW1zID0gcHJvcHMgPT4ge1xyXG5cdGNvbnN0IHsgY2hpbGRyZW4sIGlzTGFzdCwgdG8gPSBcIi9cIiwgLi4ucmVzdCB9ID0gcHJvcHM7XHJcblx0cmV0dXJuIChcclxuXHRcdDxUZXh0IG1iPXt7IGJhc2U6IGlzTGFzdCA/IDAgOiA4LCBzbTogMCB9fSBtcj17eyBiYXNlOiAwLCBzbTogaXNMYXN0ID8gMCA6IDggfX0gZGlzcGxheT1cImJsb2NrXCIgey4uLnJlc3R9PlxyXG5cdFx0XHQ8TGluayBocmVmPXt0b30+XHJcblx0XHRcdFx0PGE+e2NoaWxkcmVufTwvYT5cclxuXHRcdFx0PC9MaW5rPlxyXG5cdFx0PC9UZXh0PlxyXG5cdCk7XHJcbn07XHJcblxyXG5jb25zdCBIZWFkZXIgPSBwcm9wcyA9PiB7XHJcblx0Y29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiBzZXRTaG93KCFzaG93KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxGbGV4XHJcblx0XHRcdGFzPVwibmF2XCJcclxuXHRcdFx0YWxpZ249XCJjZW50ZXJcIlxyXG5cdFx0XHRqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXHJcblx0XHRcdHdyYXA9XCJ3cmFwXCJcclxuXHRcdFx0dz1cIjEwMCVcIlxyXG5cdFx0XHRtYj17OH1cclxuXHRcdFx0cD17OH1cclxuXHRcdFx0Ymc9XCJibHVlLjcwMFwiXHJcblx0XHRcdGNvbG9yPXtbXCJ3aGl0ZVwiLCBcIndoaXRlXCIsIFwicHJpbWFyeS43MDBcIiwgXCJwcmltYXJ5LjcwMFwiXX1cclxuXHRcdFx0ey4uLnByb3BzfVxyXG5cdFx0PlxyXG5cdFx0XHQ8RmxleCBhbGlnbj1cImNlbnRlclwiPkZhbnRhc2lhPC9GbGV4PlxyXG5cclxuXHRcdFx0PEJveCBkaXNwbGF5PXt7IGJhc2U6IFwiYmxvY2tcIiwgbWQ6IFwibm9uZVwiIH19IGN1cnNvcj1cInBvaW50ZXJcIiBvbkNsaWNrPXt0b2dnbGVNZW51fT5cclxuXHRcdFx0XHR7c2hvdyA/IDxDbG9zZUJ1dHRvbiAvPiA6IDxIYW1idXJnZXJJY29uIGJveFNpemU9ezh9IGNvbG9yPVwiZ3JheS41MFwiIC8+fVxyXG5cdFx0XHQ8L0JveD5cclxuXHRcdFx0e3Nob3cgJiYgPERpdmlkZXIgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgLz59XHJcblx0XHRcdDxCb3ggZGlzcGxheT17eyBiYXNlOiBzaG93ID8gXCJibG9ja1wiIDogXCJub25lXCIsIG1kOiBcImJsb2NrXCIgfX0gZmxleEJhc2lzPXt7IGJhc2U6IFwiMTAwJVwiLCBtZDogXCJhdXRvXCIgfX0+XHJcblx0XHRcdFx0PEZsZXhcclxuXHRcdFx0XHRcdGFsaWduPXtbXCJjZW50ZXJcIiwgXCJjZW50ZXJcIiwgXCJjZW50ZXJcIiwgXCJjZW50ZXJcIl19XHJcblx0XHRcdFx0XHRqdXN0aWZ5PXtbXCJjZW50ZXJcIiwgXCJzcGFjZS1iZXR3ZWVuXCIsIFwiZmxleC1lbmRcIiwgXCJmbGV4LWVuZFwiXX1cclxuXHRcdFx0XHRcdGRpcmVjdGlvbj17W1wiY29sdW1uXCIsIFwicm93XCIsIFwicm93XCIsIFwicm93XCJdfVxyXG5cdFx0XHRcdFx0cHQ9e1s0LCA4LCAwLCAwXX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8TWVudUl0ZW1zIF9ob3Zlcj17eyBzaGFkb3c6IFwib3V0bGluZVwiLCBwOiBcIjFcIiwgYm9yZGVyUmFkaXVzOiBcIjNweFwiIH19IHRvPVwiL1wiPlxyXG5cdFx0XHRcdFx0XHRIb21lXHJcblx0XHRcdFx0XHQ8L01lbnVJdGVtcz5cclxuXHRcdFx0XHRcdDxNZW51SXRlbXMgX2hvdmVyPXt7IHNoYWRvdzogXCJvdXRsaW5lXCIsIHA6IFwiMVwiLCBib3JkZXJSYWRpdXM6IFwiM3B4XCIgfX0gdG89XCIvXCI+XHJcblx0XHRcdFx0XHRcdEhvdyBJdCB3b3Jrc3tcIiBcIn1cclxuXHRcdFx0XHRcdDwvTWVudUl0ZW1zPlxyXG5cdFx0XHRcdFx0PE1lbnVJdGVtcyBfaG92ZXI9e3sgc2hhZG93OiBcIm91dGxpbmVcIiwgcDogXCIxXCIsIGJvcmRlclJhZGl1czogXCIzcHhcIiB9fSB0bz1cIi9cIj5cclxuXHRcdFx0XHRcdFx0RmVhdHVyZXN7XCIgXCJ9XHJcblx0XHRcdFx0XHQ8L01lbnVJdGVtcz5cclxuXHRcdFx0XHRcdDxNZW51SXRlbXMgX2hvdmVyPXt7IHNoYWRvdzogXCJvdXRsaW5lXCIsIHA6IFwiMVwiLCBib3JkZXJSYWRpdXM6IFwiM3B4XCIgfX0gdG89XCIvXCI+XHJcblx0XHRcdFx0XHRcdFByaWNpbmd7XCIgXCJ9XHJcblx0XHRcdFx0XHQ8L01lbnVJdGVtcz5cclxuXHRcdFx0XHRcdDxNZW51SXRlbXMgdG89XCIvXCIgaXNMYXN0PlxyXG5cdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0c2l6ZT1cInNtXCJcclxuXHRcdFx0XHRcdFx0XHRyb3VuZGVkPVwibWRcIlxyXG5cdFx0XHRcdFx0XHRcdGNvbG9yPXtbXCJyZWQuNTAwXCIsIFwicmVkLjUwMFwiLCBcIndoaXRlXCIsIFwid2hpdGVcIl19XHJcblx0XHRcdFx0XHRcdFx0Ymc9e1tcIndoaXRlXCIsIFwid2hpdGVcIiwgXCJncmF5LjUwMFwiLCBcImdyYXkuNTAwXCJdfVxyXG5cdFx0XHRcdFx0XHRcdF9ob3Zlcj17e1xyXG5cdFx0XHRcdFx0XHRcdFx0Ymc6IFtcInByaW1hcnkuMTAwXCIsIFwicHJpbWFyeS4xMDBcIiwgXCJwcmltYXJ5LjYwMFwiLCBcInByaW1hcnkuNjAwXCJdXHJcblx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdENyZWF0ZSBBY2NvdW50XHJcblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9NZW51SXRlbXM+XHJcblx0XHRcdFx0PC9GbGV4PlxyXG5cdFx0XHQ8L0JveD5cclxuXHRcdDwvRmxleD5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9