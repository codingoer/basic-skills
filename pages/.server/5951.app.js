"use strict";
exports.id = 5951;
exports.ids = [5951];
exports.modules = {

/***/ 38113:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-2d1e6e2f",
  "path": "/database/mongodb/indexes/index-ttl.html",
  "title": "TTL indexes",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "实现原理，mongo是如何实现自动删除的",
      "slug": "实现原理-mongo是如何实现自动删除的",
      "children": []
    },
    {
      "level": 2,
      "title": "创建TTL索引",
      "slug": "创建ttl索引",
      "children": []
    }
  ],
  "filePathRelative": "database/mongodb/indexes/index-ttl.md",
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

/***/ 55157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_ttl_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/database/mongodb/indexes/index-ttl.html.vue?vue&type=template&id=2f69d20f

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="ttl-indexes" tabindex="-1"><a class="header-anchor" href="#ttl-indexes" aria-hidden="true">#</a> TTL indexes</h1><p>https://blog.csdn.net/jianlong727/article/details/54631124</p><p>TTL indexes 是特殊的单一属性索引。</p><p>automatically remove documents from a collection after a certain amount of time or at a specific clock time。</p><p>可以自动的从集合中移除文档，在一定数量时间之后或者在一个特定的时间点。</p><h2 id="实现原理-mongo是如何实现自动删除的" tabindex="-1"><a class="header-anchor" href="#实现原理-mongo是如何实现自动删除的" aria-hidden="true">#</a> 实现原理，mongo是如何实现自动删除的</h2><p>据说是后台有个单线程，一直查询</p><h2 id="创建ttl索引" tabindex="-1"><a class="header-anchor" href="#创建ttl索引" aria-hidden="true">#</a> 创建TTL索引</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>db.autoCrawlResult.createIndex<span class="token punctuation">(</span> <span class="token punctuation">{</span> <span class="token string">&quot;createdTime&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>, <span class="token punctuation">{</span> expireAfterSeconds: <span class="token number">3600</span> <span class="token punctuation">}</span> <span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/database/mongodb/indexes/index-ttl.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const index_ttl_html = (__exports__);

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
//# sourceMappingURL=5951.app.js.map