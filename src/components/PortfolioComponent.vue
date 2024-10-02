 <script setup lang="ts">

</script>

<template>
  <div class="flex-grow flex flex-row justify-between mt-5 border-2 border-b-amber-50 p-5">
    <div class="flex items-center">
      <nav class="flex flex-col navbar navbar-expand-lg align-middle">
        <router-link to="/">About</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/faq">FAQ</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/copycats">Copycats</router-link>
      </nav>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>

</style>