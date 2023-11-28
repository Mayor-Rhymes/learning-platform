<!-- <script setup lang="ts">
   import HeroSection from "../components/HeroSection.vue";
   import Partners from "../components/Partners.vue";
   import Metric from "../components/Metric.vue";
</script> -->

<template>
  <div
    class="flex flex-col gap-20 h-full w-full bg-[aboutbg] bg-cover bg-no-repeat"
  >
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

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 justify-evenly items-center gap-10"
    >
      <div
        class="flex flex-col gap-5 items-center justify-center rounded-md border cursor-pointer transition-all duration-300 ease-in-out p-10 delay-300 shadow-md hover:shadow-fuchsia-400 hover:-translate-y-4 group"
      >
        <h6 class="text-lg font-bold group-hover:text-fuchsia-600 transition-all duration-200 delay-200 ease-in-out">Our Mission</h6>
        <ul class="list-disc flex flex-col gap-3 group-hover:text-blue-400 transition-all duration-200 delay-200 ease-in-out">
          <li>
            Empowering success through tailored expertise: our mission is to
            seamlessly connect ambitious learners with top-tier tutors
          </li>
          <li>
            Unlocking their full potential and guiding them towards exam
            excellence.
          </li>
          <li>
            We are dedicated to cultivating confidence, imparting knowledge, and
            fostering a supportive environment that propels every student
            towards their academic triumphs.
          </li>
        </ul>
      </div>
      <div
        class="group flex flex-col gap-5 items-center justify-center rounded-md border cursor-pointer transition-all duration-300 ease-in-out p-10 delay-300 shadow-md hover:shadow-fuchsia-400 hover:-translate-y-4"
      >
        <h6 class="text-lg font-bold group-hover:text-fuchsia-600 transition-all duration-200 delay-200 ease-in-out">Our Vision</h6>
        <ul class="list-disc flex flex-col gap-3 group-hover:text-blue-400 transition-all duration-200 delay-200 ease-in-out">
          <li>
            Envisioning a future where every learner achieves their aspirations
            effortlessly, our vision is to revolutionize the learning experience
            through personalized tutoring.
          </li>
          <li>
            We strive to be the catalyst for academic excellence, pioneering
            innovative methods and curated support systems that adapt to
            individual needs.
          </li>
          <li>
            Our goal is to create a global community of empowered individuals
            equipped with the knowledge and skills to conquer any exam challenge
            they encounter.
          </li>
        </ul>
      </div>
      <div
        class="group flex flex-col gap-5 items-center justify-center rounded-md border cursor-pointer transition-all duration-300 ease-in-out p-10 delay-300 shadow-md hover:shadow-fuchsia-400 hover:-translate-y-4"
      >
        <h6 class="text-lg font-bold group-hover:text-fuchsia-600 transition-all duration-200 delay-200 ease-in-out">Our Goals</h6>
        <ul class="list-disc flex flex-col gap-3 group-hover:text-blue-400 transition-all duration-200 delay-200 ease-in-out">
          <li>Personalized Mastery</li>
          <li>Expanded Access to Excellence</li>
          <li>Continuous Innovation for Success</li>
        </ul>
      </div>
    </div>
  </div>
</template>
