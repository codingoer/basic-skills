"use strict";
exports.id = 3622;
exports.ids = [3622];
exports.modules = {

/***/ 64028:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-8f20d3d2",
  "path": "/server/nginx/installation.html",
  "title": "Nginx Installation",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Yum安装",
      "slug": "yum安装",
      "children": []
    },
    {
      "level": 2,
      "title": "Yum Epel安装",
      "slug": "yum-epel安装",
      "children": []
    },
    {
      "level": 2,
      "title": "源码安装",
      "slug": "源码安装",
      "children": []
    },
    {
      "level": 2,
      "title": "配置环境变量",
      "slug": "配置环境变量",
      "children": [
        {
          "level": 3,
          "title": "常用命令",
          "slug": "常用命令",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "server/nginx/installation.md",
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

/***/ 41862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ installation_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(21666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/server/nginx/installation.html.vue?vue&type=template&id=f8db0c14



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><h1 id="nginx-installation" tabindex="-1"><a class="header-anchor" href="#nginx-installation" aria-hidden="true">#</a> Nginx Installation</h1><nav class="table-of-contents"><ul><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "#yum安装" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Yum安装`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Yum安装")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "#yum-epel安装" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Yum Epel安装`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Yum Epel安装")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "#源码安装" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`源码安装`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("源码安装")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "#配置环境变量" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`配置环境变量`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("配置环境变量")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<ul><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "#常用命令" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`常用命令`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("常用命令")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></li></ul></nav><h2 id="yum安装" tabindex="-1"><a class="header-anchor" href="#yum安装" aria-hidden="true">#</a> Yum安装</h2><p>创建<code>/etc/yum.repos.d/nginx.repo</code></p><h2 id="yum-epel安装" tabindex="-1"><a class="header-anchor" href="#yum-epel安装" aria-hidden="true">#</a> Yum Epel安装</h2><p>安装<code>epel-releas</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> nginx
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="源码安装" tabindex="-1"><a class="header-anchor" href="#源码安装" aria-hidden="true">#</a> 源码安装</h2><p>检查nginx所需要的安装环境,提示需要什么就安装什么</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>./configure
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>默认安装在了 <strong>/usr/local/nginx</strong> 路径</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="配置环境变量" tabindex="-1"><a class="header-anchor" href="#配置环境变量" aria-hidden="true">#</a> 配置环境变量</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> /etc/profile
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">NGINX_HOME</span><span class="token operator">=</span>/usr/local/nginx

<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">\$NGINX_HOME</span>/sbin:<span class="token environment constant">\$PATH</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h3><ol><li>测试配置文件 <code>nginx -t</code></li><li>重启 <code>nginx -s reopen</code></li><li>重新加载配置 <code>nginx -s reload</code></li><li>强制停止 <code>nginx -s stop</code></li><li>退出 <code>nginx -s quit</code></li><li>启动 <code>nginx</code></li></ol><!--]-->`)
}
;// CONCATENATED MODULE: ./.temp/pages/server/nginx/installation.html.vue?vue&type=template&id=f8db0c14

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/server/nginx/installation.html.vue

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
//# sourceMappingURL=3622.app.js.map