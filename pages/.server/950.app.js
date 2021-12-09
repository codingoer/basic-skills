"use strict";
exports.id = 950;
exports.ids = [950];
exports.modules = {

/***/ 55412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-37a433f6",
  "path": "/front-end/vuepress/plugin.html",
  "title": "VuePress插件总结",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "官方的插件",
      "slug": "官方的插件",
      "children": []
    },
    {
      "level": 3,
      "title": "社区的插件",
      "slug": "社区的插件",
      "children": []
    }
  ],
  "filePathRelative": "front-end/vuepress/plugin.md",
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

/***/ 33343:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ plugin_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(21666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/front-end/vuepress/plugin.html.vue?vue&type=template&id=2d6be28e



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TOC = (0,external_vue_.resolveComponent)("TOC")
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="vuepress插件总结" tabindex="-1"><a class="header-anchor" href="#vuepress插件总结" aria-hidden="true">#</a> VuePress插件总结</h1><div class="custom-container danger"><p class="custom-container-title">注意</p><p>这里我只列举了我使用到的一些插件</p></div>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_TOC, null, null, _parent))
  _push(`<nav class="table-of-contents"><ul><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "#官方的插件" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`官方的插件`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("官方的插件")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "#社区的插件" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`社区的插件`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("社区的插件")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></nav><h3 id="官方的插件" tabindex="-1"><a class="header-anchor" href="#官方的插件" aria-hidden="true">#</a> 官方的插件</h3><p><strong>Maintained by</strong> <a href="https://github.com/vuejs/vuepress" target="_blank" rel="noopener noreferrer">vuejs/vuepress`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><ul><li><p><a href="https://v1.vuepress.vuejs.org/plugin/official/plugin-active-header-links.html" target="_blank" rel="noopener noreferrer">active-header-links`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p></li><li><p><a href="https://v1.vuepress.vuejs.org/plugin/official/plugin-back-to-top.html" target="_blank" rel="noopener noreferrer">back-to-top`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p></li><li><p><a href="https://v1.vuepress.vuejs.org/plugin/official/plugin-last-updated.html" target="_blank" rel="noopener noreferrer">last-updated`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p></li><li><p><a href="https://v1.vuepress.vuejs.org/plugin/official/plugin-medium-zoom.html" target="_blank" rel="noopener noreferrer">medium-zoom`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p></li><li><p><a href="https://v1.vuepress.vuejs.org/plugin/official/plugin-search.html" target="_blank" rel="noopener noreferrer">search`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p></li><li><p><a href="https://v1.vuepress.vuejs.org/plugin/official/plugin-nprogress.html" target="_blank" rel="noopener noreferrer">nprogress`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p></li></ul><p><strong>Maintained by</strong> <a href="https://github.com/vuepress/vuepress-community" target="_blank" rel="noopener noreferrer">vuepress/vuepress-community`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><ul><li><a href="https://vuepress.github.io/en/plugins/container/#installation" target="_blank" rel="noopener noreferrer">container`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul><p>::: theorem Newton&#39;s First Law In an inertial frame of reference, an object either remains at rest or continues to move at a constant velocity, unless acted upon by a force.</p><p>::: right From <a href="https://en.wikipedia.org/wiki/Newton%27s_laws_of_motion" target="_blank" rel="noopener noreferrer">Wikipedia`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> :::</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Tip container of <code>@vuepress/theme-default</code></p></div><ul><li><a href="https://vuepress.github.io/en/plugins/mathjax/" target="_blank" rel="noopener noreferrer">mathjax`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul><blockquote><p>We have \$a&gt;n &lt;=&gt; a&gt;=n+1\$, if \$a, n\\in\\Z\$</p></blockquote><ul><li><a href="https://vuepress.github.io/en/plugins/table-of-contents/" target="_blank" rel="noopener noreferrer">table-of-contents`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_TOC, null, null, _parent))
  _push(`<h3 id="社区的插件" tabindex="-1"><a class="header-anchor" href="#社区的插件" aria-hidden="true">#</a> 社区的插件</h3><ul><li><a href="https://superbiger.github.io/vuepress-plugin-tabs/" target="_blank" rel="noopener noreferrer">vuepress-plugin-element-tabs `)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> - Tab插件</li></ul><p>:::: tabs type:border-card ::: tab title1 lazy <strong>markdown content</strong> ::: ::: tab title2 lazy</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Javascript code example&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>::: ::::</p><ul><li><a href="https://flowchart.vuepress.ulivz.com/#install" target="_blank" rel="noopener noreferrer">vuepress-plugin-flowchart`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> - 流程图插件</li></ul><p>@flowstart st=&gt;start: Start e=&gt;end: End</p><p>st-&gt;e @flowend</p><hr><p>@flowstart cond=&gt;condition: Process? process=&gt;operation: Process e=&gt;end: End</p><p>cond(yes)-&gt;process-&gt;e cond(no)-&gt;e @flowend</p><!--]-->`)
}
;// CONCATENATED MODULE: ./.temp/pages/front-end/vuepress/plugin.html.vue?vue&type=template&id=2d6be28e

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/front-end/vuepress/plugin.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const plugin_html = (__exports__);

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
//# sourceMappingURL=950.app.js.map