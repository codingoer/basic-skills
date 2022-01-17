"use strict";
exports.id = 5683;
exports.ids = [5683];
exports.modules = {

/***/ 30114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-7448c627",
  "path": "/jvm/",
  "title": "GC 垃圾回收器",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Minor GC 或 Young GC",
      "slug": "minor-gc-或-young-gc",
      "children": []
    },
    {
      "level": 2,
      "title": "Major GC 或",
      "slug": "major-gc-或",
      "children": []
    },
    {
      "level": 2,
      "title": "Full GC",
      "slug": "full-gc",
      "children": []
    }
  ],
  "filePathRelative": "jvm/README.md",
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

/***/ 55653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/jvm/index.html.vue?vue&type=template&id=115c62f4

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><p>JVM模型</p><p>分代，回收算法，垃圾回收器搭配和对比，类加载</p><div class="custom-container danger"><p class="custom-container-title">错误</p><p>Unrecognized VM option &#39;MetaspaceSize=128m&#39; Error: Could not create the Java Virtual Machine. Error: A fatal exception has occurred. Program will exit.</p></div><p>类加加载器，不重启JVM，替换调已经加载的类。</p><h1 id="gc-垃圾回收器" tabindex="-1"><a class="header-anchor" href="#gc-垃圾回收器" aria-hidden="true">#</a> GC 垃圾回收器</h1><p>map属于类维度的，不会被回收</p><p>Full GC 的时间和次数是管理java的应用服务不得不考虑的问题</p><p>Minor GC：从年轻代空间（包括 Eden 和 Survivor 区域）回收内存被称为 Minor GC。</p><p>Major GC 是清理老年代。</p><p>Full GC 是清理整个堆空间—包括年轻代和老年代。</p><p>对象优先在Eden区分配:</p><pre><code>HotSpot JVM把年轻代分为了三部分：1个Eden区和2个Survivor区（分别叫from和to）。默认比例为8：1。大多数情况下，对象优先在Eden区中分配。当Eden区中没有足够空间进行分配时，将会触发一次Minor GC。
</code></pre><p>大对象直接进入老年代： 所谓的大对象是指，需要大量连续内存空间的Java对象。例如：很长的字符串或者数组。虚拟机提供了一个-XX：PretenureSizeThreshold参数。令大于这个-XX：PretenureSizeThreshold设置值的对象，直接在老年代分配。</p><p>长期存活的对象将进入老年代： 虚拟机为了分代收集，对每一个对象定义了一个对象年龄计数器（Age）。如果对象在Eden出生，并且经过一次Minor GC后，仍然存活并且能被Survivor区中每熬过一次Minor GC，，年龄就会增加1岁。当年龄增加到默认的15岁时，就会晋升到老年代。</p><pre><code>晋升为老年代的阙值通过参数-XX：MaxTenuringThreshold设置。
</code></pre><p>许多 Major GC 是由 Minor GC 触发的，所以很多情况下将这两种 GC 分离是不太可能的。</p><p>这使得我们不用去关心到底是叫 Major GC 还是 Full GC，大家应该关注当前的 GC 是否停止了所有应用程序的线程，还是能够并发的处理而不用停掉应用程序的线程。</p><p>每次服务停止的时候，都会报这个警告</p><p>Java HotSpot(TM) 64-Bit Server VM warning: UseCMSCompactAtFullCollection is deprecated and will likely be removed in a future release. Java HotSpot(TM) 64-Bit Server VM warning: CMSFullGCsBeforeCompaction is deprecated and will likely be removed in a future release.</p><p>当内存大小不足时，则会启动GC线程并停止应用线程</p><p>Minor GC触发条件：当Eden区满时，触发Minor GC。</p><p>Full GC触发条件：老年代空间不足; 通过Minor GC后进入老年代的平均大小大于老年代的可用内存</p><h2 id="minor-gc-或-young-gc" tabindex="-1"><a class="header-anchor" href="#minor-gc-或-young-gc" aria-hidden="true">#</a> Minor GC 或 Young GC</h2><p>从年轻代空间（包括 Eden 和 Survivor 区域）回收内存被称为 Minor GC。每次 Minor GC 会<code>清理年轻代的内存</code>。</p><ul><li><p>当 JVM 无法为一个新的对象分配空间时会触发 Minor GC</p></li><li><p>执行 Minor GC 操作时，不会影响到永久代。</p></li></ul><h2 id="major-gc-或" tabindex="-1"><a class="header-anchor" href="#major-gc-或" aria-hidden="true">#</a> Major GC 或</h2><p>Major GC is cleaning the Tenured space。Major GC 是清理老年代。</p><p>Minor GC触发Major GC</p><h2 id="full-gc" tabindex="-1"><a class="header-anchor" href="#full-gc" aria-hidden="true">#</a> Full GC</h2><p>Full GC is cleaning the entire Heap – both Young and Tenured spaces.</p><p>Full GC 是清理整个堆空间—包括年轻代和老年代。</p><p>java.lang.OutOfMemoryError: PermGen space</p><p>元空间与永久代的区别？？</p><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/jvm/index.html.vue

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
//# sourceMappingURL=5683.app.js.map