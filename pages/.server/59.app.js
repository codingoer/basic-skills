"use strict";
exports.id = 59;
exports.ids = [59];
exports.modules = {

/***/ 69406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-0a073b30",
  "path": "/os/linux/centos/openjdk.html",
  "title": "Linux上安装openjdk",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Centos安装openjdk",
      "slug": "centos安装openjdk",
      "children": []
    }
  ],
  "filePathRelative": "os/linux/centos/openjdk.md",
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

/***/ 10639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ openjdk_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(21666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/os/linux/centos/openjdk.html.vue?vue&type=template&id=26f6e937



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="linux上安装openjdk" tabindex="-1"><a class="header-anchor" href="#linux上安装openjdk" aria-hidden="true">#</a> Linux上安装openjdk</h1><h2 id="centos安装openjdk" tabindex="-1"><a class="header-anchor" href="#centos安装openjdk" aria-hidden="true">#</a> Centos安装openjdk</h2><p><a href="https://openjdk.java.net/install/" target="_blank" rel="noopener noreferrer">openjdk官网地址`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><p>安装官网的命令会缺少javac命令</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">su</span> -c <span class="token string">&quot;yum install java-1.8.0-openjdk&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>必须要安装全部相关依赖</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum -y <span class="token function">install</span> java-1.8.0-openjdk*
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>安装完成后查找安装到了哪里，查看软连接的实际地址</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">which</span> java
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>https://www.jianshu.com/p/aa74930b5beb</p><p><img src="https://s-daily.freshtxp.com/bdTools/2020-11-24/NzcewL.png" alt="NzcewL"></p><p><img src="https://s-daily.freshtxp.com/bdTools/2020-11-24/BTTsOn.png" alt="BTTsOn"></p><!--]-->`)
}
;// CONCATENATED MODULE: ./.temp/pages/os/linux/centos/openjdk.html.vue?vue&type=template&id=26f6e937

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/os/linux/centos/openjdk.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const openjdk_html = (__exports__);

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
//# sourceMappingURL=59.app.js.map