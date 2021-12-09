"use strict";
exports.id = 3389;
exports.ids = [3389];
exports.modules = {

/***/ 14716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-0da993de",
  "path": "/java/programing/flow-control.html",
  "title": "Java中的流程控制",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "块作用域",
      "slug": "块作用域",
      "children": []
    },
    {
      "level": 2,
      "title": "条件语句",
      "slug": "条件语句",
      "children": []
    },
    {
      "level": 2,
      "title": "多重选择语句",
      "slug": "多重选择语句",
      "children": []
    },
    {
      "level": 2,
      "title": "循环语句",
      "slug": "循环语句",
      "children": []
    },
    {
      "level": 2,
      "title": "终端流程控制语句",
      "slug": "终端流程控制语句",
      "children": []
    }
  ],
  "filePathRelative": "java/programing/flow-control.md",
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

/***/ 42498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ flow_control_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/java/programing/flow-control.html.vue?vue&type=template&id=6e9802a6

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="java中的流程控制" tabindex="-1"><a class="header-anchor" href="#java中的流程控制" aria-hidden="true">#</a> Java中的流程控制</h1><p>Java使用条件语句和循环结构确定控制流程。</p><h2 id="块作用域" tabindex="-1"><a class="header-anchor" href="#块作用域" aria-hidden="true">#</a> 块作用域</h2><p>由大括号括起来的若干条简单的Java语句。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">byte</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">byte</span> b <span class="token operator">=</span> <span class="token number">127</span><span class="token punctuation">;</span>
    <span class="token keyword">byte</span> c <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">)</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">char</span> d <span class="token operator">=</span> <span class="token string">&#39;刘&#39;</span><span class="token punctuation">;</span>

    <span class="token punctuation">{</span>
        <span class="token keyword">int</span> g <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">toBinaryString</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="条件语句" tabindex="-1"><a class="header-anchor" href="#条件语句" aria-hidden="true">#</a> 条件语句</h2><ul><li>建议所有if后面都加括号</li><li>注意if/else的判断顺序</li><li>三元运算符可以使用if/else代替</li></ul><p><strong>if实现原理</strong></p><p><strong>程序最终都是一条条的指令</strong></p><p>CPU有一个指令指示器，指向下一条要执行的指令，CPU根据指令指示器的指示加载指令并执行。</p><p>其中有一些特殊的指令：<strong>跳转指令</strong></p><p><strong>跳转指令</strong>会修改指令器指示器的值，让CPU跳到一个指定的地方执行。跳转有两种：<strong>一种是条件跳转，一种是无条件跳转</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token operator">%</span><span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;偶数&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 其他代码</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
条件跳转：如果a<span class="token operator">%</span><span class="token number">2</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">,</span>跳转到第<span class="token number">4</span>行
无条件跳转：跳转到第<span class="token number">7</span>行
<span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token operator">%</span><span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;偶数&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 其他代码</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="多重选择语句" tabindex="-1"><a class="header-anchor" href="#多重选择语句" aria-hidden="true">#</a> 多重选择语句</h2><ul><li><strong>switch性能更高(使用跳转表)</strong></li><li>可能会出发多个case，一定记得要写break</li></ul><p>switch表达式的类型</p><ul><li>byte</li><li>short</li><li>int</li><li>char</li><li>枚举</li><li>String (Java7支持)</li></ul><p><strong>swith实现原理</strong></p><p>switch的转换和具体系统实现有关。</p><ul><li>如果分支比较少，可能会转换为跳转指令</li><li>如果分支比较多，会使用跳转表</li></ul><p><strong>跳转表</strong></p><p>跳转表是一个映射表，存储了可能的值以及要跳转到的地址。</p><p>跳转表的高效在于，因为其值必须是整数，且按大小顺序排序，可以使用高效的<strong>二分查找</strong>。</p><p>如果值是连续的，跳转表还会优化成数组。</p><p><strong>注意点：</strong></p><ul><li>String用于switch时也会转成整数，通过hashcode转换</li><li>不可以使用long型，因为跳转表值的存储空间为32位</li></ul><p>日常采坑记录：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> orderService<span class="token punctuation">.</span><span class="token function">findOrderCountByUserId</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>type <span class="token punctuation">,</span> count<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token class-name">OrderStatusType</span><span class="token punctuation">.</span>WAITING_DELIVERED<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="循环语句" tabindex="-1"><a class="header-anchor" href="#循环语句" aria-hidden="true">#</a> 循环语句</h2><p>在Java中循环有四种形式：</p><ul><li>while</li><li>do-while</li><li>for</li><li>for-each</li></ul><p><strong>while</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">while</span><span class="token punctuation">(</span>条件语句<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    代码块
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>do-while</strong></p><p>代码块都会至少执行一次</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">do</span> <span class="token punctuation">{</span>
    代码块
<span class="token punctuation">}</span><span class="token keyword">while</span><span class="token punctuation">(</span>条件语句<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>for</strong></p><p>应用最广泛的循环语法</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">for</span><span class="token punctuation">(</span>初始化语句<span class="token punctuation">;</span> 循环语句<span class="token punctuation">;</span> 歩进操作<span class="token punctuation">)</span><span class="token punctuation">{</span>
    循环体
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>控制流程如下：</p><ol><li>执行初始化指令</li><li>检查循环条件是否为true，如果为false，则跳转到第6歩</li><li>循环条件为真，执行循环体</li><li>执行步进操作</li><li>步进操作执行完后，跳转第2步，继续检查循环条件</li><li>for循环后面的语句</li></ol><p><strong>死循环</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>for-each</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> e <span class="token operator">:</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="终端流程控制语句" tabindex="-1"><a class="header-anchor" href="#终端流程控制语句" aria-hidden="true">#</a> 终端流程控制语句</h2><p><strong>break</strong></p><p>break用于提前结束循环。</p><p><strong>带标签的break</strong></p><p>用于跳出多重嵌套循环</p><p><strong>continue</strong></p><p>continue语句会跳过循环体中剩下的代码，然后执行步进操作</p><p><strong>实现原理</strong></p><p>同if原理一样，使用条件转移和无条件转移指令实现。</p><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/java/programing/flow-control.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const flow_control_html = (__exports__);

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
//# sourceMappingURL=3389.app.js.map