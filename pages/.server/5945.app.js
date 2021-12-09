"use strict";
exports.id = 5945;
exports.ids = [5945];
exports.modules = {

/***/ 29217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-3c11ee79",
  "path": "/jvm/building-openjdk-8.html",
  "title": "Building OpenJDK",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "configure help",
      "slug": "configure-help",
      "children": [
        {
          "level": 3,
          "title": "configure problem",
          "slug": "configure-problem",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "environment",
      "slug": "environment",
      "children": [
        {
          "level": 3,
          "title": "configure",
          "slug": "configure",
          "children": []
        },
        {
          "level": 3,
          "title": "configure result",
          "slug": "configure-result",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "make problem",
      "slug": "make-problem",
      "children": []
    },
    {
      "level": 2,
      "title": "修改源码了",
      "slug": "修改源码了",
      "children": []
    }
  ],
  "filePathRelative": "jvm/building-openjdk-8.md",
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

/***/ 78243:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ building_openjdk_8_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/jvm/building-openjdk-8.html.vue?vue&type=template&id=5c7a7115

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 id="configure-help" tabindex="-1"><a class="header-anchor" href="#configure-help" aria-hidden="true">#</a> configure help</h2><p>Running generated-configure.sh \`configure&#39; configures OpenJDK jdk8 to adapt to many kinds of systems.</p><p>Usage: ./common/autoconf/configure [OPTION]... [VAR=VALUE]...</p><p>To assign environment variables (e.g., CC, CFLAGS...), specify them as VAR=VALUE. See below for descriptions of some of the useful variables.</p><p>Defaults for the options are specified in brackets.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Configuration:
  -h, --help              display this help and exit
      --help=short        display options specific to this package
      --help=recursive    display the short help of all the included packages
  -V, --version           display version information and exit
  -q, --quiet, --silent   do not print \`checking ...&#39; messages
      --cache-file=FILE   cache test results in FILE [disabled]
  -C, --config-cache      alias for \`--cache-file=config.cache&#39;
  -n, --no-create         do not create output files
      --srcdir=DIR        find the sources in DIR [configure dir or \`..&#39;]

Installation directories:
  --prefix=PREFIX         install architecture-independent files in PREFIX
                          [/usr/local]
  --exec-prefix=EPREFIX   install architecture-dependent files in EPREFIX
                          [PREFIX]

By default, \`make install&#39; will install all the files in
\`/usr/local/bin&#39;, \`/usr/local/lib&#39; etc.  You can specify
an installation prefix other than \`/usr/local&#39; using \`--prefix&#39;,
for instance \`--prefix=\$HOME&#39;.

For better control, use the options below.

Fine tuning of the installation directories:
  --bindir=DIR            user executables [EPREFIX/bin]
  --sbindir=DIR           system admin executables [EPREFIX/sbin]
  --libexecdir=DIR        program executables [EPREFIX/libexec]
  --sysconfdir=DIR        read-only single-machine data [PREFIX/etc]
  --sharedstatedir=DIR    modifiable architecture-independent data [PREFIX/com]
  --localstatedir=DIR     modifiable single-machine data [PREFIX/var]
  --libdir=DIR            object code libraries [EPREFIX/lib]
  --includedir=DIR        C header files [PREFIX/include]
  --oldincludedir=DIR     C header files for non-gcc [/usr/include]
  --datarootdir=DIR       read-only arch.-independent data root [PREFIX/share]
  --datadir=DIR           read-only architecture-independent data [DATAROOTDIR]
  --infodir=DIR           info documentation [DATAROOTDIR/info]
  --localedir=DIR         locale-dependent data [DATAROOTDIR/locale]
  --mandir=DIR            man documentation [DATAROOTDIR/man]
  --docdir=DIR            documentation root [DATAROOTDIR/doc/openjdk]
  --htmldir=DIR           html documentation [DOCDIR]
  --dvidir=DIR            dvi documentation [DOCDIR]
  --pdfdir=DIR            pdf documentation [DOCDIR]
  --psdir=DIR             ps documentation [DOCDIR]

X features:
  --x-includes=DIR    X include files are in DIR
  --x-libraries=DIR   X library files are in DIR

System types:
  --build=BUILD     configure for building on BUILD [guessed]
  --host=HOST       cross-compile to build programs to run on HOST [BUILD]
  --target=TARGET   configure for building compilers for TARGET [HOST]

Optional Features:
  --disable-option-checking  ignore unrecognized --enable/--with options
  --disable-FEATURE       do not include FEATURE (same as --enable-FEATURE=no)
  --enable-FEATURE[=ARG]  include FEATURE [ARG=yes]
  --enable-openjdk-only   suppress building custom source even if present
                          [disabled]
  --enable-debug          set the debug level to fastdebug (shorthand for
                          --with-debug-level=fastdebug) [disabled]
  --disable-headful       disable building headful support (graphical UI
                          support) [enabled]
  --enable-hotspot-test-in-build
                          run the Queens test after Hotspot build [disabled]
  --enable-unlimited-crypto
                          Enable unlimited crypto policy [disabled]
  --disable-debug-symbols disable generation of debug symbols [enabled]
  --disable-zip-debug-info
                          disable zipping of debug-info files [enabled]
  --enable-macosx-runtime-support
                          Deprecated. Option is kept for backwards
                          compatibility and is ignored
  --disable-freetype-bundling
                          disable bundling of the freetype library with the
                          build result [enabled on Windows or when using
                          --with-freetype, disabled otherwise]
  --enable-sjavac         use sjavac to do fast incremental compiles
                          [disabled]
  --disable-precompiled-headers
                          disable using precompiled headers when compiling C++
                          [enabled]
  --disable-ccache        disable using ccache to speed up recompilations
                          [enabled]

Optional Packages:
  --with-PACKAGE[=ARG]    use PACKAGE [ARG=yes]
  --without-PACKAGE       do not use PACKAGE (same as --with-PACKAGE=no)
  --with-custom-make-dir  use this directory for custom build/make files
  --with-target-bits      build 32-bit or 64-bit binaries (for platforms that
                          support it), e.g. --with-target-bits=32 [guessed]
  --with-sys-root         pass this sys-root to the compilers and tools (for
                          cross-compiling)
  --with-tools-dir        search this directory for compilers and tools (for
                          cross-compiling)
  --with-devkit           use this directory as base for tools-dir and
                          sys-root (for cross-compiling)
  --with-jdk-variant      JDK variant to build (normal) [normal]
  --with-jvm-interpreter  JVM interpreter to build (template, cpp) [template]
  --with-jvm-variants     JVM variants (separated by commas) to build (server,
                          client, minimal1, kernel, zero, zeroshark, core)
                          [server]
  --with-debug-level      set the debug level (release, fastdebug, slowdebug)
                          [release]
  --with-conf-name        use this as the name of the configuration [generated
                          from important configuration options]
  --with-builddeps-conf   use this configuration file for the builddeps
  --with-builddeps-server download and use build dependencies from this server
                          url
  --with-builddeps-dir    store downloaded build dependencies here
                          [/localhome/builddeps]
  --with-builddeps-group  chgrp the downloaded build dependencies to this
                          group
  --with-cacerts-file     specify alternative cacerts file
  --with-milestone        Set milestone value for build [internal]
  --with-update-version   Set update version value for build [b00]
  --with-user-release-suffix
                          Add a custom string to the version string if build
                          number isn&#39;t set.[username_builddateb00]
  --with-build-number     Set build number value for build [b00]
  --with-copyright-year   Set copyright year value for build [current year]
  --with-boot-jdk         path to Boot JDK (used to bootstrap build) [probed]
  --with-boot-jdk-jvmargs specify JVM arguments to be passed to all
                          invocations of the Boot JDK, overriding the default
                          values, e.g --with-boot-jdk-jvmargs=&quot;-Xmx8G
                          -enableassertions&quot;
  --with-add-source-root  for each and every source directory, look in this
                          additional source root for the same directory; if it
                          exists and have files in it, include it in the build
  --with-override-source-root
                          for each and every source directory, look in this
                          override source root for the same directory; if it
                          exists, use that directory instead and ignore the
                          directory in the original source root
  --with-adds-and-overrides
                          use the subdirs &#39;adds&#39; and &#39;overrides&#39; in the
                          specified directory as add-source-root and
                          override-source-root
  --with-override-langtools
                          use this langtools dir for the build
  --with-override-corba   use this corba dir for the build
  --with-override-jaxp    use this jaxp dir for the build
  --with-override-jaxws   use this jaxws dir for the build
  --with-override-hotspot use this hotspot dir for the build
  --with-override-nashorn use this nashorn dir for the build
  --with-override-jdk     use this jdk dir for the build
  --with-import-hotspot   import hotspot binaries from this jdk image or
                          hotspot build dist dir instead of building from
                          source
  --with-msvcr-dll        copy this msvcr100.dll into the built JDK (Windows
                          only) [probed]
  --with-dxsdk            Deprecated. Option is kept for backwards
                          compatibility and is ignored
  --with-dxsdk-lib        Deprecated. Option is kept for backwards
                          compatibility and is ignored
  --with-dxsdk-include    Deprecated. Option is kept for backwards
                          compatibility and is ignored
  --with-jtreg            Regression Test Harness [probed]
  --with-extra-cflags     extra flags to be used when compiling jdk c-files
  --with-extra-cxxflags   extra flags to be used when compiling jdk c++-files
  --with-extra-ldflags    extra flags to be used when linking jdk
  --with-x                use the X Window System
  --with-cups             specify prefix directory for the cups package
                          (expecting the headers under PATH/include)
  --with-cups-include     specify directory for the cups include files
  --with-freetype         specify prefix directory for the freetype package
                          (expecting the libraries under PATH/lib and the
                          headers under PATH/include)
  --with-freetype-include specify directory for the freetype include files
  --with-freetype-lib     specify directory for the freetype library
  --with-alsa             specify prefix directory for the alsa package
                          (expecting the libraries under PATH/lib and the
                          headers under PATH/include)
  --with-alsa-include     specify directory for the alsa include files
  --with-alsa-lib         specify directory for the alsa library
  --with-giflib           use giflib from build system or OpenJDK source
                          (system, bundled) [bundled]
  --with-zlib             use zlib from build system or OpenJDK source
                          (system, bundled) [bundled]
  --with-stdc++lib=&lt;static&gt;,&lt;dynamic&gt;,&lt;default&gt;
                          force linking of the C++ runtime on Linux to either
                          static or dynamic, default is static with dynamic as
                          fallback
  --with-num-cores        number of cores in the build system, e.g.
                          --with-num-cores=8 [probed]
  --with-memory-size      memory (in MB) available in the build system, e.g.
                          --with-memory-size=1024 [probed]
  --with-jobs             number of parallel jobs to let make run [calculated
                          based on cores and memory]
  --with-sjavac-server-java
                          use this java binary for running the sjavac
                          background server [Boot JDK java]
  --with-ccache-dir       where to store ccache files [~/.ccache]

Some influential environment variables:
  PKG_CONFIG  path to pkg-config utility
  CC          C compiler command
  CFLAGS      C compiler flags
  LDFLAGS     linker flags, e.g. -L&lt;lib dir&gt; if you have libraries in a
              nonstandard directory &lt;lib dir&gt;
  LIBS        libraries to pass to the linker, e.g. -l&lt;library&gt;
  CPPFLAGS    (Objective) C/C++ preprocessor flags, e.g. -I&lt;include dir&gt; if
              you have headers in a nonstandard directory &lt;include dir&gt;
  CXX         C++ compiler command
  CXXFLAGS    C++ compiler flags
  OBJC        Objective C compiler command
  OBJCFLAGS   Objective C compiler flags
  CPP         C preprocessor
  CXXCPP      C++ preprocessor
  XMKMF       Path to xmkmf, Makefile generator for X Window System
  FREETYPE_CFLAGS
              C compiler flags for FREETYPE, overriding pkg-config
  FREETYPE_LIBS
              linker flags for FREETYPE, overriding pkg-config
  ALSA_CFLAGS C compiler flags for ALSA, overriding pkg-config
  ALSA_LIBS   linker flags for ALSA, overriding pkg-config
  LIBFFI_CFLAGS
              C compiler flags for LIBFFI, overriding pkg-config
  LIBFFI_LIBS linker flags for LIBFFI, overriding pkg-config

Use these variables to override the choices made by \`configure&#39; or to help
it to find libraries and programs with nonstandard names/locations.

Report bugs to &lt;build-dev@openjdk.java.net&gt;.
OpenJDK home page: &lt;http://openjdk.java.net&gt;.

Additional (non-autoconf) OpenJDK Options:
  --openjdk-target=TARGET cross-compile with TARGET as target platform
                          (i.e. the one you will run the resulting binary on).
                          Equivalent to --host=TARGET --target=TARGET
                          --build=&lt;current platform&gt;
  --debug-configure       Run the configure script with additional debug
                          logging enabled.

Please be aware that, when cross-compiling, the OpenJDK configure script will
generally use &#39;target&#39; where autoconf traditionally uses &#39;host&#39;.

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br></div></div><h1 id="building-openjdk" tabindex="-1"><a class="header-anchor" href="#building-openjdk" aria-hidden="true">#</a> Building OpenJDK</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew <span class="token function">install</span> freetype
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="configure-problem" tabindex="-1"><a class="header-anchor" href="#configure-problem" aria-hidden="true">#</a> configure problem</h3><p>cannot execute binary file mac -&gt; 安装mac版本的bootJDK</p><p>GCC compiler is required. Try setting --with-tools-dir.</p><ol><li></li></ol><p>configure: error: GCC compiler is required. Try setting --with-tools-dir.</p><p>注释掉两行：</p><p>20323 21833</p><p>https://blog.csdn.net/quantum7/article/details/98939646 https://blog.csdn.net/quantum7/article/details/98939646 https://blog.csdn.net/manageer/article/details/72812149</p><ol start="2"><li></li></ol><p>configure: error: Could not find freetype!</p><p>configure: error: Need both freetype lib and include paths. Consider using --with-freetype instead.</p><p>https://blog.csdn.net/lizhengjava/article/details/60138890</p><h2 id="environment" tabindex="-1"><a class="header-anchor" href="#environment" aria-hidden="true">#</a> environment</h2><p>export COMPILER_WARNINGS_FATAL=false</p><p>export LANG=C export CC=clang export CXX=clang++ export USE_CLANG=true export COMPILER_WARNINGS_FATAL=false</p><h3 id="configure" tabindex="-1"><a class="header-anchor" href="#configure" aria-hidden="true">#</a> configure</h3><p>bash ./configure --with-debug-level=slowdebug --with-jvm-variants=server --with-target-bits=64 --with-num-cores=6 --with-memory-size=8000 --with-boot-jdk=/Library/Java/JavaVirtualMachines/jdk1.7.0_80.jdk/Contents/Home --with-sys-root=/Library/Developer/CommandLineTools/SDKs/MacOSX10.14.sdk --with-freetype-include=/usr/local/include/freetype2 --with-freetype-lib=/usr/local/lib/</p><p>bash ./configure --with-debug-level=slowdebug --with-jvm-variants=server --with-target-bits=64 --with-num-cores=6 --with-memory-size=8000 --with-boot-jdk=/Library/Java/JavaVirtualMachines/jdk1.7.0_80.jdk/Contents/Home --with-freetype-include=/usr/local/include/freetype2 --with-freetype-lib=/usr/local/lib/</p><p>--host=x86_64-linux-gnu</p><h3 id="configure-result" tabindex="-1"><a class="header-anchor" href="#configure-result" aria-hidden="true">#</a> configure result</h3><p>liuqiangdeMacBook-Pro-2:openjdk lionel\$ bash ./configure --with-debug-level=slowdebug --with-jvm-variants=server --with-target-bits=64 --with-num-cores=6 --with-memory-size=8000 --with-boot-jdk=/Library/Java/JavaVirtualMachines/jdk1.7.0_80.jdk/Contents/Home --with-sys-root=/Library/Developer/CommandLineTools/SDKs/MacOSX10.14.sdk --with-freetype-include=/usr/local/include/freetype2 --with-freetype-lib=/usr/local/lib/ Running generated-configure.sh configure: Configuration created at Wed May 19 23:49:36 CST 2021. configure: configure script generated at timestamp 1573688723. checking for basename... /usr/bin/basename checking for bash... /bin/bash checking for cat... /bin/cat checking for chmod... /bin/chmod checking for cmp... /usr/bin/cmp checking for comm... /usr/bin/comm checking for cp... /bin/cp checking for cpio... /usr/bin/cpio checking for cut... /usr/bin/cut checking for date... /bin/date checking for gdiff... no checking for diff... /usr/bin/diff checking for dirname... /usr/bin/dirname checking for echo... /bin/echo checking for expr... /bin/expr checking for file... /usr/bin/file checking for find... /usr/bin/find checking for head... /usr/bin/head checking for ln... /bin/ln checking for ls... /bin/ls checking for mkdir... /bin/mkdir checking for mktemp... /usr/bin/mktemp checking for mv... /bin/mv checking for printf... /usr/bin/printf checking for rm... /bin/rm checking for sh... /bin/sh checking for sort... /usr/bin/sort checking for tail... /usr/bin/tail checking for tar... /usr/bin/tar checking for tee... /usr/bin/tee checking for touch... /usr/bin/touch checking for tr... /usr/bin/tr checking for uname... /usr/bin/uname checking for uniq... /usr/bin/uniq checking for wc... /usr/bin/wc checking for which... /usr/bin/which checking for xargs... /usr/bin/xargs checking for gawk... no checking for mawk... no checking for nawk... no checking for awk... awk checking for grep that handles long lines and -e... /usr/bin/grep checking for egrep... /usr/bin/grep -E checking for fgrep... /usr/bin/grep -F checking for a sed that does not truncate output... /usr/bin/sed checking for nawk... no checking for gawk... no checking for awk... /usr/bin/awk checking for cygpath... no checking for readlink... /usr/bin/readlink checking for df... /bin/df checking for SetFile... /usr/bin/SetFile checking build system type... x86_64-apple-darwin18.2.0 checking host system type... x86_64-apple-darwin18.2.0 checking target system type... x86_64-apple-darwin18.2.0 checking openjdk-build os-cpu... macosx-x86_64 checking openjdk-target os-cpu... macosx-x86_64 configure: --with-target-bits are set to build platform address size; argument has no meaning checking compilation type... native checking for presence of closed sources... no checking if closed source is suppressed (openjdk-only)... no checking which variant of the JDK to build... normal checking which interpreter of the JVM to build... template checking which variants of the JVM to build... server checking which debug level to use... slowdebug checking what configuration name to use... macosx-x86_64-normal-server-slowdebug checking for apt-get... no checking for yum... no checking for port... no checking for pkgutil... pkgutil checking for gmake... no checking for make... /usr/bin/make configure: Testing potential make at /usr/bin/make, found using make in PATH configure: Resolving FOUND_MAKE (as /usr/bin/make) failed, using /usr/bin/make directly. configure: Using GNU make 3.81 (or later) at /usr/bin/make (version: GNU Make 3.81) checking if find supports -delete... yes checking for unzip... /usr/bin/unzip checking for zip... /usr/bin/zip checking for ldd... no checking for otool... /usr/bin/otool checking for readelf... no checking for greadelf... no checking for hg... no checking for stat... /usr/bin/stat checking for time... /usr/bin/time checking for dsymutil... /usr/bin/dsymutil checking for xattr... /usr/bin/xattr checking for codesign... /usr/bin/codesign checking if openjdk_codesign certificate is present... no checking for pkg-config... no checking for 7z... no checking for unzip... unzip checking for wget... wget checking headful support... include support for both headful and headless configure: Found potential Boot JDK using configure arguments checking for Boot JDK... /Library/Java/JavaVirtualMachines/jdk1.7.0_80.jdk/Contents/Home checking Boot JDK version... java version &quot;1.7.0_80&quot; Java(TM) SE Runtime Environment (build 1.7.0_80-b15) Java HotSpot(TM) 64-Bit Server VM (build 24.80-b11, mixed mode) checking for java in Boot JDK... ok checking for javac in Boot JDK... ok checking for javah in Boot JDK... ok checking for javap in Boot JDK... ok checking for jar in Boot JDK... ok checking for rmic in Boot JDK... ok checking for native2ascii in Boot JDK... ok checking flags for boot jdk java command ...<br> checking flags for boot jdk java command for big workloads... -Xms64M -Xmx1600M -XX:ThreadStackSize=1536 -XX:PermSize=32m -XX:MaxPermSize=160m checking flags for boot jdk java command for small workloads... -XX:+UseSerialGC -Xms32M -Xmx512M checking for jtreg... no checking for gcc... /usr/bin/gcc configure: Resolving CC (as /usr/bin/gcc) failed, using /usr/bin/gcc directly. checking resolved symbolic links for CC... /usr/bin/gcc checking if CC is disguised ccache... no, keeping CC configure: The C compiler (located as /usr/bin/gcc) does not seem to be the required GCC compiler. configure: The result from running with --version was: &quot;Configured with: --prefix=/Library/Developer/CommandLineTools/usr --with-gxx-include-dir=/Library/Developer/CommandLineTools/SDKs/MacOSX10.14.sdk/usr/include/c++/4.2.1&quot; configure: Using C compiler version (located at /usr/bin/gcc) checking whether the C compiler works... yes checking for C compiler default output file name... a.out checking for suffix of executables... checking whether we are cross compiling... no checking for suffix of object files... o checking whether we are using the GNU C compiler... yes checking whether /usr/bin/gcc accepts -g... yes checking for /usr/bin/gcc option to accept ISO C89... none needed checking for g++... /usr/bin/g++ configure: Resolving CXX (as /usr/bin/g++) failed, using /usr/bin/g++ directly. checking resolved symbolic links for CXX... /usr/bin/g++ checking if CXX is disguised ccache... no, keeping CXX configure: The C++ compiler (located as /usr/bin/g++) does not seem to be the required GCC compiler. configure: The result from running with --version was: &quot;Configured with: --prefix=/Library/Developer/CommandLineTools/usr --with-gxx-include-dir=/Library/Developer/CommandLineTools/SDKs/MacOSX10.14.sdk/usr/include/c++/4.2.1&quot; configure: Using C++ compiler version (located at /usr/bin/g++) checking whether we are using the GNU C++ compiler... yes checking whether /usr/bin/g++ accepts -g... yes checking for gcc... gcc checking whether we are using the GNU Objective C compiler... yes checking whether gcc accepts -g... yes configure: Rewriting OBJC to &quot;/usr/bin/gcc&quot; checking for ar... ar configure: Rewriting AR to &quot;/usr/bin/ar&quot; checking how to run the C preprocessor... /usr/bin/gcc -E configure: Resolving CPP (as /usr/bin/gcc) failed, using /usr/bin/gcc directly. checking how to run the C++ preprocessor... /usr/bin/g++ -E configure: Resolving CXXCPP (as /usr/bin/g++) failed, using /usr/bin/g++ directly. checking for nm... nm configure: Rewriting NM to &quot;/usr/bin/nm&quot; checking for strip... strip configure: Rewriting STRIP to &quot;/usr/bin/strip&quot; checking for gobjdump... no checking for objdump... objdump configure: Rewriting OBJDUMP to &quot;/usr/bin/objdump&quot; checking for lipo... /usr/bin/lipo configure: Resolving LIPO (as /usr/bin/lipo) failed, using /usr/bin/lipo directly. checking for ANSI C header files... yes checking for sys/types.h... yes checking for sys/stat.h... yes checking for stdlib.h... yes checking for string.h... yes checking for memory.h... yes checking for strings.h... yes checking for inttypes.h... yes checking for stdint.h... yes checking for unistd.h... yes checking stdio.h usability... yes checking stdio.h presence... yes checking for stdio.h... yes checking size of int *... 8 checking for target address size... 64 bits checking whether byte ordering is bigendian... no checking if compiler supports &quot;-m64&quot;... yes checking if compiler supports &quot;-m64&quot;... yes checking if we should generate debug symbols... true checking if we should zip debug-info files... yes checking what is not needed on MacOSX?... alsa pulse x11 checking for Mac OS X Java Framework... no checking for X... no checking for X11/extensions/shape.h... no checking cups/cups.h usability... yes checking cups/cups.h presence... yes checking for cups/cups.h... yes checking cups/ppd.h usability... yes checking cups/ppd.h presence... yes checking for cups/ppd.h... yes configure: Found freetype include files at /usr/local/include/freetype2 using --with-freetype checking for freetype includes... /usr/local/include/freetype2 checking for freetype libraries... /usr/local/lib checking if we can compile and link with freetype... yes checking if we should bundle freetype... yes checking for main in -ljpeg... no configure: Will use jpeg decoder bundled with the OpenJDK source checking for which giflib to use... bundled checking for compress in -lz... yes checking for which zlib to use... system checking for cos in -lm... yes checking for dlopen in -ldl... yes checking if elliptic curve crypto implementation is present... yes checking for appropriate number of jobs to run in parallel... 5 checking whether to use sjavac... no checking that precompiled headers work... yes checking for ccache... /usr/local/bin/ccache checking if ccache supports precompiled headers... no, disabling ccache checking if build directory is on local disk... yes configure: creating /Users/lionel/Environment/openjdk/8/openjdk/build/macosx-x86_64-normal-server-slowdebug/config.status config.status: creating /Users/lionel/Environment/openjdk/8/openjdk/build/macosx-x86_64-normal-server-slowdebug/spec.gmk config.status: creating /Users/lionel/Environment/openjdk/8/openjdk/build/macosx-x86_64-normal-server-slowdebug/hotspot-spec.gmk config.status: creating /Users/lionel/Environment/openjdk/8/openjdk/build/macosx-x86_64-normal-server-slowdebug/bootcycle-spec.gmk config.status: creating /Users/lionel/Environment/openjdk/8/openjdk/build/macosx-x86_64-normal-server-slowdebug/compare.sh config.status: creating /Users/lionel/Environment/openjdk/8/openjdk/build/macosx-x86_64-normal-server-slowdebug/spec.sh config.status: creating /Users/lionel/Environment/openjdk/8/openjdk/build/macosx-x86_64-normal-server-slowdebug/Makefile config.status: creating /Users/lionel/Environment/openjdk/8/openjdk/build/macosx-x86_64-normal-server-slowdebug/config.h</p><p>==================================================== A new configuration has been successfully created in /Users/lionel/Environment/openjdk/8/openjdk/build/macosx-x86_64-normal-server-slowdebug using configure arguments &#39;--with-debug-level=slowdebug --with-jvm-variants=server --with-target-bits=64 --with-num-cores=6 --with-memory-size=8000 --with-boot-jdk=/Library/Java/JavaVirtualMachines/jdk1.7.0_80.jdk/Contents/Home --with-sys-root=/Library/Developer/CommandLineTools/SDKs/MacOSX10.14.sdk --with-freetype-include=/usr/local/include/freetype2 --with-freetype-lib=/usr/local/lib/&#39;.</p><p>Configuration summary:</p><ul><li>Debug level: slowdebug</li><li>JDK variant: normal</li><li>JVM variants: server</li><li>OpenJDK target: OS: macosx, CPU architecture: x86, address length: 64</li></ul><p>Tools summary:</p><ul><li>Boot JDK: java version &quot;1.7.0_80&quot; Java(TM) SE Runtime Environment (build 1.7.0_80-b15) Java HotSpot(TM) 64-Bit Server VM (build 24.80-b11, mixed mode) (at /Library/Java/JavaVirtualMachines/jdk1.7.0_80.jdk/Contents/Home)</li><li>C Compiler: version (at /usr/bin/gcc)</li><li>C++ Compiler: version (at /usr/bin/g++)</li></ul><p>Build performance summary:</p><ul><li>Cores to use: 5</li><li>Memory limit: 8000 MB</li><li>ccache status: installed, but disabled (version older than 3.1.4)</li></ul><p>Build performance tip: ccache gives a tremendous speedup for C++ recompilations. You have ccache installed, but it is a version prior to 3.1.4. Try upgrading.</p><h2 id="make-problem" tabindex="-1"><a class="header-anchor" href="#make-problem" aria-hidden="true">#</a> make problem</h2><p>error: include path for stdlibc++ headers not found; pass &#39;-stdlib=libc++&#39; on the command line to use the libc++ standard library instead [-Werror,-Wstdlibcxx-not-found]</p><p>error: include path for stdlibc++ headers not found; pass &#39;-stdlib=libc++&#39; on the command line to use the libc++ standard library instead [-Werror,-Wstdlibcxx-not-found]</p><p>error: include path for stdlibc++ headers not found; pass &#39;-stdlib=libc++&#39; on the command line to use the libc++ standard library instead [-Werror,-Wstdlibcxx-not-found]</p><p>安装stdlibc++</p><p>最开始安装在</p><p>/Library/Developer/CommandLineTools/usr下，</p><p>后来被我删除了，我是拷贝过去的，当时执行脚本没成功，告知没有权限。</p><p>后来安装在/Library/Developer/CommandLineTools/SDKs</p><p>MacOSX.sdk/usr 和 MacOSX10.14.sdk/usr 都是软连接。</p><p>/Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/usr/include</p><p>/Library/Developer/CommandLineTools/SDKs/MacOSX10.14.sdk/usr/include</p><p>https://blog.csdn.net/lizhengjava/article/details/105629780 https://blog.csdn.net/isea533/article/details/80234007 https://www.jianshu.com/p/38e697dcbaa5 https://www.zhoujunwen.com/2019/building-openjdk-8-on-mac-osx-catalina-10-15/ https://segmentfault.com/q/1010000013353434/a-1020000023446234 https://quantum6.blog.csdn.net/article/details/108466760 https://www.yht7.com/news/98196 https://blog.csdn.net/lizhengjava/article/details/105629780</p><p>https://blog.csdn.net/quantum7/article/details/108466864 https://blog.csdn.net/j754379117/article/details/53695426 https://www.jianshu.com/p/a7ac81d38bb1</p><h2 id="修改源码了" tabindex="-1"><a class="header-anchor" href="#修改源码了" aria-hidden="true">#</a> 修改源码了</h2><p>https://www.jianshu.com/p/0e6300eddcf4 https://blog.0xff000000.com/2019/04/26/compile-debug-openjdk8-on-osx/ https://www.zhoujunwen.com/2019/building-openjdk-8-on-mac-osx-catalina-10-15/</p><p>https://www.jianshu.com/p/b92adbb0c4a8</p><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/jvm/building-openjdk-8.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const building_openjdk_8_html = (__exports__);

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
//# sourceMappingURL=5945.app.js.map