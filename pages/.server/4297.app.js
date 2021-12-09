"use strict";
exports.id = 4297;
exports.ids = [4297];
exports.modules = {

/***/ 9013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-8c02d0de",
  "path": "/front-end/",
  "title": "前端技术总结",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Modules",
      "slug": "modules",
      "children": []
    },
    {
      "level": 2,
      "title": "Webpack中的模块",
      "slug": "webpack中的模块",
      "children": []
    }
  ],
  "filePathRelative": "front-end/README.md",
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

/***/ 76600:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/front-end/index.html.vue?vue&type=template&id=6c72c2f5



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="前端技术总结" tabindex="-1"><a class="header-anchor" href="#前端技术总结" aria-hidden="true">#</a> 前端技术总结</h1><p>https://risingstars.js.org/2018/en/#section-compiler</p><p>jquery <code>\$.each()</code>与<code>\$().each</code>的区别？</p><p><code>\$().each</code>在dom上处理的比较多</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">\$</span><span class="token punctuation">(</span><span class="token string">&quot;input[name=&#39;propertyName&#39;]&quot;</span><span class="token punctuation">,</span> \$importModal<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>checked<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       array<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>遍历一个数组通常用<code>\$.each()</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> \$list <span class="token operator">=</span> <span class="token function">\$</span><span class="token punctuation">(</span><span class="token string">&quot;#promotion-reduce .promotion-reduce-group&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

\$<span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span>\$list<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">index<span class="token punctuation">,</span> gift</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> kvs <span class="token operator">=</span> <span class="token function">\$</span><span class="token punctuation">(</span><span class="token string">&quot;.form-control&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    \$<span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span>kvs<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> val <span class="token operator">=</span> <span class="token function">\$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>val <span class="token operator">||</span> <span class="token function">isNaN</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            hasNull <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>区别：</p><p>开源后台空值面板</p><ul><li><a href="https://github.com/almasaeed2010/AdminLTE" target="_blank" rel="noopener noreferrer">AdminLTE`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a><ul><li>Bootstrap 3.x</li></ul></li><li><a href="https://github.com/PanJiaChen/vue-element-admin" target="_blank" rel="noopener noreferrer">vue-Element-Admin`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a><ul><li>vue2.0</li></ul></li><li><a href="https://github.com/tabler/tabler" target="_blank" rel="noopener noreferrer">tabler`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a><ul><li>BootStrap 4</li></ul></li><li><a href="https://github.com/puikinsh/gentelella" target="_blank" rel="noopener noreferrer">Gentelella`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a><ul><li>Bootstarp</li></ul></li><li><a href="https://github.com/akveo/ngx-admin" target="_blank" rel="noopener noreferrer">ng2-admin`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a><ul><li>Angular 2</li><li>Bootstrap 4</li><li>Webpack</li></ul></li><li><a href="https://github.com/ant-design/ant-design-pro" target="_blank" rel="noopener noreferrer">ant-design-pro`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://github.com/akveo/blur-admin" target="_blank" rel="noopener noreferrer">blur-admin`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://github.com/vue-bulma/vue-admin" target="_blank" rel="noopener noreferrer">vue-admin`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://github.com/iview/iview-admin" target="_blank" rel="noopener noreferrer">iview-admin`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://github.com/creativetimofficial/material-dashboard" target="_blank" rel="noopener noreferrer">material-dashboard`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://github.com/bopoda/ace" target="_blank" rel="noopener noreferrer">Ace admin`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul><p>https://medium.com/front-end-weekly/what-are-npm-yarn-babel-and-webpack-and-how-to-properly-use-them-d835a758f987</p><p>现代前端插件安装方式一般有两种</p><ol><li>模块打包方式，比如webpack，先通过npm安装</li><li>JavaScript标签包含的方式 including it in a script tag</li></ol><p>现代JavaScript <code>Modern Javascript</code> 从简单的HTML和JS转向<code>包管理器(package manager)</code>，来下载第三方依赖。使用模块打包器<code>module bundler</code>来创建单个脚本</p><p>module bundler such as Webpack Browserify and so on</p><p><code>包管理器</code>:yarn and npm <code>模块打包工具</code>:webpack and browserfiy</p><p><code>现代Javascript</code>应用程序</p><p>模块的概念，JavaScript的模块，webpack中的模块</p><h2 id="modules" tabindex="-1"><a class="header-anchor" href="#modules" aria-hidden="true">#</a> Modules</h2><p><code>模块化编程</code>，即开发者将程序分解成<code>离散功能块</code>，称之为模块。</p><h2 id="webpack中的模块" tabindex="-1"><a class="header-anchor" href="#webpack中的模块" aria-hidden="true">#</a> Webpack中的模块</h2><p>Which package manager would you like to use?</p><ul><li>yarn</li><li>npm</li></ul><p>Which is better ?</p><p><code>Webpack</code> or <code>Gulp</code> or <code>Grunt</code></p><!--]-->`)
}
;// CONCATENATED MODULE: ./.temp/pages/front-end/index.html.vue?vue&type=template&id=6c72c2f5

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/front-end/index.html.vue

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
//# sourceMappingURL=4297.app.js.map