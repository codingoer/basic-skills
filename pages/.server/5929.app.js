"use strict";
exports.id = 5929;
exports.ids = [5929];
exports.modules = {

/***/ 91273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-5f19200f",
  "path": "/server/nginx/config.html",
  "title": "For more information on configuration, see:",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "server/nginx/config.md",
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

/***/ 86530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ config_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/server/nginx/config.html.vue?vue&type=template&id=64e32aca

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="for-more-information-on-configuration-see" tabindex="-1"><a class="header-anchor" href="#for-more-information-on-configuration-see" aria-hidden="true">#</a> For more information on configuration, see:</h1><h1 id="official-english-documentation-http-nginx-org-en-docs" tabindex="-1"><a class="header-anchor" href="#official-english-documentation-http-nginx-org-en-docs" aria-hidden="true">#</a> * Official English Documentation: http://nginx.org/en/docs/</h1><h1 id="official-russian-documentation-http-nginx-org-ru-docs" tabindex="-1"><a class="header-anchor" href="#official-russian-documentation-http-nginx-org-ru-docs" aria-hidden="true">#</a> * Official Russian Documentation: http://nginx.org/ru/docs/</h1><p>user nginx; worker_processes auto; error_log /var/log/nginx/error.log; pid /run/nginx.pid;</p><h1 id="load-dynamic-modules-see-usr-share-nginx-readme-dynamic" tabindex="-1"><a class="header-anchor" href="#load-dynamic-modules-see-usr-share-nginx-readme-dynamic" aria-hidden="true">#</a> Load dynamic modules. See /usr/share/nginx/README.dynamic.</h1><p>include /usr/share/nginx/modules/*.conf;</p><p>events { worker_connections 1024; }</p><p>http { log_format main &#39;\$remote_addr - \$remote_user [\$time_local] &quot;\$request&quot; &#39; &#39;\$status \$body_bytes_sent &quot;\$http_referer&quot; &#39; &#39;&quot;\$http_user_agent&quot; &quot;\$http_x_forwarded_for&quot;&#39;;</p><pre><code>access_log  /var/log/nginx/access.log  main;

sendfile            on;
tcp_nopush          on;
tcp_nodelay         on;
keepalive_timeout   65;
types_hash_max_size 2048;

include             /etc/nginx/mime.types;
default_type        application/octet-stream;

# Load modular configuration files from the /etc/nginx/conf.d directory.
# See http://nginx.org/en/docs/ngx_core_module.html#include
# for more information.
include /etc/nginx/conf.d/*.conf;

server {
    listen       80 default_server;
    listen       [::]:80 default_server;
    server_name  _;
    root         /usr/share/nginx/html;

    # Load configuration files for the default server block.
    include /etc/nginx/default.d/*.conf;

    location / {
    }

    error_page 404 /404.html;
        location = /40x.html {
    }

    error_page 500 502 503 504 /50x.html;
        location = /50x.html {
    }
}
</code></pre><h1 id="settings-for-a-tls-enabled-server" tabindex="-1"><a class="header-anchor" href="#settings-for-a-tls-enabled-server" aria-hidden="true">#</a> Settings for a TLS enabled server.</h1><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h1 id="server" tabindex="-1"><a class="header-anchor" href="#server" aria-hidden="true">#</a> server {</h1><h1 id="listen-443-ssl-http2-default-server" tabindex="-1"><a class="header-anchor" href="#listen-443-ssl-http2-default-server" aria-hidden="true">#</a> listen 443 ssl http2 default_server;</h1><h1 id="listen-443-ssl-http2-default-server-1" tabindex="-1"><a class="header-anchor" href="#listen-443-ssl-http2-default-server-1" aria-hidden="true">#</a> listen [::]:443 ssl http2 default_server;</h1><h1 id="server-name" tabindex="-1"><a class="header-anchor" href="#server-name" aria-hidden="true">#</a> server_name _;</h1><h1 id="root-usr-share-nginx-html" tabindex="-1"><a class="header-anchor" href="#root-usr-share-nginx-html" aria-hidden="true">#</a> root /usr/share/nginx/html;</h1><h1 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a></h1><h1 id="ssl-certificate-etc-pki-nginx-server-crt" tabindex="-1"><a class="header-anchor" href="#ssl-certificate-etc-pki-nginx-server-crt" aria-hidden="true">#</a> ssl_certificate &quot;/etc/pki/nginx/server.crt&quot;;</h1><h1 id="ssl-certificate-key-etc-pki-nginx-private-server-key" tabindex="-1"><a class="header-anchor" href="#ssl-certificate-key-etc-pki-nginx-private-server-key" aria-hidden="true">#</a> ssl_certificate_key &quot;/etc/pki/nginx/private/server.key&quot;;</h1><h1 id="ssl-session-cache-shared-ssl-1m" tabindex="-1"><a class="header-anchor" href="#ssl-session-cache-shared-ssl-1m" aria-hidden="true">#</a> ssl_session_cache shared:SSL:1m;</h1><h1 id="ssl-session-timeout-10m" tabindex="-1"><a class="header-anchor" href="#ssl-session-timeout-10m" aria-hidden="true">#</a> ssl_session_timeout 10m;</h1><h1 id="ssl-ciphers-high-anull-md5" tabindex="-1"><a class="header-anchor" href="#ssl-ciphers-high-anull-md5" aria-hidden="true">#</a> ssl_ciphers HIGH:!aNULL:!MD5;</h1><h1 id="ssl-prefer-server-ciphers-on" tabindex="-1"><a class="header-anchor" href="#ssl-prefer-server-ciphers-on" aria-hidden="true">#</a> ssl_prefer_server_ciphers on;</h1><h1 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-hidden="true">#</a></h1><h1 id="load-configuration-files-for-the-default-server-block" tabindex="-1"><a class="header-anchor" href="#load-configuration-files-for-the-default-server-block" aria-hidden="true">#</a> # Load configuration files for the default server block.</h1><h1 id="include-etc-nginx-default-d-conf" tabindex="-1"><a class="header-anchor" href="#include-etc-nginx-default-d-conf" aria-hidden="true">#</a> include /etc/nginx/default.d/*.conf;</h1><h1 id="-3" tabindex="-1"><a class="header-anchor" href="#-3" aria-hidden="true">#</a></h1><h1 id="location" tabindex="-1"><a class="header-anchor" href="#location" aria-hidden="true">#</a> location / {</h1><h1 id="-4" tabindex="-1"><a class="header-anchor" href="#-4" aria-hidden="true">#</a> }</h1><h1 id="-5" tabindex="-1"><a class="header-anchor" href="#-5" aria-hidden="true">#</a></h1><h1 id="error-page-404-404-html" tabindex="-1"><a class="header-anchor" href="#error-page-404-404-html" aria-hidden="true">#</a> error_page 404 /404.html;</h1><h1 id="location-40x-html" tabindex="-1"><a class="header-anchor" href="#location-40x-html" aria-hidden="true">#</a> location = /40x.html {</h1><h1 id="-6" tabindex="-1"><a class="header-anchor" href="#-6" aria-hidden="true">#</a> }</h1><h1 id="-7" tabindex="-1"><a class="header-anchor" href="#-7" aria-hidden="true">#</a></h1><h1 id="error-page-500-502-503-504-50x-html" tabindex="-1"><a class="header-anchor" href="#error-page-500-502-503-504-50x-html" aria-hidden="true">#</a> error_page 500 502 503 504 /50x.html;</h1><h1 id="location-50x-html" tabindex="-1"><a class="header-anchor" href="#location-50x-html" aria-hidden="true">#</a> location = /50x.html {</h1><h1 id="-8" tabindex="-1"><a class="header-anchor" href="#-8" aria-hidden="true">#</a> }</h1><h1 id="-9" tabindex="-1"><a class="header-anchor" href="#-9" aria-hidden="true">#</a> }</h1><p>}</p><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/server/nginx/config.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const config_html = (__exports__);

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
//# sourceMappingURL=5929.app.js.map