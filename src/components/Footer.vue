<template>
  <div
    className="flex flex-col lg:flex-row gap-10 lg:gap-4 justify-evenly items-center text-sm bg-black text-white py-20"
  >
    <div className="flex flex-col gap-4 items-center">
      <p className="text-gray-300 font-bold">Company</p>

      <router-link to="/">Contact Us</router-link>

      <a href="tel:+2349058674654">09058674654</a>
      <a href="tel:+2348135902313">08135902313</a>
      <a href="mailto:frithlandeduconsult@gmail.com">Email Us</a>
    </div>

    <div>
      <p class="text-center" v-text="settings.office_address"></p>
      <p v-text="settings.company_name"></p>
    </div>
  </div>
</template>
<script lang="js">

import appSettings from "../lib/app.json";
export default {

 data() {

   return {
      settings: appSettings,


   }
 },


}
</script>
