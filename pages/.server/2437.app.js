"use strict";
exports.id = 2437;
exports.ids = [2437];
exports.modules = {

/***/ 64613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-8486011c",
  "path": "/database/mysql/lock/lock.html",
  "title": "MySQL中的锁",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "为什么MySQL中使用了锁",
      "slug": "为什么mysql中使用了锁",
      "children": []
    },
    {
      "level": 2,
      "title": "锁机制",
      "slug": "锁机制",
      "children": []
    },
    {
      "level": 2,
      "title": "MySQL中的锁",
      "slug": "mysql中的锁-1",
      "children": [
        {
          "level": 3,
          "title": "悲观锁 - Pessimistic Concurrency Control",
          "slug": "悲观锁-pessimistic-concurrency-control",
          "children": []
        },
        {
          "level": 3,
          "title": "乐观锁",
          "slug": "乐观锁",
          "children": []
        },
        {
          "level": 3,
          "title": "总结",
          "slug": "总结",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "database/mysql/lock/lock.md",
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

/***/ 44604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ lock_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/database/mysql/lock/lock.html.vue?vue&type=template&id=53e2ebf4

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="mysql中的锁" tabindex="-1"><a class="header-anchor" href="#mysql中的锁" aria-hidden="true">#</a> MySQL中的锁</h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>锁是计算机协调多个进程或线程并发访问某一资源的机制</p></div><p>悲观锁 乐观锁 是一种思想。可用在数据库上，Java中，框架中都有</p><p>如何保证数据并发访问的一致性？</p><h2 id="为什么mysql中使用了锁" tabindex="-1"><a class="header-anchor" href="#为什么mysql中使用了锁" aria-hidden="true">#</a> 为什么MySQL中使用了锁</h2><h2 id="锁机制" tabindex="-1"><a class="header-anchor" href="#锁机制" aria-hidden="true">#</a> 锁机制</h2><p>行锁 表锁 读锁 写锁</p><p>悲观锁：操作之前先上锁，悲观锁会影响系统效率吗？ 乐观锁，大多是基于数据版本（ Version ）记录机制实现</p><p>数据库的acid属性</p><h2 id="mysql中的锁-1" tabindex="-1"><a class="header-anchor" href="#mysql中的锁-1" aria-hidden="true">#</a> MySQL中的锁</h2><h3 id="悲观锁-pessimistic-concurrency-control" tabindex="-1"><a class="header-anchor" href="#悲观锁-pessimistic-concurrency-control" aria-hidden="true">#</a> 悲观锁 - Pessimistic Concurrency Control</h3><p>for update 是悲观锁, 悲观锁是对数据被的修改持悲观态度, 认为数据在被修改的时候一定会存在并发问题.</p><p>悲观锁的实现，往往依靠数据库提供的锁机制。</p><p>for update叫排它锁，是一种<strong>行级锁</strong> 行锁永远是独占方式锁。当一个事务未完成时，其他事务可以读取但是不能写入或更新。</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token punctuation">\`</span>sys_portal_user_role<span class="token punctuation">\`</span> <span class="token keyword">for</span> <span class="token keyword">update</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">//step1: 查出商品状态</span>
<span class="token keyword">select</span> quantity <span class="token keyword">from</span> items <span class="token keyword">where</span> id<span class="token operator">=</span><span class="token number">100</span> <span class="token keyword">for</span> <span class="token keyword">update</span><span class="token punctuation">;</span>
<span class="token comment">//step2: 根据商品信息生成订单</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> orders<span class="token punctuation">(</span>id<span class="token punctuation">,</span>item_id<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//step3: 修改商品的库存</span>
<span class="token keyword">update</span> Items <span class="token keyword">set</span> quantity<span class="token operator">=</span>quantity<span class="token operator">-</span><span class="token number">2</span> <span class="token keyword">where</span> id<span class="token operator">=</span><span class="token number">100</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="乐观锁" tabindex="-1"><a class="header-anchor" href="#乐观锁" aria-hidden="true">#</a> 乐观锁</h3><p>乐观锁（ Optimistic Locking ）相对悲观锁而言，乐观锁假设认为数据一般情况下不会造成冲突，所以在数据进行提交更新时才会对数据的冲突与否进行检测。</p><p>就是 CAS 操作</p><p>类似于Git操作，修改某个文件，只有提交的时候才校验版本。</p><p>使用场景：发生冲突的概率比较低，并发量小</p><p>实现方式：版本号</p><ul><li><p>添加version字段</p></li><li><p>当读取数据时，连同这个 version 字段一起读出</p></li><li><p>数据每更新一次就将此值加一</p></li><li><p>当提交更新时，判断数据库表中对应记录的当前版本号是否与之前取出来的版本号一致，一致则更新</p></li></ul><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">//step1: 查询出商品信息</span>
<span class="token keyword">select</span> <span class="token punctuation">(</span>quantity<span class="token punctuation">,</span>version<span class="token punctuation">)</span> <span class="token keyword">from</span> items <span class="token keyword">where</span> id<span class="token operator">=</span><span class="token number">100</span><span class="token punctuation">;</span>
<span class="token comment">//step2: 根据商品信息生成订单</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> orders<span class="token punctuation">(</span>id<span class="token punctuation">,</span>item_id<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//step3: 修改商品的库存</span>
<span class="token keyword">update</span> items <span class="token keyword">set</span> quantity<span class="token operator">=</span>quantity<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>version<span class="token operator">=</span>version<span class="token operator">+</span><span class="token number">1</span> <span class="token keyword">where</span> id<span class="token operator">=</span><span class="token number">100</span> <span class="token operator">and</span> version<span class="token operator">=</span><span class="token comment">#{version};</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>悲观锁 乐观锁 概念 查询时直接锁住记录使得其它事务不能查询，更不能更新 提交更新时检查版本或者时间戳是否符合 语法 select ... for update 使用 version 或者 timestamp 进行比较 实现者 数据库本身 开发者 适用场景 并发量大 并发量小 类比Java Synchronized关键字 CAS 算法</p><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/database/mysql/lock/lock.html.vue

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
//# sourceMappingURL=2437.app.js.map