import {
  SET_DEEP,
  SET_LANG,
  SET_SHOW_STEPS,
  SET_STATUS,
  SET_FIRST,
  SET_SPREAD
} from './mutations-type.js'

export default {
  [SET_DEEP] ({commit}, deep) {
    commit(SET_DEEP, deep)
  },
  [SET_LANG] ({commit}, lang) {
    commit(SET_LANG, lang)
  },
  [SET_SHOW_STEPS] ({commit}, show) {
    commit(SET_SHOW_STEPS, show)
  },
  [SET_SPREAD] ({commit}, s) {
    commit(SET_SPREAD, s)
  },
  [SET_STATUS] ({commit}, status) {
    commit(SET_STATUS, status)
  },
  [SET_FIRST] ({commit}, first) {
    commit(SET_FIRST, first)
  }  
}