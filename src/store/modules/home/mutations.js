import {
  SET_DEEP,
  SET_LANG,
  SET_SHOW_STEPS,
  SET_STATUS,
  SET_FIRST,
  SET_SPREAD
} from './mutations-type.js'

export default {
  [SET_DEEP] (state, deep) {
    state.deep = deep
  },
  [SET_LANG] (state, lang) {
    state.lang = lang
  },
  [SET_SHOW_STEPS] (state, show) {
    state.showSteps = show
  },
  [SET_SPREAD] (state, s) {
    state.spread = s
  },
  [SET_STATUS] (state, status) {
    state.status = status
  },
  [SET_FIRST] (state, first) {
    state.first = first
  }
}