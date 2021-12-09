"use strict";
exports.id = 5637;
exports.ids = [5637];
exports.modules = {

/***/ 96840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-76021ac9",
  "path": "/java/concurrency/lock/volatile.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "JMM",
      "slug": "jmm",
      "children": []
    },
    {
      "level": 2,
      "title": "volatile和synchronized的区别",
      "slug": "volatile和synchronized的区别",
      "children": []
    }
  ],
  "filePathRelative": "java/concurrency/lock/volatile.md",
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

/***/ 90615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ volatile_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/java/concurrency/lock/volatile.html.vue?vue&type=template&id=3fbad403

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><p>由于volatile关键字是与Java的内存模型有关的。</p><p>volatile它所修饰的变量不保留拷贝，直接访问主内存中的</p><p>并发之原子性、可见性、有序性</p><p>原子性：原子性意味着一个时刻，只有一个线程能够执行一段代码</p><p>可见性，有序性的概念。</p><h2 id="jmm" tabindex="-1"><a class="header-anchor" href="#jmm" aria-hidden="true">#</a> JMM</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>i <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>对于可见性，Java提供了volatile关键字来保证可见性。</p><p>缓存一致性问题？？</p><h2 id="volatile和synchronized的区别" tabindex="-1"><a class="header-anchor" href="#volatile和synchronized的区别" aria-hidden="true">#</a> volatile和synchronized的区别</h2><ul><li><p>volatile仅能使用在变量级别；synchronized则可以使用在变量、方法、和类级别的</p></li><li><p>volatile仅能实现变量的修改可见性，不能保证原子性；而synchronized则可以保证变量的修改可见性和原子性</p></li><li><p>volatile不会造成线程的阻塞；synchronized可能会造成线程的阻塞。</p></li></ul><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/java/concurrency/lock/volatile.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const volatile_html = (__exports__);

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
//# sourceMappingURL=5637.app.js.map