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
    children: _data__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (_ref, index) {
      var title = _ref.title,
          department = _ref.department,
          price = _ref.price,
          productDescription = _ref.productDescription;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Center"], {
        maxW: "sm",
        borderWidth: "1px",
        borderColor: "red.400",
        borderRadius: "lg",
        mx: "5",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
          direction: "column",
          p: "3",
          bg: "gray.200",
          borderRadius: "lg",
          mx: "2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
            mb: "2",
            color: "blue.700",
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
            mb: "2",
            color: "blue.700",
            children: department
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
            mb: "2",
            color: "blue.700",
            children: price
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
            bg: "pink.400",
            color: "black",
            children: productDescription
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 6
        }, _this)
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 5
      }, _this);
    })
  }, void 0, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkLmpzIl0sIm5hbWVzIjpbIkNhcmQiLCJjYXJkRGV0YWlscyIsIm1hcCIsImluZGV4IiwidGl0bGUiLCJkZXBhcnRtZW50IiwicHJpY2UiLCJwcm9kdWN0RGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUM5QixzQkFDQztBQUFBLGNBQ0VDLDZDQUFXLENBQUNDLEdBQVosQ0FBZ0IsZ0JBQW1EQyxLQUFuRDtBQUFBLFVBQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFVBQVVDLFVBQVYsUUFBVUEsVUFBVjtBQUFBLFVBQXNCQyxLQUF0QixRQUFzQkEsS0FBdEI7QUFBQSxVQUE2QkMsa0JBQTdCLFFBQTZCQSxrQkFBN0I7QUFBQSwwQkFDaEIscUVBQUMsdURBQUQ7QUFBb0IsWUFBSSxFQUFDLElBQXpCO0FBQThCLG1CQUFXLEVBQUMsS0FBMUM7QUFBZ0QsbUJBQVcsRUFBQyxTQUE1RDtBQUFzRSxvQkFBWSxFQUFDLElBQW5GO0FBQXdGLFVBQUUsRUFBQyxHQUEzRjtBQUFBLCtCQUNDLHFFQUFDLHFEQUFEO0FBQU0sbUJBQVMsRUFBQyxRQUFoQjtBQUF5QixXQUFDLEVBQUMsR0FBM0I7QUFBK0IsWUFBRSxFQUFDLFVBQWxDO0FBQTZDLHNCQUFZLEVBQUMsSUFBMUQ7QUFBK0QsWUFBRSxFQUFDLEdBQWxFO0FBQUEsa0NBQ0MscUVBQUMscURBQUQ7QUFBTSxjQUFFLEVBQUMsR0FBVDtBQUFhLGlCQUFLLEVBQUMsVUFBbkI7QUFBQSxzQkFDRUg7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELGVBSUMscUVBQUMscURBQUQ7QUFBTSxjQUFFLEVBQUMsR0FBVDtBQUFhLGlCQUFLLEVBQUMsVUFBbkI7QUFBQSxzQkFDRUM7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpELGVBT0MscUVBQUMscURBQUQ7QUFBTSxjQUFFLEVBQUMsR0FBVDtBQUFhLGlCQUFLLEVBQUMsVUFBbkI7QUFBQSxzQkFDRUM7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBELGVBVUMscUVBQUMsb0RBQUQ7QUFBSyxjQUFFLEVBQUMsVUFBUjtBQUFtQixpQkFBSyxFQUFDLE9BQXpCO0FBQUEsc0JBQ0VDO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxTQUFhSixLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEZ0I7QUFBQSxLQUFoQjtBQURGLG1CQUREO0FBc0JBO0tBdkJ1QkgsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41YmQ4YjcxZjY2ODMwY2JlMzlhZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dCwgQ2VudGVyLCBGbGV4LCBCb3ggfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgY2FyZERldGFpbHMgZnJvbSBcIi4vZGF0YVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZCgpIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0e2NhcmREZXRhaWxzLm1hcCgoeyB0aXRsZSwgZGVwYXJ0bWVudCwgcHJpY2UsIHByb2R1Y3REZXNjcmlwdGlvbiB9LCBpbmRleCkgPT4gKFxyXG5cdFx0XHRcdDxDZW50ZXIga2V5PXtpbmRleH0gbWF4Vz1cInNtXCIgYm9yZGVyV2lkdGg9XCIxcHhcIiBib3JkZXJDb2xvcj1cInJlZC40MDBcIiBib3JkZXJSYWRpdXM9XCJsZ1wiIG14PVwiNVwiPlxyXG5cdFx0XHRcdFx0PEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCIgcD1cIjNcIiBiZz1cImdyYXkuMjAwXCIgYm9yZGVyUmFkaXVzPVwibGdcIiBteD1cIjJcIj5cclxuXHRcdFx0XHRcdFx0PFRleHQgbWI9XCIyXCIgY29sb3I9XCJibHVlLjcwMFwiPlxyXG5cdFx0XHRcdFx0XHRcdHt0aXRsZX1cclxuXHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHQ8VGV4dCBtYj1cIjJcIiBjb2xvcj1cImJsdWUuNzAwXCI+XHJcblx0XHRcdFx0XHRcdFx0e2RlcGFydG1lbnR9XHJcblx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdFx0PFRleHQgbWI9XCIyXCIgY29sb3I9XCJibHVlLjcwMFwiPlxyXG5cdFx0XHRcdFx0XHRcdHtwcmljZX1cclxuXHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHQ8Qm94IGJnPVwicGluay40MDBcIiBjb2xvcj1cImJsYWNrXCI+XHJcblx0XHRcdFx0XHRcdFx0e3Byb2R1Y3REZXNjcmlwdGlvbn1cclxuXHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHQ8L0ZsZXg+XHJcblx0XHRcdFx0PC9DZW50ZXI+XHJcblx0XHRcdCkpfVxyXG5cdFx0PC8+XHJcblx0KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9