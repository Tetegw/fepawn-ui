<template>
  <div class="full-page">
    <div class="water-ripple-wrap">
      <water-ripple :value="value" :wrapSize="wrapSize"></water-ripple>
    </div>
    <input class="range" type="range" v-model="rangeValue" min="0" max="100" @change="rangeChange">
    <div>当前比例：{{value}}</div>
    <bubble :y="10"></bubble>
  </div>
</template>

<script>
import WaterRipple from '@/components/WaterRipple'
import Bubble from '@/components/WaterRipple/bubble'
export default {
  data () {
    return {
      value: 70,
      wrapSize: 120,
      rangeValue: 70
    }
  },
  methods: {
    rangeChange () {
      this.value = Number(this.rangeValue)
    }
  },
  components: {
    'water-ripple': WaterRipple,
    bubble: Bubble
  }
}
</script>

<style>
@import url('../../assets/style/index.css');
.range {
  height: 30px;
}
.water-ripple-wrap {
  height: 200px;
  padding: 20px;
}
</style>
