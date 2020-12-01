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
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\john\\Desktop\\next-pro\\components\\Card.js";


var cardDetails = [{
  title: faker__WEBPACK_IMPORTED_MODULE_2___default.a.commerce.prductName(),
  dept: faker__WEBPACK_IMPORTED_MODULE_2___default.a.commerce.department(),
  price: faker__WEBPACK_IMPORTED_MODULE_2___default.a.commerce.price(),
  description: faker__WEBPACK_IMPORTED_MODULE_2___default.a.commerce.productDescription()
}, {
  title: faker__WEBPACK_IMPORTED_MODULE_2___default.a.commerce.prductName(),
  dept: faker__WEBPACK_IMPORTED_MODULE_2___default.a.commerce.department(),
  price: faker__WEBPACK_IMPORTED_MODULE_2___default.a.commerce.price(),
  description: faker__WEBPACK_IMPORTED_MODULE_2___default.a.commerce.productDescription()
}, {
  title: faker__WEBPACK_IMPORTED_MODULE_2___default.a.commerce.prductName(),
  dept: faker__WEBPACK_IMPORTED_MODULE_2___default.a.commerce.department(),
  price: faker__WEBPACK_IMPORTED_MODULE_2___default.a.commerce.price(),
  description: faker__WEBPACK_IMPORTED_MODULE_2___default.a.commerce.productDescription()
}, {
  title: faker__WEBPACK_IMPORTED_MODULE_2___default.a.commerce.prductName(),
  dept: faker__WEBPACK_IMPORTED_MODULE_2___default.a.commerce.department(),
  price: faker__WEBPACK_IMPORTED_MODULE_2___default.a.commerce.price(),
  description: faker__WEBPACK_IMPORTED_MODULE_2___default.a.commerce.productDescription()
}];
function Card() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Center"], {
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
          children: faker__WEBPACK_IMPORTED_MODULE_2___default.a.commerce.product()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          mb: "2",
          color: "blue.700",
          children: faker__WEBPACK_IMPORTED_MODULE_2___default.a.commerce.price()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
          bg: "pink.400",
          color: "black",
          children: faker__WEBPACK_IMPORTED_MODULE_2___default.a.commerce.productDescription()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }, this)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkLmpzIl0sIm5hbWVzIjpbImNhcmREZXRhaWxzIiwidGl0bGUiLCJmYWtlciIsImNvbW1lcmNlIiwicHJkdWN0TmFtZSIsImRlcHQiLCJkZXBhcnRtZW50IiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsInByb2R1Y3REZXNjcmlwdGlvbiIsIkNhcmQiLCJwcm9kdWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUcsQ0FDbkI7QUFDQ0MsT0FBSyxFQUFFQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWVDLFVBQWYsRUFEUjtBQUVDQyxNQUFJLEVBQUVILDRDQUFLLENBQUNDLFFBQU4sQ0FBZUcsVUFBZixFQUZQO0FBR0NDLE9BQUssRUFBRUwsNENBQUssQ0FBQ0MsUUFBTixDQUFlSSxLQUFmLEVBSFI7QUFJQ0MsYUFBVyxFQUFFTiw0Q0FBSyxDQUFDQyxRQUFOLENBQWVNLGtCQUFmO0FBSmQsQ0FEbUIsRUFPbkI7QUFDQ1IsT0FBSyxFQUFFQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWVDLFVBQWYsRUFEUjtBQUVDQyxNQUFJLEVBQUVILDRDQUFLLENBQUNDLFFBQU4sQ0FBZUcsVUFBZixFQUZQO0FBR0NDLE9BQUssRUFBRUwsNENBQUssQ0FBQ0MsUUFBTixDQUFlSSxLQUFmLEVBSFI7QUFJQ0MsYUFBVyxFQUFFTiw0Q0FBSyxDQUFDQyxRQUFOLENBQWVNLGtCQUFmO0FBSmQsQ0FQbUIsRUFhbkI7QUFDQ1IsT0FBSyxFQUFFQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWVDLFVBQWYsRUFEUjtBQUVDQyxNQUFJLEVBQUVILDRDQUFLLENBQUNDLFFBQU4sQ0FBZUcsVUFBZixFQUZQO0FBR0NDLE9BQUssRUFBRUwsNENBQUssQ0FBQ0MsUUFBTixDQUFlSSxLQUFmLEVBSFI7QUFJQ0MsYUFBVyxFQUFFTiw0Q0FBSyxDQUFDQyxRQUFOLENBQWVNLGtCQUFmO0FBSmQsQ0FibUIsRUFtQm5CO0FBQ0NSLE9BQUssRUFBRUMsNENBQUssQ0FBQ0MsUUFBTixDQUFlQyxVQUFmLEVBRFI7QUFFQ0MsTUFBSSxFQUFFSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWVHLFVBQWYsRUFGUDtBQUdDQyxPQUFLLEVBQUVMLDRDQUFLLENBQUNDLFFBQU4sQ0FBZUksS0FBZixFQUhSO0FBSUNDLGFBQVcsRUFBRU4sNENBQUssQ0FBQ0MsUUFBTixDQUFlTSxrQkFBZjtBQUpkLENBbkJtQixDQUFwQjtBQTJCZSxTQUFTQyxJQUFULEdBQWdCO0FBQzlCLHNCQUNDO0FBQUEsMkJBQ0MscUVBQUMsdURBQUQ7QUFBUSxVQUFJLEVBQUMsSUFBYjtBQUFrQixpQkFBVyxFQUFDLEtBQTlCO0FBQW9DLGlCQUFXLEVBQUMsU0FBaEQ7QUFBMEQsa0JBQVksRUFBQyxJQUF2RTtBQUE0RSxRQUFFLEVBQUMsR0FBL0U7QUFBQSw2QkFDQyxxRUFBQyxxREFBRDtBQUFNLGlCQUFTLEVBQUMsUUFBaEI7QUFBeUIsU0FBQyxFQUFDLEdBQTNCO0FBQStCLFVBQUUsRUFBQyxVQUFsQztBQUE2QyxvQkFBWSxFQUFDLElBQTFEO0FBQStELFVBQUUsRUFBQyxHQUFsRTtBQUFBLGdDQUNDLHFFQUFDLHFEQUFEO0FBQU0sWUFBRSxFQUFDLEdBQVQ7QUFBYSxlQUFLLEVBQUMsVUFBbkI7QUFBQSxvQkFDRVIsNENBQUssQ0FBQ0MsUUFBTixDQUFlUSxPQUFmO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxlQUlDLHFFQUFDLHFEQUFEO0FBQU0sWUFBRSxFQUFDLEdBQVQ7QUFBYSxlQUFLLEVBQUMsVUFBbkI7QUFBQSxvQkFDRVQsNENBQUssQ0FBQ0MsUUFBTixDQUFlSSxLQUFmO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRCxlQU9DLHFFQUFDLG9EQUFEO0FBQUssWUFBRSxFQUFDLFVBQVI7QUFBbUIsZUFBSyxFQUFDLE9BQXpCO0FBQUEsb0JBQ0VMLDRDQUFLLENBQUNDLFFBQU4sQ0FBZU0sa0JBQWY7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxtQkFERDtBQWlCQTtLQWxCdUJDLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjE3OGU4ZmFlOGFlMWZlYmMxOGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRleHQsIENlbnRlciwgRmxleCwgQm94IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IGZha2VyIGZyb20gXCJmYWtlclwiO1xyXG5cclxuY29uc3QgY2FyZERldGFpbHMgPSBbXHJcblx0e1xyXG5cdFx0dGl0bGU6IGZha2VyLmNvbW1lcmNlLnByZHVjdE5hbWUoKSxcclxuXHRcdGRlcHQ6IGZha2VyLmNvbW1lcmNlLmRlcGFydG1lbnQoKSxcclxuXHRcdHByaWNlOiBmYWtlci5jb21tZXJjZS5wcmljZSgpLFxyXG5cdFx0ZGVzY3JpcHRpb246IGZha2VyLmNvbW1lcmNlLnByb2R1Y3REZXNjcmlwdGlvbigpXHJcblx0fSxcclxuXHR7XHJcblx0XHR0aXRsZTogZmFrZXIuY29tbWVyY2UucHJkdWN0TmFtZSgpLFxyXG5cdFx0ZGVwdDogZmFrZXIuY29tbWVyY2UuZGVwYXJ0bWVudCgpLFxyXG5cdFx0cHJpY2U6IGZha2VyLmNvbW1lcmNlLnByaWNlKCksXHJcblx0XHRkZXNjcmlwdGlvbjogZmFrZXIuY29tbWVyY2UucHJvZHVjdERlc2NyaXB0aW9uKClcclxuXHR9LFxyXG5cdHtcclxuXHRcdHRpdGxlOiBmYWtlci5jb21tZXJjZS5wcmR1Y3ROYW1lKCksXHJcblx0XHRkZXB0OiBmYWtlci5jb21tZXJjZS5kZXBhcnRtZW50KCksXHJcblx0XHRwcmljZTogZmFrZXIuY29tbWVyY2UucHJpY2UoKSxcclxuXHRcdGRlc2NyaXB0aW9uOiBmYWtlci5jb21tZXJjZS5wcm9kdWN0RGVzY3JpcHRpb24oKVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dGl0bGU6IGZha2VyLmNvbW1lcmNlLnByZHVjdE5hbWUoKSxcclxuXHRcdGRlcHQ6IGZha2VyLmNvbW1lcmNlLmRlcGFydG1lbnQoKSxcclxuXHRcdHByaWNlOiBmYWtlci5jb21tZXJjZS5wcmljZSgpLFxyXG5cdFx0ZGVzY3JpcHRpb246IGZha2VyLmNvbW1lcmNlLnByb2R1Y3REZXNjcmlwdGlvbigpXHJcblx0fVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZCgpIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PENlbnRlciBtYXhXPVwic21cIiBib3JkZXJXaWR0aD1cIjFweFwiIGJvcmRlckNvbG9yPVwicmVkLjQwMFwiIGJvcmRlclJhZGl1cz1cImxnXCIgbXg9XCI1XCI+XHJcblx0XHRcdFx0PEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCIgcD1cIjNcIiBiZz1cImdyYXkuMjAwXCIgYm9yZGVyUmFkaXVzPVwibGdcIiBteD1cIjJcIj5cclxuXHRcdFx0XHRcdDxUZXh0IG1iPVwiMlwiIGNvbG9yPVwiYmx1ZS43MDBcIj5cclxuXHRcdFx0XHRcdFx0e2Zha2VyLmNvbW1lcmNlLnByb2R1Y3QoKX1cclxuXHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdDxUZXh0IG1iPVwiMlwiIGNvbG9yPVwiYmx1ZS43MDBcIj5cclxuXHRcdFx0XHRcdFx0e2Zha2VyLmNvbW1lcmNlLnByaWNlKCl9XHJcblx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHQ8Qm94IGJnPVwicGluay40MDBcIiBjb2xvcj1cImJsYWNrXCI+XHJcblx0XHRcdFx0XHRcdHtmYWtlci5jb21tZXJjZS5wcm9kdWN0RGVzY3JpcHRpb24oKX1cclxuXHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdDwvRmxleD5cclxuXHRcdFx0PC9DZW50ZXI+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=