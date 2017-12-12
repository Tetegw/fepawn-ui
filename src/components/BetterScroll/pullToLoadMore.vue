<template>
  <div>
    <div class="pull-up-wrap">
      <b-scroll class="wrapper border-1px"
        :data="testData"
        :pulldown="true"
        :pullup="true"
        @pulldown="dowmLoadMore"
        @pullup="upLoadMore"
        @pullingDown="pullingDown"
      >
        <ul class="content">
          <li class="border-bot-1px" v-for="(item, index) in testData" :key="index">{{item}}</li>
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
      testData: ['I am the No.1 line', 'I am the No.2 line', 'I am the No.3 line', 'I am the No.4 line', 'I am the No.5 line', 'I am the No.6 line', 'I am the No.7 line', 'I am the No.8 line', 'I am the No.9 line', 'I am the No.10 line', 'I am the No.11 line', 'I am the No.12 line', 'I am the No.13 line', 'I am the No.14 line', 'I am the No.15 line', 'I am the No.16 line', 'I am the No.17 line', 'I am the No.18 line'],
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
    },
    pullingDown () {
      console.log('object')
    }
  },
  components: {
    'b-scroll': BScroll
  }
}
</script>

<style>
@import url('../../assets/style/index.css');
.pull-up-wrap{
  margin: 20px 20px 0;
}
.wrapper {
  height: 400px;
  overflow: auto;
}
ul.content {
  padding: 0 10px;
  text-align: left;
}
.content li {
  line-height: 50px;
  padding-left: 10px;
}
ul, li{
  list-style: none;
  margin: 0;
  padding: 0;
}
.message{
  margin-top: 30px;
}
</style>
