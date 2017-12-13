<template>
  <div class="pullToLoadMore">
    <vertical-scroll
      ref="vScroll"
      :listData="listData"
      :pullDownRefresh="true"
      :pullUpLoad="true"
      @pullingDown="pullingDown"
    ></vertical-scroll>
  </div>
</template>

<script>
import verticalScroll from '@/components/BetterScroll/baseCom/verticalScroll'
export default {
  data () {
    return {
      listData: ['I is pullToLoadMore components', 'I is pullToLoadMore components', 'I is pullToLoadMore components', 'I is pullToLoadMore components', 'I is pullToLoadMore components', 'I is pullToLoadMore components', 'I is pullToLoadMore components', 'I is pullToLoadMore components', 'I is pullToLoadMore components', 'I is pullToLoadMore components', 'I is pullToLoadMore components', 'I is pullToLoadMore components', 'I is pullToLoadMore components', 'I is pullToLoadMore components', 'I is pullToLoadMore components', 'I is pullToLoadMore components', 'I is pullToLoadMore components', 'I is pullToLoadMore components', 'I is pullToLoadMore components', 'I is pullToLoadMore components', 'I is pullToLoadMore components']
    }
  },
  methods: {
    pullingDown () {
      // 模拟更新数据
      console.log('下拉加载数据...')
      setTimeout(() => {
        if (Math.random() > 0.5) {
          // 如果有新数据
          this.listData.unshift(`当前时间：${new Date().toLocaleString()}`)
        } else {
          // 如果没有新数据
          this.$refs.vScroll.forceUpdate()
        }
      }, 2000)
    }
  },
  components: {
    'vertical-scroll': verticalScroll
  }
}
</script>

<style>
.pullToLoadMore{
  position: relative;
  height: 500px;
  margin-top: 20px;
}
</style>
