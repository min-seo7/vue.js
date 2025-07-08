import { createApp } from "vue";
import App from "./App.vue"; //app.vue에는 html/스타일/js 가 있음.
import router from "./router";

createApp(App).use(router).mount("#app"); //index.html에 #app정의되어 있음.
