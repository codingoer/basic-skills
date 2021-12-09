"use strict";
exports.id = 105;
exports.ids = [105];
exports.modules = {

/***/ 95053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-197f89aa",
  "path": "/tools/maven/nexus.html",
  "title": "Nexus搭建Maven私有仓库",
  "lang": "zh-CN",
  "frontmatter": {
    "sidebar": "auto"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "私服介绍",
      "slug": "私服介绍",
      "children": []
    },
    {
      "level": 2,
      "title": "为什么要使用私服",
      "slug": "为什么要使用私服",
      "children": []
    },
    {
      "level": 2,
      "title": "安装Nexus",
      "slug": "安装nexus",
      "children": []
    },
    {
      "level": 2,
      "title": "登录Nexus",
      "slug": "登录nexus",
      "children": []
    },
    {
      "level": 2,
      "title": "Nexus的仓库与仓库组",
      "slug": "nexus的仓库与仓库组",
      "children": []
    },
    {
      "level": 2,
      "title": "Nexus的搜索",
      "slug": "nexus的搜索",
      "children": []
    },
    {
      "level": 2,
      "title": "配置Maven从Nexus下载构件",
      "slug": "配置maven从nexus下载构件",
      "children": []
    },
    {
      "level": 2,
      "title": "部署构件至Nexus",
      "slug": "部署构件至nexus",
      "children": []
    },
    {
      "level": 2,
      "title": "Nexus权限管理",
      "slug": "nexus权限管理",
      "children": []
    }
  ],
  "filePathRelative": "tools/maven/nexus.md",
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

/***/ 16831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ nexus_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(21666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/tools/maven/nexus.html.vue?vue&type=template&id=721a5e91



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="nexus搭建maven私有仓库" tabindex="-1"><a class="header-anchor" href="#nexus搭建maven私有仓库" aria-hidden="true">#</a> Nexus搭建Maven私有仓库</h1><h2 id="私服介绍" tabindex="-1"><a class="header-anchor" href="#私服介绍" aria-hidden="true">#</a> 私服介绍</h2><div class="custom-container tip"><p class="custom-container-title">一句话概况</p><p>局域网内的仓库服务</p></div><p>私服是一种特殊的远程仓库，架设在<code>局域网内</code>的仓库服务，私服<code>代理广域网</code>上的远程仓库，供局域网内的Maven用户使用。 当Maven需要下架构件的时候，先从私服请求，如果私服上不存在构件，则从外部的远程仓库下载，并缓存在私服上，再为Maven的下载请求提供服务。一些<code>无法从外部仓库下载的构件</code>也能从本地上传到私服，供其他人使用。</p><p><img src="http://image.hualihai.cn/blog/61386de0-2148-4675-be8a-59537e37a367" alt="结构图"></p><h2 id="为什么要使用私服" tabindex="-1"><a class="header-anchor" href="#为什么要使用私服" aria-hidden="true">#</a> 为什么要使用私服</h2><ul><li>节省外网带宽</li><li>加速Maven构件</li><li>部署第三方构件，上传自己公司的jar包</li><li>有的公司不能访问外网</li></ul><p>通过建立自己的私服，降低中央仓库负荷，节省外网带宽，加速maven构件，自己部署构件等，从而更高效的使用maven。</p><h2 id="安装nexus" tabindex="-1"><a class="header-anchor" href="#安装nexus" aria-hidden="true">#</a> 安装Nexus</h2><p><a href="https://help.sonatype.com/repomanager3" target="_blank" rel="noopener noreferrer">Nexus Repository OSS`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>是一个免费的，世界上最受欢迎的构件存储库，是典型的<code>Java Web</code>应用，内嵌了<code>Jetty</code>容器。</p><p><a href="https://www.sonatype.com/nexus-repository-oss" target="_blank" rel="noopener noreferrer">官网下载地址`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> 解压安装包</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tar</span> -xzvf nexus-3.15.2-01-unix.tar.gz
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Detected execution as &quot;root&quot; user. This is NOT recommended!</p></div><p>解压出来有两个文件夹：<code>nexus-3.15.2-01</code> AND <code>sonatype-work</code></p><p>nexus {start|stop|run|run-redirect|status|restart|force-reload}</p><h2 id="登录nexus" tabindex="-1"><a class="header-anchor" href="#登录nexus" aria-hidden="true">#</a> 登录Nexus</h2><h2 id="nexus的仓库与仓库组" tabindex="-1"><a class="header-anchor" href="#nexus的仓库与仓库组" aria-hidden="true">#</a> Nexus的仓库与仓库组</h2><h2 id="nexus的搜索" tabindex="-1"><a class="header-anchor" href="#nexus的搜索" aria-hidden="true">#</a> Nexus的搜索</h2><h2 id="配置maven从nexus下载构件" tabindex="-1"><a class="header-anchor" href="#配置maven从nexus下载构件" aria-hidden="true">#</a> 配置Maven从Nexus下载构件</h2><h2 id="部署构件至nexus" tabindex="-1"><a class="header-anchor" href="#部署构件至nexus" aria-hidden="true">#</a> 部署构件至Nexus</h2><h2 id="nexus权限管理" tabindex="-1"><a class="header-anchor" href="#nexus权限管理" aria-hidden="true">#</a> Nexus权限管理</h2><!--]-->`)
}
;// CONCATENATED MODULE: ./.temp/pages/tools/maven/nexus.html.vue?vue&type=template&id=721a5e91

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/tools/maven/nexus.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const nexus_html = (__exports__);

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
//# sourceMappingURL=105.app.js.map