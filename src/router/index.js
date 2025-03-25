import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import Services from '../views/ServicesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/About",
      name: "About",
      component: AboutView,
    },
    {
      path: "/Services",
      name: "Services",
      component: Services,
    },
  ],
});

export default router;
