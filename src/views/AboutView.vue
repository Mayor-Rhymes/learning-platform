<!-- <script setup lang="ts">
   import HeroSection from "../components/HeroSection.vue";
   import Partners from "../components/Partners.vue";
   import Metric from "../components/Metric.vue";
</script> -->

<template>
  <div class="flex flex-col gap-20 h-full w-full bg-[aboutbg] bg-cover bg-no-repeat">
    <h4 class="text-center text-5xl text-blue-500 drop-shadow-md">
      About Frithland
    </h4>
    <p
      class="text-center text-lg md:text-xl lg:mx-28 lg:text-3xl font-extrabold"
    >
      We are on a mission to improve the lives of Nigerian students who are
      finding it hard to achieve their dream grades. Examinations can be
      daunting and a forthcoming one can cause its takers anxiety and stress.
      This is absolutely normal especially considering the fact that failure in
      an exam usually means an inability to fulfill specific dreams and
      aspirations.

      <br />
      <br />
      We eliminate this unneeded stress and anxiety and help our students with
      qualified tutors who are specifically trained for the exams they plan to
      take and are capable of equiping students with the required knowledge to
      excel in these exams.
    </p>

    <!-- <img
      src="../assets/about.jpg"
      alt="about-image"
      className="block h-[400px] md:h-[600px] lg:h-[800px]"
    /> -->

    <div class="flex justify-evenly">
      <div
        class="flex flex-col items-center justify-center rounded-md border h-[200px] w-[300px] cursor-pointer transition-all duration-300 ease-in-out delay-300 shadow-md hover:shadow-fuchsia-400"
      >
        <h6 class="text-lg font-bold">Our Mission</h6>
      </div>
      <div
        class="flex flex-col items-center justify-center rounded-md border h-[200px] w-[300px] cursor-pointer transition-all duration-300 ease-in-out delay-300 shadow-md hover:shadow-fuchsia-400"
      >
        <h6 class="text-lg font-bold">Our Vision</h6>
      </div>
      <div
        class="flex flex-col items-center justify-center rounded-md border h-[200px] w-[300px] cursor-pointer transition-all duration-300 ease-in-out delay-300 shadow-md hover:shadow-fuchsia-400"
      >
        <h6 class="text-lg font-bold">Our Goals</h6>
      </div>
    </div>
  </div>
</template>
