<template>
  <div class="water-ripple" :style="{width: wrapSize + 'px', height: wrapSize + 'px' }">
    <div class="wrap" :style="{transform: 'translate3d(0, '+ wrapTop +'%, 0)', width: wrapSize + 'px', height: wrapSize + 'px' }">
      <div class="ripple-one"></div>
      <div class="ripple-two"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      wrapTop: 0
    }
  },
  props: {
    value: {
      type: Number,
      default: 100
    },
    wrapSize: {
      type: Number,
      default: 120
    }
  },
  created () {
    this.getWrapTop(this.value)
  },
  watch: {
    value (newVal, oldVal) {
      this.getWrapTop(newVal)
    }
  },
  methods: {
    getWrapTop (val) {
      let wrapTop = 0
      if (val === 100) {
        wrapTop = -10
      } else if (val === 0) {
        wrapTop = 110
      } else {
        wrapTop = 95 - val
      }
      setTimeout(() => {
        this.wrapTop = wrapTop
      }, 20)
    }
  }
}
</script>

<style scoped>
.water-ripple{
  position: absolute;
  width: 120px;
  height: 120px;
  border: 5px solid #ffedbe;
  background: #ffefe7;
  border-radius: 50%;
  overflow: hidden;
}
.wrap{
  position: absolute;
  top: 0;
  width: 120px;
  height: 120px;
  transition: transform 1.5s;
  transform: translate3d(0, 0, 0)
  /* animation: dropDown 1.5s forwards; */
}
@keyframes dropDown {
  from{
    transform: translate3d(0, -10%, 0)
  }
  to{
    transform: translate3d(0, 38%, 0)
  }
}
.ripple-one{
  position: absolute;
  top: -10px;
  left: 0;
  width: 1292px;
  height: 300px;
  background: url('./ripple_one.png') no-repeat center top;
  animation: rippleOne linear infinite 8s;
}
@keyframes rippleOne {
  from{
    transform: translate3d(-1112px, 0, 0)    
  }
  to{
    transform: translate3d(-466px, 0, 0)        
  }
}
.ripple-two{
  position: absolute;
  top: 0;
  left: 0;
  width: 1095px;
  height: 300px;
  opacity: 0.7;
  background: url('./ripple_two.png') no-repeat center top;
  animation: rippleTwo linear infinite 7s;
}
@keyframes rippleTwo {
  from{
    transform: translate3d(-915px, 0, 0)            
  }
  to{
    transform: translate3d(-366px, 0, 0)                
  }
}
</style>
