import Vue from 'vue'
import Router from 'vue-router'
import starNotes from '@/components/starNotes'
import starBanner from '@/components/starBanner/StarBanner'
import starLogin from '@/components/login/StarLogin'
import starRegister from '@/components/register/StarRegister'
import noteClass from '@/components/noteClass/noteClass'
import noteList from '@/components/noteList/noteList'
import noteDetail from '@/components/noteDetail/noteDetail'
import publishNote from '@/components/publishNote/publishNote'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'starNotes',
      component: starNotes,
      meta: {
        title: '星辰笔记'
      }
    },
    {
      path: '/StarBanner',
      name: 'StarBanner',
      component: starBanner,
      meta: {
        title: '欢迎'
      }
    },
    {
      path: '/StarLogin',
      name: 'StarLogin',
      component: starLogin,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/StarRegister',
      name: 'StarRegister',
      component: starRegister,
      meta: {
        title: '注册'
      }
    },
    {
      path: '/noteClass',
      name: 'noteClass',
      component: noteClass,
      meta: {
        title: '笔记分类'
      }
    },
    {
      path: '/noteList',
      name: 'noteList',
      component: noteList,
      meta: {
        title: '笔记列表'
      }
    },
    {
      path: '/noteDetail',
      name: 'noteDetail',
      component: noteDetail,
      meta: {
        title: '笔记详情'
      }
    },
    {
      path: '/publishNote',
      name: 'publishNote',
      component: publishNote,
      meta: {
        title: '写笔记'
      }
    }
  ]
})
