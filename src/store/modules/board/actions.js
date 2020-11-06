import {
  SET_BOARD,
  SET_STEPS,
  ADD_CHESSMAN,
  RESET_BOARD,
  BACKWARD,
  FORWARD,
  SET_FIVES
} from './mutations-type.js'

export default {
  [RESET_BOARD] ({commit}) {
    commit(RESET_BOARD)
  },
  [SET_BOARD] ({commit}, board) {
    commit(SET_BOARD, board)
  },
  [SET_STEPS] ({commit}, steps) {
    commit(SET_STEPS, steps)
  },
  [SET_FIVES] ({commit}, fives) {
    commit(SET_FIVES, fives)
  },
  [ADD_CHESSMAN] ({commit}, c) {
    commit(ADD_CHESSMAN, c)
  },
  [BACKWARD] ({commit}, c) {
    commit(BACKWARD, c)
  },
  [FORWARD] ({commit}, c) {
    commit(FORWARD, c)
  },
}