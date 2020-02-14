import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    counter: 0,
    color: 'red',
    user: null,
    posts: null
  },
  mutations: {
    counterIncrement (state) {
      state.counter = state.counter + 1
    },
    setUser (state, user) {
      state.user = user
    },
    setPosts (state, posts) {
      state.posts = posts
    }
  },
  getters: {
    color: state => state.color
  },
  actions: {

  }
})
