import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default {
  namespaced: true,
  state: {
    lang: 'zh-CN',
    deep: 8,
    showSteps: true,
    spread: true,
    status: status.LOADING,
    first: 1,
    randomOpening: true,
    deepList: [{
      value: 4,
      title: 'idiot'
    }, {
      value: 6,
      title: 'easy'
    }, {
      value: 8,
      title: 'normal'
    }, {
      value: 10,
      title: 'hard'
    }, {
      value: 12,
      title: 'difficult'
    }]
  },
  mutations, 
  actions, 
  getters
}