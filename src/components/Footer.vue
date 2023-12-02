<template>
  <div
    className="flex flex-col lg:flex-row gap-10 lg:gap-4 justify-evenly items-center text-sm bg-black text-white py-6"
  >
    <div className="flex flex-col gap-4 items-center">
      <p className="text-gray-300 font-bold">Parents</p>

      <router-link to="/">Home Tutoring</router-link>
    </div>
    <div className="flex flex-col gap-4 items-center">
      <p className="text-gray-300 font-bold">Tutors</p>

      <!-- <router-link to="/">Become a Tutor</router-link>
         <router-link to="/">Tutoring Jobs</router-link> -->
      <router-link to="/">Tutoring Policies</router-link>
    </div>
    <div className="flex flex-col gap-4 items-center">
      <p className="text-gray-300 font-bold">Company</p>

      <!-- <router-link to="/">Careers</router-link> -->
      <router-link to="/">Contact Us</router-link>
      <!-- <router-link to="/">Safety Guide</router-link> -->
    </div>
  </div>
</template>
