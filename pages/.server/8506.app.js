"use strict";
exports.id = 8506;
exports.ids = [8506];
exports.modules = {

/***/ 26275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-200781b4",
  "path": "/server/vmware/company-intranet-dns.html",
  "title": "模拟公司内网开发环境",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "搭建DNS服务器",
      "slug": "搭建dns服务器",
      "children": [
        {
          "level": 3,
          "title": "安装bind软件",
          "slug": "安装bind软件",
          "children": []
        },
        {
          "level": 3,
          "title": "Bind的默认路径设定与chroot",
          "slug": "bind的默认路径设定与chroot",
          "children": []
        },
        {
          "level": 3,
          "title": "编辑/etc/named.conf文件",
          "slug": "编辑-etc-named-conf文件",
          "children": []
        },
        {
          "level": 3,
          "title": "数据库档案设定",
          "slug": "数据库档案设定",
          "children": []
        },
        {
          "level": 3,
          "title": "DNS 的启动观察与防火墙",
          "slug": "dns-的启动观察与防火墙",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "server/vmware/company-intranet-dns.md",
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

/***/ 99827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ company_intranet_dns_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/server/vmware/company-intranet-dns.html.vue?vue&type=template&id=0bb3dc7e

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="模拟公司内网开发环境" tabindex="-1"><a class="header-anchor" href="#模拟公司内网开发环境" aria-hidden="true">#</a> 模拟公司内网开发环境</h1><h2 id="搭建dns服务器" tabindex="-1"><a class="header-anchor" href="#搭建dns服务器" aria-hidden="true">#</a> 搭建DNS服务器</h2><p>使用<strong>172.16.203.130</strong>这台机器</p><h3 id="安装bind软件" tabindex="-1"><a class="header-anchor" href="#安装bind软件" aria-hidden="true">#</a> 安装bind软件</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum -y <span class="token function">install</span> bind*
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="https://image.hualihai.cn/blog/7W8aeb.png" alt="7W8aeb"></p><p>启动<strong>bind</strong>服务</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl start named.service
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>查看端口判断服务是否启动成功</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">netstat</span> -an <span class="token operator">|</span> <span class="token function">grep</span> :53
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="https://image.hualihai.cn/blog/68VpCa.png" alt="68VpCa"></p><h3 id="bind的默认路径设定与chroot" tabindex="-1"><a class="header-anchor" href="#bind的默认路径设定与chroot" aria-hidden="true">#</a> Bind的默认路径设定与<strong>chroot</strong></h3><p>chroot代表的是 <strong>change to root(根目录)</strong> 的意思，root代表的是根目录。CentOS默认将bind锁在<code>/var/named/chroot</code>目录中.</p><p>由于CentOS已经透过启动脚本帮我们进行档案与目录的挂载链接，所以请你直接修改<code>/etc/named.conf</code>即可，不要再去<code>/var/named/chroot/etc/named.conf</code>修改.</p><p>BIND的配置文件为<code>/etc/named.conf</code></p><p><img src="https://image.hualihai.cn/blog/za2Gmd.png" alt="za2Gmd"></p><h3 id="编辑-etc-named-conf文件" tabindex="-1"><a class="header-anchor" href="#编辑-etc-named-conf文件" aria-hidden="true">#</a> 编辑<code>/etc/named.conf</code>文件</h3><p>原始文件内容</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>//
// named.conf
//
// Provided by Red Hat bind package to configure the ISC BIND named(8) DNS
// server as a caching only nameserver (as a localhost DNS resolver only).
//
// See /usr/share/doc/bind<span class="token important">*/sample/</span> for example named configuration files.
//
// See the BIND Administrator&#39;s Reference Manual (ARM) for details about the
// configuration located in /usr/share/doc/bind<span class="token punctuation">-</span><span class="token punctuation">{</span>version<span class="token punctuation">}</span>/Bv9ARM.html

options <span class="token punctuation">{</span>
        listen<span class="token punctuation">-</span>on port 53 <span class="token punctuation">{</span> 127.0.0.1; <span class="token punctuation">}</span>;
        listen<span class="token punctuation">-</span>on<span class="token punctuation">-</span>v6 port 53 <span class="token punctuation">{</span> <span class="token punctuation">:</span><span class="token punctuation">:</span>1; <span class="token punctuation">}</span>;
        directory       &quot;/var/named&quot;;
        dump<span class="token punctuation">-</span>file       &quot;/var/named/data/cache_dump.db&quot;;
        statistics<span class="token punctuation">-</span>file &quot;/var/named/data/named_stats.txt&quot;;
        memstatistics<span class="token punctuation">-</span>file &quot;/var/named/data/named_mem_stats.txt&quot;;
        recursing<span class="token punctuation">-</span>file  &quot;/var/named/data/named.recursing&quot;;
        secroots<span class="token punctuation">-</span>file   &quot;/var/named/data/named.secroots&quot;;
        allow<span class="token punctuation">-</span>query     <span class="token punctuation">{</span> localhost; <span class="token punctuation">}</span>;

        /* 
         <span class="token punctuation">-</span> If you are building an AUTHORITATIVE DNS server<span class="token punctuation">,</span> do NOT enable recursion.
         <span class="token punctuation">-</span> If you are building a RECURSIVE (caching) DNS server<span class="token punctuation">,</span> you need to enable 
           recursion. 
         <span class="token punctuation">-</span> If your recursive DNS server has a public IP address<span class="token punctuation">,</span> you MUST enable access 
           control to limit queries to your legitimate users. Failing to do so will
           cause your server to become part of large scale DNS amplification 
           attacks. Implementing BCP38 within your network would greatly
           reduce such attack surface 
        <span class="token important">*/</span>
        recursion yes;

        dnssec<span class="token punctuation">-</span>enable yes;
        dnssec<span class="token punctuation">-</span>validation yes;

        /* Path to ISC DLV key <span class="token important">*/</span>
        bindkeys<span class="token punctuation">-</span>file &quot;/etc/named.root.key&quot;;

        managed<span class="token punctuation">-</span>keys<span class="token punctuation">-</span>directory &quot;/var/named/dynamic&quot;;

        pid<span class="token punctuation">-</span>file &quot;/run/named/named.pid&quot;;
        session<span class="token punctuation">-</span>keyfile &quot;/run/named/session.key&quot;;
<span class="token punctuation">}</span>;

logging <span class="token punctuation">{</span>
        channel default_debug <span class="token punctuation">{</span>
                file &quot;data/named.run&quot;;
                severity dynamic;
        <span class="token punctuation">}</span>;
<span class="token punctuation">}</span>;

zone &quot;.&quot; IN <span class="token punctuation">{</span>
        type hint;
        file &quot;named.ca&quot;;
<span class="token punctuation">}</span>;

include &quot;/etc/named.rfc1912.zones&quot;;
include &quot;/etc/named.root.key&quot;;

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br></div></div><p>修改内容</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>listen<span class="token punctuation">-</span>on port 53 <span class="token punctuation">{</span> any; <span class="token punctuation">}</span>;
allow<span class="token punctuation">-</span>query     <span class="token punctuation">{</span> any; <span class="token punctuation">}</span>;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="数据库档案设定" tabindex="-1"><a class="header-anchor" href="#数据库档案设定" aria-hidden="true">#</a> 数据库档案设定</h3><ul><li>编辑<code>named.rfc1912.zones</code>文件</li></ul><p>添加内容</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>zone &quot;stage.com&quot; IN {
       type master;
       file &quot;named.stage.com&quot;;
       allow-update { none; };
};

zone &quot;203.16.172.in-addr.arpa&quot; IN {
       type master;
       file &quot;named.172.16.203&quot;;
       allow-update { none; };
};
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul><li>创建 <strong>named.stage.com</strong> 文件</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">touch</span> /var/named/named.stage.com
<span class="token function">vim</span> /var/named/named.centos.vbird
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>添加如下内容</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>\$TTL  1H
@       IN SOA dns.stage.com. lionel.mail.stage.com.(2020112301 3H 15M 1W 1D)
@       IN NS   dns.stage.com.


dns.stage.com.    IN A      172.16.203.130
www.stage.com.    IN A    172.16.203.140
goods.stage.com.   IN A    172.16.203.140
cart.stage.com.   IN A   172.16.203.140
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>创建 <strong>named.172.16.203</strong> 文件</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> /var/named/named.172.16.203
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>添加如下内容</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>\$TTL  600
@       IN SOA  dns.stage.com. lionel.mail.stage.com.(2020112301 3H 15M 1W 1D)
@       IN NS   dns.stage.com.

130    IN PTR    dns.stage.com.
140    IN PTR    www.stage.com.
140    IN PTR    goods.stage.com.
140    IN PTR    cart.stage.com.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="dns-的启动观察与防火墙" tabindex="-1"><a class="header-anchor" href="#dns-的启动观察与防火墙" aria-hidden="true">#</a> DNS 的启动观察与防火墙</h3><ul><li>启动DNS</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl start named.service
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>查看日志</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tail</span> -n <span class="token number">30</span> /var/log/messages <span class="token operator">|</span> <span class="token function">grep</span> named
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>开放53端口</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>firewall-cmd --zone<span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">53</span>/tcp --permanent
firewall-cmd --reload
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/server/vmware/company-intranet-dns.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const company_intranet_dns_html = (__exports__);

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
//# sourceMappingURL=8506.app.js.map