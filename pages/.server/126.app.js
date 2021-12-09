"use strict";
exports.id = 126;
exports.ids = [126];
exports.modules = {

/***/ 34349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-f52097c2",
  "path": "/distributed/lock/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "distributed/lock/README.md",
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

/***/ 47664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/distributed/lock/index.html.vue?vue&type=template&id=9567f306

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><p>分布式锁的正确实现方式</p><p>分布式锁可以用在单机上</p><p>使用分布式锁的注意事项： 加了分布式锁，里面的操作要<code>粒度最小</code>，举个栗子：</p><p>社区发帖功能，社区后台处理发帖逻辑，<code>savePost</code>加上了分布式锁，这时有十个线程同时发帖，在发帖逻辑中有上传图片，图片读写操作，加入<code>savePost</code>方法执行了10秒中，那么最后一个人就要等待<code>100</code>秒中，这样的场景是不太现实的。</p><p>加锁的原则，加锁后里面要有<code>保存的逻辑</code>，错误示例。一个线程获取楼层数为10，另一个线程也获取楼层数为10，导致楼层数相同，无效加锁</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token class-name">Integer</span> <span class="token function">getPostFloor</span><span class="token punctuation">(</span><span class="token class-name">Long</span> topicId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token class-name">String</span> key <span class="token operator">=</span> <span class="token string">&quot;get-post-floor-&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">AutoUnlock</span> autoUnlock <span class="token operator">=</span> <span class="token class-name">LockUtils</span><span class="token punctuation">.</span><span class="token function">autoLock</span><span class="token punctuation">(</span>key <span class="token operator">+</span> topicId<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Topic</span> topic <span class="token operator">=</span> topicService<span class="token punctuation">.</span><span class="token function">findByPropertyAndValue</span><span class="token punctuation">(</span><span class="token class-name">Topic</span><span class="token punctuation">.</span>ID_PROPERTY<span class="token punctuation">,</span> topicId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> topic<span class="token punctuation">.</span><span class="token function">getTotalFloor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ValidationRuntimeException</span><span class="token punctuation">(</span><span class="token class-name">StatusCode</span><span class="token punctuation">.</span>CLIENT_ERROR_ACCESS_TOO_FREQUENTLY_CODE<span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>加锁放在读写事务外层</p><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/distributed/lock/index.html.vue

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
//# sourceMappingURL=126.app.js.map