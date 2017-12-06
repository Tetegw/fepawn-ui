<template>
  <div>
    <div class="pull-up-wrap">
      <b-scroll class="wrapper"
        :data="testData"
        :pulldown="true"
        :pullup="true"
        @pulldown="dowmLoadMore"
        @pullup="upLoadMore"
      >
        <ul class="content">
          <li v-for="(item, index) in testData" :key="index">{{item}}</li>
        </ul>
        <div class="loading-wrapper"></div>
      </b-scroll>
    </div>
    <div class="message">{{message}}
      <span v-show="downNum">{{downNum}}</span>
      <span v-show="upNum">{{upNum}}</span>
    </div>
  </div>
</template>

<script>
import BScroll from './bScroll'
export default {
  data () {
    return {
      testData: ['2', '12', '31', '32', '2', '12', '31', '32', '2', '12', '31', '32', '12', '31', '32', '2', '12', '31', '32', '2', '12', '31', '32', '12', '31', '32', '2', '12', '31', '32'],
      message: '',
      downNum: 0,
      upNum: 0
    }
  },
  methods: {
    dowmLoadMore () {
      console.log('下拉刷新')
      this.message = '下拉刷新'
      this.upNum = 0
      this.downNum++
    },
    upLoadMore () {
      console.log('上拉加载')
      this.message = '上拉加载'
      this.downNum = 0
      this.upNum++
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
  border: 1px solid #999;
}
ul.content {
  padding: 0 10px;
}
.content li {
  line-height: 30px;
  border-bottom: 1px solid #ccc;
}
.wrapper {
  height: 500px;
  overflow: auto;
}
.message{
  margin-top: 30px;
}
</style>
