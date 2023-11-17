<script setup lang="ts">

   import { Home, Headphones, Server, LogIn } from "lucide-vue-next"
   import {RouterLink} from "vue-router"
</script>

<template>
    <nav class="flex p-4 md:hidden lg:hidden bottom-0 w-full bg-white items-center z-20 justify-evenly fixed">
        <RouterLink to="/" class="flex cursor-pointer gap-1 justify-center items-center flex-col">
            <Home />
            <p>Home</p>

        </RouterLink>
        <RouterLink to="/about" class="flex cursor-pointer gap-1 justify-center items-center flex-col">
            <Server />
            <p>Services</p>
        </RouterLink>
        <RouterLink to="/" class="flex cursor-pointer gap-1 justify-center items-center flex-col">
            <Headphones />
            <p>Call us</p>
        </RouterLink>
        <RouterLink to="/" class="flex cursor-pointer gap-1 justify-center items-center flex-col">
            <LogIn />
            <p>Login</p>
        </RouterLink>
    </nav>
</template>