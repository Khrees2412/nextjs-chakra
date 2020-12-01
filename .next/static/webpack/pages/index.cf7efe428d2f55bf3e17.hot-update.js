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



var _jsxFileName = "C:\\Users\\john\\Desktop\\next-pro\\components\\Card.js",
    _s = $RefreshSig$();



function Card() {
  _s();

  var _this = this;

  var _useColorMode = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["useColorMode"])(),
      colorMode = _useColorMode.colorMode,
      toggleColorMode = _useColorMode.toggleColorMode;

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
        lineNumber: 10,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      templateColumns: ["1fr", "1fr", "1fr", "repeat(2, 1fr)"],
      gap: 4,
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
          mx: "6",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
            direction: "column",
            p: [3, 5],
            borderRadius: "lg",
            mx: "2",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
              mb: "2",
              color: colorMode === "light" ? "blue.700" : "gray.50",
              children: title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
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
              lineNumber: 30,
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
              lineNumber: 33,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
              color: colorMode === "light" ? "black" : "gray.50",
              children: description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
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
                lineNumber: 38,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 7
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 6
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }, this)]
  }, void 0, true);
}

_s(Card, "uURyIwMgIfFLStF4nJMrxbb6o/4=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["useColorMode"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkLmpzIl0sIm5hbWVzIjpbIkNhcmQiLCJ1c2VDb2xvck1vZGUiLCJjb2xvck1vZGUiLCJ0b2dnbGVDb2xvck1vZGUiLCJjYXJkRGV0YWlscyIsIm1hcCIsImluZGV4IiwidGl0bGUiLCJkZXB0IiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImJnIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLHNCQUNTQyxxRUFBWSxFQURyQjtBQUFBLE1BQ3RCQyxTQURzQixpQkFDdEJBLFNBRHNCO0FBQUEsTUFDWEMsZUFEVyxpQkFDWEEsZUFEVzs7QUFHOUIsc0JBQ0M7QUFBQSw0QkFDQyxxRUFBQyx1REFBRDtBQUFBLDZCQUNDLHFFQUFDLHFEQUFEO0FBQU0sVUFBRSxFQUFDLEdBQVQ7QUFBYSxVQUFFLEVBQUMsSUFBaEI7QUFBcUIsa0JBQVUsRUFBQyxNQUFoQztBQUF1QyxnQkFBUSxFQUFDLE1BQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBT0MscUVBQUMscURBQUQ7QUFBTSxxQkFBZSxFQUFFLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCLGdCQUF0QixDQUF2QjtBQUFnRSxTQUFHLEVBQUUsQ0FBckU7QUFBQSxnQkFDRUMsNkNBQVcsQ0FBQ0MsR0FBWixDQUFnQixnQkFBc0NDLEtBQXRDO0FBQUEsWUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsWUFBVUMsSUFBVixRQUFVQSxJQUFWO0FBQUEsWUFBZ0JDLEtBQWhCLFFBQWdCQSxLQUFoQjtBQUFBLFlBQXVCQyxXQUF2QixRQUF1QkEsV0FBdkI7QUFBQSw0QkFDaEIscUVBQUMsb0RBQUQ7QUFFQyxjQUFJLEVBQUMsTUFGTjtBQUdDLHFCQUFXLEVBQUMsS0FIYjtBQUlDLFlBQUUsRUFBQyxHQUpKO0FBS0MscUJBQVcsRUFBQyxVQUxiO0FBTUMsc0JBQVksRUFBQyxJQU5kO0FBT0MsWUFBRSxFQUFDLEdBUEo7QUFBQSxpQ0FTQyxxRUFBQyxxREFBRDtBQUFNLHFCQUFTLEVBQUMsUUFBaEI7QUFBeUIsYUFBQyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBNUI7QUFBb0Msd0JBQVksRUFBQyxJQUFqRDtBQUFzRCxjQUFFLEVBQUMsR0FBekQ7QUFBQSxvQ0FDQyxxRUFBQyxxREFBRDtBQUFNLGdCQUFFLEVBQUMsR0FBVDtBQUFhLG1CQUFLLEVBQUVSLFNBQVMsS0FBSyxPQUFkLEdBQXdCLFVBQXhCLEdBQXFDLFNBQXpEO0FBQUEsd0JBQ0VLO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxlQUlDLHFFQUFDLG9EQUFEO0FBQUssZ0JBQUUsRUFBQyxVQUFSO0FBQW1CLGdCQUFFLEVBQUMsTUFBdEI7QUFBNkIsZUFBQyxFQUFDLEdBQS9CO0FBQW1DLDBCQUFZLEVBQUMsSUFBaEQ7QUFBcUQsZ0JBQUUsRUFBQyxHQUF4RDtBQUE0RCxtQkFBSyxFQUFDLFVBQWxFO0FBQUEsd0JBQ0VDO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRCxlQU9DLHFFQUFDLHFEQUFEO0FBQU0sZ0JBQUUsRUFBQyxXQUFUO0FBQXFCLG1CQUFLLEVBQUMsVUFBM0I7QUFBc0MsZ0JBQUUsRUFBQyxHQUF6QztBQUE2QyxnQkFBRSxFQUFDLE1BQWhEO0FBQXVELGVBQUMsRUFBQyxHQUF6RDtBQUE2RCwwQkFBWSxFQUFDLElBQTFFO0FBQUEsK0JBQ0lDLEtBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBELGVBVUMscUVBQUMscURBQUQ7QUFBTSxtQkFBSyxFQUFFUCxTQUFTLEtBQUssT0FBZCxHQUF3QixPQUF4QixHQUFrQyxTQUEvQztBQUFBLHdCQUEyRFE7QUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFWRCxlQVdDLHFFQUFDLHVEQUFEO0FBQUEscUNBQ0MscUVBQUMsdURBQUQ7QUFDQyxrQkFBRSxFQUFDLFVBREo7QUFFQyxxQkFBSyxFQUFDLFNBRlA7QUFHQywyQkFBVyxFQUFDLEtBSGI7QUFJQyw0QkFBWSxFQUFDLElBSmQ7QUFLQyxpQkFBQyxFQUFDLEtBTEg7QUFNQyxpQkFBQyxFQUFDLEdBTkg7QUFPQyxzQkFBTSxFQUFFO0FBQ1BDLG9CQUFFLEVBQUUsVUFERztBQUVQQyx1QkFBSyxFQUFFO0FBRkEsaUJBUFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRELFdBQ01OLEtBRE47QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEZ0I7QUFBQSxPQUFoQjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRDtBQUFBLGtCQUREO0FBb0RBOztHQXZEdUJOLEk7VUFDZ0JDLDZEOzs7S0FEaEJELEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2Y3ZWZlNDI4ZDJmNTViZjNlMTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRleHQsIENlbnRlciwgRmxleCwgQm94LCBCdXR0b24sIEdyaWQsIHVzZUNvbG9yTW9kZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBjYXJkRGV0YWlscyBmcm9tIFwiLi9kYXRhXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJkKCkge1xyXG5cdGNvbnN0IHsgY29sb3JNb2RlLCB0b2dnbGVDb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PENlbnRlcj5cclxuXHRcdFx0XHQ8VGV4dCBtYj1cIjNcIiBhcz1cImgxXCIgZm9udFdlaWdodD1cImJvbGRcIiBmb250U2l6ZT1cIjIwcHhcIj5cclxuXHRcdFx0XHRcdENoZWNrIG91dCBvdXIgcHJvZHVjdHNcclxuXHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdDwvQ2VudGVyPlxyXG5cclxuXHRcdFx0PEdyaWQgdGVtcGxhdGVDb2x1bW5zPXtbXCIxZnJcIiwgXCIxZnJcIiwgXCIxZnJcIiwgXCJyZXBlYXQoMiwgMWZyKVwiXX0gZ2FwPXs0fT5cclxuXHRcdFx0XHR7Y2FyZERldGFpbHMubWFwKCh7IHRpdGxlLCBkZXB0LCBwcmljZSwgZGVzY3JpcHRpb24gfSwgaW5kZXgpID0+IChcclxuXHRcdFx0XHRcdDxCb3hcclxuXHRcdFx0XHRcdFx0a2V5PXtpbmRleH1cclxuXHRcdFx0XHRcdFx0bWF4Vz1cIjEwMCVcIlxyXG5cdFx0XHRcdFx0XHRib3JkZXJXaWR0aD1cIjFweFwiXHJcblx0XHRcdFx0XHRcdG1iPVwiM1wiXHJcblx0XHRcdFx0XHRcdGJvcmRlckNvbG9yPVwiZ3JheS40MDBcIlxyXG5cdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM9XCJsZ1wiXHJcblx0XHRcdFx0XHRcdG14PVwiNlwiXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxGbGV4IGRpcmVjdGlvbj1cImNvbHVtblwiIHA9e1szLCA1XX0gYm9yZGVyUmFkaXVzPVwibGdcIiBteD1cIjJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8VGV4dCBtYj1cIjJcIiBjb2xvcj17Y29sb3JNb2RlID09PSBcImxpZ2h0XCIgPyBcImJsdWUuNzAwXCIgOiBcImdyYXkuNTBcIn0+XHJcblx0XHRcdFx0XHRcdFx0XHR7dGl0bGV9XHJcblx0XHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDxCb3ggYmc9XCJwaW5rLjIwMFwiIG1yPVwiYXV0b1wiIHA9XCIyXCIgYm9yZGVyUmFkaXVzPVwibGdcIiBtYj1cIjJcIiBjb2xvcj1cImJsdWUuNzAwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHR7ZGVwdH1cclxuXHRcdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdFx0XHQ8VGV4dCBiZz1cImdyZWVuLjIwMFwiIGNvbG9yPVwiYmx1ZS43MDBcIiBtYj1cIjJcIiBtcj1cImF1dG9cIiBwPVwiMlwiIGJvcmRlclJhZGl1cz1cImxnXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQkIHtwcmljZX1cclxuXHRcdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PFRleHQgY29sb3I9e2NvbG9yTW9kZSA9PT0gXCJsaWdodFwiID8gXCJibGFja1wiIDogXCJncmF5LjUwXCJ9PntkZXNjcmlwdGlvbn08L1RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PENlbnRlcj5cclxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0Ymc9XCJibHVlLjUwMFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yPVwiZ3JheS41MFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlcldpZHRoPVwiMXB4XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzPVwibGdcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwPVwiMS41XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0bT1cIjJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRfaG92ZXI9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRiZzogXCJibHVlLjYwMFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiBcImdyYXkuMTAwXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0QWRkIHRvIENhcnRcclxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDwvQ2VudGVyPlxyXG5cdFx0XHRcdFx0XHQ8L0ZsZXg+XHJcblx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHQpKX1cclxuXHRcdFx0PC9HcmlkPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9