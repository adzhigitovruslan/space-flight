import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Page from '@/layouts/DashboardLayout.vue'
import firebase from 'firebase/compat/app'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@/components/Login.vue'),
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('@/components/Register.vue'),
      },
    ],
  },
  {
    path: '/vue/',
    name: 'vue',
    meta: { auth: true },
    component: Page,
    children: [
      {
        path: 'space-profile',
        name: 'profile',
        meta: { auth: true },
        component: () => import('@/views/SpaceProfile.vue'),
      },
      {
        path: 'space-flight',
        name: 'space',
        meta: { auth: true },
        component: () => import('@/views/SpaceFlight.vue'),
      },
      {
        path: 'todo-list',
        name: 'todo',
        meta: { auth: true },
        component: () => import('@/views/TodoList.vue'),
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requireAuth = to.matched.some((vue) => vue.meta.auth)

  if (requireAuth && !currentUser) {
    next('/login')
  } else {
    next()
  }
})

export default router
