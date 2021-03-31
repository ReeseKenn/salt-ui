module.exports = {
    title:'salt-ui',
    description:'一个易用的UI框架',
    themeConfig:{
        head: [
            [
                'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
                { rel: 'icon', href: 'salt.png' }
            ]
        ],
        logo:'/salt.svg',
        sidebar:'auto',
        nav:[
            {text:'主页',link:'/'},
            {text:'文档',link:'/guide/'},
            {text:'交流',link:'https://github.com/ReeseKenn/salt-ui/issues'}
        ],
        sidebar:[
            '/install/',
            '/get-started/'
        ]
    }

}