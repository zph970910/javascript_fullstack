import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Mine from '@/components/Mine'
import Detail from '@/components/Detail'
import Mine2 from '@/components/Mine2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/Mine',
      name:'Mine',
      component:Mine,
      children:[
        {
          path:'Mine2',
          component:Mine2
        }
      ]
    },
    {
      path:'/Detail',
      name:'Detail',
      component:Detail
    }
  ]
})
