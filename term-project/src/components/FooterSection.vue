<script>
export default {
  props: {
    lastUpdateDate: String,
    versionNum: String,
  },
};
</script>

<template>
  <!-- Footer giving author and version information -->
  <footer class="footer-style">
    <a href="#page-top" class="margin-y-sm"
      ><img
        src="https://static.thenounproject.com/png/691751-200.png"
        class="back-to-top-icon"
        alt="Back to Top icon by Noun Project"
      />&nbsp;Back to Top</a
    >
    <div class="text-center">
      <p>Created By: <strong>Timothy Flucker</strong></p>
      <p>
        Last Updated On: <strong>{{ lastUpdateDate }}</strong>
      </p>
      <p>
        Version: <strong>{{ versionNum }}</strong>
      </p>
    </div>
  </footer>
</template>
