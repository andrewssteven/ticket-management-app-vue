import { createRouter, createWebHistory } from "vue-router";
import Landing from "../pages/Landing.vue";
import Login from "../pages/auth/Login.vue";
import Signup from "../pages/auth/Signup.vue";
import Dashboard from "../pages/Dashboard.vue";
import Tickets from "../pages/Tickets.vue";
import { isAuthenticated } from "../utils/auth";

const routes = [
  { path: "/", component: Landing },
  { path: "/auth/login", component: Login },
  { path: "/auth/signup", component: Signup },
  {
    path: "/dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: "/tickets",
    component: Tickets,
    meta: { requiresAuth: true },
  },
  { path: "/:catchAll(.*)", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.meta?.requiresAuth;
  if (requiresAuth && !isAuthenticated()) {
    next({ path: "/auth/login", query: { from: to.fullPath } });
  } else {
    next();
  }
});

export default router;
