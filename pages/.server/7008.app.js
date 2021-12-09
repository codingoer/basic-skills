"use strict";
exports.id = 7008;
exports.ids = [7008];
exports.modules = {

/***/ 93353:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-77b5c48a",
  "path": "/tools/github-authenticating.html",
  "title": "Authenticating to GitHub",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Connecting to GitHub with SSH",
      "slug": "connecting-to-github-with-ssh",
      "children": [
        {
          "level": 3,
          "title": "创建SSH",
          "slug": "创建ssh",
          "children": []
        },
        {
          "level": 3,
          "title": "将SSH Key添加到ssh-agent",
          "slug": "将ssh-key添加到ssh-agent",
          "children": []
        },
        {
          "level": 3,
          "title": "测试SSH连接",
          "slug": "测试ssh连接",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Troubleshooting commit signature verification",
      "slug": "troubleshooting-commit-signature-verification",
      "children": [
        {
          "level": 3,
          "title": "提交代码后GitHub没有统计",
          "slug": "提交代码后github没有统计",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "tools/github-authenticating.md",
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

/***/ 3191:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ github_authenticating_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(21666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/tools/github-authenticating.html.vue?vue&type=template&id=673fea04



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="authenticating-to-github" tabindex="-1"><a class="header-anchor" href="#authenticating-to-github" aria-hidden="true">#</a> Authenticating to GitHub</h1><p><a href="https://docs.github.com/en/github/authenticating-to-github" target="_blank" rel="noopener noreferrer">官方文档地址`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><h2 id="connecting-to-github-with-ssh" tabindex="-1"><a class="header-anchor" href="#connecting-to-github-with-ssh" aria-hidden="true">#</a> Connecting to GitHub with SSH</h2><p><a href="https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh" target="_blank" rel="noopener noreferrer">官方文档地址`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><h3 id="创建ssh" tabindex="-1"><a class="header-anchor" href="#创建ssh" aria-hidden="true">#</a> 创建SSH</h3><ol><li>检查已经存在的SSH Key</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ls</span> -al ~/.ssh
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li>检查路径列表下是否已经存在一个公共的SSH Key</li></ol><ul><li>如果你没有存在的公私秘钥对，或者你不希望使用已存在的去连接GitHub，你可以生成一个新的SSH Key.</li><li>如果你看到了已经存在的公私秘钥对，并且你也想使用它们去连接GitHub，你可以将你的SSH Key导入到ssh-agent中。</li></ul><ol start="3"><li>创建一个新的SSH Key</li></ol><p>复制如下代码，并将邮箱替换成你的GitHub Email</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ssh-keygen -t rsa -b <span class="token number">4096</span> -C <span class="token string">&quot;your_email@example.com&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>这将会使用你提供的email作为标签，创建一个新的SSH Key</p><ol start="4"><li>当你确认“输入文件保存key”，按回车键。将会保存到默认的地址，也可以自定义保存地址：</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>/C/User/Lionel/.github/id_rsa
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="5"><li>在确认的时候输入一个安全口令。</li></ol><h3 id="将ssh-key添加到ssh-agent" tabindex="-1"><a class="header-anchor" href="#将ssh-key添加到ssh-agent" aria-hidden="true">#</a> 将SSH Key添加到ssh-agent</h3><ol><li>确保ssh-agent正在运行</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">eval</span> <span class="token variable"><span class="token variable">\$(</span>ssh-agent -s<span class="token variable">)</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>输出：Agent pid 432</p><ol start="2"><li>添加你的SSH私钥到ssh-agent，输入之前设置的安全口令</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ssh-add ~/.github/id_rsa
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>检查你的私钥添加到ssh-agent：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ssh-add -l
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3"><li>添加SSH Key到你的Github账户</li></ol><h3 id="测试ssh连接" tabindex="-1"><a class="header-anchor" href="#测试ssh连接" aria-hidden="true">#</a> 测试SSH连接</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ssh</span> -T git@github.com
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="troubleshooting-commit-signature-verification" tabindex="-1"><a class="header-anchor" href="#troubleshooting-commit-signature-verification" aria-hidden="true">#</a> Troubleshooting commit signature verification</h2><p><a href="https://docs.github.com/en/github/authenticating-to-github/troubleshooting-commit-signature-verification" target="_blank" rel="noopener noreferrer">文档地址`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><h3 id="提交代码后github没有统计" tabindex="-1"><a class="header-anchor" href="#提交代码后github没有统计" aria-hidden="true">#</a> 提交代码后GitHub没有统计</h3><p><strong>配置的用户名和邮箱不匹配</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config user.name <span class="token string">&quot;Lionel&quot;</span>
<span class="token function">git</span> config user.email <span class="token string">&quot;lionel217920@163.com&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol><li>Rebase之前的提交记录</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> rebase -i HEAD~8
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li>需要修改某一次的提交</li></ol><p>切换至英文输入法, 按下i字母, 即可进入编辑模式, 此时用光标定位到需要修改的那一条记录, <strong>将pick修改成edit</strong></p><ol start="3"><li>重置用户信息</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> commit --amend --reset-author
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="4"><li>继续Rebase</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> rebase --continue
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>当出现 <strong>Successfully rebased and updated refs/heads/master.</strong> 结束</p><ol start="5"><li>强推到master</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> push origin master --force
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./.temp/pages/tools/github-authenticating.html.vue?vue&type=template&id=673fea04

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/tools/github-authenticating.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const github_authenticating_html = (__exports__);

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
//# sourceMappingURL=7008.app.js.map