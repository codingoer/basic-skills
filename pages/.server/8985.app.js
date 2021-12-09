"use strict";
exports.id = 8985;
exports.ids = [8985];
exports.modules = {

/***/ 5150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-25b97d4f",
  "path": "/distributed/lock/lock.html",
  "title": "分布式锁",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "和JVM锁的区别",
      "slug": "和jvm锁的区别",
      "children": []
    },
    {
      "level": 2,
      "title": "实现方式",
      "slug": "实现方式",
      "children": []
    },
    {
      "level": 2,
      "title": "使用场景",
      "slug": "使用场景",
      "children": []
    },
    {
      "level": 2,
      "title": "分布式锁+JVM锁的实现",
      "slug": "分布式锁-jvm锁的实现",
      "children": []
    }
  ],
  "filePathRelative": "distributed/lock/lock.md",
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

/***/ 95258:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ lock_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/distributed/lock/lock.html.vue?vue&type=template&id=67a06c52

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="分布式锁" tabindex="-1"><a class="header-anchor" href="#分布式锁" aria-hidden="true">#</a> 分布式锁</h1><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>分布式锁，是控制分布式系统之间同步访问共享资源的一种方式。在分布式系统中，常常需要协调他们的动作。如果不同的系统或是同一个系统的不同主机之间共享了一个或一组资源，那么访问这些资源的时候，往往需要互斥来防止彼此干扰来保证一致性，在这种情况下，便需要使用到分布式锁。</p></div><p>集群情况下，同一系统不同主机共享一个资源，使用分布式锁</p><h2 id="和jvm锁的区别" tabindex="-1"><a class="header-anchor" href="#和jvm锁的区别" aria-hidden="true">#</a> 和JVM锁的区别</h2><h2 id="实现方式" tabindex="-1"><a class="header-anchor" href="#实现方式" aria-hidden="true">#</a> 实现方式</h2><h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h2><h2 id="分布式锁-jvm锁的实现" tabindex="-1"><a class="header-anchor" href="#分布式锁-jvm锁的实现" aria-hidden="true">#</a> 分布式锁+JVM锁的实现</h2><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/distributed/lock/lock.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const lock_html = (__exports__);

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
//# sourceMappingURL=8985.app.js.map