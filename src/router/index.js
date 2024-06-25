import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/details/:id',
      name: 'Details',
      component: () => import('../components/DetailsPage.vue'),
      props: true
    },
    {
      path: '/:catchAll(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFound.vue'),
      meta: {
        tittle: 'NotFound',
        description: 'This is the 404 page'
      }
    },
  ]
})

export default router
