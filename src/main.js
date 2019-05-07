import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Router from 'vue-router'
import AuthHandler from './components/AuthHandler'
import ImageGallery from './components/ImageGallery'

Vue.config.productionTip = false
Vue.use(Router)

const routes = [
  { path: '/', component: ImageGallery},
  { path: '/oauth2/callback', component: AuthHandler},
];

export const router = new Router({
  routes,
  mode: 'history',
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
