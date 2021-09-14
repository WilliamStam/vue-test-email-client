import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Inbox from '../views/Inbox.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Inbox',
    component: Inbox
  },
  {
    path: '/sent',
    name: 'Sent',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Sent.vue')
  },
  {
    path: '/deleted',
    name: 'Deleted',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Deleted.vue')
  },
  {
    path: '/compose',
    name: 'Compose',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Compose.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
