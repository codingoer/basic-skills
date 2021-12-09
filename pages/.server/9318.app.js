"use strict";
exports.id = 9318;
exports.ids = [9318];
exports.modules = {

/***/ 12887:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-0a56c2f2",
  "path": "/java/jdk8/function/functional-interface.html",
  "title": "FunctionalInterface注解",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "类注释翻译",
      "slug": "类注释翻译",
      "children": []
    },
    {
      "level": 2,
      "title": "源代码",
      "slug": "源代码",
      "children": []
    },
    {
      "level": 2,
      "title": "JDK源码用到的地方",
      "slug": "jdk源码用到的地方",
      "children": [
        {
          "level": 3,
          "title": "java.io",
          "slug": "java-io",
          "children": []
        },
        {
          "level": 3,
          "title": "Comparator",
          "slug": "comparator",
          "children": []
        },
        {
          "level": 3,
          "title": "java.util.function",
          "slug": "java-util-function",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "怎么使用",
      "slug": "怎么使用",
      "children": []
    }
  ],
  "filePathRelative": "java/jdk8/function/functional-interface.md",
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

/***/ 83826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ functional_interface_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/java/jdk8/function/functional-interface.html.vue?vue&type=template&id=33a06f4c

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="functionalinterface注解" tabindex="-1"><a class="header-anchor" href="#functionalinterface注解" aria-hidden="true">#</a> FunctionalInterface注解</h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>在<code>java.lang</code>包下面，Java8版本加入的注解。</p></div><h2 id="类注释翻译" tabindex="-1"><a class="header-anchor" href="#类注释翻译" aria-hidden="true">#</a> 类注释翻译</h2><p>An informative annotation type used to indicate that an interface type declaration is intended to be a <i>functional interface</i> as defined by the Java Language Specification.</p><p>一个提供消息的注解类型，用于表明：一个接口类型申报，旨在使用Java语言规范定义一个<strong>接口函数</strong></p><p>Conceptually, a functional interface has exactly one abstract method.<br> Since {@linkplain java.lang.reflect.Method#isDefault()default methods} have an implementation, they are not abstract.<br> If an interface declares an abstract method overriding one of the public methods of {@code java.lang.Object}, that also does <em>not</em> count toward the interface&#39;s abstract method count since any implementation of the interface will have an implementation from {@code java.lang.Object} or elsewhere.</p><p>Note that instances of functional interfaces can be created with lambda expressions, method references, or constructor references.</p><p>If a type is annotated with this annotation type, compilers are required to generate an error message unless:</p><ul><li>The type is an interface type and not an annotation type, enum, or class.</li><li>The annotated type satisfies the requirements of a functional interface.</li></ul><p>However, the compiler will treat any interface meeting the definition of a functional interface as a functional interface regardless of whether or not a {@code FunctionalInterface} annotation is present on the interface declaration.</p><h2 id="源代码" tabindex="-1"><a class="header-anchor" href="#源代码" aria-hidden="true">#</a> 源代码</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span>RUNTIME<span class="token punctuation">)</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span>TYPE<span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">FunctionalInterface</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="jdk源码用到的地方" tabindex="-1"><a class="header-anchor" href="#jdk源码用到的地方" aria-hidden="true">#</a> JDK源码用到的地方</h2><h3 id="java-io" tabindex="-1"><a class="header-anchor" href="#java-io" aria-hidden="true">#</a> java.io</h3><blockquote><p>FileFilter</p></blockquote><h3 id="comparator" tabindex="-1"><a class="header-anchor" href="#comparator" aria-hidden="true">#</a> Comparator</h3><h3 id="java-util-function" tabindex="-1"><a class="header-anchor" href="#java-util-function" aria-hidden="true">#</a> java.util.function</h3><h2 id="怎么使用" tabindex="-1"><a class="header-anchor" href="#怎么使用" aria-hidden="true">#</a> 怎么使用</h2><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/java/jdk8/function/functional-interface.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const functional_interface_html = (__exports__);

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
//# sourceMappingURL=9318.app.js.map