---
title: Guide
category: 
  - Vuepress
tag:
  - Vuepress  
---

# Page

VuePress is markdown-centered. Each markdown file inside your project is a standalone page.

## Routing

```
└─ docs
   ├─ guide
   │  ├─ getting-started.md
   │  └─ README.md
   ├─ contributing.md
   └─ README.md
   └─ .vuepress
      └─ config.js
```

|   Relative Path    |      Route Path      |
|--------------------|----------------------|
| `/README.md`       | `/`                  |
| `/index.md`        | `/`                  |
| `/contributing.md` | `/contributing.html` |
| `/guide/README.md` | `/guide/`            |
| `/guide/page.md`   | `/guide/page.html`   |

::: tip
By default, both `README.md` and `index.md` would be converted to `index.html` and generate a slash-ending route path. However, it might cause conflicts if you want to keep both of the two files.

In such case, you can set the **pagePatterns** to avoid one of them being processed by VuePress, e.g. use `['**/*.md', '!**/README.md', '!.vuepress', '!node_modules']` to exclude all `README.md` files.
:::

意思就是可以通过config配置里面的pagePatterns这个配置来实现哪些文件被Vuepress处理。

## Content

The main content of your page is written in Markdown. VuePress will firstly transform your Markdown to HTML code, then treat the HTML code as `<template>` of Vue SFC.

后面这句话没理解啥意思，反正在markdown里面写html是可以显示出来的，如果不想显示出来就写上`<template></template>`

<template>

<p>This is Template</p>

</template>

<p>This is Template</p>

<span style="color:red">This is a span with color</span>

## Config file

Vuepress默认的配置文件在docs目录下面的.vuepress目录中，可以自定义配置文件的位置，我是放在了项目根目录下面的config文件下。

在package.json中指定文件位置即可。

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs --clean-cache --clean-temp --config config/config.ts",
    "docs:build": "vuepress build docs --clean-cache --clean-temp --config config/config.ts"
  }
}
```

```
└─ docs
   ├─ guide
   │  ├─ getting-started.md
   │  └─ README.md
   ├─ contributing.md
   └─ README.md
└─ config
   ├─ config.ts
   ├─ public
   ├─ components
├─ theme
   ├─ config.ts
```