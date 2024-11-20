export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  
  generate: {
    fallback: true, // Generates 404.html for GitHub Pages
    subFolders: false, // Generates flat .html files (e.g., about.html)
  },
  
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'static-site-generator-',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // Include Bootstrap Vue CSS
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap-vue/dist/bootstrap-vue.css',
    '~/assets/css/main.css',  // Include the global CSS file
    'font-awesome/css/font-awesome.css',  // Include Font Awesome CSS globally
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // Add bootstrap-vue module
    'bootstrap-vue/nuxt',
  ],
 // Router Configuration for GitHub Pages deployment
 router: {
  base: '/static-site-generator-/'  // Path should match where the app is hosted
},
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
