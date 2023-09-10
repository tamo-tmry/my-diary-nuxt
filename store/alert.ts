import { GetterTree, ActionTree, MutationTree } from 'vuex'

type RootState = {
  alertMessage: string
}

export const alert = {
  state: () => ({
    alertMessage: '',
  }),
  getters: {
    alertMessage: (state) => state.alertMessage,
  } as GetterTree<RootState, RootState>,
  actions: {
    addAlertMessage({ commit }, message: string) {
      commit('ADD', message)
    },
    removeAlertMessage({ commit }) {
      commit('REMOVE')
    },
  } as ActionTree<RootState, RootState>,
  mutations: {
    ADD: (state, message: string) => {
      state.alertMessage = message
    },
    REMOVE: (state) => {
      state.alertMessage = ''
    },
  } as MutationTree<RootState>,
}
