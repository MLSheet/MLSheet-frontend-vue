import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: "/", component: () => import("./pages/LandingPage.vue")},
    {path: "/demo", component: () => import("./components/SpreadSheet.vue")}
  ],
});

export default router;
