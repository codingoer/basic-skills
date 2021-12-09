"use strict";
exports.id = 67;
exports.ids = [67];
exports.modules = {

/***/ 17525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-788874ab",
  "path": "/java/oop/class-load.html",
  "title": "类加载机制",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "类的信息",
      "slug": "类的信息",
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
      "title": "内存空间",
      "slug": "内存空间",
      "children": []
    }
  ],
  "filePathRelative": "java/oop/class-load.md",
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

/***/ 63974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ class_load_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/java/oop/class-load.html.vue?vue&type=template&id=3af24b1e

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="类加载机制" tabindex="-1"><a class="header-anchor" href="#类加载机制" aria-hidden="true">#</a> 类加载机制</h1><p><strong>类的加载是指将类的相关信息加载到内存，类是动态加载的，当第一次使用这个类的时候才会加载。加载一个类时，会看其父类是否已加载，如果没有，则会加载其父类。</strong></p><h2 id="类的信息" tabindex="-1"><a class="header-anchor" href="#类的信息" aria-hidden="true">#</a> 类的信息</h2><ul><li>类变量（静态变量）</li><li>类初始化代码 <ul><li>定义静态变量时的赋值语句</li><li>静态初始化代码块</li></ul></li><li>类方法（静态方法）</li><li>实例变量</li><li>实例初始化代码 <ul><li>定义实例变量时的赋值语句</li><li>实例初始化代码块</li><li>构造方法</li></ul></li><li>实例方法</li><li>父类信息引用</li></ul><h2 id="类加载过程" tabindex="-1"><a class="header-anchor" href="#类加载过程" aria-hidden="true">#</a> 类加载过程</h2><ul><li>分配内存保存类的信息</li><li>给类变量赋默认值</li><li>加载父类</li><li>设置父子关系</li><li>执行类初始化代码</li></ul><p><strong>类初始化代码是先执行父类的，再执行子类的。父类执行时，子类静态变量的值是默认值。</strong></p><p><strong>加载一个类时，会看其父类是否已加载，如果没有，则会加载其父类。</strong></p><h2 id="内存空间" tabindex="-1"><a class="header-anchor" href="#内存空间" aria-hidden="true">#</a> 内存空间</h2><ul><li>栈</li></ul><p>存放函数的局部变量和引用</p><ul><li>堆</li></ul><p>存放动态分配的对象</p><ul><li>方法区</li></ul><p>存放类的信息</p><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/java/oop/class-load.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const class_load_html = (__exports__);

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
//# sourceMappingURL=67.app.js.map