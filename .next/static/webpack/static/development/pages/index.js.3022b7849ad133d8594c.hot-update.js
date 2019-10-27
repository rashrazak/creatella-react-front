webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_ApiContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/ApiContext */ "./context/ApiContext.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Head */ "./components/Head.js");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/index.css */ "./css/index.css");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/List */ "./components/List.js");
var _jsxFileName = "C:\\wamp64\\www\\projek\\creatella-react-front\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function index() {
  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      theList = _useState[0],
      settheList = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_ApiContext__WEBPACK_IMPORTED_MODULE_1__["default"]),
      list = _useContext.list;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (list) {
      settheList(list);
    }
  }, [list]);
  return __jsx(_components_Head__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: 'Welcome',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, theList && list ? __jsx("div", {
    id: "getScroll",
    className: "get-list",
    style: {
      background: '#ffffff',
      bottom: '30px',
      position: 'relative',
      top: '100px',
      height: '100%',
      padding: '10px 10px',
      paddingBottom: '60px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    style: {
      "float": 'right'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(Dropdown, {
    direction: "left",
    isOpen: this.state.btnDropleft,
    toggle: function toggle() {
      _this.setState({
        btnDropleft: !_this.state.btnDropleft
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(DropdownToggle, {
    caret: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Dropleft"), __jsx(DropdownMenu, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(DropdownItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Another Action"), __jsx(DropdownItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Another Action")))), __jsx(_components_List__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }))) : __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Spinner"], {
    color: "danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=index.js.3022b7849ad133d8594c.hot-update.js.map