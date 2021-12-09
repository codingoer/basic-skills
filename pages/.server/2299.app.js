"use strict";
exports.id = 2299;
exports.ids = [2299];
exports.modules = {

/***/ 27514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-637a93f8",
  "path": "/java/oop/oop-base.html",
  "title": "面向对象基础",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "多态和动态绑定",
      "slug": "多态和动态绑定",
      "children": []
    },
    {
      "level": 2,
      "title": "重写和重载",
      "slug": "重写和重载",
      "children": []
    },
    {
      "level": 2,
      "title": "类型转换",
      "slug": "类型转换",
      "children": []
    },
    {
      "level": 2,
      "title": "动态绑定和静态绑定",
      "slug": "动态绑定和静态绑定",
      "children": []
    },
    {
      "level": 2,
      "title": "引用类型",
      "slug": "引用类型",
      "children": [
        {
          "level": 3,
          "title": "强引用",
          "slug": "强引用",
          "children": []
        },
        {
          "level": 3,
          "title": "软引用",
          "slug": "软引用",
          "children": []
        },
        {
          "level": 3,
          "title": "弱引用",
          "slug": "弱引用",
          "children": []
        },
        {
          "level": 3,
          "title": "幻象引用",
          "slug": "幻象引用",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "java/oop/oop-base.md",
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

/***/ 94166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ oop_base_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/java/oop/oop-base.html.vue?vue&type=template&id=09e3bf2c

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="面向对象基础" tabindex="-1"><a class="header-anchor" href="#面向对象基础" aria-hidden="true">#</a> 面向对象基础</h1><h2 id="多态和动态绑定" tabindex="-1"><a class="header-anchor" href="#多态和动态绑定" aria-hidden="true">#</a> 多态和动态绑定</h2><p>父类或接口定义的引用指向子类或实现类的实例对象，即一种类型的变量，可以引用多种实际类型对象。而程序调用的方法在<strong>运行时期</strong>才动态绑定。</p><p>父类的变量有两个类型：父类类型称之为<strong>静态类型</strong>，子类类型称之为父类的<strong>动态类型。</strong></p><p>父类变量的引用指向子类，而实际调用的是子类实现，称之为<strong>动态绑定。</strong></p><ul><li><p>编译时多态</p></li><li><p>运行时多态</p></li></ul><h2 id="重写和重载" tabindex="-1"><a class="header-anchor" href="#重写和重载" aria-hidden="true">#</a> 重写和重载</h2><ul><li>重载</li></ul><p>重载是指方法名称相同但参数签名不同（参数个数，参数类型，参数顺序不同）</p><p><strong>当有多个重名函数的时候，在决定要调用哪个函数的过程中，首先是按照参数类型进行匹配的，寻找在所有重载版本中最匹配的，然后才看变量的动态类型，进行动态绑定。</strong></p><ul><li>重写</li></ul><p>重写是指子类重写与父类相同签名参数的方法</p><h2 id="类型转换" tabindex="-1"><a class="header-anchor" href="#类型转换" aria-hidden="true">#</a> 类型转换</h2><ul><li>向上转型</li></ul><p><strong>子类对象赋值给父类引用变量</strong></p><ul><li>向下转型</li></ul><p><strong>父类型的变量赋值给子类变量</strong></p><p>一个父类的变量能不能转换成一个子类的变量，取决于这个父类变量的动态类型，也就是引用对象的类型是不是这个子类或者这个子类的子类。</p><p>正确示例</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Base</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Child</span> c <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Child</span><span class="token punctuation">)</span> b<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>错误示例</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Base</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Base</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Child</span> c <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Child</span><span class="token punctuation">)</span> b<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>安全的进行类型转换，通过使用<code>instanceof</code>关键字</p><h2 id="动态绑定和静态绑定" tabindex="-1"><a class="header-anchor" href="#动态绑定和静态绑定" aria-hidden="true">#</a> 动态绑定和静态绑定</h2><p>动态绑定是要等到程序运行时，静态绑定是在程序编译阶段即可决定。</p><ul><li>动态绑定</li></ul><p>父类变量的引用指向子类，而实际调用的是子类实现，称之为<strong>动态绑定。</strong></p><ul><li>静态绑定</li></ul><p>静态绑定在程序编译阶段就决定，<strong>实例变量，静态变量，静态方法，private方法，都是静态绑定。</strong></p><ul><li>静态类型是父类，则访问的是父类的变量和方法</li><li>静态类型是子类，则访问的是子类的变量和方法</li></ul><h2 id="引用类型" tabindex="-1"><a class="header-anchor" href="#引用类型" aria-hidden="true">#</a> 引用类型</h2><p><strong>不同的引用类型，主要体现的是对象不同的可达性（reachable）状态和对垃圾收集的影响。</strong></p><h3 id="强引用" tabindex="-1"><a class="header-anchor" href="#强引用" aria-hidden="true">#</a> 强引用</h3><p>只要还有强引用指向一个对象，就能表明对象还活着，垃圾收集器不会碰这种对象。</p><h3 id="软引用" tabindex="-1"><a class="header-anchor" href="#软引用" aria-hidden="true">#</a> 软引用</h3><p>相对强引用弱化一些的引用，只有当JVM认为内存不足时，才会视图回收软引用指向的对象。JVM会确保在抛出OutOfMemoryError之前清理软引用对象。</p><h3 id="弱引用" tabindex="-1"><a class="header-anchor" href="#弱引用" aria-hidden="true">#</a> 弱引用</h3><h3 id="幻象引用" tabindex="-1"><a class="header-anchor" href="#幻象引用" aria-hidden="true">#</a> 幻象引用</h3><p>幻想引用也称为虚引用</p><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/java/oop/oop-base.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const oop_base_html = (__exports__);

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
//# sourceMappingURL=2299.app.js.map