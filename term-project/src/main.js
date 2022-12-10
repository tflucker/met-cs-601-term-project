import { createApp } from "vue";
import App from "./App.vue";
import "./assets/portfolio.css";
import router from "./router";

// creates new App component and mounts it to the element with an id of 'app'
createApp(App).use(router).mount("#app");
