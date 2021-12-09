"use strict";
exports.id = 6273;
exports.ids = [6273];
exports.modules = {

/***/ 64904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-79113d4d",
  "path": "/os/linux/ubuntu/ubuntu-certificate.html",
  "title": "Ubuntu安装根证书",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "场景说明",
      "slug": "场景说明",
      "children": []
    },
    {
      "level": 2,
      "title": "首先要创建证书",
      "slug": "首先要创建证书",
      "children": []
    },
    {
      "level": 2,
      "title": "将.pem证书转换为.crt格式",
      "slug": "将-pem证书转换为-crt格式",
      "children": []
    }
  ],
  "filePathRelative": "os/linux/ubuntu/ubuntu-certificate.md",
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

/***/ 94671:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ubuntu_certificate_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/os/linux/ubuntu/ubuntu-certificate.html.vue?vue&type=template&id=5717f70a

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="ubuntu安装根证书" tabindex="-1"><a class="header-anchor" href="#ubuntu安装根证书" aria-hidden="true">#</a> Ubuntu安装根证书</h1><h2 id="场景说明" tabindex="-1"><a class="header-anchor" href="#场景说明" aria-hidden="true">#</a> 场景说明</h2><p>抓https的包需要安装证书</p><h2 id="首先要创建证书" tabindex="-1"><a class="header-anchor" href="#首先要创建证书" aria-hidden="true">#</a> 首先要创建证书</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mkdir</span> /usr/share/ca-certificates/extra
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">cp</span> foo.crt /usr/share/ca-certificates/extra/foo.crt
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> dpkg-reconfigure ca-certificates
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> update-ca-certificates
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="将-pem证书转换为-crt格式" tabindex="-1"><a class="header-anchor" href="#将-pem证书转换为-crt格式" aria-hidden="true">#</a> 将.pem证书转换为.crt格式</h2><p>直接改后缀名即可或者使用ssl工具</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>openssl x509 -in foo.pem -inform PEM -out foo.crt
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/os/linux/ubuntu/ubuntu-certificate.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const ubuntu_certificate_html = (__exports__);

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
//# sourceMappingURL=6273.app.js.map