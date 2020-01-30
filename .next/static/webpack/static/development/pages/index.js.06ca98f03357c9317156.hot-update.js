webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ItemRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ItemRow */ "./components/ItemRow.jsx");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");


var _jsxFileName = "/Users/trevor_weng/Documents/apps/hello-next/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




var Nutrition = function Nutrition(props) {
  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_6__["default"])('/api/nutrition', fetcher),
      data = _useSWR.data;

  var nutrition = data === null || data === void 0 ? void 0 : data.nutrition;
  return __jsx("div", {
    className: "jsx-3023285025",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(_components_ItemRow__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx("div", {
    id: "banana",
    className: "jsx-3023285025",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(props.data)), __jsx("div", {
    className: "jsx-3023285025" + " " + "quote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, nutrition), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3023285025",
    __self: this
  }, "#banana.jsx-3023285025{width:90%;max-width:900px;margin:300px auto;text-align:center;}.quote.jsx-3023285025{font-family:cursive;color:#e243de;font-size:24px;padding-bottom:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90cmV2b3Jfd2VuZy9Eb2N1bWVudHMvYXBwcy9oZWxsby1uZXh0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCZ0IsQUFHbUIsQUFNVSxVQUxKLFVBTUYsTUFMSSxRQU1ILFVBTEcsS0FNRSxhQUx0QixPQU1BIiwiZmlsZSI6Ii9Vc2Vycy90cmV2b3Jfd2VuZy9Eb2N1bWVudHMvYXBwcy9oZWxsby1uZXh0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgSXRlbVJvdyBmcm9tICcuLi9jb21wb25lbnRzL0l0ZW1Sb3cnO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuXG5jb25zdCBOdXRyaXRpb24gPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlU1dSKCcvYXBpL251dHJpdGlvbicsIGZldGNoZXIpO1xuXG4gIGNvbnN0IG51dHJpdGlvbiA9IGRhdGE/Lm51dHJpdGlvbjtcblxuICByZXR1cm4gPGRpdj5cbiAgICA8SXRlbVJvdyAvPlxuICAgIDxkaXYgaWQ9XCJiYW5hbmFcIj5cbiAgICAgIHsgSlNPTi5zdHJpbmdpZnkocHJvcHMuZGF0YSkgfVxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicXVvdGVcIj5cbiAgICAgIHsgbnV0cml0aW9uIH1cbiAgICA8L2Rpdj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICNiYW5hbmEge1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBtYXgtd2lkdGg6IDkwMHB4O1xuICAgICAgICBtYXJnaW46IDMwMHB4IGF1dG87XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIC5xdW90ZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICAgICAgICBjb2xvcjogI2UyNDNkZTtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxufTtcblxuZnVuY3Rpb24gZmV0Y2hlcih1cmwpIHtcbiAgcmV0dXJuIGZldGNoKHVybCkudGhlbihyID0+IHIuanNvbigpKTtcbn1cblxuTnV0cml0aW9uLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly90cmFja2FwaS5udXRyaXRpb25peC5jb20vdjIvbmF0dXJhbC9udXRyaWVudHMnLFxuICAgIHsgXG4gICAgICBtZXRob2Q6ICdQT1NUJywgIFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiwgXG4gICAgICAgIFwieC1hcHAtaWRcIjogXCIzZjQ1OTI2ZVwiLCBcbiAgICAgICAgXCJ4LWFwcC1rZXlcIiA6XCI4YWQxNmRiMWFmNmJmM2VkZjA0OWJkOTlmNTIzMmJkYlwiXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBcInF1ZXJ5XCI6IFwiYmFuYW5hXCIgfSkgLFxuICAgIH1cbiAgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBkYXRhLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTnV0cml0aW9uO1xuIl19 */\n/*@ sourceURL=/Users/trevor_weng/Documents/apps/hello-next/pages/index.js */"));
};

function fetcher(url) {
  return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(url).then(function (r) {
    return r.json();
  });
}

Nutrition.getInitialProps = function _callee() {
  var res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('https://trackapi.nutritionix.com/v2/natural/nutrients', {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
              "x-app-id": "3f45926e",
              "x-app-key": "8ad16db1af6bf3edf049bd99f5232bdb"
            },
            body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
              "query": "banana"
            })
          }));

        case 2:
          res = _context.sent;
          _context.next = 5;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 5:
          data = _context.sent;
          return _context.abrupt("return", {
            data: data
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Nutrition);

/***/ })

})
//# sourceMappingURL=index.js.06ca98f03357c9317156.hot-update.js.map