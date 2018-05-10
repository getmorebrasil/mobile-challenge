// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueResource)

/* Prevents Vue.js from complaining about Ionic elements */
Vue.config.ignoredElements = ['ion-app', 'ion-page', 'ion-item', 'ion-label',
  'ion-header', 'ion-toolbar', 'ion-title', 'ion-content', 'ion-list', 'ion-footer', 'ion-button']

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
