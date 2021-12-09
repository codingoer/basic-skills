"use strict";
exports.id = 8387;
exports.ids = [8387];
exports.modules = {

/***/ 55066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-8845e9f4",
  "path": "/data-structure/",
  "title": "数据结构 - Data Structure",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "数据结构的构成",
      "slug": "数据结构的构成",
      "children": []
    },
    {
      "level": 2,
      "title": "按照逻辑结构类型分类",
      "slug": "按照逻辑结构类型分类",
      "children": [
        {
          "level": 3,
          "title": "集合",
          "slug": "集合",
          "children": []
        },
        {
          "level": 3,
          "title": "线性结构",
          "slug": "线性结构",
          "children": []
        },
        {
          "level": 3,
          "title": "树",
          "slug": "树",
          "children": []
        },
        {
          "level": 3,
          "title": "图",
          "slug": "图",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "按照存储结构类型",
      "slug": "按照存储结构类型",
      "children": [
        {
          "level": 3,
          "title": "顺序存储结构",
          "slug": "顺序存储结构",
          "children": []
        },
        {
          "level": 3,
          "title": "链式存储结构",
          "slug": "链式存储结构",
          "children": []
        },
        {
          "level": 3,
          "title": "索引存储结构",
          "slug": "索引存储结构",
          "children": []
        },
        {
          "level": 3,
          "title": "哈希(散列)存储结构",
          "slug": "哈希-散列-存储结构",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "data-structure/README.md",
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

/***/ 49893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(21666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/data-structure/index.html.vue?vue&type=template&id=691e08e0



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TOC = (0,external_vue_.resolveComponent)("TOC")
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="数据结构-data-structure" tabindex="-1"><a class="header-anchor" href="#数据结构-data-structure" aria-hidden="true">#</a> 数据结构 - Data Structure</h1>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_TOC, null, null, _parent))
  _push(`<h2 id="数据结构的构成" tabindex="-1"><a class="header-anchor" href="#数据结构的构成" aria-hidden="true">#</a> 数据结构的构成</h2><ul><li>逻辑结构 - 数据元素之间的逻辑关系</li><li>存储结构或物理结构 - 数据元素及其关系在计算机存储器中的存储方式</li><li>数据运算 - 数据元素的操作</li></ul><p><img src="https://image.hualihai.cn/blog/f959253ecb6748bc93fc5eb6bb060965" alt="组成"></p><h2 id="按照逻辑结构类型分类" tabindex="-1"><a class="header-anchor" href="#按照逻辑结构类型分类" aria-hidden="true">#</a> 按照逻辑结构类型分类</h2><h3 id="集合" tabindex="-1"><a class="header-anchor" href="#集合" aria-hidden="true">#</a> 集合</h3><p><strong>元素之间的关系</strong> : 无</p><p><strong>特点</strong> : 数据元素属于同一集合，别无其他逻辑关系。</p><h3 id="线性结构" tabindex="-1"><a class="header-anchor" href="#线性结构" aria-hidden="true">#</a> 线性结构</h3><p><strong>元素之间的关系</strong> : 一对一</p><p><strong>特点</strong> : 开始元素和终端元素都是唯一的，其余元素都有且仅有一个前驱元素和一个后继元素</p><p><strong>按操作分类</strong> :</p><ul><li><p><a href="/data-structure/linear-list/" target="_blank" rel="noopener noreferrer">线性表`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p></li><li><p><a href="/data-structure/queue/" target="_blank" rel="noopener noreferrer">队列`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p></li><li><p><a href="/data-structure/stack/" target="_blank" rel="noopener noreferrer">栈`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p></li></ul><h3 id="树" tabindex="-1"><a class="header-anchor" href="#树" aria-hidden="true">#</a> 树</h3><p><strong>元素之间的关系</strong> : 一对多</p><p><strong>特点</strong> : 开始元素唯一，终端元素不唯一，除终端元素外，每个元素有一个或多个后继元素；除开始元素外，每个元素有且仅有一个前驱元素。</p><h3 id="图" tabindex="-1"><a class="header-anchor" href="#图" aria-hidden="true">#</a> 图</h3><p><strong>元素之间的关系</strong> : 多对多</p><p><strong>特点</strong> : 所有元素都可能有多个前驱元素和多个后继元素。</p><h2 id="按照存储结构类型" tabindex="-1"><a class="header-anchor" href="#按照存储结构类型" aria-hidden="true">#</a> 按照存储结构类型</h2><h3 id="顺序存储结构" tabindex="-1"><a class="header-anchor" href="#顺序存储结构" aria-hidden="true">#</a> 顺序存储结构</h3><h3 id="链式存储结构" tabindex="-1"><a class="header-anchor" href="#链式存储结构" aria-hidden="true">#</a> 链式存储结构</h3><h3 id="索引存储结构" tabindex="-1"><a class="header-anchor" href="#索引存储结构" aria-hidden="true">#</a> 索引存储结构</h3><h3 id="哈希-散列-存储结构" tabindex="-1"><a class="header-anchor" href="#哈希-散列-存储结构" aria-hidden="true">#</a> 哈希(散列)存储结构</h3><!--]-->`)
}
;// CONCATENATED MODULE: ./.temp/pages/data-structure/index.html.vue?vue&type=template&id=691e08e0

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/data-structure/index.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const index_html = (__exports__);

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
//# sourceMappingURL=8387.app.js.map