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
          base: "block"
        },
        mr: {
          base: "2",
          lg: "0"
        },
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
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Box"], {
          display: {
            base: "none",
            lg: "block"
          },
          mr: {
            lg: "4"
          },
          cursor: "pointer",
          onClick: toggleColorMode,
          children: colorMode === "light" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__["MoonIcon"], {
            boxSize: 6
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 32
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__["SunIcon"], {
            boxSize: 8
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 59
          }, _this)
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
          children: "Home"
        }, void 0, false, {
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
          children: ["How It works", " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
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
          lineNumber: 67,
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
          lineNumber: 70,
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
            lineNumber: 74,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiTWVudUl0ZW1zIiwicHJvcHMiLCJjaGlsZHJlbiIsImlzTGFzdCIsInRvIiwicmVzdCIsImJhc2UiLCJzbSIsIkhlYWRlciIsInVzZVN0YXRlIiwic2hvdyIsInNldFNob3ciLCJ0b2dnbGVNZW51IiwidXNlQ29sb3JNb2RlIiwiY29sb3JNb2RlIiwidG9nZ2xlQ29sb3JNb2RlIiwibGciLCJtZCIsInNoYWRvdyIsInAiLCJib3JkZXJSYWRpdXMiLCJiZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQUMsS0FBSyxFQUFJO0FBQUEsTUFDbEJDLFFBRGtCLEdBQ3NCRCxLQUR0QixDQUNsQkMsUUFEa0I7QUFBQSxNQUNSQyxNQURRLEdBQ3NCRixLQUR0QixDQUNSRSxNQURRO0FBQUEsa0JBQ3NCRixLQUR0QixDQUNBRyxFQURBO0FBQUEsTUFDQUEsRUFEQSwwQkFDSyxHQURMO0FBQUEsTUFDYUMsSUFEYixzR0FDc0JKLEtBRHRCOztBQUUxQixzQkFDQyxxRUFBQyxxREFBRDtBQUFNLE1BQUUsRUFBRTtBQUFFSyxVQUFJLEVBQUVILE1BQU0sR0FBRyxDQUFILEdBQU8sQ0FBckI7QUFBd0JJLFFBQUUsRUFBRTtBQUE1QixLQUFWO0FBQTJDLE1BQUUsRUFBRTtBQUFFRCxVQUFJLEVBQUUsQ0FBUjtBQUFXQyxRQUFFLEVBQUVKLE1BQU0sR0FBRyxDQUFILEdBQU87QUFBNUIsS0FBL0M7QUFBZ0YsV0FBTyxFQUFDO0FBQXhGLEtBQW9HRSxJQUFwRztBQUFBLDJCQUNDLHFFQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFFRCxFQUFaO0FBQUEsNkJBQ0M7QUFBQSxrQkFBSUY7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFB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RUYsa0JBQU0sRUFBRSxTQUFWO0FBQXFCQyxhQUFDLEVBQUUsR0FBeEI7QUFBNkJDLHdCQUFZLEVBQUU7QUFBM0MsV0FBbkI7QUFBdUUsWUFBRSxFQUFDLEdBQTFFO0FBQUEsaUNBQ1UsR0FEVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcEJELGVBdUJDLHFFQUFDLFNBQUQ7QUFBVyxnQkFBTSxFQUFFO0FBQUVGLGtCQUFNLEVBQUUsU0FBVjtBQUFxQkMsYUFBQyxFQUFFLEdBQXhCO0FBQTZCQyx3QkFBWSxFQUFFO0FBQTNDLFdBQW5CO0FBQXVFLFlBQUUsRUFBQyxHQUExRTtBQUFBLGdDQUNTLEdBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXZCRCxlQTBCQyxxRUFBQyxTQUFEO0FBQVcsWUFBRSxFQUFDLEdBQWQ7QUFBa0IsZ0JBQU0sTUFBeEI7QUFBQSxpQ0FDQyxxRUFBQyx1REFBRDtBQUNDLGdCQUFJLEVBQUMsSUFETjtBQUVDLG1CQUFPLEVBQUMsSUFGVDtBQUdDLGlCQUFLLEVBQUMsU0FIUDtBQUlDLGNBQUUsRUFBQyxPQUpKO0FBS0Msa0JBQU0sRUFBRTtBQUNQQyxnQkFBRSxFQUFFLENBQUMsYUFBRCxFQUFnQixhQUFoQixFQUErQixhQUEvQixFQUE4QyxhQUE5QztBQURHLGFBTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTFCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdkJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBb0VBLENBekVEOztHQUFNYixNO1VBSWtDSyw2RDs7O01BSmxDTCxNO0FBMkVTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kMTQ4M2JkNmVkY2NiYjUyZTBmNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBGbGV4LCBUZXh0LCBCdXR0b24sIENsb3NlQnV0dG9uLCBEaXZpZGVyLCB1c2VDb2xvck1vZGUgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBIYW1idXJnZXJJY29uLCBNb29uSWNvbiwgU3VuSWNvbiB9IGZyb20gXCJAY2hha3JhLXVpL2ljb25zXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IE1lbnVJdGVtcyA9IHByb3BzID0+IHtcclxuXHRjb25zdCB7IGNoaWxkcmVuLCBpc0xhc3QsIHRvID0gXCIvXCIsIC4uLnJlc3QgfSA9IHByb3BzO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8VGV4dCBtYj17eyBiYXNlOiBpc0xhc3QgPyAwIDogOCwgc206IDAgfX0gbXI9e3sgYmFzZTogMCwgc206IGlzTGFzdCA/IDAgOiA4IH19IGRpc3BsYXk9XCJibG9ja1wiIHsuLi5yZXN0fT5cclxuXHRcdFx0PExpbmsgaHJlZj17dG99PlxyXG5cdFx0XHRcdDxhPntjaGlsZHJlbn08L2E+XHJcblx0XHRcdDwvTGluaz5cclxuXHRcdDwvVGV4dD5cclxuXHQpO1xyXG59O1xyXG5cclxuY29uc3QgSGVhZGVyID0gcHJvcHMgPT4ge1xyXG5cdGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4gc2V0U2hvdyghc2hvdyk7XHJcblxyXG5cdGNvbnN0IHsgY29sb3JNb2RlLCB0b2dnbGVDb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8RmxleFxyXG5cdFx0XHRhcz1cIm5hdlwiXHJcblx0XHRcdGFsaWduPVwiY2VudGVyXCJcclxuXHRcdFx0anVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxyXG5cdFx0XHR3cmFwPVwid3JhcFwiXHJcblx0XHRcdHc9XCIxMDAlXCJcclxuXHRcdFx0bWI9ezh9XHJcblx0XHRcdHA9ezh9XHJcblx0XHRcdGJnPVwiYmx1ZS43MDBcIlxyXG5cdFx0XHRjb2xvcj17W1wid2hpdGVcIiwgXCJ3aGl0ZVwiLCBcInByaW1hcnkuNzAwXCIsIFwicHJpbWFyeS43MDBcIl19XHJcblx0XHRcdHsuLi5wcm9wc31cclxuXHRcdD5cclxuXHRcdFx0PEZsZXggYWxpZ249XCJjZW50ZXJcIj5GYW50YXNpYTwvRmxleD5cclxuXHRcdFx0PEZsZXggYWxpZ249XCJjZW50ZXJcIj5cclxuXHRcdFx0XHQ8Qm94IGRpc3BsYXk9e3sgYmFzZTogXCJibG9ja1wiIH19IG1yPXt7IGJhc2U6IFwiMlwiLCBsZzogXCIwXCIgfX0gY3Vyc29yPVwicG9pbnRlclwiIG9uQ2xpY2s9e3RvZ2dsZUNvbG9yTW9kZX0+XHJcblx0XHRcdFx0XHR7Y29sb3JNb2RlID09PSBcImxpZ2h0XCIgPyA8TW9vbkljb24gYm94U2l6ZT17Nn0gLz4gOiA8U3VuSWNvbiBib3hTaXplPXs4fSAvPn1cclxuXHRcdFx0XHQ8L0JveD5cclxuXHJcblx0XHRcdFx0PEJveCBkaXNwbGF5PXt7IGJhc2U6IFwiYmxvY2tcIiwgbWQ6IFwibm9uZVwiIH19IG1sPVwiMlwiIGN1cnNvcj1cInBvaW50ZXJcIiBvbkNsaWNrPXt0b2dnbGVNZW51fT5cclxuXHRcdFx0XHRcdHtzaG93ID8gPENsb3NlQnV0dG9uIC8+IDogPEhhbWJ1cmdlckljb24gYm94U2l6ZT17OH0gY29sb3I9XCJncmF5LjUwXCIgLz59XHJcblx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdDwvRmxleD5cclxuXHRcdFx0e3Nob3cgJiYgPERpdmlkZXIgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgLz59XHJcblx0XHRcdDxCb3ggZGlzcGxheT17eyBiYXNlOiBzaG93ID8gXCJibG9ja1wiIDogXCJub25lXCIsIG1kOiBcImJsb2NrXCIgfX0gZmxleEJhc2lzPXt7IGJhc2U6IFwiMTAwJVwiLCBtZDogXCJhdXRvXCIgfX0+XHJcblx0XHRcdFx0PEZsZXhcclxuXHRcdFx0XHRcdGFsaWduPXtbXCJjZW50ZXJcIiwgXCJjZW50ZXJcIiwgXCJjZW50ZXJcIiwgXCJjZW50ZXJcIl19XHJcblx0XHRcdFx0XHRqdXN0aWZ5PXtbXCJjZW50ZXJcIiwgXCJzcGFjZS1iZXR3ZWVuXCIsIFwiZmxleC1lbmRcIiwgXCJmbGV4LWVuZFwiXX1cclxuXHRcdFx0XHRcdGRpcmVjdGlvbj17W1wiY29sdW1uXCIsIFwicm93XCIsIFwicm93XCIsIFwicm93XCJdfVxyXG5cdFx0XHRcdFx0cHQ9e1s0LCA4LCAwLCAwXX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8Qm94XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk9e3sgYmFzZTogXCJub25lXCIsIGxnOiBcImJsb2NrXCIgfX1cclxuXHRcdFx0XHRcdFx0bXI9e3sgbGc6IFwiNFwiIH19XHJcblx0XHRcdFx0XHRcdGN1cnNvcj1cInBvaW50ZXJcIlxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXt0b2dnbGVDb2xvck1vZGV9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdHtjb2xvck1vZGUgPT09IFwibGlnaHRcIiA/IDxNb29uSWNvbiBib3hTaXplPXs2fSAvPiA6IDxTdW5JY29uIGJveFNpemU9ezh9IC8+fVxyXG5cdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHQ8TWVudUl0ZW1zIF9ob3Zlcj17eyBzaGFkb3c6IFwib3V0bGluZVwiLCBwOiBcIjFcIiwgYm9yZGVyUmFkaXVzOiBcIjNweFwiIH19IHRvPVwiL1wiPlxyXG5cdFx0XHRcdFx0XHRIb21lXHJcblx0XHRcdFx0XHQ8L01lbnVJdGVtcz5cclxuXHRcdFx0XHRcdDxNZW51SXRlbXMgX2hvdmVyPXt7IHNoYWRvdzogXCJvdXRsaW5lXCIsIHA6IFwiMVwiLCBib3JkZXJSYWRpdXM6IFwiM3B4XCIgfX0gdG89XCIvXCI+XHJcblx0XHRcdFx0XHRcdEhvdyBJdCB3b3Jrc3tcIiBcIn1cclxuXHRcdFx0XHRcdDwvTWVudUl0ZW1zPlxyXG5cdFx0XHRcdFx0PE1lbnVJdGVtcyBfaG92ZXI9e3sgc2hhZG93OiBcIm91dGxpbmVcIiwgcDogXCIxXCIsIGJvcmRlclJhZGl1czogXCIzcHhcIiB9fSB0bz1cIi9cIj5cclxuXHRcdFx0XHRcdFx0RmVhdHVyZXN7XCIgXCJ9XHJcblx0XHRcdFx0XHQ8L01lbnVJdGVtcz5cclxuXHRcdFx0XHRcdDxNZW51SXRlbXMgX2hvdmVyPXt7IHNoYWRvdzogXCJvdXRsaW5lXCIsIHA6IFwiMVwiLCBib3JkZXJSYWRpdXM6IFwiM3B4XCIgfX0gdG89XCIvXCI+XHJcblx0XHRcdFx0XHRcdFByaWNpbmd7XCIgXCJ9XHJcblx0XHRcdFx0XHQ8L01lbnVJdGVtcz5cclxuXHRcdFx0XHRcdDxNZW51SXRlbXMgdG89XCIvXCIgaXNMYXN0PlxyXG5cdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0c2l6ZT1cInNtXCJcclxuXHRcdFx0XHRcdFx0XHRyb3VuZGVkPVwibWRcIlxyXG5cdFx0XHRcdFx0XHRcdGNvbG9yPVwicmVkLjUwMFwiXHJcblx0XHRcdFx0XHRcdFx0Ymc9XCJ3aGl0ZVwiXHJcblx0XHRcdFx0XHRcdFx0X2hvdmVyPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRiZzogW1wicHJpbWFyeS4xMDBcIiwgXCJwcmltYXJ5LjEwMFwiLCBcInByaW1hcnkuNjAwXCIsIFwicHJpbWFyeS42MDBcIl1cclxuXHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0Q3JlYXRlIEFjY291bnRcclxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHQ8L01lbnVJdGVtcz5cclxuXHRcdFx0XHQ8L0ZsZXg+XHJcblx0XHRcdDwvQm94PlxyXG5cdFx0PC9GbGV4PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=