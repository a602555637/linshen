module.exports = {
  title: '林深不知处',
  description: '😊，也是一种态度',
  head: [['link', { rel: 'icon', href: '/avatar.jpg' }]],
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    logo: '/avatar.jpg',
    nav: [
      { text: '主页', link: '/' },
      { text: '心情', link: '/feeling/' },
      {
        text: '博文',
        items: [
          { text: '设计模式', link: '/detail/design/pattern/' },
          { text: 'Docker', link: '/detail/base/docker/' },
          { text: 'mongoDB', link: '/detail/database/mongodb/' },
        ],
      },
      { text: '关于', link: '/about/' },
      { text: 'Github', link: 'https://www.github.com/a602555637' },
    ],
    sidebar: {
      '/detail/': [
        {
          title: '基础可查',
          collapsable: true,
          children: [
            'base/mini/',
            'base/markdown/',
            'base/ssh/',
            'base/docker/',
            'base/reg/',
            'base/nginx/',
            'base/linux/',
          ],
        },
        {
          title: '数据库',
          collapsable: true,
          children: ['database/mongodb/', 'database/redis/'],
        },
        {
          title: '项目类',
          collapsable: true,
          children: ['proj/vue/', 'proj/react/'],
        },
        {
          title: 'js设计',
          collapsable: true,
          children: ['design/principle/', 'design/pattern/'],
        },
        {
          title: '常见面试题',
          collapsable: true,
          children: [
            'interview/frequent/',
            'interview/html/',
            'interview/css/',
            'interview/js/',
          ],
        },
      ],
    },
  },
}
