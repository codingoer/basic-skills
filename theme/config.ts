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
    sidebarIcon:true,
    displayFooter:true,
    copyright: 'Copyright © 2022 Lionel',
    footer:
    '<a href="https://beian.miit.gov.cn/" target="_blank">黑ICP备2021006860号-1</a>',
    
    // theme appearance options
    darkmode: "switch",
    fullscreen: false,
    iconPrefix: "iconfont icon-",

    blog: {
        name: "Javaer Basic Skills",
        medias: {
            QQ: "http://wpa.qq.com/msgrd?v=3&uin=1178522294&site=qq&menu=yes",
        }
    },

    // plugins config
    plugins: {
        blog: true,
    }
};