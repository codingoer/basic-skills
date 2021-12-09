"use strict";
exports.id = 3219;
exports.ids = [3219];
exports.modules = {

/***/ 22044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-8d1ea4c0",
  "path": "/java/oop/class-base.html",
  "title": "类的基础",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "类的基本概念",
      "slug": "类的基本概念",
      "children": []
    },
    {
      "level": 2,
      "title": "声明一个类实例",
      "slug": "声明一个类实例",
      "children": []
    },
    {
      "level": 2,
      "title": "初始化代码块",
      "slug": "初始化代码块",
      "children": []
    },
    {
      "level": 2,
      "title": "构造方法",
      "slug": "构造方法",
      "children": []
    },
    {
      "level": 2,
      "title": "this关键字",
      "slug": "this关键字",
      "children": []
    },
    {
      "level": 2,
      "title": "类和对象的声明周期",
      "slug": "类和对象的声明周期",
      "children": []
    },
    {
      "level": 2,
      "title": "类的可见性范围",
      "slug": "类的可见性范围",
      "children": []
    }
  ],
  "filePathRelative": "java/oop/class-base.md",
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

/***/ 95046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ class_base_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/java/oop/class-base.html.vue?vue&type=template&id=835fc0a0

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="类的基础" tabindex="-1"><a class="header-anchor" href="#类的基础" aria-hidden="true">#</a> 类的基础</h1><h2 id="类的基本概念" tabindex="-1"><a class="header-anchor" href="#类的基本概念" aria-hidden="true">#</a> 类的基本概念</h2><p><strong>定义了类本身，不会做什么事，不会分配内存。</strong></p><ul><li>类变量 (静态成员变量)</li></ul><p><strong>类型本身具有的属性</strong></p><ul><li>类方法 (静态成员方法)</li></ul><p><strong>类型本身可以进行的操作</strong></p><p>类方法只能访问类变量，不能访问实例变量，可以调用其他的类方法，不能调用实例方法。</p><ul><li>实例变量 (成员变量)</li></ul><p><strong>类型实例具有的属性，也称之为成员变量</strong></p><ul><li>实例方法 (成员方法)</li></ul><p><strong>类型实例可以进行的操作</strong></p><p>实例方法既能访问实例变量，也能访问类变量，既可以调用实例方法，也可以调用类方法。</p><h2 id="声明一个类实例" tabindex="-1"><a class="header-anchor" href="#声明一个类实例" aria-hidden="true">#</a> 声明一个类实例</h2><p>与基本数据类型相比，<code>int a</code>这个语句，<code>int</code>就是类型，<code>a</code>就是实例。</p><p><strong>定义了类本身，不会做什么事，不会分配内存。实例也称作对象</strong></p><p>另外注意，实例变量不需要一开始就有值。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Point</span> p<span class="token punctuation">;</span>
p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Point</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol><li><code>Point p</code>声明了一个变量，p是Point类型的</li><li>声明变量本身<strong>只会分配存放位置的内存空间(栈内存)</strong>，这块空间还没有指向任何实际内容，只是存储实际内容的位置。</li><li><code>p = new Point();</code>创建了一个实例或对象，然后赋值给了变量p。<strong>分配内存(堆内存)</strong> 之后给实例变量设置默认值</li></ol><p>总结：</p><ul><li>引用类型变量和数组一样，都有两块内存：一块存放实际内容，一块存放实际内容的位置。</li><li>在创建对象的时候，所有的实例变量都会分配一个默认值。 <ul><li>数值类型变量的默认值是0</li><li>boolean是false</li><li>char是\\u0000</li><li>引用类型是null</li></ul></li></ul><h2 id="初始化代码块" tabindex="-1"><a class="header-anchor" href="#初始化代码块" aria-hidden="true">#</a> 初始化代码块</h2><p>初始化代码块的一般应用就是给变量赋值</p><ul><li>初始化代码块</li></ul><p><strong>在创建一个对象的时候，会先调用初始化代码块，然后才执行构造方法！！！</strong></p><ul><li>静态初始化代码块</li></ul><p><strong>在类加载的时候执行，在任何对象创建之前，且只执行一次！！！</strong></p><h2 id="构造方法" tabindex="-1"><a class="header-anchor" href="#构造方法" aria-hidden="true">#</a> 构造方法</h2><p>构造方法可以有多个，不同于一般方法，构造方法名称是固定的，与类名相同，并且没有返回值。</p><p><strong>构造方法中如果有this调用，this调用必须放在第一行，如果调用别的构造方法，先调别的，然后再做调整。</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Point</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Point</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol><li>分配内存空间</li><li>给实例变量设置默认值</li><li>调用构造方法</li></ol><p><strong>默认构造方法</strong></p><p>每个类都至少有一个构造方法，在<strong>通过new创建对象的过程</strong>中会被调用。构造方法没有什么其他操作可以省略，Java编译器会自动生成一个默认的构造方法。</p><p><strong>记住，一旦定义了构造方法，Java就不会再自动生成默认的构造方法了！！！</strong></p><p><strong>私有构造方法</strong></p><ol><li>不能创建类的实例，如<code>Math</code>类，只能被静态访问</li><li>能创建类的实例，但只能被类的静态方法调用。即类的对象有但是只能有一个</li><li>只是被其他多个构造方法调用</li></ol><h2 id="this关键字" tabindex="-1"><a class="header-anchor" href="#this关键字" aria-hidden="true">#</a> this关键字</h2><p><strong>在实例方法中有一个隐含的参数，这个参数就是当前操作的实例自己，this表示当前实例</strong></p><ul><li>this引用一个对象，是实实在在存在的</li><li>可以作为函数参数，<strong>可以作为返回值</strong></li></ul><p><strong>在构造方法中调用其他构造方法，this必须放在第一行！！！</strong></p><h2 id="类和对象的声明周期" tabindex="-1"><a class="header-anchor" href="#类和对象的声明周期" aria-hidden="true">#</a> 类和对象的声明周期</h2><ol><li>类加载</li></ol><p>当第一次通过new创建一个类的对象时，或者通过类名访问类变量和类方法时，Java会将类加载进内存，为这个类分配一块空间，这个空间包括类的定义，变量和方法信息。（<strong>类加载进内存，会放到方法区</strong> ）</p><p>同时<strong>还有类的静态变量</strong>，接下来会对静态变量赋初始值。</p><p>类加载进内存后，一般不会释放，直到程序结束。<strong>一般情况下，类只会加载一次。所以静态变量在内存中只有一份。</strong></p><ol start="2"><li>创建对象</li></ol><p>通过new创建一个对象的时候，对象产生，在内存中会存储这个对象的实例变量的值。<strong>每做new操作一次，就会产生一个对象，就会有一份独立的实例变量。</strong></p><p>注意，每个实例对象除了保存实例变量的值外，<strong>还保存着对应类型的地址，也即是类的地址</strong>。这样通过对象就是能知道类。</p><ol start="3"><li>内存</li></ol><p>对象和数组一样，有两块内存。<strong>保存地址的部分分配在栈中，而保存实际内容的部分分配在堆中。</strong></p><ul><li>栈中的内容是自动管理的</li><li>堆中的内存是被垃圾回收机制管理的</li></ul><h2 id="类的可见性范围" tabindex="-1"><a class="header-anchor" href="#类的可见性范围" aria-hidden="true">#</a> 类的可见性范围</h2><p>Java中使用包的概念来解决命名冲突。带完整包名的类名称为<strong>完全限定名</strong></p><p>同一个包下面的类之间引用式不需要包名的，可以直接引用。</p><p><strong>如果什么可见性修饰符都不写，它的可见性范围就是同一个包内(不包括子包)，同一个包内的其他类可以访问。</strong></p><p>可见性范围大小：</p><p><strong>private &lt; 默认包 &lt; protected &lt; public</strong></p><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/java/oop/class-base.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const class_base_html = (__exports__);

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
//# sourceMappingURL=3219.app.js.map