import {getBoard, copy} from './index.js'

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
  [RESET_BOARD] (state) {
    state.board = getBoard()
    state.steps = []
  },
  [SET_BOARD] (state, board) {
    state.board = board
  },
  [SET_STEPS] (state, steps) {
    state.steps = steps
  },
  [SET_FIVES] (state, fives) {
    state.fives = fives
  },
  [ADD_CHESSMAN] (state, {position, role}) {
    let newBoard = copy(state.board)
    newBoard[position[0]][position[1]] = role
    state.board = newBoard
    const step = {
      position: position,
      role: role
    }
    state.steps.push(step)
    state.stepsTail = [] //
  },
  [BACKWARD] (state, steps) {
    if (state.steps.length < 2) return false
    steps = steps || 2
    let i = 0
    while (i<steps) {
      const s = state.steps.pop()
      state.stepsTail.push(s)
      const p = s.position
      state.board[p[0]][p[1]] = 0
      i++
    }
  },
  [FORWARD] (state, steps) {
    if (state.stepsTail.length < 2) return false
    steps = steps || 2
    let i = 0
    while (i<steps) {
      const s = state.stepsTail.pop()
      state.steps.push(s)
      const p = s.position
      state.board[p[0]][p[1]] = s.role
      i++
    }
  }
}