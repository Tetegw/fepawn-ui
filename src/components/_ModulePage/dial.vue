<template>
	<div>
    <v-dial
      v-if="showDial"
      :step="5"
      :timeOut="10"
      :rate="Number(rate)"
    ></v-dial>
    <div class="input">
      <input class="input-item" type="number" v-model="rate" @keydown.enter="drawCanvas">
      <button class="input-item" @click="drawCanvas">重新渲染</button>
    </div>
  </div>
</template>

<script>
import Dial from '@/components/Dial'
export default {
  data () {
    return {
      rate: 0.5,
      showDial: true
    }
  },
  methods: {
    drawCanvas () {
      console.log('object')
      this.showDial = false
      this.$nextTick(() => {
        this.showDial = true
      })
    }
  },
  components: {
    'v-dial': Dial
  }
}
</script>

<style scoped>
.input{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}
.input-item{
  margin-top: 10px;
  border: 1px solid #d9d9d9;
}
</style>
