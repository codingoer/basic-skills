"use strict";
exports.id = 7015;
exports.ids = [7015];
exports.modules = {

/***/ 8754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-76980218",
  "path": "/database/redis/resume-temp.html",
  "title": "面试问题临时整理",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "数据类型",
      "slug": "数据类型",
      "children": []
    },
    {
      "level": 2,
      "title": "底层原理",
      "slug": "底层原理",
      "children": []
    },
    {
      "level": 2,
      "title": "集群应用",
      "slug": "集群应用",
      "children": [
        {
          "level": 3,
          "title": "主从模式",
          "slug": "主从模式",
          "children": []
        },
        {
          "level": 3,
          "title": "哨兵机制",
          "slug": "哨兵机制",
          "children": []
        },
        {
          "level": 3,
          "title": "哨兵集群",
          "slug": "哨兵集群",
          "children": []
        },
        {
          "level": 3,
          "title": "Redis-Cluster集群",
          "slug": "redis-cluster集群",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "持久化",
      "slug": "持久化",
      "children": [
        {
          "level": 3,
          "title": "RDB（Redis Database）",
          "slug": "rdb-redis-database",
          "children": []
        },
        {
          "level": 3,
          "title": "AOF（Append Only File）",
          "slug": "aof-append-only-file",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "AOF和RDB总结",
      "slug": "aof和rdb总结",
      "children": []
    },
    {
      "level": 2,
      "title": "缓存",
      "slug": "缓存",
      "children": [
        {
          "level": 3,
          "title": "旁路缓存",
          "slug": "旁路缓存",
          "children": []
        },
        {
          "level": 3,
          "title": "缓存中的数据和数据库中的不一致",
          "slug": "缓存中的数据和数据库中的不一致",
          "children": []
        },
        {
          "level": 3,
          "title": "缓存雪崩",
          "slug": "缓存雪崩",
          "children": []
        },
        {
          "level": 3,
          "title": "缓存击穿",
          "slug": "缓存击穿",
          "children": []
        },
        {
          "level": 3,
          "title": "缓存穿透",
          "slug": "缓存穿透",
          "children": []
        },
        {
          "level": 3,
          "title": "缓存污染",
          "slug": "缓存污染",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "并发访问",
      "slug": "并发访问",
      "children": [
        {
          "level": 3,
          "title": "分布式锁",
          "slug": "分布式锁",
          "children": []
        },
        {
          "level": 3,
          "title": "原子操作",
          "slug": "原子操作",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "database/redis/resume-temp.md",
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

/***/ 72175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ resume_temp_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/database/redis/resume-temp.html.vue?vue&type=template&id=f23ba6b2

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="面试问题临时整理" tabindex="-1"><a class="header-anchor" href="#面试问题临时整理" aria-hidden="true">#</a> 面试问题临时整理</h1><h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2><ul><li>String</li></ul><p>底层：简单动态字符串</p><p>内存开销大</p><ul><li>List</li></ul><p>底层：双向链表，压缩列表</p><ul><li>Hash</li></ul><p>底层：哈希表，压缩列表</p><ul><li>Set</li></ul><p>底层：整数数组</p><ul><li>Sorted Set</li></ul><p>底层：跳表</p><ul><li><p>采用哈希表作为索引，简直数据都是在内存中保存</p></li><li><p><strong>实现键值对的访问，使用了一个哈希表保存所有键值对</strong>。哈希表就是一个数组，数组的每个元素称为一个哈希桶，<strong>哈希桶保存的是指针</strong></p></li><li><p>O(1)复杂度，计算建的哈希值，就能找到响应的元素</p></li><li><p>哈希冲突的办法的链式哈希，使用链表</p></li></ul><h2 id="底层原理" tabindex="-1"><a class="header-anchor" href="#底层原理" aria-hidden="true">#</a> 底层原理</h2><ol><li>Redis单线程为啥这么快？？？</li></ol><p>Redis的网络IO和键值对读写是单线程，持久化，集群数据同步有额外的线程。</p><ul><li><p>单线程使用了IO复用机制。</p></li><li><p>合理的数据结构</p></li><li><p>内存数据库</p></li></ul><ol start="2"><li>为啥使用单线程？</li></ol><ul><li><p>多线程的开销</p></li><li><p>共享资源的并发访问控制</p></li></ul><h2 id="集群应用" tabindex="-1"><a class="header-anchor" href="#集群应用" aria-hidden="true">#</a> 集群应用</h2><p>Redis具有高可靠性：数据少丢失（AOF+RDB），服务少中断（集群）</p><h3 id="主从模式" tabindex="-1"><a class="header-anchor" href="#主从模式" aria-hidden="true">#</a> 主从模式</h3><p>主从库采用读写分离，使用<strong>replicaof</strong>命令</p><ul><li><p>读操作：主库，从库都可以接受</p></li><li><p>写操作：先主库执行，同步给从库</p></li></ul><h3 id="哨兵机制" tabindex="-1"><a class="header-anchor" href="#哨兵机制" aria-hidden="true">#</a> 哨兵机制</h3><p>主库挂了，就需要运行一个新的主库，把一个从库切换为主库</p><p>哨兵机制解决：</p><p>主库真的挂了吗？该选择哪个从库作为主库？怎么把新主库的相关信息通知给从库和客户端呢？</p><p><strong>哨兵其实就是一个运行在特殊模式下的Redis进程，哨兵主要负责的就是三个任务：监控、选主（选择主库）和通知。</strong></p><ul><li>监控</li></ul><p>周期性地给所有的主从库发送 PING 命令，检测它们是否仍然在线运行</p><ul><li>选主</li></ul><p>主库挂了以后，哨兵就需要从很多个从库里，按照<strong>一定的规则</strong>选择一个从库实例</p><ul><li>通知</li></ul><p>哨兵会把新主库的连接信息发给其他从库，让它们执行replicaof命令，和新主库建立连接，并进行数据复制。</p><h3 id="哨兵集群" tabindex="-1"><a class="header-anchor" href="#哨兵集群" aria-hidden="true">#</a> 哨兵集群</h3><p>通过部署多个实例，就形成了一个哨兵集群。</p><ul><li>基于pub/sub机制的哨兵集群组成</li></ul><h3 id="redis-cluster集群" tabindex="-1"><a class="header-anchor" href="#redis-cluster集群" aria-hidden="true">#</a> Redis-Cluster集群</h3><p>切片集群：就是指启动多个 Redis 实例组成一个集群，然后按照一定的规则，把收到的数据划分成多份，每一份用一个实例来保存</p><p>好处：降低节点的压力和单节点内存大小，每个节点的数据是不一致的，分布式的，共同承担整个redis集群查询操作</p><p>Redis-Cluster采用无中心结构,它的特点如下：</p><ul><li><p>所有的redis节点彼此互联(PING-PONG机制),内部使用二进制协议优化传输速度和带宽。</p></li><li><p>节点的fail是通过集群中超过半数的节点检测失效时才生效。</p></li><li><p>客户端与redis节点直连,不需要中间代理层.客户端不需要连接集群所有节点,连接集群中任何一个可用节点即可</p></li></ul><h2 id="持久化" tabindex="-1"><a class="header-anchor" href="#持久化" aria-hidden="true">#</a> 持久化</h2><p>高并发场景会造成Redis性能抖动</p><h3 id="rdb-redis-database" tabindex="-1"><a class="header-anchor" href="#rdb-redis-database" aria-hidden="true">#</a> RDB（Redis Database）</h3><p>内存快照，是指内存中的数据在某一个时刻的状态记录，快速恢复，全量快照</p><p>两种命令：</p><ul><li><p>save 主线程执行，会阻塞</p></li><li><p>bgsave 子线程专门做，避免对性能影响</p></li></ul><h3 id="aof-append-only-file" tabindex="-1"><a class="header-anchor" href="#aof-append-only-file" aria-hidden="true">#</a> AOF（Append Only File）</h3><p>日志，写后日志（先写入内存，再记录日志），不会阻塞当前的写操作，坏处是宕机后恢复慢</p><p>三种回写策略：</p><ol><li><p>Always</p></li><li><p>EverySec(每秒回写性能最好)</p></li><li><p>No</p></li></ol><h2 id="aof和rdb总结" tabindex="-1"><a class="header-anchor" href="#aof和rdb总结" aria-hidden="true">#</a> AOF和RDB总结</h2><p>数据不能丢失时，内存快照和 AOF 的混合使用是一个很好的选择；</p><p>如果允许分钟级别的数据丢失，可以只使用 RDB；</p><p>如果只用 AOF，优先使用 everysec 的配置选项，因为它在可靠性和性能之间取了一个平衡。</p><h2 id="缓存" tabindex="-1"><a class="header-anchor" href="#缓存" aria-hidden="true">#</a> 缓存</h2><ul><li>Redis 缓存具体是怎么工作的？</li><li>Redis 缓存如果满了，该怎么办？</li><li>为什么会有缓存一致性、缓存穿透、缓存雪崩、缓存击穿等异常，该如何应对？</li></ul><h3 id="旁路缓存" tabindex="-1"><a class="header-anchor" href="#旁路缓存" aria-hidden="true">#</a> 旁路缓存</h3><p>我们也把 Redis 称为旁路缓存，也就是说，读取缓存、读取数据库和更新缓存的操作都需要在应用程序中来完成。</p><p>缓存类型：</p><ul><li><p>只读缓存</p></li><li><p>读写缓存</p></li></ul><h3 id="缓存中的数据和数据库中的不一致" tabindex="-1"><a class="header-anchor" href="#缓存中的数据和数据库中的不一致" aria-hidden="true">#</a> 缓存中的数据和数据库中的不一致</h3><ul><li>读写缓存</li></ul><p>采用同步直写策略，<strong>使用事务机制，来保证缓存和数据库的更新具有原子性。</strong></p><p>一致性的要求没有那么高，可以使用异步写回策略</p><ul><li>只读缓存</li></ul><p>重试机制：消息队列</p><h3 id="缓存雪崩" tabindex="-1"><a class="header-anchor" href="#缓存雪崩" aria-hidden="true">#</a> 缓存雪崩</h3><p>缓存雪崩是指大量的应用请求无法在 Redis 缓存中进行处理，紧接着，应用将大量请求发送到数据库层，导致数据库层的压力激增。</p><ul><li>缓存中有大量数据同时过期，导致大量请求无法得到处理。</li></ul><p>我们可以避免给大量的数据设置相同的过期时间，或者服务降级</p><ul><li>Redis 缓存实例发生故障宕机了，无法处理请求</li></ul><p>是在业务系统中实现服务熔断或请求限流机制。</p><h3 id="缓存击穿" tabindex="-1"><a class="header-anchor" href="#缓存击穿" aria-hidden="true">#</a> 缓存击穿</h3><p>针对某个访问非常频繁的热点数据的请求，无法在缓存中进行处理，紧接着访问该数据的大量请求，一下子都发送到了后端数据库，导致了数据库压力激增，会影响数据库处理其他请求。<strong>缓存击穿的情况，经常发生在热点数据过期失效时</strong></p><p>解决：对于访问特别频繁的热点数据，我们就不设置过期时间了</p><h3 id="缓存穿透" tabindex="-1"><a class="header-anchor" href="#缓存穿透" aria-hidden="true">#</a> 缓存穿透</h3><p>缓存穿透是指要访问的数据既不在 Redis 缓存中，也不在数据库中，导致请求在访问缓存时，发生缓存缺失，再去访问数据库时，发现数据库中也没有要访问的数据</p><p><strong>同时给缓存和数据库带来巨大压力</strong></p><p>解决：缓存空值，保住数据库</p><h3 id="缓存污染" tabindex="-1"><a class="header-anchor" href="#缓存污染" aria-hidden="true">#</a> 缓存污染</h3><p>对于访问次数非常少的数据，访问者之后还留在缓存空间，这就是缓存污染</p><ul><li>LRU缓存淘汰策略</li></ul><h2 id="并发访问" tabindex="-1"><a class="header-anchor" href="#并发访问" aria-hidden="true">#</a> 并发访问</h2><h3 id="分布式锁" tabindex="-1"><a class="header-anchor" href="#分布式锁" aria-hidden="true">#</a> 分布式锁</h3><p>分布式锁：锁是保存在一个共享存储系统中的，可以被多个客户端共享访问和获取。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>SET lock_key random_value NX PX <span class="token number">5000</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="原子操作" tabindex="-1"><a class="header-anchor" href="#原子操作" aria-hidden="true">#</a> 原子操作</h3><ul><li>把多个操作在 Redis 中实现成一个操作，也就是单命令操作；</li></ul><p>Redis的INCR/DECR本身就具有原子性</p><ul><li>把多个操作写到一个 Lua 脚本中，以原子性方式执行单个 Lua 脚本。</li></ul><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/database/redis/resume-temp.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const resume_temp_html = (__exports__);

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
//# sourceMappingURL=7015.app.js.map