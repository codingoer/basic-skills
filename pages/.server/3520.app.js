"use strict";
exports.id = 3520;
exports.ids = [3520];
exports.modules = {

/***/ 18161:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-50a94867",
  "path": "/os/linux/software/linux-package.html",
  "title": "Linux下包管理工具及软件安装",
  "lang": "zh-CN",
  "frontmatter": {
    "sidebar": "auto"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "软件管理",
      "slug": "软件管理",
      "children": [
        {
          "level": 3,
          "title": "rpm",
          "slug": "rpm",
          "children": []
        },
        {
          "level": 3,
          "title": "dpkg",
          "slug": "dpkg",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "包管理工具",
      "slug": "包管理工具",
      "children": [
        {
          "level": 3,
          "title": "yum",
          "slug": "yum",
          "children": []
        },
        {
          "level": 3,
          "title": "apt-get",
          "slug": "apt-get",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "EPEL",
      "slug": "epel",
      "children": []
    },
    {
      "level": 2,
      "title": "软件安装方式",
      "slug": "软件安装方式",
      "children": [
        {
          "level": 3,
          "title": "源码形式安装",
          "slug": "源码形式安装",
          "children": []
        },
        {
          "level": 3,
          "title": "软件包管理器安装",
          "slug": "软件包管理器安装",
          "children": []
        },
        {
          "level": 3,
          "title": "下载软件包",
          "slug": "下载软件包",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "os/linux/software/linux-package.md",
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

/***/ 49151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ linux_package_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/os/linux/software/linux-package.html.vue?vue&type=template&id=56c22219

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="linux下包管理工具及软件安装" tabindex="-1"><a class="header-anchor" href="#linux下包管理工具及软件安装" aria-hidden="true">#</a> Linux下包管理工具及软件安装</h1><p>Linux系统下最常见的安装包格式<code>rpm</code>包和<code>deb</code>包，rpm包主要应用在<strong>RedHat</strong>系列，而deb包主要应用在<strong>Debian</strong>系列。</p><blockquote><p>包管理工具命令，RedHat系列使用<code>yum</code>，Debian系列使用<code>apt-get</code>。<br> 软件管理机制，RedHat系列使用<code>rpm</code>，Debian系列使用<code>dpkg</code></p></blockquote><h2 id="软件管理" tabindex="-1"><a class="header-anchor" href="#软件管理" aria-hidden="true">#</a> 软件管理</h2><h3 id="rpm" tabindex="-1"><a class="header-anchor" href="#rpm" aria-hidden="true">#</a> rpm</h3><p>RPM = <strong>RedHat Package Management</strong>，用户安装卸载<code>.rpm</code>软件。RPM通过将代码基于特定平台系统编译为可执行文件，来简化开源软件的安装管理。</p><ul><li>查看已安装的软件包</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rpm</span> -qa <span class="token operator">|</span> <span class="token function">grep</span> <span class="token function">vim</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>安装软件包</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rpm</span> -ivh yum-2.0.4-1.rh.fr.i386.rpm
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>移除软件包</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rpm</span> -e xxxxxx.rpm
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>查询依赖关系</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rpm</span> -qRp xxxx.rpm
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="dpkg" tabindex="-1"><a class="header-anchor" href="#dpkg" aria-hidden="true">#</a> dpkg</h3><p>衍生于Debian的其他Linux系统大多使用dpkg来管理软件。</p><ul><li>安装软件包</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>dpkg -i xxxxxx.deb
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>查询已安装的软件</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>dpkg -l
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>查询依赖关系</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>dpkg -info xxxxx.deb
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>移除软件包</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>dpkg -P xxxx.deb
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="包管理工具" tabindex="-1"><a class="header-anchor" href="#包管理工具" aria-hidden="true">#</a> 包管理工具</h2><h3 id="yum" tabindex="-1"><a class="header-anchor" href="#yum" aria-hidden="true">#</a> yum</h3><p><strong>Yellowdog Updateer Modified</strong><br> 在RH系列Linux系统中的Shell前端软件包管理器（rpm的前端程序）。基于RPM包管理，能够从指定的服务器自动下载RPM包并且安装，可以自动处理依赖性关系，一次安装所有依赖的软件包</p><ul><li>安装</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> –y package_name
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>卸载</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum remove package_name
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>更新</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum update package_name
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>查找软件包</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum search keyword
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>列出所有安装包</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum list package_name
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>列出已安装的软件包</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum list installed
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>相比rpm更加人性化，不用考虑依赖关系</p></div><p>yum源文件所在目录（仓库的配置文件）：<code>/etc/yum.repos.d/</code></p><h3 id="apt-get" tabindex="-1"><a class="header-anchor" href="#apt-get" aria-hidden="true">#</a> apt-get</h3><p>apt作用于deb包，apt可以配置多个资源库，apt会在这些库中搜索软件包。</p><ul><li>安装</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> package_name  
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>卸载</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> remove package_name
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>更新</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> update package_name  
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>重新安装</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> package_name --reinstall  
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>更新软件源</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> update
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>更新已安装的包</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> upgrade
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>ubuntu16.04加入了apt命令，推荐使用<code>apt</code>命令</p></div><h2 id="epel" tabindex="-1"><a class="header-anchor" href="#epel" aria-hidden="true">#</a> EPEL</h2><p>Epel - <strong>Extra Package for Enterprise Linux</strong>，免费开源发行软件包版本库，为红帽系列操作系统提供额外的软件包。</p><blockquote><p>Provides lots of open source packages to install via yum.</p></blockquote><ul><li>通过wget下载</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> http://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
<span class="token function">rpm</span> -ivh epel-release-latest-7.noarch.rpm
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>通过yum安装</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> epel-release
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>校验Epel已安装</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum repolist
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>使用Epel安装软件</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum -y <span class="token function">install</span> nginx
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="软件安装方式" tabindex="-1"><a class="header-anchor" href="#软件安装方式" aria-hidden="true">#</a> 软件安装方式</h2><h3 id="源码形式安装" tabindex="-1"><a class="header-anchor" href="#源码形式安装" aria-hidden="true">#</a> 源码形式安装</h3><p>绝大多数软件都是直接以源码形式发布，源码需要编译成为二进制形式之后才可以使用。源码包一般是经过tar打包然后压缩的文件，需要<strong>先解压</strong>。</p><p>源代码基本编译流程：</p><ol><li>检查编译环境：<code>.configure</code></li><li>对源码进行编译：<code>make</code></li><li>将生成的可执行文件安装到计算机：<code>make install</code></li></ol><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>操作复杂，编译时间长，容易出现问题</p></div><h3 id="软件包管理器安装" tabindex="-1"><a class="header-anchor" href="#软件包管理器安装" aria-hidden="true">#</a> 软件包管理器安装</h3><ol><li>解决rpm的依赖关系，自动解决依赖关系。</li><li>引入仓库概念，支持多个仓库</li></ol><h3 id="下载软件包" tabindex="-1"><a class="header-anchor" href="#下载软件包" aria-hidden="true">#</a> 下载软件包</h3><p>有些软件包不在仓库中，通过<code>软件包管理器</code>安装有问题，就需要手动安装。 可以通过<code>wget</code>下载安装包或者本地下载安装包后上传到服务器上。</p><p><code>wget</code>类似于迅雷，是一种下载工具。通过HTTP，HTTPS，FTP最常见的TCP/IP协议下载。使用wget下一个rpm包或者deb包，之后使用<code>rpm</code>或<code>dpkg</code>进行安装</p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>很多安装包有依赖性，需手动解决依赖，手动解决很复杂</p></div><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/os/linux/software/linux-package.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const linux_package_html = (__exports__);

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
//# sourceMappingURL=3520.app.js.map