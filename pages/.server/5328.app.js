"use strict";
exports.id = 5328;
exports.ids = [5328];
exports.modules = {

/***/ 76400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-e9c8a07a",
  "path": "/database/mongodb/introuction.html",
  "title": "前言",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "文档结构",
      "slug": "文档结构",
      "children": []
    },
    {
      "level": 2,
      "title": "点标记",
      "slug": "点标记",
      "children": []
    },
    {
      "level": 2,
      "title": "特定BSON类型",
      "slug": "特定bson类型",
      "children": [
        {
          "level": 3,
          "title": "ObjectId",
          "slug": "objectid",
          "children": []
        },
        {
          "level": 3,
          "title": "String",
          "slug": "string",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "database/mongodb/introuction.md",
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

/***/ 34084:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ introuction_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/database/mongodb/introuction.html.vue?vue&type=template&id=2a7fa298

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h1><p>  MongoDB是一个免费开源的<code>文档型</code>数据库，它是典型的<code>NoSQL</code>数据库，因为它不依赖传统的基于表的关系数据结构，相反它使用动态架构的类似<code>JSON</code>的文档。不像关系型数据库，MongoDB不需要提前定义好模型，在你往数据库中添加数据之前。你可以在任何时候修改表结构，也不需要每次修改表结构够设置新的数据库。</p><h1 id="文档型数据库" tabindex="-1"><a class="header-anchor" href="#文档型数据库" aria-hidden="true">#</a> 文档型数据库</h1><p>在MongoDB中的记录就是一个文档，该文档是由键值对组成的数据结构。MongoDB很像<code>JSON</code>对象，这些键值对的值可以包含其他的文档，数据，或者数组文档。</p><p>使用文档型数据库的优点：</p><ul><li>在许多编程语言中文档符合原生的数据类型</li><li>嵌入式的文档或者数组可以减少高价的链接查询</li><li>动态的模式支持流畅的多态性</li></ul><h1 id="文档" tabindex="-1"><a class="header-anchor" href="#文档" aria-hidden="true">#</a> 文档</h1><p>MongoDB将记录存储为BSON文档。BSON是JSON文档的二进制表现形式，尽管它比JSON包含更多的数据类型。</p><h2 id="文档结构" tabindex="-1"><a class="header-anchor" href="#文档结构" aria-hidden="true">#</a> 文档结构</h2><p>MongoDB文档是由键值对组成。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
   field1: value1,
   field2: value2,
   field3: value3,
   ...
   fieldN: valueN
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>字段名称</strong></p><p>字段名是<code>String</code><br> 对于字段名称，MongoDB文档有如下约束：</p><ol><li><code>_id</code>是保留的被用来当做主键，它的值必须是唯一的，不变的。</li><li>字段名称不能包含<code>null</code></li><li>字段名称不能以<code>\$</code>符号开始</li></ol><p>虽然BSON文档可以有不止一个相同的字段名，但是用结构表示MongoDB不支持重复的字段名。</p><p><strong>字段值</strong></p><p>字段的值可以是任何<code>BSON</code>的数据类型，包括其他的文档，数组，文档数组。</p><h2 id="点标记" tabindex="-1"><a class="header-anchor" href="#点标记" aria-hidden="true">#</a> 点标记</h2><h1 id="bson" tabindex="-1"><a class="header-anchor" href="#bson" aria-hidden="true">#</a> BSON</h1><p><code>BSON</code>是一种二进制序列化格式, 用于在MongoDB中存储文档和进行远程过程调用。</p><p>每一个BSON类型都有一个integer和string作为唯一标识。</p><h2 id="特定bson类型" tabindex="-1"><a class="header-anchor" href="#特定bson类型" aria-hidden="true">#</a> 特定BSON类型</h2><h3 id="objectid" tabindex="-1"><a class="header-anchor" href="#objectid" aria-hidden="true">#</a> ObjectId</h3><p>ObjectId是唯一的，快速生成，可以排序。ObjectId有12个字节</p><ul><li>前四个字节是时间戳</li><li>然后五个字节是随机数</li><li>最后三个字节是计数器</li></ul><p>在MongoDB中，每一个存在集合中的文档需要一个唯一的<code>_id</code>字段作为<code>主键</code>。如果一个插入的文档没有<code>_id</code>字段，MongoDB驱动会自动生成一个<code>ObjectId</code>当做<code>_id</code>字段。</p><p>MongoDB客户端应添加具有唯一<code>ObjectId</code>的<code>_id</code>字段。使用ObjectId当做<code>_id</code>。</p><h3 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> String</h3><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/database/mongodb/introuction.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const introuction_html = (__exports__);

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
//# sourceMappingURL=5328.app.js.map