import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/board',
      name: 'board',
      component: () => ('../views/BoardView.vue')
    },
    {
      path: '/door',
      name: 'door',
      component: () => ('../views/DoorView.vue')
    },
    {
      path: '/floor',
      name: 'floor',
      component: () => ('../views/FloorView.vue')
    },
    {
      path: '/customFumiture',
      name: 'customFumiture',
      component: () => ('../views/CustomFurnitureView.vue')
    }
  ]
})

export default router
