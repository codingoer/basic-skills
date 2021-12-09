"use strict";
exports.id = 2139;
exports.ids = [2139];
exports.modules = {

/***/ 47841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-67ace6b4",
  "path": "/java/jdk8/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Java8的一些新特性",
      "slug": "java8的一些新特性",
      "children": []
    },
    {
      "level": 2,
      "title": "函数式编程",
      "slug": "函数式编程",
      "children": []
    },
    {
      "level": 2,
      "title": "STREAM 流",
      "slug": "stream-流",
      "children": []
    },
    {
      "level": 2,
      "title": "ForEach()",
      "slug": "foreach",
      "children": []
    },
    {
      "level": 2,
      "title": "OPTIONAL",
      "slug": "optional",
      "children": []
    },
    {
      "level": 2,
      "title": "Lambda expressions",
      "slug": "lambda-expressions",
      "children": []
    },
    {
      "level": 2,
      "title": "functional interface",
      "slug": "functional-interface",
      "children": []
    },
    {
      "level": 2,
      "title": "接口中包含静态方法和默认方法",
      "slug": "接口中包含静态方法和默认方法",
      "children": []
    }
  ],
  "filePathRelative": "java/jdk8/README.md",
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

/***/ 13307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/java/jdk8/index.html.vue?vue&type=template&id=9cfb5a34

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 id="java8的一些新特性" tabindex="-1"><a class="header-anchor" href="#java8的一些新特性" aria-hidden="true">#</a> Java8的一些新特性</h2><p>什么时间发行的，2014年</p><h2 id="函数式编程" tabindex="-1"><a class="header-anchor" href="#函数式编程" aria-hidden="true">#</a> 函数式编程</h2><h2 id="stream-流" tabindex="-1"><a class="header-anchor" href="#stream-流" aria-hidden="true">#</a> STREAM 流</h2><p>Features</p><ul><li>forEach() method in Iterable interface</li><li>Functional Interfaces and Lambda Expressions</li></ul><h2 id="foreach" tabindex="-1"><a class="header-anchor" href="#foreach" aria-hidden="true">#</a> ForEach()</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>skus<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>productSku <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>productSku<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>stream一般用在并发比较高的场景，对CPU的消耗比较大，一般业务逻辑不建议使用。</p><h2 id="optional" tabindex="-1"><a class="header-anchor" href="#optional" aria-hidden="true">#</a> OPTIONAL</h2><p>在Java8之前，我们写代码要时刻注意</p><h2 id="lambda-expressions" tabindex="-1"><a class="header-anchor" href="#lambda-expressions" aria-hidden="true">#</a> Lambda expressions</h2><h2 id="functional-interface" tabindex="-1"><a class="header-anchor" href="#functional-interface" aria-hidden="true">#</a> functional interface</h2><h2 id="接口中包含静态方法和默认方法" tabindex="-1"><a class="header-anchor" href="#接口中包含静态方法和默认方法" aria-hidden="true">#</a> 接口中包含静态方法和默认方法</h2><p>在Java8之前，<code>接口</code>中只能含有公有的抽象方法，例如这样。在支付Service中，定义了获取积分的一个接口</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IPayService</span> <span class="token punctuation">{</span>

    <span class="token class-name">Points</span> <span class="token function">getPoints</span><span class="token punctuation">(</span><span class="token class-name">String</span> userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/java/jdk8/index.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const index_html = (__exports__);

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
//# sourceMappingURL=2139.app.js.map