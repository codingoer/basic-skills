"use strict";
exports.id = 2126;
exports.ids = [2126];
exports.modules = {

/***/ 94963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-7340091e",
  "path": "/java/oop/class/string.html",
  "title": "常用基础类之String",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "String",
      "slug": "string",
      "children": []
    },
    {
      "level": 2,
      "title": "字符串缓存",
      "slug": "字符串缓存",
      "children": []
    },
    {
      "level": 2,
      "title": "StringBuilder",
      "slug": "stringbuilder",
      "children": []
    },
    {
      "level": 2,
      "title": "StringBuffer",
      "slug": "stringbuffer",
      "children": []
    },
    {
      "level": 2,
      "title": "StringBuilder VS StringBuffer",
      "slug": "stringbuilder-vs-stringbuffer",
      "children": []
    }
  ],
  "filePathRelative": "java/oop/class/string.md",
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

/***/ 85833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ string_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/java/oop/class/string.html.vue?vue&type=template&id=365f76df

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="常用基础类之string" tabindex="-1"><a class="header-anchor" href="#常用基础类之string" aria-hidden="true">#</a> 常用基础类之String</h1><h2 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> String</h2><p>String是典型的Immutable类，被声明为final，所有的属性也是final。<strong>由于不可变性，类似拼接，裁剪字符串操作，都会产生新的String对象</strong></p><ul><li><p>通过String和相关类，考察基本的线程安全设计与实现，各种基础编程实践</p></li><li><p>考察JVM对象缓存机制的理解以及如何良好地使用</p></li><li><p>考察JVM优化Java代码的一些技巧</p></li></ul><h2 id="字符串缓存" tabindex="-1"><a class="header-anchor" href="#字符串缓存" aria-hidden="true">#</a> 字符串缓存</h2><h2 id="stringbuilder" tabindex="-1"><a class="header-anchor" href="#stringbuilder" aria-hidden="true">#</a> StringBuilder</h2><p>为了解决拼接字符串产生太多中间对象的问题而提供的一个类。</p><h2 id="stringbuffer" tabindex="-1"><a class="header-anchor" href="#stringbuffer" aria-hidden="true">#</a> StringBuffer</h2><p>与<code>StringBuilder</code>没有本质区别，但是线程安全，使用<code>synchronized</code>有一定的开销。</p><h2 id="stringbuilder-vs-stringbuffer" tabindex="-1"><a class="header-anchor" href="#stringbuilder-vs-stringbuffer" aria-hidden="true">#</a> StringBuilder VS StringBuffer</h2><p>一个是线程安全，一个是线程非安全</p><p>for循环禁止使用字符串拼接</p><p>使用哪一种考虑场景，有没有并发情况</p><p>StringBuilder代替StringBuffer, StringBuffer线程安全做了不必要的开销</p><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/java/oop/class/string.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const string_html = (__exports__);

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
//# sourceMappingURL=2126.app.js.map