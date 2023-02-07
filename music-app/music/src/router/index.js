import { createRouter, createWebHistory } from "vue-router";

//view components
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Manage from "@/views/Manage.vue";
import useUserStore from "@/stores/user";

//these are called route records
const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
  },
  {
    name: "about",
    path: "/about",
    component: About,
  },
  {
    name: "manage",
    //alias: "/manage",
    path: "/manage-music",
    component: Manage,
    beforeEach: (to, from, next) => {
      console.log("Manage Route Guard");
      next();
    },
    meta: {
      requiresAuth: true,
    },
  },
  {
    // great way to redirect user w/o displaying 404 page
    path: "/manage",
    redirect: { name: "manage" },
  },
  {
    //is checked last. If not found, will use this one
    path: "/:catchAll(.*)*",
    redirect: { name: "home" },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: "text-yellow-500",
});

router.beforeEach((to, from, next) => {
  //console.log(to.meta);

  if (!to.meta.requiresAuth) {
    next();
    return;
  } else {
    const store = useUserStore();

    if (store.userLoggedIn) {
      next();
    } else {
      next({ name: "home" });
    }
  }
});

export default router;
