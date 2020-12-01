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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      as: "h1"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }, this), _data__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (_ref, index) {
      var title = _ref.title,
          dept = _ref.dept,
          price = _ref.price,
          description = _ref.description;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Center"], {
        maxW: "sm",
        borderWidth: "1px",
        mb: "3",
        borderColor: "gray.400",
        borderRadius: "lg",
        mx: "5",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
          direction: "column",
          p: "3",
          borderRadius: "lg",
          mx: "2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
            mb: "2",
            color: "blue.700",
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
            mb: "2",
            color: "blue.700",
            children: dept
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
            mb: "2",
            color: "blue.700",
            children: price
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
            color: "black",
            children: description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 6
        }, _this)
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 5
      }, _this);
    })]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkLmpzIl0sIm5hbWVzIjpbIkNhcmQiLCJjYXJkRGV0YWlscyIsIm1hcCIsImluZGV4IiwidGl0bGUiLCJkZXB0IiwicHJpY2UiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQzlCLHNCQUNDO0FBQUEsNEJBQ0MscUVBQUMscURBQUQ7QUFBTSxRQUFFLEVBQUM7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsRUFFRUMsNkNBQVcsQ0FBQ0MsR0FBWixDQUFnQixnQkFBc0NDLEtBQXRDO0FBQUEsVUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsVUFBVUMsSUFBVixRQUFVQSxJQUFWO0FBQUEsVUFBZ0JDLEtBQWhCLFFBQWdCQSxLQUFoQjtBQUFBLFVBQXVCQyxXQUF2QixRQUF1QkEsV0FBdkI7QUFBQSwwQkFDaEIscUVBQUMsdURBQUQ7QUFBb0IsWUFBSSxFQUFDLElBQXpCO0FBQThCLG1CQUFXLEVBQUMsS0FBMUM7QUFBZ0QsVUFBRSxFQUFDLEdBQW5EO0FBQXVELG1CQUFXLEVBQUMsVUFBbkU7QUFBOEUsb0JBQVksRUFBQyxJQUEzRjtBQUFnRyxVQUFFLEVBQUMsR0FBbkc7QUFBQSwrQkFDQyxxRUFBQyxxREFBRDtBQUFNLG1CQUFTLEVBQUMsUUFBaEI7QUFBeUIsV0FBQyxFQUFDLEdBQTNCO0FBQStCLHNCQUFZLEVBQUMsSUFBNUM7QUFBaUQsWUFBRSxFQUFDLEdBQXBEO0FBQUEsa0NBQ0MscUVBQUMscURBQUQ7QUFBTSxjQUFFLEVBQUMsR0FBVDtBQUFhLGlCQUFLLEVBQUMsVUFBbkI7QUFBQSxzQkFDRUg7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELGVBSUMscUVBQUMscURBQUQ7QUFBTSxjQUFFLEVBQUMsR0FBVDtBQUFhLGlCQUFLLEVBQUMsVUFBbkI7QUFBQSxzQkFDRUM7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpELGVBT0MscUVBQUMscURBQUQ7QUFBTSxjQUFFLEVBQUMsR0FBVDtBQUFhLGlCQUFLLEVBQUMsVUFBbkI7QUFBQSxzQkFDRUM7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBELGVBVUMscUVBQUMsb0RBQUQ7QUFBSyxpQkFBSyxFQUFDLE9BQVg7QUFBQSxzQkFBb0JDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsU0FBYUosS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGdCO0FBQUEsS0FBaEIsQ0FGRjtBQUFBLGtCQUREO0FBcUJBO0tBdEJ1QkgsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xMGJkM2ZjOGZmODg2MWFhZWRjZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dCwgQ2VudGVyLCBGbGV4LCBCb3ggfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgY2FyZERldGFpbHMgZnJvbSBcIi4vZGF0YVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZCgpIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PFRleHQgYXM9XCJoMVwiPjwvVGV4dD5cclxuXHRcdFx0e2NhcmREZXRhaWxzLm1hcCgoeyB0aXRsZSwgZGVwdCwgcHJpY2UsIGRlc2NyaXB0aW9uIH0sIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0PENlbnRlciBrZXk9e2luZGV4fSBtYXhXPVwic21cIiBib3JkZXJXaWR0aD1cIjFweFwiIG1iPVwiM1wiIGJvcmRlckNvbG9yPVwiZ3JheS40MDBcIiBib3JkZXJSYWRpdXM9XCJsZ1wiIG14PVwiNVwiPlxyXG5cdFx0XHRcdFx0PEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCIgcD1cIjNcIiBib3JkZXJSYWRpdXM9XCJsZ1wiIG14PVwiMlwiPlxyXG5cdFx0XHRcdFx0XHQ8VGV4dCBtYj1cIjJcIiBjb2xvcj1cImJsdWUuNzAwXCI+XHJcblx0XHRcdFx0XHRcdFx0e3RpdGxlfVxyXG5cdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHRcdDxUZXh0IG1iPVwiMlwiIGNvbG9yPVwiYmx1ZS43MDBcIj5cclxuXHRcdFx0XHRcdFx0XHR7ZGVwdH1cclxuXHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHQ8VGV4dCBtYj1cIjJcIiBjb2xvcj1cImJsdWUuNzAwXCI+XHJcblx0XHRcdFx0XHRcdFx0e3ByaWNlfVxyXG5cdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHRcdDxCb3ggY29sb3I9XCJibGFja1wiPntkZXNjcmlwdGlvbn08L0JveD5cclxuXHRcdFx0XHRcdDwvRmxleD5cclxuXHRcdFx0XHQ8L0NlbnRlcj5cclxuXHRcdFx0KSl9XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=