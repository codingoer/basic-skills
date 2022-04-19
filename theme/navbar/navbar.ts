import {HopeThemeNavbarConfig } from "vuepress-theme-hope";

export const navbarConf : HopeThemeNavbarConfig = [
  {
    text: 'Coding', 
    children: [
      {
        text: 'Necessary', 
        children: [
          {text: 'Data Structure', link: '/data-structure/'},
          {text: 'Algorithm', link: '/algorithm/'},
          {text: 'Design Pattern', link: '/design-pattern/'},
          {text: 'Networking', link: '/networking/'},
          {text: 'OS', link: '/os/'},
        ]
      },
      {
        text: 'Efficiency',
        children: [
          {text: 'Specification', link: '/specification/'},
          { text: 'Tools', link: '/tools/'}
        ]
      }
    ]
  },
  {
    text: 'Java', 
    children: [
      {
        text: 'Basic',
        children: [
          {text: 'Programing', link: '/java/programing/'},
          {text: 'OOP', link: '/java/oop/'},
          {text: 'Collection', link: '/java/collection/'},
          {text: 'I/O', link: '/java/io/'}
        ]
      },
      {
        text: 'Advanced',
        children: [
          {text: 'Concurrency', link: '/java/concurrency/'},
          {text: 'JVM', link: '/jvm/'},
          {text: 'Dynamic', link: '/java/dynamic/'}
        ]
      },
      {
        text: 'EE',
        children: [
          {text: 'Java™ EE', link: '/java-ee/'},
          {text: 'Jakarta EE', link: '/jakarta-ee/'},
        ]
      }
    ] 
  },
  {
    text: 'DataBase',
    children: [
      {
        text: 'RDBMS',
        children: [
          {text: 'SQL', link: '/database/sql/'},
          {text: 'MySQL', link: '/database/mysql/'}
        ]
      },
      {
        text: 'NoSQL',
        children: [
          {text: 'Redis', link: '/database/redis/'},
          {text: 'MongoDB', link: '/database/mongodb/'},
          {text: 'ElasticSearch', link: '/database/elasticsearch/'}
        ]
      }
    ]
  },
  {
    text: 'Framework', 
    children: [
      {
        text: 'Spring',
        children: [
          {text: 'Spring Mvc', link: '/framework/spring-mvc/'},
          {text: 'Spring Boot', link: '/framework/spring-boot/'}
        ]
      }
    ]
  },
  {
    text: 'Middleware', 
    children: [
      {text: 'RocketMQ', link: '/middleware/rocketmq/'},
      {text: 'ZooKeeper', link: '/middleware/zookeeper/'}
    ]
  },
  {
    text: 'Operation',
    children: [
      {
        text: 'Server',
        children: [
          {text: 'Tomcat', link: '/operation/tomcat/'},
          {text: 'Nginx', link: '/operation/nginx/'}
        ]
      },
      {
        text: 'DevOps',
        children: [
          {text: 'VMware', link: '/operation/vmware/'},
          {text: 'Docker', link: '/operation/docker/'}
        ]
      }
    ]
  }
]
