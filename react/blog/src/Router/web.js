import loadable from '../utils/loadable'

const List = loadable(() => import('../pages/web/list/list'))
const Archive = loadable(() => import('../pages/web/archive'))

const webRoutes = [
  {
    menu: true,
    icon: 'HomeOutlined',
    title: '首页',
    path: '/web/index',
    component: List
  },
  {
    menu: true,
    icon: 'HomeOutlined',
    title: '归档',
    path: '/web/archive',
    component: Archive
  }
]

export default webRoutes