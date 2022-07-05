<template>
  <section class="form">
    <div class="container">
      <h2 class="form__header mars_tl">Are you ready ?</h2>
      <div class="row mars_tl">
        <div class="col-md-6 slide-right">
          <p class="form__subtitle">
            An unforgettable journey is waiting for you. <br />
            <br />
            Start over on a red planet !
          </p>
        </div>
        <div class="col-md-6 slide-left">
          <form method="POST" @submit.prevent="sendEmail" class="form-part">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="tel"
                placeholder="Phone number"
                :class="{
                  invalid:
                    ($v.number.$dirty && !$v.number.required) ||
                    ($v.number.$dirty && !$v.number.numeric),
                }"
                v-model.trim="number"
              />
              <small
                class="invalid-number"
                v-if="$v.number.$dirty && !$v.number.required"
                >Enter phone number</small
              >
              <small
                class="invalid-number"
                v-else-if="$v.number.$dirty && !$v.number.numeric"
                >Use numbers</small
              >
            </div>
            <div class="form-group">
              <input
                id="email"
                type="text"
                placeholder="Email"
                class="form-control"
                :class="{
                  invalid:
                    ($v.email.$dirty && !$v.email.required) ||
                    ($v.email.$dirty && !$v.email.email),
                }"
                v-model.trim="email"
              />
            </div>
            <small
              class="invalid-email"
              v-if="$v.email.$dirty && !$v.email.required"
              >Enter email</small
            >
            <small
              class="invalid-email"
              v-else-if="$v.email.$dirty && !$v.email.email"
              >Enter correct email</small
            >
            <button
              v-if="this.$store.getters.loading"
              type="submit"
              class="btn btn-danger"
            >
              sending...
            </button>
            <button v-else type="submit" class="btn btn-danger">send</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script src="https://smtpjs.com/v3/smtp.js"></script>
<script>
import { email, required, numeric } from 'vuelidate/lib/validators'

export default {
  name: 'space-form',
  data() {
    return {
      email: '',
      emailFrom: 'adzhigitovruslan@gmail.com',
      number: '',
    }
  },
  validations: {
    email: { email, required },
    number: { required, numeric },
  },
  created() {
    this.$store.dispatch('setAmountOfUsers')
  },
  methods: {
    async sendEmail() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      } else {
        await this.$store.dispatch('setLoading', true)
        await this.$store.dispatch('sendPrice')

        await Email.send({
          SecureToken: '87d16f81-fe04-46ad-ab7f-d878efe0678d',
          To: this.email,
          From: this.emailFrom,
          Subject: 'Infinity inc.',
          Body:
            this.$store.getters.info.name +
            ',' +
            `<br>` +
            `<br>` +
            'Thank you for participating in our project. We hope you have already packed your bag.' +
            `<br>` +
            `<br>` +
            'Here is information about your future flight: ' +
            `<br>` +
            `<br>` +
            'Your name is ' +
            this.$store.getters.info.name +
            `<br>` +
            'Your contact number is: ' +
            this.number +
            `<br>` +
            'You are ' +
            this.$store.getters.userAmount +
            ' in the list. ' +
            `<br>` +
            'Your total price to pay = ' +
            '$' +
            this.$store.getters.totalPrice +
            `<br>` +
            `<br>` +
            'Time remaining until the next space shuttle launch :' +
            this.$store.getters.timeRemaining +
            `<br>` +
            `<br>` +
            'Our team look forward to seeing you onboard.',
        }).then((message) => alert(message))
        this.$store.dispatch('setLoading', false)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.form {
  padding: 50px 15px 50px 15px;
  h2 {
    text-align: center;
    margin-bottom: 50px;
  }
  &__header {
    font-size: 30px;
    text-align: center;
    @media (min-width: 1024px) {
      font-size: 40px;
    }
    @media (min-width: 1400px) {
      font-size: 50px;
    }
    @media (max-width: 768px) {
      font-size: 25px;
    }
  }
  .row {
    > div:not(:last-child) {
      @media (max-width: 768px) {
        margin-bottom: 40px;
      }
    }
  }
  &__group {
    position: relative;
  }
  & .form-part {
    display: flex;
    flex-direction: column;
    & .form-control {
      position: relative;
      background: transparent;
      border: 1px solid #fff5f5;
      color: #fff5f5;
      font-size: calc(13px + (18 - 13) * ((100vw - 320px) / (1200 - 320)));
      padding: 5px 10px;
      letter-spacing: 1px;
      transition: 0.5s ease;
      &.invalid {
        background: rgb(238, 43, 43);
      }
    }
    & .form-control::placeholder {
      font-size: calc(13px + (18 - 13) * ((100vw - 320px) / (1200 - 320)));
      color: #fff5f5;
    }
    > div {
      margin-bottom: 30px;
    }
  }
  &__subtitle {
    position: relative;
    padding: 0 20px;
    font-size: calc(16px + (25 - 16) * ((100vw - 320px) / (1200 - 320)));
  }
  &__subtitle:before {
    content: ' ';
    width: calc(1.11111px + 0.27778vw);
    border-radius: 10px;
    top: 0;
    bottom: 0;
    left: 0;
    position: absolute;
    background: linear-gradient(180deg, #d63384, #0dcaf0);
    background-size: 200% 200%;
    -webkit-animation: Animation 5s ease infinite;
    animation: Animation 5s ease infinite;
  }
}
.container {
  margin: 0 auto;
  width: 100%;
  height: 100%;
}
.mars_tl {
  visibility: hidden;
}
.invalid-email {
  position: absolute;
  top: 66%;
  left: 2%;
  font-size: 0.7em;
  color: rgb(238, 43, 43);
}
.invalid-number {
  position: absolute;
  top: 25%;
  left: 2%;
  font-size: 0.7em;
  color: rgb(238, 43, 43);
}
.btn {
  font-size: calc(13px + (18 - 13) * ((100vw - 320px) / (1200 - 320)));
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
</style>
