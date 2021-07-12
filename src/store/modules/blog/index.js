import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

const initialState = {
  posts: null
}

const module = {
  namespaced: true,
  state: () => initialState,
  mutations,
  actions,
  getters
}

export default module