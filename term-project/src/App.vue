<script>
import Homepage from "./components/HomePage.vue";
import AboutMe from "./components/AboutMe.vue";
import MyResume from "./components/MyResume.vue";
import ClickerGame from "./components/ClickerGame.vue";
import ContactForm from "./components/ContactForm.vue";
import NotFound from "./components/NotFound.vue";
import HeaderSection from "./components/HeaderSection.vue";
import FooterSection from "./components/FooterSection.vue";

// defines routes for loading different view components
const routes = {
  "/": Homepage,
  "/about": AboutMe,
  "/resume": MyResume,
  "/skill-showcase": ClickerGame,
  "/contactForm": ContactForm
};

// declare other components used in template, any data used on page, and any events
export default {
  components: {
    Homepage, AboutMe, MyResume, ClickerGame, ContactForm, HeaderSection, FooterSection
  },
  data() {
    return {
      currentPath: window.location.hash,
      versionNum: '3.1.0', 
      lastUpdateDate: '11/24/2022'
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
