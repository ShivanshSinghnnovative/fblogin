import { createWebHashHistory, createRouter } from 'vue-router';

const login = () => import('./pages/signIn.vue') ;
const homePage = () => import('./components/navBar.vue');

const routes = [
  {
    name: 'login',
    path: '/',
    component: login,
    meta: { requiresAuth: false } 
  },
  {
    name: 'homePage',
    path: '/home',
    component: homePage,
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
    const userEmail = localStorage.getItem('userEmail');
  
    if (to.meta.requiresAuth) {
     if (userEmail) {
        next();
      } else {
      next('/');
      }
    } else {
     if (userEmail && to.name === 'login') {
       next('/home');
      } else {
        next();
      }
    }
  });
 
export default router;
