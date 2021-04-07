module.exports = {
    title: 'salt-ui',
    description: '一个易用的UI框架',
    base: "/salt-ui/",
    themeConfig: {
        head: [
            [
                'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
                {rel: 'icon', href: 'salt.png'}
            ]
        ],
        logo: '/salt.svg',
        sidebar: 'auto',
        nav: [
            {text: '主页', link: '/'},
            {text: '文档', link: '/install/'},
            {text: 'Github', link: 'https://github.com/ReeseKenn/salt-ui/issues'}
        ],
        sidebar: [
            {
                title: '入门',
                collapsable: false, // 可选的, 默认值是 true,
                children: [
                    '/install/',
                    '/get-started/',
                ]
            },
            {
                title: '组件',
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 0,    // 可选的, 默认值是 1
                children: [
                    '/components/button',
                    '/components/input'
                ],
            }
        ],
        sass: {indentedSyntax: true},
    }

}
