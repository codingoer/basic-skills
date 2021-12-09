"use strict";
exports.id = 4503;
exports.ids = [4503];
exports.modules = {

/***/ 16662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-221ae921",
  "path": "/server/vmware/advanced-networking-config.html",
  "title": "桥接模式自定义网络配置",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "server/vmware/advanced-networking-config.md",
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

/***/ 26019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ advanced_networking_config_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/server/vmware/advanced-networking-config.html.vue?vue&type=template&id=32a3ce99

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="桥接模式自定义网络配置" tabindex="-1"><a class="header-anchor" href="#桥接模式自定义网络配置" aria-hidden="true">#</a> 桥接模式自定义网络配置</h1><ul><li>修改成网段范围是 <strong>172.16.203.128 - 172.16.203.254</strong></li><li>网络配置文件目录位置 <strong>/Library/Preferences/VMware Fusion/</strong></li></ul><ol><li>启动虚拟机，查看IP地址</li></ol><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">vmnet8</span><span class="token punctuation">:</span> flags=8863&lt;UP<span class="token punctuation">,</span>BROADCAST<span class="token punctuation">,</span>SMART<span class="token punctuation">,</span>RUNNING<span class="token punctuation">,</span>SIMPLEX<span class="token punctuation">,</span>MULTICAST<span class="token punctuation">&gt;</span> mtu 1500
	ether 00<span class="token punctuation">:</span>50<span class="token punctuation">:</span>56<span class="token punctuation">:</span>c0<span class="token punctuation">:</span><span class="token datetime number">00:08</span> 
	inet 192.168.168.1 netmask 0xffffff00 broadcast 192.168.168.255
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="2"><li>修改<strong>nat.conf</strong>文件</li></ol><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># NAT gateway address</span>
ip = 172.16.203.2
netmask = 255.255.255.0
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="3"><li>修改<strong>dhcp.conf</strong>文件</li></ol><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>allow unknown<span class="token punctuation">-</span>clients;
default<span class="token punctuation">-</span>lease<span class="token punctuation">-</span>time 1800;                <span class="token comment"># default is 30 minutes</span>
max<span class="token punctuation">-</span>lease<span class="token punctuation">-</span>time 7200;                    <span class="token comment"># default is 2 hours</span>

subnet 172.16.203.0 netmask 255.255.255.0 <span class="token punctuation">{</span>
        range 172.16.203.128 172.16.203.254;
        option broadcast<span class="token punctuation">-</span>address 172.16.203.255;
        option domain<span class="token punctuation">-</span>name<span class="token punctuation">-</span>servers 172.16.203.2;
        option domain<span class="token punctuation">-</span>name localdomain;
        default<span class="token punctuation">-</span>lease<span class="token punctuation">-</span>time 1800;                <span class="token comment"># default is 30 minutes</span>
        max<span class="token punctuation">-</span>lease<span class="token punctuation">-</span>time 7200;                    <span class="token comment"># default is 2 hours</span>
        option netbios<span class="token punctuation">-</span>name<span class="token punctuation">-</span>servers 172.16.203.2;
        option routers 172.16.203.2;
<span class="token punctuation">}</span>
host vmnet8 <span class="token punctuation">{</span>
        hardware ethernet 00<span class="token punctuation">:</span>50<span class="token punctuation">:</span>56<span class="token punctuation">:</span>C0<span class="token punctuation">:</span>00<span class="token punctuation">:</span>08;
        fixed<span class="token punctuation">-</span>address 172.16.203.1;
        option domain<span class="token punctuation">-</span>name<span class="token punctuation">-</span>servers 0.0.0.0;
        option domain<span class="token punctuation">-</span>name &quot;&quot;;
        option routers 0.0.0.0;
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><ol start="4"><li>修改<strong>networking</strong>文件</li></ol><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>answer VNET_8_DHCP yes
answer VNET_8_DHCP_CFG_HASH 15DA9EEAFA7B866650C685E3BA75D31A2584B849
answer VNET_8_HOSTONLY_NETMASK 255.255.255.0
answer VNET_8_HOSTONLY_SUBNET 172.16.203.0
answer VNET_8_NAT yes
answer VNET_8_VIRTUAL_ADAPTER yes
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="5"><li>重启虚拟机查看IP地址</li></ol><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">vmnet8</span><span class="token punctuation">:</span> flags=8863&lt;UP<span class="token punctuation">,</span>BROADCAST<span class="token punctuation">,</span>SMART<span class="token punctuation">,</span>RUNNING<span class="token punctuation">,</span>SIMPLEX<span class="token punctuation">,</span>MULTICAST<span class="token punctuation">&gt;</span> mtu 1500
	ether 00<span class="token punctuation">:</span>50<span class="token punctuation">:</span>56<span class="token punctuation">:</span>c0<span class="token punctuation">:</span><span class="token datetime number">00:08</span> 
	inet 172.16.203.1 netmask 0xffffff00 broadcast 172.16.203.255
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="6"><li>设置服务器静态IP地址</li></ol><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>TYPE=Ethernet
PROXY_METHOD=none
BROWSER_ONLY=no
BOOTPROTO=static
DEFROUTE=yes
IPV4_FAILURE_FATAL=no
IPV6INIT=yes
IPV6_AUTOCONF=yes
IPV6_DEFROUTE=yes
IPV6_FAILURE_FATAL=no
IPV6_ADDR_GEN_MODE=stable<span class="token punctuation">-</span>privacy
NAME=ens33
UUID=545b4299<span class="token punctuation">-</span>ed3a<span class="token punctuation">-</span>44d9<span class="token punctuation">-</span>8d0c<span class="token punctuation">-</span>28c4df0a49b3
DEVICE=ens33
ONBOOT=yes
IPADDR=172.16.203.130
GATEWAY=172.16.203.2
NETMASK=255.255.255.0
DNS1=8.8.8.8
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><ol start="7"><li>重启网卡</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">service</span> network restart
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/server/vmware/advanced-networking-config.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const advanced_networking_config_html = (__exports__);

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
//# sourceMappingURL=4503.app.js.map