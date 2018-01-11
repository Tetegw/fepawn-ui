<template>
  <div>
    <span v-for="(item, index) in animeDataObj" :key="index"> {{index}}:{{item}} </span>
  </div>
</template>

<script>
import anime from 'animejs'
export default {
  props: {
    animeDataObj: {
      type: Object,
      default () {
        return {
          prop1: 0,
          prop2: '0%'
        }
      }
    }
  },
  mounted () {

  },
  methods: {
    start () {
      anime({
        targets: this.animeDataObj,
        prop1: 50,
        prop2: '100%',
        easing: 'linear',
        round: 1
      })
    }
  }
}
</script>

<style>

</style>
