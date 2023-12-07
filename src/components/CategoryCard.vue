<script setup lang="ts">
defineProps<{
  title: string;
  objectives?: string[];
  description?: string;
}>();
</script>

<template>
  <div
    class="flex flex-col gap-5 items-center lg:h-[500px] justify-center rounded-2xl border border-b-[10px] border-b-fuchsia-500 cursor-pointer transition-all duration-300 ease-in-out p-10 delay-300 shadow-md hover:shadow-fuchsia-400 hover:-translate-y-4 group"
  >
    <h6
      class="text-lg font-bold group-hover:text-fuchsia-600 transition-all duration-200 delay-200 ease-in-out"
    >
      {{ title }}
    </h6>
    
    <ul v-if="objectives" class="list-disc flex flex-col gap-3 group-hover:text-blue-400 transition-all duration-200 delay-200 ease-in-out">
        <li v-for="objective in objectives">
            {{ objective }}
        </li>
    </ul>

    <slot v-if="description"/>
  </div>
</template>
