"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[4503],{16662:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-221ae921",path:"/server/vmware/advanced-networking-config.html",title:"桥接模式自定义网络配置",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"server/vmware/advanced-networking-config.md",git:{updatedTime:1639064924e3,contributors:[{name:"codingoer",email:"codingoer@163.com",commits:1}]}}},26019:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const e=(0,a(66252).uE)('<h1 id="桥接模式自定义网络配置" tabindex="-1"><a class="header-anchor" href="#桥接模式自定义网络配置" aria-hidden="true">#</a> 桥接模式自定义网络配置</h1><ul><li>修改成网段范围是 <strong>172.16.203.128 - 172.16.203.254</strong></li><li>网络配置文件目录位置 <strong>/Library/Preferences/VMware Fusion/</strong></li></ul><ol><li>启动虚拟机，查看IP地址</li></ol><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">vmnet8</span><span class="token punctuation">:</span> flags=8863&lt;UP<span class="token punctuation">,</span>BROADCAST<span class="token punctuation">,</span>SMART<span class="token punctuation">,</span>RUNNING<span class="token punctuation">,</span>SIMPLEX<span class="token punctuation">,</span>MULTICAST<span class="token punctuation">&gt;</span> mtu 1500\n\tether 00<span class="token punctuation">:</span>50<span class="token punctuation">:</span>56<span class="token punctuation">:</span>c0<span class="token punctuation">:</span><span class="token datetime number">00:08</span> \n\tinet 192.168.168.1 netmask 0xffffff00 broadcast 192.168.168.255\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="2"><li>修改<strong>nat.conf</strong>文件</li></ol><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># NAT gateway address</span>\nip = 172.16.203.2\nnetmask = 255.255.255.0\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="3"><li>修改<strong>dhcp.conf</strong>文件</li></ol><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>allow unknown<span class="token punctuation">-</span>clients;\ndefault<span class="token punctuation">-</span>lease<span class="token punctuation">-</span>time 1800;                <span class="token comment"># default is 30 minutes</span>\nmax<span class="token punctuation">-</span>lease<span class="token punctuation">-</span>time 7200;                    <span class="token comment"># default is 2 hours</span>\n\nsubnet 172.16.203.0 netmask 255.255.255.0 <span class="token punctuation">{</span>\n        range 172.16.203.128 172.16.203.254;\n        option broadcast<span class="token punctuation">-</span>address 172.16.203.255;\n        option domain<span class="token punctuation">-</span>name<span class="token punctuation">-</span>servers 172.16.203.2;\n        option domain<span class="token punctuation">-</span>name localdomain;\n        default<span class="token punctuation">-</span>lease<span class="token punctuation">-</span>time 1800;                <span class="token comment"># default is 30 minutes</span>\n        max<span class="token punctuation">-</span>lease<span class="token punctuation">-</span>time 7200;                    <span class="token comment"># default is 2 hours</span>\n        option netbios<span class="token punctuation">-</span>name<span class="token punctuation">-</span>servers 172.16.203.2;\n        option routers 172.16.203.2;\n<span class="token punctuation">}</span>\nhost vmnet8 <span class="token punctuation">{</span>\n        hardware ethernet 00<span class="token punctuation">:</span>50<span class="token punctuation">:</span>56<span class="token punctuation">:</span>C0<span class="token punctuation">:</span>00<span class="token punctuation">:</span>08;\n        fixed<span class="token punctuation">-</span>address 172.16.203.1;\n        option domain<span class="token punctuation">-</span>name<span class="token punctuation">-</span>servers 0.0.0.0;\n        option domain<span class="token punctuation">-</span>name &quot;&quot;;\n        option routers 0.0.0.0;\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><ol start="4"><li>修改<strong>networking</strong>文件</li></ol><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>answer VNET_8_DHCP yes\nanswer VNET_8_DHCP_CFG_HASH 15DA9EEAFA7B866650C685E3BA75D31A2584B849\nanswer VNET_8_HOSTONLY_NETMASK 255.255.255.0\nanswer VNET_8_HOSTONLY_SUBNET 172.16.203.0\nanswer VNET_8_NAT yes\nanswer VNET_8_VIRTUAL_ADAPTER yes\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="5"><li>重启虚拟机查看IP地址</li></ol><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">vmnet8</span><span class="token punctuation">:</span> flags=8863&lt;UP<span class="token punctuation">,</span>BROADCAST<span class="token punctuation">,</span>SMART<span class="token punctuation">,</span>RUNNING<span class="token punctuation">,</span>SIMPLEX<span class="token punctuation">,</span>MULTICAST<span class="token punctuation">&gt;</span> mtu 1500\n\tether 00<span class="token punctuation">:</span>50<span class="token punctuation">:</span>56<span class="token punctuation">:</span>c0<span class="token punctuation">:</span><span class="token datetime number">00:08</span> \n\tinet 172.16.203.1 netmask 0xffffff00 broadcast 172.16.203.255\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="6"><li>设置服务器静态IP地址</li></ol><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>TYPE=Ethernet\nPROXY_METHOD=none\nBROWSER_ONLY=no\nBOOTPROTO=static\nDEFROUTE=yes\nIPV4_FAILURE_FATAL=no\nIPV6INIT=yes\nIPV6_AUTOCONF=yes\nIPV6_DEFROUTE=yes\nIPV6_FAILURE_FATAL=no\nIPV6_ADDR_GEN_MODE=stable<span class="token punctuation">-</span>privacy\nNAME=ens33\nUUID=545b4299<span class="token punctuation">-</span>ed3a<span class="token punctuation">-</span>44d9<span class="token punctuation">-</span>8d0c<span class="token punctuation">-</span>28c4df0a49b3\nDEVICE=ens33\nONBOOT=yes\nIPADDR=172.16.203.130\nGATEWAY=172.16.203.2\nNETMASK=255.255.255.0\nDNS1=8.8.8.8\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><ol start="7"><li>重启网卡</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">service</span> network restart\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',16),p={},t=(0,a(83744).Z)(p,[["render",function(n,s){return e}]])},83744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);