import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mixins from "./mixins";

createApp(App) //
  .use(router) //
  .mixin(mixins) //공동함수
  .mount("#app");

window.Kakao.init("7195f481608c44c7b473827703ea8b05");
