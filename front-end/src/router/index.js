import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

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
    auth : (_to, _from, next) => {
      if (!localStorage.getItem('token')) {
        next({ name: 'Home' });
        return false
      }
  },
  },
  {
    path: "/useraccountpage",
    name: "UserAccountPage",

    component: () => import("@/views/UserAccountPage.vue"),
    auth : (_to, _from, next) => {
      if (!localStorage.getItem('token')) {
        next({ name: 'Home' });
        return false
      }
  },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
