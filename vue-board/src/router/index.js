import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import PostDetail from "../pages/PostDetail.vue";
import PostWrite from "../components/PostForm.vue"; // PostForm.vue를 페이지로 사용

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/post/:id", name: "PostDetail", component: PostDetail, props: true },
  { path: "/post/write", name: "PostWrite", component: PostWrite },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
