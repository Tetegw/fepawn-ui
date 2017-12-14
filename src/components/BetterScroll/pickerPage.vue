<template>
  <div class="bscroll-picker">
    <div class="one-column column">one-column</div>
    <picker></picker>
    <div class="two-column column">two-column</div>
    <div class="three-column column">three-column</div>
    <div class="linkage-column column">linkage-column</div>
  </div>
</template>

<script>
import Picker from '@/components/BetterScroll/baseCom/picker'
export default {
  components: {
    'picker': Picker
  }
}
</script>

<style scoped>
.bscroll-picker{
  margin-top: 10px;
  padding-top: 20px; 
  height: 500px;
  background-color: #d9d9d9;
}
.column{
  width: 80%;
  line-height: 30px;
  margin: 0 auto 40px;
  background-color: #fff;
}
</style>
