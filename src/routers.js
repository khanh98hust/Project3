import login from './components/login.vue';
import slider from './components/Slider.vue';
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
  {
    path : '/slider',
    name : 'slider',
    component : slider,
    beforeEnter: (to, from, next) => {
      if(localStorage.user){
        next();
      }else{
        next('/login')
      }
    }
  }
]
