"use strict";
exports.id = 8878;
exports.ids = [8878];
exports.modules = {

/***/ 83192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-d5eefe4a",
  "path": "/java/oop/exception-process.html",
  "title": "异常处理",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "catch匹配",
      "slug": "catch匹配",
      "children": []
    },
    {
      "level": 2,
      "title": "重新抛出异常",
      "slug": "重新抛出异常",
      "children": []
    },
    {
      "level": 2,
      "title": "finally",
      "slug": "finally",
      "children": []
    },
    {
      "level": 2,
      "title": "try-with-resources",
      "slug": "try-with-resources",
      "children": []
    },
    {
      "level": 2,
      "title": "throws",
      "slug": "throws",
      "children": []
    }
  ],
  "filePathRelative": "java/oop/exception-process.md",
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

/***/ 54270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ exception_process_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/java/oop/exception-process.html.vue?vue&type=template&id=082902b5

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="异常处理" tabindex="-1"><a class="header-anchor" href="#异常处理" aria-hidden="true">#</a> 异常处理</h1><p><strong>Java支持的异常处理包括：catch，throw，finally，try-with-resources，thorws</strong></p><h2 id="catch匹配" tabindex="-1"><a class="header-anchor" href="#catch匹配" aria-hidden="true">#</a> catch匹配</h2><ul><li>异常处理将根据抛出的异常类型找到第一个匹配的catch块</li><li>找到后不再执行其他catch块的代码</li><li>如果没有找到会继续到上层方法中查找</li><li><strong>抛出的异常类型是catch中声明异常的子类也算匹配</strong></li><li>少用基类Exception</li></ul><h2 id="重新抛出异常" tabindex="-1"><a class="header-anchor" href="#重新抛出异常" aria-hidden="true">#</a> 重新抛出异常</h2><p>重新抛出异常的好处：</p><p>当前异常不太适合处理，需要抛出到上层处理。</p><h2 id="finally" tabindex="-1"><a class="header-anchor" href="#finally" aria-hidden="true">#</a> finally</h2><p><strong>finally内的代码不管有无异常发生，都会执行。一般用于释放资源，数据库连接，文件流等</strong></p><ul><li>如果没有异常发生，在try内的代码执行结束后执行</li><li>如果有异常发生且被catch捕获，在catch内的代码执行后再执行</li><li>如果有异常发生但没有被捕获，则在异常抛给上层之前执行</li></ul><p>try/catch/finally语法中，catch不是必需的，可以只有try/finally</p><p>几个示例</p><ol><li>有异常发生没有被捕获，在异常抛给上层之前执行</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token class-name">Integer</span> a <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&quot;s&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;finally 执行&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>先执行finally，再打印堆栈信息。</p><ol start="2"><li>try/catch里面有return语句</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span> ret <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token class-name">Integer</span> b <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&quot;s&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">NumberFormatException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;catch 执行&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    ret <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;finally执行&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>return语句在finally语句执行结束后才执行，<strong>finally并不能改变返回值，返回的结果是0</strong></p><p>实际执行过程：</p><p><strong>在执行到try内的return语句时，会把返回值保存在一个临时变量中，然后才执行finally语句，最后try再返回那个临时变量</strong></p><ol start="3"><li>finally中也有return语句</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span> ret <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">5</span> <span class="token operator">/</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li><strong>try/catch的return语句会丢失，实际返回finally中的值</strong></li><li><strong>try/catch内的异常会被覆盖，就像是异常没有发生一样</strong></li><li><strong>finally中如果抛出异常，则原异常会被覆盖</strong></li><li><strong>避免在finally中使用return语句</strong></li></ul><h2 id="try-with-resources" tabindex="-1"><a class="header-anchor" href="#try-with-resources" aria-hidden="true">#</a> try-with-resources</h2><p>Java7支持的一种新语法，针对使用资源的场景。针对了实现<strong>java.lang.AutoCloseable</strong>接口的对象。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">useResources</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">AutoCloseable</span> r <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 使用资源</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>资源r的声明在try内，不用再调用finally，在语句执行完会自动调用资源的close方法。</p><p>Java中的语法糖</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>self<span class="token punctuation">.</span><span class="token function">deleteById</span><span class="token punctuation">(</span>oldId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">GoodsIdChangeMessage</span> message <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GoodsIdChangeMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    message<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span>nowId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    message<span class="token punctuation">.</span><span class="token function">setOldId</span><span class="token punctuation">(</span>oldId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>messageQueueService<span class="token punctuation">.</span><span class="token function">sendGoodsIdChange</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>goodsStatisticService<span class="token punctuation">.</span><span class="token function">changeGoodsId</span><span class="token punctuation">(</span>nowId<span class="token punctuation">,</span> oldId<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Throwable</span> var17<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    var7 <span class="token operator">=</span> var17<span class="token punctuation">;</span>
    <span class="token keyword">throw</span> var17<span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>ignored <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>var7 <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                ignored<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Throwable</span> var16<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                var7<span class="token punctuation">.</span><span class="token function">addSuppressed</span><span class="token punctuation">(</span>var16<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            ignored<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="throws" tabindex="-1"><a class="header-anchor" href="#throws" aria-hidden="true">#</a> throws</h2><p><strong>throws跟在方法的括号外面，多个异常用逗号分隔，表明这个方法内可能会抛出异常，且没有对异常进行处理。</strong></p><ul><li>对于未受检异常不要求使用throws进行声明</li><li>对于受检异常则必须进行声明</li><li>对于受检异常不可以抛出而不声明，但是声明可以不抛出</li><li>主要用于在父类方法声明</li></ul><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/java/oop/exception-process.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const exception_process_html = (__exports__);

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
//# sourceMappingURL=8878.app.js.map