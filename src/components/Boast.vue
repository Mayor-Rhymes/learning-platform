<script setup lang="ts">
import {
  PersonStanding,
  ChevronLeftCircle,
  Star,
  ChevronRightCircle,
} from "lucide-vue-next";
import { testimonials } from "../lib/mockTestimonials";
import { ref, onMounted } from "vue";

const slidePosition = ref(0);

const handleIncrease = () => {
  if (slidePosition.value < testimonials.length - 1) {
    slidePosition.value++;
  } else {
    slidePosition.value = 0;
  }
};

const handleDecrease = () => {
  if (slidePosition.value > 0) {
    slidePosition.value--;
  } else {
    slidePosition.value = testimonials.length - 1;
  }
};

onMounted(() => {
  setInterval(handleIncrease, 3000);
});
</script>

<template>
  <div class="bg-[#002769] flex flex-col gap-10 px-4 py-20 text-white">
    <div class="flex flex-col lg:flex-row">
      <div class="flex flex-col p-6 gap-10">
        <p class="text-xl text-yellow-400">
          Our approach to tutoring is both scientifically and anecdotally
          considered the best.
        </p>

        <h5 class="text-4xl font-extrabold">
          Make us Your Right Channel To Academic excellence and success.
        </h5>

        <p>
          We work with you to ensure your kids excel at every stage of their
          learning journey whether it's building early foundations, helping with
          homework, getting better grades, mastering their subjects or passing
          pivotal exams.
        </p>

        <ul class="flex flex-col px-10 gap-5 list-none text-lg">
          <li class="flex items-center gap-4">
            <img src="../assets/checkmark.svg" alt="wish" /> Learn with top 1%
            of vetted tutors
          </li>
          <li class="flex items-center gap-4">
            <img src="../assets/checkmark.svg" alt="wish" /> We cover all exams
            and curriculas
          </li>
          <li class="flex items-center gap-4">
            <img src="../assets/checkmark.svg" alt="wish" /> Tutors come to your
            home or online
          </li>
        </ul>

        <button
          class="bg-blue-600 rounded-lg px-6 py-4 font-bold flex gap-3 justify-center lg:w-72 items-center"
        >
          <PersonStanding /> Get a Professional Tutor
        </button>
      </div>

      <div class="flex gap-10 flex-wrap justify-center">
        <img
          src="../assets/student-boy.jpg"
          alt="student-boy"
          class="rounded-md h-28 w-28 lg:h-72 lg:w-56"
        />
        <img
          src="../assets/student-boy-2.jpg"
          alt="student-boy-2"
          class="rounded-md h-56 w-56 lg:h-72 lg:w-56"
        />
        <img
          src="../assets/student-girl.jpg"
          alt="student-girl"
          class="rounded-md h-28 w-28 lg:h-72 lg:w-56"
        />
        <img
          src="../assets/student-boy.jpg"
          alt="student-boy"
          class="rounded-md h-28 w-28 lg:h-72 lg:w-56"
        />
      </div>
    </div>

    <p class="text-xl text-center text-yellow-300">We always deliver!!!</p>

    <h5 class="text-2xl font-extrabold text-center">
      Our students outperform their peers by a massive amount.
    </h5>

    <div class="flex flex-col lg:flex-row lg:justify-center">
      <img src="../assets/564.png" alt="tutorial" />

      <div class="flex flex-col gap-10">
        <h5 class="text-lg font-extrabold text-center">
          Our Innovative Approach Ensures Your Child Achieves Stellar Results
        </h5>

        <ul class="flex flex-col px-10 gap-5 list-none text-lg">
          <li class="flex items-center gap-4">
            <img src="../assets/checkmark.svg" alt="wish" /> Learn with top 1%
            of vetted tutors
          </li>
          <li class="flex items-center gap-4">
            <img src="../assets/checkmark.svg" alt="wish" /> We cover all exams
            and curriculas
          </li>
          <li class="flex items-center gap-4">
            <img src="../assets/checkmark.svg" alt="wish" /> Tutors come to your
            home or online
          </li>
        </ul>

        <button
          class="bg-blue-600 rounded-lg px-6 py-4 font-bold flex gap-3 justify-center lg:w-72 items-center"
        >
          Get Started Today
        </button>
      </div>
    </div>

    <div
      class="flex flex-col gap-10 lg:gap-0 lg:flex-row justify-center py-20 items-center lg:w-[80%] lg:mx-auto"
    >
      <ChevronLeftCircle
        @click="handleDecrease"
        :size="50"
        class="hidden lg:block cursor-pointer"
      />

      <div
        class="flex flex-col gap-4 items-center transition-all delay-75 duration-100"
        @touchstart="handleDecrease"
      >
        <p class="text-center text-lg">
          {{ testimonials[slidePosition].content }}
        </p>
        <p>{{ testimonials[slidePosition].author }}</p>
        <div class="flex flex-row gap-4">
          <Star
            v-for="_ in testimonials[slidePosition].rating"
            color="yellow"
            enable-background="true"
            fill="yellow"
          />
        </div>

        <p>{{ testimonials[slidePosition].location }}</p>
      </div>

      <div class="flex gap-4">
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
      </div>
      <!-- <ChevronLeftCircle @click="handleDecrease" class="block lg:hidden" /> -->
      <ChevronRightCircle
        @click="handleIncrease"
        class="hidden lg:block cursor-pointer"
        :size="50"
      />
    </div>
  </div>
</template>


