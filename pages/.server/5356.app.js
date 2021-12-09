"use strict";
exports.id = 5356;
exports.ids = [5356];
exports.modules = {

/***/ 56324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-04e1fc9e",
  "path": "/java/concurrency/lock.html",
  "title": "JVM锁",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "深入理解Syncronized关键字",
      "slug": "深入理解syncronized关键字",
      "children": []
    },
    {
      "level": 2,
      "title": "Java中的CAS实现原理",
      "slug": "java中的cas实现原理",
      "children": [
        {
          "level": 3,
          "title": "JDK中的应用",
          "slug": "jdk中的应用",
          "children": []
        },
        {
          "level": 3,
          "title": "CAS的缺点",
          "slug": "cas的缺点",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "java/concurrency/lock.md",
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

/***/ 71806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ lock_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/java/concurrency/lock.html.vue?vue&type=template&id=a166f7e4

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="jvm锁" tabindex="-1"><a class="header-anchor" href="#jvm锁" aria-hidden="true">#</a> JVM锁</h1><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>单进程，多线程</p></div><p>知道volatile的可能会想到用volatile，使用volatile不会造成阻塞</p><h2 id="深入理解syncronized关键字" tabindex="-1"><a class="header-anchor" href="#深入理解syncronized关键字" aria-hidden="true">#</a> 深入理解Syncronized关键字</h2><p>悲观锁就是synchronized</p><p>乐观锁就是原子类（内部使用CAS实现）</p><p>乐观锁是一种思想，即认为读多写少</p><p>CAS是一种更新的原子操作，比较当前值跟传入值是否一样，一样则更新，否则失败。</p><p>CAS是乐观锁写那一步操作的一种实现方式罢了</p><h2 id="java中的cas实现原理" tabindex="-1"><a class="header-anchor" href="#java中的cas实现原理" aria-hidden="true">#</a> Java中的CAS实现原理</h2><p>CAS的目的：在多线程中为了保持数据的准确性，避免多个线程同时操作某个变量。</p><p>现在采取的是CAS（Compare And Swap比较和交换）解决了volatile不能保证原子性.</p><p>比较和交换（Conmpare And Swap）是用于实现多线程同步的原子指令。是一种实现并发算法时常用到的技术</p><p>对CAS的理解，CAS是一种无锁算法，CAS有3个操作数，<strong>内存值</strong>V，<strong>旧的预期</strong>值A，要修改的<strong>新值</strong>B。当且仅当预期值A和内存值V相同时，将内存值V修改为B，否则什么都不做。</p><p>CAS（比较并交换）是CPU指令级的操作.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">do</span><span class="token punctuation">{</span>

备份旧数据；

基于旧数据构造新数据；

<span class="token punctuation">}</span><span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">CAS</span><span class="token punctuation">(</span> 内存地址，备份的旧数据，新数据 <span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="jdk中的应用" tabindex="-1"><a class="header-anchor" href="#jdk中的应用" aria-hidden="true">#</a> JDK中的应用</h3><p>java.util.concurrent.atomic，AtomicInteger，</p><p>AtomicInteger.incrementAndGet的实现用了乐观锁技术。</p><h3 id="cas的缺点" tabindex="-1"><a class="header-anchor" href="#cas的缺点" aria-hidden="true">#</a> CAS的缺点</h3><ul><li>ABA问题</li></ul><p>两个线程，1取内存值然后备份，2取内存值本分，2将值修改为a，然后又修改为b，然后1判断值没有被修改，更新成c.</p><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/java/concurrency/lock.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const lock_html = (__exports__);

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
//# sourceMappingURL=5356.app.js.map