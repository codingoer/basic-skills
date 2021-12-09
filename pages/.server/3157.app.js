"use strict";
exports.id = 3157;
exports.ids = [3157];
exports.modules = {

/***/ 54170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-31382692",
  "path": "/os/mac/mac-ports.html",
  "title": "MacPorts",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "环境变量",
      "slug": "环境变量",
      "children": []
    },
    {
      "level": 2,
      "title": "修改镜像",
      "slug": "修改镜像",
      "children": []
    },
    {
      "level": 2,
      "title": "重新加载macports文件信息",
      "slug": "重新加载macports文件信息",
      "children": []
    },
    {
      "level": 2,
      "title": "更新",
      "slug": "更新",
      "children": []
    },
    {
      "level": 2,
      "title": "gcc43",
      "slug": "gcc43",
      "children": []
    }
  ],
  "filePathRelative": "os/mac/mac-ports.md",
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

/***/ 17004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ mac_ports_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/os/mac/mac-ports.html.vue?vue&type=template&id=e5f8ad24

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="macports" tabindex="-1"><a class="header-anchor" href="#macports" aria-hidden="true">#</a> MacPorts</h1><p>https://guide.macports.org/#using.port.list</p><h2 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h2><p>安装完成后会自动加入到~/.bash_profile中</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># MacPorts Installer addition on 2021-05-20_at_22:35:52: adding an appropriate PATH variable for use with MacPorts.</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">&quot;/opt/local/bin:/opt/local/sbin:<span class="token environment constant">\$PATH</span>&quot;</span>
<span class="token comment"># Finished adapting your PATH environment variable for use with MacPorts.</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="修改镜像" tabindex="-1"><a class="header-anchor" href="#修改镜像" aria-hidden="true">#</a> 修改镜像</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> /opt/local/etc/macports/sources.conf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>rsync://mirrors.tuna.tsinghua.edu.cn/macports/release/ports/ [default]</p><h2 id="重新加载macports文件信息" tabindex="-1"><a class="header-anchor" href="#重新加载macports文件信息" aria-hidden="true">#</a> 重新加载macports文件信息</h2><p>sudo port -v sync</p><h2 id="更新" tabindex="-1"><a class="header-anchor" href="#更新" aria-hidden="true">#</a> 更新</h2><p>sudo port -v selfupdate</p><h1 id="搜索索引中的软件" tabindex="-1"><a class="header-anchor" href="#搜索索引中的软件" aria-hidden="true">#</a> 搜索索引中的软件</h1><p>port search name</p><h1 id="查看包详细信息" tabindex="-1"><a class="header-anchor" href="#查看包详细信息" aria-hidden="true">#</a> 查看包详细信息</h1><p>port info name</p><h1 id="查看包详细信赖信息" tabindex="-1"><a class="header-anchor" href="#查看包详细信赖信息" aria-hidden="true">#</a> 查看包详细信赖信息\`</h1><p>port deps name</p><h1 id="查看安装时允许客户定制的参数" tabindex="-1"><a class="header-anchor" href="#查看安装时允许客户定制的参数" aria-hidden="true">#</a> 查看安装时允许客户定制的参数</h1><p>port variants name</p><h1 id="安装新软件" tabindex="-1"><a class="header-anchor" href="#安装新软件" aria-hidden="true">#</a> 安装新软件</h1><p>sudo port install name</p><h1 id="安装完毕之后-清除安装时产生的临时文件" tabindex="-1"><a class="header-anchor" href="#安装完毕之后-清除安装时产生的临时文件" aria-hidden="true">#</a> 安装完毕之后，清除安装时产生的临时文件</h1><p>sudo port clean --all name</p><h2 id="gcc43" tabindex="-1"><a class="header-anchor" href="#gcc43" aria-hidden="true">#</a> gcc43</h2><p>The following dependencies will be installed: autoconf automake bzip2 cctools cmake curl curl-ca-bundle db48 expat gcc_select gdbm gettext glib2 gmp gperf help2man icu isl ld64 ld64-xcode libarchive libcxx libedit libffi libgcc libgcc10 libgcc11 libgcc45 libgcc6 libgcc7 libgcc8 libgcc9 libiconv libidn2 libmpc libpsl libtool libunistring libunwind-headers libuv libxml2 llvm-10 llvm_select lz4 lzo2 m4 mpfr ncurses openssl p5.30-locale-gettext pcre perl5.30 pkgconfig python39 python3_select python_select readline sqlite3 texinfo xar xz zlib zstd Continue? [Y/n]: ---&gt; Fetching archive for gperf</p><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/os/mac/mac-ports.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const mac_ports_html = (__exports__);

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
//# sourceMappingURL=3157.app.js.map