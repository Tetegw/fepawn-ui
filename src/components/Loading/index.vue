<template>
  <div class="fepawn-loading" v-show="show">
    <div class="content">
      <div class="img" :class="{'noInfo': !info}">
        <span class="iconfont icon-loading"></span>
      </div>
      <div class="info">{{info}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    info: {
      type: String,
      default: ''
    }
  }
}
// :show 显示隐藏(必传)
// :info 显示的文案(选传，默认无文案)
</script>

<style scoped>
@import url('../../assets/style/index.css');
.fepawn-loading{
  position: fixed;
  z-index: 5001;
  top: 40%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 112px;
  padding-top: 112px;
  background-color: rgba(17, 17, 17, 0.7);
  border-radius: 5px;
}
.fepawn-loading .img{
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 38px;
  height: 38px;
}
.fepawn-loading .noInfo{
  top: 50%;
}
.fepawn-loading .img span {
  display: inline-block;
  font-size: 38px;
  line-height: 38px;
  color: #DFDFDF;
  animation: loadingRotate 1s steps(9) infinite;
}
@keyframes loadingRotate {
  0% {
    transform: rotate3d(0, 0, 1, 0deg);
  }
  100% {
    transform: rotate3d(0, 0, 1, 360deg);
  }
}
.fepawn-loading .info{
  position: absolute;
  bottom: 15px;
  left: 0;
  right: 0;
  text-align: center;
  color: #fff;
  font-weight: 500;
  font-size: 18px;
}
</style>
