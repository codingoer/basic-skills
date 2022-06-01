import{d as s}from"./app.df89ce13.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=s(`<h1 id="command-line-interface" tabindex="-1"><a class="header-anchor" href="#command-line-interface" aria-hidden="true">#</a> Command Line Interface</h1><p>VuePress CLI is provided by @vuepress/cli package. It is included by the vuepress package, and you can also install it separately.</p><p>Run vuepress --help to get following help messages:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Usage:
  $ vuepress <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span>
Commands:
  dev <span class="token punctuation">[</span>sourceDir<span class="token punctuation">]</span>    Start development server
  build <span class="token punctuation">[</span>sourceDir<span class="token punctuation">]</span>  Build to static site
  info               Display environment information
For <span class="token function">more</span> info, run any <span class="token builtin class-name">command</span> with the <span class="token variable"><span class="token variable">\`</span>--help<span class="token variable">\`</span></span> flag:
  $ vuepress dev --help
  $ vuepress build --help
  $ vuepress info --help
Options:
  -v, --version  Display version number 
  -h, --help     Display this message 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="dev" tabindex="-1"><a class="header-anchor" href="#dev" aria-hidden="true">#</a> Dev</h2><p>Start a development server to develop your VuePress site locally.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Usage:
  $ vuepress dev <span class="token punctuation">[</span>sourceDir<span class="token punctuation">]</span>
Options:
  -c, --config <span class="token operator">&lt;</span>config<span class="token operator">&gt;</span>  Set path to config <span class="token function">file</span> 
  -p, --port <span class="token operator">&lt;</span>port<span class="token operator">&gt;</span>      Use specified port <span class="token punctuation">(</span>default: <span class="token number">8080</span><span class="token punctuation">)</span> 
  -t, --temp <span class="token operator">&lt;</span>temp<span class="token operator">&gt;</span>      Set the directory of the temporary files 
  --host <span class="token operator">&lt;</span>host<span class="token operator">&gt;</span>          Use specified <span class="token function">host</span> <span class="token punctuation">(</span>default: <span class="token number">0.0</span>.0.0<span class="token punctuation">)</span> 
  --cache <span class="token operator">&lt;</span>cache<span class="token operator">&gt;</span>        Set the directory of the cache files 
  --clean-temp           Clean the temporary files before dev 
  --clean-cache          Clean the cache files before dev 
  --open                 Open browser when ready 
  --debug                Enable debug mode 
  --no-watch             Disable watching page and config files <span class="token punctuation">(</span>default: <span class="token boolean">true</span><span class="token punctuation">)</span>
  -v, --version          Display version number 
  -h, --help             Display this message
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>Options set by CLI will override those options with the same name in your config file.</p></div><h2 id="build" tabindex="-1"><a class="header-anchor" href="#build" aria-hidden="true">#</a> Build</h2><p>Build your VuePress site to static files.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Usage:
  $ vuepress build <span class="token punctuation">[</span>sourceDir<span class="token punctuation">]</span>
Options:
  -c, --config <span class="token operator">&lt;</span>config<span class="token operator">&gt;</span>  Set path to config <span class="token function">file</span> 
  -d, --dest <span class="token operator">&lt;</span>dest<span class="token operator">&gt;</span>      Set the directory build output <span class="token punctuation">(</span>default: .vuepress/dist<span class="token punctuation">)</span> 
  -t, --temp <span class="token operator">&lt;</span>temp<span class="token operator">&gt;</span>      Set the directory of the temporary files 
  --cache <span class="token operator">&lt;</span>cache<span class="token operator">&gt;</span>        Set the directory of the cache files 
  --clean-temp           Clean the temporary files before build 
  --clean-cache          Clean the cache files before build 
  --debug                Enable debug mode 
  -v, --version          Display version number 
  -h, --help             Display this message
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>Options set by CLI will override those options with the same name in your config file.</p></div><h2 id="info" tabindex="-1"><a class="header-anchor" href="#info" aria-hidden="true">#</a> Info</h2><p>Outputs information about your system and dependencies.</p>`,14);function p(t,r){return e}var i=n(a,[["render",p],["__file","cli.html.vue"]]);export{i as default};
