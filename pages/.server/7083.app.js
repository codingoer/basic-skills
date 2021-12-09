"use strict";
exports.id = 7083;
exports.ids = [7083];
exports.modules = {

/***/ 89981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-15ca08af",
  "path": "/data-structure/linear-list/",
  "title": "线性表 - Linear List",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "线性表的概念",
      "slug": "线性表的概念",
      "children": []
    },
    {
      "level": 2,
      "title": "线性表的逻辑结构",
      "slug": "线性表的逻辑结构",
      "children": []
    },
    {
      "level": 2,
      "title": "线性表的特点",
      "slug": "线性表的特点",
      "children": []
    },
    {
      "level": 2,
      "title": "线性表的分类",
      "slug": "线性表的分类",
      "children": []
    }
  ],
  "filePathRelative": "data-structure/linear-list/README.md",
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

/***/ 1170:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/data-structure/linear-list/index.html.vue?vue&type=template&id=3948b262



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="线性表-linear-list" tabindex="-1"><a class="header-anchor" href="#线性表-linear-list" aria-hidden="true">#</a> 线性表 - Linear List</h1><h2 id="线性表的概念" tabindex="-1"><a class="header-anchor" href="#线性表的概念" aria-hidden="true">#</a> 线性表的概念</h2><p>线性表 - Linear List: 由同类数据元素构成有序序列的线性结构。</p><p>::: theorem 概念 线性表简称表（List），是零个或多个元素的又穷序列，通常可以表示成a₀,a₁,a₂,........,a𝑛₋₁ :::</p><ul><li>表目：线性表中的元素</li><li>索引（下标）：元素在线性表中的位置</li><li>表的长度：表中元素个数称为线性表的长度</li><li>空表：长度为0的线性表（n=0）</li><li>表头：表的起始位置 - Head</li><li>表尾：表的结束位置 - Tail</li><li>当前位置 - Current position</li></ul><h2 id="线性表的逻辑结构" tabindex="-1"><a class="header-anchor" href="#线性表的逻辑结构" aria-hidden="true">#</a> 线性表的逻辑结构</h2><ul><li>有一个唯一的开始节点，它没有前驱，有一个唯一的直接后继</li><li>有一个唯一的终止节点，它有一个唯一的直接前驱，它没有后继。</li><li>其它的节点皆成为内部节点，每一个内部节点都有且仅有一个唯一的直接前驱，也有一个唯一的直接有后继。</li><li>&lt; aᵢ , aᵢ+1 &gt; aᵢ是aᵢ+1的前驱，aᵢ+1是aᵢ的后继</li><li>前驱、后继关系，具有反对称性和传递性</li></ul><p><img src="https://image.hualihai.cn/blog/85248ee85b8e40d0a902e454a7ee7203" alt="线性表的逻辑结构"></p><h2 id="线性表的特点" tabindex="-1"><a class="header-anchor" href="#线性表的特点" aria-hidden="true">#</a> 线性表的特点</h2><p>操作灵活，其长度可以增长，缩短，易于存储，易于运算</p><p>开始元素和终端元素都是唯一的，其余元素都有且仅有一个前驱元素和一个后继元素</p><p>同一线性表的各数据元素必定具有相同的数据类型和长度</p><p>各数据元素在线性表中都有自己的位置，且数据元素之间的相对位置是线性的</p><h2 id="线性表的分类" tabindex="-1"><a class="header-anchor" href="#线性表的分类" aria-hidden="true">#</a> 线性表的分类</h2><ul><li><a href="/data-structure/linear-list/sequence-list" target="_blank" rel="noopener noreferrer">顺序表`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="/data-structure/linear-list/singly-linked-list" target="_blank" rel="noopener noreferrer">单链表`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="/data-structure/linear-list/double-linked-list" target="_blank" rel="noopener noreferrer">双链表`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="/data-structure/linear-list/circularly-linked-list" target="_blank" rel="noopener noreferrer">循环链表`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul><!--]-->`)
}
;// CONCATENATED MODULE: ./.temp/pages/data-structure/linear-list/index.html.vue?vue&type=template&id=3948b262

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/data-structure/linear-list/index.html.vue

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
//# sourceMappingURL=7083.app.js.map