<script setup lang="ts">
import { VueElement } from 'vue';

    defineProps<{
        icon: VueElement,
        title: string,
    }>();


</script>


<template>
  <div class="flex items-center"><Slot>{{ icon }}</slot> {{title}}</div>
</template>
