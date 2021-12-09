"use strict";
exports.id = 2563;
exports.ids = [2563];
exports.modules = {

/***/ 81079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-420ff117",
  "path": "/database/mysql/installation.html",
  "title": "MySQL Installing",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Add firewalld port",
      "slug": "add-firewalld-port",
      "children": []
    },
    {
      "level": 2,
      "title": "Linux Yum Repository",
      "slug": "linux-yum-repository",
      "children": [
        {
          "level": 3,
          "title": "Adding the MySQL Yum Repository",
          "slug": "adding-the-mysql-yum-repository",
          "children": []
        },
        {
          "level": 3,
          "title": "Selecting a Release Series",
          "slug": "selecting-a-release-series",
          "children": []
        },
        {
          "level": 3,
          "title": "Disabling the Default MySQL Module",
          "slug": "disabling-the-default-mysql-module",
          "children": []
        },
        {
          "level": 3,
          "title": "Installing and Starting",
          "slug": "installing-and-starting",
          "children": []
        },
        {
          "level": 3,
          "title": "Find and reset super password",
          "slug": "find-and-reset-super-password",
          "children": []
        },
        {
          "level": 3,
          "title": "Modify Remote Connection",
          "slug": "modify-remote-connection",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "database/mysql/installation.md",
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

/***/ 49075:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ installation_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(21666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/database/mysql/installation.html.vue?vue&type=template&id=2c11f480



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="mysql-installing" tabindex="-1"><a class="header-anchor" href="#mysql-installing" aria-hidden="true">#</a> MySQL Installing</h1><ul><li><a href="https://dev.mysql.com/downloads/" target="_blank" rel="noopener noreferrer">MySQL Community Downloads`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://dev.mysql.com/doc/refman/8.0/en/installing.html" target="_blank" rel="noopener noreferrer">DOCUMENTATION`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul><h2 id="add-firewalld-port" tabindex="-1"><a class="header-anchor" href="#add-firewalld-port" aria-hidden="true">#</a> Add firewalld port</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>firewall-cmd --zone<span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">3306</span>/tcp --permanent 
firewall-cmd --reload
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="linux-yum-repository" tabindex="-1"><a class="header-anchor" href="#linux-yum-repository" aria-hidden="true">#</a> Linux Yum Repository</h2><ul><li><a href="https://dev.mysql.com/downloads/repo/yum/" target="_blank" rel="noopener noreferrer">下载地址`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://dev.mysql.com/doc/refman/8.0/en/linux-installation-yum-repo.html" target="_blank" rel="noopener noreferrer">官方文档`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul><h3 id="adding-the-mysql-yum-repository" tabindex="-1"><a class="header-anchor" href="#adding-the-mysql-yum-repository" aria-hidden="true">#</a> Adding the MySQL Yum Repository</h3><ol><li>Remove MARIADB</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rpm</span> -qa <span class="token operator">|</span> <span class="token function">grep</span> mariadb
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> yum -y remove mariadb-libs-5.5.68-1.el7.x86_64
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li>Adding the MySQL Yum Repository</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> https://dev.mysql.com/get/mysql80-community-release-el7-3.noarch.rpm
<span class="token function">sudo</span> yum <span class="token function">install</span> -y mysql80-community-release-el7-3.noarch.rpm
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="3"><li>check that the MySQL Yum repository has been successfully</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum repolist enabled <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;mysql.*-community.*&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="selecting-a-release-series" tabindex="-1"><a class="header-anchor" href="#selecting-a-release-series" aria-hidden="true">#</a> Selecting a Release Series</h3><ol><li>See all the subrepositories in the MySQL Yum repository</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum repolist all <span class="token operator">|</span> <span class="token function">grep</span> mysql
yum repolist enabled <span class="token operator">|</span> <span class="token function">grep</span> mysql
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>When using the MySQL Yum repository, <strong>the latest GA series (currently MySQL 8.0) is selected for installation by default</strong>.</p><ol start="2"><li>Change the Release Series</li></ol><p>such as disable the subrepository for the 5.7 series and enable the one for the 8.0 series:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> yum-config-manager --disable mysql57-community
<span class="token function">sudo</span> yum-config-manager --enable mysql80-community
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Besides using yum-config-manager or the dnf config-manager command, you can also select a release series by editing manually the <code>/etc/yum.repos.d/mysql-community.repo</code> file.</p><p><strong>change the enabled=1 or 0</strong></p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># Enable to use MySQL 8.0</span>
<span class="token punctuation">[</span>mysql80<span class="token punctuation">-</span>community<span class="token punctuation">]</span>
name=MySQL 8.0 Community Server
baseurl=http<span class="token punctuation">:</span>//repo.mysql.com/yum/mysql<span class="token punctuation">-</span>8.0<span class="token punctuation">-</span>community/el/6/\$basearch/
enabled=1
gpgcheck=1
gpgkey=file<span class="token punctuation">:</span>///etc/pki/rpm<span class="token punctuation">-</span>gpg/RPM<span class="token punctuation">-</span>GPG<span class="token punctuation">-</span>KEY<span class="token punctuation">-</span>mysql
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="disabling-the-default-mysql-module" tabindex="-1"><a class="header-anchor" href="#disabling-the-default-mysql-module" aria-hidden="true">#</a> Disabling the Default MySQL Module</h3><p>RHEL8 and Oracle Linux 8 include a MySQL module that is enabled by default. <strong>(EL8 systems only)</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> yum module disable mysql
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="installing-and-starting" tabindex="-1"><a class="header-anchor" href="#installing-and-starting" aria-hidden="true">#</a> Installing and Starting</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> yum -y <span class="token function">install</span> mysql-community-server
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>This installs the package for MySQL server (<strong>mysql-community-server</strong>) and also packages for the components required to run the server, including packages for the client (<strong>mysql-community-client</strong>), the common error messages and character sets for client and server (<strong>mysql-community-common</strong>), and the shared client libraries (<strong>mysql-community-libs</strong>).</p><p>Start the MySQL server with the following command:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl start mysqld
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>commands such as:</p><ul><li>stop</li><li>start</li><li>status</li><li>restart</li></ul><h3 id="find-and-reset-super-password" tabindex="-1"><a class="header-anchor" href="#find-and-reset-super-password" aria-hidden="true">#</a> Find and reset super password</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">grep</span> <span class="token string">&#39;temporary password&#39;</span> /var/log/mysqld.log
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mysql -u root -p
ALTER <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> IDENTIFIED BY <span class="token string">&#39;MyNewPass4!&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="modify-remote-connection" tabindex="-1"><a class="header-anchor" href="#modify-remote-connection" aria-hidden="true">#</a> Modify Remote Connection</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">update</span> <span class="token keyword">user</span> <span class="token keyword">set</span> Host <span class="token operator">=</span> <span class="token string">&#39;%&#39;</span> <span class="token keyword">where</span> <span class="token keyword">User</span> <span class="token operator">=</span> <span class="token string">&#39;root&#39;</span>
flush <span class="token keyword">privileges</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./.temp/pages/database/mysql/installation.html.vue?vue&type=template&id=2c11f480

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/database/mysql/installation.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const installation_html = (__exports__);

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
//# sourceMappingURL=2563.app.js.map