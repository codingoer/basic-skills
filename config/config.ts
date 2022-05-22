import { defineUserConfig } from 'vuepress'
import { HopeThemeOptions } from "vuepress-theme-hope";
import { themeConfig } from "../theme/config"

export default defineUserConfig<HopeThemeOptions>({
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
    theme: 'hope',
    themeConfig: themeConfig,
  })