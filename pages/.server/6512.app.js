"use strict";
exports.id = 6512;
exports.ids = [6512];
exports.modules = {

/***/ 53012:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-b1a02bae",
  "path": "/front-end/webpack/loader/",
  "title": "Loaders",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "如何使用Loaders",
      "slug": "如何使用loaders",
      "children": []
    },
    {
      "level": 2,
      "title": "为什么会有Loaders",
      "slug": "为什么会有loaders",
      "children": []
    },
    {
      "level": 2,
      "title": "举个栗子",
      "slug": "举个栗子",
      "children": []
    },
    {
      "level": 2,
      "title": "使用Loaders",
      "slug": "使用loaders",
      "children": [
        {
          "level": 3,
          "title": "配置的方式",
          "slug": "配置的方式",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "front-end/webpack/loader/README.md",
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

/***/ 60598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/front-end/webpack/loader/index.html.vue?vue&type=template&id=508e931c

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="loaders" tabindex="-1"><a class="header-anchor" href="#loaders" aria-hidden="true">#</a> Loaders</h1><p>loaders n.装载机，这里我翻译成加载器，其实意思都差不多。</p><p>webpack可以使用加载器(<code>loaders</code>)来处理文件。这样以来，就可以绑定任何的静态资源文件，这些文件不仅仅局限于JavaScript。可以使用Node.js编写自己的加载器。</p><p>加载器是应用于将源代码转换为模块的转换。这允许我们通过<code>import</code>来处理文件。因此，加载器可以看作是一些列的任务，并且提供一种强大的方式处理前端构建步骤。加载器可以将不同语言的文件（比如TypeScirpt）转换为JavaScript。加载器也可以直接从JavaScript模块中<code>import</code>CSS文件。</p><h2 id="如何使用loaders" tabindex="-1"><a class="header-anchor" href="#如何使用loaders" aria-hidden="true">#</a> 如何使用Loaders</h2><p>如果想要使用哪一个加载器，通过指定<code>loadersname</code>来激活。</p><ol><li>在require中使用</li><li>通过正则表达式在webpack配置中使用</li></ol><h2 id="为什么会有loaders" tabindex="-1"><a class="header-anchor" href="#为什么会有loaders" aria-hidden="true">#</a> 为什么会有Loaders</h2><h2 id="举个栗子" tabindex="-1"><a class="header-anchor" href="#举个栗子" aria-hidden="true">#</a> 举个栗子</h2><blockquote><p>使用加载器导入Css文件</p></blockquote><ol><li>无论使用哪一种加载器，首先都要安装</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm install <span class="token operator">--</span>save<span class="token operator">-</span>dev css<span class="token operator">-</span>loader
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li>命令<code>webpack</code>使用加载器处理<code>.css</code>文件，在<code>webpack.config.js</code>中</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  module<span class="token operator">:</span> <span class="token punctuation">{</span>
    rules<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css\$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> use<span class="token operator">:</span> <span class="token string">&#39;css-loader&#39;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="使用loaders" tabindex="-1"><a class="header-anchor" href="#使用loaders" aria-hidden="true">#</a> 使用<code>Loaders</code></h2><p>官网提供了三种方式</p><ul><li>推荐的方式，在<code>webpack.config.js</code>中指定</li><li>在<code>import</code>语句中指定</li><li>通过命令行方式</li></ul><h3 id="配置的方式" tabindex="-1"><a class="header-anchor" href="#配置的方式" aria-hidden="true">#</a> 配置的方式</h3><p>先来了解一个语法<code>module.rules</code>。</p><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/front-end/webpack/loader/index.html.vue

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
//# sourceMappingURL=6512.app.js.map