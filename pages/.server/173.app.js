"use strict";
exports.id = 173;
exports.ids = [173];
exports.modules = {

/***/ 38945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-38550f8b",
  "path": "/java/concurrency/glossary.html",
  "title": "Introduction",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "深入理解并发和并行",
      "slug": "深入理解并发和并行",
      "children": []
    },
    {
      "level": 2,
      "title": "Parallelism",
      "slug": "parallelism",
      "children": []
    },
    {
      "level": 2,
      "title": "Concurrency",
      "slug": "concurrency",
      "children": []
    },
    {
      "level": 2,
      "title": "Parallelism VS Concurrency",
      "slug": "parallelism-vs-concurrency",
      "children": []
    },
    {
      "level": 2,
      "title": "Physical Cores",
      "slug": "physical-cores",
      "children": []
    },
    {
      "level": 2,
      "title": "Logical Cores",
      "slug": "logical-cores",
      "children": []
    },
    {
      "level": 2,
      "title": "Processor",
      "slug": "processor",
      "children": []
    },
    {
      "level": 2,
      "title": "Core",
      "slug": "core",
      "children": []
    },
    {
      "level": 2,
      "title": "CPU",
      "slug": "cpu",
      "children": []
    },
    {
      "level": 2,
      "title": "单核CPU多线程有必要吗？",
      "slug": "单核cpu多线程有必要吗",
      "children": []
    }
  ],
  "filePathRelative": "java/concurrency/glossary.md",
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

/***/ 32731:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ glossary_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/java/concurrency/glossary.html.vue?vue&type=template&id=980e60b0

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h1><p>理解并发之前，先弄懂一些概念</p><h2 id="深入理解并发和并行" tabindex="-1"><a class="header-anchor" href="#深入理解并发和并行" aria-hidden="true">#</a> 深入理解并发和并行</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>并发和并行都是操作系统中的概念，表示的是CPU执行多个任务的方式</p></div><p>单CPU的计算机，在CPU中同一时间只能做一件事，看起来<code>同时干多件事</code>是通过CPU时间片技术并发完成的。</p><h2 id="parallelism" tabindex="-1"><a class="header-anchor" href="#parallelism" aria-hidden="true">#</a> Parallelism</h2><h2 id="concurrency" tabindex="-1"><a class="header-anchor" href="#concurrency" aria-hidden="true">#</a> Concurrency</h2><p>并发，在操作系统中是指一个时间段中有几个程序都处于已启动运行到运行完毕之间，且这几个程序都是在<code>同一个处理机</code>上运行的，但任一个时刻点上只有一个程序在处理机上运行。</p><p>并发，指的是多个事情，在同一 <strong>时间段</strong> 内同时发生了。</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>并发的多个任务是互相抢占资源的</p></div><h2 id="parallelism-vs-concurrency" tabindex="-1"><a class="header-anchor" href="#parallelism-vs-concurrency" aria-hidden="true">#</a> Parallelism VS Concurrency</h2><p>并行，当系统有<code>一个以上CPU</code>时，当一个CPU执行一个进程，另一个CPU可以执行另一个进程，两个进程互不抢占CPU资源，可以同时进行。 并行，指的是多个事情，在同一 <strong>时间点</strong> 上同时发生了</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>并行的多个任务之间是不互相抢占资源的</p></div><p>只有在多CPU的情况下，才会发生并行，否则看似并行，其实是并发执行的</p><h2 id="physical-cores" tabindex="-1"><a class="header-anchor" href="#physical-cores" aria-hidden="true">#</a> Physical Cores</h2><h2 id="logical-cores" tabindex="-1"><a class="header-anchor" href="#logical-cores" aria-hidden="true">#</a> Logical Cores</h2><h2 id="processor" tabindex="-1"><a class="header-anchor" href="#processor" aria-hidden="true">#</a> Processor</h2><h2 id="core" tabindex="-1"><a class="header-anchor" href="#core" aria-hidden="true">#</a> Core</h2><h2 id="cpu" tabindex="-1"><a class="header-anchor" href="#cpu" aria-hidden="true">#</a> CPU</h2><p>CPU个数 CPU核心数 线程数 https://www.cnblogs.com/kimsimple/p/7787018.html https://www.cnblogs.com/fubaizhaizhuren/p/7501403.html https://blog.csdn.net/ohbxiaoxin/article/details/82217498</p><p>Does a new thread in Java run on a different processor core?</p><p>https://howtodoinjava.com/java/multi-threading/concurrency-vs-parallelism/ https://howtodoinjava.com/java/multi-threading/concurrency-vs-parallelism/</p><p>how processors and threads work？</p><p>https://docs.oracle.com/javase/tutorial/ java thread and cpu thread</p><h2 id="单核cpu多线程有必要吗" tabindex="-1"><a class="header-anchor" href="#单核cpu多线程有必要吗" aria-hidden="true">#</a> 单核CPU多线程有必要吗？</h2><p>通常一个任务不光 cpu 上要花时间， io 上也要花时间（例如去数据库查数据，去抓网页，读写文件等）。 一个进程在等 io 的时候， cpu 是闲置的，另一个进程正好可以利用 cpu 进行计算。 多几个进程一起跑，可以把 io 和 cpu 都跑满了。</p><p>单核CPU使用多线程，同一时间只能一个线程在跑，时间片切换，效率会增加吗？</p><p>一个作业可不总是CPU密集型的，必然穿插着大量的IO调用在其中，所以单核情况下多线程也是可以提高性能的。</p><p>多线程在<code>CPU密集型</code>的作业下的确不能提高性能甚至更浪费时间，但是在<code>IO密集型</code>的作业下则可以提升性能。</p><p>https://zhidao.baidu.com/question/1241346576592987859.html https://www.oschina.net/question/860036_2142892</p><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/java/concurrency/glossary.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const glossary_html = (__exports__);

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
//# sourceMappingURL=173.app.js.map