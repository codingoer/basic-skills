"use strict";
exports.id = 7474;
exports.ids = [7474];
exports.modules = {

/***/ 35632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-4357237d",
  "path": "/java/programing/array.html",
  "title": "Java中的数组",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "数组初始化",
      "slug": "数组初始化",
      "children": []
    },
    {
      "level": 2,
      "title": "数组内存分布",
      "slug": "数组内存分布",
      "children": []
    },
    {
      "level": 2,
      "title": "数组拷贝",
      "slug": "数组拷贝",
      "children": []
    },
    {
      "level": 2,
      "title": "数组排序",
      "slug": "数组排序",
      "children": []
    },
    {
      "level": 2,
      "title": "多维数组",
      "slug": "多维数组",
      "children": []
    }
  ],
  "filePathRelative": "java/programing/array.md",
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

/***/ 5496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ array_html)
});

// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/java/programing/array.html.vue?vue&type=template&id=7073ee38


function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="java中的数组" tabindex="-1"><a class="header-anchor" href="#java中的数组" aria-hidden="true">#</a> Java中的数组</h1><p>数组是一种数据结构，用来存储同一类型的集合。通过一个整数下标就可以访问数组中的元素。</p><p><strong>一旦初始化数组就不能改变长度了。</strong></p><h2 id="数组初始化" tabindex="-1"><a class="header-anchor" href="#数组初始化" aria-hidden="true">#</a> 数组初始化</h2><p>基本类型的数组有三种赋类型：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span> arr<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>第三种形式，即使没有给每个元素赋值，每个元素也都有一个默认值。<strong>这个默认值跟数组类型有关系。</strong></p><ul><li>数值类型默认值是0</li><li>boolean值默认值是false</li><li>char为空字符</li></ul><p><strong>不能在给定初始值的同时给定长度</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="数组内存分布" tabindex="-1"><a class="header-anchor" href="#数组内存分布" aria-hidden="true">#</a> 数组内存分布</h2><p><strong>数组类型和基本类型不同，数组在内存中有两块空间。</strong> 一块用于存储数组内容本身，一块用于存储内容的位置。</p><p>基本数据类型如下</p><table><thead><tr><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">代码</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">内存地址</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">内存数据</th></tr></thead><tbody><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">int a = 100</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">1000</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">100</td></tr></tbody></table><p>数组类型如下</p><table><thead><tr><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">代码</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">内存地址</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">内存数据</th></tr></thead><tbody><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">int[] arr = {1,2,3}</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">2000</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">3000</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }"></td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">3000</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">1</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }"></td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">3004</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">2</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }"></td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">3008</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">3</td></tr></tbody></table><p><strong>为什么数据要用两块内存空间？</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arrA <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arrB <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
arrA <span class="token operator">=</span> arrB<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>如果arr对应的内存空间是直接存储数组的内容，那么就没有足够的空间去容纳arrB的所有元素。</p><p>用两块空间存储，arrA存储的值就变成了和arrB的一样，存储的都是数组内容{4, 5, 6, 7}的地址。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

arrA<span class="token punctuation">,</span> arrB  <span class="token operator">-&gt;</span>    <span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>{1, 2, 3}的内存空间不被再引用，将被垃圾回收。</p><p><strong>给数组中的元素赋值是改变数组的内容，而给数据变量赋值则会让变量指向一个不同的位置</strong></p><h2 id="数组拷贝" tabindex="-1"><a class="header-anchor" href="#数组拷贝" aria-hidden="true">#</a> 数组拷贝</h2><p>Java中允许将一个数组变量拷贝给另一个数组变量。这时两个变量将引用相等。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arrA <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span> <span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arrB <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>arrB <span class="token operator">==</span> arrA<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// print is false;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arrA <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span> <span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arrB <span class="token operator">=</span> arrA<span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>arrB <span class="token operator">==</span> arrA<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// print is true;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>将一个数组的所有值拷贝到一个新数组中去，就要使用Arrays类中的copyOf方法</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arrA <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span> <span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arrB <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>arrA<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>arrB <span class="token operator">==</span> arrA<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// print is false;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arrA <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span> <span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arrB <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>arrA<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>arrB<span class="token punctuation">,</span> arrA<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// print is true;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="数组排序" tabindex="-1"><a class="header-anchor" href="#数组排序" aria-hidden="true">#</a> 数组排序</h2><p><strong>快速排序算法</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arrC <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span> <span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>arrC<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">:</span> arrC<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="多维数组" tabindex="-1"><a class="header-anchor" href="#多维数组" aria-hidden="true">#</a> 多维数组</h2><!--]-->`)
}
;// CONCATENATED MODULE: ./.temp/pages/java/programing/array.html.vue?vue&type=template&id=7073ee38

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/java/programing/array.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const array_html = (__exports__);

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
//# sourceMappingURL=7474.app.js.map