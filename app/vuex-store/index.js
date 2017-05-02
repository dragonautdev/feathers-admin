import auth from './modules/auth'
import status from './modules/status'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    status
  }
})
