<template>
  <div class="full-page">
    <div class="water-ripple-wrap">
      <water-ripple :value="value" :wrapSize="wrapSize" class="water-ripple"></water-ripple>
    </div>
    <input class="range" type="range" v-model="rangeValue" min="0" max="100" @change="rangeChange">
    <div>当前比例：{{value}}</div>
  </div>
</template>

<script>
import WaterRipple from '@/components/WaterRipple'
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
    'water-ripple': WaterRipple
  }
}
</script>

<style scoped>
@import url('../../assets/style/index.css');
.range {
  height: 30px;
}
.water-ripple-wrap {
  height: 200px;
  padding: 20px;
}
.water-ripple-wrap .water-ripple{
  left: 50%;
  top: 10%;
  transform: translate(-50%)
}
</style>
