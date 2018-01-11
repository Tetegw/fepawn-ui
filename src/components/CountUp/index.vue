<template>
  <span>
    <span ref="countSpan">{{startVal}}</span>
  </span>
</template>

<script>
import CountUp from 'countup.js'
export default {
  props: {
    startVal: {
      type: Number,
      default: 0
    },
    endVal: {
      type: Number,
      default: 1000
    },
    Decimals: {
      type: Number,
      default: 0
    },
    Duration: {
      type: Number,
      default: 2
    },
    options: {
      type: Object,
      default () {
        return {
          useEasing: true,
          useGrouping: true,
          separator: ',',
          decimal: '.',
          prefix: '',
          Suffix: ''
        }
      }
    }
  },
  mounted () {
    this._countUp = new CountUp(this.$refs.countSpan, this.startVal, this.endVal, this.Decimals, this.Duration, this.options)
    if (this._countUp.error) {
      console.error(this._countUp.error)
    }
  },
  methods: {
    start () {
      this._countUp.start()
    }
  }
}
</script>

<style>

</style>
