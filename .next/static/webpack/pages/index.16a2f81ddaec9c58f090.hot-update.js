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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
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
              p: [3, 5, 7, 9],
              borderRadius: "lg",
              mx: "2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                mb: "2",
                color: "blue.700",
                children: title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
                bg: "pink.200",
                p: "2",
                borderRadius: "lg",
                mb: "2",
                color: "blue.700",
                children: dept
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                mb: "2",
                color: "blue.700",
                children: ["$ ", price]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
                color: "black",
                children: description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 9
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
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 8
            }, _this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 7
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkLmpzIl0sIm5hbWVzIjpbIkNhcmQiLCJjYXJkRGV0YWlscyIsIm1hcCIsImluZGV4IiwidGl0bGUiLCJkZXB0IiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImJnIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUM5QixzQkFDQztBQUFBLDRCQUNDLHFFQUFDLHVEQUFEO0FBQUEsNkJBQ0MscUVBQUMscURBQUQ7QUFBTSxVQUFFLEVBQUMsR0FBVDtBQUFhLFVBQUUsRUFBQyxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQU1DLHFFQUFDLDBEQUFEO0FBQUEsNkJBQ0MscUVBQUMscURBQUQ7QUFBTSx1QkFBZSxFQUFFLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCLGdCQUF0QixDQUF2QjtBQUFnRSxXQUFHLEVBQUUsQ0FBckU7QUFBQSxrQkFDRUMsNkNBQVcsQ0FBQ0MsR0FBWixDQUFnQixnQkFBc0NDLEtBQXRDO0FBQUEsY0FBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsY0FBVUMsSUFBVixRQUFVQSxJQUFWO0FBQUEsY0FBZ0JDLEtBQWhCLFFBQWdCQSxLQUFoQjtBQUFBLGNBQXVCQyxXQUF2QixRQUF1QkEsV0FBdkI7QUFBQSw4QkFDaEIscUVBQUMsdURBQUQ7QUFFQyxnQkFBSSxFQUFDLE1BRk47QUFHQyx1QkFBVyxFQUFDLEtBSGI7QUFJQyxjQUFFLEVBQUMsR0FKSjtBQUtDLHVCQUFXLEVBQUMsVUFMYjtBQU1DLHdCQUFZLEVBQUMsSUFOZDtBQU9DLGNBQUUsRUFBQyxHQVBKO0FBQUEsbUNBU0MscUVBQUMscURBQUQ7QUFBTSx1QkFBUyxFQUFDLFFBQWhCO0FBQXlCLGVBQUMsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsQ0FBNUI7QUFBMEMsMEJBQVksRUFBQyxJQUF2RDtBQUE0RCxnQkFBRSxFQUFDLEdBQS9EO0FBQUEsc0NBQ0MscUVBQUMscURBQUQ7QUFBTSxrQkFBRSxFQUFDLEdBQVQ7QUFBYSxxQkFBSyxFQUFDLFVBQW5CO0FBQUEsMEJBQ0VIO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERCxlQUlDLHFFQUFDLG9EQUFEO0FBQUssa0JBQUUsRUFBQyxVQUFSO0FBQW1CLGlCQUFDLEVBQUMsR0FBckI7QUFBeUIsNEJBQVksRUFBQyxJQUF0QztBQUEyQyxrQkFBRSxFQUFDLEdBQTlDO0FBQWtELHFCQUFLLEVBQUMsVUFBeEQ7QUFBQSwwQkFDRUM7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpELGVBT0MscUVBQUMscURBQUQ7QUFBTSxrQkFBRSxFQUFDLEdBQVQ7QUFBYSxxQkFBSyxFQUFDLFVBQW5CO0FBQUEsaUNBQ0lDLEtBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVBELGVBVUMscUVBQUMsb0RBQUQ7QUFBSyxxQkFBSyxFQUFDLE9BQVg7QUFBQSwwQkFBb0JDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBVkQsZUFXQyxxRUFBQyx1REFBRDtBQUFBLHVDQUNDLHFFQUFDLHVEQUFEO0FBQ0Msb0JBQUUsRUFBQyxVQURKO0FBRUMsdUJBQUssRUFBQyxTQUZQO0FBR0MsNkJBQVcsRUFBQyxLQUhiO0FBSUMsOEJBQVksRUFBQyxJQUpkO0FBS0MsbUJBQUMsRUFBQyxLQUxIO0FBTUMsbUJBQUMsRUFBQyxHQU5IO0FBT0Msd0JBQU0sRUFBRTtBQUNQQyxzQkFBRSxFQUFFLFVBREc7QUFFUEMseUJBQUssRUFBRTtBQUZBLG1CQVBUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFYRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFURCxhQUNNTixLQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGdCO0FBQUEsU0FBaEI7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5EO0FBQUEsa0JBREQ7QUFxREE7S0F0RHVCSCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjE2YTJmODFkZGFlYzljNThmMDkwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXh0LCBDZW50ZXIsIEZsZXgsIEJveCwgQ29udGFpbmVyLCBCdXR0b24sIEdyaWQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgY2FyZERldGFpbHMgZnJvbSBcIi4vZGF0YVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZCgpIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PENlbnRlcj5cclxuXHRcdFx0XHQ8VGV4dCBtYj1cIjNcIiBhcz1cImgxXCI+XHJcblx0XHRcdFx0XHRDaGVjayBvdXQgb3VyIHByb2R1Y3RzXHJcblx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHQ8L0NlbnRlcj5cclxuXHRcdFx0PENvbnRhaW5lcj5cclxuXHRcdFx0XHQ8R3JpZCB0ZW1wbGF0ZUNvbHVtbnM9e1tcIjFmclwiLCBcIjFmclwiLCBcIjFmclwiLCBcInJlcGVhdCgyLCAxZnIpXCJdfSBnYXA9ezZ9PlxyXG5cdFx0XHRcdFx0e2NhcmREZXRhaWxzLm1hcCgoeyB0aXRsZSwgZGVwdCwgcHJpY2UsIGRlc2NyaXB0aW9uIH0sIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHRcdDxDZW50ZXJcclxuXHRcdFx0XHRcdFx0XHRrZXk9e2luZGV4fVxyXG5cdFx0XHRcdFx0XHRcdG1heFc9XCIxMDAlXCJcclxuXHRcdFx0XHRcdFx0XHRib3JkZXJXaWR0aD1cIjFweFwiXHJcblx0XHRcdFx0XHRcdFx0bWI9XCIzXCJcclxuXHRcdFx0XHRcdFx0XHRib3JkZXJDb2xvcj1cImdyYXkuNDAwXCJcclxuXHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM9XCJsZ1wiXHJcblx0XHRcdFx0XHRcdFx0bXg9XCI1XCJcclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxGbGV4IGRpcmVjdGlvbj1cImNvbHVtblwiIHA9e1szLCA1LCA3LCA5XX0gYm9yZGVyUmFkaXVzPVwibGdcIiBteD1cIjJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxUZXh0IG1iPVwiMlwiIGNvbG9yPVwiYmx1ZS43MDBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e3RpdGxlfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PEJveCBiZz1cInBpbmsuMjAwXCIgcD1cIjJcIiBib3JkZXJSYWRpdXM9XCJsZ1wiIG1iPVwiMlwiIGNvbG9yPVwiYmx1ZS43MDBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2RlcHR9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdFx0XHRcdDxUZXh0IG1iPVwiMlwiIGNvbG9yPVwiYmx1ZS43MDBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0JCB7cHJpY2V9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Qm94IGNvbG9yPVwiYmxhY2tcIj57ZGVzY3JpcHRpb259PC9Cb3g+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Q2VudGVyPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ymc9XCJibHVlLjUwMFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I9XCJncmF5LjUwXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJXaWR0aD1cIjFweFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzPVwibGdcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHA9XCIxLjVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG09XCIyXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRfaG92ZXI9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJnOiBcImJsdWUuNjAwXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogXCJncmF5LjEwMFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEFkZCB0byBDYXJ0XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9DZW50ZXI+XHJcblx0XHRcdFx0XHRcdFx0PC9GbGV4PlxyXG5cdFx0XHRcdFx0XHQ8L0NlbnRlcj5cclxuXHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0PC9Db250YWluZXI+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=