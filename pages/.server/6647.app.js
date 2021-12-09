"use strict";
exports.id = 6647;
exports.ids = [6647];
exports.modules = {

/***/ 92489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-67bc410f",
  "path": "/front-end/nodejs/yarn-and-npx.html",
  "title": "Install Yarn on your Ubuntu 18.04 system via the Yarn APT package repository",
  "lang": "zh-CN",
  "frontmatter": {
    "sidebarDepth": 3
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "npm常用命令",
      "slug": "npm常用命令",
      "children": []
    },
    {
      "level": 2,
      "title": "Creating a new project",
      "slug": "creating-a-new-project",
      "children": []
    },
    {
      "level": 2,
      "title": "Adding dependency",
      "slug": "adding-dependency",
      "children": []
    },
    {
      "level": 2,
      "title": "Upgrading dependency",
      "slug": "upgrading-dependency",
      "children": []
    },
    {
      "level": 2,
      "title": "Removing dependency",
      "slug": "removing-dependency",
      "children": []
    },
    {
      "level": 2,
      "title": "installing all project dependencies",
      "slug": "installing-all-project-dependencies",
      "children": []
    }
  ],
  "filePathRelative": "front-end/nodejs/yarn-and-npx.md",
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

/***/ 73530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ yarn_and_npx_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/front-end/nodejs/yarn-and-npx.html.vue?vue&type=template&id=583b5728

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><p>Npx is a very powerful command that’s been available in npm starting version 5.2. <code>npx</code> lets you run code built with Node and published through the npm registry.</p><p>npx is a tool intended to help round out the experience of using packages from the npm registry — the same way npm makes it super easy to install and manage dependencies hosted on the registry, npx makes it easy to use CLI tools and other executables hosted on the registry. It greatly simplifies a number of things that, until now, required a bit of ceremony to do with plain npm</p><p>Install</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm install -g npx
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="npm常用命令" tabindex="-1"><a class="header-anchor" href="#npm常用命令" aria-hidden="true">#</a> npm常用命令</h2><ul><li>安装</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> moduleNames
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>https://www.npmjs.com/package/npx https://www.npmjs.com/package/npx</p><p>Yarn is a JavaScript package manager compatible with npm that helps you automate the process of installing, updating, configuring, and removing npm packages.</p><p>It was created to solve a set of problems with the npm such as speeding up the packages installation process by parallelizing operations and reducing errors related to network connectivity.</p><h1 id="install-yarn-on-your-ubuntu-18-04-system-via-the-yarn-apt-package-repository" tabindex="-1"><a class="header-anchor" href="#install-yarn-on-your-ubuntu-18-04-system-via-the-yarn-apt-package-repository" aria-hidden="true">#</a> Install Yarn on your Ubuntu 18.04 system via the Yarn APT package repository</h1><ol><li>Enable the Yarn repository</li></ol><div class="language-SHELL ext-SHELL line-numbers-mode"><pre class="language-SHELL"><code>curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Add the Yarn APT repository to your system’s software repository list</p><div class="language-SHELL ext-SHELL line-numbers-mode"><pre class="language-SHELL"><code>echo &quot;deb https://dl.yarnpkg.com/debian/ stable main&quot; | sudo tee /etc/apt/sources.list.d/yarn.list
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li>update the package list and install Yarn</li></ol><div class="language-SHELL ext-SHELL line-numbers-mode"><pre class="language-SHELL"><code>sudo apt update
sudo apt install yarn
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="3"><li>Verify that Yarn installed successfully</li></ol><div class="language-SHELL ext-SHELL line-numbers-mode"><pre class="language-SHELL"><code>yarn --version
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h1 id="using-yarn" tabindex="-1"><a class="header-anchor" href="#using-yarn" aria-hidden="true">#</a> Using Yarn</h1><h2 id="creating-a-new-project" tabindex="-1"><a class="header-anchor" href="#creating-a-new-project" aria-hidden="true">#</a> Creating a new project</h2><p>To create a new Yarn project use the <code>yarn init</code> command</p><div class="language-SHELL ext-SHELL line-numbers-mode"><pre class="language-SHELL"><code>yarn init my_yarn_project
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="adding-dependency" tabindex="-1"><a class="header-anchor" href="#adding-dependency" aria-hidden="true">#</a> Adding dependency</h2><p>If you want to use another package in your project, you need to add it to the project dependencies</p><div class="language-SHELL ext-SHELL line-numbers-mode"><pre class="language-SHELL"><code>yarn add [package_name]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="upgrading-dependency" tabindex="-1"><a class="header-anchor" href="#upgrading-dependency" aria-hidden="true">#</a> Upgrading dependency</h2><p>To upgrade a dependency use one of the following</p><div class="language-SHELL ext-SHELL line-numbers-mode"><pre class="language-SHELL"><code>yarn upgrade [package_name]
yarn upgrade [package_name]@[version_or_tag]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="removing-dependency" tabindex="-1"><a class="header-anchor" href="#removing-dependency" aria-hidden="true">#</a> Removing dependency</h2><p>Use the yarn remove command followed by the package name to remove a dependency</p><div class="language-SHELL ext-SHELL line-numbers-mode"><pre class="language-SHELL"><code>yarn remove [package_name]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="installing-all-project-dependencies" tabindex="-1"><a class="header-anchor" href="#installing-all-project-dependencies" aria-hidden="true">#</a> installing all project dependencies</h2><p>To install all project dependencies that are specified in the <code>package.json</code> file run:</p><div class="language-SHELL ext-SHELL line-numbers-mode"><pre class="language-SHELL"><code>yarn install
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h1 id="installing-yarn-on-centos" tabindex="-1"><a class="header-anchor" href="#installing-yarn-on-centos" aria-hidden="true">#</a> Installing Yarn on CentOS</h1><ol><li>If you already don’t have <code>Node.js</code> installed on your system, enable the Nodesource repository with the following <code>curl</code> command:</li></ol><div class="language-SHELL ext-SHELL line-numbers-mode"><pre class="language-SHELL"><code>curl --silent --location https://rpm.nodesource.com/setup_8.x | sudo bash -
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li>Install the Node.js package by typing:</li></ol><div class="language-SHELL ext-SHELL line-numbers-mode"><pre class="language-SHELL"><code>sudo yum install nodejs
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3"><li>To enable the Yarn repository and import the repository’s GPG key issue the following commands:</li></ol><div class="language-SHELL ext-SHELL line-numbers-mode"><pre class="language-SHELL"><code>curl --silent --location https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo
sudo rpm --import https://dl.yarnpkg.com/rpm/pubkey.gpg
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="4"><li>Install Yarn</li></ol><div class="language-SHELL ext-SHELL line-numbers-mode"><pre class="language-SHELL"><code>sudo yum install yarn
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="5"><li>Verify the installation</li></ol><div class="language-SHELL ext-SHELL line-numbers-mode"><pre class="language-SHELL"><code>yarn --version
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h1 id="yarn-vs-npx" tabindex="-1"><a class="header-anchor" href="#yarn-vs-npx" aria-hidden="true">#</a> Yarn VS Npx</h1><p>如果yarn.lock文件更新了，如何自动更新项目里面的依赖</p><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/front-end/nodejs/yarn-and-npx.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const yarn_and_npx_html = (__exports__);

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
//# sourceMappingURL=6647.app.js.map