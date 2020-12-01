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
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Center"], {
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
              mb: "2",
              color: "blue.700",
              children: ["$ ", price]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkLmpzIl0sIm5hbWVzIjpbIkNhcmQiLCJjYXJkRGV0YWlscyIsIm1hcCIsImluZGV4IiwidGl0bGUiLCJkZXB0IiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImJnIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUM5QixzQkFDQztBQUFBLDRCQUNDLHFFQUFDLHVEQUFEO0FBQUEsNkJBQ0MscUVBQUMscURBQUQ7QUFBTSxVQUFFLEVBQUMsR0FBVDtBQUFhLFVBQUUsRUFBQyxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQU9DLHFFQUFDLHFEQUFEO0FBQU0scUJBQWUsRUFBRSxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixnQkFBdEIsQ0FBdkI7QUFBZ0UsU0FBRyxFQUFFLENBQXJFO0FBQUEsZ0JBQ0VDLDZDQUFXLENBQUNDLEdBQVosQ0FBZ0IsZ0JBQXNDQyxLQUF0QztBQUFBLFlBQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFlBQVVDLElBQVYsUUFBVUEsSUFBVjtBQUFBLFlBQWdCQyxLQUFoQixRQUFnQkEsS0FBaEI7QUFBQSxZQUF1QkMsV0FBdkIsUUFBdUJBLFdBQXZCO0FBQUEsNEJBQ2hCLHFFQUFDLHVEQUFEO0FBRUMsY0FBSSxFQUFDLE1BRk47QUFHQyxxQkFBVyxFQUFDLEtBSGI7QUFJQyxZQUFFLEVBQUMsR0FKSjtBQUtDLHFCQUFXLEVBQUMsVUFMYjtBQU1DLHNCQUFZLEVBQUMsSUFOZDtBQU9DLFlBQUUsRUFBQyxHQVBKO0FBQUEsaUNBU0MscUVBQUMscURBQUQ7QUFBTSxxQkFBUyxFQUFDLFFBQWhCO0FBQXlCLGFBQUMsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBQTVCO0FBQW9DLHdCQUFZLEVBQUMsSUFBakQ7QUFBc0QsY0FBRSxFQUFDLEdBQXpEO0FBQUEsb0NBQ0MscUVBQUMscURBQUQ7QUFBTSxnQkFBRSxFQUFDLEdBQVQ7QUFBYSxtQkFBSyxFQUFDLFVBQW5CO0FBQUEsd0JBQ0VIO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxlQUlDLHFFQUFDLG9EQUFEO0FBQUssZ0JBQUUsRUFBQyxVQUFSO0FBQW1CLGdCQUFFLEVBQUMsTUFBdEI7QUFBNkIsZUFBQyxFQUFDLEdBQS9CO0FBQW1DLDBCQUFZLEVBQUMsSUFBaEQ7QUFBcUQsZ0JBQUUsRUFBQyxHQUF4RDtBQUE0RCxtQkFBSyxFQUFDLFVBQWxFO0FBQUEsd0JBQ0VDO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRCxlQU9DLHFFQUFDLHFEQUFEO0FBQU0sZ0JBQUUsRUFBQyxHQUFUO0FBQWEsbUJBQUssRUFBQyxVQUFuQjtBQUFBLCtCQUNJQyxLQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRCxlQVVDLHFFQUFDLG9EQUFEO0FBQUssbUJBQUssRUFBQyxPQUFYO0FBQUEsd0JBQW9CQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVZELGVBV0MscUVBQUMsdURBQUQ7QUFBQSxxQ0FDQyxxRUFBQyx1REFBRDtBQUNDLGtCQUFFLEVBQUMsVUFESjtBQUVDLHFCQUFLLEVBQUMsU0FGUDtBQUdDLDJCQUFXLEVBQUMsS0FIYjtBQUlDLDRCQUFZLEVBQUMsSUFKZDtBQUtDLGlCQUFDLEVBQUMsS0FMSDtBQU1DLGlCQUFDLEVBQUMsR0FOSDtBQU9DLHNCQUFNLEVBQUU7QUFDUEMsb0JBQUUsRUFBRSxVQURHO0FBRVBDLHVCQUFLLEVBQUU7QUFGQSxpQkFQVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBWEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEQsV0FDTU4sS0FETjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURnQjtBQUFBLE9BQWhCO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBEO0FBQUEsa0JBREQ7QUFvREE7S0FyRHVCSCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZjNTljNDllZDQyM2U3YmRkYTgyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXh0LCBDZW50ZXIsIEZsZXgsIEJveCwgQ29udGFpbmVyLCBCdXR0b24sIEdyaWQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgY2FyZERldGFpbHMgZnJvbSBcIi4vZGF0YVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZCgpIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PENlbnRlcj5cclxuXHRcdFx0XHQ8VGV4dCBtYj1cIjNcIiBhcz1cImgxXCI+XHJcblx0XHRcdFx0XHRDaGVjayBvdXQgb3VyIHByb2R1Y3RzXHJcblx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHQ8L0NlbnRlcj5cclxuXHJcblx0XHRcdDxHcmlkIHRlbXBsYXRlQ29sdW1ucz17W1wiMWZyXCIsIFwiMWZyXCIsIFwiMWZyXCIsIFwicmVwZWF0KDIsIDFmcilcIl19IGdhcD17Nn0+XHJcblx0XHRcdFx0e2NhcmREZXRhaWxzLm1hcCgoeyB0aXRsZSwgZGVwdCwgcHJpY2UsIGRlc2NyaXB0aW9uIH0sIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHQ8Q2VudGVyXHJcblx0XHRcdFx0XHRcdGtleT17aW5kZXh9XHJcblx0XHRcdFx0XHRcdG1heFc9XCIxMDAlXCJcclxuXHRcdFx0XHRcdFx0Ym9yZGVyV2lkdGg9XCIxcHhcIlxyXG5cdFx0XHRcdFx0XHRtYj1cIjNcIlxyXG5cdFx0XHRcdFx0XHRib3JkZXJDb2xvcj1cImdyYXkuNDAwXCJcclxuXHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzPVwibGdcIlxyXG5cdFx0XHRcdFx0XHRteD1cIjVcIlxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8RmxleCBkaXJlY3Rpb249XCJjb2x1bW5cIiBwPXtbMywgNV19IGJvcmRlclJhZGl1cz1cImxnXCIgbXg9XCIyXCI+XHJcblx0XHRcdFx0XHRcdFx0PFRleHQgbWI9XCIyXCIgY29sb3I9XCJibHVlLjcwMFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0e3RpdGxlfVxyXG5cdFx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8Qm94IGJnPVwicGluay4yMDBcIiBtcj1cImF1dG9cIiBwPVwiMlwiIGJvcmRlclJhZGl1cz1cImxnXCIgbWI9XCIyXCIgY29sb3I9XCJibHVlLjcwMFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0e2RlcHR9XHJcblx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdFx0PFRleHQgbWI9XCIyXCIgY29sb3I9XCJibHVlLjcwMFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0JCB7cHJpY2V9XHJcblx0XHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDxCb3ggY29sb3I9XCJibGFja1wiPntkZXNjcmlwdGlvbn08L0JveD5cclxuXHRcdFx0XHRcdFx0XHQ8Q2VudGVyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRiZz1cImJsdWUuNTAwXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I9XCJncmF5LjUwXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyV2lkdGg9XCIxcHhcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM9XCJsZ1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdHA9XCIxLjVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRtPVwiMlwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdF9ob3Zlcj17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJnOiBcImJsdWUuNjAwXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6IFwiZ3JheS4xMDBcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRBZGQgdG8gQ2FydFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0PC9DZW50ZXI+XHJcblx0XHRcdFx0XHRcdDwvRmxleD5cclxuXHRcdFx0XHRcdDwvQ2VudGVyPlxyXG5cdFx0XHRcdCkpfVxyXG5cdFx0XHQ8L0dyaWQ+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=