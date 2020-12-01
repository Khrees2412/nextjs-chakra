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
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
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
              lineNumber: 22,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
              bg: "green.300",
              p: "2",
              borderRadius: "lg",
              mb: "2",
              color: "blue.700",
              children: dept
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
              mb: "2",
              color: "blue.700",
              children: ["$ ", price]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
              color: "black",
              children: description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Center"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              bg: "pink.500",
              color: "blue.500",
              borderWidth: "1px",
              borderRadius: "lg",
              p: "2",
              children: "Add to Cart"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 7
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 6
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkLmpzIl0sIm5hbWVzIjpbIkNhcmQiLCJjYXJkRGV0YWlscyIsIm1hcCIsImluZGV4IiwidGl0bGUiLCJkZXB0IiwicHJpY2UiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQzlCLHNCQUNDO0FBQUEsNEJBQ0MscUVBQUMsdURBQUQ7QUFBQSw2QkFDQyxxRUFBQyxxREFBRDtBQUFNLFVBQUUsRUFBQyxJQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBSUMscUVBQUMsMERBQUQ7QUFBQSxnQkFDRUMsNkNBQVcsQ0FBQ0MsR0FBWixDQUFnQixnQkFBc0NDLEtBQXRDO0FBQUEsWUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsWUFBVUMsSUFBVixRQUFVQSxJQUFWO0FBQUEsWUFBZ0JDLEtBQWhCLFFBQWdCQSxLQUFoQjtBQUFBLFlBQXVCQyxXQUF2QixRQUF1QkEsV0FBdkI7QUFBQSw0QkFDaEIscUVBQUMsdURBQUQ7QUFFQyxjQUFJLEVBQUMsTUFGTjtBQUdDLHFCQUFXLEVBQUMsS0FIYjtBQUlDLFlBQUUsRUFBQyxHQUpKO0FBS0MscUJBQVcsRUFBQyxVQUxiO0FBTUMsc0JBQVksRUFBQyxJQU5kO0FBT0MsWUFBRSxFQUFDLEdBUEo7QUFBQSxrQ0FTQyxxRUFBQyxxREFBRDtBQUFNLHFCQUFTLEVBQUMsUUFBaEI7QUFBeUIsYUFBQyxFQUFDLEdBQTNCO0FBQStCLHdCQUFZLEVBQUMsSUFBNUM7QUFBaUQsY0FBRSxFQUFDLEdBQXBEO0FBQUEsb0NBQ0MscUVBQUMscURBQUQ7QUFBTSxnQkFBRSxFQUFDLEdBQVQ7QUFBYSxtQkFBSyxFQUFDLFVBQW5CO0FBQUEsd0JBQ0VIO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxlQUlDLHFFQUFDLG9EQUFEO0FBQUssZ0JBQUUsRUFBQyxXQUFSO0FBQW9CLGVBQUMsRUFBQyxHQUF0QjtBQUEwQiwwQkFBWSxFQUFDLElBQXZDO0FBQTRDLGdCQUFFLEVBQUMsR0FBL0M7QUFBbUQsbUJBQUssRUFBQyxVQUF6RDtBQUFBLHdCQUNFQztBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkQsZUFPQyxxRUFBQyxxREFBRDtBQUFNLGdCQUFFLEVBQUMsR0FBVDtBQUFhLG1CQUFLLEVBQUMsVUFBbkI7QUFBQSwrQkFDSUMsS0FESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEQsZUFVQyxxRUFBQyxvREFBRDtBQUFLLG1CQUFLLEVBQUMsT0FBWDtBQUFBLHdCQUFvQkM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFWRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEQsZUFxQkMscUVBQUMsdURBQUQ7QUFBQSxtQ0FDQyxxRUFBQyx1REFBRDtBQUFRLGdCQUFFLEVBQUMsVUFBWDtBQUFzQixtQkFBSyxFQUFDLFVBQTVCO0FBQXVDLHlCQUFXLEVBQUMsS0FBbkQ7QUFBeUQsMEJBQVksRUFBQyxJQUF0RTtBQUEyRSxlQUFDLEVBQUMsR0FBN0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXJCRDtBQUFBLFdBQ01KLEtBRE47QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEZ0I7QUFBQSxPQUFoQjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRDtBQUFBLGtCQUREO0FBc0NBO0tBdkN1QkgsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iODMzYTRiNTQ1MTI5Y2RjNzlkNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dCwgQ2VudGVyLCBGbGV4LCBCb3gsIENvbnRhaW5lciwgQnV0dG9uIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IGNhcmREZXRhaWxzIGZyb20gXCIuL2RhdGFcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmQoKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxDZW50ZXI+XHJcblx0XHRcdFx0PFRleHQgYXM9XCJoMVwiPkNoZWNrIG91dCBvdXIgcHJvZHVjdHM8L1RleHQ+XHJcblx0XHRcdDwvQ2VudGVyPlxyXG5cdFx0XHQ8Q29udGFpbmVyPlxyXG5cdFx0XHRcdHtjYXJkRGV0YWlscy5tYXAoKHsgdGl0bGUsIGRlcHQsIHByaWNlLCBkZXNjcmlwdGlvbiB9LCBpbmRleCkgPT4gKFxyXG5cdFx0XHRcdFx0PENlbnRlclxyXG5cdFx0XHRcdFx0XHRrZXk9e2luZGV4fVxyXG5cdFx0XHRcdFx0XHRtYXhXPVwiMTAwJVwiXHJcblx0XHRcdFx0XHRcdGJvcmRlcldpZHRoPVwiMXB4XCJcclxuXHRcdFx0XHRcdFx0bWI9XCIzXCJcclxuXHRcdFx0XHRcdFx0Ym9yZGVyQ29sb3I9XCJncmF5LjQwMFwiXHJcblx0XHRcdFx0XHRcdGJvcmRlclJhZGl1cz1cImxnXCJcclxuXHRcdFx0XHRcdFx0bXg9XCI1XCJcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCIgcD1cIjNcIiBib3JkZXJSYWRpdXM9XCJsZ1wiIG14PVwiMlwiPlxyXG5cdFx0XHRcdFx0XHRcdDxUZXh0IG1iPVwiMlwiIGNvbG9yPVwiYmx1ZS43MDBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdHt0aXRsZX1cclxuXHRcdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PEJveCBiZz1cImdyZWVuLjMwMFwiIHA9XCIyXCIgYm9yZGVyUmFkaXVzPVwibGdcIiBtYj1cIjJcIiBjb2xvcj1cImJsdWUuNzAwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHR7ZGVwdH1cclxuXHRcdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdFx0XHQ8VGV4dCBtYj1cIjJcIiBjb2xvcj1cImJsdWUuNzAwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQkIHtwcmljZX1cclxuXHRcdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PEJveCBjb2xvcj1cImJsYWNrXCI+e2Rlc2NyaXB0aW9ufTwvQm94PlxyXG5cdFx0XHRcdFx0XHQ8L0ZsZXg+XHJcblx0XHRcdFx0XHRcdDxDZW50ZXI+XHJcblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBiZz1cInBpbmsuNTAwXCIgY29sb3I9XCJibHVlLjUwMFwiIGJvcmRlcldpZHRoPVwiMXB4XCIgYm9yZGVyUmFkaXVzPVwibGdcIiBwPVwiMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0QWRkIHRvIENhcnRcclxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC9DZW50ZXI+XHJcblx0XHRcdFx0XHQ8L0NlbnRlcj5cclxuXHRcdFx0XHQpKX1cclxuXHRcdFx0PC9Db250YWluZXI+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=