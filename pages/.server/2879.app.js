"use strict";
exports.id = 2879;
exports.ids = [2879];
exports.modules = {

/***/ 72231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-11c6338d",
  "path": "/java/collection/generics/generic-class.html",
  "title": "泛型类",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "泛型类与普通类的区别",
      "slug": "泛型类与普通类的区别",
      "children": []
    },
    {
      "level": 2,
      "title": "泛型类的使用",
      "slug": "泛型类的使用",
      "children": []
    }
  ],
  "filePathRelative": "java/collection/generics/generic-class.md",
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

/***/ 99317:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ generic_class_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/java/collection/generics/generic-class.html.vue?vue&type=template&id=2a357856

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="泛型类" tabindex="-1"><a class="header-anchor" href="#泛型类" aria-hidden="true">#</a> 泛型类</h1><div class="custom-container tip"><p class="custom-container-title">泛型类的定义</p><p>泛型类（generic class）是一个具有一个或多个<strong>类型变量</strong>的类。</p></div><p>泛型类引入了一个<strong>类型变量T，用&lt;&gt;括起来</strong>，放在类名后面。</p><p>T表示<code>类型参数</code>，泛型就是<code>类型参数化</code>，处理的数据类型不是固定的，而是可以作为参数传入。</p><h2 id="泛型类与普通类的区别" tabindex="-1"><a class="header-anchor" href="#泛型类与普通类的区别" aria-hidden="true">#</a> 泛型类与普通类的区别</h2><ol><li>类名后面多了一个<code>&lt;T&gt;</code></li><li>类中的属性的类型都是T</li></ol><h2 id="泛型类的使用" tabindex="-1"><a class="header-anchor" href="#泛型类的使用" aria-hidden="true">#</a> 泛型类的使用</h2><p>从Java7开始，支持省略后面的参数类型</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/java/collection/generics/generic-class.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const generic_class_html = (__exports__);

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
//# sourceMappingURL=2879.app.js.map