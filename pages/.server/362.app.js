"use strict";
exports.id = 362;
exports.ids = [362];
exports.modules = {

/***/ 71334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-d7334612",
  "path": "/java/oop/class-extend.html",
  "title": "类的继承",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "super关键字",
      "slug": "super关键字",
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
      "title": "父类与子类重名",
      "slug": "父类与子类重名",
      "children": []
    },
    {
      "level": 2,
      "title": "访问权限与可见性",
      "slug": "访问权限与可见性",
      "children": []
    },
    {
      "level": 2,
      "title": "类加载过程",
      "slug": "类加载过程",
      "children": []
    },
    {
      "level": 2,
      "title": "对象创建过程",
      "slug": "对象创建过程",
      "children": []
    },
    {
      "level": 2,
      "title": "方法调用过程",
      "slug": "方法调用过程",
      "children": []
    }
  ],
  "filePathRelative": "java/oop/class-extend.md",
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

/***/ 19029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ class_extend_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/java/oop/class-extend.html.vue?vue&type=template&id=49c4fae4

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="类的继承" tabindex="-1"><a class="header-anchor" href="#类的继承" aria-hidden="true">#</a> 类的继承</h1><p>在Java中，即使没有声明父类，也有一个隐含的父类Object</p><p><strong>一个类最多只能有一个父类</strong>，子类不能直接访问父类私有属性和方法，<strong>除了私有的外，子类继承了父类的其他属性和方法</strong>。</p><h2 id="super关键字" tabindex="-1"><a class="header-anchor" href="#super关键字" aria-hidden="true">#</a> super关键字</h2><p>super用于指代父类，可用于调用父类构造方法，访问父类方法和变量。super只是一个关键字，不能作为参数和返回值，只是用于告诉编译器访问父类的相关变量和方法。</p><p><strong>在构造方法中调用父类构造方法，super必须放在第一行！！！</strong></p><h2 id="构造方法" tabindex="-1"><a class="header-anchor" href="#构造方法" aria-hidden="true">#</a> 构造方法</h2><p>子类可以通过super调用父类的构造方法，<strong>如果子类没有通过super调用，则会自动调用父类默认的构造方法</strong>。</p><p><strong>一个示例如下</strong></p><p>如果父类构造方法调用了一个可以被重写的方法，在执行子类的方法时，会输出两次值。</p><ol><li>Base构造方法</li><li>0</li><li>Child构造方法</li><li>123</li></ol><p><strong>首先父类初始化，父类构造方法调用被重写方法，由于该方法被子类重写，就会调用子类方法。这时候子类的实例变量的赋值语句和构造方法还没执行，所以第一次输出默认值。</strong></p><h2 id="父类与子类重名" tabindex="-1"><a class="header-anchor" href="#父类与子类重名" aria-hidden="true">#</a> 父类与子类重名</h2><p>private变量和方法只能在类内访问，访问的也永远是当前类的。public变量和方法，则要看如何访问，public变量和方法在类内，访问的是当前类，子类可通过super关键字明确指定访问父类的。<strong>如果在类外，则要看访问变量的静态类型。</strong></p><ul><li>静态类型是父类，则访问的是父类的变量和方法</li><li>静态类型是子类，则访问的是子类的变量和方法</li></ul><p><strong>实例变量，静态变量，静态方法，private方法，都是静态绑定</strong></p><h2 id="访问权限与可见性" tabindex="-1"><a class="header-anchor" href="#访问权限与可见性" aria-hidden="true">#</a> 访问权限与可见性</h2><ul><li>继承访问权限</li></ul><p>private修饰符表示只能类内部使用，public修饰符表示可以在类外部访问，还有一种介于中间的修饰符protected。</p><p><strong>表示不能被外部任意访问，但可以被子类访问，还可被同一个包中的其他类访问！！</strong></p><ul><li>可见性重写</li></ul><p><strong>重写时子类不能降低父类方法的可见性，子类可以升级父类方法的可见性。</strong> 因为，子类对象也属于父类，子类必须支持父类所有的对外行为。</p><h2 id="类加载过程" tabindex="-1"><a class="header-anchor" href="#类加载过程" aria-hidden="true">#</a> 类加载过程</h2><p><strong>类的加载是指将类的相关信息加载到内存，类是动态加载的，当第一次使用这个类的时候才会加载。加载一个类时，会看其父类是否已加载，如果没有，则会加载其父类。</strong></p><p><a href="./class-load">点这里看</a></p><h2 id="对象创建过程" tabindex="-1"><a class="header-anchor" href="#对象创建过程" aria-hidden="true">#</a> 对象创建过程</h2><p>new的过程中，父类的构造方法会先进行初始化，<strong>优先于子类</strong>。</p><p>创建对象的过程：</p><ul><li>分配内存</li><li>对所有实例变量赋默认值</li><li>执行实例初始化代码 <ul><li>定义实例变量时的赋值语句</li><li>实例初始化代码块</li><li>构造方法</li></ul></li></ul><p><strong>分配的内存包括子类和所有父类的实例变量，但不包括任何静态变量，实例初始化代码从父类开始执行。</strong></p><p><strong>每个对象除了保存类的实例变量之外，还保存着实际类信息的引用！！！！(方法区的东西)</strong></p><h2 id="方法调用过程" tabindex="-1"><a class="header-anchor" href="#方法调用过程" aria-hidden="true">#</a> 方法调用过程</h2><p>寻找</p><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/java/oop/class-extend.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const class_extend_html = (__exports__);

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
//# sourceMappingURL=362.app.js.map