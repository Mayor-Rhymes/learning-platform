<script setup lang="ts">
import { Home, Headphones, Server, LogIn } from "lucide-vue-next";
</script>

<template>
  <nav
    class="flex p-4 md:hidden lg:hidden bottom-0 w-full bg-white items-center z-20 justify-evenly fixed"
  >
    <router-link
      active-class="text-blue-400"
      to="/"
      class="flex cursor-pointer gap-1 justify-center items-center flex-col"
    >
      <Home />
      <p>Home</p>
    </router-link>
    <router-link
      active-class="text-blue-400"
      to="/about"
      class="flex cursor-pointer gap-1 justify-center items-center flex-col"
    >
      <Server />
      <p>Services</p>
    </router-link>
    <router-link
      active-class="text-blue-400"
      to="/contact"
      class="flex cursor-pointer gap-1 justify-center items-center flex-col"
    >
      <Headphones />
      <p>Call us</p>
    </router-link>
    <router-link
      active-class="text-blue-400"
      to="/login"
      class="flex cursor-pointer gap-1 justify-center items-center flex-col"
    >
      <LogIn />
      <p>Login</p>
    </router-link>
  </nav>
</template>
