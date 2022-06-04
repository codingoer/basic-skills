---
category: 
  - Vuepress
tag:
  - Vuepress  
---

# Introduction

**Copy From Official Website**

## Vuepress

[Github](https://github.com/vuepress/vuepress-next)

VuePress is a markdown-centered static site generator. You can write your content (documentations, blogs, etc.) in **Markdown**, then VuePress will help you to generate a static site to host them.

A VuePress site is in fact a single-page application (SPA) powered by [Vue](https://vuejs.org/) and [Vue Router](https://router.vuejs.org/).

Each Markdown file is compiled into HTML with [markdown-it](https://github.com/markdown-it/markdown-it) and then processed as the template of a Vue component

## Vuepreee theme hope

[Github](https://github.com/vuepress-theme-hope/vuepress-theme-hope)

Though VuePress has extended Markdown syntax to a certain extent, it still lacks some commonly used functions, such as text alignment, mark, flowchart, formula, presentation, etc. At the same time, some features provided by the default theme are weak or missing, such as picture preview, dark mode, etc.

In this case, the design of `vuepress-theme-hope` was born.

This theme not only greatly improve outlook comparing to `@vuepress/theme-default`, but also dedicates to provide a full range of enhancements for VuePress with its plugins.

::: warning This project is not only a theme

Although [vuepress-theme-hope/vuepress-theme-hope](https://github.com/vuepress-theme-hope/vuepress-theme-hope) itself marked as a theme repository, it also contains more than a dozen equally complete and powerful plugin. Each plugin is also powerful, can be used with the default theme or third-party themes.

:::

## How It Works

A <span style="color:red">VuePress</span> site is in fact a single-page application (SPA) powered by Vue and Vue Router.

Routes are generated according to the relative path of your markdown files. Each Markdown file is compiled into HTML with markdown-it and then processed as the template of a Vue component. **This allows you to directly use Vue inside your Markdown files and is great when you need to embed dynamic content.**