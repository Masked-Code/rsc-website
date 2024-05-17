// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
  },
  supabase: {
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      exclude: ['/', '/gettingstarted', '/leaderboards', '/updates', '/teams/*', '/prices', '/rules', '/easter', '/schedule', '/search', '/player/*'],
      cookieRedirect: false,
    }
  },
  modules: ["@nuxt/ui", "@nuxtjs/supabase"]
})