import Vue from 'Vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    users,
    posts
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})