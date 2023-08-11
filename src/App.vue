<template>
  <div class="flex flex-col min-h-screen font-Roboto bg-weather-primary">
      <SiteNavigation></SiteNavigation>
      <router-view></router-view>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SiteNavigation from './components/SiteNavigation.vue';
</script>