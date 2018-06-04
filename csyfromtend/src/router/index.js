import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Msite from '../views/Msite/Msite'
import Order from '../views/Order/Order'
import Prefile from '../views/Profile/Profile'
import Search from '../views/Sarch/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/msite',
      name: 'Msite',
      component: Msite
    },
    {
      path: '/prefile',
      name: 'Prefile',
      component: Prefile
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/',
      redirect: '/msite'
    }
  ]
})
