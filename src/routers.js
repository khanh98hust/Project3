import login from './components/login.vue';
import home from './components/home.vue';

export const routes = [
  {
    path : '/',
    name : 'homepage',
    component : home
  },
  {
    path : '/login',
    name : 'login',
    component : login
  },

]
