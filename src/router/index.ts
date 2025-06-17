import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/student',
      name: 'addStudent',
      component: () => import('../views/AddStudentView.vue'),
    },
    {
      path: '/pendaftar',
      name: 'pendaftar',
      component: () => import('../views/PendaftarListView.vue'),
    },
     {
      path: '/pendaftar',
      name: 'pendaftarList',
      component: () => import('../views/PendaftarListView.vue'),
    },
     {
      path: '/student/:id',
      name: 'editStudent',
      component: () => import('../views/EditStudentView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
