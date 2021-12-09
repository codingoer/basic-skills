"use strict";
exports.id = 3662;
exports.ids = [3662];
exports.modules = {

/***/ 13285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-b608466c",
  "path": "/java/programing/binary-and-coding.html",
  "title": "Java中的二进制与编码",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "整数的二进制与位运算",
      "slug": "整数的二进制与位运算",
      "children": [
        {
          "level": 3,
          "title": "正整数的二进制",
          "slug": "正整数的二进制",
          "children": []
        },
        {
          "level": 3,
          "title": "负整数的二进制",
          "slug": "负整数的二进制",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "浮点数的二进制表示",
      "slug": "浮点数的二进制表示",
      "children": []
    },
    {
      "level": 2,
      "title": "十六进制",
      "slug": "十六进制",
      "children": []
    },
    {
      "level": 2,
      "title": "位运算",
      "slug": "位运算",
      "children": []
    },
    {
      "level": 2,
      "title": "字符的编码",
      "slug": "字符的编码",
      "children": [
        {
          "level": 3,
          "title": "非Unicode编码",
          "slug": "非unicode编码",
          "children": []
        },
        {
          "level": 3,
          "title": "Unicode编码",
          "slug": "unicode编码",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "char的真正含义",
      "slug": "char的真正含义",
      "children": []
    }
  ],
  "filePathRelative": "java/programing/binary-and-coding.md",
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

/***/ 18437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ binary_and_coding_html)
});

// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/java/programing/binary-and-coding.html.vue?vue&type=template&id=f8a863b8


function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="java中的二进制与编码" tabindex="-1"><a class="header-anchor" href="#java中的二进制与编码" aria-hidden="true">#</a> Java中的二进制与编码</h1><h2 id="整数的二进制与位运算" tabindex="-1"><a class="header-anchor" href="#整数的二进制与位运算" aria-hidden="true">#</a> 整数的二进制与位运算</h2><p><strong>十进制的123 = 1乘以10的二次方 + 2乘以10的一次方 + 3乘以10的0次方</strong></p><p>每个位置都有<strong>位权</strong>，从左到右，第一位为1，第二位为10，第三位为100.</p><h3 id="正整数的二进制" tabindex="-1"><a class="header-anchor" href="#正整数的二进制" aria-hidden="true">#</a> 正整数的二进制</h3><table><thead><tr><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">二进制</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">十进制</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">计算过程</th></tr></thead><tbody><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">10</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">2</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">1乘以2的1次方 + 0乘以2的0次方</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">11</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">3</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">1乘以2的1次方 + 1乘以2的0次方</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">111</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">7</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">1乘以2的2次方 + 1乘以2的1次方 + 1乘以2的0次方</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">1010</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">10</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">1乘以2的3次方 + 0乘以2的2次方 + 1乘以2的1次方 + 0乘以2的0次方</td></tr></tbody></table><h3 id="负整数的二进制" tabindex="-1"><a class="header-anchor" href="#负整数的二进制" aria-hidden="true">#</a> 负整数的二进制</h3><p><strong>二进制使用最高位表示符号位，用1表示负数，用0表示正数。</strong></p><p>负数的二进制表示就是对应的正数的补码表示。</p><p>正数有4中类型：<strong>byte, short, int, long</strong>，分别占<strong>1, 2, 4, 8个字节</strong>，及分别占<strong>8, 16, 32, 64位</strong>，所以每一种类型的符号位都是最左边的一位。</p><p><strong>1. 原码表示法：</strong></p><p>byte a = -1</p><p>将最高位变为1，二进制是10000001</p><p><strong>2. 补码表示法：</strong></p><p>byte a = -1</p><p>1的原码表示法是00000001，取反就是11111110，然后再加1，即11111111</p><p><strong>3. 给定一个负数的二进制求十进制</strong></p><p>10010010</p><p>首先取反，得到01101101，然后加1，得到0110110，它的十进制为110，所以原值就是-100.</p><p><strong>4. 计算机只能做加法</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token number">1</span>  <span class="token operator">-&gt;</span>  <span class="token number">00000001</span>
<span class="token operator">-</span><span class="token number">1</span> <span class="token operator">-&gt;</span>  <span class="token number">11111111</span>
<span class="token operator">+</span> <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>
<span class="token number">0</span>      <span class="token number">00000000</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>5. 当计算结果超出计算范围</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token number">127</span> <span class="token operator">-&gt;</span> <span class="token number">01111111</span>
<span class="token number">1</span>   <span class="token operator">-&gt;</span> <span class="token number">00000001</span>
<span class="token operator">+</span> <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>
<span class="token operator">-</span><span class="token number">128</span>   <span class="token number">10000000</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="浮点数的二进制表示" tabindex="-1"><a class="header-anchor" href="#浮点数的二进制表示" aria-hidden="true">#</a> 浮点数的二进制表示</h2><p>小数计算不准确</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">float</span> f <span class="token operator">=</span> <span class="token number">0.1f</span> <span class="token operator">*</span> <span class="token number">01.f</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//f is 0.010000001</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>计算机是用一种二进制格式存储小数的，这个二进制格式不能精确的表示0.1，只能表示一个非常接近0.1但又不等于0.1的一个数。</strong></p><p>如果需要高精度的计算，使用Java中的<code>BigDecimal</code>，运算更准确，但是效率比较低。</p><h2 id="十六进制" tabindex="-1"><a class="header-anchor" href="#十六进制" aria-hidden="true">#</a> 十六进制</h2><p>二进制写起来太长，<strong>可以将4个二进制位简化为一个0~15的数，10-15用A~F表示</strong></p><table><thead><tr><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">二进制</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">十进制</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">十六进制</th></tr></thead><tbody><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">1010</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">10</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">A</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">1011</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">11</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">B</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">1100</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">12</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">C</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">1101</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">13</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">D</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">1110</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">14</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">E</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">1111</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">15</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">F</td></tr></tbody></table><ul><li>可以使用十六进制直接写常量数字，在数字前面加0x。</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">0x7B</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="位运算" tabindex="-1"><a class="header-anchor" href="#位运算" aria-hidden="true">#</a> 位运算</h2><p><strong>二进制级别的操作</strong></p><ul><li><strong>左移(&lt;&lt;)</strong>: 向左移动，右边的补0，高位的舍弃。</li><li><strong>无符号右移(&gt;&gt;&gt;)</strong>: 向右移动，右边的舍弃，左边补0.</li><li><strong>有符号右移(&gt;&gt;)</strong>: 向右移动，右边的舍弃，左边补什么取决于原来的最高位。</li></ul><p><strong>逻辑运算</strong></p><ul><li>按位与&amp;：两位都位1才为1</li><li>按位或|：只有有一位为1，就为1</li><li>按位取反~：1变为0，0变为1</li><li>按位异或^：相异为真，相同为假</li></ul><h2 id="字符的编码" tabindex="-1"><a class="header-anchor" href="#字符的编码" aria-hidden="true">#</a> 字符的编码</h2><p><strong>编码有两大类：</strong></p><ul><li>Unicode编码</li><li>非Unicode编码（ASCII, ISO8859-1, Windows-1252, GB2312, GBK, GB18030, Big5）</li></ul><h3 id="非unicode编码" tabindex="-1"><a class="header-anchor" href="#非unicode编码" aria-hidden="true">#</a> 非Unicode编码</h3><ol><li>ASCII</li></ol><p><strong>American Standard Code For Information Interchange</strong></p><p>美国大概只需要128个字符，所以规定了128个字符的二进制表示法，称为ASCII编码。</p><p>128个字符用7位刚好表示，计算机存储的最小单元是byte，即8位，ASCII码中最高位置位0.</p><p>为了保持与ASCII码的兼容性，一般都是将最高位设置为1。<strong>当最高位为0时表示ASCII码，当为1时就是各个国家自己的字符</strong></p><ol start="2"><li>ISO8859-1</li></ol><p>ISO8859-1又称Latin-1</p><p>0~127与ASCII码一样，128-255规定了不同的含义。</p><ol start="3"><li>Windows-1252</li></ol><p>与ISO8859-1基本一样，区别在于128~159.</p><ol start="4"><li>GB2312</li></ol><p>美国和西欧字符用一个字节就够了，但是中文不够。中文的第一个标准就是GB2312。</p><p><strong>GB2312固定使用两个字节表示汉子，这两个字节最高位都是1.</strong></p><ol start="5"><li>GBK</li></ol><p>GBK是建立在GB2312基础上，向下兼容GB2312。GBK增加了14000多个汉字。</p><ol start="6"><li>GB18030</li></ol><p>GB18030向下兼容GBK，增加了55000多个字符。</p><p><strong>ASCII码是基础，使用一个字节表示，最高位为0，其他7位表示128个字符。其他编码都是兼容ASCII码的，最高位使用1来进行区分。</strong></p><h3 id="unicode编码" tabindex="-1"><a class="header-anchor" href="#unicode编码" aria-hidden="true">#</a> Unicode编码</h3><ul><li><p>Unicode给世界上所有的字符都分配了一个唯一的数字编号，这个编号范围从0x000000~0x10FFFF.</p></li><li><p>Unicode本身没有规定怎么把编码对应到二进制，把编号如何对应二进制主要有：</p></li></ul><ol><li>UTF-32 - 使用四个字节</li><li>UTF-16 - 大部分两个字节，少部分四个字节</li><li>UTF-8 - 使用1~4个字节</li></ol><h2 id="char的真正含义" tabindex="-1"><a class="header-anchor" href="#char的真正含义" aria-hidden="true">#</a> char的真正含义</h2><p><strong>Java中进行字符处理的基础是<code>char</code>，Java中的<code>Character</code>，<code>String</code>，<code>StringBuilder</code>的基础都是<code>char</code>。</strong></p><p>为什么字符可以进行算术运算和比较？</p><p>在Java内部进行字符处理时，采用的都是Unicode，具体的编码格式是UTF-16BE。</p><p><strong>char本质是一个固定占用两个字节的无符号正整数，这个正整数对应于Unicode编号，用于表示那个Unicode编号对应的字符。</strong></p><p>注意：</p><ul><li>char只能表示Unicode65536以内的字符，不能表示超出范围的字符。</li></ul><p>因为UTF-16使用两个或者四个字节表示一个字符，Unicode编号范围在65356以内的占两个字节，超出范围占四个字节。</p><ul><li><p>由于char本质是一个整数，所以可以进行整数能做的一些计算，在进行运算时会被看成int</p></li><li><p>输出char的二进制表示</p></li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">char</span> d <span class="token operator">=</span> <span class="token string">&#39;刘&#39;</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">toBinaryString</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// print is 101001000011000</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./.temp/pages/java/programing/binary-and-coding.html.vue?vue&type=template&id=f8a863b8

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/java/programing/binary-and-coding.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const binary_and_coding_html = (__exports__);

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
//# sourceMappingURL=3662.app.js.map