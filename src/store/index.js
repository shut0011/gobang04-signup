import Vue from 'vue'
import Vuex from 'vuex'

import home from 'store/modules/home/index'
import board from 'store/modules/board/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    version: "V1.0.0"
  },
  modules: {
    home,
    board
  }
})
