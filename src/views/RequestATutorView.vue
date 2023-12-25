<script setup lang="ts">
import { ref, InputHTMLAttributes } from "vue";
import { PlusCircle, MinusCircle } from "lucide-vue-next";
import ClassList from "../components/ClassList.vue";
import { useChildStore } from "../lib/stores/child.ts";
// import { level } from "../lib/stores/child.ts";
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";

const childStore = useChildStore();
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

const learningMethod = ref(plans[0]);

// const childNumber = ref(childStore.children.length);
const step = ref(1);

const handleChildNumberIncrement = () => {
  childStore.addNewChild();
};

const handleChildNumberDecrement = () => {
  if (childStore.children.length > 1) {
    childStore.reduceChild();
  }
};

const handleStepIncrement = () => {
  if (step.value < 3) {
    step.value++;
  }
};

const handleStepDecrement = () => {
  if (step.value > 1) {
    step.value--;
  }
};

const firstName = ref<InputHTMLAttributes | null>(null);
const lastName = ref<InputHTMLAttributes | null>(null);
const email = ref<InputHTMLAttributes | null>(null);
const phoneNumber = ref<InputHTMLAttributes | null>(null);

const handleFormSubmission = async (e) => {
  e.preventDefault();
  if (
    firstName.value?.value &&
    lastName.value?.value &&
    email.value?.value &&
    phoneNumber.value?.value
  ) {
    try {
      const response = await fetch(
        "https://myadmin.frithlandeduconsult.org.ng/frithlan/api/applicationdata.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: firstName.value?.value,
            lastName: lastName.value?.value,
            email: email.value?.value,
            phoneNumber: phoneNumber.value?.value,
            learningMethod: learningMethod.value.name,
            numberOfKids: childStore.children.length,
            childrenData: JSON.stringify(childStore.children),
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        firstName.value.value = "";
        lastName.value.value = "";
        email.value.value = "";
        phoneNumber.value.value = "";
        learningMethod.value = plans[0];
        childStore.resetChildren();
        step.value = 4;
      }
    } catch (e) {
      console.log("There was a serious issue");
    }
  }
};
</script>

<template>
  <div v-if="step === 1">
    <div class="flex items-center px-10 gap-20">
      <p class="text-lg lg:text-2xl font-semibold">
        How many kids need lesson?
      </p>

      <div class="flex justify-evenly items-center gap-5">
        <MinusCircle @click="handleChildNumberDecrement" color="coral" />
        <p class="text-xl">{{ childStore.children.length }}</p>
        <PlusCircle @click="handleChildNumberIncrement" color="coral" />
      </div>
    </div>

    <form
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-items-center gap-4 mt-4"
    >
      <ClassList
        v-for="child in childStore.children"
        :key="child.id"
        :child="child"
      />

      <!-- <ClassList /> -->

      <!-- <select multiple="true" class="w-full">

        <option v-for="lev in levelRef" :value="lev.name">
          {{ lev.name }}
        </option>
      </select> -->
    </form>
  </div>

  <div class="flex flex-col p-5" v-if="step === 2">
    <p class="self-center text-xl font-semibold">Which do you prefer?</p>
    <RadioGroup v-model="learningMethod" class="px-20 mt-5">
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
    <form
      class="flex flex-col gap-10 w-full lg:w-[75%] mx-auto p-10 shadow-lg"
      @submit="handleFormSubmission"
    >
      <p class="font-semibold text-center text-xl">
        Please enter your personal information
      </p>
      <div class="flex justify-between flex-col lg:flex-row gap-10">
        <input
          ref="firstName"
          type="text"
          class="p-4 border flex-1 focus:bg-white bg-slate-100 placeholder-black focus:border-blue-700 hover:border-blue-300 outline-none rounded-md"
          placeholder="Enter Your First Name"
          required
        />
        <input
          ref="lastName"
          type="text"
          class="p-4 border flex-1 focus:bg-white bg-slate-100 placeholder-black focus:border-blue-700 hover:border-blue-300 outline-none rounded-md"
          placeholder="Enter Your Last Name"
          required
        />
      </div>
      <div class="flex justify-between flex-col lg:flex-row gap-10">
        <input
          ref="email"
          type="email"
          class="p-4 border flex-1 focus:bg-white bg-slate-100 placeholder-black focus:border-blue-700 hover:border-blue-300 outline-none rounded-md"
          placeholder="Enter Your Email Address"
          required
        />
        <input
          ref="phoneNumber"
          type="text"
          class="p-4 border flex-1 focus:bg-white bg-slate-100 placeholder-black focus:border-blue-700 hover:border-blue-300 outline-none rounded-md"
          placeholder="Enter Your Phone Number"
          required
        />
      </div>

      <button
        type="submit"
        class="bg-blue-400 text-white p-4 rounded-md hover:bg-blue-800 transition-all delay-200 duration-250"
      >
        SUBMIT INFORMATION
      </button>
    </form>
  </div>

  <!-- <div v-if="step === 4">
    <p class="text-center text-2xl">Payment Brief Will Be Here</p>
  </div> -->
  <div class="flex flex-col items-center gap-10" v-if="step === 4">
    <img src="../assets/finish-checkmark.svg" alt="done" />

    <p class="font-bold text-lg text-center">
      Your information has been submitted.
    </p>

    <router-link
      to="/"
      class="bg-green-500 text-center text-white w-72 p-3 rounded-md self-center hover:bg-yellow-800"
    >
      Go Home
    </router-link>
  </div>

  <div
    class="flex flex-col p-4 gap-10 lg:flex-row justify-evenly"
    v-if="step < 4"
  >
    <button
      class="bg-yellow-500 text-center text-white w-72 p-3 rounded-md self-center hover:bg-yellow-800"
      v-on:click="handleStepDecrement"
    >
      Previous
    </button>
    <button
      v-if="step < 3"
      class="bg-blue-500 text-center text-white w-72 p-3 rounded-md self-center hover:bg-blue-800"
      v-on:click="handleStepIncrement"
    >
      Next
    </button>
    <!-- <button
      v-if="step == 3"
      class="bg-blue-500 text-center text-white w-72 p-3 rounded-md self-center hover:bg-blue-800"
      v-on:click="handleStepIncrement"
    >
      Finish
    </button> -->
  </div>
</template>
