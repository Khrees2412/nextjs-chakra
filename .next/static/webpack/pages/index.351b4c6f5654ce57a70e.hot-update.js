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
        templateColumns: ["1fr", "1fr"],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkLmpzIl0sIm5hbWVzIjpbIkNhcmQiLCJjYXJkRGV0YWlscyIsIm1hcCIsImluZGV4IiwidGl0bGUiLCJkZXB0IiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImJnIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUM5QixzQkFDQztBQUFBLDRCQUNDLHFFQUFDLHVEQUFEO0FBQUEsNkJBQ0MscUVBQUMscURBQUQ7QUFBTSxVQUFFLEVBQUMsR0FBVDtBQUFhLFVBQUUsRUFBQyxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQU1DLHFFQUFDLDBEQUFEO0FBQUEsNkJBQ0MscUVBQUMscURBQUQ7QUFBTSx1QkFBZSxFQUFFLENBQUMsS0FBRCxFQUFRLEtBQVIsQ0FBdkI7QUFBdUMsV0FBRyxFQUFFLENBQTVDO0FBQUEsa0JBQ0VDLDZDQUFXLENBQUNDLEdBQVosQ0FBZ0IsZ0JBQXNDQyxLQUF0QztBQUFBLGNBQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLGNBQVVDLElBQVYsUUFBVUEsSUFBVjtBQUFBLGNBQWdCQyxLQUFoQixRQUFnQkEsS0FBaEI7QUFBQSxjQUF1QkMsV0FBdkIsUUFBdUJBLFdBQXZCO0FBQUEsOEJBQ2hCLHFFQUFDLHVEQUFEO0FBRUMsZ0JBQUksRUFBQyxNQUZOO0FBR0MsdUJBQVcsRUFBQyxLQUhiO0FBSUMsY0FBRSxFQUFDLEdBSko7QUFLQyx1QkFBVyxFQUFDLFVBTGI7QUFNQyx3QkFBWSxFQUFDLElBTmQ7QUFPQyxjQUFFLEVBQUMsR0FQSjtBQUFBLG1DQVNDLHFFQUFDLHFEQUFEO0FBQU0sdUJBQVMsRUFBQyxRQUFoQjtBQUF5QixlQUFDLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLENBQTVCO0FBQTBDLDBCQUFZLEVBQUMsSUFBdkQ7QUFBNEQsZ0JBQUUsRUFBQyxHQUEvRDtBQUFBLHNDQUNDLHFFQUFDLHFEQUFEO0FBQU0sa0JBQUUsRUFBQyxHQUFUO0FBQWEscUJBQUssRUFBQyxVQUFuQjtBQUFBLDBCQUNFSDtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREQsZUFJQyxxRUFBQyxvREFBRDtBQUFLLGtCQUFFLEVBQUMsVUFBUjtBQUFtQixpQkFBQyxFQUFDLEdBQXJCO0FBQXlCLDRCQUFZLEVBQUMsSUFBdEM7QUFBMkMsa0JBQUUsRUFBQyxHQUE5QztBQUFrRCxxQkFBSyxFQUFDLFVBQXhEO0FBQUEsMEJBQ0VDO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKRCxlQU9DLHFFQUFDLHFEQUFEO0FBQU0sa0JBQUUsRUFBQyxHQUFUO0FBQWEscUJBQUssRUFBQyxVQUFuQjtBQUFBLGlDQUNJQyxLQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFQRCxlQVVDLHFFQUFDLG9EQUFEO0FBQUsscUJBQUssRUFBQyxPQUFYO0FBQUEsMEJBQW9CQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVZELGVBV0MscUVBQUMsdURBQUQ7QUFBQSx1Q0FDQyxxRUFBQyx1REFBRDtBQUNDLG9CQUFFLEVBQUMsVUFESjtBQUVDLHVCQUFLLEVBQUMsU0FGUDtBQUdDLDZCQUFXLEVBQUMsS0FIYjtBQUlDLDhCQUFZLEVBQUMsSUFKZDtBQUtDLG1CQUFDLEVBQUMsS0FMSDtBQU1DLG1CQUFDLEVBQUMsR0FOSDtBQU9DLHdCQUFNLEVBQUU7QUFDUEMsc0JBQUUsRUFBRSxVQURHO0FBRVBDLHlCQUFLLEVBQUU7QUFGQSxtQkFQVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBWEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEQsYUFDTU4sS0FETjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURnQjtBQUFBLFNBQWhCO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORDtBQUFBLGtCQUREO0FBcURBO0tBdER1QkgsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zNTFiNGM2ZjU2NTRjZTU3YTcwZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dCwgQ2VudGVyLCBGbGV4LCBCb3gsIENvbnRhaW5lciwgQnV0dG9uLCBHcmlkIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IGNhcmREZXRhaWxzIGZyb20gXCIuL2RhdGFcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmQoKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxDZW50ZXI+XHJcblx0XHRcdFx0PFRleHQgbWI9XCIzXCIgYXM9XCJoMVwiPlxyXG5cdFx0XHRcdFx0Q2hlY2sgb3V0IG91ciBwcm9kdWN0c1xyXG5cdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0PC9DZW50ZXI+XHJcblx0XHRcdDxDb250YWluZXI+XHJcblx0XHRcdFx0PEdyaWQgdGVtcGxhdGVDb2x1bW5zPXtbXCIxZnJcIiwgXCIxZnJcIl19IGdhcD17Nn0+XHJcblx0XHRcdFx0XHR7Y2FyZERldGFpbHMubWFwKCh7IHRpdGxlLCBkZXB0LCBwcmljZSwgZGVzY3JpcHRpb24gfSwgaW5kZXgpID0+IChcclxuXHRcdFx0XHRcdFx0PENlbnRlclxyXG5cdFx0XHRcdFx0XHRcdGtleT17aW5kZXh9XHJcblx0XHRcdFx0XHRcdFx0bWF4Vz1cIjEwMCVcIlxyXG5cdFx0XHRcdFx0XHRcdGJvcmRlcldpZHRoPVwiMXB4XCJcclxuXHRcdFx0XHRcdFx0XHRtYj1cIjNcIlxyXG5cdFx0XHRcdFx0XHRcdGJvcmRlckNvbG9yPVwiZ3JheS40MDBcIlxyXG5cdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1cz1cImxnXCJcclxuXHRcdFx0XHRcdFx0XHRteD1cIjVcIlxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCIgcD17WzMsIDUsIDcsIDldfSBib3JkZXJSYWRpdXM9XCJsZ1wiIG14PVwiMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFRleHQgbWI9XCIyXCIgY29sb3I9XCJibHVlLjcwMFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7dGl0bGV9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Qm94IGJnPVwicGluay4yMDBcIiBwPVwiMlwiIGJvcmRlclJhZGl1cz1cImxnXCIgbWI9XCIyXCIgY29sb3I9XCJibHVlLjcwMFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7ZGVwdH1cclxuXHRcdFx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0XHRcdFx0PFRleHQgbWI9XCIyXCIgY29sb3I9XCJibHVlLjcwMFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQkIHtwcmljZX1cclxuXHRcdFx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDxCb3ggY29sb3I9XCJibGFja1wiPntkZXNjcmlwdGlvbn08L0JveD5cclxuXHRcdFx0XHRcdFx0XHRcdDxDZW50ZXI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRiZz1cImJsdWUuNTAwXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcj1cImdyYXkuNTBcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlcldpZHRoPVwiMXB4XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM9XCJsZ1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cD1cIjEuNVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bT1cIjJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9ob3Zlcj17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ymc6IFwiYmx1ZS42MDBcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiBcImdyYXkuMTAwXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0QWRkIHRvIENhcnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0NlbnRlcj5cclxuXHRcdFx0XHRcdFx0XHQ8L0ZsZXg+XHJcblx0XHRcdFx0XHRcdDwvQ2VudGVyPlxyXG5cdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHQ8L0NvbnRhaW5lcj5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==