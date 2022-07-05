<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script src="https://smtpjs.com/v3/smtp.js"></script>
<script>
import firebase from 'firebase/compat/app'

export default {
  name: 'app',
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('loggedUser', user)
      }
    })
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap');

#app {
  height: 100%;
  width: 100%;
  color: #fff5f5;
  letter-spacing: 1px;
}
canvas {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}
</style>
