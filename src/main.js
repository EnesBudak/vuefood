import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import store from './store/index'


Vue.use(VueRouter)

/* eslint-disable no-new */
export const EventBus = new Vue();

Vue.config.productionTip = false

const router = new VueRouter({
  routes,

  mode:'history'
})


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')


 