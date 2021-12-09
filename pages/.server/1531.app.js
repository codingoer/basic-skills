"use strict";
exports.id = 1531;
exports.ids = [1531];
exports.modules = {

/***/ 52924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-cec68b4e",
  "path": "/java/programing/data-type.html",
  "title": "Java中的数据类型",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "数据类型",
      "slug": "数据类型",
      "children": [
        {
          "level": 3,
          "title": "整型",
          "slug": "整型",
          "children": []
        },
        {
          "level": 3,
          "title": "浮点类型",
          "slug": "浮点类型",
          "children": []
        },
        {
          "level": 3,
          "title": "char类型",
          "slug": "char类型",
          "children": []
        },
        {
          "level": 3,
          "title": "boolean类型",
          "slug": "boolean类型",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "变量",
      "slug": "变量",
      "children": []
    },
    {
      "level": 2,
      "title": "常量",
      "slug": "常量",
      "children": []
    },
    {
      "level": 2,
      "title": "数值类型之间的转换",
      "slug": "数值类型之间的转换",
      "children": []
    },
    {
      "level": 2,
      "title": "强制类型转换",
      "slug": "强制类型转换",
      "children": []
    },
    {
      "level": 2,
      "title": "String和基础类型的转换",
      "slug": "string和基础类型的转换",
      "children": []
    }
  ],
  "filePathRelative": "java/programing/data-type.md",
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

/***/ 31769:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ data_type_html)
});

// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/java/programing/data-type.html.vue?vue&type=template&id=b324289e


function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="java中的数据类型" tabindex="-1"><a class="header-anchor" href="#java中的数据类型" aria-hidden="true">#</a> Java中的数据类型</h1><h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2><p><strong>Java是一种强语言类型</strong> 必须为每一个变量声明一种类型</p><p>在Java中一共有八种数据类型，其中有4种整型，2种浮点型，1种字符型，一种boolean类型。</p><p><strong>除了基本数据类型，其他都是对象类型。</strong></p><h3 id="整型" tabindex="-1"><a class="header-anchor" href="#整型" aria-hidden="true">#</a> 整型</h3><ul><li><p>Java中整型的范围与运行Java代码的机器无关。</p></li><li><p>C和C++中需要针对不同的处理器选择最为高效的整型，在32位处理器上运行很好的C程序在16位系统上运行会发生整数溢出。</p></li></ul><table><thead><tr><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">类型</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">存储需求</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">取值范围</th></tr></thead><tbody><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">int</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">4字节</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">-2 147 483 648 ~ -2 147 483 647（超过20亿）</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">short</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">2字节</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">-32 768 ~ 32 767</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">long</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">8字节</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">-9 223 372 036 854 775 808 ~ 9 223 372 036 854 775 807</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">byte</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">1字节</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">-128 ~ 127</td></tr></tbody></table><p><strong>数字默认类型是int类型</strong></p><h3 id="浮点类型" tabindex="-1"><a class="header-anchor" href="#浮点类型" aria-hidden="true">#</a> 浮点类型</h3><p>浮点类型用于表示有小数部分的数值。Java中有两种浮点类型。</p><table><thead><tr><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">类型</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">存储需求</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">取值范围</th></tr></thead><tbody><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">float</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">4字节</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">大约±3.402 823 47E+38F（有效位数为6~7位）</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">double</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">8字节</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">大约±1.797 693 134 862 315 70E+308 （有效位数为15位）</td></tr></tbody></table><ul><li>double表示的数值精度是float类型的两倍（double称之为双精度数值）</li><li>绝大部分程序采用double类型，float类型的精度很难满足需求</li><li><strong>没有后缀F的浮点数值默认是double类型</strong></li></ul><p>三种特殊的浮点数值</p><ol><li>正无穷大</li><li>负无穷大</li><li>NaN(不是一个数字)</li></ol><p>check whether x is not a number</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Double</span><span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>浮点数值不适用于无法接受舍入误差的金融计算中，如下代码</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">double</span> a <span class="token operator">=</span> <span class="token number">2.0</span><span class="token punctuation">;</span>
        <span class="token keyword">double</span> b <span class="token operator">=</span> <span class="token number">1.1</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>输出结果为：<strong>0.8999999999999999</strong></p><p>这种舍入误差的原因是因为：<strong>浮点数值采用二进制系统表示，而在二进制系统中无法精确的表示分数十分之一。</strong></p><p>如果在数值计算中不允许有任何舍入误差，就要使用<code>BigDecimal</code>类。</p><h3 id="char类型" tabindex="-1"><a class="header-anchor" href="#char类型" aria-hidden="true">#</a> char类型</h3><p>字符类型char用于表示一个字符，这个字符可以是中文字符，也可以是英文字符。</p><p><strong>char占用的内存空间是两个字节</strong></p><h3 id="boolean类型" tabindex="-1"><a class="header-anchor" href="#boolean类型" aria-hidden="true">#</a> boolean类型</h3><p>boolean（布尔）类型有两个值：false和true。</p><p><strong>boolean类型占几个字节，依赖于JVM</strong></p><p>boolean: The boolean data type has only two possible values: true and false. Use this data type for simple flags that track true/false conditions. This data type represents one bit of information, <strong>but its &quot;size&quot; isn&#39;t something that&#39;s precisely defined.</strong></p><p>In Oracle’s Java Virtual Machine implementation, <strong>boolean arrays in the Java programming language are encoded as Java Virtual Machine byte arrays, using 8 bits per boolean element</strong></p><p>Although the Java Virtual Machine defines a boolean type, it only provides very limited support for it. There are no Java Virtual Machine instructions solely dedicated to operations on boolean values. Instead, expressions in the Java programming language that operate on boolean values are compiled to use values of the Java Virtual Machine int data type</p><p>The Java Virtual Machine encodes boolean array components using 1 to represent true and 0 to represent false . Where Java programming language boolean values are mapped by compilers to values of Java Virtual Machine type int , the compilers must use the same encoding</p><ol><li>无论boolean占用多少字节，只有1bit的值是有意义的</li><li>boolean类型被编译成int类型来使用，占4个byte</li><li>在Java虚拟机里，1表示true ，0表示false</li><li>boolean类型的数组时，boolean在JVM中占一个字节</li></ol><p>另外注意的地方：</p><ul><li>在Java中整型值不布尔值不能相互转换。</li><li>在C++中数值可以代替布尔值。</li></ul><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><p><strong>变量的概念：</strong></p><p>为了操作数据，需要把数据放到内存中。所谓内存在程序看来就是一块有地址编号的连续空间，数据放到内存中的某个位置后，为了方便地找到和操作这个数据，需要给这个位置起一个名字。编程语言通过<strong>变量</strong>来表示这个过程。</p><p>变量的值可以改变，但变量的名字是不变的。<strong>变量就是给数据起名字，方便找不同的数据，它的值可以变，但含义不变。</strong></p><p>在Java中每个变量都有一个类型(type)。<strong>声明一个变量后，必须使用赋值语句对变量进行显示初始化</strong></p><p>错误示例：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span> day<span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>day<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>变量的声明尽可能靠近变量第一次使用的地方，一种良好的代码编写风格</li><li>可以先声明变量，随后再进行赋值</li></ul><h2 id="常量" tabindex="-1"><a class="header-anchor" href="#常量" aria-hidden="true">#</a> 常量</h2><p>在Java中利用关键字<code>final</code>指示常量。</p><p>关键字<code>final</code>表示这个常量只能被赋值一次，一旦赋值之后就不能再改了</p><p>在虚拟机层面对<code>final</code>关键字做了哪些优化？？？？？</p><h2 id="数值类型之间的转换" tabindex="-1"><a class="header-anchor" href="#数值类型之间的转换" aria-hidden="true">#</a> 数值类型之间的转换</h2><ul><li>6个实心箭头 - 表示无信息丢失转换</li><li>3个虚心箭头 - <strong>表示有可能有精度丢失</strong></li></ul><p><img src="https://image.hualihai.cn/blog/s0Ni52.png" alt="s0Ni52"></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token number">123456789</span><span class="token punctuation">;</span>
<span class="token keyword">float</span> f <span class="token operator">=</span> n<span class="token punctuation">;</span> <span class="token comment">// f is 1.1234567892E8</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="强制类型转换" tabindex="-1"><a class="header-anchor" href="#强制类型转换" aria-hidden="true">#</a> 强制类型转换</h2><p>int类型的值将自动地转换为double类型。有时也需要将double类型转换为int类型。在Java中允许这种数值之间的类型转换。</p><p><strong>需要通过强制类型转换(cast)实现这个操作</strong></p><ul><li>可能会丢失一些精度</li><li>超出目标类型值的范围会得到完全不同的值</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">double</span> x <span class="token operator">=</span> <span class="token number">9.97</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> nx <span class="token operator">=</span> <span class="token keyword">int</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// nx is 9</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">byte</span> a <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">)</span> <span class="token number">300</span><span class="token punctuation">;</span> <span class="token comment">// a is 44</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="string和基础类型的转换" tabindex="-1"><a class="header-anchor" href="#string和基础类型的转换" aria-hidden="true">#</a> String和基础类型的转换</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span> c <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;s&quot;</span> <span class="token operator">+</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./.temp/pages/java/programing/data-type.html.vue?vue&type=template&id=b324289e

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/java/programing/data-type.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const data_type_html = (__exports__);

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
//# sourceMappingURL=1531.app.js.map