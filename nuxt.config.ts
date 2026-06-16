// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@vueuse/nuxt"],

  devtools: {
    enabled: true,
  },

  css: ["~/assets/css/main.css"],

  compatibilityDate: "2026-06-17",

  routeRules: {
    "/api/**": {
      cors: true,
    },
  },

  fonts: {
    provider: "bunny",
  },
});
