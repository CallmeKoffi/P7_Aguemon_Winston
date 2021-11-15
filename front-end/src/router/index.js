import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import auth from "../middleware/auth";
import VueRouteMiddleware from "vue-route-middleware";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Register",
    name: "Register",
    // route level code-splitting
    // this generates a separate chunk (register.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("@/views/Register.vue"),
  },

  {
    path: "/Homeuser",
    name: "HomeUs",

    component: () => import("@/views/HomeUs.vue"),
    beforeEnter: {
      
    },
  },
  {
    path: "/useraccountpage",
    name: "UserAccountPage",

    component: () => import("@/views/UserAccountPage.vue"),
    meta: {
      middleware: auth,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
