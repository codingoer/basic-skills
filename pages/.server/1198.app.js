"use strict";
exports.id = 1198;
exports.ids = [1198];
exports.modules = {

/***/ 32292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-0314b485",
  "path": "/microservice/",
  "title": "什么是微服务",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "微服务需要解决那些问题",
      "slug": "微服务需要解决那些问题",
      "children": []
    },
    {
      "level": 2,
      "title": "服务部署",
      "slug": "服务部署",
      "children": []
    },
    {
      "level": 2,
      "title": "服务路由(API网关)",
      "slug": "服务路由-api网关",
      "children": []
    },
    {
      "level": 2,
      "title": "服务注册发现",
      "slug": "服务注册发现",
      "children": []
    },
    {
      "level": 2,
      "title": "服务调用",
      "slug": "服务调用",
      "children": []
    },
    {
      "level": 2,
      "title": "消息总线",
      "slug": "消息总线",
      "children": []
    },
    {
      "level": 2,
      "title": "服务熔断限流降级",
      "slug": "服务熔断限流降级",
      "children": []
    },
    {
      "level": 2,
      "title": "配置中心",
      "slug": "配置中心",
      "children": []
    },
    {
      "level": 2,
      "title": "为什么需要配置中心",
      "slug": "为什么需要配置中心",
      "children": [
        {
          "level": 3,
          "title": "传统配置方式的缺点",
          "slug": "传统配置方式的缺点",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "如何选型",
      "slug": "如何选型",
      "children": [
        {
          "level": 3,
          "title": "Disconf",
          "slug": "disconf",
          "children": []
        },
        {
          "level": 3,
          "title": "Spring Cloud Config",
          "slug": "spring-cloud-config",
          "children": []
        },
        {
          "level": 3,
          "title": "Apollo",
          "slug": "apollo",
          "children": []
        },
        {
          "level": 3,
          "title": "Nacos",
          "slug": "nacos",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "microservice/README.md",
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

/***/ 17158:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/microservice/index.html.vue?vue&type=template&id=8e69fdac

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="什么是微服务" tabindex="-1"><a class="header-anchor" href="#什么是微服务" aria-hidden="true">#</a> 什么是微服务</h1><p>很小很小的服务，一个服务对应一个单一的功能，单独部署</p><h1 id="微服务与分布式的区别" tabindex="-1"><a class="header-anchor" href="#微服务与分布式的区别" aria-hidden="true">#</a> 微服务与分布式的区别</h1><p>微服务是架构设计，分布式是部署方式，概念不同</p><p>服务之间的逻辑不要偶尔，比如商品库服务的逻辑不要写在物流服务里面</p><p>微服务设计原则</p><ul><li>单一职责原则，每个服务只要实现自己的业务</li><li>服务自治</li></ul><p>微服务设计原则，解决方案</p><p>采用微服务架构来构建系统，会带来清晰的业务划分和可扩展性。</p><p>服务化的核心就是将传统的一站式应用拆分成多个服务，这些服务不再公用<code>DB</code>等</p><h2 id="微服务需要解决那些问题" tabindex="-1"><a class="header-anchor" href="#微服务需要解决那些问题" aria-hidden="true">#</a> 微服务需要解决那些问题</h2><h2 id="服务部署" tabindex="-1"><a class="header-anchor" href="#服务部署" aria-hidden="true">#</a> 服务部署</h2><p>docker</p><h2 id="服务路由-api网关" tabindex="-1"><a class="header-anchor" href="#服务路由-api网关" aria-hidden="true">#</a> 服务路由(API网关)</h2><p>zuul</p><h2 id="服务注册发现" tabindex="-1"><a class="header-anchor" href="#服务注册发现" aria-hidden="true">#</a> 服务注册发现</h2><p>zookeeper</p><h2 id="服务调用" tabindex="-1"><a class="header-anchor" href="#服务调用" aria-hidden="true">#</a> 服务调用</h2><p>grpc</p><h2 id="消息总线" tabindex="-1"><a class="header-anchor" href="#消息总线" aria-hidden="true">#</a> 消息总线</h2><p>spring cloud bus</p><h2 id="服务熔断限流降级" tabindex="-1"><a class="header-anchor" href="#服务熔断限流降级" aria-hidden="true">#</a> 服务熔断限流降级</h2><p>sentinel hystrix</p><h2 id="配置中心" tabindex="-1"><a class="header-anchor" href="#配置中心" aria-hidden="true">#</a> 配置中心</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>微服务配置中心是微服务的一个组件</p></div><h2 id="为什么需要配置中心" tabindex="-1"><a class="header-anchor" href="#为什么需要配置中心" aria-hidden="true">#</a> 为什么需要配置中心</h2><h3 id="传统配置方式的缺点" tabindex="-1"><a class="header-anchor" href="#传统配置方式的缺点" aria-hidden="true">#</a> 传统配置方式的缺点</h3><h2 id="如何选型" tabindex="-1"><a class="header-anchor" href="#如何选型" aria-hidden="true">#</a> 如何选型</h2><h3 id="disconf" tabindex="-1"><a class="header-anchor" href="#disconf" aria-hidden="true">#</a> Disconf</h3><h3 id="spring-cloud-config" tabindex="-1"><a class="header-anchor" href="#spring-cloud-config" aria-hidden="true">#</a> Spring Cloud Config</h3><h3 id="apollo" tabindex="-1"><a class="header-anchor" href="#apollo" aria-hidden="true">#</a> Apollo</h3><h3 id="nacos" tabindex="-1"><a class="header-anchor" href="#nacos" aria-hidden="true">#</a> Nacos</h3><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/microservice/index.html.vue

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
//# sourceMappingURL=1198.app.js.map