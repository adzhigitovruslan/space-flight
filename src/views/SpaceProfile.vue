<template>
  <div class="profile">
    <div class="container">
      <div class="profile__title">
        <h3>Profile</h3>
      </div>

      <form class="form" @submit.prevent="submitHandler">
        <div class="input-field">
          <b-form-group
            id="fieldset-1"
            label="Edit your name"
            label-for="input-1"
            valid-feedback="Thank you!"
            :invalid-feedback="invalidFeedback"
            :state="state"
          >
            <b-row class="my-1">
              <b-col class="profile__input-col" sm="12">
                <b-form-input
                  :class="{ invalid: $v.name.$dirty && !$v.name.required }"
                  class="profile__input"
                  id="input-1"
                  v-model="name"
                  :state="state"
                  trim
                ></b-form-input>
              </b-col>
            </b-row>
          </b-form-group>
        </div>

        <b-button variant="info" type="submit">
          Update
          <i class="fa-solid fa-paper-plane"></i>
        </b-button>
      </form>
      <div class="profile__chart">
        <bar-chart></bar-chart>
      </div>
      <counter
        :year="2025"
        :month="12"
        :date="24"
        :hour="2"
        :minute="25"
        :second="24"
      ></counter>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { required } from 'vuelidate/lib/validators'
import barChart from '@/components/chart-comp/Bar.vue'
import Counter from '@/components/Counter.vue'

export default {
  name: 'space-profile',
  data() {
    return {
      name: 'Loading..',
    }
  },
  components: {
    barChart,
    Counter,
  },
  validations: {
    name: { required },
  },
  mounted() {
    this.setName()
  },
  computed: {
    ...mapGetters(['info']),
    state() {
      return this.name.length > 0
    },
    invalidFeedback() {
      return 'Enter name'
    },
  },
  methods: {
    ...mapActions(['updateInfo']),
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      try {
        await this.updateInfo({
          name: this.name,
        })
        // eslint-disable-next-line no-empty
      } catch (e) {}
    },
    setName() {
      setTimeout(() => {
        this.name = this.info.name
      }, 2000)
    },
  },
}
</script>

<style lang="scss">
canvas {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}
.container {
  margin: 0 auto;
  height: 100%;
  width: 100%;
  max-width: 550px;
}
.profile {
  padding: 15px;
  &__title {
    h3 {
      font-size: calc(20px + (25 - 20) * ((100vw - 320px) / (1400 - 320)));
      margin-bottom: 30px;
    }
  }
  &__input-col {
    max-width: 550px;
  }
  &__input {
    border-radius: 10px;
    @media (max-width: 550px) {
      max-width: 450px;
    }
    @media (max-width: 500px) {
      max-width: 400px;
    }
    @media (max-width: 450px) {
      max-width: 350px;
    }
    @media (max-width: 400px) {
      max-width: 300px;
    }
    @media (max-width: 350px) {
      max-width: 265px;
    }
  }
}
</style>
