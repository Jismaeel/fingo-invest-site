<script setup>
import { ref } from "vue";

import short from "../assets/img/short.jpg";
import long from "../assets/img/long.jpg";
import benefits from "../assets/img/benefits.jpg";

// Define the array of items with images
const items = ref([
  {
    term: "Short term Investment plans",
    definition:
      "Cover amount starts from R30000 to R10000 12 Months waiting period Plus a free death benefit of up to R25000",
    image: short, // Replace with actual image URL
  },
  {
    term: "Long term Investment plans",
    definition:
      "Cover amounts starts from R100000 to R500000 Returns yield after 10 to 11 years Plus a free death benefit of up to R25000",
    image: long, // Replace with actual image URL
  },
  {
    term: "Benefits",
    definition:
      "Receive 100% cash back benefit after eight months. Plus a free death benefit of up to R25000. Free fraud protection benefit of up to R25,000 and FINGO will pay all claims within six (6) equal monthly instalments.",
    image: benefits,
  },
]);
</script>

<template>
  <section>
    <!-- Container -->
    <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
      <!-- Title -->
      <h2 class="mx-auto max-w-2xl text-center text-3xl font-bold md:text-5xl">
        We offer the best investment opportunities
      </h2>
      <p
        class="mx-auto mb-8 mt-4 max-w-lg text-center text-gray-500 md:mb-12 lg:mb-16">
        Based on affordability, you will be given the best deal for your monthly
        premium.
      </p>
      <!-- Content -->
      <div class="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-6">
        <!-- Item -->
        <div
          v-for="(item, index) in items"
          :key="index"
          class="group relative block overflow-hidden rounded-lg border-2 border-black bg-white shadow-lg transition-transform hover:-translate-x-2 hover:-translate-y-2">
          <!-- Image -->
          <img
            :src="item.image"
            :alt="item.term"
            class="h-auto w-full object-cover" />

          <!-- Content -->
          <div class="p-4 sm:p-6 lg:p-8 rounded-lg">
            <h2 class="text-xl font-medium sm:text-2xl">
              {{ item.term }}
            </h2>
            <p class="mt-4 text-sm sm:text-base text-gray-700">
              {{ item.definition }}
            </p>
            <a
              href="#"
              class="mt-5 inline-block font-bold text-blue-600 hover:underline"
              >Read more</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
