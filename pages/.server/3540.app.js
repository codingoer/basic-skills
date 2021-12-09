"use strict";
exports.id = 3540;
exports.ids = [3540];
exports.modules = {

/***/ 95534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-4b624463",
  "path": "/networking/http/cross-domain.html",
  "title": "跨域",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "跨域是怎么产生的",
      "slug": "跨域是怎么产生的",
      "children": []
    },
    {
      "level": 2,
      "title": "浏览器同源策略",
      "slug": "浏览器同源策略",
      "children": []
    },
    {
      "level": 2,
      "title": "跨域发生在什么场景",
      "slug": "跨域发生在什么场景",
      "children": []
    },
    {
      "level": 2,
      "title": "有哪些办法可以解决",
      "slug": "有哪些办法可以解决",
      "children": [
        {
          "level": 3,
          "title": "JSONP",
          "slug": "jsonp",
          "children": []
        },
        {
          "level": 3,
          "title": "CORS",
          "slug": "cors",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "networking/http/cross-domain.md",
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

/***/ 56970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ cross_domain_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/networking/http/cross-domain.html.vue?vue&type=template&id=07a11f32

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="跨域" tabindex="-1"><a class="header-anchor" href="#跨域" aria-hidden="true">#</a> 跨域</h1><p>什么事跨域</p><p>为什么会出现跨域</p><p>浏览器同源策略</p><p>使用jsonp跨域？</p><p>哪些静态资源是不跨域的</p><p>https://m.1haitao.com/app/buy/activity/694377 换成http就跨域了？？？？可能原因：http协议不支持CORS，只有https支持CORS</p><h2 id="跨域是怎么产生的" tabindex="-1"><a class="header-anchor" href="#跨域是怎么产生的" aria-hidden="true">#</a> 跨域是怎么产生的</h2><p>由浏览器的同源策略造成的 浏览器执行javascript脚本时，会检查这个脚本属于哪个页面，如果不是同源页面，就不会被执行。</p><h2 id="浏览器同源策略" tabindex="-1"><a class="header-anchor" href="#浏览器同源策略" aria-hidden="true">#</a> 浏览器同源策略</h2><p>浏览器安全的基石是&quot;同源政策&quot;</p><p>所谓同源是指，<code>域名</code>，<code>协议</code>，<code>端口</code>均相同，不同的话就是跨域</p><ul><li><p>域名： 主域名不同，跨域，http://www.hualihai.cn 调用 http://www.1haitao.com 子域名不同，跨域，http://m.1haitao.com 调用 http://www.1haitao.com</p></li><li><p>端口 端口不同，跨域</p></li><li><p>协议 http://www.1haitao.com 调用 https://www.1haitao.com</p></li></ul><p>非同源带来的影响</p><ol><li>不能发送AJax请求</li><li>Cookie不能获取</li></ol><h2 id="跨域发生在什么场景" tabindex="-1"><a class="header-anchor" href="#跨域发生在什么场景" aria-hidden="true">#</a> 跨域发生在什么场景</h2><h2 id="有哪些办法可以解决" tabindex="-1"><a class="header-anchor" href="#有哪些办法可以解决" aria-hidden="true">#</a> 有哪些办法可以解决</h2><h3 id="jsonp" tabindex="-1"><a class="header-anchor" href="#jsonp" aria-hidden="true">#</a> JSONP</h3><h3 id="cors" tabindex="-1"><a class="header-anchor" href="#cors" aria-hidden="true">#</a> CORS</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token class-name">String</span> origin <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getHeader</span><span class="token punctuation">(</span><span class="token string">&quot;origin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isNotBlank</span><span class="token punctuation">(</span>origin<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Origin&quot;</span><span class="token punctuation">,</span> origin<span class="token punctuation">)</span><span class="token punctuation">;</span>
        response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Methods&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;GET,POST,OPTIONS&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/networking/http/cross-domain.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const cross_domain_html = (__exports__);

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
//# sourceMappingURL=3540.app.js.map