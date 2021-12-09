"use strict";
exports.id = 3771;
exports.ids = [3771];
exports.modules = {

/***/ 74008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-74ecf936",
  "path": "/distributed/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "分布式锁和普通的锁的区别？",
      "slug": "分布式锁和普通的锁的区别",
      "children": []
    },
    {
      "level": 2,
      "title": "什么是分布式的CAP理论",
      "slug": "什么是分布式的cap理论",
      "children": []
    },
    {
      "level": 2,
      "title": "分布式场景要解决的问题",
      "slug": "分布式场景要解决的问题",
      "children": []
    },
    {
      "level": 2,
      "title": "分布式与微服务",
      "slug": "分布式与微服务",
      "children": []
    }
  ],
  "filePathRelative": "distributed/README.md",
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

/***/ 52339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/distributed/index.html.vue?vue&type=template&id=15e017e9

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><p><strong>集群是个物理形态，分布式是个工作方式。</strong></p><ul><li><p>分布式(distributed)：是指在多台<code>不同的服务器</code>中部署<code>不同的服务模块</code>，通过远程调用协同工作，对外提供服务。</p><p>分布式的每一个节点都可以做集群。而集群并不一定就是分布式的。</p></li><li><p>集群（cluster）是指在多台<code>不同的服务器</code>中部署<code>相同应用或服务模块</code>，构成一个集群，通过负载均衡设备对外提供服务。</p><p>一台服务器垮掉了，其他服务器可以顶上来。分布式的每一个节点都完成不同的任务，一个节点（服务模块）垮了，这个业务就不能访问了。</p><p>分布式是以缩短单个任务的执行时间来提升效率的，而集群则是通过提高单位时间内执行的任务数来提升效率。</p><p>举个栗子： 一个任务由 10 个子任务组成，每个子任务单独执行需 1 小时，则在一台服务器上执行该任务需 10 小时。 分布式方案：提供 10 台服务器，每台服务器只负责处理一个子任务，执行完这个任务只需一个小时。 集群方案：同样提供 10 台服务器，每台服务器都能独立处理这个任务。10 个服务器将同时工作，1小时后，10个任务同时完成。</p><p>分布式和集群结合，<strong>先分布式再集群</strong>。业务拆分成子业务，针对每个子业务做负载均衡。</p></li><li><p>微服务是一种架构风格，系统中的各个微服务可被独立部署，各个微服务之间是松耦合的。<code>分布式属于微服务</code>。</p></li></ul><p>分布式注意事项：</p><ol><li>微服务架构的分布式事务解决方案。</li><li>分布式存储</li><li>分布式事物</li><li>CAP理论</li></ol><p>集群注意事项：session共享，确保在不同服务器的切换中没有获取到session。</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>使用分布式锁的目的，就是保证同一时间只有一个客户端访问共享资源。</p></div><p>分布式锁的正确实现方式</p><ul><li>基于数据库乐观锁（悲观锁，乐观锁）</li><li>基于zookeeper的分布式锁</li><li>数据库乐观锁</li><li>基于缓存的分布式锁</li></ul><p>基于缓存的好处：缓存一般都是集群部署的</p><h2 id="分布式锁和普通的锁的区别" tabindex="-1"><a class="header-anchor" href="#分布式锁和普通的锁的区别" aria-hidden="true">#</a> 分布式锁和普通的锁的区别？</h2><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>分布式锁，是控制分布式系统之间同步访问共享资源的一种方式。在分布式系统中，常常需要协调他们的动作。如果不同的系统或是同一个系统的不同主机之间共享了一个或一组资源，那么访问这些资源的时候，往往需要互斥来防止彼此干扰来保证一致性，在这种情况下，便需要使用到分布式锁。</p></div><p>分布式锁保证分布式部署的应用集群中，同一个方法在同一时刻只能被一台机器上的一个线程执行</p><p>什么时候使用分布式锁? 分布式的情况，多进程多线程，jvm控制不了，java自带的锁就会实现不了并发功能了。 使用其他工具控制，Redis，天生单线程</p><p>什么时候使用普通的锁就可以？ 单机情况下使用<code>Syncronized</code>或者<code>Lock</code>实现锁机制。单进程多线程实现同步每问题</p><p>JVM锁和分布式锁 https://blog.csdn.net/ym123456677/article/details/80325536 https://blog.csdn.net/gupaoxueyuan/article/details/78825313 https://www.cnblogs.com/dennyzhangdd/p/7133653.html</p><h2 id="什么是分布式的cap理论" tabindex="-1"><a class="header-anchor" href="#什么是分布式的cap理论" aria-hidden="true">#</a> 什么是分布式的CAP理论</h2><div class="custom-container tip"><p class="custom-container-title">CAP</p><p>一致性（Consistency）可用性（Availability）分区容错性（Partition tolerance）</p></div><h2 id="分布式场景要解决的问题" tabindex="-1"><a class="header-anchor" href="#分布式场景要解决的问题" aria-hidden="true">#</a> 分布式场景要解决的问题</h2><ul><li>数据的一致性（分布式事务，分布式锁）</li><li></li></ul><p>分布式Session解决方案？也就是Session共享的问题？</p><p>限流，熔断等</p><p>首先，关于分布式，有些纯理论的知识需要开发有个基本的概念：</p><p>1、什么是分布式，什么是集群，二者有什么区别？ 2、分布式的CAP理论、BASE理论？ 3、什么是分布式的数据一致性？ 4、2PC、3PC、TCC等</p><p>画重点：这部分的理论要有些基本的掌握，<code>至少CAP要知道</code>，包括CAP的证明等。</p><p>还有就是和分布式相关的一些工具、框架、中间件等，如：</p><p>1、消息队列：Kafka、ActiveMQ、RabbitMQ、RocketMQ 2、RPC框架：Dubbo、gRPC 3、分布式缓存：Redis、Memcached 4、分布式搜索：elasticsearch 5、分布式协调：Zookeeper</p><p>还有就是一些分布式问题的解决方案：</p><p>1、分布式事务 2、分布式锁 3、分库分表 4、限流、降级</p><p>项目中用到了分布式缓存，是你做的选型吗？ Redis和memcached有什么区别？为什么选某一个？ 如果让你重新选一次还这么选吗？ 知道用Redis如何实现分布式锁吗？ Redis实现的分布式锁有什么缺点吗？ 分布式锁解决什么问题呢？ 除了Redis还有什么方式可以实现分布式锁？ Zookeeper实现分布式锁的原理是什么？ Zookeeper和Redis实现的分布式锁优缺点如何？ 使用数据库可以实现分布式锁吗？</p><h2 id="分布式与微服务" tabindex="-1"><a class="header-anchor" href="#分布式与微服务" aria-hidden="true">#</a> 分布式与微服务</h2><p>分布式，服务是分散部署在不同的机器上。</p><p>微服务架构是分布式服务架构的子集。</p><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/distributed/index.html.vue

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
//# sourceMappingURL=3771.app.js.map