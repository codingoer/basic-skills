---
category: 
  - Vuepress
tag:
  - Vuepress  
---

# Interface

vuepress-theme-hope提供了许多额外的能力。

## Darkmode

In dark mode, the page uses a dark background to make you comfortable.

You can config darkmode through darkmode in theme options

- switch : switch between dark, light and auto (default)
- toggle : toggle between lightmode and darkmode
- auto : Automatically decide whether to apply dark mode based on user device’s color-scheme or current time
- enable : only dark mode
- disable : disable dark mode

## Theme Color

You can also use your own theme color list.

## Icon Support

### Setting Icons

After importing icons and setting iconPrefix as below, you can use icon in multiple places.

- page : set icon in frontmatter
- Navbar : set icon option in NavbarItemConfig
- Sidebar : set icon option in SidebarItemConfig
- HomePage : set icon option in feature item

### Iconfont

[Iconfont](https://www.iconfont.cn/)

![20220522171147](https:image.codingoer.top/blog/20220522171147.png)

::: tip

If you add a new icon in the future, please regenerate the new CSS address and overwrite the old CSS address in head option.

:::


### Featured Icons

```html
<link rel="stylesheet" href="//at.alicdn.com/t/font_3341258_msu9bxgwxmk.css" />
```

## Code Themes

