import "@/styles/_global.css";
import "@/styles/desktop.css";
import "@/styles/mobile.css";
import "@/styles/tablet.css";
import App from "@/App.vue";
import router from "@/router";
import { createApp } from "vue";
import { createPinia } from "pinia";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
