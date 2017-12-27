<template>
	<div>
    <div class="dial-wrapper">
        <v-dial
        v-if="showDial"
        :step="5"
        :timeOut="10"
        :rate="Number(rate)"
      ></v-dial>
      <div class="title">个人信用卡账户</div>
      <div class="amount">可用额度</div>
      <div class="money"><span>￥</span>3,467,343.66</div>
      <div class="split border-bot-1px"></div>
      <div class="totalAmount"><span>$</span>3,467,343.66</div>
    </div>
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
@import url('../../assets/style/index.css');
.dial-wrapper{
  position: relative;
  text-align: center;
}
.dial-wrapper .title{
  padding-top: 6%;
  color: #ffffff;
  font-size: 14px;
}
.dial-wrapper .amount{
  font-size: 16px;
  color: #fff;
  padding-top: 21%;
}
.dial-wrapper .money{
  font-size: 24px;
  color: #fff;
  padding-top: 5%;
  font-weight: bold;
}
.dial-wrapper .money span{
  font-size: 14px;
}
.dial-wrapper .split{
  width: 40%;
  margin: 2% auto 0;
}
.dial-wrapper .totalAmount{
  font-size: 14px;
  color: #fff;  
  padding-top: 2%;  
}
.input{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}
.input-item{
  margin-top: 10px;
  padding: 5px;
  border: 1px solid #d9d9d9;
}
</style>
