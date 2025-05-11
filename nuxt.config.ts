// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/i18n",
    "vuetify-nuxt-module",
    "nuxt3-notifications",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
  ],
  css: ["~/assets/styles/main.scss"],
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
  vuetify: {
    vuetifyOptions: {
      icons: {
        defaultSet: "md",
      },
      theme: {
        themes: {
          light: {
            colors: {
              primary: "#5464c6",
              secondary: "#4faca9"
            }
          }
        }
      }
    },
  },
  app: {
    head: {
      title: "Spot Engage",
    },
  },
  runtimeConfig: {
    public: {
      apiBase: "https://mock.apidog.com/m1/877274-858713-default",
    },
  },
});
