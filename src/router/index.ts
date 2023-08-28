export const Route = [
  {
    path: '/',
    component: () => import('@/layout/header.vue'),
    name: 'layout',
    redirect: '/home',
  },
]
