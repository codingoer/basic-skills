"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[59],{69406:(e,n,s)=>{s.r(n),s.d(n,{data:()=>a});const a={key:"v-0a073b30",path:"/os/linux/centos/openjdk.html",title:"Linux上安装openjdk",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"Centos安装openjdk",slug:"centos安装openjdk",children:[]}],filePathRelative:"os/linux/centos/openjdk.md",git:{updatedTime:1639064924e3,contributors:[{name:"codingoer",email:"codingoer@163.com",commits:1}]}}},10639:(e,n,s)=>{s.r(n),s.d(n,{default:()=>c});var a=s(66252);const o=(0,a._)("h1",{id:"linux上安装openjdk",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#linux上安装openjdk","aria-hidden":"true"},"#"),(0,a.Uk)(" Linux上安装openjdk")],-1),t=(0,a._)("h2",{id:"centos安装openjdk",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#centos安装openjdk","aria-hidden":"true"},"#"),(0,a.Uk)(" Centos安装openjdk")],-1),l={href:"https://openjdk.java.net/install/",target:"_blank",rel:"noopener noreferrer"},p=(0,a.Uk)("openjdk官网地址"),i=(0,a.uE)('<p>安装官网的命令会缺少javac命令</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">su</span> -c <span class="token string">&quot;yum install java-1.8.0-openjdk&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>必须要安装全部相关依赖</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum -y <span class="token function">install</span> java-1.8.0-openjdk*\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>安装完成后查找安装到了哪里，查看软连接的实际地址</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">which</span> java\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>https://www.jianshu.com/p/aa74930b5beb</p><p><img src="https://s-daily.freshtxp.com/bdTools/2020-11-24/NzcewL.png" alt="NzcewL"></p><p><img src="https://s-daily.freshtxp.com/bdTools/2020-11-24/BTTsOn.png" alt="BTTsOn"></p>',9),d={},c=(0,s(83744).Z)(d,[["render",function(e,n){const s=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[o,t,(0,a._)("p",null,[(0,a._)("a",l,[p,(0,a.Wm)(s)])]),i],64)}]])},83744:(e,n)=>{n.Z=(e,n)=>{const s=e.__vccOpts||e;for(const[e,a]of n)s[e]=a;return s}}}]);