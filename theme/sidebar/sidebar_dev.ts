import {HopeThemeSidebarConfig } from "vuepress-theme-hope";

export const sidebarConf : HopeThemeSidebarConfig = {
    "/": [
        "",
    ],
    "/guide/": require('./guide/guide'),
    "/java/programing/": require('./java/programing'),
    //"/java/programing/": "structure",
    "/tools": require('./coding/tools')
}
