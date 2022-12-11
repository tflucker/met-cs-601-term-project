<script>
export default {
  data() {
    return {
      retrievedQuote: true,
    };
  },
  methods: {
    async getInspirationalQuote() {
      const API_KEY = "QMIlNvt6Zc79ZSbOgrCRBQ==BJaWG86bga5jbDU5";
      const API_URL = "https://api.api-ninjas.com/v1/quotes";

      return await fetch(API_URL, {
        method: "GET",
        headers: {
          "X-Api-Key": API_KEY,
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': "https://api.api-ninjas.com",
        },
      }).then((response) => {
        if (response.ok) {
          console.log("Success!");
          return response.json();
        } else {
          throw new Error("ERROR: Unable to retrieve inspirational quote!");
        }
      });
    },
  },
  mounted: function () {
    // finds current 'active' navigation element and removes 'active' class
    const activeElements = document.getElementsByClassName("active");
    Array.from(activeElements).forEach((el) => el.classList.remove("active"));
    // add active class to current page
    document.getElementById("homepage").classList.add("active");

    this.getInspirationalQuote()
      .then((json) => {
        this.retrievedQuote = true;
        console.log("Quote: " + JSON.stringify(json, undefined, 2));
        document.getElementById("quote-text").innerHTML = json[0].quote;
        document.getElementById("quote-author").innerHTML = json[0].author;
      })
      .catch((error) => {
        console.log(error.message);
        this.retrievedQuote = false;
      });
  },
};
</script>

<template>
  <main id="main-content" class="body-style">
    <!-- Container for the content on this page. Includes a picture, a video, and some welcome text for the user. -->
    <section id="welcome-container" class="page-jumbotron sea-green">
      <h2 class="section-header-text text-center">Homepage</h2>
      <article class="text-center">
        <h2 class="section-header-text">Welcome to my portfolio site!</h2>
        <div>
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
        <hr class="margin-y-sm" />
        <div id="quote-container" class="margin-y-sm" v-if="retrievedQuote">
          <p>
            Inspirational Quotes are generated from the
            <a href="https://api-ninjas.com/api/quotes" target="_blank"
              >API Ninja 'Quotes API'</a
            >.Only 10 requests are allowed per day.
          </p>
          <p><strong>Quote: </strong><span id="quote-text">Not Shown</span></p>
          <p>
            <strong>Author: </strong><span id="quote-author">Not Shown</span>
          </p>
        </div>
      </article>
      <hr class="margin-y-sm" />
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
