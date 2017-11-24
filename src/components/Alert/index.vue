<template>
  <div class="fepawn-alert" >
    <transition name="fade">
      <div class="mask" v-show="alertShow" @click.stop.prevent="cancel"></div>
    </transition>
    <transition name="pulse">
      <div class="content" v-show="alertShow">
        <div class="middle">
          <div class="middle-title">{{title}}</div>
          <div class="middle-content">{{content}}</div>
        </div>
        <div class="confirm border-top-1px" >
          <div v-show="hasCancel" class="cancel border-right-1px" v-touch-active @click.stop.prevent="cancel">{{cancelValue}}</div>
          <div v-touch-active @click.stop.prevent="confirm">{{confirmValue}}</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import TouchActive from '@/directives/touchActive'
export default {
  data () {
    return {
      alertShow: this.value
    }
  },
  created () {
    this.alertShow = this.value
  },
  watch: {
    value () {
      this.alertShow = this.value
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      dafault: ''
    },
    content: {
      type: String,
      default: '网络繁忙，请稍候再试！'
    },
    confirmValue: {
      type: String,
      default: '确 定'
    },
    cancelValue: {
      type: String,
      default: '取 消'
    },
    hasCancel: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    confirm () {
      this.alertShow = false
      this.$emit('input', this.alertShow)
      this.$emit('confirm')
    },
    cancel () {
      this.alertShow = false
      this.$emit('input', this.alertShow)
      this.$emit('cancel')
    }
  },
  directives: {
    'touch-active': TouchActive
  }
}

// v-model双向绑定 显示隐藏(必传)
// :title 标题(选传，默认不显示)
// :content 主要内容(必传)
// :confirmValue 确定按钮的文案(选传，默认确定)
// :hasCancel 是否显示取消按钮(选传，默认不显示)
// :cancelValue 取消按钮的文案(选传，默认取消)
// @confirm 监听点击确定事件
</script>

<style scoped>
@import url('../../assets/style/index.css');
.fepawn-alert .mask{
  position: fixed;
  z-index: 4999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
}
.content{
  position: fixed;
  z-index: 5000;
  width: 80%;
  max-width: 300px;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  background-color: #fff;
  text-align: center;
  overflow: hidden;
  border-radius: 3px;
}
/* fade 动画 */
.fade-enter, .fade-leave-to{
  opacity: 0;
}
.fade-enter-active, .fade-leave-active{
  transition: all 0.6s;
}
.pulse-enter{
  opacity: 0;
  transform: translate3d(-50%, -50%, 0) scale(1.08);
}
.pulse-leave-to{
  opacity: 0;
  transform: translate3d(-50%, -50%, 0) scale(0.90);
}
.pulse-enter-active, .pulse-leave-active{
  transition: all 0.3s;
}

.middle{
  padding: 5% 10%;
}
.middle-title{
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  color: #000;
}
.middle-content{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5% 0;
  min-height: 40px;
  font-size: 16px;
  line-height: 1.5;
  color: #444;
  word-wrap: break-word;
}
.confirm{
  font-size: 18px;
  line-height: 48px;
  text-align: center;
  color: #000;
  display: flex;
}
.confirm div{
 flex: 1 1 auto;
}

[data-touch].active {
  background: #f0f0f0
}
</style>
