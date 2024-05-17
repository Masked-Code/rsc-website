<template>
    <UCard class="ml-[10%] mr-[10%] min-h-96">
        <div v-if="user" class="flex flex-col justify-center items-center m-3">
          <img :src="authUser.user_metadata.avatar_url" class="rounded-2xl max-w-36 m-2">
          <div class="text-3xl m-2">{{ authUser.user_metadata.custom_claims.global_name }}</div>
          <div class="text-xl m-2">✅ Authenticated</div>
          <div class="text-xl m-2">Discord Username: {{ authUser.user_metadata.full_name }}</div>
        </div>
        <div v-else>
          No user
        </div>
      <div class="flex justify-center">
        <UButton @click="signOut()" class="m-3" size="lg"><b>Sign Out</b></UButton>
      </div>
    </UCard>
  </template>
  
  <script setup>
  const supabase = useSupabaseClient()
  const authUser = useSupabaseUser()
  const { data: { user } } = await supabase.auth.getUser()
  definePageMeta({
    middleware: 'auth'
  })
  
  async function signOut() {
    const { error } = await supabase.auth.signOut()
    navigateTo('/')
  }
  
  </script>
  
  <style>
  
  </style>