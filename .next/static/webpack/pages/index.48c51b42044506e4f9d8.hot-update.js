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

      /*#__PURE__*/
      Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Center"], {
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

/***/ }),

/***/ "./components/data.js":
/*!****************************!*\
  !*** ./components/data.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_0__);

var cardDetails = [{
  title: faker__WEBPACK_IMPORTED_MODULE_0___default.a.commerce.productName(),
  dept: faker__WEBPACK_IMPORTED_MODULE_0___default.a.commerce.department(),
  price: faker__WEBPACK_IMPORTED_MODULE_0___default.a.commerce.price(),
  description: faker__WEBPACK_IMPORTED_MODULE_0___default.a.commerce.productDescription()
}, {
  title: faker__WEBPACK_IMPORTED_MODULE_0___default.a.commerce.productName(),
  dept: faker__WEBPACK_IMPORTED_MODULE_0___default.a.commerce.department(),
  price: faker__WEBPACK_IMPORTED_MODULE_0___default.a.commerce.price(),
  description: faker__WEBPACK_IMPORTED_MODULE_0___default.a.commerce.productDescription()
}, {
  title: faker__WEBPACK_IMPORTED_MODULE_0___default.a.commerce.productName(),
  dept: faker__WEBPACK_IMPORTED_MODULE_0___default.a.commerce.department(),
  price: faker__WEBPACK_IMPORTED_MODULE_0___default.a.commerce.price(),
  description: faker__WEBPACK_IMPORTED_MODULE_0___default.a.commerce.productDescription()
}, {
  title: faker__WEBPACK_IMPORTED_MODULE_0___default.a.commerce.productName(),
  dept: faker__WEBPACK_IMPORTED_MODULE_0___default.a.commerce.department(),
  price: faker__WEBPACK_IMPORTED_MODULE_0___default.a.commerce.price(),
  description: faker__WEBPACK_IMPORTED_MODULE_0___default.a.commerce.productDescription()
}];
/* harmony default export */ __webpack_exports__["default"] = (cardDetails);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2RhdGEuanMiXSwibmFtZXMiOlsiQ2FyZCIsImNhcmREZXRhaWxzIiwibWFwIiwiaW5kZXgiLCJ0aXRsZSIsImRlcGFydG1lbnQiLCJwcmljZSIsInByb2R1Y3REZXNjcmlwdGlvbiIsImZha2VyIiwiY29tbWVyY2UiLCJwcm9kdWN0TmFtZSIsImRlcHQiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQzlCLHNCQUNDO0FBQUEsY0FDRUMsNkNBQVcsQ0FBQ0MsR0FBWixDQUFnQixnQkFBbURDLEtBQW5ELEVBQTZEO0FBQUEsVUFBMURDLEtBQTBELFFBQTFEQSxLQUEwRDtBQUFBLFVBQW5EQyxVQUFtRCxRQUFuREEsVUFBbUQ7QUFBQSxVQUF2Q0MsS0FBdUMsUUFBdkNBLEtBQXVDO0FBQUEsVUFBaENDLGtCQUFnQyxRQUFoQ0Esa0JBQWdDOztBQUM3RTtBQUFBLDJFQUFDLHVEQUFEO0FBQW9CLFlBQUksRUFBQyxJQUF6QjtBQUE4QixtQkFBVyxFQUFDLEtBQTFDO0FBQWdELG1CQUFXLEVBQUMsU0FBNUQ7QUFBc0Usb0JBQVksRUFBQyxJQUFuRjtBQUF3RixVQUFFLEVBQUMsR0FBM0Y7QUFBQSwrQkFDQyxxRUFBQyxxREFBRDtBQUFNLG1CQUFTLEVBQUMsUUFBaEI7QUFBeUIsV0FBQyxFQUFDLEdBQTNCO0FBQStCLFlBQUUsRUFBQyxVQUFsQztBQUE2QyxzQkFBWSxFQUFDLElBQTFEO0FBQStELFlBQUUsRUFBQyxHQUFsRTtBQUFBLGtDQUNDLHFFQUFDLHFEQUFEO0FBQU0sY0FBRSxFQUFDLEdBQVQ7QUFBYSxpQkFBSyxFQUFDLFVBQW5CO0FBQUEsc0JBQ0VIO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERCxlQUlDLHFFQUFDLHFEQUFEO0FBQU0sY0FBRSxFQUFDLEdBQVQ7QUFBYSxpQkFBSyxFQUFDLFVBQW5CO0FBQUEsc0JBQ0VDO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRCxlQU9DLHFFQUFDLHFEQUFEO0FBQU0sY0FBRSxFQUFDLEdBQVQ7QUFBYSxpQkFBSyxFQUFDLFVBQW5CO0FBQUEsc0JBQ0VDO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRCxlQVVDLHFFQUFDLG9EQUFEO0FBQUssY0FBRSxFQUFDLFVBQVI7QUFBbUIsaUJBQUssRUFBQyxPQUF6QjtBQUFBLHNCQUNFQztBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsU0FBYUosS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZ0JBLEtBakJBO0FBREYsbUJBREQ7QUFzQkE7S0F2QnVCSCxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSHhCO0FBQUE7QUFBQTtBQUFBO0FBRUEsSUFBTUMsV0FBVyxHQUFHLENBQ25CO0FBQ0NHLE9BQUssRUFBRUksNENBQUssQ0FBQ0MsUUFBTixDQUFlQyxXQUFmLEVBRFI7QUFFQ0MsTUFBSSxFQUFFSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWVKLFVBQWYsRUFGUDtBQUdDQyxPQUFLLEVBQUVFLDRDQUFLLENBQUNDLFFBQU4sQ0FBZUgsS0FBZixFQUhSO0FBSUNNLGFBQVcsRUFBRUosNENBQUssQ0FBQ0MsUUFBTixDQUFlRixrQkFBZjtBQUpkLENBRG1CLEVBT25CO0FBQ0NILE9BQUssRUFBRUksNENBQUssQ0FBQ0MsUUFBTixDQUFlQyxXQUFmLEVBRFI7QUFFQ0MsTUFBSSxFQUFFSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWVKLFVBQWYsRUFGUDtBQUdDQyxPQUFLLEVBQUVFLDRDQUFLLENBQUNDLFFBQU4sQ0FBZUgsS0FBZixFQUhSO0FBSUNNLGFBQVcsRUFBRUosNENBQUssQ0FBQ0MsUUFBTixDQUFlRixrQkFBZjtBQUpkLENBUG1CLEVBYW5CO0FBQ0NILE9BQUssRUFBRUksNENBQUssQ0FBQ0MsUUFBTixDQUFlQyxXQUFmLEVBRFI7QUFFQ0MsTUFBSSxFQUFFSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWVKLFVBQWYsRUFGUDtBQUdDQyxPQUFLLEVBQUVFLDRDQUFLLENBQUNDLFFBQU4sQ0FBZUgsS0FBZixFQUhSO0FBSUNNLGFBQVcsRUFBRUosNENBQUssQ0FBQ0MsUUFBTixDQUFlRixrQkFBZjtBQUpkLENBYm1CLEVBbUJuQjtBQUNDSCxPQUFLLEVBQUVJLDRDQUFLLENBQUNDLFFBQU4sQ0FBZUMsV0FBZixFQURSO0FBRUNDLE1BQUksRUFBRUgsNENBQUssQ0FBQ0MsUUFBTixDQUFlSixVQUFmLEVBRlA7QUFHQ0MsT0FBSyxFQUFFRSw0Q0FBSyxDQUFDQyxRQUFOLENBQWVILEtBQWYsRUFIUjtBQUlDTSxhQUFXLEVBQUVKLDRDQUFLLENBQUNDLFFBQU4sQ0FBZUYsa0JBQWY7QUFKZCxDQW5CbUIsQ0FBcEI7QUEwQmVOLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ4YzUxYjQyMDQ0NTA2ZTRmOWQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXh0LCBDZW50ZXIsIEZsZXgsIEJveCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBjYXJkRGV0YWlscyBmcm9tIFwiLi9kYXRhXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJkKCkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHR7Y2FyZERldGFpbHMubWFwKCh7IHRpdGxlLCBkZXBhcnRtZW50LCBwcmljZSwgcHJvZHVjdERlc2NyaXB0aW9uIH0sIGluZGV4KSA9PiB7XHJcblx0XHRcdFx0PENlbnRlciBrZXk9e2luZGV4fSBtYXhXPVwic21cIiBib3JkZXJXaWR0aD1cIjFweFwiIGJvcmRlckNvbG9yPVwicmVkLjQwMFwiIGJvcmRlclJhZGl1cz1cImxnXCIgbXg9XCI1XCI+XHJcblx0XHRcdFx0XHQ8RmxleCBkaXJlY3Rpb249XCJjb2x1bW5cIiBwPVwiM1wiIGJnPVwiZ3JheS4yMDBcIiBib3JkZXJSYWRpdXM9XCJsZ1wiIG14PVwiMlwiPlxyXG5cdFx0XHRcdFx0XHQ8VGV4dCBtYj1cIjJcIiBjb2xvcj1cImJsdWUuNzAwXCI+XHJcblx0XHRcdFx0XHRcdFx0e3RpdGxlfVxyXG5cdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHRcdDxUZXh0IG1iPVwiMlwiIGNvbG9yPVwiYmx1ZS43MDBcIj5cclxuXHRcdFx0XHRcdFx0XHR7ZGVwYXJ0bWVudH1cclxuXHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHQ8VGV4dCBtYj1cIjJcIiBjb2xvcj1cImJsdWUuNzAwXCI+XHJcblx0XHRcdFx0XHRcdFx0e3ByaWNlfVxyXG5cdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHRcdDxCb3ggYmc9XCJwaW5rLjQwMFwiIGNvbG9yPVwiYmxhY2tcIj5cclxuXHRcdFx0XHRcdFx0XHR7cHJvZHVjdERlc2NyaXB0aW9ufVxyXG5cdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdDwvRmxleD5cclxuXHRcdFx0XHQ8L0NlbnRlcj47XHJcblx0XHRcdH0pfVxyXG5cdFx0PC8+XHJcblx0KTtcclxufVxyXG4iLCJpbXBvcnQgZmFrZXIgZnJvbSBcImZha2VyXCI7XHJcblxyXG5jb25zdCBjYXJkRGV0YWlscyA9IFtcclxuXHR7XHJcblx0XHR0aXRsZTogZmFrZXIuY29tbWVyY2UucHJvZHVjdE5hbWUoKSxcclxuXHRcdGRlcHQ6IGZha2VyLmNvbW1lcmNlLmRlcGFydG1lbnQoKSxcclxuXHRcdHByaWNlOiBmYWtlci5jb21tZXJjZS5wcmljZSgpLFxyXG5cdFx0ZGVzY3JpcHRpb246IGZha2VyLmNvbW1lcmNlLnByb2R1Y3REZXNjcmlwdGlvbigpXHJcblx0fSxcclxuXHR7XHJcblx0XHR0aXRsZTogZmFrZXIuY29tbWVyY2UucHJvZHVjdE5hbWUoKSxcclxuXHRcdGRlcHQ6IGZha2VyLmNvbW1lcmNlLmRlcGFydG1lbnQoKSxcclxuXHRcdHByaWNlOiBmYWtlci5jb21tZXJjZS5wcmljZSgpLFxyXG5cdFx0ZGVzY3JpcHRpb246IGZha2VyLmNvbW1lcmNlLnByb2R1Y3REZXNjcmlwdGlvbigpXHJcblx0fSxcclxuXHR7XHJcblx0XHR0aXRsZTogZmFrZXIuY29tbWVyY2UucHJvZHVjdE5hbWUoKSxcclxuXHRcdGRlcHQ6IGZha2VyLmNvbW1lcmNlLmRlcGFydG1lbnQoKSxcclxuXHRcdHByaWNlOiBmYWtlci5jb21tZXJjZS5wcmljZSgpLFxyXG5cdFx0ZGVzY3JpcHRpb246IGZha2VyLmNvbW1lcmNlLnByb2R1Y3REZXNjcmlwdGlvbigpXHJcblx0fSxcclxuXHR7XHJcblx0XHR0aXRsZTogZmFrZXIuY29tbWVyY2UucHJvZHVjdE5hbWUoKSxcclxuXHRcdGRlcHQ6IGZha2VyLmNvbW1lcmNlLmRlcGFydG1lbnQoKSxcclxuXHRcdHByaWNlOiBmYWtlci5jb21tZXJjZS5wcmljZSgpLFxyXG5cdFx0ZGVzY3JpcHRpb246IGZha2VyLmNvbW1lcmNlLnByb2R1Y3REZXNjcmlwdGlvbigpXHJcblx0fVxyXG5dO1xyXG5leHBvcnQgZGVmYXVsdCBjYXJkRGV0YWlscztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==