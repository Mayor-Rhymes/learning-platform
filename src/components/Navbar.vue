<script setup lang="ts">
import { Phone, PersonStanding, MenuIcon, XCircleIcon } from "lucide-vue-next";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ChevronDown } from "lucide-vue-next";
import { ref } from "vue";
import { ChevronUp, ShieldQuestionIcon } from "lucide-vue-next";
const visible = ref(false);
const menuVisible = ref(false);

const handleVisibility = () => {
  visible.value = !visible.value;
  console.log(visible.value);
};
const handleMenuVisibility = () => {
  menuVisible.value = !menuVisible.value;
  console.log(menuVisible.value);
};
</script>

<template>
  <div
    class="lg:hidden md:hidden px-5 flex justify-between items-center h-[80px]"
  >
    <router-link
      to="/"
      class="lg:hidden md:hidden flex items-center justify-center text-center text-blue-700 text-4xl font-bold"
    >
      <img
        src="../assets/frithland_logo.jpg"
        alt="frithland_logo"
        class="w-40 h-40 object-scale-down"
      />
      <!-- <p>Frithland</p> -->
    </router-link>

    <Transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuIcon v-if="!menuVisible" @click="handleMenuVisibility" />
      <XCircleIcon v-else="menuVisible" @click="handleMenuVisibility" />
    </Transition>
  </div>
  <Transition
    enter-active-class="transition duration-100 ease-out"
    enter-from-class="transform scale-95 opacity-0"
    enter-to-class="transform scale-100 opacity-100"
    leave-active-class="transition duration-75 ease-in"
    leave-from-class="transform scale-100 opacity-100"
    leave-to-class="transform scale-95 opacity-0"
  >
    <nav
      v-if="menuVisible"
      class="w-full lg:hidden md:hidden flex flex-col p-2 bg-white justify-center gap-5 font-semibold lg:border-b-gray-100 lg:border-b-4"
    >
      <Menu
        as="div"
        class="flex items-center gap-2 p-2 hover:bg-gray-200 hover:rounded-md cursor-pointer transition-all delay-100 duration-150 relative"
      >
        <MenuButton
          class="flex items-center hover:bg-gray-200 p-2 rounded"
          @click="handleVisibility"
          >Our Services
          <transition
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <ChevronDown v-if="!visible" />
            <ChevronUp v-else />
          </transition>
        </MenuButton>
        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <MenuItems
            class="inline-flex flex-col gap-5 absolute top-10 w-[400px] rounded-md p-10 shadow-lg bg-white"
          >
            <MenuItem
              class="p-4 rounded-md hover:text-white transition-all delay-150 duration-150"
            >
              <router-link
                to="/request-a-tutor"
                active-class="bg-blue-400"
                class="hover:bg-blue-500"
              >
                Request A Tutor
              </router-link>
            </MenuItem>
            <MenuItem
              class="p-4 rounded-md hover:text-white transition-all delay-150 duration-150"
            >
              <router-link
                to="/about"
                active-class="bg-blue-400"
                class="hover:bg-blue-500"
              >
                Services
              </router-link>
            </MenuItem>
          </MenuItems>
        </transition>
      </Menu>

      <router-link
        to="/request-a-tutor"
        class="flex items-center gap-2 p-2 hover:bg-gray-200 hover:rounded-md cursor-pointer transition-all delay-100 duration-150"
      >
        <PersonStanding /> Request A Tutor
      </router-link>
      <router-link
        active-class="bg-gray-200 rounded-md"
        to="/contact"
        class="flex items-center gap-2 p-2 hover:bg-gray-200 hover:rounded-md cursor-pointer transition-all delay-100 duration-150"
      >
        <Phone /> Contact us
      </router-link>

      <router-link
        active-class="bg-gray-200 rounded-md"
        to="/about"
        class="flex active:bg-gray-200 gap-2 active:rounded-md items-center p-2 hover:bg-gray-200 hover:rounded-md cursor-pointer transition-all delay-100 duration-150"
      >
        <ShieldQuestionIcon /> About
      </router-link>
    </nav>
  </Transition>

  <p class="lg:hidden md:hidden text-xl block text-center">
    We make learning superbly Fun and inclusive
  </p>
  <nav
    class="w-full hidden md:flex lg:flex p-5 z-40 h-20 items-center fixed top-0 bg-white justify-center gap-5 font-semibold lg:border-b-gray-100 lg:border-b-4"
  >
    <router-link to="/" class="text-blue-500 text-xl">
      <img
        src="../assets/frithland_logo.jpg"
        alt="frithland_logo_3"
        class="object-scale-down w-40 h-40"
      />
      <!-- <p>Frithland</p> -->
    </router-link>

    <Menu as="div" class="relative">
      <MenuButton
        class="flex items-center hover:bg-gray-200 p-2 rounded"
        @click="handleVisibility"
        >Our Services
        <transition
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <ChevronDown v-if="!visible" />
          <ChevronUp v-else />
        </transition>
      </MenuButton>
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="inline-flex flex-col gap-5 absolute top-10 w-[400px] rounded-md p-10 shadow-lg bg-white"
        >
          <MenuItem
            class="p-4 rounded-md hover:text-white transition-all delay-150 duration-150"
          >
            <router-link
              to="/request-a-tutor"
              active-class="bg-blue-400"
              class="hover:bg-blue-500"
            >
              Request A Tutor
            </router-link>
          </MenuItem>
          <MenuItem
            class="p-4 rounded-md hover:text-white transition-all delay-150 duration-150"
          >
            <router-link
              to="/about"
              active-class="bg-blue-400"
              class="hover:bg-blue-500"
            >
              Services
            </router-link>
          </MenuItem>
        </MenuItems>
      </transition>
    </Menu>

    <router-link
      to="/request-a-tutor"
      class="flex items-center gap-2 p-2 hover:bg-gray-200 hover:rounded-md cursor-pointer transition-all delay-100 duration-150"
    >
      <PersonStanding /> Request A Tutor
    </router-link>
    <router-link
      active-class="bg-gray-200 rounded-md"
      to="/contact"
      class="flex items-center gap-2 p-2 hover:bg-gray-200 hover:rounded-md cursor-pointer transition-all delay-100 duration-150"
    >
      <Phone /> Contact us
    </router-link>

    <router-link
      active-class="bg-gray-200 rounded-md"
      to="/about"
      class="flex active:bg-gray-200 active:rounded-md items-center p-2 hover:bg-gray-200 hover:rounded-md cursor-pointer transition-all delay-100 duration-150"
    >
      About
    </router-link>
  </nav>
</template>
