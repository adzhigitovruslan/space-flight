<template>
  <div class="page__login">
    <form
      id="form"
      @mousemove="mousemove"
      @mouseleave="mouseleave"
      @submit.prevent="submitHandler"
    >
      <div class="header">
        <h3>LOGIN</h3>
        <div @click="closeLogin" class="header__close-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-tools"
            viewBox="0 0 16 16"
          >
            <path
              d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z"
            />
          </svg>
        </div>
      </div>
      <input
        v-model.trim="email"
        type="text"
        placeholder="email"
        :class="{
          invalid:
            ($v.email.$dirty && !$v.email.required) ||
            ($v.email.$dirty && !$v.email.email),
        }"
      />
      <small class="invalid-email" v-if="$v.email.$dirty && !$v.email.required"
        >Enter email</small
      >
      <small
        class="invalid-email"
        v-else-if="$v.email.$dirty && !$v.email.email"
        >Enter correct email</small
      >
      <input
        type="password"
        placeholder="password"
        v-model.trim="password"
        :class="{
          invalid:
            ($v.password.$dirty && !$v.password.required) ||
            ($v.password.$dirty && !$v.password.minLength),
        }"
      />
      <small
        class="invalid-password"
        v-if="$v.password.$dirty && !$v.password.required"
        >Enter password</small
      >
      <small
        class="invalid-password"
        v-else-if="$v.password.$dirty && !$v.password.minLength"
        >It must be at least {{ $v.password.$params.minLength.min }} characters.
        <br />
        It's {{ password.length }} now</small
      >
      <button v-if="loading" type="submit" class="login-btn">LOADING...</button>
      <button v-else class="login-btn" type="submit">LOGIN</button>
      <div class="page__question">
        <div class="page__question-member">
          Not a member yet?
          <router-link :to="{ name: 'register' }">
            <button>SIGN UP</button>
          </router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { email, required, minLength } from 'vuelidate/lib/validators'
import messages from '@/utils/messages'

export default {
  name: 'login',
  data: function () {
    return {
      email: '',
      password: '',
    }
  },
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) },
  },
  computed: {
    loading() {
      return this.$store.getters.loading
    },
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      } else {
        const user = {
          email: this.email,
          password: this.password,
        }
        this.$store
          .dispatch('login', user)
          .then(() => {
            this.$router.push({ name: 'space' })
          })
          .catch((err) => {
            throw err
          })
      }
    },
    mousemove() {
      const form = document.querySelector('#form')
      if (form) {
        form.addEventListener('mousemove', (e) => {
          const x = (window.innerWidth / 2 - e.pageX) / 12
          const y = (window.innerHeight / 2 - e.pageY) / 12
          form.style.transform = 'rotateX(' + x + 'deg)  rotateY(' + y + 'deg)'
        })
      }
    },
    mouseleave() {
      const form = document.querySelector('#form')
      if (form) {
        form.addEventListener('mouseleave', function () {
          form.style.transform = 'rotateX(0deg)  rotateY(0deg)'
        })
      }
    },
    closeLogin() {
      this.$router.push({ name: 'home' })
    },
  },
  mounted() {
    if (messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message])
    }
  },
}
</script>

<style lang="scss" scoped>
.page {
  &__question {
    width: 80%;
    margin: 0 auto 10px auto;
  }
  &__question-member {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgba(255, 255, 255, 0.905);
    font-size: 10px;
    button {
      outline: none;
      background: #fff;
      border-radius: 10px;
      font-size: 10px;
      font-weight: 600;
      padding: 5px;
    }
    button:hover {
      box-shadow: 1px 1px 8px purple;
    }
  }
  &__login {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
    position: absolute;
    transition: all 0.2s linear;
    perspective: 1000px;
    z-index: 3;
    form {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      position: relative;
      height: 350px;
      width: 250px;
      text-align: center;
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      border-radius: 15px;
      z-index: 2;
      backdrop-filter: blur(10px);
      border-top: 1px solid rgba(255, 255, 255, 0.3);
      border-left: 1px solid rgba(255, 255, 255, 0.3);
      transform-style: preserve-3d;
      h3 {
        padding: 20px 0 0 0;
        font-size: 20px;
        color: rgba(255, 255, 255, 0.905);
      }
    }
    input {
      border: 0.2px solid #6f676c;
      outline: none;
      margin: 15px 0;
      padding: 0 15px;
      letter-spacing: 1px;
      background: transparent;
      color: rgba(255, 255, 255, 0.7);
      height: 40px;
      width: 80%;
      border-radius: 10px;
      font-size: 14px;
      box-shadow: inset 0.2rem 0.2rem 0.5rem #000;
    }
    input:focus {
      box-shadow: 0.3rem 0.3rem 0.6rem #000;
    }
    .login-btn {
      border: 1px solid #842684;
      box-shadow: 0.2rem 0.2rem 0.5rem #4d024d;
      transition: 0.4s;
      outline: none;
      margin: 15px 0;
      padding: 0 15px;
      letter-spacing: 1px;
      height: 40px;
      width: 80%;
      border-radius: 10px;
      background: linear-gradient(130deg, deeppink, blueviolet);
      background-size: 200% 200%;
      animation: Animation 5s ease infinite;
      transition: box-shadow 0.2s ease;
      color: rgba(255, 255, 255, 0.905);
      font-weight: 600;
      font-size: 14px;
    }
    .login-btn:hover {
      box-shadow: 1px 1px 5px;
    }
    .invalid-email {
      position: absolute;
      top: 34%;
      left: 12%;
      font-size: 0.6em;
      color: rgb(238, 43, 43);
    }
    .invalid-password {
      position: absolute;
      top: 59%;
      left: 12%;
      font-size: 0.6em;
      text-align: left;
      color: rgb(238, 43, 43);
    }
    @keyframes Animation {
      0% {
        background-position: 10% 0%;
      }
      50% {
        background-position: 91% 100%;
      }
      100% {
        background-position: 10% 0%;
      }
    }
  }
}
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  &__close-icon {
    color: rgba(255, 255, 255, 0.905);
    position: absolute;
    right: 25px;
    top: 23px;
    cursor: pointer;
    display: flex;
  }
}
</style>
