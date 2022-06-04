---
category: 
  - Vuepress
tag:
  - Vuepress  
---

# Assets

## Relative URLs

You can reference any assets using relative URLs in your Markdown content:

```md
![An image](./image.png)
```

## Public Files

The default public directory is .vuepress/public, which can be changed in config.

Take our documentation source files as an example, we are putting the logo of VuePress inside the public directory:

```
─ docs
   ├─ .vuepress
   |  └─ public
   |     └─ images
   |        └─ hero.png  # <- Logo file
   └─ guide
      └─ assets.md       # <- Here we are
```

We can reference our logo in current page like this:

Input

```md
![Java Logo](/images/logo.png)
```

Output

![Java Logo](/images/logo.png)

## Base Helper

If your site is deployed to a non-root URL, i.e. the base is not "/", you will need to prepend the base to the absolute URLs of your public files.

For example, if you plan to deploy your site to https://foo.github.io/bar/, then base should be set to "/bar/", and you have to reference your public files in Markdown like this:

```md
![Java Logo](/basic-skills/java-1.svg)
```

::: warning
dev的时候如果写上base路径图片是可以显示出来的，build的时候写上base路径会提示错误。
:::

## Packages and Path Aliases

you can reference images from dependent packages:

```shell
yarn add -D package-name
```

```md
![Image from dependency](package-name/image.png)
```

The path aliases that set in config file are also supported:

```json
import { path } from "@vuepress/utils";

alias: {
      "@IconDisplay": path.resolve(__dirname, "./components/IconDisplay"),
    },
```

```md
![Image from path alias](@alias/image.png)
```