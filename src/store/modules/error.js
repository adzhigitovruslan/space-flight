export default {
  state: {
    error: null,
  },
  mutations: {
    SET_ERROR(state, error) {
      state.error = error
    },
    CLEAR_ERROR(state) {
      state.error = null
    },
  },
  actions: {
    setError(context, error) {
      context.commit('SET_ERROR', error)
    },
    clearError(context) {
      context.commit('CLEAR_ERROR')
    },
  },
  getters: {
    error: (s) => s.error,
  },
}
