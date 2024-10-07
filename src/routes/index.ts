import { createRouter, createWebHashHistory } from 'vue-router';
import About from "../pages/About.vue";
import Projects from "../pages/Projects.vue";
import Faq from "../pages/Faq.vue";
import Contact from "../pages/Contact.vue";
import Copycats from "../pages/Copycats.vue";

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
  {
    path: '/faq',
    name: 'FAQ',
    component: Faq,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/copycats',
    name: 'Copycats',
    component: Copycats,
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;