import Vue from 'vue'
import Vuex from 'vuex'
import * as mutationType from './mutation-type'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    addbook: [],
    story: [],
    likeStory: [],
    isLogin: false,
    user: [
      {username: '清风', password: 123, hobby: '', introduce: '', headImage: 'http://img1.imgtn.bdimg.com/it/u=2421033482,4116815793&fm=11&gp=0.jpg'},
      {username: '明月', password: 123, hobby: '', introduce: '', headImage: 'http://img4.imgtn.bdimg.com/it/u=3730757430,4199197550&fm=11&gp=0.jpg'},
      {username: '晓星尘', password: 123, hobby: '', introduce: '', headImage: 'http://img4.imgtn.bdimg.com/it/u=1233977515,1611356097&fm=26&gp=0.jpg'}
    ],
    i: '',
  },
  mutations: {
    addbook(state, data)  {
      state.addbook.push(data)
    },
    storyData (state, data) {
      state.story = data
    },
    likeStory(state, data) {
      state.likeStory = data
    },
    login (state, data) {
      state.isLogin = data
    },
    logout (state) {
      state.isLogin = false
    },
    i (state, data) {
      state.i = data
    },
    setUsername (state, data) {
      state.user[state.i].username = data
    },
    setHobby (state, data) {
      state.user[state.i].hobby = data
    },
    setIntro (state, data) {
      state.user[state.i].introduce = data
    },
  },
  actions: {
    
  }
})

export default store
