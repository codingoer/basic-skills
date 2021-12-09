"use strict";
exports.id = 4709;
exports.ids = [4709];
exports.modules = {

/***/ 61380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-3250f575",
  "path": "/java/concurrency/thread/",
  "title": "多线程与CPU之间的关系",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "多线程与单核CPU",
      "slug": "多线程与单核cpu",
      "children": []
    },
    {
      "level": 2,
      "title": "最佳线程数",
      "slug": "最佳线程数",
      "children": []
    },
    {
      "level": 2,
      "title": "查询CPU内核的利用率",
      "slug": "查询cpu内核的利用率",
      "children": []
    },
    {
      "level": 2,
      "title": "查看Linux配置信息",
      "slug": "查看linux配置信息",
      "children": []
    }
  ],
  "filePathRelative": "java/concurrency/thread/README.md",
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

/***/ 15291:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/java/concurrency/thread/index.html.vue?vue&type=template&id=2f40ccf5

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><p>synchronized volatile synchronized vs volatile</p><p>如果创建了固定大小的线程池，比如20个线程，为什么并发执行了10个？难道和机器的性能有关？ Java程序中创建的线程数量和CPU的关系？</p><p>如何设置线程的数量，根据机器的性能？</p><p>创建了50个线程，他们的执行顺序是如何决定的，不是一起都跑完吗？也是有先后顺序的，谁决定的？</p><p>比如一个接口，假设同时访问量很大，线程是如何处理的？我没有分配线程池</p><h1 id="多线程与cpu之间的关系" tabindex="-1"><a class="header-anchor" href="#多线程与cpu之间的关系" aria-hidden="true">#</a> 多线程与CPU之间的关系</h1><p>CPU性能</p><div class="custom-container tip"><p class="custom-container-title">内核数</p><p>内核数是一个硬件术语，它表示单个计算组件（裸芯片或芯片）中的独立中央处理器的数量。</p></div><div class="custom-container tip"><p class="custom-container-title">线程数</p><p>线程或执行线程是一个软件术语，指代那些可由单核 CPU 传递或处理的基本有序指令序列。</p></div><div class="custom-container tip"><p class="custom-container-title">缓存</p><p>CPU高速缓存是处理器上的一个快速记忆区域。</p></div><p>双核四线程：</p><p>双核是处理器有两个核心，利用<code>超线程</code>技术，一个核心就有两个线程。</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>一个核心两个线程，那么这两个线程是同时处理任务的吗？</p></div><p>核相当于<code>公路</code>，双核是两条3米宽的路，四核是4条3米宽的路。</p><p>双核四线程是把两条宽的路又化了两根线，分成四条1.5米的路 双核四线程是在原有核心基础上虚拟出两个核心，可以让一个核心同时处理两个不一样的任务，一个核心同时做两件事，效率会打折</p><h2 id="多线程与单核cpu" tabindex="-1"><a class="header-anchor" href="#多线程与单核cpu" aria-hidden="true">#</a> 多线程与单核CPU</h2><p>顺序执行？？</p><p>四核四线程是就是四条4米宽的路。真正可以同时处理4个任务</p><h2 id="最佳线程数" tabindex="-1"><a class="header-anchor" href="#最佳线程数" aria-hidden="true">#</a> 最佳线程数</h2><p>考虑因素 I/O CPU</p><h2 id="查询cpu内核的利用率" tabindex="-1"><a class="header-anchor" href="#查询cpu内核的利用率" aria-hidden="true">#</a> 查询CPU内核的利用率</h2><h2 id="查看linux配置信息" tabindex="-1"><a class="header-anchor" href="#查看linux配置信息" aria-hidden="true">#</a> 查看Linux配置信息</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> /proc/cpuinfo <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;core id&quot;</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token operator">|</span> <span class="token function">wc</span> -l
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> /proc/cpuinfo <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;processor&quot;</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token operator">|</span> <span class="token function">wc</span> -l
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/java/concurrency/thread/index.html.vue

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
//# sourceMappingURL=4709.app.js.map