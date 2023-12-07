import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";
import RequestATutorView from "../views/RequestATutorView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomeView,
    },

    {
      path: "/about",
      component: AboutView,
    },

    {

      path: "/contact",
      component: ContactView,
    },

    {

      path: "/request-a-tutor",
      component: RequestATutorView,
    }
  ],
});

export default router;
