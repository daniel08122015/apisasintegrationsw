export default {
  // env: {
  //   baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  // },
  
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      //{ rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Modak&display=swap" }
    ]
  },
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '@/plugins/firebase.js'
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt', 
   
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
 
  ],
   /*
  ** Global CSS
  */
 css: [
  '@assets/css/main.css',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true // Can be also an object with default options
  },

  proxy: {

    '/WSCarBrand/listCarBrands/': { target: 'http://demosas.tas.pe:8085/APISASVehicleQuotes/', changeOrigin: true }, 
    '/WSModelCar/listModelCars/': { target: 'http://demosas.tas.pe:8085/APISASVehicleQuotes/', changeOrigin: true },
    '/WSCiaEnsures/listCiaEnsures/': { target: 'http://demosas.tas.pe:8085/APISASVehicleQuotes/', changeOrigin: true }
  },
  


  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
     // Add exception
    transpile: [
      "vee-validate/dist/rules"
    ],
      /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // ...
    }
  }
}
