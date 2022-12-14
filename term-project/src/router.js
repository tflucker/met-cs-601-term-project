import { createWebHistory, createRouter } from "vue-router";

// defines page routing information and which component to load for each route
const routes = [
  {
    path: "/",
    name: "homepage",
    component: () => import("./components/HomePage.vue"),
  },
  {
    path: "/aboutMe",
    name: "aboutMe",
    component: () => import("./components/AboutMe.vue"),
  },
  {
    path: "/resume",
    name: "resume",
    component: () => import("./components/MyResume.vue"),
  },
  {
    path: "/skill-showcase",
    name: "skillShowcase",
    component: () => import("./components/ClickerGame.vue"),
  },
  {
    path: "/contactForm",
    alias: "/contactForm",
    name: "contactForm",
    component: () => import("./components/ContactForm.vue"),
  },
  {
    // default router, handles 404 errors
    path: "/:pathMatch(.*)*",
    component: () => import("./components/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
