<script>
export default {
  data() {
    return {};
  },
  mounted: function () {
    // finds current 'active' navigation element and removes 'active' class
    const activeElements = document.getElementsByClassName("active");
    Array.from(activeElements).forEach((el) => el.classList.remove("active"));
    // add active class to current page
    document.getElementById("badLink").classList.add("active");
  },
};
</script>
<template>
  <main id="main-content" class="body-style">
    <section class="page-jumbotron sea-green text-center">
      <h2>Page Not Found</h2>
      <img
        id="panda-error-img"
        class="margin-y-sm"
        src="https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-404.png"
        srcset="
          https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-404.png
        "
        alt="404 error with panda at computer."
      />

      <p class="margin-y-sm">
        No Vue file is defined for this link. It's intentional, and it shows that
        this application can handle an invalid URL gracefully!
      </p>
    </section>
  </main>
</template>
