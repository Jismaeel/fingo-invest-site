<script setup></script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14 p-4 md:p-8">
    <!-- Map Section -->
    <div class="flex justify-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.8366151777686!2d18.420328299999994!3d-33.9196044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc6766c22ff213%3A0x9969a6dea5618dc4!2s80%20Strand%20St%2C%20Cape%20Town%20City%20Centre%2C%20Cape%20Town%2C%208000!5e0!3m2!1sen!2sza!4v1742392409347!5m2!1sen!2sza"
        width="100%"
        height="300"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="rounded-2xl shadow-lg"
      >
      </iframe>
    </div>

    <!-- Contact Info Section -->
    <div
      class="flex mx-auto flex-col justify-center items-center md:items-start text-center md:text-left space-y-3 p-6"
    >
      <div class="grid grid-cols-1 md:grid-row-4 gap-4">
        <div
          class="text-white p-5 flex rounded-2xl items-center gap-2 justify-center md:justify-start bg-black"
        >
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
              clip-rule="evenodd"
            />
          </svg>
          <a class="hover:underline" href="https://g.co/kgs/PwTympS"
            >80 Strand Street, Cape Town 8000</a
          >
        </div>
        <div
          class="text-white p-5 flex rounded-2xl items-center gap-2 justify-center md:justify-start bg-black"
        >
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"
            />
          </svg>
          <a class="hover:underline" href="tel:+(27)211205753">+(27) 21 120 5753</a>
        </div>
        <div
          class="text-white p-5 flex rounded-2xl items-center gap-2 justify-center md:justify-start bg-black"
        >
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z"
            />
            <path
              d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z"
            />
          </svg>
          <a class="hover:underline" href="">fingo.investment@gmail.com</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
iframe {
  max-width: 100%;
  border: none;
}
</style>
