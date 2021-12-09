"use strict";
exports.id = 4126;
exports.ids = [4126];
exports.modules = {

/***/ 1009:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-72fa237a",
  "path": "/java/programing/environment.html",
  "title": "Java程序设计环境",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "JDK环境变量配置",
      "slug": "jdk环境变量配置",
      "children": []
    },
    {
      "level": 2,
      "title": "JDK源码阅读环境",
      "slug": "jdk源码阅读环境",
      "children": []
    },
    {
      "level": 2,
      "title": "编译自己的OpenJDK",
      "slug": "编译自己的openjdk",
      "children": []
    }
  ],
  "filePathRelative": "java/programing/environment.md",
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

/***/ 91905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ environment_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(21666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/java/programing/environment.html.vue?vue&type=template&id=e0b9ab58



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="java程序设计环境" tabindex="-1"><a class="header-anchor" href="#java程序设计环境" aria-hidden="true">#</a> Java程序设计环境</h1><p>Oracle Accoucnt</p><p>Username: 939338358@qq.com Password: xxxxxxxxxxxxx</p><h2 id="jdk环境变量配置" tabindex="-1"><a class="header-anchor" href="#jdk环境变量配置" aria-hidden="true">#</a> JDK环境变量配置</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/local/jdk1.8.0_281
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span>.:<span class="token variable">\$JAVA_HOME</span>/jre/lib/rt.jar:<span class="token variable">\$JAVA_HOME</span>/lib/dt.jar:<span class="token variable">\$JAVA_HOME</span>/lib/tools.jar
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">\$PATH</span><span class="token builtin class-name">:</span><span class="token variable">\$JAVA_HOME</span>/bin
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="jdk源码阅读环境" tabindex="-1"><a class="header-anchor" href="#jdk源码阅读环境" aria-hidden="true">#</a> JDK源码阅读环境</h2><p><a href="https://www.bilibili.com/video/BV1V7411U78L" target="_blank" rel="noopener noreferrer">参考B站视频`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><p><a href="https://github.com/lionel217920/jdk8-source-learning" target="_blank" rel="noopener noreferrer">我的Github项目`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><h2 id="编译自己的openjdk" tabindex="-1"><a class="header-anchor" href="#编译自己的openjdk" aria-hidden="true">#</a> 编译自己的OpenJDK</h2><p><a href="https://www.bilibili.com/video/BV1zT4y177Zf" target="_blank" rel="noopener noreferrer">参考B站视频`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><p><a href="https://github.com/lionel217920/openjdk11-source-learning" target="_blank" rel="noopener noreferrer">我的Github项目`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><!--]-->`)
}
;// CONCATENATED MODULE: ./.temp/pages/java/programing/environment.html.vue?vue&type=template&id=e0b9ab58

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/java/programing/environment.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const environment_html = (__exports__);

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
//# sourceMappingURL=4126.app.js.map