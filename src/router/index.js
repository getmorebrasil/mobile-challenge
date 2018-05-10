import Vue from 'vue'
import Router from 'vue-router'
import StoreList from '@/components/StoreList'
import Store from '@/components/Store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StoreList',
      component: StoreList
    },
    {
      path: '/store',
      name: 'Store',
      component: Store
    }
  ]
})
