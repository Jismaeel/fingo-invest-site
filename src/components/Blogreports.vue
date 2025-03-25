<script setup>
import { ref, onMounted } from "vue";

const feedUrl = "https://finance.yahoo.com/news/rssindex";
const articles = ref([]);
const isLoading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(feedUrl)}`
    );
    const data = await response.json();

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data.contents, "text/xml");
    const items = xmlDoc.querySelectorAll("item");

    articles.value = Array.from(items).map((item) => ({
      title: item.querySelector("title")?.textContent || "No Title",
      link: item.querySelector("link")?.textContent || "#",
      pubDate: item.querySelector("pubDate")?.textContent
        ? new Date(
            item.querySelector("pubDate").textContent
          ).toLocaleDateString()
        : "Unknown Date",
      description:
        (item.querySelector("description")?.textContent || "")
          .replace(/<[^>]+>/g, "") // Remove HTML tags
          .trim()
          .substring(0, 100) + "...",
    }));

    if (articles.value.length === 0) throw new Error("No news available.");
  } catch (err) {
    error.value = "Failed to load news. Please try again later.";
    console.error("Fetch Error:", err);
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <section>
    <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
      <h2 class="text-3xl font-bold md:text-5xl">Latest Investment News</h2>
      <p class="mb-8 mt-4 text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
        Stay updated with the latest investment news from Yahoo Finance.
      </p>

      <!-- Skeleton Loader -->
      <div v-if="isLoading" class="grid gap-4 md:grid-cols-2 lg:gap-8">
        <div
          v-for="n in 4"
          :key="n"
          class="animate-pulse bg-gray-200 p-6 rounded-md h-32"></div>
      </div>

      <!-- Error Message -->
      <div v-if="error" class="text-center text-red-500">⚠️ {{ error }}</div>

      <!-- News Articles -->
      <div
        v-else
        class="mb-8 grid gap-4 md:mb-12 md:grid-cols-2 lg:mb-16 lg:gap-8">
        <a
          v-for="article in articles.slice(0, 4)"
          :key="article.link"
          :href="article.link"
          target="_blank"
          class="flex items-center gap-4 rounded-md p-4 bg-gray-50 hover:bg-gray-100 transition">
          <div class="flex flex-col items-start py-4">
            <div class="mb-4 rounded-md bg-gray-100 px-2 py-1.5">
              <p class="text-sm font-semibold text-blue-600">Investment News</p>
            </div>
            <p class="mb-2 text-xl font-bold">{{ article.title }}</p>
            <p class="text-sm text-gray-500">{{ article.pubDate }}</p>
            <p class="text-sm text-gray-600">{{ article.description }}</p>
          </div>
        </a>
      </div>

      <!-- View More Button -->
      <a
        href="https://finance.yahoo.com/"
        target="_blank"
        class="mx-auto flex w-32 rounded-md px-6 py-3 text-center font-semibold text-black hover:underline">
        View More
      </a>
    </div>
  </section>
</template>
