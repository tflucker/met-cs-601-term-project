import { createApp } from "vue";

import App from "./App.vue";
import Header from "./components/HeaderSection.vue";
import Footer from "./components/FooterSection.vue";

// import "./assets/main.css";
import "./assets/portfolio.css";

// mounting Header component to a header tag
createApp(Header).mount("#header-container");

createApp(App).mount("#app");

createApp(Footer).mount("#footer-container");
