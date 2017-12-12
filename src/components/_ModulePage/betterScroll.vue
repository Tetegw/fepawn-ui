<template>
  <div class="better-scroll">
    <router-link to="/betterScroll/pullToLoadMore">下拉刷新上拉加载</router-link>
    <router-view></router-view>
    <bubble :y="40"></bubble>
  </div>
</template>

<script>
import Bubble from '@/components/BetterScroll/bubble'
export default {
  components: {
    'bubble': Bubble
  }
}
</script>

<style>

</style>
