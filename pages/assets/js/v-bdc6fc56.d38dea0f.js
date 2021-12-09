"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[1294],{80402:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-bdc6fc56",path:"/server/vmware/company-intranet-nginx.html",title:"模拟公司内网开发环境",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"编译前准备",slug:"编译前准备",children:[]},{level:2,title:"执行编译",slug:"执行编译",children:[]},{level:2,title:"修改nginx.conf",slug:"修改nginx-conf",children:[]},{level:2,title:"配置两台web服务器",slug:"配置两台web服务器",children:[]},{level:2,title:"生成HTTPS证书",slug:"生成https证书",children:[]}],filePathRelative:"server/vmware/company-intranet-nginx.md",git:{updatedTime:1639064924e3,contributors:[{name:"codingoer",email:"codingoer@163.com",commits:1}]}}},52349:(n,s,a)=>{a.r(s),a.d(s,{default:()=>r});const e=(0,a(66252).uE)('<h1 id="模拟公司内网开发环境" tabindex="-1"><a class="header-anchor" href="#模拟公司内网开发环境" aria-hidden="true">#</a> 模拟公司内网开发环境</h1><p>使用<strong>172.16.203.140</strong>这台机器</p><h2 id="编译前准备" tabindex="-1"><a class="header-anchor" href="#编译前准备" aria-hidden="true">#</a> 编译前准备</h2><ol><li>下载Nginx</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> http://nginx.org/download/nginx-1.18.0.tar.gz\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li>解压安装包</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tar</span> -zxf nginx-1.18.0.tar.gz \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="https://image.hualihai.cn/blog/jaybSn.png" alt="jaybSn"></p><ol start="3"><li><p>各个目录简单介绍</p></li><li><p>使Nginx语法在VIM中高亮</p></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cp</span> -r contrib/vim/* ~/.vim/\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="https://image.hualihai.cn/blog/3Zpniw.png" alt="3Zpniw"></p><h2 id="执行编译" tabindex="-1"><a class="header-anchor" href="#执行编译" aria-hidden="true">#</a> 执行编译</h2><ol><li>查看编译支持的参数</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>./configure --help <span class="token operator">|</span> <span class="token function">more</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li>执行编译</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>./configure --prefix<span class="token operator">=</span>/usr/local/nginx --with-http_ssl_module\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3"><li>提示缺少什么就按照什么</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> -y gcc-c++\nyum <span class="token function">install</span> -y pcre pcre-devel\nyum <span class="token function">install</span> -y openssl openssl-devel\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="4"><li>编译完成之后</li></ol><p>编译完之后会生成一些中间文件在<code>objs</code>目录下</p><p><img src="https://image.hualihai.cn/blog/yzNucL.png" alt="yzNucL"></p><p>objs下的<strong>ngx_modules.c</strong>决定了哪些模块会被编译</p><ol start="5"><li>执行make</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">make</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>会在objs下生成一些中间文件</p><p><img src="https://image.hualihai.cn/blog/gZKJyU.png" alt="gZKJyU"></p><ol start="6"><li>执行make install</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">make</span> <span class="token function">install</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="修改nginx-conf" tabindex="-1"><a class="header-anchor" href="#修改nginx-conf" aria-hidden="true">#</a> 修改nginx.conf</h2><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>#user  nobody;\nworker_processes  1;\n\n#error_log  logs/error.log;\n#error_log  logs/error.log  notice;\n#error_log  logs/error.log  info;\n\n#pid        logs/nginx.pid;\n\n\nevents {\n    worker_connections  1024;\n}\n\n\nhttp {\n    include       mime.types;\n    default_type  application/octet-stream;\n\n    #log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;\n    #                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;\n    #                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;\n\n    #access_log  logs/access.log  main;\n\n    sendfile        on;\n    #tcp_nopush     on;\n\n    #keepalive_timeout  0;\n    keepalive_timeout  65;\n\n    #gzip  on;\n\n    include /usr/local/nginx/conf/sites-available/*.conf;\n\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h2 id="配置两台web服务器" tabindex="-1"><a class="header-anchor" href="#配置两台web服务器" aria-hidden="true">#</a> 配置两台web服务器</h2><ol><li>goods.stage.com</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> /usr/local/nginx/conf/sites-available/goods.conf\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>server {\n        listen       80;\n        server_name  goods.stage.com;\n\n        #charset koi8-r;\n\n        #access_log  logs/goods.access.log  main;\n\n        location / {\n            #root   html;\n            #index  index.html index.htm;\n            proxy_read_timeout 30;\n            proxy_pass http://goods.stage.com;\n        }\n\n        #error_page  404              /404.html;\n\n        # redirect server error pages to the static page /50x.html\n        #\n        error_page   500 502 503 504  /50x.html;\n        location = /50x.html {\n            root   html;\n        }\n}\n\nupstream goods.stage.com {\n    server 172.16.203.201:8080 weight=10;\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><ol start="2"><li>cart.stage.com</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> /usr/local/nginx/conf/sites-available/cart.conf\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>server {\n        listen       80;\n        server_name  cart.stage.com;\n\n        #charset koi8-r;\n\n        #access_log  logs/goods.access.log  main;\n\n        location / {\n            #root   html;\n            #index  index.html index.htm;\n            proxy_read_timeout 30;\n            proxy_pass http://cart.stage.com;\n        }\n\n        #error_page  404              /404.html;\n\n        # redirect server error pages to the static page /50x.html\n        #\n        error_page   500 502 503 504  /50x.html;\n        location = /50x.html {\n            root   html;\n        }\n}\n\nupstream cart.stage.com {\n    server 172.16.203.202:8080 weight=10;\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="生成https证书" tabindex="-1"><a class="header-anchor" href="#生成https证书" aria-hidden="true">#</a> 生成HTTPS证书</h2><p>TODO 待办</p><p>https://www.jianshu.com/p/d17b9fd55080 https://www.jianshu.com/p/7cb5c2cffaaa https://www.jianshu.com/p/ba7f3f346bb8</p>',40),l={},r=(0,a(83744).Z)(l,[["render",function(n,s){return e}]])},83744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);