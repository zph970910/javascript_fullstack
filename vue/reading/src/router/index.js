import Vue from 'vue'
import Router from 'vue-router'
import Find from '@/components/pages/Find'
import Bookshelf from '@/components/pages/Bookshelf'
import Story from '@/components/pages/Story'
import Mine from '@/components/pages/Mine'
import Message from '@/components/pages/Message'
import Inform from '@/components/pages/Inform'
import Chat from '@/components/pages/Chat'
import Setting from '@/components/pages/Setting'
import Profile from '@/components/pages/Profile'
import BookDetail from '@/components/pages/BookDetail'
import storyDetail from '@/components/pages/storyDetail'
import Login from '@/components/pages/login'
import BookStore from '@/components/pages/BookStore'
import likeStory from '@/components/pages/likeStory'
import search from '@/components/pages/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/search',
      name: 'Search',
      component: search
    },
    {
      path: '/story/likeStory',
      name: 'LikeStory',
      component: likeStory
    },
    {
      path: '/BookStore',
      name: 'BookStore',
      component: BookStore,
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/story/storyDetail',
      name: 'storyDetail',
      component: storyDetail,
      props: true
    },
    {
      path: '/Bookshelf/BookDetail',
      name: 'BookDetail',
      component: BookDetail,
      props: true
    },
    {
      path: '/Bookshelf',
      name: 'Bookshelf',
      component: Bookshelf
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/Setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/Message',
      name: 'Message',
      component: Message,
      redirect: '/Message/Chat',
      children: [
        {
          path: 'Chat',
          name: 'Chat',
          component: Chat
        },
        {
          path: 'Inform',
          name: 'Inform',
          component: Inform
        }
      ]
    },

    // {
    //   path: '/Message',
    //   name: 'Message',
    //   component: Message
    // },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/Story',
      name: 'Story',
      component: Story
    },
    {
      path: '/Find',
      name: 'Find',
      component: Find
    },
    {
      path: '/',
      name: 'Find',
      component: Find
    }
  ]
})
