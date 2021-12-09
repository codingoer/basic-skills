"use strict";
exports.id = 625;
exports.ids = [625];
exports.modules = {

/***/ 2433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-55e57ff8",
  "path": "/jvm/building-openjdk.html",
  "title": "Building OpenJDK",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Building OpenJDK 11",
      "slug": "building-openjdk-11",
      "children": []
    }
  ],
  "filePathRelative": "jvm/building-openjdk.md",
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

/***/ 28924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ building_openjdk_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/jvm/building-openjdk.html.vue?vue&type=template&id=747b70e9

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="building-openjdk" tabindex="-1"><a class="header-anchor" href="#building-openjdk" aria-hidden="true">#</a> Building OpenJDK</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew <span class="token function">install</span> autoconf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew <span class="token function">install</span> ccache
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="building-openjdk-11" tabindex="-1"><a class="header-anchor" href="#building-openjdk-11" aria-hidden="true">#</a> Building OpenJDK 11</h2><p>bash configure --with-toolchain-type=clang --with-debug-level=slowdebug --enable-dtrace --with-jvm-variants=server --with-target-bits=64 --enable-ccache --with-num-cores=8 --with-memory-size=8000 --disable-warnings-as-errors --with-sysroot=/Library/Developer/CommandLineTools/SDKs/MacOSX10.14.sdk --with-boot-jdk=/Users/lionel/Environment/openjdk/10/jdk-10.jdk/Contents/Home</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>clang --version
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>clang++ --version
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>autoconf --version
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">make</span> --version
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gcc --version
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>make all 是全量编译 make images 是增量编译</p><p>bash configure --with-toolchain-type=clang --with-debug-level=slowdebug --enable-dtrace --with-jvm-variants=server --with-target-bits=64 --enable-ccache --with-num-cores=8 --with-memory-size=8000 --disable-warnings-as-errors --with-sysroot=/Library/Developer/CommandLineTools/SDKs/MacOSX10.14.sdk --with-boot-jdk=/Users/lionel/Environment/openjdk10/jdk-10.jdk/Contents/Home</p><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/jvm/building-openjdk.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const building_openjdk_html = (__exports__);

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
//# sourceMappingURL=625.app.js.map