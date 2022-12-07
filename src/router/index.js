import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@components/Layout/index.vue'),
    children: [
      {
        path: '',
        redirect: (to) => 'home',
      },
      {
        name: 'home',
        path: '/home',
        component: () => import('@pages/Home/index.vue'),
      },
      {
        path: '/about',
        component: () => import('@pages/About/index.vue'),
      },
      {
        path: '/counter',
        component: () => import('@pages/Counter/index.vue'),
      },
      {
        path: '/:pathMatch(.*)*',
        component: () => import('@pages/NotFound/index.vue'),
      },
    ],
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(''),
});

export default router;
