import { defineUserConfig } from 'vuepress'
import HopeTheme from "../theme/config";
import { path } from "@vuepress/utils";

export default defineUserConfig({
    // site config
    base: '/basic-skills/',
    lang: 'en-US',
    title: 'javaer-basic-skills',
    description: 'Java基础知识总结',
    head:[
            ['link', {rel: 'icon', href: '/favicon.ico'}],
            ['link', {rel: 'stylesheet', href: '//at.alicdn.com/t/font_3341258_dsiluxnmxsq.css'}],
          ],
    
    // common config
    dest: 'pages',
    temp: '.temp',
    cache: '.cache',
    public: 'config/public',

    // dev config
    host: 'localhost',
    port: 8080,
    open: true,

    // markdwon config
    markdown: {
      toc: false,
      emoji: false,
    },
  
    // theme and its config
    theme: HopeTheme,

    // Plugin API
    // Development Hooks
    alias: {
      "@IconDisplay": path.resolve(__dirname, "./components/IconDisplay"),
    },

})