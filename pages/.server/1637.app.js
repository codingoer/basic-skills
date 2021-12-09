"use strict";
exports.id = 1637;
exports.ids = [1637];
exports.modules = {

/***/ 46601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-0fd9115a",
  "path": "/database/mongodb/mongo-shell.html",
  "title": "Mongo Shell",
  "lang": "zh-CN",
  "frontmatter": {
    "sidebar": "auto"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "使用mongo Shell 连接 MongoDB",
      "slug": "使用mongo-shell-连接-mongodb",
      "children": [
        {
          "level": 3,
          "title": "准备工作",
          "slug": "准备工作",
          "children": []
        },
        {
          "level": 3,
          "title": "连接本地默认端口的MongoDB实例",
          "slug": "连接本地默认端口的mongodb实例",
          "children": []
        },
        {
          "level": 3,
          "title": "连接本地非默认端口的MongoDB实例",
          "slug": "连接本地非默认端口的mongodb实例",
          "children": []
        },
        {
          "level": 3,
          "title": "链接远端服务器上的MongoDB实例",
          "slug": "链接远端服务器上的mongodb实例",
          "children": []
        },
        {
          "level": 3,
          "title": "需要授权的MongoDB实例",
          "slug": "需要授权的mongodb实例",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "使用mongo shell工作",
      "slug": "使用mongo-shell工作",
      "children": [
        {
          "level": 3,
          "title": "操作数据库",
          "slug": "操作数据库",
          "children": []
        },
        {
          "level": 3,
          "title": "格式化输出结果",
          "slug": "格式化输出结果",
          "children": []
        },
        {
          "level": 3,
          "title": "",
          "slug": "",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "database/mongodb/mongo-shell.md",
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

/***/ 19245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ mongo_shell_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/database/mongodb/mongo-shell.html.vue?vue&type=template&id=439964ea

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="mongo-shell" tabindex="-1"><a class="header-anchor" href="#mongo-shell" aria-hidden="true">#</a> Mongo Shell</h1><p><strong>mongo shell</strong> 就是和MongoDB交互的JavaScript脚本，可以使用mongo shell查询或者更新数据。一旦安装并且启动了MongoDB，mongo shell就会连接到MongoDB实例。</p><h2 id="使用mongo-shell-连接-mongodb" tabindex="-1"><a class="header-anchor" href="#使用mongo-shell-连接-mongodb" aria-hidden="true">#</a> 使用mongo Shell 连接 MongoDB</h2><h3 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h3><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>在开始运行mongo shell之前，确认MongoDB正在运行</p></div><p>打开终端然后进入<code>mongodb</code>安装目录下的<code>bin</code>目录</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token operator">&lt;</span>mongodb installation dir<span class="token operator">&gt;</span>/bin
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>将mongodb安装目录下的bin路径添加在环境变量中，就可以直接使用<code>mongo</code>，而不需要先进入安装路径下的bin目录</p></div><h3 id="连接本地默认端口的mongodb实例" tabindex="-1"><a class="header-anchor" href="#连接本地默认端口的mongodb实例" aria-hidden="true">#</a> 连接本地默认端口的MongoDB实例</h3><p>直接使用<code>mongo</code>shell连接<code>localhost</code>上默认端口<code>27017</code>的mongo实例</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mongo
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="连接本地非默认端口的mongodb实例" tabindex="-1"><a class="header-anchor" href="#连接本地非默认端口的mongodb实例" aria-hidden="true">#</a> 连接本地非默认端口的MongoDB实例</h3><p>如果明确指定了端口号，在使用<code>mongo</code>时就加上<code>--port</code>选项，举个栗子，链接端口号为28015的MongoDB实例</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mongo --port <span class="token number">28015</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="链接远端服务器上的mongodb实例" tabindex="-1"><a class="header-anchor" href="#链接远端服务器上的mongodb实例" aria-hidden="true">#</a> 链接远端服务器上的MongoDB实例</h3><p>通过<code>连接字符串</code>连接远程机器上的MongoDB实例</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mongo mongodb://172.16.100.115:27017
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>通过命令行选项<code>--host &lt;host&gt;:&lt;port&gt;</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mongo --host <span class="token number">172.16</span>.100.115:27017
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>通过命令行选项<code>--host &lt;host&gt;</code>和<code>--port &lt;port&gt;</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mongo --host <span class="token number">172.16</span>.100.115 --port <span class="token number">27017</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="需要授权的mongodb实例" tabindex="-1"><a class="header-anchor" href="#需要授权的mongodb实例" aria-hidden="true">#</a> 需要授权的MongoDB实例</h3><h2 id="使用mongo-shell工作" tabindex="-1"><a class="header-anchor" href="#使用mongo-shell工作" aria-hidden="true">#</a> 使用mongo shell工作</h2><h3 id="操作数据库" tabindex="-1"><a class="header-anchor" href="#操作数据库" aria-hidden="true">#</a> 操作数据库</h3><p>显示当前你正在操作的数据库</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>db
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>显示当前用户下所有可使用数据库</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>show dbs
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>切换数据库</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>use <span class="token operator">&lt;</span>database<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="格式化输出结果" tabindex="-1"><a class="header-anchor" href="#格式化输出结果" aria-hidden="true">#</a> 格式化输出结果</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>db.getCollection<span class="token punctuation">(</span><span class="token string">&#39;transportVerifyConfig&#39;</span><span class="token punctuation">)</span>.find<span class="token punctuation">(</span><span class="token punctuation">)</span>.pretty<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h3><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/database/mongodb/mongo-shell.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const mongo_shell_html = (__exports__);

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
//# sourceMappingURL=1637.app.js.map