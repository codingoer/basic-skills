"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[7754],{58746:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-79fe0947",path:"/framework/spring-framework/",title:"Spring Framework",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"应用上下文",slug:"应用上下文",children:[]}],filePathRelative:"framework/spring-framework/README.md",git:{updatedTime:1639064924e3,contributors:[{name:"codingoer",email:"codingoer@163.com",commits:1}]}}},50038:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(66252).uE)('<h1 id="spring-framework" tabindex="-1"><a class="header-anchor" href="#spring-framework" aria-hidden="true">#</a> Spring Framework</h1><p>https://www.tutorialspoint.com/spring/spring_bean_scopes.htm</p><h2 id="应用上下文" tabindex="-1"><a class="header-anchor" href="#应用上下文" aria-hidden="true">#</a> 应用上下文</h2><p>ApplicationListener</p><p>如何判断service方法中开启了事务？ 在springservice中开启事务，如果一个方法没有开启事务，中间调用开启事务的方法，不会开启事务</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>\n<span class="token keyword">public</span> <span class="token class-name">Long</span> <span class="token function">post</span><span class="token punctuation">(</span><span class="token class-name">Post</span> post<span class="token punctuation">,</span> <span class="token class-name">String</span> content<span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PostImageGoods</span><span class="token punctuation">&gt;</span></span> imageGoodsList<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">final</span> <span class="token class-name">String</span> key <span class="token operator">=</span> <span class="token string">&quot;upload-post-&quot;</span> <span class="token operator">+</span> post<span class="token punctuation">.</span><span class="token function">getTopicId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">AutoUnlock</span> ignored <span class="token operator">=</span> <span class="token class-name">LockUtils</span><span class="token punctuation">.</span><span class="token function">autoLock</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token function">savePost</span><span class="token punctuation">(</span>post<span class="token punctuation">,</span> content<span class="token punctuation">,</span> imageGoodsList<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ValidationRuntimeException</span><span class="token punctuation">(</span><span class="token class-name">StatusCode</span><span class="token punctuation">.</span>CLIENT_ERROR_ACCESS_TOO_FREQUENTLY_CODE<span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Spring事务的配置，传递级别</p><p>如果一个方法开启了事务，事务中有一个线程，线程里面的方法抛异常，事务会回滚吗？</p>',8),t={},e=(0,a(83744).Z)(t,[["render",function(n,s){return p}]])},83744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);