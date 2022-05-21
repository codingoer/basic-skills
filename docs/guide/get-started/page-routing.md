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

In such case, you can set the [pagePatterns](../reference/config.md#pagepatterns) to avoid one of them being processed by VuePress, e.g. use `['**/*.md', '!**/README.md', '!.vuepress', '!node_modules']` to exclude all `README.md` files.
:::

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