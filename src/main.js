import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Router from 'vue-router'
import AuthHandler from './components/AuthHandler'
import ImageGallery from './components/ImageGallery'
import Upload from './components/Upload'
import EditImage from './components/EditImage'

import './styles/quasar.styl'
import 'quasar-extras/animate'
import 'quasar-extras/roboto-font'
import 'quasar-extras/material-icons'
import Quasar from 'quasar'


Vue.config.productionTip = false;
Vue.use(Router)
Vue.use(Quasar)

const routes = [
  { path: '/', component: ImageGallery },
  { path: '/oauth2/callback', component: AuthHandler },
  { path: '/upload', component: Upload },
  { path: '/image/:id', component: EditImage, props: true },
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
