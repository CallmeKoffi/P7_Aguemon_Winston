import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import HomeUs from "../views/HomeUs.vue";



const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    // route level code-splitting
    // this generates a separate chunk (register.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Register,
  },

  {
    path: "/homeuser",
    name: "HomeUs",

    component: HomeUs,
    /* auth : (_to, _from, next) => {
      if (!localStorage.getItem('token')) {
        next({ name: 'Home' });
        return false
      }
  },*/
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

  {
    path: "/allpost",
    name: "Allpost",

    component: () => import("@/views/AllPostPage.vue"),
    
  },

  {
    path: "/postpage/:id",
    name: "PostPage",

    component: () => import("@/views/PostPage.vue"),
    
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
