//라우터 정보 모음.
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DataBinding from "../views/DataBinding.vue";
import DataBindingAttr from "../views/DataBindingAttr.vue";
import DataBindingList from "../views/DataBindingList.vue";
import EventClick from "../views/EventClick.vue";
import ShowVue from "../views/ShowVue.vue";

const routes = [
  //라우터정보
  {
    path: "/",
    name: "home",
    component: HomeView, //위에 import된 것!
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/data",
    name: "data",
    component: DataBinding,
  },
  {
    path: "/dataAttr",
    name: "dataAttr",
    component: DataBindingAttr,
  },
  {
    path: "/dataList",
    name: "dataList",
    component: DataBindingList,
  },
  {
    path: "/eventClick",
    name: "eventClick",
    component: EventClick,
  },
  {
    path: "/showVue",
    name: "showVue",
    component: ShowVue,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
