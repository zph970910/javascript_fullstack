import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import header from '@/components/header/header.vue'
import goods from '@/components/goods/goods'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Goods',
      component: goods
    },
    {
      path: '/goods',
      name: 'Goods',
      component: goods
    }
  ]
})
