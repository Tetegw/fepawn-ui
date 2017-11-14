<template>
  <div class="fepawn-toast">
    <div class="toast-wrap" v-show="toastShow">
      <div class="icon" v-show="showIcon" >
        <span class="iconfont icon-toast"></span>
      </div>
      <div class="info">{{info}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      toastShow: this.show,
      timeout: ''
    }
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    info: {
      type: String,
      default: ''
    },
    time: {
      type: Number,
      default: 2000
    },
    showIcon: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    show (newVal) {
      if (newVal) {
        // 显示
        this.toastShow = newVal
        this.$emit('onShow')
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.toastShow = false
          this.$emit('onHide')
        }, this.time)
      }
    }
  }
}
</script>

<style>
@import url('../../assets/style/index.css');
.toast-wrap{
  position: fixed;
  z-index: 5001;
  top: 40%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  min-width: 112px;
  max-width: 240px;
  background-color: rgba(17, 17, 17, 0.7);
  border-radius: 5px;
}
.toast-wrap .icon{
  margin: 15px auto 0;
  width: 38px;
  height: 38px;
}
.toast-wrap .icon span{
  font-size: 38px;
  line-height: 38px;
  color: #DFDFDF;
}
.toast-wrap .info{
  text-align: center;
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  padding: 15px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
