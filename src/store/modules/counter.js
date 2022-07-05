export default {
  state: {
    timeRemaining: '',
  },
  mutations: {
    SHOW_TIME(state, payload) {
      state.timeRemaining = payload
    },
  },
  actions: {
    showTime(context, { d, h, m, s }) {
      const time =
        d + ' days' + ' ' + h + ' hours' + ' ' + m + ' min' + ' ' + s + ' sec'
      context.commit('SHOW_TIME', time)
    },
  },
  getters: {
    timeRemaining: (s) => s.timeRemaining,
  },
}
