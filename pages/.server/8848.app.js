"use strict";
exports.id = 8848;
exports.ids = [8848];
exports.modules = {

/***/ 78726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-d7b9a5f8",
  "path": "/java/collection/generics/generic-jvm.html",
  "title": "泛型代码与虚拟机",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "泛型的内部原理",
      "slug": "泛型的内部原理",
      "children": []
    },
    {
      "level": 2,
      "title": "类型擦除",
      "slug": "类型擦除",
      "children": []
    }
  ],
  "filePathRelative": "java/collection/generics/generic-jvm.md",
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

/***/ 26629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ generic_jvm_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/java/collection/generics/generic-jvm.html.vue?vue&type=template&id=7650a274

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="泛型代码与虚拟机" tabindex="-1"><a class="header-anchor" href="#泛型代码与虚拟机" aria-hidden="true">#</a> 泛型代码与虚拟机</h1><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>虚拟机没有泛型类型对象，所有的对象都属于普通类。</p></div><h2 id="泛型的内部原理" tabindex="-1"><a class="header-anchor" href="#泛型的内部原理" aria-hidden="true">#</a> 泛型的内部原理</h2><div class="custom-container danger"><p class="custom-container-title">很重要</p><p>Java泛型是通过<strong>擦除</strong>实现的</p></div><p>Java编译器将Java源代码转换为.class文件，虚拟机加载并运行.class文件。</p><p>Java编译器会将泛型代码转换为普通的非泛型代码，Java虚拟机实际执行的时候，不知道泛型这回事，只知道普通的类及代码。</p><h2 id="类型擦除" tabindex="-1"><a class="header-anchor" href="#类型擦除" aria-hidden="true">#</a> 类型擦除</h2><p>在Java中，泛型是通过类型擦除来实现的。类型擦除是Java编译器的概念，Java虚拟机对泛型一无所知。</p><p>泛型类型都自动提供了一个<strong>原始类型（raw type）</strong>，原始类型的名字就是删除<strong>类型参数</strong>后的泛型类型名。</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><strong>原始类型</strong>用第一个限定的类型变量来替换，如果没有给定限定就用Object替换。</p></div><p>泛型擦除后的表达式需要进行强制类型转换。</p><div class="custom-container danger"><p class="custom-container-title">注意点</p><p>如果类型参数有多个限定，为了提高效率，应该讲没有方法的接口放在边界列表的末尾。</p></div><p>举个例子：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Interval</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span> <span class="token keyword">extends</span> <span class="token class-name">Comparable</span> <span class="token operator">&amp;</span> <span class="token class-name">Serializable</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">T</span> first<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">T</span> second<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Interval</span><span class="token punctuation">(</span><span class="token class-name">T</span> first<span class="token punctuation">,</span> <span class="token class-name">T</span> second<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>first<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>second<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>原始类型Interval</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Interval</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Comparable</span> first<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Comparable</span> second<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Interval</span><span class="token punctuation">(</span><span class="token class-name">Comparable</span> first<span class="token punctuation">,</span> <span class="token class-name">Comparable</span> second<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>first<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>second<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>如果<code>切换限定</code>,</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Interval</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span> <span class="token keyword">extends</span> <span class="token class-name">Serializable</span> <span class="token operator">&amp;</span> <span class="token class-name">Comparable</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Serializable</span> first<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Serializable</span> second<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Interval</span><span class="token punctuation">(</span><span class="token class-name">Serializable</span> first<span class="token punctuation">,</span> <span class="token class-name">Serializable</span> second<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 需要做强制类型转换</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/java/collection/generics/generic-jvm.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const generic_jvm_html = (__exports__);

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
//# sourceMappingURL=8848.app.js.map