"use strict";
exports.id = 6253;
exports.ids = [6253];
exports.modules = {

/***/ 44493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-c76ae0e8",
  "path": "/os/linux/firewall.html",
  "title": "Linux中的防火墙",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "firewalld",
      "slug": "firewalld",
      "children": [
        {
          "level": 3,
          "title": "基本操作命令",
          "slug": "基本操作命令",
          "children": []
        },
        {
          "level": 3,
          "title": "开放端口配置",
          "slug": "开放端口配置",
          "children": []
        },
        {
          "level": 3,
          "title": "其他辅助命令",
          "slug": "其他辅助命令",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "os/linux/firewall.md",
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

/***/ 94760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ firewall_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/os/linux/firewall.html.vue?vue&type=template&id=394782fb

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="linux中的防火墙" tabindex="-1"><a class="header-anchor" href="#linux中的防火墙" aria-hidden="true">#</a> Linux中的防火墙</h1><h2 id="firewalld" tabindex="-1"><a class="header-anchor" href="#firewalld" aria-hidden="true">#</a> firewalld</h2><h3 id="基本操作命令" tabindex="-1"><a class="header-anchor" href="#基本操作命令" aria-hidden="true">#</a> 基本操作命令</h3><ul><li>启动防火墙</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl start firewalld.service
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>关闭防火墙</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl stop firewalld.service
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>查看防火墙状态</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl status firewalld.service
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>开机启用防火墙</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> firewalld.service
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>开机禁用防火墙</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl disable firewalld.service
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="开放端口配置" tabindex="-1"><a class="header-anchor" href="#开放端口配置" aria-hidden="true">#</a> 开放端口配置</h3><ul><li>添加80端口</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>firewall-cmd --zone<span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">80</span>/tcp --permanent
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>添加8080端口</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>firewall-cmd --zone<span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">8080</span>/tcp --permanent 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>查看开放的端口</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>firewall-cmd --list-all
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>重载防火墙配置</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>firewall-cmd --reload
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>查看所有打开的端口</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>firewall-cmd --zone<span class="token operator">=</span>public --list-ports
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="其他辅助命令" tabindex="-1"><a class="header-anchor" href="#其他辅助命令" aria-hidden="true">#</a> 其他辅助命令</h3><ul><li>查看版本</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>firewall-cmd --version
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>查看帮助</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>firewall-cmd --help
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/os/linux/firewall.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const firewall_html = (__exports__);

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
//# sourceMappingURL=6253.app.js.map