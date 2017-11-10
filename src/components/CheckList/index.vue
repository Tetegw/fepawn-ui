<template>
  <div class="fepawn-check-list">
    <div><input type="checkbox" v-model="checkValue" value="北京">北京</div>
    <div><input type="checkbox" v-model="checkValue" value="上海">上海</div>
    <div><input type="checkbox" v-model="checkValue" value="深圳">深圳</div>
    <div><input type="checkbox" v-model="checkValue" value="苏州">苏州</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checkValue: []
    }
  },
  watch: {
    checkValue () {
      console.log(this.checkValue)
    }
  }
}
</script>

<style>
</style>
