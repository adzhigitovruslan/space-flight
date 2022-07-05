import firebase from 'firebase/compat/app'
import User from '@/store/user_help'

export default {
  state: {
    user: null,
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload
    },
  },
  actions: {
    async login(context, { email, password }) {
      context.commit('CLEAR_ERROR')
      context.commit('SET_LOADING', true)
      try {
        const user = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
        context.commit('SET_USER', new User(user.user.uid))

        context.commit('SET_LOADING', false)
      } catch (error) {
        context.commit('SET_LOADING', false)
        context.commit('CLEAR_ERROR', error)
      }
    },
    async logout(context) {
      await firebase.auth().signOut()
      context.commit('CLEAR_ERROR')
      context.commit('SET_USER', null)
    },
    async register(context, { email, password, name }) {
      context.commit('CLEAR_ERROR')
      context.commit('SET_LOADING', true)
      try {
        const user = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
        context.commit('SET_USER', new User(user.user.uid))
        // -------------
        await firebase.database().ref(`/users/${user.user.uid}/info`).set({
          name,
          total: '',
        })
        //--------------
        context.commit('SET_LOADING', false)
      } catch (error) {
        context.commit('SET_LOADING', false)
        context.commit('SET_ERROR', error)
      }
    },
    loggedUser(context, payload) {
      context.commit('SET_USER', new User(payload.uid))
      console.log('do2')
    },
  },
  getters: {
    user: (s) => s.user,
    checkUser: (s) => s.user !== null,
  },
}
