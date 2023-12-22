<script setup lang="ts">
import Testimonial from "./Testimonial.vue";
import { testimonials } from "../lib/mockTestimonials";
</script>
<template>
  <h4 class="text-center text-2xl font-bold">Testimonials</h4>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 p-5">
    <Testimonial
      v-for="testimonial in testimonials"
      :key="testimonial.id"
      :content="testimonial.content"
      :author="testimonial.author"
      :location="testimonial.location"
    />
  </div>
</template>
