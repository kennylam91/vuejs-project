import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    counter: 0,
    color: 'red',
    user: null
  },
  mutations: {
    counterIncrement (state) {
      state.counter = state.counter + 1
    },
    setUser (state, user) {
      state.user = user
    }
  },
  getters: {
    color: state => state.color
  },
  actions: {

  }
})
