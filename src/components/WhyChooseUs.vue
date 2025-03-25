<script setup>
import { ref } from "vue";

const items = ref([
  {
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg", // Financial advisors consulting
    term: "Trusted Advisors",
    definition:
      "Our team consists of seasoned financial professionals with years of expertise in investment strategies.",
  },
  {
    image: "https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg", // Growth and ROI graph
    term: "Healthy ROI (Return on Investment)",
    definition:
      "We offer investment opportunities that maximize profit potential while balancing risk.",
  },
  {
    image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg", // Cybersecurity and data protection
    term: "Secure Platform",
    definition:
      "Your investments and personal data are safeguarded with advanced encryption and security measures.",
  },
]);
</script>

<template>
  <section
    class="bg-gray-50 rounded-2xl mx-3 shadow-xl"
  >
    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div class="max-w-screen-md mb-8 lg:mb-16">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
          Why Choose Us
        </h2>
        <p class="text-gray-500 sm:text-xl">
          Founded in 2020, FINGO INVESTMENTS is a multinational company
          specializing in advanced investment solutions. We offer short- and
          long-term plans with positive returns through hedge fund investments,
          including stocks, shares, bonds, property, and forex trading. To add
          more value, we provide two free benefits: financial theft/fraud
          protection and a death benefit. At Fingo, transparency and
          client-first service are our priorities, ensuring you have the
          knowledge and confidence to invest wisely.
        </p>
      </div>
      <div
        class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0"
      >
        <div v-for="(item, index) in items" :key="index">
          <a
            class="group relative block bg-black rounded-xl overflow-hidden shadow-lg transition hover:scale-105"
          >
            <img
              :alt="`Investment feature: ${item.term}`"
              :src="item.image"
              class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div class="relative mb-2 p-4 sm:p-6 lg:p-8">
              <p
                class="text-sm font-medium uppercase tracking-widest text-pink-500"
              >
                Fingo Investments
              </p>

              <p class="text-xl font-bold text-white sm:text-2xl">
                {{ item.term }}
              </p>

              <div class="mt-32 sm:mt-48 lg:mt-64">
                <div
                  class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <p class="text-sm text-white">
                    {{ item.definition }}
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
