"use strict";
exports.id = 8674;
exports.ids = [8674];
exports.modules = {

/***/ 54151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-14c69af4",
  "path": "/java/",
  "title": "Java基础",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "异常",
      "slug": "异常",
      "children": [
        {
          "level": 3,
          "title": "异常1",
          "slug": "异常1",
          "children": []
        },
        {
          "level": 3,
          "title": "异常2",
          "slug": "异常2",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Java core",
      "slug": "java-core",
      "children": []
    },
    {
      "level": 2,
      "title": "知识点分类",
      "slug": "知识点分类",
      "children": []
    }
  ],
  "filePathRelative": "java/README.md",
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

/***/ 98005:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/java/index.html.vue?vue&type=template&id=c957974a



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="java基础" tabindex="-1"><a class="header-anchor" href="#java基础" aria-hidden="true">#</a> Java基础</h1><p>环境变量，jdk与jre的区别，jar包，rt.jar干嘛的，其他的jar呢，</p><p>Java程序怎么跑起来的，编译与反编译，底层东西</p><h2 id="异常" tabindex="-1"><a class="header-anchor" href="#异常" aria-hidden="true">#</a> 异常</h2><p>form表单不能传数组，没有数组的概念，多个值就是数组。</p><h3 id="异常1" tabindex="-1"><a class="header-anchor" href="#异常1" aria-hidden="true">#</a> 异常1</h3><h3 id="异常2" tabindex="-1"><a class="header-anchor" href="#异常2" aria-hidden="true">#</a> 异常2</h3><p>StringBuilder会把null加入进去</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>goods<span class="token punctuation">.</span><span class="token function">getSpecs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>goods<span class="token punctuation">.</span><span class="token function">getModelNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>goods<span class="token punctuation">.</span><span class="token function">getForecastContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>输出结果 <code>null null 0.33粒 </code></p><p>枚举类会自动继承<code>Enum</code></p><p>面向接口编程，扩展性高，不关心内部的实例</p><p>继承的缺点？耦合太高，使用泛型</p><p>泛型程序设计</p><p>枚举类型的构造方法为什么不能加public</p><p>Why can&#39;t enum constructors be protected or public in Java?</p><p><a href="https://docs.oracle.com/en/java/" target="_blank" rel="noopener noreferrer">Java Documentation`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><p>面向接口编程，接口就是功能的<code>行为</code></p><p>集合，线程，并发，锁，io等一定要深入到源码级别</p><p>对象克隆，深克隆和浅克隆</p><p>值传递和引用传递：值传递是基本数据类型，引用传递是对象</p><p>Java基本类型，分类讲出来，逻辑清晰</p><p>private protected public default</p><p>Java多态：多态是同一个行为具有多个不同表现形式或形态的能力</p><p>基本数据类型，自动拆箱，对象拆箱？</p><p>动态编译，反射</p><h2 id="java-core" tabindex="-1"><a class="header-anchor" href="#java-core" aria-hidden="true">#</a> Java core</h2><p>https://dzone.com/refcardz/core-java?chapter=2</p><p>https://www.javatpoint.com/immutable-string</p><h2 id="知识点分类" tabindex="-1"><a class="header-anchor" href="#知识点分类" aria-hidden="true">#</a> 知识点分类</h2><ul><li>基础程序设计</li></ul><p>基本数据类型，变量，关键字，运算符，流程控制，数组，输入与输出，移位运算</p><ul><li>基本对象与类</li></ul><p>类的基础，private protected, 对象克隆，String类，StringBuilder，对象初始化流程，构造方法，静态代码块，方法块，类的特性，内部类，常用基础类，枚举类</p><ul><li>面向对象</li></ul><p>类，超类，子类，面向对象设计，接口，抽象类，面向接口编程，继承</p><ul><li>动态特性</li></ul><p>反射，类加载机制，代理，动态代理，静态代理，注解，编译器，反编译</p><ul><li>异常与日志</li></ul><p>异常分类，try catch，何时捕获何时抛出</p><ul><li>泛型程序设计</li></ul><p>泛型类，泛型类型的继承，通配符，反射和泛型</p><ul><li>集合</li></ul><p>Collection Map List，列表，队列</p><ul><li>I/O</li></ul><p>文件基础，BIO, NIO, AIO</p><ul><li>并发</li></ul><p>线程基本概念，并发包juc</p><ul><li>函数式编程</li></ul><p>jdk8, lambda表达式，function，stream</p><ul><li><p>设计模式</p></li><li><p>JVM</p></li><li><p>如何做抽象，提高抽象能力</p></li><li><p>JSR JCP</p></li></ul><p>jsr303 Bean Validation jsr380 Bean Validation 2.0</p><!--]-->`)
}
;// CONCATENATED MODULE: ./.temp/pages/java/index.html.vue?vue&type=template&id=c957974a

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/java/index.html.vue

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
//# sourceMappingURL=8674.app.js.map