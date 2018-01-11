<template>
  <div class="full-page">
    <div class="count-up-wrap">
      <p class="title">countup.js</p>
      <div class="count-item">
        <p class="item-title">默认开启</p>
        <count-up :options="options" ref="countUpOne"></count-up>
      </div>
      <div class="count-item">
        <p class="item-title">点击开启</p>
        <count-up :endVal="8080" ref="countUpTwo"></count-up>
        <button @click="countUpTwoStart">开&nbsp;始</button>
      </div>
      <p class="title">anime.js</p>
      <div class="count-item anime-item">
        <p class="item-title">默认开启</p>
        <count-up-anime ref="countUpThree"></count-up-anime>
      </div>
      <div class="count-item anime-item">
        <p class="item-title">点击开启</p>
        <count-up-anime ref="countUpFour"></count-up-anime>
        <button @click="countUpFourStart">开&nbsp;始</button>
      </div>
    </div>
  </div>
</template>

<script>
import CountUp from '@/components/CountUp/index.vue'
import CountUpAnime from '@/components/CountUp/anime_count.vue'
export default {
  data () {
    return {
      options: {
        prefix: '$ '
      }
    }
  },
  mounted () {
    // 初始化开启countUp组件运动
    this.$refs.countUpOne.start()
    this.$refs.countUpThree.start()
  },
  methods: {
    countUpTwoStart () {
      this.$refs.countUpTwo.start()
    },
    countUpFourStart () {
      this.$refs.countUpFour.start()
    }
  },
  components: {
    'count-up': CountUp,
    'count-up-anime': CountUpAnime
  }
}
</script>

<style>
@import url("../../assets/style/index.css");
.count-up-wrap {
  padding: 10px 0;
}
.title {
  margin-top: 20px;
  text-align: left;
  padding-left: 20px;
  font-size: 30px;
}
.count-item {
  font-size: 50px;
  font-weight: bold;
  color: #42b983;
  margin-top: 20px;
}
.anime-item {
  font-size: 20px;
}
.item-title {
  color: #2c3e50;
  font-size: 16px;
  text-align: left;
  padding-left: 20px;
  margin: 15px 0;
}
.count-item button {
  font-size: 16px;
  font-weight: bold;
  display: block;
  margin: 20px auto 0;
  height: 30px;
  width: 80%;
  background: #42b983;
  border-radius: 5px;
  border: none;
  color: #fff;
}
.count-item button:active {
  background: #2f9a69;
}
</style>
