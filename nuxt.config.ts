// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@pinia/nuxt', 'nuxt-swiper'],
  css: ['../assets/scss/main.scss'],
    runtimeConfig: {
      public: {
        baseURL: process.env.VITE_BASE_URL,
      },
    },
})
