"use strict";
exports.id = 9738;
exports.ids = [9738];
exports.modules = {

/***/ 64331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-4520f4a8",
  "path": "/front-end/webpack/configuration/",
  "title": "配置webpack",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "使用不同的配置文件",
      "slug": "使用不同的配置文件",
      "children": []
    },
    {
      "level": 2,
      "title": "快速生成webpack.config.js",
      "slug": "快速生成webpack-config-js",
      "children": []
    },
    {
      "level": 2,
      "title": "webpack.config.js详解",
      "slug": "webpack-config-js详解",
      "children": []
    }
  ],
  "filePathRelative": "front-end/webpack/configuration/README.md",
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

/***/ 48553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(21666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/front-end/webpack/configuration/index.html.vue?vue&type=template&id=9143bc84



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="配置webpack" tabindex="-1"><a class="header-anchor" href="#配置webpack" aria-hidden="true">#</a> 配置webpack</h1><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>webpack可以不使用配置文件.</p></div><p>如果不使用配置文件，默认情况下认为入口文件在项目的<code>src/index</code>目录中，输出结果在<code>dist/main.js</code>文件中。</p><p>通常情况下，我们的项目需要一些配置，所以在项目<code>根目录</code>创建<code>webpack.config.js</code>文件用于一些自定义配置。webpack会自动找到这个配置文件。</p><h2 id="使用不同的配置文件" tabindex="-1"><a class="header-anchor" href="#使用不同的配置文件" aria-hidden="true">#</a> 使用不同的配置文件</h2><p>在<code>package.json</code>中指定配置文件</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack --config prod.config.js&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="快速生成webpack-config-js" tabindex="-1"><a class="header-anchor" href="#快速生成webpack-config-js" aria-hidden="true">#</a> 快速生成webpack.config.js</h2><p><a href="https://generatewebpackconfig.netlify.com/" target="_blank" rel="noopener noreferrer">在线工具`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><p>或者使用webpack自带的<code>cli</code>命令</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>npx webpack-cli init
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="webpack-config-js详解" tabindex="-1"><a class="header-anchor" href="#webpack-config-js详解" aria-hidden="true">#</a> webpack.config.js详解</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  entry<span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  output<span class="token operator">:</span> <span class="token punctuation">{</span>
    filename<span class="token operator">:</span> <span class="token string">&#39;bundle.js&#39;</span><span class="token punctuation">,</span>
    path<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  module<span class="token operator">:</span> <span class="token punctuation">{</span>
    rules<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css\$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        use<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;css-loader&#39;</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./.temp/pages/front-end/webpack/configuration/index.html.vue?vue&type=template&id=9143bc84

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/front-end/webpack/configuration/index.html.vue

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
//# sourceMappingURL=9738.app.js.map