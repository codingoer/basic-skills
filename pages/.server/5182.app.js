"use strict";
exports.id = 5182;
exports.ids = [5182];
exports.modules = {

/***/ 71544:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-320162a6",
  "path": "/java/programing/keyword.html",
  "title": "Java中的关键字",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "final vs finally vs finalize",
      "slug": "final-vs-finally-vs-finalize",
      "children": []
    },
    {
      "level": 2,
      "title": "this和super",
      "slug": "this和super",
      "children": []
    }
  ],
  "filePathRelative": "java/programing/keyword.md",
  "git": {
    "updatedTime": 1639064924000,
    "contributors": [
      {
        "name": "codingoer",
        "email": "codingoer@163.com",
        "commits": 1
      }
    ]
  }
}


/***/ }),

/***/ 27255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ keyword_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/java/programing/keyword.html.vue?vue&type=template&id=157d734c

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="java中的关键字" tabindex="-1"><a class="header-anchor" href="#java中的关键字" aria-hidden="true">#</a> Java中的关键字</h1><h2 id="final-vs-finally-vs-finalize" tabindex="-1"><a class="header-anchor" href="#final-vs-finally-vs-finalize" aria-hidden="true">#</a> final vs finally vs finalize</h2><ul><li>final</li></ul><p><strong>final并不等同于不可变</strong></p><p>Java编译器可以对final变量进行一些特别的优化，如果数据复制后就不应该再变了，就加final修饰符。</p><p>可以用来修饰类、方法、变量，分别有不同的意义，final修饰的类代表不可以继承扩展，final的变量是不可以修改的，而final的方法也是不可以重写的。</p><ul><li><p>finally</p></li><li><p>finalize</p></li></ul><p>finalize是基础类java.lang.Object的一个方法，它的设计目的是保证对象在被垃圾收集前完成特定资源的回收。finalize机制现在已经不推荐使用。</p><h2 id="this和super" tabindex="-1"><a class="header-anchor" href="#this和super" aria-hidden="true">#</a> this和super</h2><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/java/programing/keyword.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const keyword_html = (__exports__);

/***/ }),

/***/ 83744:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ })

};
;
//# sourceMappingURL=5182.app.js.map