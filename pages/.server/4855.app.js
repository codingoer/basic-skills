"use strict";
exports.id = 4855;
exports.ids = [4855];
exports.modules = {

/***/ 39395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-2921a50f",
  "path": "/database/redis/",
  "title": "Redis缓存",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Redis",
      "slug": "redis",
      "children": []
    }
  ],
  "filePathRelative": "database/redis/README.md",
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

/***/ 76157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/database/redis/index.html.vue?vue&type=template&id=133df758

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><p>Features</p><ul><li>open source</li><li>in-memory data structure store</li></ul><p>Used</p><ul><li>database</li><li>cache</li><li>message broker</li></ul><p>data structures</p><ul><li>strings</li><li>hashes</li><li>lists</li><li>set</li><li>zset</li></ul><p>Install Redis From Source</p><ul><li>sudo tar -zxvf redis-5.0.3.tar.gz -C /usr/local</li><li>cd redis-5.0.3/</li><li>make</li><li>make test</li><li>make install</li></ul><p>redis-cli -h 10.144.62.3 -p 30000</p><h1 id="redis缓存" tabindex="-1"><a class="header-anchor" href="#redis缓存" aria-hidden="true">#</a> Redis缓存</h1><p>可以用来做重复校验</p><h2 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h2><p>命令</p><ol><li>查看key GET crawler-server-90b9e52ed7262beadb5ad5fa97e3daab</li><li>exists EXISTS crawler-server-90b9e52ed7262beadb5ad5fa97e3daab</li><li>DEL DEL crawler-server-90b9e52ed7262beadb5ad5fa97e3daab</li></ol><p>不可以存outputStream，要存byte[]数组</p><p>redis的三种模式</p><ul><li>主从复制</li><li>哨兵模式</li><li>redis-cluster集群</li></ul><p><code>redis-cli</code>命令行</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>redis-cli -h <span class="token number">172.16</span>.100.100 -p <span class="token number">6379</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>出现错误提示，(error) MOVED 9331 172.16.100.101:6379，是没有用集群方式登录</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>redis-cli -c -h <span class="token number">172.16</span>.100.100 -p <span class="token number">6379</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>出现错误提示，(error) NOAUTH Authentication required，需要密码</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>AUTH redis123
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><p>数据结构</p></li><li><p>底层数据实现</p></li><li><p>部署方式</p></li><li><p>缓存</p><ul><li>缓存异常</li><li>旁路缓存</li></ul></li><li><p>并发</p><ul><li>原子操作</li><li>分布式锁</li></ul></li><li><p>源码</p></li></ul><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/database/redis/index.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const index_html = (__exports__);

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
//# sourceMappingURL=4855.app.js.map