import { createApp } from "vue";
import { createPinia } from "pinia";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { queryClient } from "./lib/query-client";
import "./style.css";
import App from "./App.vue";

createApp(App)
  .use(createPinia())
  .use(VueQueryPlugin, { queryClient })
  .mount("#app");
