"use strict";
exports.id = 2123;
exports.ids = [2123];
exports.modules = {

/***/ 33311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-0a9dc233",
  "path": "/front-end/yarn/cli.html",
  "title": "command-line commands",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "yarn add",
      "slug": "yarn-add",
      "children": []
    },
    {
      "level": 2,
      "title": "yarn remove",
      "slug": "yarn-remove",
      "children": []
    },
    {
      "level": 2,
      "title": "yarn init",
      "slug": "yarn-init",
      "children": []
    }
  ],
  "filePathRelative": "front-end/yarn/cli.md",
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

/***/ 18748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ cli_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(21666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/front-end/yarn/cli.html.vue?vue&type=template&id=b8488090



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TOC = (0,external_vue_.resolveComponent)("TOC")

  _push(`<!--[--><h1 id="command-line-commands" tabindex="-1"><a class="header-anchor" href="#command-line-commands" aria-hidden="true">#</a> command-line commands</h1><p><strong>Yarn</strong> 提供一系列丰富的命令行命令，这些命令在使用Yarn包的时候，包括安装，管理，发布等提供了一些列的帮助。</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_TOC, null, null, _parent))
  _push(`<h2 id="yarn-add" tabindex="-1"><a class="header-anchor" href="#yarn-add" aria-hidden="true">#</a> yarn add</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token operator">&lt;</span>package<span class="token operator">&gt;</span> -D
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="yarn-remove" tabindex="-1"><a class="header-anchor" href="#yarn-remove" aria-hidden="true">#</a> yarn remove</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> remove <span class="token operator">&lt;</span>package<span class="token punctuation">..</span>.<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>运行<code>yarn remove foo</code>会从依赖中移除<code>foo</code>这个包，更新<code>package.json</code>和<code>yarn.lock</code>文件。</p><p>其他的开发者可以通过运行<code>yarn install</code>去同步自己的<code>node_modules</code>目录</p><p>当移除一个包，会移除所有类型的依赖，比如<code>dependencies</code>，<code>devDependencies</code></p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>yarn remove</code>会更新<code>package.json</code>和<code>yarn.lock</code>文件。这样确保开发同一项目的不同的开发者都有相同的依赖。</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>yarn remove &lt;package&gt; --flag</code>和<code>yarn install</code>使用相同的<code>flag</code>参数</p></div><h2 id="yarn-init" tabindex="-1"><a class="header-anchor" href="#yarn-init" aria-hidden="true">#</a> yarn init</h2><!--]-->`)
}
;// CONCATENATED MODULE: ./.temp/pages/front-end/yarn/cli.html.vue?vue&type=template&id=b8488090

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/front-end/yarn/cli.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const cli_html = (__exports__);

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
//# sourceMappingURL=2123.app.js.map