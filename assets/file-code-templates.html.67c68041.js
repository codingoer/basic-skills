import{d as n}from"./app.df89ce13.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const s={},e=n(`<h1 id="file-and-code-templates" tabindex="-1"><a class="header-anchor" href="#file-and-code-templates" aria-hidden="true">#</a> File and code Templates</h1><h2 id="files" tabindex="-1"><a class="header-anchor" href="#files" aria-hidden="true">#</a> Files</h2><ul><li>class</li></ul><p>\u53EF\u4EE5\u66F4\u6362Header</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>#<span class="token keyword">if</span> <span class="token punctuation">(</span>$<span class="token punctuation">{</span>PACKAGE_NAME<span class="token punctuation">}</span> <span class="token operator">&amp;&amp;</span> $<span class="token punctuation">{</span>PACKAGE_NAME<span class="token punctuation">}</span> <span class="token operator">!=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token keyword">package</span> $<span class="token punctuation">{</span>PACKAGE_NAME<span class="token punctuation">}</span><span class="token punctuation">;</span>#end
#<span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&quot;File Header.java&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> $<span class="token punctuation">{</span>NAME<span class="token punctuation">}</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="includes" tabindex="-1"><a class="header-anchor" href="#includes" aria-hidden="true">#</a> Includes</h2><ul><li>\u65F6\u95F4\u683C\u5F0F\uFF08\u9ED8\u8BA4\u662F\u8DDF\u968F\u7CFB\u7EDF\u65F6\u95F4\u683C\u5F0F\uFF09\uFF0C\u53EF\u4EE5\u5728Date formats\u4E2D\u91CD\u5199\u65E5\u671F\u548C\u65F6\u95F4\u683C\u5F0F</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Description\uFF1A
 *
 * <span class="token keyword">@author</span> LiuQiang
 * <span class="token keyword">@date</span> Created in $DATE $TIME
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Description\uFF1A
 *
 * <span class="token keyword">@author</span> LiuQiang
 * <span class="token keyword">@date</span> Created in 2022/5/23 9:10 AM
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>\u65F6\u95F4\u683C\u5F0F2</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Description\uFF1A
 *
 * <span class="token keyword">@author</span> LiuQiang
 * <span class="token keyword">@date</span> Created in $DATE $HOUR:$MINUTE
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Description\uFF1A
 *
 * <span class="token keyword">@author</span> LiuQiang
 * <span class="token keyword">@date</span> Created in 2022/5/23 09:14
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,12);function p(l,c){return e}var t=a(s,[["render",p],["__file","file-code-templates.html.vue"]]);export{t as default};
