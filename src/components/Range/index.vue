<template>
  <div class="progress-bar" ref="progressBar">
    <div class="bar-inner">
      <div class="progress" ref="progress"></div>
      <div class="progress-btn-wrapper" ref="progressBtn" @touchstart.stop.prevent="prgTouchStart" @touchmove.stop.prevent="prgTouchMove" @touchend="prgTouchEnd">
        <div class="progress-btn"></div>
      </div>
    </div>
  </div>
</template>

<script>
const progressBtnWidth = 16
export default {
  created () {
    this.touch = {}
  },
  methods: {
    prgTouchStart (e) {
      this.touch.init = true
      // 滑动开始X坐标
      this.touch.startX = e.touches[0].clientX
      // 滑动开始时 进度条已有的长度
      this.touch.left = this.$refs.progress.clientWidth
    },
    prgTouchMove (e) {
      if (!this.touch.init) {
        return
      }
      let deltaX = e.touches[0].clientX - this.touch.startX
      let progressWidth = Math.min(Math.max(0, (this.touch.left + deltaX)), (this.$refs.progressBar.clientWidth))
      this.setOffsetWidth(progressWidth)
    },
    prgTouchEnd () {
      if (!this.touch.init) {
        return
      }
      this.touch.init = false
      this._triggerPercent()
    },
    setOffsetWidth (val) {
      // 设置进度条和按钮 位置
      this.$refs.progress.style.width = `${val}px`
      this.$refs.progressBtn.style['transform'] = `translate3d(${val}px, 0, 0)`
    },
    _triggerPercent () {
      // 获取百分比，emit到上一个组件
      let barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth / 2
      let perWidth = this.$refs.progress.clientWidth
      console.log(barWidth, perWidth)
    }
  }
}
</script>

<style>
@import url("../../assets/style/index.css");
.bar-inner {
  position: relative;
  height: 4px;
  background: rgba(0, 0, 0, 0.3);
}
.progress {
  position: absolute;
  height: 100%;
  background: #1e7e71;
}
.progress-btn-wrapper {
  position: absolute;
  left: -15px;
  top: -13px;
  width: 30px;
  height: 30px;
}

.progress-btn {
  position: relative;
  top: 7px;
  left: 7px;
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  border: 3px solid #9ed4cd;
  border-radius: 50%;
  background: #1e7e71;
}
</style>
