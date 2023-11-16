<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
// import HeroSection from "./components/HeroSection.vue";
// import Partners from "./components/Partners.vue";
import MobileNav from "./components/MobileNav.vue";
import {RouterView} from "vue-router";
</script>

<template>
  <div class="box-border flex flex-col gap-10 mb-20">

    <Navbar /> 
    <RouterView />
    
  </div>
  <MobileNav />
</template>
