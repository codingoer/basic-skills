module.exports = {
    base: '/basic-skills/',
    lang: 'zh-CN',
    title: 'Java技术总结',
    description: 'Java笔记总结',

    public: '.vuepress/public',
  
    themeConfig: {
      logo: '/images/logo.png',
      sidebar: require('./sidebar/sidebar'),
      navbar: true,
      sidebarDepth:3,
      navbar: require('./nav/nav'),
    },
  }