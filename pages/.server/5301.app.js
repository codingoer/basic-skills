"use strict";
exports.id = 5301;
exports.ids = [5301];
exports.modules = {

/***/ 87333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-186d9622",
  "path": "/java/dynamic/proxy.html",
  "title": "Java中的代理",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Java静态代理",
      "slug": "java静态代理",
      "children": []
    },
    {
      "level": 2,
      "title": "Java动态代理",
      "slug": "java动态代理",
      "children": []
    },
    {
      "level": 2,
      "title": "JDK动态代理",
      "slug": "jdk动态代理",
      "children": []
    },
    {
      "level": 2,
      "title": "CGLIB动态代理",
      "slug": "cglib动态代理",
      "children": []
    },
    {
      "level": 2,
      "title": "JDK VS CGLIB",
      "slug": "jdk-vs-cglib",
      "children": []
    }
  ],
  "filePathRelative": "java/dynamic/proxy.md",
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

/***/ 52716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ proxy_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/java/dynamic/proxy.html.vue?vue&type=template&id=433ab084

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="java中的代理" tabindex="-1"><a class="header-anchor" href="#java中的代理" aria-hidden="true">#</a> Java中的代理</h1><p>提供了对目标对象的间接访问方式，即通过代理访问目标对象。通过字节码增强对方法进行拦截增强，以便于增加需要的额外处理逻辑</p><p>使用代理的好处：</p><ul><li><p>可以隐藏目标对象的实现</p></li><li><p>可以实现客户与目标对象之间的解耦</p></li></ul><h2 id="java静态代理" tabindex="-1"><a class="header-anchor" href="#java静态代理" aria-hidden="true">#</a> Java静态代理</h2><p>定义接口和接口实现，再定义接口的代理对象，将接口注入到代理对象中，然后通过代理对象去调用真正的实现类。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">StaticService</span> <span class="token punctuation">{</span>

    <span class="token class-name">String</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token class-name">String</span> userName<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StaticServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">StaticService</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token class-name">String</span> userName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Hello &quot;</span> <span class="token operator">+</span> userName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StaticServiceProxy</span> <span class="token keyword">implements</span> <span class="token class-name">StaticService</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">StaticService</span> service <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StaticServiceImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token class-name">String</span> userName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;代理类包装一下&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> service<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span>userName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><strong>静态代理只能代理一个类服务，如果需要代理的类很多，就需要大量编写代理类，比较繁琐。</strong></p><h2 id="java动态代理" tabindex="-1"><a class="header-anchor" href="#java动态代理" aria-hidden="true">#</a> Java动态代理</h2><p>https://www.jianshu.com/p/c1bfca9e46bc</p><p>所谓的动态代理就是想办法根据接口或者目标对象计算出代理类的字节码然后加载进JVM中。</p><h2 id="jdk动态代理" tabindex="-1"><a class="header-anchor" href="#jdk动态代理" aria-hidden="true">#</a> JDK动态代理</h2><p><strong>通过接口实现的动态代理</strong></p><h2 id="cglib动态代理" tabindex="-1"><a class="header-anchor" href="#cglib动态代理" aria-hidden="true">#</a> CGLIB动态代理</h2><p><strong>针对类来实现代理的，当只有类没有接口的时候就需要使用CGLIB动态代理</strong></p><h2 id="jdk-vs-cglib" tabindex="-1"><a class="header-anchor" href="#jdk-vs-cglib" aria-hidden="true">#</a> JDK VS CGLIB</h2><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/java/dynamic/proxy.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const proxy_html = (__exports__);

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
//# sourceMappingURL=5301.app.js.map