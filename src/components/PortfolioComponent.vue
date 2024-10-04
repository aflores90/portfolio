 <script setup lang="ts">

import MenuComponent from "./MenuComponent.vue";
 </script>

<template>
  <div class="flex-grow flex flex-row justify-between mt-5 border-2 border-b-amber-50 p-5">
    <div class="flex items-center menu">
      <nav class="flex flex-col navbar navbar-expand-lg align-middle">
        <menu-component />
      </nav>
    </div>
    <div class="content">
      <router-view v-slot="{ Component }">
        <transition name="slide" mode="out-in">
          <component :is="Component" :key="$route.path" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.slide-enter-from, .slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
.menu {
  flex-grow: 1;
  margin-right: 10px;
}

.content {
  flex-basis: 30%;
  flex-grow: 1;
  flex-shrink: 1;
}
</style>
