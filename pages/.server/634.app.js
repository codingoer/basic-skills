"use strict";
exports.id = 634;
exports.ids = [634];
exports.modules = {

/***/ 6301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-649cea26",
  "path": "/java/concurrency/thread/glossary.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "java/concurrency/thread/glossary.md",
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

/***/ 73155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ glossary_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/java/concurrency/thread/glossary.html.vue?vue&type=template&id=26e2a326

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><p>线程通常都是由操作系统处理。</p><ol><li>线程都是随机执行。可以改变线程的执行顺序吗</li><li>线程由哪个处理器执行也是随机的。多个处理器可以同时处理一个线程</li><li>线程是交互运行的，也可以是同一时刻同时运行（多核CPU）</li></ol><p>如果有一个线程，操作系统调度这个线程在一个处理器上执行。运行一小片时间段，就会暂停。在暂停的时候其他的线程就会得到机会执行。举个栗子，我们有一台双核四线程的机器， https://www.quora.com/What-is-the-relationship-between-the-threads-in-Java-and-processors-How-are-the-threads-handled-by-processors-Consider-the-scenario-with-4-threads-in-2-processors</p><p>What is the difference between CPU core and thread? Java中的线程与CPU内核的不同之处？ https://www.quora.com/What-is-the-difference-between-CPU-core-and-thread</p><p>Does a new thread in Java run on a different processor core? 一个新的线程会运行在不同的CPU处理器上吗？ https://www.quora.com/Does-a-new-thread-in-Java-run-on-a-different-processor-core</p><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/java/concurrency/thread/glossary.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const glossary_html = (__exports__);

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
//# sourceMappingURL=634.app.js.map