import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/directive",
    name: "Directive",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Directive.vue"),
  },
  {
    path: "/list",
    name: "List",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/List.vue"),
  },
  {
    path: "/form",
    name: "Form",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Form.vue"),
  },
  {
    path: "/components",
    name: "Components",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Components.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
