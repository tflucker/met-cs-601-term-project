<script>
  export default {
    data(){
      return {};
    }
  }
</script>

<template>
  <main id="main-content" class="body-style">
    <!-- Container for the content on this page. Includes a picture, a video, and some welcome text for the user. -->
    <section id="welcome-container" class="page-jumbotron sea-green">
      <h2 class="section-header-text text-center">Homepage</h2>
      <article class="text-center">
        <h2 class="section-header-text">Welcome to my portfolio site!</h2>
        <div class="flex-center">
          <img
            src="./../assets/media/Nice-Profile-Pic.jpg"
            alt="Picture of Timothy Flucker"
            class="nice-profile-pic standard-dimensions"
            srcset="./../assets/media/Nice-Profile-Pic.jpg"
          />
          <p>
            This is website serves as a portfolio for me, Timothy Flucker. It
            contains a written version of my resume and links to my professional
            websites. Additionally, it contains some personal information about
            me so that you can get to know me better. I am very excited that you
            decided to visit this website and learn more about me. Please feel
            free to report any bugs to my
            <a href="mailto:tflucker@bu.edu">email</a>.
          </p>
        </div>
      </article>
      <br />
      <article class="text-center">
        <h2 class="section-header-text">Welcome Video</h2>
        <video id="welcome-video" controls>
          <source
            src="./../assets/media/MET-CS-601-Welcome.mp4"
            type="video/mp4"
          />
          If you see this, then your browser does not support the video tag.
        </video>
      </article>
    </section>
  </main>
</template>
