<script setup></script>
<template>
  <header
    v-motion
    :initial="{
      opacity: 0,
      y: 100,
    }"
    :enter="{
      opacity: 1,
      y: 0,
    }"
  >
    <!-- Hero Container -->
    <div class="mx-auto w-full max-w-7xl px-5 py-10 md:px-8 md:py-8">
      <!-- Component -->
      <div
        class="grid items-center justify-items-start gap-8 sm:gap-16 md:grid-cols-2"
      >
        <!-- Hero Content -->
        <div class="flex flex-col">
          <!--    Hero Divider -->
          <div class="mb-4 flex items-center">
            <div class="mr-4 w-10 border-t border-black"></div>
            <p class="text-sm font-medium sm:text-base">
              investing in your future
            </p>
          </div>
          <!-- Hero Title -->
          <h1 class="mb-4 text-4xl font-bold md:text-6xl md:leading-tight">
            Making investing easy for everyone
          </h1>
          <p
            class="mb-6 max-w-lg text-sm text-gray-500 sm:text-xl md:mb-10 lg:mb-12"
          >
            We offer the best deals on monthly premiums with low risk and
            positive returns, helping you save, invest, or access business
            funding—hassle-free.
          </p>
          <!-- Form -->
          <form
            name="email-form"
            method="get"
            class="flex items-center relative mb-5 w-full md:mb-8 lg:mb-10 max-w-md rounded-md border border-solid border-black px-1 focus-within:outline-2"
          >
            <input
              type="email"
              class="flex-1 h-9 w-full px-3 py-6 text-sm text-black placeholder:text-black focus:outline-none"
              placeholder="Enter your email"
              required=""
            />
            <input
              type="submit"
              value="Subscribe"
              class="relative w-auto cursor-pointer rounded-md bg-black px-6 py-2 text-center font-semibold text-white"
            />
          </form>
          <!-- Hero Info -->
          <div class="flex justify-between sm:justify-start sm:gap-8 lg:gap-12">
            <div class="flex items-center">
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9481ece6cf9c_Vector%20(9).svg"
                alt=""
                class="mr-1 inline-block sm:mr-2"
              />
              <p class="text-sm">Customers</p>
            </div>
            <div class="flex items-center">
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9481ece6cf9c_Vector%20(9).svg"
                alt=""
                class="mr-1 inline-block sm:mr-2"
              />
              <p class="text-sm">24/7 Support</p>
            </div>
            <div class="flex items-center">
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9481ece6cf9c_Vector%20(9).svg"
                alt=""
                class="mr-1 inline-block sm:mr-2"
              />
              <p class="text-sm">Cloud-based</p>
            </div>
          </div>
        </div>
        <!-- Hero Image -->
        <img
          src="../assets/img/investment.png"
          alt=""
          class="inline-block h-full w-full max-w-2xl rounded-lg"
        />
      </div>
    </div>
  </header>
</template>
