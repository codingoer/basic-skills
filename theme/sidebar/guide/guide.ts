module.exports = [
    {
        text: 'Getting Started',
        collapsable: true,
        children: [
            { text:'Introduction', link:'/guide/get-started/intro' },
            { text:'Manual Installation', link:'/guide/get-started/install'},
            { text:'Page Routing', link:'/guide/get-started/page-routing'},
            { text:'Assets', link:'/guide/get-started/assets'}
        ]
    },
    {
        text: 'Vurepress Reference',
        collapsable: true,
        children: [
            { text:'VuePress CLI', link:'/guide/vuepress/cli' },
            { text:'VuePress Config', link:'/guide/vuepress/config' },
            { text:'VuePress Frontmatter', link:'/guide/vuepress/frontmatter' }
        ]
    },
    {
        text: 'Theme Hope Reference',
        collapsable: true,
        children: [
            { text:'Theme Interface', link:'/guide/hope-theme/interface' },
        ]
    },
    {
        text: 'Markdown',
        collapsable: true,
        children: [
            { text:'Markdown original syntax', link:'/guide/markdown/original' },
            { text:'CommonMark', link:'/guide/markdown/commonmark' },
            { text:'GitHub Flavored Markdown Spec', link:'/guide/markdown/gfm' },
            { text:'Markdown Parser', link:'/guide/markdown/parser-list' },
            { text:'Vuepress Markdown Enhance', link:'/guide/markdown/vuepress-markdown' },
            { text:'Theme Hope Markdown Enhance', link:'/guide/markdown/theme-hope-markdown' },
        ]
    }
]