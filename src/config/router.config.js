import { RouteView } from '@/components/layouts'
import Home from '../views/daily/Home.vue'

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
        component: Home,
        meta: {
          title: '工作汇报'
        }
      },
      {
        path: 'addReport',
        name: 'addReport',
        meta: {
          title: '工作汇报'
        },
        component: () => import(/* webpackChunkName: "about" */ '@views/daily/modules/AddReport.vue')
      },
      {
        path: 'addWorkItem',
        name: 'addWorkItem',
        meta: {
          title: '新增工作项'
        },
        component: () => import(/* webpackChunkName: "about" */ '@views/daily/modules/AddWorkItem.vue')
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