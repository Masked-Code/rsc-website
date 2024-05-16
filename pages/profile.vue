<template>
    <UCard class="ml-[10%] mr-[10%] min-h-96">
        {{ user ? user : 'No user' }}
      <UButton @click="signOut()" class="m-3" size="lg"><b>Sign Out</b></UButton>
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