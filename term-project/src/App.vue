<script>
import Homepage from "./pages/Homepage.vue";
import AboutMe from "./pages/AboutMe.vue";
import MyResume from "./pages/MyResume.vue";
import SkillShowcase from "./pages/SkillShowcase.vue";
import ContactForm from "./pages/ContactForm.vue";
import NotFound from "./pages/NotFound.vue";
import HeaderSection from "./components/HeaderSection.vue";
import FooterSection from "./components/FooterSection.vue";

// defines routes for loading different view components
const routes = {
  "/": Homepage,
  "/about": AboutMe,
  "/resume": MyResume,
  "/skill-showcase": SkillShowcase,
  "/contactForm": ContactForm
};

// declare other components used in template, any data used on page, and any events
export default {
  components: {
    Homepage, AboutMe, MyResume, SkillShowcase, ContactForm, HeaderSection, FooterSection
  },
  data() {
    return {
      currentPath: window.location.hash,
      versionNum: '3.0.1', 
      lastUpdateDate: '11/17/2022'
    };
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || "/"] || NotFound;
    },
  },
  mounted() {
    window.addEventListener("hashchange", () => {
      this.currentPath = window.location.hash;
    });
  },
};
</script>

<template>

  <!-- Loads HeaderSection component -->
  <header-section />

  <!-- Loads Vue components into this component tag -->
  <component :is="currentView" />

  <!-- Loads FooterSection component, with data -->
  <footer-section :versionNum="versionNum" :lastUpdateDate="lastUpdateDate" />
</template>
