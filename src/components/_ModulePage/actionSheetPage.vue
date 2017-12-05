<template>
  <div class="full-page">
    <div class="action-sheet-item border-top-1px border-bot-1px">
      <div class="clearfix">
        <span class="fl info">正常使用</span>
        <v-switch class="fr"
          @switch-change="switchChange"
          v-model="switchShow"
        ></v-switch>
      </div>
    </div>
    <action-sheet
      v-model="actionSheetShow"
      :itemData="itemData"
      :showCancel="showCancel"
      @cancel-action-sheet="cancelActionSheet"
      @checked-item="switchCheckedItem"
    ></action-sheet>
  </div>
</template>

<script>
import ActionSheet from '@/components/ActionSheet'
import Switch from '@/components/Switch'
export default {
  data () {
    return {
      actionSheetShow: false,
      switchShow: false,
      itemData: ['我是第一个元素', '我是第二个元素', '我是第三个元素'],
      showCancel: true
    }
  },
  components: {
    'action-sheet': ActionSheet,
    'v-switch': Switch
  },
  methods: {
    switchChange (newVal) {
      if (newVal) {
        this.switchShow = newVal
        this.actionSheetShow = newVal
      }
    },
    cancelActionSheet () {
      this.switchShow = false
      console.log('关闭actionSheet')
    },
    switchCheckedItem (index) {
      this.switchShow = false
      console.log(`选中了${index}`)
    }
  }
}
</script>

<style scoped>
@import url('../../assets/style/index.css');
.action-sheet-item{
  padding: 10px 15px;
}
.action-sheet-item .info{
  line-height: 32px;
}
.action-sheet-item:first-child{
  margin-top: 20px;
}

</style>
