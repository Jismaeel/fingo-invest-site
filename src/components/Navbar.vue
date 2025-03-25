<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const isMenuOpen = ref(false);
const route = useRoute();

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const getLinkClasses = (path) => {
  return route.path === path
    ? "text-gray-50 underline font-semibold"
    : "text-gray-50 transition-all";
};
</script>

<template>
  <nav class="mt-2 mx-5 border-gray-200 shadow-sm transition-all duration-300 bg-black rounded-2xl" role="navigation">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div class="flex items-center space-x-3">
        <span class="text-white self-center text-md font-semibold whitespace-nowrap">Fingo Investment</span>
      </div>

      <!-- Menu button for small screens -->
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button
          type="button"
          class="text-white border-2 border-amber-50 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-700 font-medium rounded-lg text-sm px-4 py-2">
          Get a Quote
        </button>
        <button
          @click="toggleMenu"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
          :aria-expanded="isMenuOpen"
          aria-controls="navbar-cta">
  
          <svg
            class="w-6 h-6 text-gray-50"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M18 6h-8m8 4H6m12 4h-8m8 4H6" />
          </svg>
        </button>
      </div>

      <!-- Navbar Menu -->
      <div
        :class="[
          'items-center justify-between w-full md:flex md:w-auto md:order-1 ',
          isMenuOpen ? 'block bg-black' : 'hidden',
        ]"
        id="navbar-cta">
        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
          <li>
            <a href="/" :class="[getLinkClasses('/'), 'block py-2 px-3 md:p-0 rounded-sm']" @click="isMenuOpen = false" role="menuitem">Home</a>
          </li>
          <li>
            <a href="/About" :class="[getLinkClasses('/About'), 'block py-2 px-3 md:p-0 rounded-sm']" @click="isMenuOpen = false" role="menuitem">About</a>
          </li>
          <li>
            <a href="/Services" :class="[getLinkClasses('/Services'), 'block py-2 px-3 md:p-0 rounded-sm']" @click="isMenuOpen = false" role="menuitem">Services</a>
          </li>
          <li>
            <a href="/Contact" :class="[getLinkClasses('/Contact'), 'block py-2 px-3 md:p-0 rounded-sm']" @click="isMenuOpen = false" role="menuitem">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
