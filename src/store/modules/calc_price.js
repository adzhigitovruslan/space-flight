import firebase from 'firebase/compat/app'

export default {
  state: {
    totalPrice: null,
  },
  mutations: {
    SET_PRICE(state, payload) {
      state.totalPrice = payload
    },
  },
  actions: {
    async sendPrice(context) {
      context.commit('CLEAR_ERROR')
      try {
        const uid = await context.dispatch('getUid')
        const price = firebase.database().ref(`users/${uid}/info/`)
        await price.update({
          total: context.getters.totalPrice,
        })
      } catch (err) {
       console.log('sendPrice')
      }
    },
    setPrice(context, payload) {
      context.commit('SET_PRICE', payload)
    },
  },
  getters: {
    totalPrice: (s) => s.totalPrice,
  },
}
