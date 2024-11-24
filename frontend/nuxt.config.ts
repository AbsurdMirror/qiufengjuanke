// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  srcDir: 'src/',
  devtools: { enabled: true },
  ssr: false,
  app: {
    head: {
      link: [{
        rel: 'stylesheet',
        href: 'https://chinese-fonts-cdn.deno.dev/packages/qtbfsxt/dist/%E5%8D%83%E5%9B%BE%E7%AC%94%E9%94%8B%E6%89%8B%E5%86%99%E4%BD%93/result.css'
      },
      {
        rel: 'stylesheet',
        href: "https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined"
      }
    ],
      script: [
        // { src: '~/src/static/cookie.js' }
      ]
    },
    baseURL: '/qfjk/message',
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
  // plugins: [
  //   '~/plugins/socket.js'
  // ],
  nitro: {
    // 根据环境动态设置 devProxy
    devProxy: process.env.NODE_ENV === 'development' ? {
      "/qfjk_api": {
        target: "http://39.105.204.120/qfjk_api",
        ws: true,
        // 其他代理配置...
      },
    } : undefined, // 在生产环境中不设置代理
  },
  // router: {
  //   options: {
      
  //   }
  //   base: '/qfjk/message'
  // }
  
})
