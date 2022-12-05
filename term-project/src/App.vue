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
      versionNum: '4.0.0',
      lastUpdateDate: '12/5/2022'
    };
  },
};
</script>

<template>

  <div id="page-top" class="flex-container">
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
