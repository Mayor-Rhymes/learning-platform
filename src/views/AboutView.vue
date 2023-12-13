<script setup lang="ts">
import CategoryCard from "../components/CategoryCard.vue";
import Footer from "../components/Footer.vue";
import {
  missionObjectives,
  visionObjectives,
  goalObjectives,
  servicesList
} from "../lib/utility";
</script>

<template>
  <div
    class="flex flex-col gap-20 h-full w-full bg-[aboutbg] bg-cover bg-no-repeat"
  >
    <p
      class="text-center text-lg md:text-xl lg:mx-28 lg:text-3xl font-extrabold"
    >
      Frithland educational consult is on a mission to provide personalized physical and online tutoring
      tailored to every student's unique journey. Our goal is to help every
      student achieve academic success and realize their full potential.
    </p>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 justify-evenly items-center gap-10"
    >
      <CategoryCard title="Our Mission" :objectives="missionObjectives" />
      <CategoryCard title="Our Vision" :objectives="visionObjectives" />
      <CategoryCard title="Our Goals" :objectives="goalObjectives" />
      <CategoryCard title="Our Tutors" description="yes">
        <p>
          Our experienced tutors are available to teach a variety of subjects,
          including Math, Science, English and more. We understand that every
          child has unique learning needs, which is why our tutors work with
          each parent to develop a customized learning plan that fits their
          individual goals and learning style.
        </p>
      </CategoryCard>

      <CategoryCard title="Safety First" description="yes">
        <p>
          Frithland educational consult sets high safety standards and will never compromise 
          on your peace of mind and safety of your kids.
        </p>
      </CategoryCard>
      <CategoryCard title="Our Services" :objectives="servicesList"/>
    </div>
  </div>
  <Footer />
</template>
