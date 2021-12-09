"use strict";
exports.id = 4010;
exports.ids = [4010];
exports.modules = {

/***/ 80961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-8f21b142",
  "path": "/front-end/npm.html",
  "title": "CLI documentation",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "install",
      "slug": "install",
      "children": []
    },
    {
      "level": 2,
      "title": "About",
      "slug": "about",
      "children": []
    },
    {
      "level": 2,
      "title": "CLI (Command Line Interface)",
      "slug": "cli-command-line-interface",
      "children": []
    },
    {
      "level": 2,
      "title": "packages and modules",
      "slug": "packages-and-modules",
      "children": []
    }
  ],
  "filePathRelative": "front-end/npm.md",
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

/***/ 28160:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ npm_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(21666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/front-end/npm.html.vue?vue&type=template&id=8a0a94e8



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TOC = (0,external_vue_.resolveComponent)("TOC")

  _push(`<!--[--><h1 id="cli-documentation" tabindex="-1"><a class="header-anchor" href="#cli-documentation" aria-hidden="true">#</a> CLI documentation</h1>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_TOC, null, null, _parent))
  _push(`<h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> install</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>安装一个包会把这个包所有依赖的包都安装</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token operator">&lt;</span>package<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>查看全局安装的包</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">ls</span> -g --depth <span class="token number">0</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>cnpm -v</p><p>淘宝npm的使用 使用cnpm</p><p>npm install -g cnpm --registry=https://registry.npm.taobao.org</p><p>网址： https://developer.aliyun.com/mirror/NPM?from=tnpm</p><p>npm WARN deprecated har-validator@5.1.5: this library is no longer supported /Users/lionel/.nvm/versions/node/v10.15.3/bin/cnpm -&gt; /Users/lionel/.nvm/versions/node/v10.15.3/lib/node_modules/cnpm/bin/cnpm</p><ul><li>cnpm@6.1.1 added 685 packages from 970 contributors in 9.852s</li></ul><h1 id="npx-介绍" tabindex="-1"><a class="header-anchor" href="#npx-介绍" aria-hidden="true">#</a> npx 介绍</h1><p>npx主要解决了哪些问题，调用项目中安装的模块 http://www.ruanyifeng.com/blog/2019/02/npx.html</p><p>https://medium.com/coinmonks/everything-you-wanted-to-know-about-package-lock-json-b81911aa8ab8</p><h2 id="about" tabindex="-1"><a class="header-anchor" href="#about" aria-hidden="true">#</a> About</h2><p>NPM stands for Node Package Manager</p><h2 id="cli-command-line-interface" tabindex="-1"><a class="header-anchor" href="#cli-command-line-interface" aria-hidden="true">#</a> CLI (Command Line Interface)</h2><h2 id="packages-and-modules" tabindex="-1"><a class="header-anchor" href="#packages-and-modules" aria-hidden="true">#</a> packages and modules</h2><p>NPM注册中心包含许多包，包下面有许多node模块</p><p>A package is a file or directory that is described by a package.json file</p><p>A module is any file or directory in the node_modules directory that can be loaded by the Node.js require() function.</p><p>package.json package-lock.json</p><p>package.json是npm的东西</p><p>查看<code>服务器上</code>的包的版本信息</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> view docsify versions
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> view docsify version
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> info docsify
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>查看<code>本地</code>安装的包的版本信息</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">ls</span> webpack
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">ls</span> webpack -g
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>出现权限错误,执行下面两个步骤</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">chown</span> -R lionel:lionel ~/.npm
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">chown</span> -R lionel:lionel ~/.config
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>根据<code>package.json</code>将依赖的包下载下来</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>下载<code>ejs</code>日志</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Thank you for installing EJS: built with the Jake JavaScript build tool (https://jakejs.com/)

npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN babel-eslint@10.0.3 requires a peer of eslint@&gt;= 4.12.1 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {&quot;os&quot;:&quot;darwin&quot;,&quot;arch&quot;:&quot;any&quot;} (current: {&quot;os&quot;:&quot;linux&quot;,&quot;arch&quot;:&quot;x64&quot;})

added 882 packages from 712 contributors and audited 17802 packages in 36.228s
found 12 vulnerabilities (5 low, 1 moderate, 6 high)
  run \`npm audit fix\` to fix them, or \`npm audit\` for details
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><code>package-lock.json</code> npm notice created a lockfile as package-lock.json. You should commit this file.</p><!--]-->`)
}
;// CONCATENATED MODULE: ./.temp/pages/front-end/npm.html.vue?vue&type=template&id=8a0a94e8

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/front-end/npm.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const npm_html = (__exports__);

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
//# sourceMappingURL=4010.app.js.map