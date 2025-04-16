// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700,700i"
        },
        {
          rel: "stylesheet",
          href: "node_modules/keen-slider/keen-slider.min.css"
        },

        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        },

        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700,700i"
        },

      ],
      script: [
        { src: "https://www.googletagmanager.com/gtag/js?id=UA-97489509-8" },
        { src: "https://www.googletagmanager.com/gtag/js?id=UA-97489509-8" },
        { src: "node_modules/keen-slider/keen-slider.js" },

      ]
    }
  },

  // compatibilityDate: '2024-04-03',
  // devtools: { enabled: true }
  devtools: {
    enabled: true,
  },

  // modules: ["vue3-carousel-nuxt"],
  compatibilityDate: "2024-10-03"
})