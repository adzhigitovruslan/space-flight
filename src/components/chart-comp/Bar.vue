<template>
  <div class="profile__bar-chart">
    <loader v-if="this.$store.state.loading"></loader>
    <Bar
      v-else
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
    />
    <div class="profile__subtitle">
      <br />
      <p>Flyers: {{ this.users }}</p>
    </div>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs/legacy'
import Loader from '@/components/Loader.vue'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'PieChart',
  components: { Bar, Loader },
  props: {
    chartId: {
      type: String,
      default: 'pie-chart',
    },
    datasetIdKey: {
      type: String,
      default: 'label',
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: '',
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      total: '',
      users: '',
      chartData: {
        labels: ['Users'],
        datasets: [
          {
            label: 'Data',
            backgroundColor: '#41B883',
            data: [1, 2],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    }
  },
  computed: {},
  methods: {
    async getChart() {
      this.$store.state.loading = true
      try {
        const res = await this.$store.dispatch('fetchFireData')
        let x = []

        await res.forEach((el) => {
          x.push(Number(el))
        })

        let result = [x.length]

        this.users = x.length

        this.chartData = {
          datasets: [
            {
              label: 'Data',
              backgroundColor: ['#41B883'],
              data: result,
            },
          ],
        }
        this.$store.state.loading = false
        // eslint-disable-next-line no-empty
      } catch (e) {}
    },
  },
  mounted() {
    this.getChart()
    this.$store.state.loading = false
  },
}
</script>

<style lang="scss">
#pie-chart {
  z-index: 1;
  width: 300px;
}
.profile__bar-chart {
  position: relative;
  margin-top: 50px;
  max-width: 500px;
  max-height: 500px;
  @media (max-width: 550px) {
    max-width: 480px;
  }
  @media (max-width: 500px) {
    max-width: 420px;
  }
  @media (max-width: 450px) {
    max-width: 370px;
  }
  @media (max-width: 400px) {
    max-width: 320px;
  }
  @media (max-width: 375px) {
    max-width: 280px;
  }
  @media (max-width: 320px) {
    max-width: 260px;
  }
}
</style>
