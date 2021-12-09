"use strict";
exports.id = 3780;
exports.ids = [3780];
exports.modules = {

/***/ 48662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-217b134e",
  "path": "/os/linux/ubuntu/ubuntu-mac-theme.html",
  "title": "Ubuntu18.04搭建开发环境",
  "lang": "zh-CN",
  "frontmatter": {
    "sidebar": "auto"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "前言",
      "slug": "前言",
      "children": []
    },
    {
      "level": 2,
      "title": "U盘安装Ubuntu18.04",
      "slug": "u盘安装ubuntu18-04",
      "children": []
    },
    {
      "level": 2,
      "title": "Ubuntu18.04安装mac主题",
      "slug": "ubuntu18-04安装mac主题",
      "children": []
    },
    {
      "level": 2,
      "title": "Ubuntu18.04安装常用开发软件",
      "slug": "ubuntu18-04安装常用开发软件",
      "children": []
    }
  ],
  "filePathRelative": "os/linux/ubuntu/ubuntu-mac-theme.md",
  "git": {
    "updatedTime": 1639064924000,
    "contributors": [
      {
        "name": "codingoer",
        "email": "codingoer@163.com",
        "commits": 1
      }
    ]
  }
}


/***/ }),

/***/ 98336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ubuntu_mac_theme_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(21666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/os/linux/ubuntu/ubuntu-mac-theme.html.vue?vue&type=template&id=54005a7a



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="ubuntu18-04搭建开发环境" tabindex="-1"><a class="header-anchor" href="#ubuntu18-04搭建开发环境" aria-hidden="true">#</a> Ubuntu18.04搭建开发环境</h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>  鉴于新公司统一的开发环境是<code>ubuntu</code>操作系统，我开始接触并了解ubuntu系统。一些互联网公司选择ubuntu操作系统作为开发环境，因为ubuntu有如下优点（个人观点）</p><ul><li>Ubuntu是免费的，开源的</li><li>软件安装，升级方便（通过源安装nginx，nodeJs等）</li><li>UNIX Environment,使用命令行方式连接服务器并上传升级包。</li><li>作为开发环境Ubntu比Windows更适合</li></ul><h2 id="u盘安装ubuntu18-04" tabindex="-1"><a class="header-anchor" href="#u盘安装ubuntu18-04" aria-hidden="true">#</a> U盘安装Ubuntu18.04</h2><p>  同安装Windows操作系统一样，使用U盘安装很简单。首先找一个制作Linux系统的启动盘。使用<code>UNetbootin</code>或者<code>Rufus</code>或其他工具。</p><blockquote><p>这里不做过多描述，同安装Windows操作系统类似</p></blockquote><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>安装英文版系统要修改<code>locale</code>文件</p></div><p>安装完成后显示中文会有问题。有些地方显示中文会变成方块。比如浏览器中或者navicat里面的数据库记录。这是因为Ubuntu下的<code>Locale</code>文件，关于Locale文件，我的理解是就是定义软件运行时的语言环境。具体的含义可自行谷歌。 查看当前系统语言环境</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>locale
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="http://image.hualihai.cn/blog/0ce14a9d-8b53-42b4-8362-3e581e1a5a56" alt="locale"> 这里我只修改了<code>LC_CTYPE</code>和<code>LC_COLLATE</code>，就解决了中文乱码的问题。 修改方法：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> /etc/default/locale
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>记得重启机器。</p><h2 id="ubuntu18-04安装mac主题" tabindex="-1"><a class="header-anchor" href="#ubuntu18-04安装mac主题" aria-hidden="true">#</a> Ubuntu18.04安装mac主题</h2><p>  安装完成后就是红色背景的默认主题（太丑！），在<code>youtube</code>上找了一个视频，安装了mac主题。上截图： <img src="http://image.hualihai.cn/blog/d52e4424-0316-4239-ba66-1ebae5fc5574" alt="壁纸"><img src="http://image.hualihai.cn/blog/628ccf58-a3a9-4279-a618-735fc966a361" alt="Applications"><img src="http://image.hualihai.cn/blog/af2ed86e-8d96-4f60-9399-b289164f9635" alt="文件夹"></p><ol><li><p>在<code>Ubuntu Software</code>中安装应用<code>GNOME Tweaks</code><br><strong>tweak v. 拧；扭；拉；微调</strong> 其意思就是调整配置，可以设置自定义的主题，图标等自定义的配置。</p></li><li><p>在<code>Ubuntu Software</code>中安装扩展<code>User Themes</code></p></li><li><p><a href="http://www.gnome-look.org/" target="_blank" rel="noopener noreferrer">下载mac主题`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>，左边菜单栏选择<strong>GTK3 Themes</strong>，根据下载量选择喜欢的主题。我下载的是<code>macOS High Sierra</code><img src="http://image.hualihai.cn/blog/1b2a92f7-9f52-40f5-bb0f-a0d7ed6c6797" alt="Mac Themes"></p></li><li><p><a href="http://www.gnome-look.org/" target="_blank" rel="noopener noreferrer">下载图标`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>，左边菜单栏选择<strong>Icon Themes</strong>，根据下载量选择喜欢的图标。我下载的是<code>MacOS sierra ct</code><img src="http://image.hualihai.cn/blog/e7fc6b1a-78df-4571-861a-740dfc45d869" alt="Icon"></p></li><li><p>解压主题和图标，在<code>home</code>目录下创建<code>.themes</code>文件夹和<code>.icons</code>文件夹</p></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> ~/.themes
<span class="token function">mkdir</span> ~/.icons
<span class="token function">tar</span> -zxvf xxxxx -C ~/.icons
<span class="token function">tar</span> -zxvf xxxxx -C ~/.themes
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="6"><li>打开<code>Tweaks</code></li></ol><blockquote><p>Appearence -&gt; Themes -&gt; Application -&gt; Sierra-light-solid(你的主题)</p><p>Appearence -&gt; Themes -&gt; Icons -&gt; Macos-sierra-CT-0.8(你的图标)</p></blockquote><ol start="7"><li>在<code>Ubuntu Software</code>中安装扩展<code>Dash to Dock</code>，打开系统设置<code>Settings</code>，将参数设置如下</li></ol><blockquote><p>Icon size : 42<br> Positioin on screen : Bottom</p></blockquote><ol start="8"><li><p>在<code>Ubuntu Software</code>中安装扩展<code>Blyr</code>,这个扩展是选择应用的时候有阴影的效果。</p></li><li><p><a href="http://www.gnome-look.org/" target="_blank" rel="noopener noreferrer">下载Shell主题`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>，左边菜单栏选择<strong>Gnome Shell Themes</strong>，根据下载量选择喜欢的主题。我下载的是<code>macOS High Sierra a21</code><img src="http://image.hualihai.cn/blog/cd1f6a2f-aa2e-4cd3-bf27-87d7f16c0558" alt="shell themes"></p></li><li><p>解压刚才下载的<code>Shell Themes</code>文件，将含有<code>gnome-shell</code>文件夹的外层文件夹拷贝到<code>.themes</code>文件夹内：copy MacOS_HS to ~/.themes</p></li><li><p>打开<code>Tweaks</code></p></li></ol><blockquote><p>Appearance -&gt; Shell -&gt; Sierra-light-solid(你的主题)</p></blockquote><ol start="12"><li><p>在<code>Ubuntu Software</code>中安装扩展<code>NetSpeed</code>，可以实时显示网速</p></li><li><p><a href="https://www.gnome-look.org/" target="_blank" rel="noopener noreferrer">下载锁屏主题`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>，左边菜单栏选择<strong>GDM Themes</strong>,我下载的是<code>High Ubunterra</code><img src="http://image.hualihai.cn/blog/c0cea136-57ec-4015-8c3c-265c692cafc5" alt="GDM Themes"></p></li><li><p>执行文件里面的<code>install.sh</code>即可。</p></li><li><p>google搜索mac壁纸，选择你喜欢的壁纸，右键<code>Set As Wallpaper</code>。</p></li></ol><p>到此，mac主题安装完成。也可以根据自己的喜好安装其他好看的主题。其原理都和上述差不多。</p><p>安装完成后，我遇到一个问题：在选择应用的时候底部和侧面都出现了应用工具条，并且在锁屏的时候也出现了。在github上搜到了这个问题： https://github.com/micheleg/dash-to-dock/issues/649 解决办法是：移除默认的<code>ubuntu-dock</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mv</span> /usr/share/gnome-shell/extensions/ubuntu-dock@ubuntu.com ~/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="ubuntu18-04安装常用开发软件" tabindex="-1"><a class="header-anchor" href="#ubuntu18-04安装常用开发软件" aria-hidden="true">#</a> Ubuntu18.04安装常用开发软件</h2><ul><li>安装搜狗输入法</li></ul><ol><li>在Ubuntu Software中安装<code>Fctix</code>，<code>Fctix Configuration</code>，<code>fctix-qimpanel-configtool</code></li><li>下载搜狗输入法deb安装包并安装</li><li>在系统设置中设置</li></ol><blockquote><p>Region&amp;Language -&gt; Manage Installed Languages -&gt; Keyboard input method system : fctix</p></blockquote><ol start="4"><li>重启然后配置Fctix Configuration即可</li></ol><ul><li>安装chrome浏览器</li></ul><blockquote><p>wget https://dl.google.com/linux/direct/google-chrome-stable_current_i386.deb<br> wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb<br> sudo dpkg -i google-chrome-stable_current_i386.deb<br> sudo dpkg -i google-chrome-stable_current_amd64.deb</p></blockquote><ul><li>安装<code>Spring Tool Suite</code></li></ul><ol><li>下载<code>spring-tool-suite-3.9.5.RELEASE-e4.8.0-linux-gtk-x86_64.tar.gz</code></li><li>解压缩到<code>/opt/sts</code></li><li>在/usr/share/applications创建桌面图标: <code>touch STS.desktop</code></li></ol><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>[Desktop Entry]
Encoding=UTF-8
Name=STS
Comment=STS IDE
Exec=/usr/lib/opt/sts-bundle/sts-3.9.3.RELEASE/STS
Icon=/usr/lib/opt/sts-bundle/sts-3.9.3.RELEASE/icon.xpm
Terminal=false
StartupNotify=true
Type=Application
Categories=Application;Development;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li><p>安装<code>IntelliJ IDEA</code>，可以在Ubuntu Software中安装</p></li><li><p>安装<code>VIM</code></p></li><li><p>安装<code>Emacs</code></p></li><li><p>安装<code>Atom</code></p></li></ul><div class="custom-container warning"><p class="custom-container-title">警告</p><p>在Ubuntu Software中安装会有无法输入中文的问题，所以还是在官网下载deb安装包进行安装</p></div><ul><li><p>安装<code>GIT</code></p></li><li><p>安装<code>VLC</code>,在Ubuntu Software中安装</p></li><li><p>安装<code>virtualBox</code>，在Ubuntu Software中安装</p></li><li><p>安装<code>SSH</code></p></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> openssh-server
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>安装<code>Shutter</code>，在Ubuntu Software中安装</li></ul><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>编辑图片，在网上有解决办法：https://itsfoss.com/shutter-edit-button-disabled/</p></div><ul><li>安装<code>Teamviewer</code>，官网下载安装</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> dpkg -i teamviewer_13.2.13582_amd64.deb
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -f
<span class="token function">sudo</span> dpkg -i teamviewer_13.2.13582_amd64.deb
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>安装<code>Robo3T</code></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tar</span> -zxvf xxxx.tar.gz
<span class="token function">mv</span> robo3t-x.x.x-linux-x86_64-xxxxxxx robo3t
<span class="token function">sudo</span> <span class="token function">mv</span> robo3t /opt
<span class="token function">sudo</span> <span class="token function">ln</span> -s /opt/robo3t/bin/robo3t /usr/bin/robo3t
<span class="token builtin class-name">cd</span> /usr/share/applications
<span class="token function">sudo</span> <span class="token function">touch</span> robo3t.desktop
<span class="token function">sudo</span> <span class="token function">vim</span> robo3t.desktop
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><code>robo3t.desktop</code></p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>[Desktop Entry]
Version=1.0
Name=Robo 3T
Comment=Shell-centric MongoDB management tool
Type=Application
Categories=Development;
Exec=robo3t
Terminal=false
StartupNotify=true
Icon=robo3t
Encoding=UTF-8
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul><li>安装<code>Navicat</code></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tar</span> -zxvf xxxxx -C /opt/navicat
<span class="token function">sudo</span> <span class="token function">ln</span> -s /opt/navicat/navicat121_mysql_en_x64/start_navicat /usr/bin/navicat
<span class="token builtin class-name">cd</span> /usr/share/applications
<span class="token function">sudo</span> <span class="token function">touch</span> navicat.desktop
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><code>navicat.desktop</code></p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>[Desktop Entry]
Version=1.0
Name=Navicat
Comment=Mysql management tool
Type=Application
Categories=Development
Exec=/opt/navicat/navicat121_mysql_en_x64/start_navicat
Terminal=false
StartupNotify=true
Icon=/opt/navicat/navicat121_mysql_en_x64/navicat-icon.png
Encoding=UTF-8
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><code>jmeter.desktop</code></p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>[Desktop Entry]
Version=1.0
Name=JMeter
Comment=Testing web application
Type=Application
Categories=Development;
Exec=jmeter
Terminal=false
StartupNotify=true
Icon=/opt/JMeter/apache-jmeter-5.1.1/docs/images/jmeter_square.png
Encoding=UTF-8
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>[Desktop Entry]
Version=1.0
Name=Phpstorm
Comment=Phpstorm
Type=Application
Categories=Development;
Exec=phpstorm
Terminal=false
StartupNotify=true
Icon=/opt/PhpStorm-2019.1.3/PhpStorm-191.7479.51/bin/phpstorm.png
Encoding=UTF-8
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./.temp/pages/os/linux/ubuntu/ubuntu-mac-theme.html.vue?vue&type=template&id=54005a7a

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/os/linux/ubuntu/ubuntu-mac-theme.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const ubuntu_mac_theme_html = (__exports__);

/***/ }),

/***/ 83744:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ })

};
;
//# sourceMappingURL=3780.app.js.map