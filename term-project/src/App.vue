<script>
import Homepage from "./pages/Homepage.vue";
import AboutMe from "./pages/AboutMe.vue";
import MyResume from "./pages/MyResume.vue";
import NotFound from "./pages/NotFound.vue";

// defines routes for loading different view components
const routes = {
  "/": Homepage,
  "/about": AboutMe,
  "/resume": MyResume,
};

export default {
  data() {
    return {
      currentPath: window.location.hash,
    };
  },
  computed: {
    console: () => console,
    currentView() {
      window.console.log("Current Path: " + this.currentPath);
      return routes[this.currentPath.slice(1) || "/"] || NotFound;
    },
  },
  mounted() {
    window.addEventListener("hashchange", () => {
      this.currentPath = window.location.hash;
      window.console.log("New Path: " + this.currentPath);
    });
  },
};
</script>

<template>
  <!-- Loads Vue components into this component tag -->
  <component :is="currentView" />
</template>
