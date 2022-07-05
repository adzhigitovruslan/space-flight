import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/compat/app'
import VueParticles from 'vue-particles'
import Carousel3d from 'vue-carousel-3d'
import Vuelidate from 'vuelidate'

import messageplugin from '@/utils/message.plugin'
import dateFilter from '@/filters/date.filter'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueParticles)
Vue.use(messageplugin)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuelidate)
Vue.use(Carousel3d)
Vue.filter('date', dateFilter)
Vue.config.productionTip = false

export const bus = new Vue()

firebase.initializeApp({
  apiKey: 'AIzaSyADR98-o1uRhrkfSixaQ-CFddxjATCdnHU',
  authDomain: 'human-marsflight.firebaseapp.com',
  projectId: 'human-marsflight',
  storageBucket: 'human-marsflight.appspot.com',
  messagingSenderId: '62462828920',
  appId: '1:62462828920:web:f221d1ef6c0bc25c9d288d',
  measurementId: 'G-282WWVMXPS',
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app')
  }
})
