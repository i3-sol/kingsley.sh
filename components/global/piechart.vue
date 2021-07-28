<script>
import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,

  mixins: [],

  props: ['chartData', 'options'],

  mounted () {
    this.renderChart(this.chartData, this.options)
  },

  watch: {
  },


  methods: {
    update() {
      this.$data._chart.update()
    }
  }
}
</script>

<style>
</style>
