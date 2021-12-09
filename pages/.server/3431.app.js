"use strict";
exports.id = 3431;
exports.ids = [3431];
exports.modules = {

/***/ 76088:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-08ccb52c",
  "path": "/front-end/nodejs/installation.html",
  "title": "Nodejs安装说明",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "使用Yum安装",
      "slug": "使用yum安装",
      "children": []
    },
    {
      "level": 2,
      "title": "使用NVM安装",
      "slug": "使用nvm安装",
      "children": []
    },
    {
      "level": 2,
      "title": "更新 npm and node.js",
      "slug": "更新-npm-and-node-js",
      "children": []
    },
    {
      "level": 2,
      "title": "mac上安装nodejs",
      "slug": "mac上安装nodejs",
      "children": []
    }
  ],
  "filePathRelative": "front-end/nodejs/installation.md",
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

/***/ 30468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ installation_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/front-end/nodejs/installation.html.vue?vue&type=template&id=1585fb3a

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="nodejs安装说明" tabindex="-1"><a class="header-anchor" href="#nodejs安装说明" aria-hidden="true">#</a> Nodejs安装说明</h1><p><code>Node.js</code>是一个跨平台的JavaScript运行时环境，允许服务端运行在JavaScript代码上。</p><p><code>npm</code> <strong>Node Package Manager</strong>，是默认的node.js的包管理工具，并且是世界上最大的开源Node.js发布软件存储库。</p><h2 id="使用yum安装" tabindex="-1"><a class="header-anchor" href="#使用yum安装" aria-hidden="true">#</a> 使用Yum安装</h2><p>使用<strong>yum</strong>包管理工具安装Node.js和npm。如果使用Node.js仅仅是开发Node.js应用，那么最简单的安装方式就是通过<code>yum</code>安装。</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>添加node的依赖仓库，将NodeSource仓库添加到系统</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> -sL https://rpm.nodesource.com/setup_10.x <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">bash</span> -
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> nodejs
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>校验安装是否成功</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>node --version
<span class="token function">npm</span> --version
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="使用nvm安装" tabindex="-1"><a class="header-anchor" href="#使用nvm安装" aria-hidden="true">#</a> 使用NVM安装</h2><p>NVM（<strong>Node Version Manager</strong>）是一个bash脚本用来管理多版本Node.js。NVM允许我们安装或卸载指定的Node.js版本，这也就意味着我们可以使用我们自己想要的Node.js版本。</p><blockquote><p>We strongly recommend using a Node version manager to install Node.js and npm.</p></blockquote><p>安装NVM</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh <span class="token operator">|</span> <span class="token function">bash</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>OR</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh <span class="token operator">|</span> <span class="token function">bash</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>使用nvm安装Node.js</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nvm <span class="token function">install</span> node
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>查看所有版本</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nvm list-remote
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>安装多个版本</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nvm <span class="token function">install</span> v8.14.1
nvm <span class="token function">install</span> v10.14.2
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>查看已安装的版本</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nvm <span class="token function">ls</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>改变当前使用的版本</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nvm use v8.14.1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>使用yum安装更简单，使用nvm可以使用多版本的node.js。</p><h1 id="ubuntu上安装nodejs" tabindex="-1"><a class="header-anchor" href="#ubuntu上安装nodejs" aria-hidden="true">#</a> ubuntu上安装nodejs</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> nodejs
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token function">npm</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nodejs --version
<span class="token function">npm</span> --version
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="更新-npm-and-node-js" tabindex="-1"><a class="header-anchor" href="#更新-npm-and-node-js" aria-hidden="true">#</a> 更新 npm and node.js</h2><ol><li>see what version of npm you&#39;re running</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm <span class="token operator">-</span>v
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li>upgrading on Linux</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>sudo npm install <span class="token operator">-</span>g npm
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="mac上安装nodejs" tabindex="-1"><a class="header-anchor" href="#mac上安装nodejs" aria-hidden="true">#</a> mac上安装nodejs</h2><p>使用nvm安装</p><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/front-end/nodejs/installation.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const installation_html = (__exports__);

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
//# sourceMappingURL=3431.app.js.map