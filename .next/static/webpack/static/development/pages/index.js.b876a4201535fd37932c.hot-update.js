webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/List.js":
/*!****************************!*\
  !*** ./components/List.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_ApiContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/ApiContext */ "./context/ApiContext.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");

var _jsxFileName = "C:\\wamp64\\www\\projek\\creatella-react-front\\components\\List.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function List() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_ApiContext__WEBPACK_IMPORTED_MODULE_2__["default"]),
      list = _useContext.list;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      listing = _useState[0],
      setlisting = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      fetchData = _useState2[0],
      setfetchData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      limit = _useState3[0],
      setlimit = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (list) {
      var x = list;
      x = x.slice(0, 20);
      setlisting(x);
    }
  }, [list]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!fetchData) return;
    fetchMoreListItems(20);
  }, [fetchData]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.addEventListener('scroll', handleScroll);
    return function () {
      return window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  var handleScroll = function handleScroll() {
    var d = document.getElementById('getScroll');
    var st = d.scrollTop;
    var ih = d.innerHeight;
    console.log(window.innerHeight + document.documentElement.scrollTop);
    console.log(document.documentElement.offsetHeight + 100);

    if (window.innerHeight + document.documentElement.scrollTop >= 100 + document.documentElement.offsetHeight || fetchData) {
      //set top 100px
      setfetchData(true);
    }
  };

  var fetchMoreListItems = function fetchMoreListItems(q) {
    setTimeout(function () {
      console.log(limit);
      var l = listing.length;
      var x = list;
      var y = q;
      var z = limit * 20;
      x = x.slice(z, z + 20);
      console.log(x);
      setlisting(function (prevState) {
        return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prevState), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(x));
      });
      setfetchData(false);
      setlimit(function (x) {
        return x + 1;
      });
    }, 2000);
  };

  var clickList = function clickList(typex) {
    var type = typex;
  };

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: "12",
    xs: "12",
    md: "12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("div", {
    style: {
      "float": 'right',
      marginBottom: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["UncontrolledDropdown"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownToggle"], {
    caret: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Select Sort"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownMenu"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownItem"], {
    onClick: function onClick() {
      return clickList('size');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "By Size"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownItem"], {
    divider: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownItem"], {
    onClick: function onClick() {
      return clickList('price');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "By Price"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownItem"], {
    divider: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownItem"], {
    onClick: function onClick() {
      return clickList('id');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "By Id"))))), listing.map(function (v, i) {
    var size = "".concat(v.size, "px");
    var cents = v.price / 100;
    cents = "$ ".concat(cents.toFixed(2));
    var finalDate = null;
    var oldDate = new Date(v.date);
    var today = new Date();
    var weekAgo = new Date();
    var week = today.getDate() - 7;
    weekAgo.setDate(week);

    if (oldDate.getTime() > weekAgo.getTime() && oldDate.getTime() < today.getTime()) {
      var diff = (today.getTime() - oldDate.getTime()) / (1000 * 3600 * 24);
      diff = Math.round(diff);
      finalDate = "".concat(diff, " days ago");
    } else {
      var day = oldDate.getDate();
      var month = oldDate.getMonth() + 1;
      var year = oldDate.getFullYear();
      finalDate = "".concat(day, "/").concat(month, "/").concat(year);
    }

    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      sm: "6",
      xs: "6",
      md: "3",
      key: i,
      style: {
        cursor: 'pointer'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: {
        height: '200px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], {
      style: {
        padding: '10px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
      style: {
        fontSize: size,
        lineHeight: '3',
        textAlign: 'center',
        letterSpacing: '0',
        color: '#4d4d4d',
        fontWeight: 'bold'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, v.face), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardText"], {
      style: {
        position: "absolute",
        bottom: '20px',
        color: '#E01A1A',
        fontSize: '14px',
        fontWeight: 'bold'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, "Size: ", size), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardText"], {
      style: {
        position: "absolute",
        bottom: '3px',
        color: '#E01A1A',
        fontSize: '14px',
        fontWeight: 'bold'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, "Price: ", cents), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardText"], {
      style: {
        position: "absolute",
        bottom: '0',
        color: '#E01A1A',
        fontSize: '14px',
        fontWeight: 'bold'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, "Date: ", finalDate))), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }));
  }), fetchData && 'Getting more faces....');
}

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ })

})
//# sourceMappingURL=index.js.b876a4201535fd37932c.hot-update.js.map