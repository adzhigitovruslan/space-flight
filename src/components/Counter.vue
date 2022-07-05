<template>
  <div v-if="!loading" class="counter">
    <section>
      <b-container>
        <b-row class="">
          <h5 class="counter__title" v-if="!expired">
            Time remaining until the next space shuttle launch
          </h5>
          <h5 v-else>Mission is completed</h5>
        </b-row>
      </b-container>
    </section>
    <section>
      <b-container>
        <b-row class="counter__display">
          {{ displayDays }} days {{ displayHours }}h
          <span class="counter__semicolon"> : </span>

          {{ displayMinutes }}min
          <span class="counter__semicolon"> : </span>

          {{ displaySeconds }}s
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {
  name: 'counter',
  props: ['year', 'month', 'date', 'hour', 'minute', 'second'],
  data() {
    return {
      displayDays: 0,
      displayHours: 0,
      displayMinutes: 0,
      displaySeconds: 0,
      loading: false,
      expired: false,
    }
  },
  computed: {
    _seconds: () => 1000,
    _minutes() {
      return this._seconds * 60
    },
    _hours() {
      return this._minutes * 60
    },
    _days() {
      return this._hours * 24
    },
    end() {
      return new Date(
        this.year,
        this.month,
        this.hour,
        this.minute,
        this.second
      )
    },
  },
  methods: {
    formatNum: (num) => (num < 10 ? '0' + num : num),
    showRemaining() {
      this.loading = true
      const timer = setInterval(() => {
        const now = new Date()
        const distance = this.end.getTime() - now.getTime()

        if (distance < 0) {
          clearInterval(timer)
          this.expired = true
          return
        }
        const days = Math.floor(distance / this._days)
        const hours = Math.floor((distance % this._days) / this._hours)
        const minutes = Math.floor((distance % this._hours) / this._minutes)
        const seconds = Math.floor((distance % this._minutes) / this._seconds)
        this.displayMinutes = this.formatNum(minutes)
        this.displaySeconds = this.formatNum(seconds)
        this.displayHours = this.formatNum(hours)
        this.displayDays = this.formatNum(days)
        this.$store.dispatch('showTime', {
          d: this.displayDays,
          h: this.displayHours,
          m: this.displayMinutes,
          s: this.displaySeconds,
        })
        this.loading = false
      }, 1000)
    },
  },
  mounted() {
    this.showRemaining()
  },
}
</script>

<style lang="scss" scoped>
.counter {
  max-width: 550px;
  font-family: 'Share Tech Mono', monospace;
  color: #0f0f0f;
  padding: 20px;
  border: 0.5px solid #eeaeca;
  margin: 40px 0 0 0;
  border-radius: 10px;
  box-shadow: 0.2rem 0.2rem 0.5rem #eeaeca;
  background: linear-gradient(130deg, #eeaeca, #308ee2);
  background-size: 200% 200%;
  animation: Animation 15s ease infinite;
  @media (max-width: 550px) {
    // margin: 40px auto 0 auto;
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
    max-width: 250px;
  }
  &__title {
    font-size: calc(20px + (25 - 20) * ((100vw - 320px) / (1400 - 320)));
    margin-bottom: 20px;
  }
  &__display {
    @media (max-width: 1024px) {
      font-size: calc(18px + (35 - 18) * ((100vw - 320px) / (1400 - 320)));
    }
    font-size: 35px;
  }
}
</style>
