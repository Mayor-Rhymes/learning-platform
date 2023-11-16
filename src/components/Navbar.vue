<script setup lang="ts">
import { ChevronDown, Phone } from "lucide-vue-next";
import { RouterLink } from "vue-router";
</script>

<template>
  <RouterLink
    to="/"
    class="lg:hidden md:hidden block mt-5 text-center text-blue-700 text-4xl font-bold"
  >
    Designated Logo
  </RouterLink>

  <p class="lg:hidden md:hidden block text-center">
    We Make Learning Superbly Fun and Inclusive
  </p>
  <nav
    class="w-full hidden md:flex lg:flex p-5 items-center justify-center gap-5 font-semibold lg:border-b-gray-100 lg:border-b-4"
  >
    <RouterLink to="/">Designated Logo</RouterLink>

    <div>
      <p
        class="flex items-center p-2 hover:bg-gray-200 hover:rounded-md cursor-pointer transition-all delay-100 duration-150"
      >
        Our Services <ChevronDown />
      </p>
    </div>

    <input
      type="text"
      class="w-[400px] hidden lg:block md:hidden outline-none h-[50px] rounded-xl p-4 bg-slate-200"
      placeholder="Search For a service"
    />

    <div
      class="flex items-center gap-2 p-2 hover:bg-gray-200 hover:rounded-md cursor-pointer transition-all delay-100 duration-150"
    >
      <Phone /> Contact us
    </div>

    <RouterLink
      active-class="bg-gray-200 rounded-md"
      to="/about"
      class="flex active:bg-gray-200 active:rounded-md items-center p-2 hover:bg-gray-200 hover:rounded-md cursor-pointer transition-all delay-100 duration-150"
    >
      About
    </RouterLink>

    <div
      class="flex items-center p-2 hover:bg-gray-200 hover:rounded-md cursor-pointer transition-all delay-100 duration-150"
    >
      Login
    </div>
  </nav>
  <input
    type="text"
    class="w-[70%] mx-auto lg:hidden block md:block outline-none h-[50px] rounded-xl p-4 bg-slate-200"
    placeholder="Search For a service"
  />
</template>
