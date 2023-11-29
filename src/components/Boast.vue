<script setup lang="ts">
import {
  PersonStanding,
  Star,
  CheckCircle,
} from "lucide-vue-next";
import { testimonials } from "../lib/mockTestimonials";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
</script>

<template>
  <div class="bg-[#002769] flex flex-col gap-10 px-4 py-20 text-white">
    <div class="flex flex-col gap-20 lg:flex-row">
      <div class="flex flex-col p-2 gap-10">
        <p class="text-xl text-yellow-400">
          Our approach to tutoring is both scientifically and anecdotally
          considered the best.
        </p>

        <h5 class="text-2xl lg:text-4xl md:text-3xl font-extrabold">
          Make us Your Right Channel To Academic excellence and success.
        </h5>

        <p>
          Collaborating with you, we strive to support your children in
          excelling through every phase of their educational journey—be it
          establishing fundamental skills, assisting with homework, achieving
          higher grades, mastering subjects, or successfully navigating pivotal
          exams.
        </p>

        <ul class="flex flex-col px-2 lg:px-10 gap-5 list-none text-lg">
          <li class="flex items-center gap-4">
            <CheckCircle fill="gold" />
            Learn from super capable and experienced tutors
          </li>
          <li class="flex items-center gap-4">
            <!-- <img src="../assets/checkmark2.png" alt="wish" class="h-10 w-10" /> -->
            <CheckCircle fill="gold" />
            We teach at your convenience.
          </li>
          <li class="flex items-center gap-4">
            <!-- <img src="../assets/checkmark2.png" alt="wish" class="h-10 w-10" /> -->
            <CheckCircle fill="gold" />
            Our teaching materials are up to date
          </li>
        </ul>

        <button
          class="bg-blue-600 rounded-lg px-6 py-4 font-bold flex gap-3 justify-center lg:w-96 items-center"
        >
          <PersonStanding /> Request a Professional Tutor
        </button>
      </div>

      <!-- <div class="grid grid-cols-2 justify-center">
        <img src="../assets/student-boy.jpg" alt="student-boy" class="rounded-md lg:h-72 lg:w-72"/>
        <img src="../assets/student-boy-2.jpg" alt="student-boy-2" class="rounded-md lg:h-72 lg:w-72"/>
        <img src="../assets/student-girl.jpg" alt="student-girl" class="rounded-md lg:h-72 lg:w-72"/>
        <img src="../assets/student-boy.jpg" alt="student-boy" class="rounded-md lg:h-72 lg:w-72"/>
      </div> -->

      <img
        src="../assets/student_image_group.jpg"
        alt="student_image_group"
        class="rounded-md h-2/3 w-full lg:h-[40%] lg:w-[40%]"
      />
    </div>

    <p class="text-xl text-center text-yellow-300">We always deliver!!!</p>

    <h5 class="text-2xl font-extrabold text-center">
      Our students outperform their peers by a massive amount.
    </h5>

    <div class="flex flex-col lg:flex-row lg:justify-center">
      <img src="../assets/564.png" alt="tutorial" />

      <div class="flex flex-col gap-10">
        <h5 class="text-lg font-extrabold text-center">
          We Teach Effectively To Ensure That Our Students Reach For The Moon
        </h5>

        <!-- <ul class="flex flex-col px-2 lg:px-10 gap-5 list-none text-lg">
          <li class="flex items-center gap-4">
            <img src="../assets/checkmark2.png" alt="wish" class="h-10 w-10" />
            Learn from super capable and experienced tutors
          </li>
          <li class="flex items-center gap-4">
            <img src="../assets/checkmark2.png" alt="wish" class="h-10 w-10" />
            We teach at your convenience.
          </li>
          <li class="flex items-center gap-4">
            <img src="../assets/checkmark2.png" alt="wish" class="h-10 w-10" />
            Our teaching materials are up to date
          </li>
        </ul> -->

        <button
          class="bg-blue-600 rounded-lg px-6 py-4 font-bold flex gap-3 justify-center lg:w-72 items-center"
        >
          Get Started Today
        </button>
      </div>
    </div>

    <!-- <div
      class="flex flex-col gap-10 lg:gap-0 lg:flex-row justify-center py-20 items-center lg:w-[80%] lg:mx-auto"
    >
      <ChevronLeftCircle
        @click="handleDecrease"
        :size="50"
        class="hidden lg:block cursor-pointer"
      /> -->

    <Splide :options="{ rewind: true }">
      <SplideSlide v-for="testimonial in testimonials">
        <div
          class="flex flex-col gap-4 items-center transition-all delay-75 duration-100"
        >
          <p class="text-center text-lg">
            {{ testimonial.content }}
          </p>
          <p>{{ testimonial.author }}</p>
          <div class="flex flex-row gap-4">
            <Star
              v-for="_ in testimonial.rating"
              color="yellow"
              enable-background="true"
              fill="yellow"
            />
          </div>

          <p>{{ testimonial.location }}</p>
        </div>
      </SplideSlide>
    </Splide>

    <!-- <div class="flex gap-4">
        <ChevronLeftCircle
          @click="handleDecrease"
          class="block lg:hidden cursor-pointer"
          :size="50"
        />
        <ChevronRightCircle
          @click="handleIncrease"
          class="block lg:hidden cursor-pointer"
          :size="50"
        />
      </div> -->
    <!-- <ChevronLeftCircle @click="handleDecrease" class="block lg:hidden" /> -->
    <!-- <ChevronRightCircle
        @click="handleIncrease"
        class="hidden lg:block cursor-pointer"
        :size="50"
      /> -->
    <!-- </div> -->
  </div>
</template>

<!-- class="rounded-md h-40 w-40 lg:h-72 lg:w-56" -->
