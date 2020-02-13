import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    counter: 0,
    color: 'red'
  },
  mutations: {
    counterIncrement (state) {
      state.counter = state.counter + 1
    }
  },
  getters: {
    color: state => state.color
  },
  actions: {

  }
})
