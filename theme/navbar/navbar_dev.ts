import {HopeThemeNavbarConfig } from "vuepress-theme-hope";

export const navbarConf : HopeThemeNavbarConfig = [
    {
        text: 'Java', 
        icon: "java",
        prefix: "/java/",
        children: [
          {
            text: 'Basic',
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
              {text: 'Concurrency', link: 'concurrency/'},
              {text: 'JVM', link: '/jvm/'},
              {text: 'Dynamic', link: '/java/dynamic/'}
            ]
          }
        ] 
      },
]