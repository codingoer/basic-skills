"use strict";
exports.id = 3537;
exports.ids = [3537];
exports.modules = {

/***/ 85499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-c2c981b4",
  "path": "/specification/markdown/gfm.html",
  "title": "GitHub Flavored Markdown",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Fenced code blocks",
      "slug": "fenced-code-blocks",
      "children": []
    },
    {
      "level": 2,
      "title": "Syntax highlighting",
      "slug": "syntax-highlighting",
      "children": []
    },
    {
      "level": 2,
      "title": "Task Lists",
      "slug": "task-lists",
      "children": []
    },
    {
      "level": 2,
      "title": "Tables",
      "slug": "tables",
      "children": []
    },
    {
      "level": 2,
      "title": "Strikethrough",
      "slug": "strikethrough",
      "children": []
    },
    {
      "level": 2,
      "title": "URL autolinking",
      "slug": "url-autolinking",
      "children": []
    },
    {
      "level": 2,
      "title": "Emoji",
      "slug": "emoji",
      "children": []
    },
    {
      "level": 2,
      "title": "GitHub Flavored Markdown Spec",
      "slug": "github-flavored-markdown-spec",
      "children": []
    }
  ],
  "filePathRelative": "specification/markdown/gfm.md",
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

/***/ 18608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ gfm_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(21666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/specification/markdown/gfm.html.vue?vue&type=template&id=16dc5cc6



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="github-flavored-markdown" tabindex="-1"><a class="header-anchor" href="#github-flavored-markdown" aria-hidden="true">#</a> GitHub Flavored Markdown</h1><p>GitHub Flavored Markdown, often shortened as GFM, is the dialect of Markdown that is currently supported for user content on GitHub.com and GitHub Enterprise.</p><p><strong>GitHub.com</strong> 使用自己的版本的Markdown语法,提供了一组额外的有用的功能.</p><p>相关文档</p><ul><li><a href="https://github.github.com/gfm/" target="_blank" rel="noopener noreferrer">GitHub Flavored Markdown Spec`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://docs.github.com/en/free-pro-team@latest/github/writing-on-github" target="_blank" rel="noopener noreferrer">Writing on GitHub`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://guides.github.com/features/mastering-markdown/" target="_blank" rel="noopener noreferrer">Mastering Markdown`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://docs.github.com/enterprise/11.10.340/user/articles/github-flavored-markdown" target="_blank" rel="noopener noreferrer">GitHub Flavored Markdown`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul><h2 id="fenced-code-blocks" tabindex="-1"><a class="header-anchor" href="#fenced-code-blocks" aria-hidden="true">#</a> Fenced code blocks</h2><p>使用 <strong>\`\`\`</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fancyAlert</span><span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    \$<span class="token punctuation">.</span><span class="token function">facebox</span><span class="token punctuation">(</span><span class="token punctuation">{</span>div<span class="token operator">:</span><span class="token string">&#39;#foo&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="syntax-highlighting" tabindex="-1"><a class="header-anchor" href="#syntax-highlighting" aria-hidden="true">#</a> Syntax highlighting</h2><div class="language-ruby ext-rb line-numbers-mode"><pre class="language-ruby"><code><span class="token keyword">require</span> <span class="token string">&#39;redcarpet&#39;</span>
markdown <span class="token operator">=</span> <span class="token constant">Redcarpet</span><span class="token punctuation">.</span><span class="token keyword">new</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">)</span>
puts markdown<span class="token punctuation">.</span>to_html
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="task-lists" tabindex="-1"><a class="header-anchor" href="#task-lists" aria-hidden="true">#</a> Task Lists</h2><ul><li>[x] @mentions, #refs, <a href="">links</a>, <strong>formatting</strong>, and <del>tags</del> supported</li><li>[x] list syntax required (any unordered or ordered list supported)</li><li>[x] this is a complete item</li><li>[ ] this is an incomplete item</li></ul><h2 id="tables" tabindex="-1"><a class="header-anchor" href="#tables" aria-hidden="true">#</a> Tables</h2><ul><li>left-aligned :------------</li><li>right-aligned ------------:</li><li>center-aligned :------------:</li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token table"><span class="token table-header-row"><span class="token table-header important">First Header </span><span class="token punctuation">|</span><span class="token table-header important"> Second Header</span>
</span><span class="token table-line"><span class="token punctuation">:------------</span> <span class="token punctuation">|</span> <span class="token punctuation">:-------------</span>
</span><span class="token table-data-rows"><span class="token table-data">Content from cell 1 </span><span class="token punctuation">|</span><span class="token table-data"> Content from cell 2</span>
<span class="token table-data">Content in the first column </span><span class="token punctuation">|</span><span class="token table-data"> Content in the second column</span>
</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><table><thead><tr><th>First Header</th><th>Second Header</th></tr></thead><tbody><tr><td>Content from cell 1</td><td>Content from cell 2</td></tr><tr><td>Content in the first column</td><td>Content in the second column</td></tr></tbody></table><h2 id="strikethrough" tabindex="-1"><a class="header-anchor" href="#strikethrough" aria-hidden="true">#</a> Strikethrough</h2><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token strike"><span class="token punctuation">~~</span><span class="token content">Mistaken text.</span><span class="token punctuation">~~</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><s>Mistaken text.</s></p><h2 id="url-autolinking" tabindex="-1"><a class="header-anchor" href="#url-autolinking" aria-hidden="true">#</a> URL autolinking</h2><p>GFM will autolink standard URLs, so if you want to link to a URL (instead of setting link text), you can simply enter the URL and it will be turned into a link to that URL</p><p>http://www.baidu.com</p><h2 id="emoji" tabindex="-1"><a class="header-anchor" href="#emoji" aria-hidden="true">#</a> Emoji</h2><p>📓 👍</p><h2 id="github-flavored-markdown-spec" tabindex="-1"><a class="header-anchor" href="#github-flavored-markdown-spec" aria-hidden="true">#</a> GitHub Flavored Markdown Spec</h2><p>基于<a href="/commonmark" target="_blank" rel="noopener noreferrer">CommonMark Spec`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>，其中又额外扩展了一些语法，比如</p><ul><li><p><a href="https://github.github.com/gfm/#tables-extension-" target="_blank" rel="noopener noreferrer">Tables`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p></li><li><p><a href="https://github.github.com/gfm/#task-list-items-extension-" target="_blank" rel="noopener noreferrer">Task list items`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p></li><li><p><a href="https://github.github.com/gfm/#strikethrough-extension-" target="_blank" rel="noopener noreferrer">Strikethrough`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p></li><li><p><a href="https://github.github.com/gfm/#autolinks-extension-" target="_blank" rel="noopener noreferrer">Autolinks`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p></li></ul><!--]-->`)
}
;// CONCATENATED MODULE: ./.temp/pages/specification/markdown/gfm.html.vue?vue&type=template&id=16dc5cc6

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/specification/markdown/gfm.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const gfm_html = (__exports__);

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
//# sourceMappingURL=3537.app.js.map