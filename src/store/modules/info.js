import firebase from 'firebase/compat/app'

export default {
  state: {
    info: {},
    userAmount: [],
  },
  mutations: {
    SET_INFO(state, info) {
      state.info = info
    },
    CLEAR_INFO(state) {
      state.info = {}
    },
    SET_AMOUNT_OF_USERS(state, payload) {
      state.userAmount = payload
    },
  },
  actions: {
    async updateInfo(context, toUpdate) {
      try {
        const uid = await context.dispatch('getUid')
        const updateData = { ...toUpdate }
        await firebase.database().ref(`/users/${uid}/info`).update(updateData)
        context.commit('SET_INFO', updateData)
      } catch (e) {
        console.log('updateInfo')
      }
    },
    async fetchInfo(context) {
      try {
        const uid = await context.dispatch('getUid')
        const info = (
          await firebase.database().ref(`/users/${uid}/info`).once('value')
        ).val()
        context.commit('SET_INFO', info)
      // eslint-disable-next-line no-empty
      } catch (e) {
        console.log('fetchInfo')
      }
    },
    // eslint-disable-next-line no-unused-vars
    async fetchFireData(context) {
      try {
        const infoData =
          (await firebase.database().ref(`users/`).once('value')).val() || {}
        return Object.keys(infoData).map((key) => ({
          ...infoData[key].info,
          id: key,
        }))
      // eslint-disable-next-line no-empty
      } catch (e) {}
    },
    setAmountOfUsers(context) {
      firebase
        .database()
        .ref(`users`)
        .on('value', (snapshot) => {
          context.commit('SET_AMOUNT_OF_USERS', snapshot.numChildren())
        })
    },
    clearInfo(context) {
      context.commit('CLEAR_INFO')
    },
    getUid() {
      const user = firebase.auth().currentUser
      return user ? user.uid : null
    },
  },
  getters: {
    info: (s) => s.info,
    userAmount: (s) => s.userAmount,
  },
}
