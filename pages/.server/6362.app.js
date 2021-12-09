"use strict";
exports.id = 6362;
exports.ids = [6362];
exports.modules = {

/***/ 16012:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-58b3f1bb",
  "path": "/os/mac/xcode-command-line-tools.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Xcode Command Line Tools",
      "slug": "xcode-command-line-tools",
      "children": []
    },
    {
      "level": 2,
      "title": "Is Xcode Already Installed?",
      "slug": "is-xcode-already-installed",
      "children": []
    },
    {
      "level": 2,
      "title": "Install Xcode Command Line Tools",
      "slug": "install-xcode-command-line-tools",
      "children": []
    },
    {
      "level": 2,
      "title": "The relationship between homebrew and xcode command line tools",
      "slug": "the-relationship-between-homebrew-and-xcode-command-line-tools",
      "children": []
    },
    {
      "level": 2,
      "title": "ReInstall Xcode Command Line Tools",
      "slug": "reinstall-xcode-command-line-tools",
      "children": []
    },
    {
      "level": 2,
      "title": "/Library/Developer/CommandLineTools",
      "slug": "library-developer-commandlinetools",
      "children": []
    }
  ],
  "filePathRelative": "os/mac/xcode-command-line-tools.md",
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

/***/ 21619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ xcode_command_line_tools_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/os/mac/xcode-command-line-tools.html.vue?vue&type=template&id=ccb080b8

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 id="xcode-command-line-tools" tabindex="-1"><a class="header-anchor" href="#xcode-command-line-tools" aria-hidden="true">#</a> Xcode Command Line Tools</h2><p>Xcode is a large suite of software development tools and libraries from apple. Xcode Command Line Tools are part of Xcode Installation of many common Unix-based tools requires the <code>GCC compiler</code>,The Xcode Command Line Tools include a GCC compiler</p><h2 id="is-xcode-already-installed" tabindex="-1"><a class="header-anchor" href="#is-xcode-already-installed" aria-hidden="true">#</a> Is Xcode Already Installed?</h2><p>You don’t need the full Xcode package to get the Xcode Command Line Tools</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>xcode-select -p
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="install-xcode-command-line-tools" tabindex="-1"><a class="header-anchor" href="#install-xcode-command-line-tools" aria-hidden="true">#</a> Install Xcode Command Line Tools</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>xcode-select --install
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Verify that you’ve successfully installed Xcode Command Line Tools:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>xcode-select -p
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gcc --version
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="the-relationship-between-homebrew-and-xcode-command-line-tools" tabindex="-1"><a class="header-anchor" href="#the-relationship-between-homebrew-and-xcode-command-line-tools" aria-hidden="true">#</a> The relationship between homebrew and xcode command line tools</h2><h2 id="reinstall-xcode-command-line-tools" tabindex="-1"><a class="header-anchor" href="#reinstall-xcode-command-line-tools" aria-hidden="true">#</a> ReInstall Xcode Command Line Tools</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">rm</span> -rf /Library/Developer/CommandLineTools
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>删除文件夹后执行：gcc -v</p><p>xcrun: error: active developer path (&quot;/Library/Developer/CommandLineTools&quot;) does not exist Use <code>sudo xcode-select --switch path/to/Xcode.app</code> to specify the Xcode that you wish to use for command line developer tools, or use <code>xcode-select --install</code> to install the standalone command line developer tools. See <code>man xcode-select</code> for more details.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>xcode-select --install
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="library-developer-commandlinetools" tabindex="-1"><a class="header-anchor" href="#library-developer-commandlinetools" aria-hidden="true">#</a> /Library/Developer/CommandLineTools</h2><p>http://railsapps.github.io/xcode-command-line-tools.html</p><p>https://github.com/kennethreitz/osx-gcc-installer</p><p>https://osxdaily.com/2014/02/12/install-command-line-tools-mac-os-x/</p><p>http://railsapps.github.io/xcode-command-line-tools.html</p><p>https://segmentfault.com/a/1190000018045211?utm_source=tag-newest</p><p>https://osxdaily.com/2014/02/12/install-command-line-tools-mac-os-x/</p><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/os/mac/xcode-command-line-tools.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const xcode_command_line_tools_html = (__exports__);

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
//# sourceMappingURL=6362.app.js.map