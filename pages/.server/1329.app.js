"use strict";
exports.id = 1329;
exports.ids = [1329];
exports.modules = {

/***/ 76741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-3a442746",
  "path": "/specification/markdown/commonmark.html",
  "title": "CommonMark Spec",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "specification/markdown/commonmark.md",
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

/***/ 16810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ commonmark_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(21666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/specification/markdown/commonmark.html.vue?vue&type=template&id=e9fab840



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="commonmark-spec" tabindex="-1"><a class="header-anchor" href="#commonmark-spec" aria-hidden="true">#</a> CommonMark Spec</h1><blockquote><p>A strongly defined, highly compatible specification of Markdown</p></blockquote><p>相关文档</p><ul><li><a href="https://commonmark.org/" target="_blank" rel="noopener noreferrer">CommonMark`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://spec.commonmark.org/" target="_blank" rel="noopener noreferrer">CommonMark Spec`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul><p><strong>Why is CommonMark needed?</strong></p><p>In the absence of a spec, early implementers consulted the original Markdown.pl code to resolve these ambiguities. But Markdown.pl was quite buggy, and gave manifestly bad results in many cases, so it was not a satisfactory replacement for a spec. Markdown.pl was last updated December 17th, 2004.</p><p>Because there is no unambiguous spec, implementations have diverged considerably over the last 10 years. As a result, users are often surprised to find that a document that renders one way on one system (say, a GitHub wiki) renders differently on another (say, converting to docbook using Pandoc). To make matters worse, because nothing in Markdown counts as a “syntax error,” the divergence often isn’t discovered right away.</p><p>There’s no standard test suite for Markdown; MDTest is the closest thing we have. The only way to resolve Markdown ambiguities and inconsistencies is Babelmark, which compares the output of 20+ implementations of Markdown against each other to see if a consensus emerges.</p><p>We propose a standard, unambiguous syntax specification for Markdown, along with a suite of comprehensive tests to validate Markdown implementations against this specification. We believe this is necessary, even essential, for the future of Markdown.</p><!--]-->`)
}
;// CONCATENATED MODULE: ./.temp/pages/specification/markdown/commonmark.html.vue?vue&type=template&id=e9fab840

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/specification/markdown/commonmark.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const commonmark_html = (__exports__);

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
//# sourceMappingURL=1329.app.js.map