<script>
export default {
  props: {
    lastUpdateDate: String,
    versionNum: String
  }
}

</script>

<template>
  <!-- Footer giving author and version information -->
  <footer class="footer-style">
    <hr />
    <a href="#page-top"
      ><img
        src="https://static.thenounproject.com/png/691751-200.png"
        class="back-to-top-icon"
        alt="Back to Top icon by Noun Project"
      />&nbsp;Back to Top</a
    ><br />
    <p class="text-center">
      Created By: <strong>Timothy Flucker</strong><br />
      Last Updated On: <strong>{{ lastUpdateDate }}</strong><br />
      Version: <strong>{{ versionNum }}</strong>
    </p>
  </footer>
</template>
