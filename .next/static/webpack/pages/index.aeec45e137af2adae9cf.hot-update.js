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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkLmpzIl0sIm5hbWVzIjpbIkNhcmQiLCJjYXJkRGV0YWlscyIsIm1hcCIsImluZGV4IiwidGl0bGUiLCJkZXB0IiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImJnIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUM5QixzQkFDQztBQUFBLDRCQUNDLHFFQUFDLHVEQUFEO0FBQUEsNkJBQ0MscUVBQUMscURBQUQ7QUFBTSxVQUFFLEVBQUMsR0FBVDtBQUFhLFVBQUUsRUFBQyxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQU9DLHFFQUFDLHFEQUFEO0FBQU0scUJBQWUsRUFBRSxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixnQkFBdEIsQ0FBdkI7QUFBZ0UsU0FBRyxFQUFFLENBQXJFO0FBQUEsZ0JBQ0VDLDZDQUFXLENBQUNDLEdBQVosQ0FBZ0IsZ0JBQXNDQyxLQUF0QztBQUFBLFlBQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFlBQVVDLElBQVYsUUFBVUEsSUFBVjtBQUFBLFlBQWdCQyxLQUFoQixRQUFnQkEsS0FBaEI7QUFBQSxZQUF1QkMsV0FBdkIsUUFBdUJBLFdBQXZCO0FBQUEsNEJBQ2hCLHFFQUFDLHVEQUFEO0FBRUMsY0FBSSxFQUFDLE1BRk47QUFHQyxxQkFBVyxFQUFDLEtBSGI7QUFJQyxZQUFFLEVBQUMsR0FKSjtBQUtDLHFCQUFXLEVBQUMsVUFMYjtBQU1DLHNCQUFZLEVBQUMsSUFOZDtBQU9DLFlBQUUsRUFBQyxHQVBKO0FBQUEsaUNBU0MscUVBQUMscURBQUQ7QUFBTSxxQkFBUyxFQUFDLFFBQWhCO0FBQXlCLGFBQUMsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBQTVCO0FBQW9DLHdCQUFZLEVBQUMsSUFBakQ7QUFBc0QsY0FBRSxFQUFDLEdBQXpEO0FBQUEsb0NBQ0MscUVBQUMscURBQUQ7QUFBTSxnQkFBRSxFQUFDLEdBQVQ7QUFBYSxtQkFBSyxFQUFDLFVBQW5CO0FBQUEsd0JBQ0VIO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxlQUlDLHFFQUFDLG9EQUFEO0FBQUssZ0JBQUUsRUFBQyxVQUFSO0FBQW1CLGVBQUMsRUFBQyxHQUFyQjtBQUF5QiwwQkFBWSxFQUFDLElBQXRDO0FBQTJDLGdCQUFFLEVBQUMsR0FBOUM7QUFBa0QsbUJBQUssRUFBQyxVQUF4RDtBQUFBLHdCQUNFQztBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkQsZUFPQyxxRUFBQyxxREFBRDtBQUFNLGdCQUFFLEVBQUMsR0FBVDtBQUFhLG1CQUFLLEVBQUMsVUFBbkI7QUFBQSwrQkFDSUMsS0FESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEQsZUFVQyxxRUFBQyxvREFBRDtBQUFLLG1CQUFLLEVBQUMsT0FBWDtBQUFBLHdCQUFvQkM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFWRCxlQVdDLHFFQUFDLHVEQUFEO0FBQUEscUNBQ0MscUVBQUMsdURBQUQ7QUFDQyxrQkFBRSxFQUFDLFVBREo7QUFFQyxxQkFBSyxFQUFDLFNBRlA7QUFHQywyQkFBVyxFQUFDLEtBSGI7QUFJQyw0QkFBWSxFQUFDLElBSmQ7QUFLQyxpQkFBQyxFQUFDLEtBTEg7QUFNQyxpQkFBQyxFQUFDLEdBTkg7QUFPQyxzQkFBTSxFQUFFO0FBQ1BDLG9CQUFFLEVBQUUsVUFERztBQUVQQyx1QkFBSyxFQUFFO0FBRkEsaUJBUFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRELFdBQ01OLEtBRE47QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEZ0I7QUFBQSxPQUFoQjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRDtBQUFBLGtCQUREO0FBcURBO0tBdER1QkgsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hZWVjNDVlMTM3YWYyYWRhZTljZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dCwgQ2VudGVyLCBGbGV4LCBCb3gsIENvbnRhaW5lciwgQnV0dG9uLCBHcmlkIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IGNhcmREZXRhaWxzIGZyb20gXCIuL2RhdGFcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmQoKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxDZW50ZXI+XHJcblx0XHRcdFx0PFRleHQgbWI9XCIzXCIgYXM9XCJoMVwiPlxyXG5cdFx0XHRcdFx0Q2hlY2sgb3V0IG91ciBwcm9kdWN0c1xyXG5cdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0PC9DZW50ZXI+XHJcblx0XHRcdHsvKiA8Q29udGFpbmVyPiAqL31cclxuXHRcdFx0PEdyaWQgdGVtcGxhdGVDb2x1bW5zPXtbXCIxZnJcIiwgXCIxZnJcIiwgXCIxZnJcIiwgXCJyZXBlYXQoMiwgMWZyKVwiXX0gZ2FwPXs2fT5cclxuXHRcdFx0XHR7Y2FyZERldGFpbHMubWFwKCh7IHRpdGxlLCBkZXB0LCBwcmljZSwgZGVzY3JpcHRpb24gfSwgaW5kZXgpID0+IChcclxuXHRcdFx0XHRcdDxDZW50ZXJcclxuXHRcdFx0XHRcdFx0a2V5PXtpbmRleH1cclxuXHRcdFx0XHRcdFx0bWF4Vz1cIjEwMCVcIlxyXG5cdFx0XHRcdFx0XHRib3JkZXJXaWR0aD1cIjFweFwiXHJcblx0XHRcdFx0XHRcdG1iPVwiM1wiXHJcblx0XHRcdFx0XHRcdGJvcmRlckNvbG9yPVwiZ3JheS40MDBcIlxyXG5cdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM9XCJsZ1wiXHJcblx0XHRcdFx0XHRcdG14PVwiNVwiXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxGbGV4IGRpcmVjdGlvbj1cImNvbHVtblwiIHA9e1szLCA1XX0gYm9yZGVyUmFkaXVzPVwibGdcIiBteD1cIjJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8VGV4dCBtYj1cIjJcIiBjb2xvcj1cImJsdWUuNzAwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHR7dGl0bGV9XHJcblx0XHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDxCb3ggYmc9XCJwaW5rLjIwMFwiIHA9XCIyXCIgYm9yZGVyUmFkaXVzPVwibGdcIiBtYj1cIjJcIiBjb2xvcj1cImJsdWUuNzAwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHR7ZGVwdH1cclxuXHRcdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdFx0XHQ8VGV4dCBtYj1cIjJcIiBjb2xvcj1cImJsdWUuNzAwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQkIHtwcmljZX1cclxuXHRcdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PEJveCBjb2xvcj1cImJsYWNrXCI+e2Rlc2NyaXB0aW9ufTwvQm94PlxyXG5cdFx0XHRcdFx0XHRcdDxDZW50ZXI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdGJnPVwiYmx1ZS41MDBcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb2xvcj1cImdyYXkuNTBcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJXaWR0aD1cIjFweFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1cz1cImxnXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0cD1cIjEuNVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdG09XCIyXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0X2hvdmVyPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ymc6IFwiYmx1ZS42MDBcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogXCJncmF5LjEwMFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdEFkZCB0byBDYXJ0XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHQ8L0NlbnRlcj5cclxuXHRcdFx0XHRcdFx0PC9GbGV4PlxyXG5cdFx0XHRcdFx0PC9DZW50ZXI+XHJcblx0XHRcdFx0KSl9XHJcblx0XHRcdDwvR3JpZD5cclxuXHRcdFx0ey8qIDwvQ29udGFpbmVyPiAqL31cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==