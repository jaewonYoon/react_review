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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _jsxFileName = "C:\\Users\\jaewon\\Desktop\\web\\react_review\\nodebird\\front\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // 메인화면 루트 파일 next는 import react를 하지 않아도 된다.  

var dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [{
    User: {
      id: 1,
      nickname: 'Jay'
    },
    content: '첫 번째 게시글'
  }]
};

var Home = function Home() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, dummy.isLoggedIn && __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    encType: "multipart/form-data",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Input"].TextArea, {
    maxLength: 140,
    placeholder: "\uC5B4\uB5A4 \uC2E0\uAE30\uD55C \uC77C\uC774 \uC788\uC5C8\uB098\uC694?",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("input", {
    type: "file",
    multiple: true,
    hidden: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, " \uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "primary",
    style: {
      "float": 'right'
    },
    htmlType: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "\uC9F9\uCA31")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, dummy.imagePaths.map(function (v, i) {
    return __jsx("div", {
      key: v,
      style: {
        display: 'inline-block'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("img", {
      src: 'http://localhost:3000/' + v,
      style: {
        width: '200px'
      },
      alt: v,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, "\uC81C\uAC70")));
  }))), dummy.mainPosts.map(function (c) {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Card"], {
      key: +c.createdAt,
      cover: c.img && __jsx("img", {
        alt: "example",
        src: c.img,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }),
      actions: [__jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
        type: "retweet",
        key: "retweet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
        type: "heart",
        key: "heart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
        type: "message",
        key: "message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
        type: "ellipsis",
        key: "ellipsis",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      })],
      extra: __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "\uD314\uB85C\uC6B0"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Card"].Meta, {
      avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, c.User.nickname[0]),
      title: c.User.nicname,
      description: c.content,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.6f92f44fd2ffda1c4b17.hot-update.js.map