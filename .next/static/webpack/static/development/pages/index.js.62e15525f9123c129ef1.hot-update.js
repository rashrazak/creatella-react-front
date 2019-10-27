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
      list = _useContext.list,
      setlist = _useContext.setlist;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      listing = _useState[0],
      setlisting = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      fetchData = _useState2[0],
      setfetchData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      limit = _useState3[0],
      setlimit = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      stopscroll = _useState4[0],
      setstopscroll = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      page = _useState5[0],
      setpage = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      type = _useState6[0],
      settype = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialState),
      randomNumber = _useState7[0],
      setrandomNumber = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      dropdownOpen = _useState8[0],
      setDropdownOpen = _useState8[1];

  var toggle = function toggle() {
    return setDropdownOpen(function (prevState) {
      return !prevState;
    });
  };

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
    var d = document.getElementById('getScroll'); // console.log(window.innerHeight + document.documentElement.scrollTop);
    // console.log(document.documentElement.offsetHeight + 100);

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

      if (x.length == 0) {
        setstopscroll(true);
      } else {
        setlisting(function (prevState) {
          return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prevState), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(x));
        });
        setfetchData(false);
        setlimit(function (x) {
          return x + 1;
        });
      }

      ;
    }, 2000);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setlisting([]);
    setlist(type, page);
  }, [page]);

  var clickType = function clickType(typex) {
    var type = typex;
    settype(type);
    setlisting([]);
    setlist(type, page);
  };

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: "12",
    xs: "12",
    md: "12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("div", {
    style: {
      "float": 'left',
      marginBottom: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    type: "select",
    id: "selectSort",
    onChange: function onChange(e) {
      return clickType(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("option", {
    value: null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Select Sort"), __jsx("option", {
    value: 'size',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Sort Size"), __jsx("option", {
    value: 'price',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Sort Price"), __jsx("option", {
    value: 'date',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Sort Date")))), __jsx("div", {
    style: {
      "float": 'right',
      marginBottom: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Pagination"], {
    "aria-label": "Paging",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, Array.apply(null, Array(9)).map(function (v, i) {
    var x = i + 1;
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["PaginationItem"], {
      key: i,
      className: page == x ? 'active' : '',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["PaginationLink"], {
      onClick: function onClick() {
        return setpage(x);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, x));
  })))), listing.map(function (v, i) {
    var size = "".concat(v.size, "px");
    var cents = v.price / 100;
    cents = "$ ".concat(cents.toFixed(2));
    var finalDate = null;
    var oldDate = new Date(v.date);
    var today = new Date();
    var weekAgo = new Date();
    var week = today.getDate() - 7;
    weekAgo.setDate(week);
    var last = listing.length - 1;

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
      md: "4",
      key: i,
      style: {
        cursor: 'pointer'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, last != i ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: {
        height: '200px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], {
      style: {
        padding: '10px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
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
        lineNumber: 146
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
        lineNumber: 147
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
        lineNumber: 148
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
        lineNumber: 149
      },
      __self: this
    }, "Date: ", finalDate))) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: {
        height: '200px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], {
      style: {
        padding: '10px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
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
        lineNumber: 156
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
        lineNumber: 157
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
        lineNumber: 158
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
        lineNumber: 159
      },
      __self: this
    }, "Date: ", finalDate))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      style: {
        height: '200px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], {
      style: {
        padding: '10px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, __jsx(CardImg, {
      top: true,
      width: "100%",
      height: "78px",
      src: "http://localhost:3001/ads/?r=".concat(randomNumber, ".jpg"),
      alt: "Item Image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardText"], {
      style: {
        position: "absolute",
        bottom: '20px',
        color: '#E01A1A',
        fontSize: '14px',
        fontWeight: 'bold'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }, "Size: ", size)))));
  }), stopscroll == false && fetchData && 'Loading....', listing.length == 0 && 'Loading...');
}

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ })

})
//# sourceMappingURL=index.js.62e15525f9123c129ef1.hot-update.js.map