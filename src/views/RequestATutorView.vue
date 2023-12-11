<script setup lang="ts">
import { ref } from "vue";
import { PlusCircle, MinusCircle } from "lucide-vue-next";
import ClassList from "../components/ClassList.vue";
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";
const plans = [
  {
    name: "Virtual",
  },
  {
    name: "Physical",
  },
  {
    name: "Hybrid",
  },
];

const selected = ref(plans[0]);

const childNumber = ref(1);
const step = ref(1);

const handleChildNumberIncrement = () => {
  childNumber.value++;
};

const handleChildNumberDecrement = () => {
  if (childNumber.value > 1) {
    childNumber.value--;
  }
};

const handleStepIncrement = () => {
  if (step.value < 4) {
    step.value++;
  }
};

const handleStepDecrement = () => {
  if (step.value > 1) {
    step.value--;
  }
};
</script>

<template>
  <div v-if="step === 1">
    <div class="flex items-center px-10 gap-20">
      <p class="text-2xl">How many kids need lesson?</p>

      <div class="flex justify-evenly items-center gap-5">
        <MinusCircle @click="handleChildNumberDecrement" color="coral" />
        <p class="text-xl">{{ childNumber }}</p>
        <PlusCircle @click="handleChildNumberIncrement" color="coral" />
      </div>
    </div>
    <form
      class="grid mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 place-items-center"
    >
      <ClassList v-for="_ in childNumber" />
    </form>
  </div>

  <div class="flex flex-col p-5" v-if="step === 2">
    <p>Which Do You Prefer?</p>
    <RadioGroup v-model="selected" class="px-20">
      <RadioGroupLabel class="sr-only">Preference</RadioGroupLabel>
      <div class="space-y-2 flex flex-col gap-10">
        <RadioGroupOption
          as="template"
          v-for="plan in plans"
          :key="plan.name"
          :value="plan"
          v-slot="{ active, checked }"
        >
          <div
            :class="[
              active
                ? 'ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300'
                : '',
              checked ? 'bg-sky-900/75 text-white ' : 'bg-white ',
            ]"
            class="relative flex flex-col gap-10 cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none"
          >
            <div class="flex w-full items-center justify-between">
              <div class="flex items-center">
                <div class="text-sm">
                  <RadioGroupLabel
                    as="p"
                    :class="checked ? 'text-white' : 'text-gray-900'"
                    class="font-medium"
                  >
                    {{ plan.name }}
                  </RadioGroupLabel>
                </div>
              </div>
              <div v-show="checked" class="shrink-0 text-white">
                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="12"
                    fill="#fff"
                    fill-opacity="0.2"
                  />
                  <path
                    d="M7 13l3 3 7-7"
                    stroke="#fff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </RadioGroupOption>
      </div>
    </RadioGroup>
  </div>


  <div v-if="step === 3">
    The next step is here
  </div>

  <div class="flex justify-evenly">
    <button
      class="bg-yellow-500 text-center text-white w-72 p-3 rounded-md self-center hover:bg-yellow-800"
      v-on:click="handleStepDecrement"
    >
      Previous
    </button>
    <button
      class="bg-blue-500 text-center text-white w-72 p-3 rounded-md self-center hover:bg-blue-800"
      v-on:click="handleStepIncrement"
    >
      Next
    </button>
  </div>
</template>
