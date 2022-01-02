module.exports = {
  title: "JuneJH",
  themeConfig: {
    nav: [
      { text: 'GitHub', link: 'https://github.com/JuneJH' },
      {
        text: '小游戏',
        items: [
          { text: "贪吃蛇", link: 'https://junejh.github.io/overview/snake/' },
          {text:"像素鸟",link:"https://junejh.github.io/overview/bird-game/"}
        ]
      },
      {
        text:"项目相关",
        items:[
          {text:"登陆模块",link:"/login"},
          {text:"上传模块",link:"/upload"},
          {text:"学生管理系统接口",link:"/upload"},
          {text:"简单的全栈项目",link:"/upload"},
        ]
      }
    ],
    sidebar: 'right'
  },
  plugins: ['autobar']
}