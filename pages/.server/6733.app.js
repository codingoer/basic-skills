"use strict";
exports.id = 6733;
exports.ids = [6733];
exports.modules = {

/***/ 43125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-60caf4c8",
  "path": "/specification/markdown/parser-list.html",
  "title": "Markdown parser and compiler",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "marked",
      "slug": "marked",
      "children": []
    },
    {
      "level": 2,
      "title": "markdown-it",
      "slug": "markdown-it",
      "children": []
    }
  ],
  "filePathRelative": "specification/markdown/parser-list.md",
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

/***/ 60204:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ parser_list_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(21666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/specification/markdown/parser-list.html.vue?vue&type=template&id=15962171



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="markdown-parser-and-compiler" tabindex="-1"><a class="header-anchor" href="#markdown-parser-and-compiler" aria-hidden="true">#</a> Markdown parser and compiler</h1><nav class="table-of-contents"><ul><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "#marked" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`marked`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("marked")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "#markdown-it" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`markdown-it`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("markdown-it")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul></nav><h2 id="marked" tabindex="-1"><a class="header-anchor" href="#marked" aria-hidden="true">#</a> marked</h2><p><a href="https://github.com/markedjs/marked" target="_blank" rel="noopener noreferrer">Github官方地址`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><p><strong>Supported Markdown specifications</strong></p><table><thead><tr><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">Flavor</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">Version</th></tr></thead><tbody><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">The original markdown.pl</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">--</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">CommonMark</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">0.29</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">GitHub Flavored Markdown</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">0.29</td></tr></tbody></table><h2 id="markdown-it" tabindex="-1"><a class="header-anchor" href="#markdown-it" aria-hidden="true">#</a> markdown-it</h2><p><a href="https://github.com/markdown-it/markdown-it" target="_blank" rel="noopener noreferrer">Github官方地址`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a><br><a href="https://markdown-it.github.io/" target="_blank" rel="noopener noreferrer">Live Demo`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><p><strong>Supported Markdown specifications</strong></p><ul><li>Follows the CommonMark spec + adds syntax extensions &amp; sugar (URL autolinking, typographer).</li><li>Tables (GFM)</li><li>Strikethrough (GFM)</li></ul><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p><em>here be dragons</em></p></div><p>😎</p><!--]-->`)
}
;// CONCATENATED MODULE: ./.temp/pages/specification/markdown/parser-list.html.vue?vue&type=template&id=15962171

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/specification/markdown/parser-list.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const parser_list_html = (__exports__);

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
//# sourceMappingURL=6733.app.js.map