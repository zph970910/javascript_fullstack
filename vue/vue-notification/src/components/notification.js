import vue from 'vue'

import Notification from './Notification.vue'

// new Swiper()
// new Gcode()
// 面向对象有一个好处 达到代码复用

const NotificationConstructor = vue.extend(Notification)

let notification;
export const open = () => {
  if (notification) {
    notification.title = title;
    notification.content = content
  } else {
    let notification = new NotificationConstructor({
      el:document.createElement('div'),
      propsData: {
        visiable: true,
        title: '通知1',
        content: '放假1'
      }
    })
    document.body.appendChild(notification.$el)
  }
  
}

export const close = function () {
  notification.visiable = false
  document.body.removeChild(notification.$el)
  notification = null
}