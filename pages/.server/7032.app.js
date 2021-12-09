"use strict";
exports.id = 7032;
exports.ids = [7032];
exports.modules = {

/***/ 49620:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-70bc2959",
  "path": "/algorithm/",
  "title": "算法 - Algorithm",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "算法的定义",
      "slug": "算法的定义",
      "children": []
    },
    {
      "level": 2,
      "title": "衡量算法的指标",
      "slug": "衡量算法的指标",
      "children": []
    },
    {
      "level": 2,
      "title": "算法的分类",
      "slug": "算法的分类",
      "children": [
        {
          "level": 3,
          "title": "排序算法",
          "slug": "排序算法",
          "children": []
        },
        {
          "level": 3,
          "title": "穷举法",
          "slug": "穷举法",
          "children": []
        },
        {
          "level": 3,
          "title": "回溯，搜索",
          "slug": "回溯-搜索",
          "children": []
        },
        {
          "level": 3,
          "title": "递归分治",
          "slug": "递归分治",
          "children": []
        },
        {
          "level": 3,
          "title": "贪心法",
          "slug": "贪心法",
          "children": []
        },
        {
          "level": 3,
          "title": "动态规划",
          "slug": "动态规划",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "algorithm/README.md",
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

/***/ 59893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(21666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/algorithm/index.html.vue?vue&type=template&id=c0a79856



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TOC = (0,external_vue_.resolveComponent)("TOC")

  _push(`<!--[--><h1 id="算法-algorithm" tabindex="-1"><a class="header-anchor" href="#算法-algorithm" aria-hidden="true">#</a> 算法 - Algorithm</h1>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_TOC, null, null, _parent))
  _push(`<h2 id="算法的定义" tabindex="-1"><a class="header-anchor" href="#算法的定义" aria-hidden="true">#</a> 算法的定义</h2><p>::: theorem 算法的定义 计算机的问题是一个函数，把一定的输入数据映射到相应的输出结果，这个映射的过程就是算法。 :::</p><h2 id="衡量算法的指标" tabindex="-1"><a class="header-anchor" href="#衡量算法的指标" aria-hidden="true">#</a> 衡量算法的指标</h2><ul><li>空间复杂度</li></ul><p>根据算法写成的程序在执行时<strong>占用存储单元的长度</strong>。这个长度往往与输入数据的规模有关。</p><ul><li>时间复杂度</li></ul><p>根据算法写成的程序在执行时<strong>耗费时间的长度</strong>。这个长度往往与输入数据的规模有关。</p><p><strong>不同函数的复杂度</strong></p><table><thead><tr><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">函数</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">1</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">2</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">4</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">8</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">16</th><th style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">32</th></tr></thead><tbody><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }"><strong>1</strong></td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">1</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">1</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">1</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">1</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">1</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">1</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }"><strong>log n</strong></td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">0</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">1</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">2</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">3</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">4</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">5</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }"><strong>n</strong></td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">1</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">2</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">4</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">8</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">16</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">32</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }"><strong>n log n</strong></td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">0</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">2</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">8</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">24</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">64</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">160</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }"><strong>n²</strong></td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">1</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">4</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">16</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">64</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">256</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">1024</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }"><strong>n³</strong></td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">1</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">8</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">64</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">512</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">4096</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">32768</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }"><strong>2ⁿ</strong></td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">2</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">4</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">16</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">256</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">65536</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">4294967296</td></tr><tr><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }"><strong>n!</strong></td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">1</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">2</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">24</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">40326</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">....</td><td style="${
    (0,server_renderer.ssrRenderStyle)({"text-align":"center"})
  }">26313×10³³</td></tr></tbody></table><p><strong>不同函数的增长率</strong></p><p><img src="https://image.hualihai.cn/blog/5ba6d41ec00441388521b0dd4c6e9889" alt="函数增长率"></p><h2 id="算法的分类" tabindex="-1"><a class="header-anchor" href="#算法的分类" aria-hidden="true">#</a> 算法的分类</h2><h3 id="排序算法" tabindex="-1"><a class="header-anchor" href="#排序算法" aria-hidden="true">#</a> 排序算法</h3><ul><li>冒泡排序</li><li>选择排序</li></ul><h3 id="穷举法" tabindex="-1"><a class="header-anchor" href="#穷举法" aria-hidden="true">#</a> 穷举法</h3><h3 id="回溯-搜索" tabindex="-1"><a class="header-anchor" href="#回溯-搜索" aria-hidden="true">#</a> 回溯，搜索</h3><h3 id="递归分治" tabindex="-1"><a class="header-anchor" href="#递归分治" aria-hidden="true">#</a> 递归分治</h3><h3 id="贪心法" tabindex="-1"><a class="header-anchor" href="#贪心法" aria-hidden="true">#</a> 贪心法</h3><h3 id="动态规划" tabindex="-1"><a class="header-anchor" href="#动态规划" aria-hidden="true">#</a> 动态规划</h3><p>https://books.halfrost.com/leetcode/</p><!--]-->`)
}
;// CONCATENATED MODULE: ./.temp/pages/algorithm/index.html.vue?vue&type=template&id=c0a79856

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/algorithm/index.html.vue

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
//# sourceMappingURL=7032.app.js.map