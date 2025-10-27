import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";

import { createToast } from "./composables/useToast";
import { createTickets } from "./composables/useTickets";

const app = createApp(App);

// create and provide toast and tickets instances globally
app.provide("toast", createToast());
app.provide("tickets", createTickets());

app.use(router);
app.mount("#app");
