import { hopeTheme } from "vuepress-theme-hope";
import { navbarConf } from "./navbar/index";
import { sidebarConf } from "./sidebar/index";


export default hopeTheme({
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
            GitHub: "https://github.com/codingoer"
        }
    },

    // plugins config
    plugins: {
        blog: true,
        mdEnhance: {
            tasklist: true,
            codetabs: true,
        },
    }
})