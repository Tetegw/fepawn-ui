<template>
  <div class="full-page bgfbf9fe">
    <v-range v-model="myRange"></v-range>
    <div>{{Math.min(myRange, 1).toFixed(2)}}</div>
  </div>
</template>

<script>
import Range from '@/components/Range'
export default {
  data () {
    return {
      myRange: 0.45
    }
  },
  components: {
    'v-range': Range
  }
}
</script>

<style>
@import url('../../assets/style/index.css');
.full-page.bgfbf9fe{
  background-color:#fbf9fe;
  padding: 20px;
}
</style>
