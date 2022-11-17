<script>
import Homepage from "./pages/Homepage.vue";
import AboutMe from "./pages/AboutMe.vue";
import MyResume from "./pages/MyResume.vue";
import SkillShowcase from "./pages/SkillShowcase.vue";
import NotFound from "./pages/NotFound.vue";
import HeaderSection from "./components/HeaderSection.vue";
import FooterSection from "./components/FooterSection.vue";

// defines routes for loading different view components
const routes = {
  "/": Homepage,
  "/about": AboutMe,
  "/resume": MyResume,
  "/skill-showcase": SkillShowcase
};

export default {
  components: {
    HeaderSection, FooterSection
  },
  data() {
    return {
      currentPath: window.location.hash,
      versionNum: '3.0.1', 
      lastUpdateDate: '11/17/2022'
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

  <header-section />
  <!-- Loads Vue components into this component tag -->
  <component :is="currentView" />

  <footer-section :versionNum="versionNum" :lastUpdateDate="lastUpdateDate" />
</template>
