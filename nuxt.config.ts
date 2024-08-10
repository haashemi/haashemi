// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/seo", "@nuxt/eslint", "@nuxt/fonts"],
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  typescript: {
    strict: true,
    typeCheck: true,
  },
  site: {
    url: "https://www.haashemi.dev",
    name: "Ali Hashemi",
    description: "Ali Hashemi's personal website. There's nothing special about it.",
    defaultLocale: "en",
  },
  vue: {
    propsDestructure: true,
  },
  fonts: {
    defaults: {
      weights: [400, 500, 600],
    },
    experimental: {
      processCSSVariables: true,
    },
  },
});
