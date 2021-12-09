"use strict";
exports.id = 9216;
exports.ids = [9216];
exports.modules = {

/***/ 19810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-b038aa76",
  "path": "/specification/",
  "title": "Java开发手册",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "架构上的注意事项",
      "slug": "架构上的注意事项",
      "children": [
        {
          "level": 3,
          "title": "模型层 Model",
          "slug": "模型层-model",
          "children": []
        },
        {
          "level": 3,
          "title": "数据处理层",
          "slug": "数据处理层",
          "children": []
        },
        {
          "level": 3,
          "title": "VO层处理",
          "slug": "vo层处理",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "命名规范",
      "slug": "命名规范",
      "children": []
    },
    {
      "level": 2,
      "title": "异常和日志",
      "slug": "异常和日志",
      "children": []
    },
    {
      "level": 2,
      "title": "代码逻辑问题",
      "slug": "代码逻辑问题",
      "children": []
    }
  ],
  "filePathRelative": "specification/README.md",
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

/***/ 73908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/specification/index.html.vue?vue&type=template&id=56f6315e

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="java开发手册" tabindex="-1"><a class="header-anchor" href="#java开发手册" aria-hidden="true">#</a> Java开发手册</h1><h2 id="架构上的注意事项" tabindex="-1"><a class="header-anchor" href="#架构上的注意事项" aria-hidden="true">#</a> 架构上的注意事项</h2><p>阿里巴巴开发手册，华为开发手册，海淘1号开发手册</p><h3 id="模型层-model" tabindex="-1"><a class="header-anchor" href="#模型层-model" aria-hidden="true">#</a> 模型层 Model</h3><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>模型不要引用第三方的东西，一般模型的依赖尽量简单，不要引用其他的依赖，公共的依赖可以。</p></div><div class="custom-container danger"><p class="custom-container-title">STOP</p><p>不能直接使用第三方的对象当做模型返回，要定义自己的模型(使用第三方模型可能导致序列化失败)</p></div><p>模型maven的级别都是<code>provide</code>，外部不引用</p><p>错误示例： <code>Aggregation</code>对象为第三方库，不应该放入模型中，不能暴露出去，不能使用getter/setter方法</p><p>优化：在业务方法中转化为自定义模型返回</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AggResult</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1480134312366849187L</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">long</span> count<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> value<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Aggregation</span><span class="token punctuation">&gt;</span></span> aggregationMap<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Aggregation</span><span class="token punctuation">&gt;</span></span> <span class="token function">aggregationMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> aggregationMap<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">aggregationMap</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Aggregation</span><span class="token punctuation">&gt;</span></span> aggregationMap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>aggregationMap <span class="token operator">=</span> aggregationMap<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="数据处理层" tabindex="-1"><a class="header-anchor" href="#数据处理层" aria-hidden="true">#</a> 数据处理层</h3><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Dao层的结果不要往外返回，应该在内部全部处理掉，然后转换成自定义模型返回给外部。外部Controller不应该知道是ES还是Mongo还是Mysql。</p></div><p>否则外部controller里面还要处理第三方的东西。</p><h3 id="vo层处理" tabindex="-1"><a class="header-anchor" href="#vo层处理" aria-hidden="true">#</a> VO层处理</h3><p>AppBuyActivity -&gt; Activity，里面的url要保留，不要覆盖原来的URL，如果后面用到原始的URL怎么办</p><h1 id="代码改进" tabindex="-1"><a class="header-anchor" href="#代码改进" aria-hidden="true">#</a> 代码改进</h1><h2 id="命名规范" tabindex="-1"><a class="header-anchor" href="#命名规范" aria-hidden="true">#</a> 命名规范</h2><blockquote><p>代码书写问题，方法名称规范，alarm里面不要有update的操作，要不就改成alarmAndUpdate</p></blockquote><blockquote><p>描述字段命名为statusDescr，Desc和数据库关键字冲突</p></blockquote><blockquote><p>注意事物的问题，刷新缓存和更新数据库在同一个事物里面，导致缓存刷新还是上一次的结果</p></blockquote><blockquote><p>这个枚举类名首字母改大写</p></blockquote><h2 id="异常和日志" tabindex="-1"><a class="header-anchor" href="#异常和日志" aria-hidden="true">#</a> 异常和日志</h2><blockquote><p>日志打印，要打印异常堆栈</p></blockquote><blockquote><p>异常处理，什么时候捕获，什么时候抛出异常</p></blockquote><h2 id="代码逻辑问题" tabindex="-1"><a class="header-anchor" href="#代码逻辑问题" aria-hidden="true">#</a> 代码逻辑问题</h2><blockquote><p>if下不要包太长的代码，要先处理短的，后处理长的代码</p></blockquote><blockquote><p>改代码review看起来舒服，直观，别整的别人看不懂</p></blockquote><blockquote><p>对象.的时候一定要考虑，是否一定存在。啊啊啊～～～～</p></blockquote><blockquote><p>不使用的方法不要暴露出去，用private，不要声明在接口里，写在实现类里就好了。</p></blockquote><blockquote><p>如果有方法一定要执行，可以放在finally里面，捕获异常处理逻辑之后抛出异常，最后执行finally方法。</p></blockquote><blockquote><p>写代码原则，能不生成对象就不生成对象。</p></blockquote><blockquote><p>商品库的业务逻辑不要写在物流里面，耦合太大。</p></blockquote><p>重构代码，先重构代码不改业务逻辑，重构之后再改业务代码，方便reviewer。</p><p>物流实体移动到CMS，因为是CMS保存的消息，还要依赖别的系统的实体类，这样耦合比较大。</p><p>内部系统调用使用<code>grpc</code>不要使用<code>http</code></p><p>HttpServletRequest不要放在service，放在controller，跟controller绑定。HttpServletRequest就是Http接口有的，grpc没有。</p><p>参数校验做到最外层，防止service层里面，比如前一个操作成功了，第二个参数校验没过，效率不高，写接口的原则就是先校验参数</p><p>这种参数<code>categoryId</code>作为方法的入参，一定要判断是否为空，因为无法确定外部传过来的是什么值。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token class-name">SiFangCategory</span> <span class="token function">findByCategoryId</span><span class="token punctuation">(</span><span class="token class-name">Long</span> categoryId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>categoryId <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">get</span><span class="token punctuation">(</span>categoryId<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>社区表应该定义关联关系表，不应在帖子表里面定义</p><p>新商品详情页异步执行</p><p>看代码一定要仔细，看到每个方法里面去，不循环多余的函数</p><p>写接口的时候不要把实体类直接返回，要定义一个<code>vo</code>对象，入参的时候自定义个<code>dto</code></p><p>使用重用对象，不new就不new</p><p>懒加载策略，用到的时候在写</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isBlank</span><span class="token punctuation">(</span>postages<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">getTotal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isBlank</span><span class="token punctuation">(</span>pdPostage<span class="token punctuation">.</span><span class="token function">getTotal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Group</span> group <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Group</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>这种魔法值的地方或者特殊说明一定要写注释</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// 不判断库存的原因：显示的SKU都有库存。无库存的不在sku列表里。</span>
productSku<span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span>skuId<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">inventory</span><span class="token punctuation">(</span><span class="token string">&quot;-1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>fillMap<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> imageList <span class="token operator">=</span> <span class="token function">getImageList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> image<span class="token operator">:</span> imageList<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isNotBlank</span><span class="token punctuation">(</span>image<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// list中可能存在null值</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>如果<code>cps.getType()</code>为空，会报空指针异常</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>appType<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> cps<span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>文件夹命名，用<code>单数</code>还是<code>复数</code>，像<code>linux</code>中的文件夹，root, usr, bin, etc, home, var... 还是用简称吧</p><p>像这种过期时长定义成expiredSeconds或expiredMinutes这样可读性更好,expiredTime表示什么时间过期</p><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/specification/index.html.vue

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
//# sourceMappingURL=9216.app.js.map