<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{ content: string; author: string; location?: string }>();
</script>

<template>
  <div
    class="bg-[#F4FDEE] p-7 rounded-md flex flex-col items-center justify-center gap-8"
  >
    <img
      src="../assets/frithland_logo.jpg"
      alt="frithland_logo"
      class="w-40 h-20 object-scale-down self-end"
    />
    <p class="text-lg font-semibold">
      {{ content }}
    </p>

    <p class="text-md font-medium">{{ author }}</p>

    <p class="text-md font-medium" v-if="location">{{ location }}</p>
  </div>
</template>
