import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

import VueRouter from 'vue-router';
Vue.use(VueRouter)

import Routes from './routers'

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});



new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
