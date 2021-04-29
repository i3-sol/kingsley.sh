<template>
  <div class="surviving-chd">
    <h2 class="h3 text-uppercase text-left w-75">
      money spent on healthcare to date in the USA.
    </h2>
    <div class="cochditusa text-left w-75">
      <span class="counter">{{ formatCurrency(counter) }}</span>
    </div>

    <table class="table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th class="text-right">
            Amount
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="bill in bills">
          <td>{{ bill.date }}</td>
          <td>
            <span class="d-block text-uppercase text-muted small text-nowrap">{{ bill.provider }}</span>
            <small class="text-nowrap">{{ bill.description }}</small>
          </td>
          <td class="text-right">
            {{ formatCurrency(bill.amount) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss">
  .surviving-chd {
    .cochditusa {
      .counter {
        font-size: 3rem;
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
        height: 500px;
        table-layout: fixed;
        overflow: auto;
        display: block;
        width: 100%;
      }
      td {
        text-transform: lowercase;
      }
    }
  }
</style>

<script>
import _ from 'lodash'
import moment from 'moment'
import providerBills from '~/content/chd-bills.json'

export default {
  data () {
    return {
      counter: 0,
      years: [2020, 2021],
      insurance: {
        'year-2020': {
          commenced: '2020-09-10',
          cost: 320,
          frequency: 2
        },
        'year-2021': {
          commenced: '2021-01-01',
          cost: 345,
          frequency: 2
        }
      }
    }
  },

  computed: {
    bills () {
      const now = moment()

      const bills = providerBills.sort((a, b) => {
        return moment(b.date).diff(a.date)
      })

      for (const year of this.years) {
        const { commenced, frequency, cost } = this.insurance[`year-${year}`]

        bills.unshift({
          date: now.year() === year ? `${year} - recurring` : year,
          description: `${this.formatCurrency(cost)} every ${frequency} weeks, since ${this.formatDate(commenced)}`,
          provider: 'gross paycheck deduction',
          amount: Number(this.calculatRecurringInsurance(year))
        })
      }

      return bills
    },

    total () {
      return _.sumBy(this.bills, 'amount')
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
    formatCurrency (value) {
      return `$ ${Number((value).toFixed(1)).toLocaleString()}`
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
    }
  }
}
</script>
