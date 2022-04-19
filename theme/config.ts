import { HopeThemeOptions } from "vuepress-theme-hope";
import { navbarConf } from "./navbar/index";
import { sidebarConf } from "./sidebar/index";


export const themeConfig : HopeThemeOptions = {
    // your config here
    
    // theme layout options
    logo: "java-4.svg",
    navbar: navbarConf,
    navbarIcon: true,
    sidebar: sidebarConf,
    displayFooter:true,
    copyright: 'Copyright © 2022 Lionel',
    footer:
    '<a href="https://beian.miit.gov.cn/" target="_blank">黑ICP备2021006860号-1</a>',
    
    // theme appearance options
    fullscreen: false,
    iconPrefix: "iconfont icon-",
};