import Vue from 'vue'
import Vuex from 'vuex'

import calc_price from '@/store/modules/calc_price'
import info from '@/store/modules/info'
import error from '@/store/modules/error'
import counter from '@/store/modules/counter'
import todos from '@/store/modules/todos'
import loading from '@/store/modules/loading'
import auth from '@/store/modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    info,
    error,
    counter,
    todos,
    auth,
    calc_price,
    loading,
  },
})
