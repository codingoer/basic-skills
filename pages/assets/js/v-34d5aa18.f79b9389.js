"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[205],{32642:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-34d5aa18",path:"/java/collection/common/collection.html",title:"剖析Collection",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"java/collection/common/collection.md",git:{updatedTime:1639064924e3,contributors:[{name:"codingoer",email:"codingoer@163.com",commits:1}]}}},5507:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const t=(0,a(66252).uE)('<h1 id="剖析collection" tabindex="-1"><a class="header-anchor" href="#剖析collection" aria-hidden="true">#</a> 剖析Collection</h1><p>集合的根接口层次</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">default</span> <span class="token keyword">boolean</span> <span class="token function">removeIf</span><span class="token punctuation">(</span><span class="token class-name">Predicate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">super</span> <span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> filter<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">requireNonNull</span><span class="token punctuation">(</span>filter<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">boolean</span> removed <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n        <span class="token keyword">final</span> <span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> each <span class="token operator">=</span> <span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">while</span> <span class="token punctuation">(</span>each<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>filter<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>each<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                each<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                removed <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> removed<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>',3),p={},e=(0,a(83744).Z)(p,[["render",function(n,s){return t}]])},83744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);