import {HopeThemeNavbarConfig } from "vuepress-theme-hope";

export const navbarConf : HopeThemeNavbarConfig = [
    {
        text: 'Guide', link: '/guide/'
    },
    {
      text: 'Coding',
      icon: 'java',
      children: [
        {
          text: 'Efficiency',
          children: [
            { text: 'Tools', link: '/tools/'}
          ]
        }
      ]
    },
    {
        text: 'Java', 
        icon: "java",
        children: [
          {
            text: 'Basic',
            prefix: "/java/",
            children: [
              {text: 'Programing', link: 'programing/'},
              {text: 'OOP', link: 'oop/'},
              {text: 'Collection', link: 'collection/'},
              {text: 'I/O', link: 'io/'}
            ]
          },
          {
            text: 'Advanced',
            children: [
              {text: 'Concurrency', link: '/java/concurrency/'},
              {text: 'JVM', link: '/jvm/'},
              {text: 'Dynamic', link: '/java/dynamic/'}
            ]
          }
        ] 
      },
      {
        text: 'Blog',
        link: 'https://www.codingoer.top/blog'
      }
]