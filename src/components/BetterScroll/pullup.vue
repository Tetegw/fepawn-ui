<template>
  <div class="pull-up-wrap">
    <b-scroll class="wrapper"
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
      console.log('loadMore')
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
ul, li{
  list-style: none;
  margin: 0;
  padding: 0;
}
.pull-up-wrap{
  margin-top: 20px;
}
.wrapper {
  height: 200px;
  overflow: auto;
}
</style>
