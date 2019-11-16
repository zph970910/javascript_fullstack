import Vue from 'vue'
import Vuex from 'vuex'

Vuex.use(Vuex)

const state = {
  count: 1
}

const mutations = {
  add (state, n) {
    state.count += n
  },
  reduce (state) {
    state.count--
  }
}

const actions = {
  addAction (context, status) {
    context.commit('add', status)
  },
  reduceAction ({commit}) {
    setTimeout(() => {
      commit('reduce')
    },3000)
    console.log('我比reduce先执行')
  }
}

const getters = {
  getCount: (state) => {
    return state.count + 100
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
