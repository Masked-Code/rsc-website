<template>
  <NuxtLayout>
    <AppHeader />
    <div>
      <NuxtPage />
    </div>
    <AppFooter />
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute();
useHead({
  title: 'RSC',
  meta: [
    { name: 'description', content: 'Official RSC Community Website' },
    { name: 'og:description', content: 'Official RSC Community Website' },
    { name: 'og:title', content: 'RSC'},
    { name: 'lang', content: 'English'},
    { name: 'twitter:title', content: 'RSC'},
    { name: 'twitter:description', content: 'Official RSC Community Website'},
    { name: 'twitter:card', content: 'summary'},
  ],
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0.1;
  filter: blur(1rem);
}
</style>