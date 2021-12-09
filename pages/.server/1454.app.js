"use strict";
exports.id = 1454;
exports.ids = [1454];
exports.modules = {

/***/ 98951:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-76474e46",
  "path": "/server/vmware/centos-installation.html",
  "title": "搭建CentOS开发环境",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "下载CentOS镜像",
      "slug": "下载centos镜像",
      "children": []
    },
    {
      "level": 2,
      "title": "最小化安装网络配置",
      "slug": "最小化安装网络配置",
      "children": []
    },
    {
      "level": 2,
      "title": "最小化安装常用软件",
      "slug": "最小化安装常用软件",
      "children": []
    },
    {
      "level": 2,
      "title": "安装OpenJDK",
      "slug": "安装openjdk",
      "children": []
    }
  ],
  "filePathRelative": "server/vmware/centos-installation.md",
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

/***/ 38122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ centos_installation_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(21666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/server/vmware/centos-installation.html.vue?vue&type=template&id=247f9178



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="搭建centos开发环境" tabindex="-1"><a class="header-anchor" href="#搭建centos开发环境" aria-hidden="true">#</a> 搭建CentOS开发环境</h1><h2 id="下载centos镜像" tabindex="-1"><a class="header-anchor" href="#下载centos镜像" aria-hidden="true">#</a> 下载CentOS镜像</h2><p><a href="https://www.centos.org/download/" target="_blank" rel="noopener noreferrer">官网地址点这里`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><p><img src="https://image.hualihai.cn/blog/屏幕快照 2020-11-22 下午4.12.13.png" alt="屏幕快照2020-11-22下午4.12.13"></p><p><img src="https://image.hualihai.cn/blog/屏幕快照 2020-11-22 下午4.20.22.png" alt="屏幕快照2020-11-22下午4.20.22"></p><p>可以下载：</p><ul><li><p>centos7</p><ul><li>Minimal - 最小化安装</li><li>DVD - 基本安装</li><li>Everything - 全部内容安装</li></ul></li><li><p>centos8</p><ul><li>minial - 最小化安装</li><li>boot - 应该是最小最小的启动版本</li><li>dVD - 基本安装</li></ul></li></ul><p>我使用的是这三个版本:</p><ol><li><code>CentOS-7-x86_64-Minimal-2009</code></li><li><code>CentOS-7-x86_64-DVD-2009</code></li><li><code>CentOS-8.2.2004-x86_64-minimal</code></li></ol><h2 id="最小化安装网络配置" tabindex="-1"><a class="header-anchor" href="#最小化安装网络配置" aria-hidden="true">#</a> 最小化安装网络配置</h2><p>使用<strong>CentOS-7-x86_64-Minimal-2009</strong>镜像安装为例子</p><ol><li>将普通用户赋予root权限</li></ol><p>切换root用户</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">su</span> root
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>编辑<code>sudoers</code>文件，使普通用户有<code>root</code>权限</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vi</span> /etc/sudoers
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>在<strong>root ALL=(ALL) ALL</strong>下面一行添加<strong>lionel ALL=(ALL) ALL</strong></p><ol start="2"><li>配置网络</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vi</span> /etc/sysconfig/network-scripts/ifcfg-ens33
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>未修改网络配置之前的截图</p><p><img src="https://image.hualihai.cn/blog/屏幕快照 2020-11-22 下午4.53.28.png" alt="屏幕快照2020-11-22下午4.53.28"></p><p>修改后的文件内容</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>TYPE=Ethernet
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
UUID=05606ac9<span class="token punctuation">-</span>81a6<span class="token punctuation">-</span>4ee9<span class="token punctuation">-</span>8f16<span class="token punctuation">-</span>f575a076c3cd
DEVICE=ens33
ONBOOT=yes
IPADDR=172.16.203.130
GATEWAY=172.16.203.2
NETMASK=255.255.255.0
DNS1=8.8.8.8
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><ol start="3"><li>重新启动网卡</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">service</span> network restart
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="4"><li>修改主机名称</li></ol><p><img src="https://image.hualihai.cn/blog/kOEOkU.png" alt="kOEOkU"></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/hostname
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>将原始主机名称<strong>localhost.localdomain</strong>替换成IP地址的最后一位<strong>140</strong>。方便我们在终端工具中区分主机地址。</p><p><img src="https://image.hualihai.cn/blog/WsMCj4.png" alt="WsMCj4"></p><h2 id="最小化安装常用软件" tabindex="-1"><a class="header-anchor" href="#最小化安装常用软件" aria-hidden="true">#</a> 最小化安装常用软件</h2><p>使用<strong>CentOS-7-x86_64-Minimal-2009</strong>镜像安装，一些工具都没有安装，需要我们自己安装</p><ol><li>安装网络工具</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> -y net-tools
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li>安装VIM</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> -y <span class="token function">vim</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>TODO 其他后续补充~~</p><h2 id="安装openjdk" tabindex="-1"><a class="header-anchor" href="#安装openjdk" aria-hidden="true">#</a> 安装OpenJDK</h2><p>查看是否已安装openjdk</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum list installed <span class="token operator">|</span> <span class="token function">grep</span> jdk
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>查看可安装的openjdk</p><p><img src="https://image.hualihai.cn/blog/J93xKc.png" alt="J93xKc"></p><p>安装openjdk8</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> -y java-1.8*
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="https://image.hualihai.cn/blog/AfklvB.png" alt="AfklvB"></p><ol start="4"><li>配置Java环境变量</li></ol><p>先找到Java安装到了哪里</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">which</span> java
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ls</span> -l /usr/bin/java
<span class="token function">ls</span> -l /etc/alternatives/java
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="https://image.hualihai.cn/blog/9pdzsp.png" alt="9pdzsp"></p><p>得到Java的安装目录是：<strong>/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.272.b10-1.el7_9.x86_64</strong></p><!--]-->`)
}
;// CONCATENATED MODULE: ./.temp/pages/server/vmware/centos-installation.html.vue?vue&type=template&id=247f9178

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/server/vmware/centos-installation.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const centos_installation_html = (__exports__);

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
//# sourceMappingURL=1454.app.js.map