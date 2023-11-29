
<script setup lang="ts">
   import { Mail, MessageSquare, Twitter } from 'lucide-vue-next';
</script>

<template>
    
    <form class="flex flex-col gap-10 w-full lg:w-[75%] mx-auto p-10 shadow-lg">
       
         <div class="flex gap-10 justify-evenly">
            <Mail :size="50" fill="red"/>
            <MessageSquare :size="50" fill="green"/>
            <Twitter :size="50" fill="blue"/>
         </div>
        <h4 class="text-center text-lg font-bold">CONTACT US</h4>
        <input type="email" class="p-4 border focus:bg-white bg-slate-100 placeholder-black focus:border-blue-700 hover:border-blue-300 outline-none rounded-md" placeholder="Enter Your Email Address"/>
        <textarea class="p-4 h-[300px] border focus:bg-white bg-slate-100 placeholder-black focus:border-blue-700 hover:border-blue-300 outline-none rounded-md resize-none" placeholder="Please State Your Complaints"></textarea>

        <button class="bg-blue-400 text-white p-4 rounded-md hover:bg-blue-800 transition-all delay-200 duration-250">SUBMIT COMMENT</button>
    </form>
</template>