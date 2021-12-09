"use strict";
exports.id = 7591;
exports.ids = [7591];
exports.modules = {

/***/ 63345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-6e21a4b2",
  "path": "/middleware/zookeeper/",
  "title": "ZooKeeper基础",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "middleware/zookeeper/README.md",
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

/***/ 48885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/middleware/zookeeper/index.html.vue?vue&type=template&id=6ee1b199

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="zookeeper基础" tabindex="-1"><a class="header-anchor" href="#zookeeper基础" aria-hidden="true">#</a> ZooKeeper基础</h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Zookeeper是一个开源<code>分布式</code>协调服务，分布式数据一致性解决方案。</p></div><p>基于Zookeeper可实现命名服务，集群管理，Master选举，分布式锁。</p><p>应用场景：</p><ul><li>分布式锁</li><li>选举</li><li>组成员管理</li><li>master-worker协同服务（zk的watch机制）</li><li>分布式队列（临时有序节点）</li></ul><p>文件系统数据模型</p><p>znode类型；</p><ul><li>持久性的znode 宕机不会丢失</li><li>临时性的znode 客户端丢了就会释放</li><li>持久循序性的znode</li><li>临时顺序性的znode</li></ul><p>watch机制:关心数据注册watch，不需要客户端不断轮训</p><p>分布式锁：</p><p>避免羊群效应：1号释放锁，2号获得锁，3号watch2号</p><p>注册和发现</p><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/middleware/zookeeper/index.html.vue

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
//# sourceMappingURL=7591.app.js.map