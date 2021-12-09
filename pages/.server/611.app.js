"use strict";
exports.id = 611;
exports.ids = [611];
exports.modules = {

/***/ 53680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-9c32faa2",
  "path": "/java/programing/operation.html",
  "title": "Java中的运算符",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "算数运算",
      "slug": "算数运算",
      "children": [
        {
          "level": 3,
          "title": "加，减，乘，除",
          "slug": "加-减-乘-除",
          "children": []
        },
        {
          "level": 3,
          "title": "取模",
          "slug": "取模",
          "children": []
        },
        {
          "level": 3,
          "title": "自增(++)/自减(--)",
          "slug": "自增-自减",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "比较运算",
      "slug": "比较运算",
      "children": []
    },
    {
      "level": 2,
      "title": "逻辑运算",
      "slug": "逻辑运算",
      "children": [
        {
          "level": 3,
          "title": "|与||的区别",
          "slug": "与-的区别",
          "children": []
        },
        {
          "level": 3,
          "title": "三目运算符",
          "slug": "三目运算符",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "位运算符",
      "slug": "位运算符",
      "children": []
    },
    {
      "level": 2,
      "title": "数学函数与常量",
      "slug": "数学函数与常量",
      "children": []
    },
    {
      "level": 2,
      "title": "结合赋值的运算符",
      "slug": "结合赋值的运算符",
      "children": []
    },
    {
      "level": 2,
      "title": "括号与运算符级别",
      "slug": "括号与运算符级别",
      "children": []
    }
  ],
  "filePathRelative": "java/programing/operation.md",
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

/***/ 21990:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ operation_html)
});

// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/java/programing/operation.html.vue?vue&type=template&id=1bf9f055


function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="java中的运算符" tabindex="-1"><a class="header-anchor" href="#java中的运算符" aria-hidden="true">#</a> Java中的运算符</h1><ul><li>算数运算：日常的加减乘除</li><li>比较运算：比较大小</li><li>逻辑运算：针对布尔值的运算</li></ul><h2 id="算数运算" tabindex="-1"><a class="header-anchor" href="#算数运算" aria-hidden="true">#</a> 算数运算</h2><p>算术运算有：<strong>+ - * / % ++ --</strong></p><ul><li><strong>取模运算适用于整数和字符类型</strong></li><li>其他算术符适用于所有数值类型和字符类型</li></ul><h3 id="加-减-乘-除" tabindex="-1"><a class="header-anchor" href="#加-减-乘-除" aria-hidden="true">#</a> 加，减，乘，除</h3><ol><li>两个正数相乘的结果可能超出</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">2147483647</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>结果为什么是-2 ??</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">byte</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">byte</span> b <span class="token operator">=</span> <span class="token number">127</span><span class="token punctuation">;</span>
<span class="token keyword">byte</span> c <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">)</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// c is -128</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="2"><li>两个小数相减结果有小数</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">double</span> a <span class="token operator">=</span> <span class="token number">2.0</span><span class="token punctuation">;</span>
<span class="token keyword">double</span> b <span class="token operator">=</span> <span class="token number">1.1</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="3"><li>整数相除不是四舍五入</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">double</span> d <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">/</span> <span class="token number">4</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>结果是2而不是2.5</p><ol start="4"><li>小数计算结果不准确</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">double</span> d <span class="token operator">=</span> <span class="token number">01</span> <span class="token operator">*</span> <span class="token number">01</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>结果是0.01000000001；</p><h3 id="取模" tabindex="-1"><a class="header-anchor" href="#取模" aria-hidden="true">#</a> 取模</h3><p>取模运算适用于<strong>整数和字符类型</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">5</span> <span class="token operator">%</span> <span class="token number">3</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>a = 2</p><h3 id="自增-自减" tabindex="-1"><a class="header-anchor" href="#自增-自减" aria-hidden="true">#</a> 自增(++)/自减(--)</h3><p>自增/自减是对自己做加1或者减1操作，都有两种形式。</p><ol><li>放在变量前</li><li>放在变量后</li></ol><p>说明：<strong>如果只是对自己操作，这两种形式没什么差别</strong>，区别在于还有其他操作的时候。</p><ul><li>放在变量后(a++)是先用原来的值进行其他操作，然后再对自己做修改</li><li>放在变量后(++a)是先对自己做修改，再用修改后的值进行其他操作</li></ul><table><thead><tr><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">快捷运算</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">等同运算</th></tr></thead><tbody><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">b=a++-1</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">b=a-1, a=a+1</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">c=++a-1</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">a=a+1, c=a-1</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">arrA[i++]=arrB[++j]</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">j=j+1, arrA[i]=arrB[j], i=i+1</td></tr></tbody></table><h2 id="比较运算" tabindex="-1"><a class="header-anchor" href="#比较运算" aria-hidden="true">#</a> 比较运算</h2><p>比较运算就是计算两个值之间的关系，结果是一个布尔类型。<strong>比较运算适用于所有数值类型和字符类型。</strong></p><p>比较操作符号：</p><ul><li>大于(&gt;)</li><li>大于等于(&gt;=)</li><li>小于(&lt;)</li><li>小于等于(&lt;=)</li><li>等于(==),</li><li>不等于(!=)</li></ul><p><strong>对于数组，==判断的是两个变量指向的是不是同一个数组，而不是两个数组的元素内容是都一样</strong></p><h2 id="逻辑运算" tabindex="-1"><a class="header-anchor" href="#逻辑运算" aria-hidden="true">#</a> 逻辑运算</h2><p>逻辑运算只可应用于boolean类型的数据，比较运算的结果是布尔值。</p><ul><li>与（&amp;）</li><li>或（|）</li><li>非（!）</li><li>异或（^）</li><li>短路与（&amp;&amp;）</li><li>短路或（||）</li></ul><h3 id="与-的区别" tabindex="-1"><a class="header-anchor" href="#与-的区别" aria-hidden="true">#</a> |与||的区别</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">boolean</span> a <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">boolean</span> flag <span class="token operator">=</span> a <span class="token operator">|</span> b<span class="token operator">++</span> <span class="token operator">&gt;</span> <span class="token number">0</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">boolean</span> a <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">boolean</span> flag <span class="token operator">=</span> a <span class="token operator">||</span> b<span class="token operator">++</span> <span class="token operator">&gt;</span> <span class="token number">0</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>||会短路，即看到||前半部分就可以判定结果的情况下，忽略||后面的运算。</p><h3 id="三目运算符" tabindex="-1"><a class="header-anchor" href="#三目运算符" aria-hidden="true">#</a> 三目运算符</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>x <span class="token operator">&lt;</span> y <span class="token operator">?</span> x <span class="token operator">:</span> y
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="位运算符" tabindex="-1"><a class="header-anchor" href="#位运算符" aria-hidden="true">#</a> 位运算符</h2><ul><li>&amp;</li><li>|</li><li>^</li><li>~</li><li><strong>&lt;&lt;</strong></li><li><strong>&gt;&gt;</strong></li><li><strong>&gt;&gt;&gt;</strong></li></ul><h2 id="数学函数与常量" tabindex="-1"><a class="header-anchor" href="#数学函数与常量" aria-hidden="true">#</a> 数学函数与常量</h2><ol><li>计算一个数值的平方根</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">double</span> x <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
<span class="token keyword">double</span> y <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// prints 2.0</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="2"><li>一些三角函数</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Math</span><span class="token punctuation">.</span>sin
<span class="token class-name">Math</span><span class="token punctuation">.</span>cos
<span class="token class-name">Math</span><span class="token punctuation">.</span>tan
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="3"><li>指示函数</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Math</span><span class="token punctuation">.</span>log
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="结合赋值的运算符" tabindex="-1"><a class="header-anchor" href="#结合赋值的运算符" aria-hidden="true">#</a> 结合赋值的运算符</h2><p>在Java中可以使用二元运算符，这是一种简写形式。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>x <span class="token operator">+=</span> <span class="token number">4</span><span class="token punctuation">;</span>
<span class="token comment">//等价于</span>
x <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">4</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
a <span class="token operator">|=</span> b<span class="token punctuation">;</span>
<span class="token comment">//等价于</span>
a <span class="token operator">=</span> a <span class="token operator">|</span> b<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>如果运算符得到一个值，其类型与左侧操作数的类型不同，会发生强制类型转换。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
x <span class="token operator">+=</span> <span class="token number">3.5</span><span class="token punctuation">;</span>
<span class="token comment">//等价于</span>
<span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">(</span>x <span class="token operator">+</span> <span class="token number">3.5</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="括号与运算符级别" tabindex="-1"><a class="header-anchor" href="#括号与运算符级别" aria-hidden="true">#</a> 括号与运算符级别</h2><ul><li>如果不使用括号，就按照给出的运算符优先级次序进行计算。</li><li>同一个级别的运算符按照从左到右的顺序进行计算（除了从右到左的运算符）</li></ul><p><strong>优先级从上到下</strong></p><table><thead><tr><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">运算符</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">结合性</th></tr></thead><tbody><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">== !=</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">从左向右</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">&amp;</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">从左向右</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">^</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">从左向右</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">&amp;&amp;</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">从左向右</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">?:</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }"><strong>从右向左</strong></td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">= += -= *= /= %= &amp;= ^= &lt;&lt;= &gt;&gt;= &gt;&gt;&gt;=</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }"><strong>从右向左</strong></td></tr></tbody></table><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>a <span class="token operator">&amp;&amp;</span> b <span class="token operator">||</span> c
<span class="token comment">// 等价于</span>
<span class="token punctuation">(</span>a <span class="token operator">&amp;&amp;</span> b<span class="token punctuation">)</span> <span class="token operator">||</span> c
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>a <span class="token operator">+=</span> b <span class="token operator">+=</span>c
<span class="token comment">// 等价于</span>
a <span class="token operator">+=</span> <span class="token punctuation">(</span>b <span class="token operator">+=</span> c<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./.temp/pages/java/programing/operation.html.vue?vue&type=template&id=1bf9f055

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/java/programing/operation.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const operation_html = (__exports__);

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
//# sourceMappingURL=611.app.js.map