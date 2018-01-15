<template>
  <div class="full-page bgfbf9fe">
    <v-range></v-range>
  </div>
</template>

<script>
import Range from '@/components/Range'
export default {
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
