<template>
  <div class="flex justify-center items-center min-h-96 m-[5%]">
  <div
      class="gradient-text text-8xl font-bold"
      :style="{ animationDuration: animationDuration }"
    >
    Rocket Soccer Confederation
    </div>
  </div>
</template>

<script setup lang="ts">
const animationDuration = `5s`
</script>

<style scoped>
.gradient-text {
  display: inline-block;
  background: linear-gradient(90deg, #a963f0, #7a61f3, #7a61f3, #a963f0);
  background-size: 200% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: scroll-gradient linear infinite;
}

@keyframes scroll-gradient {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>