<template>
  <div>
    <input type="text" name="password" class="pwd"  @click="lowerVisible = true"  :value="lowerCaseVal" @input="change($event)">
    <fepawn-keyboard :value.sync="lowerCaseVal" :visible.sync="lowerVisible" @handle-click="handleClick">
      辉哥的键盘组件
    </fepawn-keyboard>
  </div>
</template>

<script>
import keyboard from '../keyboard'
export default {
  data () {
    return {
      lowerCaseVal: 'www',
      lowerVisible: false
    }
  },
  methods: {
    change (e) {
      this.lowerCaseVal = e.target.value
    },
    showKey () {
      this.lowerVisible = !this.lowerVisible
    },
    handleClick (val) {
      console.log('最终结果是', val)
    }
  },
  components: {
    'fepawn-keyboard': keyboard
  }
}
</script>

<style scoped>
.pwd{
  width: 300px;
  height: 40px;
  border: 1px solid #999;
  line-height: 40px;
}
</style>
