import{d as n}from"./app.df89ce13.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="\u6865\u63A5\u6A21\u5F0F\u81EA\u5B9A\u4E49\u7F51\u7EDC\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u6865\u63A5\u6A21\u5F0F\u81EA\u5B9A\u4E49\u7F51\u7EDC\u914D\u7F6E" aria-hidden="true">#</a> \u6865\u63A5\u6A21\u5F0F\u81EA\u5B9A\u4E49\u7F51\u7EDC\u914D\u7F6E</h1><ul><li>\u4FEE\u6539\u6210\u7F51\u6BB5\u8303\u56F4\u662F <strong>172.16.203.128 - 172.16.203.254</strong></li><li>\u7F51\u7EDC\u914D\u7F6E\u6587\u4EF6\u76EE\u5F55\u4F4D\u7F6E <strong>/Library/Preferences/VMware Fusion/</strong></li></ul><ol><li>\u542F\u52A8\u865A\u62DF\u673A\uFF0C\u67E5\u770BIP\u5730\u5740</li></ol><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">vmnet8</span><span class="token punctuation">:</span> flags=8863&lt;UP<span class="token punctuation">,</span>BROADCAST<span class="token punctuation">,</span>SMART<span class="token punctuation">,</span>RUNNING<span class="token punctuation">,</span>SIMPLEX<span class="token punctuation">,</span>MULTICAST<span class="token punctuation">&gt;</span> mtu 1500
	ether 00<span class="token punctuation">:</span>50<span class="token punctuation">:</span>56<span class="token punctuation">:</span>c0<span class="token punctuation">:</span><span class="token datetime number">00:08</span> 
	inet 192.168.168.1 netmask 0xffffff00 broadcast 192.168.168.255
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="2"><li>\u4FEE\u6539<strong>nat.conf</strong>\u6587\u4EF6</li></ol><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># NAT gateway address</span>
ip = 172.16.203.2
netmask = 255.255.255.0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="3"><li>\u4FEE\u6539<strong>dhcp.conf</strong>\u6587\u4EF6</li></ol><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>allow unknown<span class="token punctuation">-</span>clients;
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><ol start="4"><li>\u4FEE\u6539<strong>networking</strong>\u6587\u4EF6</li></ol><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>answer VNET_8_DHCP yes
answer VNET_8_DHCP_CFG_HASH 15DA9EEAFA7B866650C685E3BA75D31A2584B849
answer VNET_8_HOSTONLY_NETMASK 255.255.255.0
answer VNET_8_HOSTONLY_SUBNET 172.16.203.0
answer VNET_8_NAT yes
answer VNET_8_VIRTUAL_ADAPTER yes
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="5"><li>\u91CD\u542F\u865A\u62DF\u673A\u67E5\u770BIP\u5730\u5740</li></ol><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">vmnet8</span><span class="token punctuation">:</span> flags=8863&lt;UP<span class="token punctuation">,</span>BROADCAST<span class="token punctuation">,</span>SMART<span class="token punctuation">,</span>RUNNING<span class="token punctuation">,</span>SIMPLEX<span class="token punctuation">,</span>MULTICAST<span class="token punctuation">&gt;</span> mtu 1500
	ether 00<span class="token punctuation">:</span>50<span class="token punctuation">:</span>56<span class="token punctuation">:</span>c0<span class="token punctuation">:</span><span class="token datetime number">00:08</span> 
	inet 172.16.203.1 netmask 0xffffff00 broadcast 172.16.203.255
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="6"><li>\u8BBE\u7F6E\u670D\u52A1\u5668\u9759\u6001IP\u5730\u5740</li></ol><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>TYPE=Ethernet
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><ol start="7"><li>\u91CD\u542F\u7F51\u5361</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">service</span> network restart
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,16);function p(t,l){return e}var r=s(a,[["render",p],["__file","advanced-networking-config.html.vue"]]);export{r as default};
