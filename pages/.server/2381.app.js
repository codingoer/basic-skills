"use strict";
exports.id = 2381;
exports.ids = [2381];
exports.modules = {

/***/ 74503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-2ba22020",
  "path": "/java/concurrency/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "并发和并行的区别",
      "slug": "并发和并行的区别",
      "children": []
    },
    {
      "level": 2,
      "title": "原子性",
      "slug": "原子性",
      "children": []
    }
  ],
  "filePathRelative": "java/concurrency/README.md",
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

/***/ 22473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/java/concurrency/index.html.vue?vue&type=template&id=d70aca3a

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><p>ThreadPoolExecutor</p><p>class ThreadPoolExecutor extends AbstractExecutorService</p><p>abstract class AbstractExecutorService implements ExecutorService</p><p>interface ExecutorService extends Executor</p><p>interface Executor</p><p>创建线程池的几种方式</p><p>核心线程池： 最大线程数量：如果配置的maximumPoolSize是10，当线程数量是10的时候，就开始放入阻塞队列 阻塞队列数量</p><p>阻塞队列拒绝策略，如果不设置阻塞队列的数量，那么全部在内存中。</p><p>BlockingQueue线程的阻塞队列</p><p>阻塞队列，非阻塞队列的区别</p><p>阻塞队列的值该设置为多少</p><p>ThreadPoolExecutor还有什么策略</p><ol><li><p>定时任务开始执行时，先将所有促销置为失效状态，并更新本地缓存数据</p></li><li><p>顺序刷新促销对应商品es数据</p></li><li><p>搜索接口返回商品结果数据时，先判断对应促销是否失效，如果已经失效则将促销信息删除</p></li></ol><p>促销失败定时任务对应类名：PromotionToInvalidJob</p><p>LinkedBlockingQueue</p><p>ArrayBlockingQueue</p><p>synchronized volatile synchronized vs volatile</p><p>Java多线程编程核心技术 ThreadLocal和synchronized的区别</p><h2 id="并发和并行的区别" tabindex="-1"><a class="header-anchor" href="#并发和并行的区别" aria-hidden="true">#</a> 并发和并行的区别</h2><p>并发： 同一时间段，多个任务都在执行 (单位时间内不一定同时执行)； 并行： 单位时间内，多个任务同时执行。</p><h2 id="原子性" tabindex="-1"><a class="header-anchor" href="#原子性" aria-hidden="true">#</a> 原子性</h2><p>如果把一个事务可看作是一个程序,它要么完整的被执行,要么完全不执行。这种特性就叫原子性。</p><p>为什么多线程不一定快，如何解决？</p><ul><li><p>理论基础</p><ul><li>ThreadPool</li></ul></li><li><p>容器</p><ul><li>ConcurrentHashMap493</li></ul></li><li><p>工具类</p><ul><li>CountDownLatch531</li><li>ThreadLoal</li><li>CyclicBarrier533</li><li>Semaphore</li></ul></li><li><p>设计模式</p><ul><li>Fork/Join</li><li>Future</li></ul></li><li><p>JMM</p></li></ul><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/java/concurrency/index.html.vue

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
//# sourceMappingURL=2381.app.js.map