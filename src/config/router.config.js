import { RouteView } from '@/components/layouts'
import Home from '../views/Home.vue'

export const constantRouterMap = [
  {
    path: '/',
    name: 'Home',
    component: RouteView,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: Home
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]