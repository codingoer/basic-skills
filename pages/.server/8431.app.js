"use strict";
exports.id = 8431;
exports.ids = [8431];
exports.modules = {

/***/ 16043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-1ca057fc",
  "path": "/java/programing/input-and-output.html",
  "title": "Java中的输入与输出",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "读取输入",
      "slug": "读取输入",
      "children": []
    },
    {
      "level": 2,
      "title": "格式化输出",
      "slug": "格式化输出",
      "children": []
    }
  ],
  "filePathRelative": "java/programing/input-and-output.md",
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

/***/ 94000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ input_and_output_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/java/programing/input-and-output.html.vue?vue&type=template&id=d86f276e

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="java中的输入与输出" tabindex="-1"><a class="header-anchor" href="#java中的输入与输出" aria-hidden="true">#</a> Java中的输入与输出</h1><ul><li>System.out.println - 打印输出到标准输出流</li><li>System.in - 读取标准输入流</li></ul><h2 id="读取输入" tabindex="-1"><a class="header-anchor" href="#读取输入" aria-hidden="true">#</a> 读取输入</h2><p>通过控制台进行输入，首先需要构造<code>Scanner对象</code></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Scanner</span> in <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;what is your name?&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> name <span class="token operator">=</span> in<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;how old are you?&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> age <span class="token operator">=</span> in<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>name <span class="token operator">+</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="格式化输出" tabindex="-1"><a class="header-anchor" href="#格式化输出" aria-hidden="true">#</a> 格式化输出</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">double</span> x <span class="token operator">=</span> <span class="token number">10000.0</span> <span class="token operator">/</span> <span class="token number">3.0</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>ou<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;%8.2f&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// print is 3333.33</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/java/programing/input-and-output.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const input_and_output_html = (__exports__);

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
//# sourceMappingURL=8431.app.js.map