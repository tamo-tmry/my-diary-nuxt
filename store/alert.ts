import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  alertMessage: '',
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  alertMessage: (state) => state.alertMessage,
}

export const actions: ActionTree<RootState, RootState> = {
  addAlertMessage({ commit }, message: string) {
    commit('ADD', message)
  },
  removeAlertMessage({ commit }) {
    commit('REMOVE')
  },
}

export const mutations: MutationTree<RootState> = {
  ADD: (state, message: string) => {
    state.alertMessage = message
  },
  REMOVE: (state) => {
    state.alertMessage = ''
  },
}
