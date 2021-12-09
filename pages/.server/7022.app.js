"use strict";
exports.id = 7022;
exports.ids = [7022];
exports.modules = {

/***/ 3013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-16722c46",
  "path": "/java/collection/",
  "title": "Java Collections Framework",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "What is a Collections Framework",
      "slug": "what-is-a-collections-framework",
      "children": []
    },
    {
      "level": 2,
      "title": "Collections Framework Category",
      "slug": "collections-framework-category",
      "children": []
    },
    {
      "level": 2,
      "title": "Collections Framework Interface",
      "slug": "collections-framework-interface",
      "children": []
    }
  ],
  "filePathRelative": "java/collection/README.md",
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

/***/ 29292:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/java/collection/index.html.vue?vue&type=template&id=53dfea9d



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="java-collections-framework" tabindex="-1"><a class="header-anchor" href="#java-collections-framework" aria-hidden="true">#</a> Java Collections Framework</h1><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>这里介绍的Java集合框架都是基于JDK8</p></div><h2 id="what-is-a-collections-framework" tabindex="-1"><a class="header-anchor" href="#what-is-a-collections-framework" aria-hidden="true">#</a> What is a Collections Framework</h2><p>::: theorem Java集合框架定义 A collection - 通常又称之为容器 - 只是一个将多个元素聚合成一个单元的对象。Collections被用来存储，检索，操作数据。通常情况下，他们代表所代表的数据项形成了一个自然的组。</p><p>::: right From <a href="https://docs.oracle.com/javase/tutorial/collections/intro/index.html" target="_blank" rel="noopener noreferrer">Java Tutorials`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> :::</p><p>数据结构可以粗略的对应于Java中的容器类</p><p>集合框架是一个统一的用来表示和操作集合的体系结构，所有的集合框架都包含以下几个部分：</p><ul><li><strong>Interfaces</strong>（接口）：这些都是抽象数据类型来表述集合，在面向对象中，接口通常形成一个层次结构。</li><li><strong>Implementations</strong>（实现）：这些都是接口的具体实现，本质上，他们是可重用的数据结构。</li><li><strong>Algorithms</strong>（算法）：算法是多态的，也就是说相同的方法可以在不同的接口实现中使用，本质上，算法是可重复使用的功能。</li></ul><h2 id="collections-framework-category" tabindex="-1"><a class="header-anchor" href="#collections-framework-category" aria-hidden="true">#</a> Collections Framework Category</h2><p>Java集合框架可以分为两大类：一类是实现Collection接口；另一类是实现Map接口</p><ul><li><p>Collection是一个基本的集合接口</p></li><li><p>Map没有继承Collection接口，与Collection是并列关系</p></li></ul><h2 id="collections-framework-interface" tabindex="-1"><a class="header-anchor" href="#collections-framework-interface" aria-hidden="true">#</a> Collections Framework Interface</h2><p>::: theorem Java集合框架接口 💙核心接口就是Java集合框架的灵魂所在💜 ::: right From <a href="https://docs.oracle.com/javase/tutorial/collections/index.html" target="_blank" rel="noopener noreferrer">Java Tutorials`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> :::</p><p>核心集合接口封装不同类型的集合，核心集合接口是Java集合框架的基础。</p><p>核心接口集合组成一个<strong>层次结构</strong>:</p><p><img src="https://image.hualihai.cn/blog/20f01c7916d04a20a204b1cc3e49283f" alt="Collection Interface"></p><ul><li>Collection - 集合的根层次</li><li>Set - 不能包含重复元素的集合</li><li>List - 有序的集合</li><li>Queue - 队列</li><li>Deque - 双端队列</li><li>Map - 一个将建映射到值的对象，一个Map不能含有重复的Key值</li></ul><!--]-->`)
}
;// CONCATENATED MODULE: ./.temp/pages/java/collection/index.html.vue?vue&type=template&id=53dfea9d

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/java/collection/index.html.vue

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
//# sourceMappingURL=7022.app.js.map