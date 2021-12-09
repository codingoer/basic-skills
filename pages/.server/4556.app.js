"use strict";
exports.id = 4556;
exports.ids = [4556];
exports.modules = {

/***/ 67633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-d1c866aa",
  "path": "/server/nginx/tengine.html",
  "title": "Tengine",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "server/nginx/tengine.md",
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

/***/ 45658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ tengine_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(21666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/server/nginx/tengine.html.vue?vue&type=template&id=093c9a9a



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="tengine" tabindex="-1"><a class="header-anchor" href="#tengine" aria-hidden="true">#</a> Tengine</h1><ul><li><a href="http://tengine.taobao.org/" target="_blank" rel="noopener noreferrer">官网地址`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="http://tengine.taobao.org/documentation.html" target="_blank" rel="noopener noreferrer">官网文档地址`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://github.com/alibaba/tengine" target="_blank" rel="noopener noreferrer">Github地址`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul><p>It is based on the Nginx HTTP server and has many advanced features.</p><h1 id="安装tengine" tabindex="-1"><a class="header-anchor" href="#安装tengine" aria-hidden="true">#</a> 安装Tengine</h1><blockquote><p>Centos8安装有问题，使用Centos7</p></blockquote><ol><li><strong>configure</strong> 提示缺少什么就安装什么</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>./configure
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> yum -y <span class="token function">install</span> gcc-c++
<span class="token function">sudo</span> yum <span class="token function">install</span> -y pcre pcre-devel
<span class="token function">sudo</span> yum <span class="token function">install</span> -y openssl openssl-devel
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="2"><li><strong>make</strong></li></ol><p>CFLAGS = -pipe -O -W -Wall -Wpointer-arith -Wno-unused -Werror -g</p><p>去掉-Werror</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>ngx_int_t
ngx_libc_crypt(ngx_pool_t <span class="token important">*pool</span><span class="token punctuation">,</span> u_char <span class="token important">*key</span><span class="token punctuation">,</span> u_char <span class="token important">*salt</span><span class="token punctuation">,</span> u_char <span class="token important">**encrypted)</span>
<span class="token punctuation">{</span>
    char               <span class="token important">*value;</span>
    size_t              len;
    struct crypt_data   cd;

    cd.initialized = 0;
<span class="token comment">#ifdef __GLIBC__</span>
    /* work around the glibc bug <span class="token important">*/</span>
    cd.current_salt<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> = ~salt<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><strong>centos8安装有问题</strong></p><p>https://blog.csdn.net/humanyr/article/details/107405383</p><p>https://blog.csdn.net/qq_39820671/article/details/104948599</p><p>https://www.cnblogs.com/qipan/p/12071356.html</p><p>https://www.jianshu.com/p/5336feadefd3</p><p>配置环境变量</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> /etc/profile
<span class="token builtin class-name">export</span> <span class="token assign-left variable">NGINX_HOME</span><span class="token operator">=</span>/usr/local/nginx
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">\$NGINX_HOME</span>/sbin:<span class="token environment constant">\$PATH</span>
<span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>设置文件夹权限</p><p>设置防火墙</p><p>宿主机访问测试</p><!--]-->`)
}
;// CONCATENATED MODULE: ./.temp/pages/server/nginx/tengine.html.vue?vue&type=template&id=093c9a9a

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/server/nginx/tengine.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const tengine_html = (__exports__);

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
//# sourceMappingURL=4556.app.js.map