module.exports = {
  title: 'The Craziest Project',
  description: 'The only way to be sane is to be mad.',
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
