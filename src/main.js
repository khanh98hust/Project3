import Vue from 'vue'
import App from './App.vue'
import Vuerouter from 'vue-router';
import {routes} from './routers';
import {store} from './store/store';

Vue.use(Vuerouter)
const router = new Vuerouter({
  mode : 'history',
  routes
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

