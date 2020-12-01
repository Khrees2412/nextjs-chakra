webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./components/data.js");


var _jsxFileName = "C:\\Users\\john\\Desktop\\next-pro\\components\\Card.js";


function Card() {
  var _this = this;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Center"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        mb: "3",
        as: "h1",
        fontWeight: "bold",
        fontSize: "20px",
        children: "Check out our products"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      templateColumns: ["1fr", "1fr", "1fr", "repeat(2, 1fr)"],
      gap: 6,
      children: _data__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (_ref, index) {
        var title = _ref.title,
            dept = _ref.dept,
            price = _ref.price,
            description = _ref.description;
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
          maxW: "100%",
          borderWidth: "1px",
          mb: "3",
          borderColor: "gray.400",
          borderRadius: "lg",
          mx: "5",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
            direction: "column",
            p: [3, 5],
            borderRadius: "lg",
            mx: "2",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
              mb: "2",
              color: "blue.700",
              children: title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
              bg: "pink.200",
              mr: "auto",
              p: "2",
              borderRadius: "lg",
              mb: "2",
              color: "blue.700",
              children: dept
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
              bg: "green.200",
              color: "blue.700",
              mb: "2",
              mr: "auto",
              p: "2",
              borderRadius: "lg",
              children: ["$ ", price]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
              color: "black",
              children: description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Center"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
                bg: "blue.500",
                color: "gray.50",
                borderWidth: "1px",
                borderRadius: "lg",
                p: "1.5",
                m: "2",
                _hover: {
                  bg: "blue.600",
                  color: "gray.100"
                },
                children: "Add to Cart"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 7
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 6
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }, this)]
  }, void 0, true);
}
_c = Card;

var _c;

$RefreshReg$(_c, "Card");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkLmpzIl0sIm5hbWVzIjpbIkNhcmQiLCJjYXJkRGV0YWlscyIsIm1hcCIsImluZGV4IiwidGl0bGUiLCJkZXB0IiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImJnIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUM5QixzQkFDQztBQUFBLDRCQUNDLHFFQUFDLHVEQUFEO0FBQUEsNkJBQ0MscUVBQUMscURBQUQ7QUFBTSxVQUFFLEVBQUMsR0FBVDtBQUFhLFVBQUUsRUFBQyxJQUFoQjtBQUFxQixrQkFBVSxFQUFDLE1BQWhDO0FBQXVDLGdCQUFRLEVBQUMsTUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFPQyxxRUFBQyxxREFBRDtBQUFNLHFCQUFlLEVBQUUsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsRUFBc0IsZ0JBQXRCLENBQXZCO0FBQWdFLFNBQUcsRUFBRSxDQUFyRTtBQUFBLGdCQUNFQyw2Q0FBVyxDQUFDQyxHQUFaLENBQWdCLGdCQUFzQ0MsS0FBdEM7QUFBQSxZQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxZQUFVQyxJQUFWLFFBQVVBLElBQVY7QUFBQSxZQUFnQkMsS0FBaEIsUUFBZ0JBLEtBQWhCO0FBQUEsWUFBdUJDLFdBQXZCLFFBQXVCQSxXQUF2QjtBQUFBLDRCQUNoQixxRUFBQyxvREFBRDtBQUVDLGNBQUksRUFBQyxNQUZOO0FBR0MscUJBQVcsRUFBQyxLQUhiO0FBSUMsWUFBRSxFQUFDLEdBSko7QUFLQyxxQkFBVyxFQUFDLFVBTGI7QUFNQyxzQkFBWSxFQUFDLElBTmQ7QUFPQyxZQUFFLEVBQUMsR0FQSjtBQUFBLGlDQVNDLHFFQUFDLHFEQUFEO0FBQU0scUJBQVMsRUFBQyxRQUFoQjtBQUF5QixhQUFDLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUE1QjtBQUFvQyx3QkFBWSxFQUFDLElBQWpEO0FBQXNELGNBQUUsRUFBQyxHQUF6RDtBQUFBLG9DQUNDLHFFQUFDLHFEQUFEO0FBQU0sZ0JBQUUsRUFBQyxHQUFUO0FBQWEsbUJBQUssRUFBQyxVQUFuQjtBQUFBLHdCQUNFSDtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZUFJQyxxRUFBQyxvREFBRDtBQUFLLGdCQUFFLEVBQUMsVUFBUjtBQUFtQixnQkFBRSxFQUFDLE1BQXRCO0FBQTZCLGVBQUMsRUFBQyxHQUEvQjtBQUFtQywwQkFBWSxFQUFDLElBQWhEO0FBQXFELGdCQUFFLEVBQUMsR0FBeEQ7QUFBNEQsbUJBQUssRUFBQyxVQUFsRTtBQUFBLHdCQUNFQztBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkQsZUFPQyxxRUFBQyxxREFBRDtBQUFNLGdCQUFFLEVBQUMsV0FBVDtBQUFxQixtQkFBSyxFQUFDLFVBQTNCO0FBQXNDLGdCQUFFLEVBQUMsR0FBekM7QUFBNkMsZ0JBQUUsRUFBQyxNQUFoRDtBQUF1RCxlQUFDLEVBQUMsR0FBekQ7QUFBNkQsMEJBQVksRUFBQyxJQUExRTtBQUFBLCtCQUNJQyxLQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRCxlQVVDLHFFQUFDLHFEQUFEO0FBQU0sbUJBQUssRUFBQyxPQUFaO0FBQUEsd0JBQXFCQztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVZELGVBV0MscUVBQUMsdURBQUQ7QUFBQSxxQ0FDQyxxRUFBQyx1REFBRDtBQUNDLGtCQUFFLEVBQUMsVUFESjtBQUVDLHFCQUFLLEVBQUMsU0FGUDtBQUdDLDJCQUFXLEVBQUMsS0FIYjtBQUlDLDRCQUFZLEVBQUMsSUFKZDtBQUtDLGlCQUFDLEVBQUMsS0FMSDtBQU1DLGlCQUFDLEVBQUMsR0FOSDtBQU9DLHNCQUFNLEVBQUU7QUFDUEMsb0JBQUUsRUFBRSxVQURHO0FBRVBDLHVCQUFLLEVBQUU7QUFGQSxpQkFQVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBWEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEQsV0FDTU4sS0FETjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURnQjtBQUFBLE9BQWhCO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBEO0FBQUEsa0JBREQ7QUFvREE7S0FyRHVCSCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjhiNTQyNTc3ZmIxMjgxOTE0YTNhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXh0LCBDZW50ZXIsIEZsZXgsIEJveCwgQnV0dG9uLCBHcmlkIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IGNhcmREZXRhaWxzIGZyb20gXCIuL2RhdGFcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmQoKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxDZW50ZXI+XHJcblx0XHRcdFx0PFRleHQgbWI9XCIzXCIgYXM9XCJoMVwiIGZvbnRXZWlnaHQ9XCJib2xkXCIgZm9udFNpemU9XCIyMHB4XCI+XHJcblx0XHRcdFx0XHRDaGVjayBvdXQgb3VyIHByb2R1Y3RzXHJcblx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHQ8L0NlbnRlcj5cclxuXHJcblx0XHRcdDxHcmlkIHRlbXBsYXRlQ29sdW1ucz17W1wiMWZyXCIsIFwiMWZyXCIsIFwiMWZyXCIsIFwicmVwZWF0KDIsIDFmcilcIl19IGdhcD17Nn0+XHJcblx0XHRcdFx0e2NhcmREZXRhaWxzLm1hcCgoeyB0aXRsZSwgZGVwdCwgcHJpY2UsIGRlc2NyaXB0aW9uIH0sIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHQ8Qm94XHJcblx0XHRcdFx0XHRcdGtleT17aW5kZXh9XHJcblx0XHRcdFx0XHRcdG1heFc9XCIxMDAlXCJcclxuXHRcdFx0XHRcdFx0Ym9yZGVyV2lkdGg9XCIxcHhcIlxyXG5cdFx0XHRcdFx0XHRtYj1cIjNcIlxyXG5cdFx0XHRcdFx0XHRib3JkZXJDb2xvcj1cImdyYXkuNDAwXCJcclxuXHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzPVwibGdcIlxyXG5cdFx0XHRcdFx0XHRteD1cIjVcIlxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8RmxleCBkaXJlY3Rpb249XCJjb2x1bW5cIiBwPXtbMywgNV19IGJvcmRlclJhZGl1cz1cImxnXCIgbXg9XCIyXCI+XHJcblx0XHRcdFx0XHRcdFx0PFRleHQgbWI9XCIyXCIgY29sb3I9XCJibHVlLjcwMFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0e3RpdGxlfVxyXG5cdFx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8Qm94IGJnPVwicGluay4yMDBcIiBtcj1cImF1dG9cIiBwPVwiMlwiIGJvcmRlclJhZGl1cz1cImxnXCIgbWI9XCIyXCIgY29sb3I9XCJibHVlLjcwMFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0e2RlcHR9XHJcblx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdFx0PFRleHQgYmc9XCJncmVlbi4yMDBcIiBjb2xvcj1cImJsdWUuNzAwXCIgbWI9XCIyXCIgbXI9XCJhdXRvXCIgcD1cIjJcIiBib3JkZXJSYWRpdXM9XCJsZ1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0JCB7cHJpY2V9XHJcblx0XHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDxUZXh0IGNvbG9yPVwiYmxhY2tcIj57ZGVzY3JpcHRpb259PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDxDZW50ZXI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdGJnPVwiYmx1ZS41MDBcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb2xvcj1cImdyYXkuNTBcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJXaWR0aD1cIjFweFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1cz1cImxnXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0cD1cIjEuNVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdG09XCIyXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0X2hvdmVyPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ymc6IFwiYmx1ZS42MDBcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogXCJncmF5LjEwMFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdEFkZCB0byBDYXJ0XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHQ8L0NlbnRlcj5cclxuXHRcdFx0XHRcdFx0PC9GbGV4PlxyXG5cdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0KSl9XHJcblx0XHRcdDwvR3JpZD5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==