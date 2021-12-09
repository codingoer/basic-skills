"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[9701],{41532:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-3a7b2a6c",path:"/java/collection/generics/generic-interface.html",title:"泛型接口",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"泛型接口的使用",slug:"泛型接口的使用",children:[]},{level:2,title:"JDK中的泛型接口",slug:"jdk中的泛型接口",children:[{level:3,title:"Comparable接口",slug:"comparable接口",children:[]},{level:3,title:"Comparator接口",slug:"comparator接口",children:[]}]}],filePathRelative:"java/collection/generics/generic-interface.md",git:{updatedTime:1639064924e3,contributors:[{name:"codingoer",email:"codingoer@163.com",commits:1}]}}},52154:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const e=(0,a(66252).uE)('<h1 id="泛型接口" tabindex="-1"><a class="header-anchor" href="#泛型接口" aria-hidden="true">#</a> 泛型接口</h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>接口也是可以泛型的，定义一个简单的泛型接口，T,P表示<strong>类型参数</strong></p></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Fill</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">,</span> <span class="token class-name">P</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>\n    <span class="token keyword">void</span> <span class="token function">fill</span><span class="token punctuation">(</span><span class="token class-name">T</span> t<span class="token punctuation">,</span> <span class="token class-name">P</span> p<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="泛型接口的使用" tabindex="-1"><a class="header-anchor" href="#泛型接口的使用" aria-hidden="true">#</a> 泛型接口的使用</h2><div class="custom-container danger"><p class="custom-container-title">注意点</p><p>定义泛型接口，不关心数据类型，关心的是接口的能力。</p></div><p>如果在业务当中，需要处理一些相似的业务逻辑，但是这些业务逻辑处理的数据类型不一样，就可以使用泛型接口。</p><p>将处理业务的能力<code>抽象成接口</code>，使用<strong>类型参数</strong>来接受不同的数据，使用的时候将<strong>接口当做方法的入参</strong>。</p><p>举个例子：</p><ol><li>首先定义业务接口</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Head</span><span class="token punctuation">&gt;</span></span> <span class="token function">getHead</span><span class="token punctuation">(</span><span class="token class-name">Fill</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Head</span><span class="token punctuation">,</span> <span class="token class-name">Category</span><span class="token punctuation">&gt;</span></span> fill<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li>业务接口实现</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Head</span><span class="token punctuation">&gt;</span></span> <span class="token function">getHead</span><span class="token punctuation">(</span><span class="token class-name">Fill</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Head</span><span class="token punctuation">,</span> <span class="token class-name">Category</span><span class="token punctuation">&gt;</span></span> fill<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>fill <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        fill<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> category<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="3"><li>调用接口</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>service<span class="token punctuation">.</span><span class="token function">getHead</span><span class="token punctuation">(</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> category<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>\n    head<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span>category<span class="token punctuation">.</span>getName<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="jdk中的泛型接口" tabindex="-1"><a class="header-anchor" href="#jdk中的泛型接口" aria-hidden="true">#</a> JDK中的泛型接口</h2><h3 id="comparable接口" tabindex="-1"><a class="header-anchor" href="#comparable接口" aria-hidden="true">#</a> Comparable接口</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Comparable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token class-name">T</span> o<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>T是类型参数</strong>，实现接口时指定具体类型。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">Integer</span> <span class="token keyword">extends</span> <span class="token class-name">Number</span> <span class="token keyword">implements</span> <span class="token class-name">Comparable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> anotherInteger<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">,</span> anotherInteger<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="comparator接口" tabindex="-1"><a class="header-anchor" href="#comparator接口" aria-hidden="true">#</a> Comparator接口</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>\n    <span class="token keyword">int</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token class-name">T</span> o1<span class="token punctuation">,</span> <span class="token class-name">T</span> o2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>T是类型参数</strong>，实现接口时指定具体类型。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">CaseInsensitiveComparator</span> <span class="token keyword">implements</span> <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">,</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token class-name">String</span> s1<span class="token punctuation">,</span> <span class="token class-name">String</span> s2<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        \n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',23),p={},t=(0,a(83744).Z)(p,[["render",function(n,s){return e}]])},83744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);