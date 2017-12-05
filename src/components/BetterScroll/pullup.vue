<template>
  <div class="pull-up-wrap">
    <b-scroll
      :data="testData"
      :pulldown="pulldown"
      :listenScroll="listenScroll"
      @pulldown="loadMore"
      @scroll="scrollEvent"
    >
      <ul class="content">
        <li v-for="(item, index) in testData" :key="index">{{item}}</li>
      </ul>
      <div class="loading-wrapper"></div>
    </b-scroll>
  </div>
</template>

<script>
import BScroll from './bScroll'
export default {
  data () {
    return {
      testData: ['2', '12', '31', '32', '2', '12', '31', '32', '2', '12', '31', '32'],
      pulldown: true,
      listenScroll: true
    }
  },
  methods: {
    loadMore () {
      console.log('object')
    },
    scrollEvent (pos) {
      console.log(pos)
    }
  },
  components: {
    'b-scroll': BScroll
  }
}
</script>

<style>
.pull-up-wrap{
  height: 100px;
  overflow: auto;
}
</style>
