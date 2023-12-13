<script setup lang="ts">
import { Mail, Instagram, Phone } from "lucide-vue-next";
import Footer from "../components/Footer.vue";
import { InputHTMLAttributes, TextareaHTMLAttributes, ref } from "vue";
const firstName = ref<InputHTMLAttributes | null>(null);
const lastName = ref<InputHTMLAttributes | null>(null);
const email = ref<InputHTMLAttributes | null>(null);
const message = ref<TextareaHTMLAttributes | null>(null);
const handleFormSubmission = (e) => {
     e.preventDefault();
     if(firstName.value?.value && lastName.value?.value && email.value?.value && message.value?.value){
         console.log(firstName.value?.value, lastName.value?.value, email.value?.value, message.value?.value);
     }
};
</script>

<template>
  <form class="flex flex-col gap-10 w-full lg:w-[75%] mx-auto p-10 shadow-lg" @submit="handleFormSubmission">
    <h4 class="text-center text-lg font-bold">CONTACT US</h4>
    <p class="text-lg font-semibold text-center">
      Our team is eager to promptly address any inquiries you may have, Do you
      need support or general enquiries? Contact us.
    </p>
    <div class="flex gap-10 justify-evenly">
      <div
        class="flex flex-col gap-5 items-center justify-center cursor-pointer"
      >
        <Mail
          :size="50"
          fill="red"
          class="hover:scale-125 transition-all duration-150 delay-150 ease-in-out"
        />
        <a
          href="mailto:frithlandeduconsult@gmail.com?subject=Frithland Contact&body=I will like to get all important information regarding your schedule"
          >Mail Us</a
        >
      </div>
      <div
        class="flex flex-col gap-5 items-center justify-center cursor-pointer"
      >
        <Phone
          :size="50"
          fill="green"
          class="hover:scale-125 transition-all duration-150 delay-150 ease-in-out"
        />
        <!-- <p>Call Us</p> -->
        <a href="tel:+2349058674654">Call Us</a>
      </div>
      <div
        class="flex flex-col gap-5 items-center justify-center cursor-pointer"
      >
        <Instagram
          :size="50"
          fill="blue"
          class="hover:scale-125 transition-all duration-150 delay-150 ease-in-out"
        />
        <p>Reach Us On IG</p>
      </div>
    </div>

    <div class="flex justify-between flex-col lg:flex-row gap-10">
      <input
        ref="firstName"
        type="text"
        class="p-4 border flex-1 focus:bg-white bg-slate-100 placeholder-black focus:border-blue-700 hover:border-blue-300 outline-none rounded-md"
        placeholder="Enter Your First Name"
        required
      />
      <input
        ref="lastName"
        type="text"
        class="p-4 border flex-1 focus:bg-white bg-slate-100 placeholder-black focus:border-blue-700 hover:border-blue-300 outline-none rounded-md"
        placeholder="Enter Your Last Name"
        required
      />
    </div>

    <input
      ref="email"
      type="email"
      class="p-4 border focus:bg-white bg-slate-100 placeholder-black focus:border-blue-700 hover:border-blue-300 outline-none rounded-md"
      placeholder="Enter Your Email Address"
      required
    />
    <textarea
      ref="message"
      class="p-4 h-[300px] border focus:bg-white bg-slate-100 placeholder-black focus:border-blue-700 hover:border-blue-300 outline-none rounded-md resize-none"
      placeholder="Drop a Message"
      required
    ></textarea>

    <button
      
      type="submit"
      class="bg-blue-400 text-white p-4 rounded-md hover:bg-blue-800 transition-all delay-200 duration-250"
    >
      SEND MESSAGE
    </button>
  </form>
  <Footer />
</template>
