<template>
  <div class="surviving-chd">
    <div class="cochditusa">
      <span class="counter">{{ formatCurrency(counter) }}</span>
    </div>

    <table class="table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody class="">
        <tr v-for="bill in bills">
          <td>{{ bill.date }}</td>
          <td>
            <span class="d-block text-uppercase text-muted small">{{ bill.provider }}</span>
            {{ bill.description }}
          </td>
          <td>{{ formatCurrency(bill.amount) }}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<style lang="scss">
  .surviving-chd {
    .cochditusa {
      .counter {
        font-size: 5rem;
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
import _ from 'lodash';
import moment from 'moment';
import providerBills from '~/content/chd-bills.json'

export default {
  data() {
    return {
      counter: 0,

      insurance: {
        commenced: '2020-09-10',
        cost: 320,
        frequency: 2
      }
    }
  },

  methods: {
    formatCurrency(value) {
      return `$ ${Number((value).toFixed(1)).toLocaleString()}`;
    },
    formatDate(datetime) {
      return moment(datetime).format('YYYY-MM-DD')
    },
  },

  computed: {
    bills () {
      const { commenced, frequency, cost } = this.insurance;

      let bills = providerBills.sort((a, b) => {
        return moment(b.date).diff(a.date);
      });

      bills.unshift({
        "date": "recurring",
        "description": `${this.formatCurrency(cost)} every ${frequency} weeks, since ${this.formatDate(commenced)}`,
        "provider": "Pre-tax paycheck deduction",
        "amount": Number(this.recurring)
      });

      return bills;
    },

    total() {
      return _.sumBy(this.bills, 'amount');
    },

    recurring() {
      const now = moment();
      const { commenced, frequency, cost } = this.insurance;
      const weeks = moment.duration(now.diff(moment(commenced))).asWeeks();

      return ((weeks / frequency) * cost).toFixed(0);
    },
  },

  mounted() {
    window.setInterval((() => {
      if(this.counter != this.total){
        var change = (this.total - this.counter) / 10;
        change = change >= 0 ? Math.ceil(change) : Math.floor(change);
        this.counter = this.counter + change;
      }
    }).bind(this), 20);
  },
}
</script>

