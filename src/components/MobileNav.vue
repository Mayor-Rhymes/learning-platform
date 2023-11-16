<script setup lang="ts">

   import { Home, Headphones, Server, LogIn } from "lucide-vue-next"
</script>

<template>
    <nav class="flex p-4 md:hidden lg:hidden bottom-0 w-full bg-white items-center z-20 justify-evenly fixed">
        <div class="flex cursor-pointer gap-1 justify-center items-center flex-col">
            <Home :size=20 />
            <p>Home</p>
        </div>
        <div class="flex cursor-pointer gap-1 justify-center items-center flex-col">
            <Server :size=20 />
            <p>Services</p>
        </div>
        <div class="flex cursor-pointer gap-1 justify-center items-center flex-col">
            <Headphones :size=20 />
            <p>Call Us</p>
        </div>
        <div class="flex cursor-pointer gap-1 justify-center items-center flex-col">
            <LogIn :size=20 />
            <p>Login</p>
        </div>
    </nav>
</template>