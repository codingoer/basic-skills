"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[105],{95053:(e,a,n)=>{n.r(a),n.d(a,{data:()=>s});const s={key:"v-197f89aa",path:"/tools/maven/nexus.html",title:"Nexus搭建Maven私有仓库",lang:"zh-CN",frontmatter:{sidebar:"auto"},excerpt:"",headers:[{level:2,title:"私服介绍",slug:"私服介绍",children:[]},{level:2,title:"为什么要使用私服",slug:"为什么要使用私服",children:[]},{level:2,title:"安装Nexus",slug:"安装nexus",children:[]},{level:2,title:"登录Nexus",slug:"登录nexus",children:[]},{level:2,title:"Nexus的仓库与仓库组",slug:"nexus的仓库与仓库组",children:[]},{level:2,title:"Nexus的搜索",slug:"nexus的搜索",children:[]},{level:2,title:"配置Maven从Nexus下载构件",slug:"配置maven从nexus下载构件",children:[]},{level:2,title:"部署构件至Nexus",slug:"部署构件至nexus",children:[]},{level:2,title:"Nexus权限管理",slug:"nexus权限管理",children:[]}],filePathRelative:"tools/maven/nexus.md",git:{updatedTime:1639064924e3,contributors:[{name:"codingoer",email:"codingoer@163.com",commits:1}]}}},16831:(e,a,n)=>{n.r(a),n.d(a,{default:()=>b});var s=n(66252);const r=(0,s.uE)('<h1 id="nexus搭建maven私有仓库" tabindex="-1"><a class="header-anchor" href="#nexus搭建maven私有仓库" aria-hidden="true">#</a> Nexus搭建Maven私有仓库</h1><h2 id="私服介绍" tabindex="-1"><a class="header-anchor" href="#私服介绍" aria-hidden="true">#</a> 私服介绍</h2><div class="custom-container tip"><p class="custom-container-title">一句话概况</p><p>局域网内的仓库服务</p></div><p>私服是一种特殊的远程仓库，架设在<code>局域网内</code>的仓库服务，私服<code>代理广域网</code>上的远程仓库，供局域网内的Maven用户使用。 当Maven需要下架构件的时候，先从私服请求，如果私服上不存在构件，则从外部的远程仓库下载，并缓存在私服上，再为Maven的下载请求提供服务。一些<code>无法从外部仓库下载的构件</code>也能从本地上传到私服，供其他人使用。</p><p><img src="http://image.hualihai.cn/blog/61386de0-2148-4675-be8a-59537e37a367" alt="结构图"></p><h2 id="为什么要使用私服" tabindex="-1"><a class="header-anchor" href="#为什么要使用私服" aria-hidden="true">#</a> 为什么要使用私服</h2><ul><li>节省外网带宽</li><li>加速Maven构件</li><li>部署第三方构件，上传自己公司的jar包</li><li>有的公司不能访问外网</li></ul><p>通过建立自己的私服，降低中央仓库负荷，节省外网带宽，加速maven构件，自己部署构件等，从而更高效的使用maven。</p><h2 id="安装nexus" tabindex="-1"><a class="header-anchor" href="#安装nexus" aria-hidden="true">#</a> 安装Nexus</h2>',9),t={href:"https://help.sonatype.com/repomanager3",target:"_blank",rel:"noopener noreferrer"},i=(0,s.Uk)("Nexus Repository OSS"),l=(0,s.Uk)("是一个免费的，世界上最受欢迎的构件存储库，是典型的"),u=(0,s._)("code",null,"Java Web",-1),d=(0,s.Uk)("应用，内嵌了"),o=(0,s._)("code",null,"Jetty",-1),h=(0,s.Uk)("容器。"),c={href:"https://www.sonatype.com/nexus-repository-oss",target:"_blank",rel:"noopener noreferrer"},x=(0,s.Uk)("官网下载地址"),p=(0,s.Uk)(" 解压安装包"),v=(0,s.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tar</span> -xzvf nexus-3.15.2-01-unix.tar.gz\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Detected execution as &quot;root&quot; user. This is NOT recommended!</p></div><p>解压出来有两个文件夹：<code>nexus-3.15.2-01</code> AND <code>sonatype-work</code></p><p>nexus {start|stop|run|run-redirect|status|restart|force-reload}</p><h2 id="登录nexus" tabindex="-1"><a class="header-anchor" href="#登录nexus" aria-hidden="true">#</a> 登录Nexus</h2><h2 id="nexus的仓库与仓库组" tabindex="-1"><a class="header-anchor" href="#nexus的仓库与仓库组" aria-hidden="true">#</a> Nexus的仓库与仓库组</h2><h2 id="nexus的搜索" tabindex="-1"><a class="header-anchor" href="#nexus的搜索" aria-hidden="true">#</a> Nexus的搜索</h2><h2 id="配置maven从nexus下载构件" tabindex="-1"><a class="header-anchor" href="#配置maven从nexus下载构件" aria-hidden="true">#</a> 配置Maven从Nexus下载构件</h2><h2 id="部署构件至nexus" tabindex="-1"><a class="header-anchor" href="#部署构件至nexus" aria-hidden="true">#</a> 部署构件至Nexus</h2><h2 id="nexus权限管理" tabindex="-1"><a class="header-anchor" href="#nexus权限管理" aria-hidden="true">#</a> Nexus权限管理</h2>',10),m={},b=(0,n(83744).Z)(m,[["render",function(e,a){const n=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[r,(0,s._)("p",null,[(0,s._)("a",t,[i,(0,s.Wm)(n)]),l,u,d,o,h]),(0,s._)("p",null,[(0,s._)("a",c,[x,(0,s.Wm)(n)]),p]),v],64)}]])},83744:(e,a)=>{a.Z=(e,a)=>{const n=e.__vccOpts||e;for(const[e,s]of a)n[e]=s;return n}}}]);