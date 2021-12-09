"use strict";
exports.id = 7394;
exports.ids = [7394];
exports.modules = {

/***/ 6423:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-30b86b23",
  "path": "/java/jdk8/function/",
  "title": "Functional Interfaces",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "java.util.function包信息",
      "slug": "java-util-function包信息",
      "children": []
    },
    {
      "level": 2,
      "title": "@FunctionalInterface注解说明",
      "slug": "functionalinterface注解说明",
      "children": []
    }
  ],
  "filePathRelative": "java/jdk8/function/README.md",
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

/***/ 16798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/java/jdk8/function/index.html.vue?vue&type=template&id=299fc092

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="functional-interfaces" tabindex="-1"><a class="header-anchor" href="#functional-interfaces" aria-hidden="true">#</a> Functional Interfaces</h1><p>函数式接口是<code>jdk1.8</code>引入的新特性，相关的类都在<code>java.util.function</code>包下面。</p><h2 id="java-util-function包信息" tabindex="-1"><a class="header-anchor" href="#java-util-function包信息" aria-hidden="true">#</a> java.util.function包信息</h2><p><em>Functional interfaces</em> provide target types for lambda expressions and method references.<br> Each functional interface has a single abstract method, called the <em>functional method</em> for that functional interface, to which the lambda expression&#39;s parameter and return types are matched or adapted.<br> Functional interfaces can provide a target type in multiple contexts, such as assignment context, method invocation, or cast context:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// Assignment context</span>
<span class="token class-name">Predicate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> p <span class="token operator">=</span> <span class="token class-name">String</span><span class="token operator">::</span><span class="token function">isEmpty</span><span class="token punctuation">;</span>

<span class="token comment">// Method invocation context</span>
stream<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>e <span class="token operator">-&gt;</span> e<span class="token punctuation">.</span><span class="token function">getSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

<span class="token comment">// Cast context</span>
stream<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">ToIntFunction</span><span class="token punctuation">)</span> e <span class="token operator">-&gt;</span> e<span class="token punctuation">.</span><span class="token function">getSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>The interfaces in this package are general purpose functional interfaces used by the JDK, and are available to be used by user code as well.<br> While they do not identify a complete set of function shapes to which lambda expressions might be adapted, they provide enough to cover common requirements.<br> Other functional interfaces provided for specific purposes, such as {@link java.io.FileFilter}, are defined in the packages where they are used.</p><h2 id="functionalinterface注解说明" tabindex="-1"><a class="header-anchor" href="#functionalinterface注解说明" aria-hidden="true">#</a> @FunctionalInterface注解说明</h2><p>在<code>java.util.function</code>包下面，所有的类都标记了<code>@FunctionalInterface</code>注解，那么这个注解是干什么的呢？</p><p>被这个注解注释的接口就是<code>函数式接口</code></p><p><code>MCallable</code>被标记成了函数式接口</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@FunctionalInterface</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">MCallable</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>在使用的时候先定义接口</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">goodsByIdsCallback</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> goodsIds <span class="token punctuation">,</span> <span class="token class-name">Callback</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Collection</span><span class="token punctuation">&lt;</span><span class="token class-name">Goods</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> successCallback<span class="token punctuation">,</span> <span class="token class-name">MCallable</span> afterCallable<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>实现类的写法</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>goodsService<span class="token punctuation">.</span><span class="token function">goodsByIdsCallback</span><span class="token punctuation">(</span>goodsId<span class="token punctuation">,</span> data <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>lambda表达式<span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token operator">::</span><span class="token function">countDown</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>@FunctionalInterface标注的方法只能有一个方法，其他都是<code>default</code></p><p>使用函数式接口的列子</p><p>定义接口</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HeaderModule</span><span class="token punctuation">&gt;</span></span> <span class="token function">headList</span><span class="token punctuation">(</span><span class="token class-name">Fill</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HeaderModule</span><span class="token punctuation">&gt;</span></span> fill<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>在lambda表达式中，cid就不能改变了</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HeaderModule</span><span class="token punctuation">&gt;</span></span> headerModules <span class="token operator">=</span> cpsClassService<span class="token punctuation">.</span><span class="token function">headList</span><span class="token punctuation">(</span>headerModule <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cid <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> cid <span class="token operator">==</span> headerModule<span class="token punctuation">.</span><span class="token function">getParam</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;cid&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        headerModule<span class="token punctuation">.</span><span class="token function">setSelected</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/java/jdk8/function/index.html.vue

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
//# sourceMappingURL=7394.app.js.map