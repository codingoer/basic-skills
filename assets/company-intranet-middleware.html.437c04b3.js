import{d as n}from"./app.df89ce13.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const e={},a=n(`<h1 id="\u6A21\u62DF\u516C\u53F8\u5185\u7F51\u5F00\u53D1\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u6A21\u62DF\u516C\u53F8\u5185\u7F51\u5F00\u53D1\u73AF\u5883" aria-hidden="true">#</a> \u6A21\u62DF\u516C\u53F8\u5185\u7F51\u5F00\u53D1\u73AF\u5883</h1><h2 id="zookeeper\u96C6\u7FA4\u73AF\u5883\u642D\u5EFA" tabindex="-1"><a class="header-anchor" href="#zookeeper\u96C6\u7FA4\u73AF\u5883\u642D\u5EFA" aria-hidden="true">#</a> ZooKeeper\u96C6\u7FA4\u73AF\u5883\u642D\u5EFA</h2><ol><li>\u673A\u5668\u90E8\u7F72 - <strong>\u4E09\u8282\u70B9</strong>\uFF0C\u6BCF\u53F0\u673A\u5668\u8981\u5B89\u88C5JDK8</li></ol><ul><li>172.16.203.150</li><li>172.16.203.151</li><li>172.16.203.152</li></ul><ol start="2"><li>\u7F16\u8F91\u914D\u7F6E\u6587\u4EF6</li></ol><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code># The number of milliseconds of each tick
tickTime=2000
# The number of ticks that the initial 
# synchronization phase can take
initLimit=10
# The number of ticks that can pass between 
# sending a request and getting an acknowledgement
syncLimit=5
# the directory where the snapshot is stored.
# do not use /tmp for storage, /tmp here is just 
# example sakes.
dataDir=/home/lionel/data/zookeeper
# the port at which the clients will connect
clientPort=2181
# the maximum number of client connections.
# increase this if you need to handle more clients
#maxClientCnxns=60
#
# Be sure to read the maintenance section of the 
# administrator guide before turning on autopurge.
#
# http://zookeeper.apache.org/doc/current/zookeeperAdmin.html#sc_maintenance
#
# The number of snapshots to retain in dataDir
#autopurge.snapRetainCount=3
# Purge task interval in hours
# Set to &quot;0&quot; to disable auto purge feature
#autopurge.purgeInterval=1

## Metrics Providers
#
# https://prometheus.io Metrics Exporter
#metricsProvider.className=org.apache.zookeeper.metrics.prometheus.PrometheusMetricsProvider
#metricsProvider.httpPort=7000
#metricsProvider.exportJvmInfo=true

server.1=172.16.203.150:3333:3334
server.2=172.16.203.151:3333:3334
server.3=172.16.203.152:3333:3334
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><ol start="3"><li>\u521B\u5EFAmyid</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vim /home/lionel/data/zookeeper
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8F93\u5165\u6570\u5B57\u6807\u8BC6\uFF0C\u6BCF\u4E2A\u8282\u70B9id\u4E0D\u4E00\u81F4\u5373\u53EF</p><ol start="3"><li>\u914D\u7F6E\u73AF\u5883\u53D8\u91CF</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> .bash_profile
<span class="token builtin class-name">export</span> <span class="token assign-left variable">ZOOKEEPER_HOME</span><span class="token operator">=</span><span class="token environment constant">$HOME</span>/apache-zookeeper-3.6.2-bin
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$ZOOKEEPER_HOME</span>/bin:<span class="token environment constant">$PATH</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="https://image.hualihai.cn/blog/hawzdr.png" alt="hawzdr"></p><ol start="4"><li>\u542F\u52A8\u670D\u52A1\u4E0E\u68C0\u67E5</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>zkServer.sh start
<span class="token function">netstat</span> -an <span class="token operator">|</span> <span class="token function">grep</span> <span class="token number">2181</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="5"><li>\u5F00\u653E\u9632\u706B\u5899\u7AEF\u53E3</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>firewall-cmd --zone<span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">2181</span>/tcp --permanent 
firewall-cmd --zone<span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">3333</span>/tcp --permanent 
firewall-cmd --zone<span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">3334</span>/tcp --permanent 
firewall-cmd --reload
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="canal\u96C6\u7FA4\u73AF\u5883\u642D\u5EFA" tabindex="-1"><a class="header-anchor" href="#canal\u96C6\u7FA4\u73AF\u5883\u642D\u5EFA" aria-hidden="true">#</a> Canal\u96C6\u7FA4\u73AF\u5883\u642D\u5EFA</h2><ol><li>\u673A\u5668\u90E8\u7F72 - <strong>\u4E24\u8282\u70B9</strong></li></ol><ul><li>172.16.203.150</li><li>172.16.203.151</li></ul><ol start="2"><li></li></ol><h2 id="redis\u96C6\u7FA4\u73AF\u5883\u642D\u5EFA" tabindex="-1"><a class="header-anchor" href="#redis\u96C6\u7FA4\u73AF\u5883\u642D\u5EFA" aria-hidden="true">#</a> Redis\u96C6\u7FA4\u73AF\u5883\u642D\u5EFA</h2>`,21);function r(l,i){return a}var o=s(e,[["render",r],["__file","company-intranet-middleware.html.vue"]]);export{o as default};
