<template>
  <div class="action-sheet" v-show="actionShow" @click.stop.prevent="cancelActionSheet">
    <transition name="fade">
      <div class="action-sheet-mask fullPage" v-show="actionShow" @click.stop.prevent="cancelActionSheet"></div>
    </transition>
    <transition name="slideUp">
      <div class="action-sheet-content" v-show="actionShow">
        <ul>
          <li v-touch-active class="border-top-1px" @click.stop.prevent="checkedItem(index)" v-for="(item, index) in itemData" :key="index">{{item}}</li>
          <li v-if="showCancel" v-touch-active class="cancel" @click.stop.prevent="cancelActionSheet">取消</li>
        </ul>
      </div>  
    </transition>
  </div>
</template>

<script>
import TouchActive from '@/directives/touchActive'
export default {
  data () {
    return {
      actionShow: this.show
    }
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    itemData: {
      type: Array,
      default: []
    },
    showCancel: {
      type: Boolean,
      default: false
    }
  },
  created () {
    this.actionShow = this.show
  },
  watch: {
    show () {
      this.actionShow = this.show
    }
  },
  methods: {
    cancelActionSheet () {
      this.actionShow = false
      this.$emit('cancel-action-sheet')
    },
    checkedItem (index) {
      this.$emit('checked-item', index)
      this.$emit('cancel-action-sheet')
      this.actionShow = false
    }
  },
  directives: {
    'touch-active': TouchActive
  }
}
// :show  显示状态(必传，布尔值，默认false)
// :itemData  列表数据(必传，数组，默认[])
// :showCancel  显示取消按钮(选传，布尔值，默认true显示取消)
// @cancel-action-sheet 监听取消actionSheet事件
// @checkedItem 监听选中对象事件，返回索引index
</script>

<style scoped>
.action-sheet{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.action-sheet-mask{
  background: rgba(0, 0, 0, .6)
}
.action-sheet-content{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: #EFEFF4;
}
.action-sheet-content ul li{
  list-style: none;
  line-height: 48px;
  padding: 0 20px;
  overflow: hidden;
  background: #fff;
}
.action-sheet-content ul li.cancel{
  margin-top: 6px;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
.fade-enter-active, .fade-leave-active{
  transition: all 0.4s;
}
.slideUp-enter, .slideUp-leave-to{
  transform: translate3d(0, 100%, 0)
}
.slideUp-enter-active, .slideUp-leave-active{
  transition: all 0.4s;
}
</style>
