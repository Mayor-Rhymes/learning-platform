<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
// import HeroSection from "./components/HeroSection.vue";
// import Partners from "./components/Partners.vue";
import MobileNav from "./components/MobileNav.vue";
import {RouterView} from "vue-router";
</script>

<template>
  <div class="min-w-fit box-border justify-center flex flex-col md:mt-40 lg:mt-40 gap-10 mb-20">

    <Navbar /> 
    
    <RouterView />


    <MobileNav />
    
  </div>

  
  
</template>
