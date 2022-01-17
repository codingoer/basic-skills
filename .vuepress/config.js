module.exports = {
    base: '/',
    lang: 'zh-CN',
    title: 'Java技术总结',
    description: 'Java笔记总结',

    public: '.vuepress/public',
  
    themeConfig: {
      logo: '/images/logo.png',
      sidebar: require('./sidebar/sidebar'),
      navbar: true,
      navbar: require('./nav/nav'),
    },
  }