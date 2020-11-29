import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes/routes'
import LoadScript from 'vue-plugin-load-script';
 
Vue.use(LoadScript);
Vue.use(VueRouter)
Vue.config.productionTip = false

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  mode: "history",
  linkActiveClass: 'nav-item active'
})

// event Bus
Vue.prototype.$vueEventBus = new Vue()

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
