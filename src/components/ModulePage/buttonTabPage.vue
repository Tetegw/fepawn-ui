<template>
  <div class="full-page">
    <div class="content">
      <div>正常使用</div>
      <div class="button-tab-wrap">
        <button-tab
          :fontSize="16"
          :itemHeight="34"
          :indexArr="buttonTabItemArr"
          @checkedItem="checkedItem1"
        ></button-tab>          
      </div>  
    </div>
    <div class="content">
      <div>正常使用</div>
      <div class="button-tab-wrap">
        <button-tab
          :fontSize="16"
          :itemHeight="34"
          :indexArr="buttonTabItemArr2"
          @checkedItem="checkedItem2"          
        ></button-tab>          
      </div>  
    </div>
  </div>
</template>

<script>
import buttonTab from '@/components/buttonTab/index'
export default {
  data () {
    return {
      buttonTabItemArr: ['按钮一', '按钮二'],
      buttonTabItemArr2: ['按钮一', '按钮二', '按钮三']
    }
  },
  methods: {
    checkedItem1 (index) {
      console.log('项目一选中：', index)
    },
    checkedItem2 (index) {
      console.log('项目二选中：', index)
    }
  },
  components: {
    'button-tab': buttonTab
  }
}
</script>

<style scoped>
@import url('../../assets/style/index.css');
.content{
  padding: 20px 10px 0;
}
.button-tab-wrap{
  width: 80%;
  margin: 10px auto 0;
}
</style>
