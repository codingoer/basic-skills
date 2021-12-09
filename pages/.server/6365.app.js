"use strict";
exports.id = 6365;
exports.ids = [6365];
exports.modules = {

/***/ 40819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-0a4e80f3",
  "path": "/front-end/webpack/",
  "title": "Webpack",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "什么是webpack",
      "slug": "什么是webpack",
      "children": []
    },
    {
      "level": 2,
      "title": "如何使用它",
      "slug": "如何使用它",
      "children": []
    }
  ],
  "filePathRelative": "front-end/webpack/README.md",
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

/***/ 79144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/front-end/webpack/index.html.vue?vue&type=template&id=a9a6e866

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> Webpack</h1><p>安装后，可以通过<code>CLI</code>或者<code>API</code>和webpack进行交互</p><h2 id="什么是webpack" tabindex="-1"><a class="header-anchor" href="#什么是webpack" aria-hidden="true">#</a> 什么是webpack</h2><p>现代Javascript应用程序的静态模块<code>打包器</code>。</p><p>!&gt; Webpack被用来编译JavaScript模块，将一些独立的模块，比如很多个js文件打包成一个js文件</p><p>先理解<code>bundle</code>这个单词 n. 捆；束；包； v. 捆；把 ... 扎成一捆</p><p>webpack是一个<code>打包工具</code>，可以将项目中所有的<code>资源</code>打包，这些资源包含<code>css样式</code>，<code>js脚本</code>，<code>图片</code>。</p><h2 id="如何使用它" tabindex="-1"><a class="header-anchor" href="#如何使用它" aria-hidden="true">#</a> 如何使用它</h2><p>module.exports</p><p>Webpack is a modular build tool that has two sets of functionality</p><ol><li>Loaders</li><li>plugins</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> webpack <span class="token keyword">from</span> <span class="token string">&#39;webpack&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// Try the environment variable, otherwise use root</span>
<span class="token keyword">const</span> <span class="token constant">ASSET_PATH</span> <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">ASSET_PATH</span> <span class="token operator">||</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  output<span class="token operator">:</span> <span class="token punctuation">{</span>
    publicPath<span class="token operator">:</span> <span class="token constant">ASSET_PATH</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// This makes it possible for us to safely use env vars on our code</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DefinePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token string">&#39;process.env.ASSET_PATH&#39;</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token constant">ASSET_PATH</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>require是webpack的关键字</p><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/front-end/webpack/index.html.vue

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
//# sourceMappingURL=6365.app.js.map