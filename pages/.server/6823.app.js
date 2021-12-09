"use strict";
exports.id = 6823;
exports.ids = [6823];
exports.modules = {

/***/ 93077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-07fc6706",
  "path": "/java/oop/class-compound.html",
  "title": "类的组合",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "内存分布",
      "slug": "内存分布",
      "children": []
    },
    {
      "level": 2,
      "title": "类加载和执行顺序",
      "slug": "类加载和执行顺序",
      "children": []
    },
    {
      "level": 2,
      "title": "引用自己",
      "slug": "引用自己",
      "children": []
    },
    {
      "level": 2,
      "title": "类中包含对象",
      "slug": "类中包含对象",
      "children": []
    }
  ],
  "filePathRelative": "java/oop/class-compound.md",
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

/***/ 88567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ class_compound_html)
});

// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/java/oop/class-compound.html.vue?vue&type=template&id=a838790c


function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="类的组合" tabindex="-1"><a class="header-anchor" href="#类的组合" aria-hidden="true">#</a> 类的组合</h1><h2 id="内存分布" tabindex="-1"><a class="header-anchor" href="#内存分布" aria-hidden="true">#</a> 内存分布</h2><p><code>Line</code>的连个实例成员都是引用类型，引用实际的<code>Point</code></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Point</span> start <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Point</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Point</span> end <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Point</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Line</span> line <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Line</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>line<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>内存分布如下</p><p><strong>栈</strong></p><table><thead><tr><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">名称</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">地址</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">内容</th></tr></thead><tbody><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">start</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">0x8000</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">0x1000</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">end</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">0x8008</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">0x1008</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">line</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">0x8010</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">0x1010</td></tr></tbody></table><p><strong>堆</strong></p><table><thead><tr><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">名称</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">地址</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">内容</th></tr></thead><tbody><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">start.x</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">0x1000</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">2</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">start.y</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">0x1004</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">3</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">end.x</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">0x1008</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">3</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">end.y</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">0x100C</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">4</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">line.start</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">0x1010</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">0x1000</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">line.end</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">0x1014</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">0x1008</td></tr></tbody></table><p>start，end，line三个引用类型变量分配在栈中，保存的是实际的地址。实际内容保存在堆中，<strong>line的两个实例变量start和end还是引用，同样保存的实际内容的地址。</strong></p><h2 id="类加载和执行顺序" tabindex="-1"><a class="header-anchor" href="#类加载和执行顺序" aria-hidden="true">#</a> 类加载和执行顺序</h2><ol><li>Point静态初始化代码块</li><li>Point初始化代码块</li><li>Point构造方法</li><li>Point初始化代码块</li><li>Point构造方法</li><li>Line静态初始化代码块</li><li>Line初始化代码块</li><li>Line构造方法</li></ol><h2 id="引用自己" tabindex="-1"><a class="header-anchor" href="#引用自己" aria-hidden="true">#</a> 引用自己</h2><p>定义一个<code>Person</code>类</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Person</span> father<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Person</span> mother<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Person</span><span class="token punctuation">[</span><span class="token punctuation">]</span> children<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>测试代码</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Person</span> father <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;father&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Person</span> son <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;son&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    son<span class="token punctuation">.</span><span class="token function">setFather</span><span class="token punctuation">(</span>father<span class="token punctuation">)</span><span class="token punctuation">;</span>
    father<span class="token punctuation">.</span><span class="token function">setChildren</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>son<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>son<span class="token punctuation">.</span><span class="token function">getFather</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>内存分布和上面基本一样，注意数组那块</p><p><strong>栈</strong></p><table><thead><tr><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">名称</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">地址</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">内容</th></tr></thead><tbody><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">son</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">0x8000</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">0x1000</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">father</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">0x8008</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">0x1010</td></tr></tbody></table><p><strong>堆</strong></p><table><thead><tr><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">名称</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">地址</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">内容</th></tr></thead><tbody><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">son.name</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">0x1000</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">son</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">son.father</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">0x1004</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">0x1010</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">son.mother</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">0x1008</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">null</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">son.children</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">0x100C</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">null</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">father.name</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">0x1010</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">father</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">father.father</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">0x1014</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">null</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">father.mother</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">0x1018</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">null</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">father.children</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">0x101C</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">0x1020</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">father.children[0]</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">0x1020</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"left"})
  }">0x1000</td></tr></tbody></table><h2 id="类中包含对象" tabindex="-1"><a class="header-anchor" href="#类中包含对象" aria-hidden="true">#</a> 类中包含对象</h2><p>定义了一个<code>ShapeManager</code>类，包含<code>Shape</code>对象</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ShapeManager</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">Shape</span> shape <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Shape</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//private Shape shape;</span>

    <span class="token keyword">private</span> <span class="token class-name">Shape</span><span class="token punctuation">[</span><span class="token punctuation">]</span> shapes <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Shape</span><span class="token punctuation">[</span>MAX_NUM<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>测试类</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">ShapeManager</span> manager <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ShapeManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>代码执行顺序</p><ol><li>ShapeManager静态初始化代码块</li><li>Shape静态初始化代码块</li><li>Shape初始化代码块</li><li>Shape构造方法</li><li>ShapeManager初始化代码块</li><li>ShapeManager构造方法</li></ol><p>先加载<code>ShapeManager</code>类，然后加载<code>Shape</code>类，<strong>注意的是，先执行<code>Shape</code>的初始化操作，后执行<code>ShapeManager</code>的初始化操作</strong>。</p><p>需要注意的是，类中如果只含有对象数组，代码的执行顺序</p><ol><li>ShapeManager静态初始化代码块</li><li>ShapeManager初始化代码块</li><li>ShapeManager构造方法</li></ol><p><strong>如果一个类中创建了一个对象数组，这个对象的类并没有被加载，也没有被初始化。这是为什么？</strong></p><p><strong>如果一类中只声明了一个对象的引用，这个对象的类不加载，这个对象也不会创建。</strong></p><!--]-->`)
}
;// CONCATENATED MODULE: ./.temp/pages/java/oop/class-compound.html.vue?vue&type=template&id=a838790c

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/java/oop/class-compound.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const class_compound_html = (__exports__);

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
//# sourceMappingURL=6823.app.js.map