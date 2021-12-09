"use strict";
exports.id = 342;
exports.ids = [342];
exports.modules = {

/***/ 99745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-5a881cf6",
  "path": "/distributed/transaction/",
  "title": "分布式事务",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "distributed/transaction/README.md",
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

/***/ 64434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/distributed/transaction/index.html.vue?vue&type=template&id=2d58fccc

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="分布式事务" tabindex="-1"><a class="header-anchor" href="#分布式事务" aria-hidden="true">#</a> 分布式事务</h1><p>写代码，事务处理的原则，保证数据的一致性</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Long</span> postId <span class="token operator">=</span> postCacheService<span class="token punctuation">.</span><span class="token function">saveCachePost</span><span class="token punctuation">(</span>postCache<span class="token punctuation">)</span><span class="token punctuation">;</span>
postEsService<span class="token punctuation">.</span><span class="token function">indexPost</span><span class="token punctuation">(</span>postId<span class="token punctuation">)</span><span class="token punctuation">;</span>
topicService<span class="token punctuation">.</span><span class="token function">operatePostCount</span><span class="token punctuation">(</span>postCache<span class="token punctuation">.</span><span class="token function">getTopicId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
postCacheService<span class="token punctuation">.</span><span class="token function">deleteCachePost</span><span class="token punctuation">(</span>postCache<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>嵌套事务，是传递级别的吗？ 事务传递级别，事务隔离，</p><p>savePost开启一个读写事务，一个线程过来了，获取楼层，然后楼层+1，这时候事务还没有提交，另一个线程又来了，这样会导致楼层出现重复情况。</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>注意代码第8行，帖子楼层数+1在分布式锁内部完成</p></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">Long</span> <span class="token function">savePost</span><span class="token punctuation">(</span><span class="token class-name">Post</span> post<span class="token punctuation">,</span> <span class="token class-name">String</span> content<span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PostImageGoods</span><span class="token punctuation">&gt;</span></span> imageGoodsList<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token class-name">String</span> key <span class="token operator">=</span> <span class="token string">&quot;upload-post-&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">Long</span> postId<span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">AutoUnlock</span> ignored <span class="token operator">=</span> <span class="token class-name">LockUtils</span><span class="token punctuation">.</span><span class="token function">autoLock</span><span class="token punctuation">(</span>key <span class="token operator">+</span> post<span class="token punctuation">.</span><span class="token function">getTopicId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Topic</span> topic <span class="token operator">=</span> topicService<span class="token punctuation">.</span><span class="token function">findByPropertyAndValue</span><span class="token punctuation">(</span><span class="token class-name">Topic</span><span class="token punctuation">.</span>ID_PROPERTY<span class="token punctuation">,</span> post<span class="token punctuation">.</span><span class="token function">getTopicId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        post<span class="token punctuation">.</span><span class="token function">setFloor</span><span class="token punctuation">(</span>topic<span class="token punctuation">.</span><span class="token function">getTotalFloor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        postId <span class="token operator">=</span> <span class="token function">save</span><span class="token punctuation">(</span>post<span class="token punctuation">)</span><span class="token punctuation">;</span>
        topicService<span class="token punctuation">.</span><span class="token function">incre</span><span class="token punctuation">(</span>post<span class="token punctuation">.</span><span class="token function">getTopicId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Topic</span><span class="token punctuation">.</span>TOTAL_FLOOR_PROPERTY<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ValidationRuntimeException</span><span class="token punctuation">(</span><span class="token class-name">StatusCode</span><span class="token punctuation">.</span>CLIENT_ERROR_ACCESS_TOO_FREQUENTLY_CODE<span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isNotEmpty</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        postContentService<span class="token punctuation">.</span><span class="token function">saveOrUpdate</span><span class="token punctuation">(</span>postId<span class="token punctuation">,</span> content<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">CollectionUtils</span><span class="token punctuation">.</span><span class="token function">isNotEmpty</span><span class="token punctuation">(</span>imageGoodsList<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        postImageService<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>postId<span class="token punctuation">,</span> imageGoodsList<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    topicService<span class="token punctuation">.</span><span class="token function">operatePostCount</span><span class="token punctuation">(</span>post<span class="token punctuation">.</span><span class="token function">getTopicId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> postId<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/distributed/transaction/index.html.vue

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
//# sourceMappingURL=342.app.js.map