<template>
  <div class="fepawn-buttonTab">
    <template v-for="(item, index) in indexArr">
      <div :key="index" class="item border-1px" :class="{'active': currentItem === index, 'justOneItem': indexArr.length === 1}" :style="{'fontSize': `${fontSize}px`, 'lineHeight': `${lineHeight}px`}" @click="checkedItem(index)">{{item}}</div>
    </template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentItem: 0
    }
  },
  props: {
    fontSize: {
      type: Number,
      default: 16
    },
    itemHeight: {
      type: Number,
      default: 0
    },
    indexArr: {
      type: Array,
      default () {
        return ['btn1', 'btn2']
      }
    }
  },
  created () {
    this.lineHeight = !this.itemHeight ? this.fontSize * 2 : this.itemHeight
  },
  watch: {
    fontSize () {
      this.lineHeight = !this.itemHeight ? this.fontSize * 2 : this.itemHeight
    }
  },
  methods: {
    checkedItem (index) {
      this.currentItem = index
      this.$emit('checkedItem', index)
    }
  }
}
// :fontSize="16"
// :itemHeight="34"
// :indexArr="buttonTabItemArr2"
// @checkedItem="checkedItem2"
</script>

<style scoped>
.fepawn-buttonTab{
  display: flex;
}
.fepawn-buttonTab .item{
  flex: 1 1 0;
  color: #999;
}
.fepawn-buttonTab .item::before{
  border-right: 0;
}
.fepawn-buttonTab .active{
  background: #ffe26d;
  color: #000;
}
 .fepawn-buttonTab .item:first-child, .fepawn-buttonTab .item:first-child::before{
  border-radius: 20em 0 0 20em;
}
.fepawn-buttonTab .item:last-child, .fepawn-buttonTab .item:last-child::before{
  border-radius: 0 20em 20em 0;
}
.fepawn-buttonTab .justOneItem, .fepawn-buttonTab .justOneItem::before{
  border-radius: 20em !important;
}
</style>
