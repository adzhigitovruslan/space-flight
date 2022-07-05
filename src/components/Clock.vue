<template>
  <main id="clock">
    <p class="date">{{ date | date("date") }}</p>
    <p class="time">{{ date | date("time") }}</p>
  </main>
</template>

<script>
export default {
  name: "clock",
  data() {
    return {
      date: new Date(),
      time: "",
      interval: null,
      dropdown: null,
    };
  },

  mounted() {
    this.interval = setInterval(() => {
      this.date = new Date();
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>

<style lang="scss" scoped>
#clock {
  font-family: "Share Tech Mono", monospace;
  color: #ffffff;
  text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);
  padding: 5px 15px;
  border: 0.5px solid #eeaeca;
  margin: 10px 25px 0 25px;
  border-radius: 10px;
  box-shadow: 0.2rem 0.2rem 0.5rem #eeaeca;
  background: linear-gradient(130deg, #eeaeca, #308ee2);
  background-size: 200% 200%;
  animation: Animation 15s ease infinite;
  .time {
    letter-spacing: 0.05em;
    font-size: 18px;
    padding: 5px 0;
  }
  .date {
    letter-spacing: 0.1em;
    font-size: 18px;
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
</style>
