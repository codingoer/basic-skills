"use strict";
exports.id = 5040;
exports.ids = [5040];
exports.modules = {

/***/ 60947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-a6a62dec",
  "path": "/server/proxy/polipo.html",
  "title": "Polipo",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "installation",
      "slug": "installation",
      "children": []
    }
  ],
  "filePathRelative": "server/proxy/polipo.md",
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

/***/ 31700:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ polipo_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/server/proxy/polipo.html.vue?vue&type=template&id=f3de8bca

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="polipo" tabindex="-1"><a class="header-anchor" href="#polipo" aria-hidden="true">#</a> Polipo</h1><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> installation</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> polipo
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>创建配置文件</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/polipo
<span class="token function">touch</span> config
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>allowedClients = <span class="token number">172.16</span>.<span class="token number">2.32</span><span class="token punctuation">,</span> <span class="token number">127.0</span>.<span class="token number">0.1</span>
allowedPorts = <span class="token number">7777</span>

proxyName = <span class="token string">&quot;localhost&quot;</span>

socksParentProxy = <span class="token string">&quot;172.16.2.8:1080&quot;</span>
socksProxyType = socks5

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>查看启动状态</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">service</span> polipo status
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>polipo.service - LSB: Start or stop the polipo web cache Loaded: loaded (/etc/init.d/polipo; generated) Active: active (running) since Tue 2019-07-30 09:15:26 CST; 40s ago Docs: man:systemd-sysv-generator(8) Process: 21001 ExecStop=/etc/init.d/polipo stop (code=exited, status=0/SUCCESS) Process: 21007 ExecStart=/etc/init.d/polipo start (code=exited, status=0/SUCCESS) Tasks: 1 (limit: 4915) CGroup: /system.slice/polipo.service └─21013 /usr/bin/polipo -c /etc/polipo/config pidFile=/var/run/polipo/polipo.pid daemonise=true</p><p>Jul 30 09:15:26 Lionel-PC systemd[1]: Starting LSB: Start or stop the polipo web cache... Jul 30 09:15:26 Lionel-PC polipo[21013]: Established listening socket on port <code>8123</code>. Jul 30 09:15:26 Lionel-PC polipo[21007]: Starting polipo: polipo. Jul 30 09:15:26 Lionel-PC systemd[1]: Started LSB: Start or stop the polipo web cache.</p><p>https://github.com/jech/polipo/blob/master/config.sample</p><p>https://github.com/shadowsocks/shadowsocks/wiki/Convert-Shadowsocks-into-an-HTTP-proxy</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>usr/share/polipo/www/doc/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>see more at <code>/usr/share/doc/polipo/examples</code></p><p>see more at <code>usr/share/polipo</code></p><p>https://blog.51cto.com/nginxs/1918260</p><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/server/proxy/polipo.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const polipo_html = (__exports__);

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
//# sourceMappingURL=5040.app.js.map