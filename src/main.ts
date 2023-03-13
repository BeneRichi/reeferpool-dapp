import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import Fortawesome from './plugins/fortawesome/icons'

import "./setup/main.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Fortawesome)

app.mount("#app");
