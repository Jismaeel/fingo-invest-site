<script setup>
import Logo from '../assets/img/logo.jpg'
</script>
<template>
  <section>
    <!-- Container -->
    <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
      <!-- Title -->
      <h2 class="mb-8 text-3xl font-bold md:text-5xl md:mb-10">About Us</h2>
      <p class="mb-8 max-w-lg text-sm text-gray-500 sm:text-base md:mb-16">
        Meet Fingo Investments, a financial services company dedicated to
        empowering your financial future.
      </p>
      <div class="grid gap-8 md:grid-cols-2 md:gap-10">
        <img
          :src=Logo
          alt="Fingo Investments Team"
          class="inline-block h-full w-full rounded-2xl object-cover" />
        <div
          class="flex flex-col gap-5 rounded-2xl border border-solid border-black p-10 sm:p-12">
          <h2 class="text-3xl font-bold md:text-5xl">Our Mission</h2>
          <p class="text-sm text-gray-500 sm:text-base">
            Founded in 2020, FINGO INVESTMENTS is a multinational leader in
            innovative investment solutions. We specialize in diversified
            portfolios — from stocks and bonds to property and foreign exchange
            — designed to maximize returns.
            <br /><br />
            We prioritize transparency, security, and empowering our clients
            with financial literacy. Plus, our unique benefits like fraud
            protection and death coverage ensure you get more value from every
            investment.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Timeline Section -->
  <section>
    <div class="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
      <div class="flex flex-col items-center">
        <div class="relative">
          <div
            class="absolute w-1 md:w-2 bg-black h-full left-1/2 transform -translate-x-1/2"></div>

          <!-- Timeline Entry: Company Launch -->
          <div class="mb-20 mt-20 flex items-center w-full">
            <div class="w-1/2 text-right pr-5 md:pr-12">
              <h5 class="text-lg md:text-2xl font-semibold">September 2020</h5>
            </div>
            <div class="w-4 h-4 md:w-5 md:h-5 rounded-full bg-black"></div>
            <div class="w-1/2 pl-5 md:pl-12">
              <h6 class="text-md md:text-xl font-semibold mb-3">
                Fingo Investments Founded
              </h6>
              <p class="text-gray-500">
                Our journey began with a mission to revolutionize investment
                strategies worldwide.
              </p>
            </div>
          </div>

          <!-- Timeline Entry: Expansion Milestone -->
          <div class="mb-20 mt-20 flex items-center w-full">
            <div class="w-1/2 text-right pr-5 md:pr-12">
              <h5 class="text-lg md:text-2xl font-semibold">June 2023</h5>
            </div>
            <div class="w-4 h-4 md:w-5 md:h-5 rounded-full bg-black"></div>
            <div class="w-1/2 pl-5 md:pl-12">
              <h6 class="text-md md:text-xl font-semibold mb-3">
                Team Grows to 50+ Employees
              </h6>
              <p class="text-gray-500">
                We expanded globally, bringing in top talent to drive our
                innovative strategies.
              </p>
            </div>
          </div>

          <!-- Timeline Entry: Technology Leap -->
          <div class="mb-20 mt-20 flex items-center w-full">
            <div class="w-1/2 text-right pr-5 md:pr-12">
              <h5 class="text-lg md:text-2xl font-semibold">January 2024</h5>
            </div>
            <div class="w-4 h-4 md:w-5 md:h-5 rounded-full bg-black"></div>
            <div class="w-1/2 pl-5 md:pl-12">
              <h6 class="text-md md:text-xl font-semibold mb-3">
                Launched AI-Powered Investment Platform
              </h6>
              <p class="text-gray-500">
                We integrated cutting-edge technology to enhance portfolio
                performance and analytics.
              </p>
            </div>
          </div>

          <!-- Timeline Entry: Future Vision -->
          <div class="mb-20 mt-20 flex items-center w-full">
            <div class="w-1/2 text-right pr-5 md:pr-12">
              <h5 class="text-lg md:text-2xl font-semibold">2025 & Beyond</h5>
            </div>
            <div class="w-4 h-4 md:w-5 md:h-5 rounded-full bg-black"></div>
            <div class="w-1/2 pl-5 md:pl-12">
              <h6 class="text-md md:text-xl font-semibold mb-3">
                Expanding Horizons
              </h6>
              <p class="text-gray-500">
                Our next chapter involves global partnerships, sustainable
                investments, and financial empowerment for all.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
