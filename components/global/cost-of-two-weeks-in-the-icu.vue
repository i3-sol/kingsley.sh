<template>
  <div class="surviving-chd" :class="{'mx-lg-n10': view === 'table'}">

    <div class="cochditusa text-right mb-7">
      <h2 class="h5 w-75 ml-auto">Admission at <span class="redacted">ADVOCATE</span> CHILDRENS HOSPITAL</h2>
      <h3 class="mt-0 h5 font-serif"><span class="redacted">Blue</span> Cross <span class="redacted">Blue</span> Shield/<span class="redacted">Ant</span>hem</h3>
      <time datetime="2021-04-06 08:22:00">April 6th, 2021 to April 20th, 2021</time>
      <span class="d-block text-uppercase small mt-3 text-muted">Pending Insurance*</span>
      <span class="counter mt-n3 d-block">{{ formatCurrency(counter) }}</span>
      <p class="small d-block font-italic mt-0 mb-5 w-50 ml-auto text-right"><mark>* The amount your insurance has not yet responded to. Depending on the response from your insurance, some or all of this amount could become your responsibility.</mark></p>
    </div>

    <ul class="list-unstyled list-inline text-center">
      <li class="list-inline-item"><a href="#" class="" @click.prevent="view = 'table'" :class="{'font-weight-bold': view === 'table'}">table</a></li>
      <li class="list-inline-item">|</li>
      <li class="list-inline-item"><a href="#" class="" @click.prevent="view = 'chart'" :class="{'font-weight-bold': view === 'chart'}">chart</a></li>
      <li class="list-inline-item">|</li>
      <li class="list-inline-item"><a href="/2-weeks-in-the-icu-as-a-baby-born-with-congenital-heart-disease.json" target="_blank">json</a></li>
    </ul>

    <template v-if="view === 'table'">
      <table class="table table-striped table-sm">
        <thead class="thead-dark">
          <tr>
            <th>Item</th>
            <th class="text-right pr-4">Cost</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(items, group) in grouped">
            <tr class="font-weight-bold position-relative">
              <td>{{ group }}</td>
              <td class="text-right">{{ getCategoryTotal(group) }}</td>
            </tr>

            <tr>
              <td colspan="2">
                <div class="row">
                  <div class="col-md-6 py-3">
                    <div class="panel">
                      <piechart :chart-data="generateChartData(group, items)" :options="individualChartOpts" :ref="`chart-${hashCode(group)}`" />
                    </div>
                  </div>

                  <div class="col-md-6 mt-3 mt-md-0">
                    <table class="table table-sm bg-white">
                      <tbody>
                        <tr v-for="(item,index) in items" class="bg-white">
                          <td :title="item.original" class="bg-white">
                            <a href="#" class="d-block border-bottom-0" @click.prevent="toggleData(group, item.item, index)">
                              <span style="height: 20px; width: 20px;"
                                :style="`background-color: #${intToRGB(hashCode(item.item))}`"
                              >&nbsp;</span>

                              <template v-if="filtered.indexOf(item.item.toLowerCase()) > -1">
                                <s>{{ item.item }}</s>
                              </template>
                              <template v-else>
                                {{ item.item }}
                              </template>
                            </a>
                          </td>
                          <td class="text-right small bg-white">
                            <span class="text-muted">qty</span> {{ item.quantity }}<br/>
                            <span class="text-muted">@</span> {{ formatCurrency(item.individual) }}<br/>
                            <span class="border-top">
                              <span class="text-muted">total</span> {{ formatCurrency(item.cost) }}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </template>
    <template v-if="view === 'chart'">
      <piechart :chart-data="chartData" :options="mainChartOpts" ref='main-chart' />
    </template>
  </div>
</template>

<style lang="scss">
  .surviving-chd {
    .cochditusa {
      .counter {
        font-size: 3.5rem;
        font-weight:bold;
      }
    }
    .table {
      tr {
        display: table;
        width: 100%;
        table-layout: fixed;
      }
      tbody {
        table-layout: fixed;
        display: block;
        width: 100%;
      }
      td {
        text-transform: lowercase;
      }
    }
  }
  .redacted {
    position: relative;
    white-space: pre;
    &:after {
      background: black;
      border-radius: 0.1em;
      box-shadow: 0 0 1px rgba(0,0,0,0.35);
      content: " ";
      width: 100%;
      height: 1.2em;
      left: 0;
      position: absolute;
      transform: skewY(-5deg) rotate(5deg);
    }
  }
</style>

<script>
import _ from 'lodash'
import moment from 'moment'
import providerBills from '~/static/2-weeks-in-the-icu-as-a-baby-born-with-congenital-heart-disease.json'
import piechart from './piechart.vue'

export default {
  data () {
    const self = this;
    return {
      counter: 0,
      current: null,
      view: 'table',

      filtered: [],

      chartDatav: {
        labels: [],
        datasets: []
      },

      chartData: {
        labels: [],
        datasets: []
      },

      individualChartOpts: {
        responsive: false,
        maintainAspectRatio: true,
        legend: {
            display: false
        },
        tooltips: {
            callbacks: {
               label: (tooltipItem) =>{
                  return tooltipItem.yLabel;
               }
            }
        },
        onClick: (e, data) => {
          const item = data[0];
          if (item) {
            item.hidden = true;
            item._chart.update();
            self.filtered.push(item._view.label.toLowerCase());
          }
        },

        tooltips: {
          callbacks: {
            label: (item, data) => {
              const { index } = item;
              const label = data.labels[index];
              const value = data.datasets[0].data[index];
              return `${label} - ${self.formatCurrency(value)}`;
            }
          }
        },
      },

      mainChartOpts: {
        responsive: true,
        maintainAspectRatio: true,
        onClick: (e, data) => {
          const item = data[0];
          if (item) {
            item.hidden = true;
            item._chart.update();
          }
        },

        tooltips: {
          callbacks: {
            label: (item, data) => {
              const { index } = item;
              const label = data.labels[index];
              const value = data.datasets[0].data[index];
              return `${label} - ${self.formatCurrency(value)}`;
            }
          }
        },
      }
    }
  },

  computed: {
    grouped () {
      const datasets = [];
      const colors = [];
      const self = this;
      const result = this.bills.reduce((r, { item, cost, category }) => {
        let fresh = item;

        const regex = new RegExp(/^[^\(]+(?=)/, 'gmi');
        let name = fresh.match(regex)[0].split(' - ')[0];

        var temp = r.find(o => o.item === name);
        if (!temp) {
            r.push({ item: name, original: fresh, cost, quantity: 1, category, individual: cost });
        } else {
            temp.quantity += 1;
            temp.cost += cost;
        }
        return r;
      }, []);


      const sorted = _.sortBy(result, 'individual');

      let grouped = _.groupBy(sorted, 'category');

      for (const group in grouped) {
        const values = grouped[group];
        self.chartData.labels.push(group);
        let dataset = _.sumBy(values, 'cost');
        datasets.push(dataset)
        colors.push(`#${self.intToRGB(self.hashCode(group))}`);
      }

      self.chartData.datasets = [{
        label: 'dataset-1',
        backgroundColor: colors,
        data: datasets
      }];

      return grouped;
    },

    bills () {
      return providerBills;
    },

    total () {
      return _.sumBy(this.bills, 'cost').toFixed(0);
    }
  },

  mounted () {
    window.setInterval(() => {
      if (this.counter != this.total) {
        let change = (this.total - this.counter) / 10
        change = change >= 0 ? Math.ceil(change) : Math.floor(change)
        this.counter = this.counter + change
      }
    }, 20)
  },

  methods: {
    toggleData(group, label, index) {
      const self = this;

      const ci =  this.$refs[`chart-${self.hashCode(group)}`][0]._data;
      const chart = ci._chart;

      try {
        const meta = chart.getDatasetMeta(0);
        meta.data[index].hidden = ! meta.data[index].hidden;

        if (self.filtered.indexOf(label.toLowerCase()) > -1) {
          self.filtered = self.filtered.filter(item => item !== label.toLowerCase())
        } else {
          self.filtered.push(label.toLowerCase());
        }

        chart.update();
      } catch (e) {
        console.log(e);
      }
    },

    generateChartData(group, items) {
      const datasets = [{ labels: [], backgroundColor: [], data: [] }];

      const data = [];
      const colors = [];
      const labels = [];
      const self = this;

      for (const idx in items) {
        const item = items[idx];
        labels.push(item.item);
        data.push(item.cost)
        colors.push(`#${self.intToRGB(self.hashCode(item.item))}`);
      }

      datasets[0].backgroundColor = colors;
      datasets[0].data = data;

      return { datasets, labels };
    },

    hashCode(str) {
        var hash = 0;
        for (var i = 0; i < str.length; i++) {
           hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        return hash;
    },
    intToRGB(i){
        var c = (i & 0x00FFFFFF)
            .toString(16)
            .toUpperCase();

        return "00000".substring(0, 6 - c.length) + c;
    },
    formatCurrency (value) {
      return `$ ${Number((value).toFixed(2)).toLocaleString()}`
    },
    formatDate (datetime) {
      return moment(datetime).format('YYYY-MM-DD')
    },
    calculatRecurringInsurance (year) {
      const now = moment()
      const { commenced, frequency, cost } = this.insurance[`year-${year}`]

      let weeks = moment.duration(now.diff(moment(commenced))).asWeeks()

      if (now.year() !== year) {
        const endOfYear = moment(`${year}-12-31`)
        weeks = moment.duration(endOfYear.diff(moment(commenced))).asWeeks()
      }

      return ((weeks / frequency) * cost).toFixed(0)
    },
    getCategoryTotal (category) {
      const total = _.sumBy(_.filter(this.bills, e => e.category === category), 'cost');
      return this.formatCurrency(total);
    },
  }
}
</script>
