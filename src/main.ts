import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { queryClient } from "./lib/query-client";
import router from "./router";
import { useThemeStore } from "./stores/theme";
import "./style.css";
import App from "./App.vue";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(VueQueryPlugin, { queryClient });

const themeStore = useThemeStore();
themeStore.initTheme();

app.mount("#app");
