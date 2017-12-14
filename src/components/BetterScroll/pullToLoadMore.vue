<template>
  <div class="pullToLoadMore">
    <vertical-scroll
      ref="vScroll"
      :listData="listData"
      :pullDownRefresh="true"
      :pullUpLoad="true"
      @pullingDown="pullingDown"
      @pullingUp="pullingUp"
    ></vertical-scroll>
  </div>
</template>

<script>
import verticalScroll from '@/components/BetterScroll/baseCom/verticalScroll'
export default {
  data () {
    return {
      listData: ['I is pullToLoadMore components', 'I is pullToLoadMore components', 'I is pullToLoadMore components']
    }
  },
  methods: {
    pullingDown () {
      // 模拟更新数据
      console.log('下拉刷新数据...')
      setTimeout(() => {
        if (Math.random() > 0.5) {
          // 如果有新数据
          this.listData.unshift(`当前时间：${new Date().toLocaleString()}`)
        } else {
          // 如果没有新数据
          this.$refs.vScroll.forceUpdate()
        }
      }, 1500)
    },
    pullingUp () {
      // 更新数据
      console.log('上拉加载数据...')
      setTimeout(() => {
        if (Math.random() > 0.5) {
          // 如果有新数据
          let newPage = []
          for (let i = 0; i < 10; i++) {
            newPage.push(`${new Date().toLocaleString()}`)
          }
          this.listData = this.listData.concat(newPage)
        } else {
          // 如果没有新数据
          this.$refs.vScroll.forceUpdate()
        }
      }, 1500)
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
  border: 1px solid #d9d9d9;
}
</style>
