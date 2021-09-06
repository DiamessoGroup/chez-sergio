import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "HomePage" */ "@/views/HomePage.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "AboutPage" */ "@/views/AboutPage.vue"),
  },
  {
    path: "/menu",
    name: "Menu",
    component: () => import(/* webpackChunkName: "MenuPage" */ "@/views/MenuPage"),
  },
  {
    path: "/products/:id",
    name: "ProductDetail",
    component: () => import(/* webpackChunkName: "ProductDetailPage" */ "@/views/ProductDetailPage"),
  },
  {
    path: "/*",
    redirect: { name: "Home" },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
