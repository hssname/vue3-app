
import { createRouter, createWebHashHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'
const _import = (path) => defineAsyncComponent(() => import(`../views/${path}.vue`));

export const constantRoutes = [
  {
    path: '/',
    redirect: '/login',
  }, 
  {
    path: '/login',
    name: 'login',
    component: _import('login/login'), // () => import('@/views/login/login.vue')
    meta: { title: '登录' }
  }
]
const router = createRouter({
    routes:constantRoutes,
    history: createWebHashHistory()
  })

router.beforeEach((to, from, next) => {
if (to.meta.title) {
  document.title = `${to.meta.title}-TBDS`;
}
next();
});

  export default router