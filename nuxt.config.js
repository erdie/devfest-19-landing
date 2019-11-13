module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'DevFest 2019 Jogjakarta',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'GDG Devfest is the biggest annual event of GDG Jogjakarta. This is an event for developers and tech-enthusiasts that is led by communities and experts.' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      // { rel: 'stylesheet', type: 'text/css', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.15.0/umd/popper.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.slim.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/sass/style.sass', '~/assets/css/main.css'],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    // extend (config, ctx) {
    //   if (ctx.isDev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  },
  serverMiddleware: [
    // API middleware
    '~/api/index.js'
  ]
}
