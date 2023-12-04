<script setup lang="ts">
import { Mail, Twitter, Phone } from "lucide-vue-next";
</script>

<template>
  <form class="flex flex-col gap-10 w-full lg:w-[75%] mx-auto p-10 shadow-lg">
    <h4 class="text-center text-lg font-bold">CONTACT US</h4>
    <p class="text-lg font-semibold text-center">
      Our team is eager to promptly address any inquiries you may have, Do you
      need support or general enquiries? Contact us.
    </p>
    <div class="flex gap-10 justify-evenly">
      <div class="flex flex-col gap-5 items-center justify-center cursor-pointer">
        <Mail
          :size="50"
          fill="red"
          class="hover:scale-125 transition-all duration-150 delay-150 ease-in-out"
        />
        <a href="mailto:olaks.raheem@gmail.com?subject=Frithland Contact&body=I will like to get all important information regarding your schedule">Mail Us</a>
      </div>
      <div class="flex flex-col gap-5 items-center justify-center cursor-pointer">
        <Phone
          :size="50"
          fill="green"
          class="hover:scale-125 transition-all duration-150 delay-150 ease-in-out"
        />
        <p>Call Us</p>
      </div>
      <div class="flex flex-col gap-5 items-center justify-center cursor-pointer">
        <Twitter
          :size="50"
          fill="blue"
          class="hover:scale-125 transition-all duration-150 delay-150 ease-in-out"
        />
        <p>Reach Us On Twitter</p>
      </div>
    </div>

    <input
      type="email"
      class="p-4 border focus:bg-white bg-slate-100 placeholder-black focus:border-blue-700 hover:border-blue-300 outline-none rounded-md"
      placeholder="Enter Your Email Address"
      required
    />
    <textarea
      class="p-4 h-[300px] border focus:bg-white bg-slate-100 placeholder-black focus:border-blue-700 hover:border-blue-300 outline-none rounded-md resize-none"
      placeholder="Please State Your Complaints"
      required
    ></textarea>

    <button
      type="submit"
      class="bg-blue-400 text-white p-4 rounded-md hover:bg-blue-800 transition-all delay-200 duration-250"
    >
      SEND MESSAGE
    </button>
  </form>
</template>
