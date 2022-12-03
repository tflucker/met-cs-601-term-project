<script>
import HeaderSection from "./components/HeaderSection.vue";
import FooterSection from "./components/FooterSection.vue";

export default {
  name: "app",
  components: {
    HeaderSection, FooterSection
  },
  data() {
    return {
      currentPath: window.location.hash,
      versionNum: '3.1.0', 
      lastUpdateDate: '11/24/2022'
    };
  },
};
</script>

<template>

  <!-- Loads HeaderSection component -->
  <header-section />

  <!-- Loads Vue components into this component tag -->
  <!-- <component :is="currentView" /> -->
  <router-view />

  <!-- Loads FooterSection component, with data -->
  <footer-section :versionNum="versionNum" :lastUpdateDate="lastUpdateDate" />
</template>
