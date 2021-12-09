"use strict";
exports.id = 2929;
exports.ids = [2929];
exports.modules = {

/***/ 19339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-2c0683f1",
  "path": "/server/vmware/company-intranet-middleware.html",
  "title": "模拟公司内网开发环境",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "ZooKeeper集群环境搭建",
      "slug": "zookeeper集群环境搭建",
      "children": []
    },
    {
      "level": 2,
      "title": "Canal集群环境搭建",
      "slug": "canal集群环境搭建",
      "children": []
    },
    {
      "level": 2,
      "title": "Redis集群环境搭建",
      "slug": "redis集群环境搭建",
      "children": []
    }
  ],
  "filePathRelative": "server/vmware/company-intranet-middleware.md",
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

/***/ 29743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ company_intranet_middleware_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/server/vmware/company-intranet-middleware.html.vue?vue&type=template&id=bcaf37f8

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="模拟公司内网开发环境" tabindex="-1"><a class="header-anchor" href="#模拟公司内网开发环境" aria-hidden="true">#</a> 模拟公司内网开发环境</h1><h2 id="zookeeper集群环境搭建" tabindex="-1"><a class="header-anchor" href="#zookeeper集群环境搭建" aria-hidden="true">#</a> ZooKeeper集群环境搭建</h2><ol><li>机器部署 - <strong>三节点</strong>，每台机器要安装JDK8</li></ol><ul><li>172.16.203.150</li><li>172.16.203.151</li><li>172.16.203.152</li></ul><ol start="2"><li>编辑配置文件</li></ol><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code># The number of milliseconds of each tick
tickTime=2000
# The number of ticks that the initial 
# synchronization phase can take
initLimit=10
# The number of ticks that can pass between 
# sending a request and getting an acknowledgement
syncLimit=5
# the directory where the snapshot is stored.
# do not use /tmp for storage, /tmp here is just 
# example sakes.
dataDir=/home/lionel/data/zookeeper
# the port at which the clients will connect
clientPort=2181
# the maximum number of client connections.
# increase this if you need to handle more clients
#maxClientCnxns=60
#
# Be sure to read the maintenance section of the 
# administrator guide before turning on autopurge.
#
# http://zookeeper.apache.org/doc/current/zookeeperAdmin.html#sc_maintenance
#
# The number of snapshots to retain in dataDir
#autopurge.snapRetainCount=3
# Purge task interval in hours
# Set to &quot;0&quot; to disable auto purge feature
#autopurge.purgeInterval=1

## Metrics Providers
#
# https://prometheus.io Metrics Exporter
#metricsProvider.className=org.apache.zookeeper.metrics.prometheus.PrometheusMetricsProvider
#metricsProvider.httpPort=7000
#metricsProvider.exportJvmInfo=true

server.1=172.16.203.150:3333:3334
server.2=172.16.203.151:3333:3334
server.3=172.16.203.152:3333:3334
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><ol start="3"><li>创建myid</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vim /home/lionel/data/zookeeper
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>输入数字标识，每个节点id不一致即可</p><ol start="3"><li>配置环境变量</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> .bash_profile
<span class="token builtin class-name">export</span> <span class="token assign-left variable">ZOOKEEPER_HOME</span><span class="token operator">=</span><span class="token environment constant">\$HOME</span>/apache-zookeeper-3.6.2-bin
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">\$ZOOKEEPER_HOME</span>/bin:<span class="token environment constant">\$PATH</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="https://image.hualihai.cn/blog/hawzdr.png" alt="hawzdr"></p><ol start="4"><li>启动服务与检查</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>zkServer.sh start
<span class="token function">netstat</span> -an <span class="token operator">|</span> <span class="token function">grep</span> <span class="token number">2181</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="5"><li>开放防火墙端口</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>firewall-cmd --zone<span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">2181</span>/tcp --permanent 
firewall-cmd --zone<span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">3333</span>/tcp --permanent 
firewall-cmd --zone<span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">3334</span>/tcp --permanent 
firewall-cmd --reload
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="canal集群环境搭建" tabindex="-1"><a class="header-anchor" href="#canal集群环境搭建" aria-hidden="true">#</a> Canal集群环境搭建</h2><ol><li>机器部署 - <strong>两节点</strong></li></ol><ul><li>172.16.203.150</li><li>172.16.203.151</li></ul><ol start="2"><li></li></ol><h2 id="redis集群环境搭建" tabindex="-1"><a class="header-anchor" href="#redis集群环境搭建" aria-hidden="true">#</a> Redis集群环境搭建</h2><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/server/vmware/company-intranet-middleware.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const company_intranet_middleware_html = (__exports__);

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
//# sourceMappingURL=2929.app.js.map