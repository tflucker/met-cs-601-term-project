<script>
import HeaderSection from "./components/HeaderSection.vue";
import FooterSection from "./components/FooterSection.vue";

export default {
  name: "app",
  components: {
    HeaderSection,
    FooterSection,
  },
  data() {
    return {
      currentPath: window.location.hash,
      versionNum: "4.0.1",
      lastUpdateDate: "12/11/2022",
    };
  },
};
</script>

<template>
  <!-- The 'flex-container class allows for the implementation of CSS Flexbox'-->
  <div id="page-top" class="flex-container extra-min-height">
    <!-- Loads HeaderSection component -->
    <header-section />

    <!-- Loads Vue components into this component tag -->
    <router-view />
  </div>
  <div class="flex-container">
    <!-- Loads FooterSection component, with data -->
    <footer-section :versionNum="versionNum" :lastUpdateDate="lastUpdateDate" />
  </div>
</template>
