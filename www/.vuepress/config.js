module.exports = {
  title: 'Little Andrew',
  description: 'Little big clown',
  lastUpdated: 'Last Updated', // string | boolean
  markdown: {
    config: md => {
      md.use(require("markdown-it-katex"));
    }
  },
  themeConfig: {
    displayAllHeaders: true, // Default: false
    sidebar: 'auto',
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Schrânk!', link: '/schrank/'
      },
      {
        text: 'Guruguru', link: '/guruguru/'
      },
      {
        text: 'Contact', link: '/contact/'
      },
    ]
    
  }
}
