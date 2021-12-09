"use strict";
exports.id = 2617;
exports.ids = [2617];
exports.modules = {

/***/ 93542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-fc4f5390",
  "path": "/database/mongodb/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "关于枚举类型保存到MongoDB",
      "slug": "关于枚举类型保存到mongodb",
      "children": []
    },
    {
      "level": 2,
      "title": "MongoDB包下面的组件",
      "slug": "mongodb包下面的组件",
      "children": []
    }
  ],
  "filePathRelative": "database/mongodb/README.md",
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

/***/ 20897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/database/mongodb/index.html.vue?vue&type=template&id=1e188a7a

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><p>如何加索引？</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>db.mapping.ensureIndex({&quot;subscribeStatus&quot;:1})
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-SHELL ext-SHELL line-numbers-mode"><pre class="language-SHELL"><code>mongo 172.16.100.115:27017  

show dbs  

use logistics  

show tables  

db.mapping.getIndexes()

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>The mongo shell 远程链接服务器上的数据库</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mongo <span class="token number">172.16</span>.100.115:27017
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>在 MongoDB 中，你不需要创建集合。当你插入一些文档时，MongoDB 会自动创建集合。</p><ul><li>自动创建集合</li><li>字段也可以不一样</li></ul><p>为什么会把对象序列化进去。</p><p>索引的创建</p><h2 id="关于枚举类型保存到mongodb" tabindex="-1"><a class="header-anchor" href="#关于枚举类型保存到mongodb" aria-hidden="true">#</a> 关于枚举类型保存到MongoDB</h2><p>String也可以保存到记录中。</p><p>mongodb中的类型？</p><h2 id="mongodb包下面的组件" tabindex="-1"><a class="header-anchor" href="#mongodb包下面的组件" aria-hidden="true">#</a> MongoDB包下面的组件</h2><p>MongoDB4.0加入了事务</p><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/database/mongodb/index.html.vue

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
//# sourceMappingURL=2617.app.js.map