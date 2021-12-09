"use strict";
exports.id = 9118;
exports.ids = [9118];
exports.modules = {

/***/ 6140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-53184614",
  "path": "/java/collection/generics/",
  "title": "泛型程序的设计",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "基本概念",
      "slug": "基本概念",
      "children": []
    },
    {
      "level": 2,
      "title": "使用泛型的优点",
      "slug": "使用泛型的优点",
      "children": []
    }
  ],
  "filePathRelative": "java/collection/generics/README.md",
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

/***/ 6133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/java/collection/generics/index.html.vue?vue&type=template&id=676f66c6

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="泛型程序的设计" tabindex="-1"><a class="header-anchor" href="#泛型程序的设计" aria-hidden="true">#</a> 泛型程序的设计</h1><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>泛型是在Java5版本加入的</p></div><p><code>泛型</code>是计算机程序中一种重要的思维方式，它将<strong>数据结构和算法与数据类型分离</strong>，使得同一套数据结构和算法能够<strong>应用于各种数据类型</strong>，并可以保证类型安全，提高可读性。</p><h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h2><div class="custom-container tip"><p class="custom-container-title">概念</p><p><code>泛型</code>字面上的意思就是广泛的类型。</p></div><p><code>类，接口，方法</code>可以应用于<code>广泛的类型</code>，代码与操作的数据类型不绑定在一起，同一套代码可以<strong>用于多种数据类型</strong>。这样不仅可以复用代码，降低耦合，而且可以提高代码的可读性和安全性。</p><p>泛型就是类型参数化，处理的数据类型是不固定的，而是可以作为参数传入。</p><h2 id="使用泛型的优点" tabindex="-1"><a class="header-anchor" href="#使用泛型的优点" aria-hidden="true">#</a> 使用泛型的优点</h2><ul><li>更好的安全性</li><li>更好的可读性</li></ul><p>泛型无法获取他的class类型，不支持以下写法</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ActivityVo</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">.</span><span class="token keyword">class</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>如何解决</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">PostImageGoodsList</span> <span class="token keyword">extends</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PostImageGoods</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1900114995537558248L</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol><li><p>基本概念</p></li><li><p>泛型的原理jvm</p></li><li><p>泛型类</p></li><li><p>泛型方法</p></li><li><p>泛型接口</p></li><li><p>类型参数的限定与继承</p></li><li><p>通配符类型</p></li><li><p>约束与局限性</p></li><li><p>结合反射使用泛型</p></li><li><p>使用泛型总结</p></li></ol><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/java/collection/generics/index.html.vue

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
//# sourceMappingURL=9118.app.js.map