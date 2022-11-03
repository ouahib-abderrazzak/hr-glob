import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import SignIn from './pages/SignIn.vue';
import SignUp from './pages/SignUp.vue';
import ResetPassword from './pages/ResetPassword.vue';
import ContactUs from './pages/ContactUs.vue';
import About from './pages/About.vue';
import Services from './pages/Services.vue';

const routerHistory = createWebHistory();

const router = createRouter({
  scrollBehavior(to) {
    if (to.hash) {
      window.scroll({ top: 0 });
    } else {
      document.querySelector('html').style.scrollBehavior = 'auto';
      window.scroll({ top: 0 });
      document.querySelector('html').style.scrollBehavior = '';
    }
  },
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/signin',
      component: SignIn,
    },
    {
      path: '/signup',
      component: SignUp,
    },
    {
      path: '/reset-password',
      component: ResetPassword,
    },
    {
      path: '/contact-us',
      component: ContactUs,
    },
    {
      path: '/about',
      component: About,
    },
    {
      path: '/services',
      component: Services,
    },
  ],
});

export default router;
