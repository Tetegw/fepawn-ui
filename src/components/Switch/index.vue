<template>
  <div class="fepawn-switch">
    <input class="switchBtn" :class="{'disabled': disabled}" :style="{'fontSize': height}" type="checkbox" :disabled="disabled" ref="switch" v-model="checkedValue">
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#1e7e71'
    },
    height: {
      type: String,
      default: '20px'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    status: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      checkedValue: this.status
    }
  },
  mounted () {
    if (this.checkedValue) {
      this.$refs.switch.style.border = `1px solid ${this.color}`
      this.$refs.switch.style.backgroundColor = `${this.color}`
    }
  },
  watch: {
    status (newVal) {
      this.checkedValue = newVal
    },
    checkedValue (newVal, oldVal) {
      if (newVal) {
        this.$refs.switch.style.border = `1px solid ${this.color}`
        this.$refs.switch.style.backgroundColor = `${this.color}`
      } else {
        this.$refs.switch.style.border = '1px solid #DFDFDF'
        this.$refs.switch.style.backgroundColor = '#DFDFDF'
      }
      this.$emit('switch-change', newVal)
    }
  }
}
// :color 按钮选中时背景颜色(选传，字符串('#1e7e71')，默认#1e7e71)
// :height  按钮大小，按高度等比例缩放(选传，字符串('20px')，默认值20px)
// :disabled  按钮是否禁用(选传，布尔值，默认值false)
// :status  默认状态(选传，布尔值，默认值false)
// @switch-change  监听按钮点击状态
</script>

<style scoped>
@import url('../../assets/style/index.css');
.fepawn-switch{
  display: inline-block;
  vertical-align: middle;
}
.switchBtn{
  position: relative;
  appearance: none;
  width: 2.5em;
  height: 1.5em;
  border:  1px solid #DFDFDF;
  box-sizing: border-box;
  border-radius: 0.75em;
}
.switchBtn.disabled{
  opacity: 0.5;
}
.switchBtn::before{
  content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 2.4em;
    height: 1.4em;
    border-radius: 0.75em;
    background-color: #FDFDFD;
    transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
}
.switchBtn::after{
  content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 1.4em;
    height: 1.4em;
    border-radius: 0.75em;
    background-color: #FFFFFF;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
}
.switchBtn:checked{
  border: 1px solid #1e7e71;
  background-color: #1e7e71;
}
.switchBtn:checked::before{
    transform: scale(0);
}
.switchBtn:checked::after{
   transform: translateX(1.05em);
}
</style>
