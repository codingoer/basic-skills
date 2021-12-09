"use strict";
exports.id = 9276;
exports.ids = [9276];
exports.modules = {

/***/ 45940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-135c2966",
  "path": "/os/linux/centos/dns.html",
  "title": "Linux下搭建DNS服务器",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "安装",
      "slug": "安装",
      "children": []
    },
    {
      "level": 2,
      "title": "配置文件",
      "slug": "配置文件",
      "children": []
    },
    {
      "level": 2,
      "title": "备份文件",
      "slug": "备份文件",
      "children": []
    },
    {
      "level": 2,
      "title": "named.conf.bak",
      "slug": "named-conf-bak",
      "children": []
    },
    {
      "level": 2,
      "title": "named.rfc1912.zones",
      "slug": "named-rfc1912-zones",
      "children": []
    },
    {
      "level": 2,
      "title": "named.stage.com",
      "slug": "named-stage-com",
      "children": []
    },
    {
      "level": 2,
      "title": "named.172.16.100",
      "slug": "named-172-16-100",
      "children": []
    }
  ],
  "filePathRelative": "os/linux/centos/dns.md",
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

/***/ 44574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ dns_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/os/linux/centos/dns.html.vue?vue&type=template&id=782c24f8

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="linux下搭建dns服务器" tabindex="-1"><a class="header-anchor" href="#linux下搭建dns服务器" aria-hidden="true">#</a> Linux下搭建DNS服务器</h1><p>要在centos配置DNS服务器，要先安装DNS软件BIND</p><p>DNS缓存存放在哪里？如何清理？第一次访问网站会比较慢，应该是有DNS解析的过程</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum -y <span class="token function">install</span> bind*
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl start named.service
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">netstat</span> -an <span class="token operator">|</span> <span class="token function">grep</span> :53
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><p>drwxr-x---. 2 root named 6 Jun 1 11:26 named -rw-r--r--. 1 root root 621 Jun 1 11:26 named-chroot.files -rw-r-----. 1 root named 1806 Oct 21 10:57 named.conf -rw-r-----. 1 root named 1806 Jun 1 11:26 named.conf.bak -rw-r--r--. 1 root named 3923 Jun 1 11:26 named.iscdlv.key -rw-r-----. 1 root named 931 Jun 21 2007 named.rfc1912.zones -rw-r--r--. 1 root named 1886 Apr 13 2017 named.root.key</p><h2 id="备份文件" tabindex="-1"><a class="header-anchor" href="#备份文件" aria-hidden="true">#</a> 备份文件</h2><h2 id="named-conf-bak" tabindex="-1"><a class="header-anchor" href="#named-conf-bak" aria-hidden="true">#</a> named.conf.bak</h2><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>//
// named.conf
//
// Provided by Red Hat bind package to configure the ISC BIND named(8) DNS
// server as a caching only nameserver (as a localhost DNS resolver only).
//
// See /usr/share/doc/bind*/sample/ for example named configuration files.
//
// See the BIND Administrator&#39;s Reference Manual (ARM) for details about the
// configuration located in /usr/share/doc/bind-{version}/Bv9ARM.html

options {
        listen-on port 53 { 127.0.0.1; };
        listen-on-v6 port 53 { ::1; };
        directory       &quot;/var/named&quot;;
        dump-file       &quot;/var/named/data/cache_dump.db&quot;;
        statistics-file &quot;/var/named/data/named_stats.txt&quot;;
        memstatistics-file &quot;/var/named/data/named_mem_stats.txt&quot;;
        recursing-file  &quot;/var/named/data/named.recursing&quot;;
        secroots-file   &quot;/var/named/data/named.secroots&quot;;
        allow-query     { localhost; };

        /* 
         - If you are building an AUTHORITATIVE DNS server, do NOT enable recursion.
         - If you are building a RECURSIVE (caching) DNS server, you need to enable 
           recursion. 
         - If your recursive DNS server has a public IP address, you MUST enable access 
           control to limit queries to your legitimate users. Failing to do so will
           cause your server to become part of large scale DNS amplification 
           attacks. Implementing BCP38 within your network would greatly
           reduce such attack surface 
        */
        recursion yes;

        dnssec-enable yes;
        dnssec-validation yes;

        /* Path to ISC DLV key */
        bindkeys-file &quot;/etc/named.root.key&quot;;

        managed-keys-directory &quot;/var/named/dynamic&quot;;

        pid-file &quot;/run/named/named.pid&quot;;
        session-keyfile &quot;/run/named/session.key&quot;;
};

logging {
        channel default_debug {
                file &quot;data/named.run&quot;;
                severity dynamic;
        };
};

zone &quot;.&quot; IN {
        type hint;
        file &quot;named.ca&quot;;
};

include &quot;/etc/named.rfc1912.zones&quot;;
include &quot;/etc/named.root.key&quot;;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br></div></div><h2 id="named-rfc1912-zones" tabindex="-1"><a class="header-anchor" href="#named-rfc1912-zones" aria-hidden="true">#</a> named.rfc1912.zones</h2><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>// named.rfc1912.zones:
//
// Provided by Red Hat caching-nameserver package
//
// ISC BIND named zone configuration for zones recommended by
// RFC 1912 section 4.1 : localhost TLDs and address zones
// and http://www.ietf.org/internet-drafts/draft-ietf-dnsop-default-local-zones-02.txt
// (c)2007 R W Franks
//
// See /usr/share/doc/bind*/sample/ for example named configuration files.
//

zone &quot;localhost.localdomain&quot; IN {
        type master;
        file &quot;named.localhost&quot;;
        allow-update { none; };
};

zone &quot;localhost&quot; IN {
        type master;
        file &quot;named.localhost&quot;;
        allow-update { none; };
};

zone &quot;1.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.ip6.arpa&quot; IN {
        type master;
        file &quot;named.loopback&quot;;
        allow-update { none; };
};

zone &quot;1.0.0.127.in-addr.arpa&quot; IN {
        type master;
        file &quot;named.loopback&quot;;
        allow-update { none; };
};

zone &quot;0.in-addr.arpa&quot; IN {
        type master;
        file &quot;named.empty&quot;;
        allow-update { none; };
};
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><h2 id="named-stage-com" tabindex="-1"><a class="header-anchor" href="#named-stage-com" aria-hidden="true">#</a> named.stage.com</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>\$TTL 1H
@       IN SOA  @ rname.invalid. (
                                        0       ; serial
                                        1D      ; refresh
                                        1H      ; retry
                                        1W      ; expire
                                        3H )    ; minimum
@             IN NS dns.stage.com.

dns.stage.com.  IN A 172.16.100.100
www.stage.com.  IN A 172.16.100.100
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>\$TTL  1H
@       IN SOA dns.stage.com. lionel.mail.stage.com.(2020112301 3H 15M 1W 1D)
@       IN NS   dns.stage.com.


dns.stage.com.    IN A      172.16.203.130
www.stage.com.    IN A    172.16.203.140
goods.stage.com.   IN A    172.16.203.140
cart.stage.com.   IN A   172.16.203.140
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="named-172-16-100" tabindex="-1"><a class="header-anchor" href="#named-172-16-100" aria-hidden="true">#</a> named.172.16.100</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>\$TTL 1H
@       IN SOA  @ rname.invalid. (
                                        0       ; serial
                                        1D      ; refresh
                                        1H      ; retry
                                        1W      ; expire
                                        3H )    ; minimum
@             IN NS dns.stage.com.

100  IN PTR dns.stage.com.
100  IN PTR www.stage.com.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>\$TTL  600
@       IN SOA  dns.stage.com. lionel.mail.stage.com.(2020112301 3H 15M 1W 1D)
@       IN NS   dns.stage.com.

130    IN PTR    dns.stage.com.
140    IN PTR    www.stage.com.
140    IN PTR    goods.stage.com.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/os/linux/centos/dns.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const dns_html = (__exports__);

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
//# sourceMappingURL=9276.app.js.map