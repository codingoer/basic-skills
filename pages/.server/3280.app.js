"use strict";
exports.id = 3280;
exports.ids = [3280];
exports.modules = {

/***/ 19718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-2e25198a",
  "path": "/database/",
  "title": "RDBMS",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "适用场景",
      "slug": "适用场景",
      "children": []
    },
    {
      "level": 2,
      "title": "相比RDBMS的优点与缺点",
      "slug": "相比rdbms的优点与缺点",
      "children": []
    },
    {
      "level": 2,
      "title": "通用特性",
      "slug": "通用特性",
      "children": []
    },
    {
      "level": 2,
      "title": "如何正确的选择合适的NoSQL数据库",
      "slug": "如何正确的选择合适的nosql数据库",
      "children": []
    },
    {
      "level": 2,
      "title": "数据库选型",
      "slug": "数据库选型",
      "children": [
        {
          "level": 3,
          "title": "Elasticsearch + MySQL使用场景",
          "slug": "elasticsearch-mysql使用场景",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "MongoDB如何使用",
      "slug": "mongodb如何使用",
      "children": []
    },
    {
      "level": 2,
      "title": "Mysql",
      "slug": "mysql",
      "children": []
    }
  ],
  "filePathRelative": "database/README.md",
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

/***/ 53130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/database/index.html.vue?vue&type=template&id=2d58b266

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><p>数据库相关</p><h1 id="rdbms" tabindex="-1"><a class="header-anchor" href="#rdbms" aria-hidden="true">#</a> RDBMS</h1><p>Relation DataBase Management System</p><p>保证数据唯一性，唯一索引</p><h1 id="nosql-not-only-sql" tabindex="-1"><a class="header-anchor" href="#nosql-not-only-sql" aria-hidden="true">#</a> NoSQL(Not Only SQL)</h1><p>NoSQL database (called <strong>Not Only SQL</strong> database)</p><p>NOSQL DATABASE TYPE</p><ul><li>Document Databases</li><li>Key-value stores</li></ul><p>2019 Most Popular</p><ul><li>MongoDB</li><li>Cassandra</li><li>Redis</li><li>HBase</li><li>Neo4j</li><li>Amazon DynamoDB</li><li>Memcached</li></ul><h2 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景" aria-hidden="true">#</a> 适用场景</h2><h2 id="相比rdbms的优点与缺点" tabindex="-1"><a class="header-anchor" href="#相比rdbms的优点与缺点" aria-hidden="true">#</a> 相比RDBMS的优点与缺点</h2><h2 id="通用特性" tabindex="-1"><a class="header-anchor" href="#通用特性" aria-hidden="true">#</a> 通用特性</h2><h2 id="如何正确的选择合适的nosql数据库" tabindex="-1"><a class="header-anchor" href="#如何正确的选择合适的nosql数据库" aria-hidden="true">#</a> 如何正确的选择合适的NoSQL数据库</h2><p>达到多少QPS上集群?????</p><h2 id="数据库选型" tabindex="-1"><a class="header-anchor" href="#数据库选型" aria-hidden="true">#</a> 数据库选型</h2><h3 id="elasticsearch-mysql使用场景" tabindex="-1"><a class="header-anchor" href="#elasticsearch-mysql使用场景" aria-hidden="true">#</a> Elasticsearch + MySQL使用场景</h3><p>在数据量很大或者需要<code>全文检索</code>，在商品库中使用了<code>MySQL + Canal + Elasticsearch</code></p><blockquote><p>ES不支持事务，要先加一层关系型数据库。在涉及多表操作时无法保证事务的一致性。</p></blockquote><blockquote><p>ES不支持自增(MySQL的累加操作)，涉及这类的操作要先经过MySQL，再做cannal监听同步至ES。</p></blockquote><h2 id="mongodb如何使用" tabindex="-1"><a class="header-anchor" href="#mongodb如何使用" aria-hidden="true">#</a> MongoDB如何使用</h2><p>!&gt; 重要的数据用<code>MySQL</code>，不太重要的数据（丢失一条无所谓的数据，比如日志）</p><ol><li>MongoDB适合存数据量大的数据？那和es相比的好处？</li></ol><h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> Mysql</h2><p>可以使用<code>goodsId</code>作为数据库主键，少一个索引，少占用空间。因为索引是要<code>占用磁盘空间</code>的。</p><p>如何查看磁盘IO使用情况？</p><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/database/index.html.vue

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
//# sourceMappingURL=3280.app.js.map