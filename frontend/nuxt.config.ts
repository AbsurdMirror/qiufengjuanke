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
      }],
      script: [
        { src: '~/src/static/cookie.js' }
      ]
    }
  }
})
