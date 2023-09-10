// router插件进行路由配置
import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    component: () => import('@/views/library.vue'),
    name: 'layout',
  },
  {
    path: '/library',
    component: () => import('@/views/library.vue'),
    name: 'library',
  },
  {
    path: '/explore',
    component: () => import('@/views/explore.vue'),
    name: 'explore',
  },
  {
    path: '/home',
    component: () => import('@/views/home.vue'),
    name: 'home',
  },
  {
    path: '/login',
    component: () => import('@/views/login.vue'),
    name: 'login',
  },
  // 任意路由
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/404.vue'),
    name: 'any',
  },
]

const Router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
  //滚动行为(页面切换时回指顶端)
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    }
  },
})

export default Router
