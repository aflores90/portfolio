import { createRouter, createWebHistory } from 'vue-router';
import About from "../pages/About.vue";
import Projects from "../pages/Projects.vue";

const routes = [
  {
    path: '/',
    name: 'About',
    component: About,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;