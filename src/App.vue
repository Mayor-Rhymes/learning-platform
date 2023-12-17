<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
// import MobileNav from "./components/MobileNav.vue";
</script>

<template>
  <div
    class="justify-center flex flex-col md:mt-40 lg:mt-40 gap-10"
  >
    <Navbar />
    <router-view />

    <!-- <MobileNav /> -->
  </div>
</template>
