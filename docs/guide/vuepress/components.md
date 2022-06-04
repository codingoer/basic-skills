---
category: 
  - Vuepress
tag:
  - Vuepress  
---

# Built-in Components

You can use Vue components directly in Markdown.

Input

```md
This is default theme built-in `<Badge />` component <Badge text="demo" />
```

Output

This is default theme built-in `<Badge />` component <Badge text="demo" />

## Default Components

- Badge
- CodePen
- FontIcon
- PDF
- StackBlitz

## Vue Components

在V1版本中可以在components目录下写vue，然后在页面中写如下代码即可。使用了hope-thme主题后就不行。

```
<demo/>
```

## TS Components

在`vuepress-theme-hope`的源码中就使用了components目录里面的 `IconDisplay.ts`用来渲染icon。