// router插件进行路由配置
import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    component: () => import('@/views/home.vue'),
    name: 'layout',
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
