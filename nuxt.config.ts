// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
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