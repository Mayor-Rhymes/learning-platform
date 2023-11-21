<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import MobileNav from "./components/MobileNav.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div
    class="min-w-fit box-border justify-center flex flex-col md:mt-40 md:mb-0 lg:mt-40 lg:mb-0 gap-10 mb-40"
  >
    <Navbar />
    <router-view />
    <Footer />
    <MobileNav />
  </div>
</template>
