<template>
  <div class="flex flex-col gap-10">
    <p class="text-center font-bold text-3xl">We Have Tutors For The Following Exams</p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-x-4 gap-y-10">
      <div
        class="rounded-lg group flex flex-col items-center justify-center transition-all delay-75 duration-100 shadow-lg w-[75%] lg:w-56 h-56 hover:bg-blue-600 font-bold"
      >
        <p>SAT</p>
        <router-link to="/sat-prep" class="hidden text-sm group-hover:block transition-all delay-75 duration-100 text-white">Get Started</router-link>
      </div>
      <div
      class="rounded-lg group flex flex-col items-center justify-center transition-all delay-75 duration-100 shadow-lg w-[75%] lg:w-56 h-56 hover:bg-blue-600 font-bold"
      >
        <p>GRE</p>
        <router-link to="/gre-prep" class="hidden text-sm group-hover:block transition-all delay-75 duration-100 text-white ">Get Started</router-link>
      </div>
      <div
      class="rounded-lg group flex flex-col items-center justify-center transition-all delay-75 duration-100 shadow-lg w-[75%] lg:w-56 h-56 hover:bg-blue-600 font-bold"
      >
        <p>GMAT</p>
        <router-link to="/gmat-prep" class="hidden text-sm group-hover:block transition-all delay-75 duration-100 text-white ">Get Started</router-link>
      </div>
      <div
      class="rounded-lg group flex flex-col items-center justify-center transition-all delay-75 duration-100 shadow-lg w-[75%] lg:w-56 h-56 hover:bg-blue-600 font-bold"
      >
        <p>IELTS</p>
        <router-link to="/ielts-prep" class="hidden text-sm group-hover:block transition-all delay-75 duration-100 text-white ">Get Started</router-link>
      </div>
      <div
      class="rounded-lg group flex flex-col items-center justify-center transition-all delay-75 duration-100 shadow-lg w-[75%] lg:w-56 h-56 hover:bg-blue-600 font-bold"
      >
        <p>TOEFL</p>
        <router-link to="/toefl-prep" class="hidden text-sm group-hover:block transition-all delay-75 duration-100 text-white ">Get Started</router-link>
      </div>
      <div
      class="rounded-lg group flex flex-col items-center justify-center transition-all delay-75 duration-100 shadow-lg w-[75%] lg:w-56 h-56 hover:bg-blue-600 font-bold"
      >
        <p>IGCSE</p>
        <router-link to="/igcse-prep" class="hidden text-sm group-hover:block transition-all delay-75 duration-100 text-white ">Get Started</router-link>
      </div>
      <div
      class="rounded-lg group flex flex-col items-center justify-center transition-all delay-75 duration-100 shadow-lg w-[75%] lg:w-56 h-56 hover:bg-blue-600 font-bold"
      >
        <p>OET</p>
        <router-link to="/oet-prep" class="hidden text-sm group-hover:block transition-all delay-75 duration-100 text-white ">Get Started</router-link>
      </div>
      <div
      class="rounded-lg group flex flex-col items-center justify-center transition-all delay-75 duration-100 shadow-lg w-[75%] lg:w-56 h-56 hover:bg-blue-600 font-bold"
      >
        <p>PTE</p>
        <router-link to="/pte-prep" class="hidden text-sm group-hover:block transition-all delay-75 duration-100 text-white ">Get Started</router-link>
      </div>
    </div>
  </div>
</template>
