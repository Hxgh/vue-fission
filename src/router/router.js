import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "首页"
      }
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue"),
      meta: {
        title: "关于"
      }
    },
    {
      path: "/html",
      name: "前端基础",
      component: () => import("./views/html/layout.vue"),
      meta: {
        title: "前端基础"
      }
    }
  ]
});
