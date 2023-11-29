<script setup lang="ts">
import { ChevronDown, Phone, PersonStanding } from "lucide-vue-next";
</script>

<template>
  <router-link
    to="/"
    class="lg:hidden md:hidden flex items-center justify-center mt-5 text-center text-blue-700 text-4xl font-bold"
  >
    <img src="../assets/frithland_logo_3.jpg" alt="frithland_logo" />
    <!-- <p>Frithland</p> -->
  </router-link>

  <p class="lg:hidden md:hidden text-xl block text-center">
    We Make Learning Superbly Fun and Inclusive
  </p>
  <nav
    class="w-full hidden md:flex lg:flex p-5 z-40 h-20 items-center fixed top-0 bg-white justify-center gap-5 font-semibold lg:border-b-gray-100 lg:border-b-4"
  >
    <router-link to="/" class="text-blue-500 text-xl">
      <img
        src="../assets/frithland_logo_3.jpg"
        alt="frithland_logo_3"
        class="object-scale-down w-[100px] h-[100px]"
      />
      <!-- <p>Frithland</p> -->
    </router-link>

    <div>
      <p
        class="flex items-center p-2 hover:bg-gray-200 hover:rounded-md cursor-pointer transition-all delay-100 duration-150"
      >
        Our Services <ChevronDown />
      </p>
    </div>

    <div
      class="flex items-center gap-2 p-2 hover:bg-gray-200 hover:rounded-md cursor-pointer transition-all delay-100 duration-150"
    >
      <PersonStanding /> Request A Tutor
    </div>
    <router-link
      to="/contact"
      class="flex items-center gap-2 p-2 hover:bg-gray-200 hover:rounded-md cursor-pointer transition-all delay-100 duration-150"
    >
      <Phone /> Contact us
    </router-link>

    <router-link
      active-class="bg-gray-200 rounded-md"
      to="/about"
      class="flex active:bg-gray-200 active:rounded-md items-center p-2 hover:bg-gray-200 hover:rounded-md cursor-pointer transition-all delay-100 duration-150"
    >
      About
    </router-link>

    <div
      class="flex items-center p-2 hover:bg-gray-200 hover:rounded-md cursor-pointer transition-all delay-100 duration-150"
    >
      Login
    </div>
  </nav>
</template>
