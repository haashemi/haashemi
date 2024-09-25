export default defineNuxtConfig({
  modules: [
    "@nuxt/icon", // https://nuxt.com/modules/icon
    "@nuxt/image", // https://nuxt.com/modules/image
    "@nuxt/fonts", // https://nuxt.com/modules/fonts
    "@nuxt/eslint", // https://nuxt.com/modules/eslint
    "@nuxt/content", // https://nuxt.com/modules/content
    "@nuxtjs/seo", // https://nuxt.com/modules/seo
    "@nuxtjs/tailwindcss", // https://nuxt.com/modules/tailwindcss
  ],

  vue: { propsDestructure: true },
  devtools: { enabled: false },
  telemetry: false,
  typescript: { strict: true, typeCheck: true },
  compatibilityDate: "2024-04-03",

  // Documentation: https://nuxt.com/modules/icon
  icon: {
    serverBundle: {
      collections: [
        "fa6-solid", // https://icones.js.org/collection/fa6-solid
        "fa6-brands", // https://icones.js.org/collection/fa6-brands
      ],
    },
  },

  // Documentation: https://fonts.nuxt.com/
  fonts: {
    defaults: {
      weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    experimental: {
      processCSSVariables: true,
    },
  },

  site: {
    url: "https://www.haashemi.dev",
    name: "Ali Hashemi",
    description: "Ali Hashemi's personal website. There's nothing special about it.",
    defaultLocale: "en",
  },

  // Documentation: https://tailwindcss.nuxtjs.org/
  tailwindcss: { quiet: true, viewer: false },
});
