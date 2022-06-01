import{d as n}from"./app.df89ce13.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="\u6A21\u62DF\u516C\u53F8\u5185\u7F51\u5F00\u53D1\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u6A21\u62DF\u516C\u53F8\u5185\u7F51\u5F00\u53D1\u73AF\u5883" aria-hidden="true">#</a> \u6A21\u62DF\u516C\u53F8\u5185\u7F51\u5F00\u53D1\u73AF\u5883</h1><p>\u4F7F\u7528<strong>172.16.203.140</strong>\u8FD9\u53F0\u673A\u5668</p><h2 id="\u7F16\u8BD1\u524D\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u524D\u51C6\u5907" aria-hidden="true">#</a> \u7F16\u8BD1\u524D\u51C6\u5907</h2><ol><li>\u4E0B\u8F7DNginx</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> http://nginx.org/download/nginx-1.18.0.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>\u89E3\u538B\u5B89\u88C5\u5305</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tar</span> -zxf nginx-1.18.0.tar.gz 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="https://image.hualihai.cn/blog/jaybSn.png" alt="jaybSn"></p><ol start="3"><li><p>\u5404\u4E2A\u76EE\u5F55\u7B80\u5355\u4ECB\u7ECD</p></li><li><p>\u4F7FNginx\u8BED\u6CD5\u5728VIM\u4E2D\u9AD8\u4EAE</p></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cp</span> -r contrib/vim/* ~/.vim/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="https://image.hualihai.cn/blog/3Zpniw.png" alt="3Zpniw"></p><h2 id="\u6267\u884C\u7F16\u8BD1" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u7F16\u8BD1" aria-hidden="true">#</a> \u6267\u884C\u7F16\u8BD1</h2><ol><li>\u67E5\u770B\u7F16\u8BD1\u652F\u6301\u7684\u53C2\u6570</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>./configure --help <span class="token operator">|</span> <span class="token function">more</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>\u6267\u884C\u7F16\u8BD1</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>./configure --prefix<span class="token operator">=</span>/usr/local/nginx --with-http_ssl_module
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3"><li>\u63D0\u793A\u7F3A\u5C11\u4EC0\u4E48\u5C31\u6309\u7167\u4EC0\u4E48</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> -y gcc-c++
yum <span class="token function">install</span> -y pcre pcre-devel
yum <span class="token function">install</span> -y openssl openssl-devel
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="4"><li>\u7F16\u8BD1\u5B8C\u6210\u4E4B\u540E</li></ol><p>\u7F16\u8BD1\u5B8C\u4E4B\u540E\u4F1A\u751F\u6210\u4E00\u4E9B\u4E2D\u95F4\u6587\u4EF6\u5728<code>objs</code>\u76EE\u5F55\u4E0B</p><p><img src="https://image.hualihai.cn/blog/yzNucL.png" alt="yzNucL"></p><p>objs\u4E0B\u7684<strong>ngx_modules.c</strong>\u51B3\u5B9A\u4E86\u54EA\u4E9B\u6A21\u5757\u4F1A\u88AB\u7F16\u8BD1</p><ol start="5"><li>\u6267\u884Cmake</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">make</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4F1A\u5728objs\u4E0B\u751F\u6210\u4E00\u4E9B\u4E2D\u95F4\u6587\u4EF6</p><p><img src="https://image.hualihai.cn/blog/gZKJyU.png" alt="gZKJyU"></p><ol start="6"><li>\u6267\u884Cmake install</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u4FEE\u6539nginx-conf" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539nginx-conf" aria-hidden="true">#</a> \u4FEE\u6539nginx.conf</h2><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
    #                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
    #                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;

    include /usr/local/nginx/conf/sites-available/*.conf;

}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h2 id="\u914D\u7F6E\u4E24\u53F0web\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u4E24\u53F0web\u670D\u52A1\u5668" aria-hidden="true">#</a> \u914D\u7F6E\u4E24\u53F0web\u670D\u52A1\u5668</h2><ol><li>goods.stage.com</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> /usr/local/nginx/conf/sites-available/goods.conf
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>server {
        listen       80;
        server_name  goods.stage.com;

        #charset koi8-r;

        #access_log  logs/goods.access.log  main;

        location / {
            #root   html;
            #index  index.html index.htm;
            proxy_read_timeout 30;
            proxy_pass http://goods.stage.com;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
}

upstream goods.stage.com {
    server 172.16.203.201:8080 weight=10;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><ol start="2"><li>cart.stage.com</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> /usr/local/nginx/conf/sites-available/cart.conf
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>server {
        listen       80;
        server_name  cart.stage.com;

        #charset koi8-r;

        #access_log  logs/goods.access.log  main;

        location / {
            #root   html;
            #index  index.html index.htm;
            proxy_read_timeout 30;
            proxy_pass http://cart.stage.com;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
}

upstream cart.stage.com {
    server 172.16.203.202:8080 weight=10;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="\u751F\u6210https\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210https\u8BC1\u4E66" aria-hidden="true">#</a> \u751F\u6210HTTPS\u8BC1\u4E66</h2><p>TODO \u5F85\u529E</p><p>https://www.jianshu.com/p/d17b9fd55080 https://www.jianshu.com/p/7cb5c2cffaaa https://www.jianshu.com/p/ba7f3f346bb8</p>`,40);function r(l,i){return e}var b=s(a,[["render",r],["__file","company-intranet-nginx.html.vue"]]);export{b as default};
