"use strict";
exports.id = 2831;
exports.ids = [2831];
exports.modules = {

/***/ 93932:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-1a4511e3",
  "path": "/java/programing/function-call.html",
  "title": "Java中函数调用基本原理",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "函数基本概念",
      "slug": "函数基本概念",
      "children": []
    },
    {
      "level": 2,
      "title": "参数传递",
      "slug": "参数传递",
      "children": []
    },
    {
      "level": 2,
      "title": "理解函数",
      "slug": "理解函数",
      "children": []
    },
    {
      "level": 2,
      "title": "函数调用原理",
      "slug": "函数调用原理",
      "children": [
        {
          "level": 3,
          "title": "栈的概念",
          "slug": "栈的概念",
          "children": []
        },
        {
          "level": 3,
          "title": "函数执行原理 - 基本数据类型",
          "slug": "函数执行原理-基本数据类型",
          "children": []
        },
        {
          "level": 3,
          "title": "函数执行原理 - 数组的对象",
          "slug": "函数执行原理-数组的对象",
          "children": []
        },
        {
          "level": 3,
          "title": "递归调用原理",
          "slug": "递归调用原理",
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
  "filePathRelative": "java/programing/function-call.md",
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

/***/ 51787:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ function_call_html)
});

// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/java/programing/function-call.html.vue?vue&type=template&id=54cf9a0f


function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="java中函数调用基本原理" tabindex="-1"><a class="header-anchor" href="#java中函数调用基本原理" aria-hidden="true">#</a> Java中函数调用基本原理</h1><p>使用函数来减少重复代码和分解复杂造作。Java中的函数一般叫做方法。</p><p>通过函数来减少重复代码，分解复杂操作是计算机程序的一种重要思维方式。</p><h2 id="函数基本概念" tabindex="-1"><a class="header-anchor" href="#函数基本概念" aria-hidden="true">#</a> 函数基本概念</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>修饰符 返回值类型 函数名称<span class="token punctuation">(</span>参数类型 参数名称<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    操作
    <span class="token keyword">return</span> 返回值<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>函数的组成部分有一下几种：</p><ol><li>修饰符</li><li>返回值，没有返回值则是void</li><li>函数名称</li><li>参数，0个或多个</li><li>操作</li></ol><p><strong>定义函数本身不会执行任何代码，函数要被执行，需要被调用</strong></p><h2 id="参数传递" tabindex="-1"><a class="header-anchor" href="#参数传递" aria-hidden="true">#</a> 参数传递</h2><p><strong>参数传递实际上是给参数赋值</strong></p><p>定义函数时声明参数，实际上就是定义变量，只是这些变量的值是未知的，调用函数时传递参数，实际上就是给函数中的变量赋值。</p><p><strong>参数与变量</strong></p><p>A parameter is a variable in a method definition. 参数是一个方法所定义的变量。</p><p>Argument is the actual value of this variable that gets passed to function. 变量是传给方法的实际数据。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span> <span class="token function">max</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>其中x, y 为参数</p><p>When a method is called, the arguments are the data you pass into the method&#39;s parameters.</p><p>在调用一个方法时，变量是你传给方法所定义的参数的数据。</p><h2 id="理解函数" tabindex="-1"><a class="header-anchor" href="#理解函数" aria-hidden="true">#</a> 理解函数</h2><ol><li>特殊类型参数数组</li></ol><p>基本类型不会对调用者中的变量造成任何影响，但是数组不是。<strong>在函数内修改数组中的元素会修改调用者中的数据</strong>。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">reset</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">reset</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><strong>因为给数组变量赋值不会影响原有的数组内容，只会让数组变量指向一个不同的数组的内容空间。</strong></p><ol start="2"><li>可变长度参数</li></ol><p>可变长度参数可以看做是一个数组。</p><p><strong>可变长度参数必须是参数列表中的最后一个，一个函数只能有一个可变长度的参数</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token keyword">int</span> min<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> max <span class="token operator">=</span> min<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> a<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>max <span class="token operator">&lt;</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            max <span class="token operator">=</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> max<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol start="3"><li>理解返回值</li></ol><ul><li>return可以用于函数内的任何地方</li><li>函数返回类型为void也可以使用return</li></ul><ol start="4"><li>函数重载</li></ol><p><strong>同一个类中函数名相同但参数不同的现象，一般称为函数重载</strong></p><p>Java编译器会自动寻找最匹配的函数。</p><h2 id="函数调用原理" tabindex="-1"><a class="header-anchor" href="#函数调用原理" aria-hidden="true">#</a> 函数调用原理</h2><h3 id="栈的概念" tabindex="-1"><a class="header-anchor" href="#栈的概念" aria-hidden="true">#</a> 栈的概念</h3><p><strong>栈是一块内存，但它的使用有特别的约定，一般是先进后出</strong>，栈底的内存地址是最高的，栈顶的内存地址是最低的。</p><p>计算机系统主要使用栈来存放函数调用过程中需要的数据：</p><ul><li>参数</li><li>返回地址</li><li>函数内定义的局部变量</li></ul><p><strong>返回值存在一个专门的返回值存储器中！！！</strong></p><h3 id="函数执行原理-基本数据类型" tabindex="-1"><a class="header-anchor" href="#函数执行原理-基本数据类型" aria-hidden="true">#</a> 函数执行原理 - 基本数据类型</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> c <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
    <span class="token keyword">return</span> c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> d <span class="token operator">=</span> <span class="token class-name">FunctionExample2</span><span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol><li>main函数调用sum函数之前内存</li></ol><table><thead><tr><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">地址</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">内存</th></tr></thead><tbody><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">0x7FF4</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }"></td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">0x7FF8</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }"></td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">0x7FFC</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">d</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">0x8000</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">args</td></tr></tbody></table><p>栈中只存放了两个变量args和d</p><ol start="2"><li>执行到sum函数内部，返回之前</li></ol><table><thead><tr><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">地址</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">内存</th></tr></thead><tbody><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">0x7FEC</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">c(3)</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">0x7FF0</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">main下一条指令地址</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">0x7FF4</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">2(b)</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">0x7FF8</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">1(a)</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">0x7FFC</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">d</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">0x8000</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">args</td></tr></tbody></table><p>调用sum函数时将参数入栈，将返回地址入栈，然后跳转到sum函数内部，为局部变量c分配内存空间。</p><ol start="3"><li><p>sum函数返回之前，返回值保存到专门的返回值存储器中。</p></li><li><p>调用return后，程序会跳转到栈中保存的返回地址，也就是main的下一条指令。</p></li><li><p>sum函数的数据会出栈</p></li><li><p>从专门的返回值存储器中获得返回值，赋值给d</p></li></ol><p><strong>函数中的参数和函数内定义的变量，都分配在栈中，这些变量只有在函数调用的时候才分配，在调用结束时就背释放了。</strong></p><h3 id="函数执行原理-数组的对象" tabindex="-1"><a class="header-anchor" href="#函数执行原理-数组的对象" aria-hidden="true">#</a> 函数执行原理 - 数组的对象</h3><p><strong>数组和对象类型都有两块内存，一块存放实际内容，一块存放实际内容的地址。</strong></p><p><strong>实际的内容空间不是分配在栈上，而是分配在堆上，存放地址的空间是分配在栈上的。</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token keyword">int</span> min<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> max <span class="token operator">=</span> min<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> a<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>max <span class="token operator">&lt;</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            max <span class="token operator">=</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> max<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> ret <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p><img src="https://image.hualihai.cn/blog/Gal6nS.png" alt="Gal6nS"></p><p>注意</p><p>当main函数执行结束，栈空间没有变量指向堆空间的数组时，Java系统会自动进行垃圾回收，从而释放这块空间。</p><h3 id="递归调用原理" tabindex="-1"><a class="header-anchor" href="#递归调用原理" aria-hidden="true">#</a> 递归调用原理</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">factorial</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> n <span class="token operator">*</span> <span class="token function">factorial</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> ret <span class="token operator">=</span> <span class="token function">factorial</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// print is 24</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><img src="https://image.hualihai.cn/blog/50zdcv.png" alt="50zdcv"></p><ol><li>f(0)的返回值1</li><li>f(0)返回到f(1)，f(1)执行1*f(0)，结果是1</li><li>f(1)返回到f(2)，f(2)执行2*f(1)，结果是2</li><li>f(2)返回到f(3)，f(3)执行3*f(2)，结果是6</li><li>f(3)返回到f(4)，f(4)执行4*f(3)，结果是24</li></ol><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>函数调用主要是通过栈来存储相关的数据，系统就函数调用者和函数如何使用栈做了约定，返回值是通过一个专门的返回值存储器存储的。</p><p><strong>调用是有成本的，每一次调用都需要分配额外的栈空间用于存储参数，局部变量以及返回值地址，需要进行额外的入栈和出栈操作。</strong></p><!--]-->`)
}
;// CONCATENATED MODULE: ./.temp/pages/java/programing/function-call.html.vue?vue&type=template&id=54cf9a0f

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/java/programing/function-call.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const function_call_html = (__exports__);

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
//# sourceMappingURL=2831.app.js.map