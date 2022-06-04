---
headerDepth: 2
category: 
  - Vuepress
tag:
  - Vuepress  
---

# Vuepress Config

## Site Config

### base

The base URL the site will be deployed at.

For example, if you plan to deploy your site to GitHub pages at https://foo.github.io/bar/, then you should set base to "/bar/".

### lang

Language for the site.

### title

Title for the site.

### description

Description for the site.

### head

Extra tags to inject into the `<head>` tag in the rendered HTML.

## Theme Config

### theme

config.ts
```ts
import { defineUserConfig } from 'vuepress'
import HopeTheme from "../theme/config";

export default defineUserConfig({
    // theme and its config
    theme: HopeTheme,
})
```

theme/config.ts
```ts
import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme({

})
```

### old config

之前使用的配置文件方法

config.ts
```ts
import { defineUserConfig } from 'vuepress'
import { HopeThemeOptions } from "vuepress-theme-hope";
import { themeConfig } from "../theme/config"

export default defineUserConfig<HopeThemeOptions>({
    // theme and its config
    theme: 'hope',
    themeConfig: themeConfig,
})

```

theme/config.ts
```ts
import { HopeThemeOptions } from "vuepress-theme-hope";

export const themeConfig : HopeThemeOptions = {

}
```


