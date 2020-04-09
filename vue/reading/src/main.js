// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import VueResource from 'vue-resource'
import '../static/css/reset.styl'
import './common/fonts/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(VueResource)
Vue.use(Vant);
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
