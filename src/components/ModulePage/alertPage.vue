<template>
  <div class="full-page">
    <div class="alert-page-wrap clearfix">
      <span class="fl">有取消按钮使用</span>
      <v-switch class="fr" 
        @switch-change="switchChange1"
        v-model="example1.switchStatus"
      ></v-switch>
    </div>
    <div class="alert-page-wrap clearfix">
      <span class="fl">只有确定按钮使用</span>
      <v-switch class="fr" 
        @switch-change="switchChange2"
        v-model="example2.switchStatus"
      ></v-switch>
    </div>
    <div class="alert-page-wrap clearfix">
      <span class="fl">没有标题</span>
      <v-switch class="fr" 
        @switch-change="switchChange3"
        v-model="example3.switchStatus"
      ></v-switch>
    </div>
    <v-alert
      v-model="alertItem.alertShow" 
      :title="alertItem.alertTitle"
      :content="alertItem.alertContent" 
      :confirmValue="alertItem.alertConfirmValue"
      :hasCancel="alertItem.hasCancel"
      :cancelValue="alertItem.alertCancelValue"
      @confirm="alertConfirm(alertItem)"
      @cancel="alertCancel(alertItem)"
    ></v-alert>
  </div>
</template>

<script>
import Alert from '@/components/Alert'
import Switch from '@/components/Switch'
export default {
  data () {
    return {
      alertItem: {},
      example1: {
        switchStatus: false,
        alertShow: false,
        alertTitle: '错误信息',
        alertContent: '对不起，您的账号不存在！',
        alertConfirmValue: '确定',
        alertCancelValue: '取消',
        hasCancel: true
      },
      example2: {
        switchStatus: false,
        alertShow: false,
        alertTitle: '成功信息',
        alertContent: '恭喜你，注册成功！',
        alertConfirmValue: '确定'
      },
      example3: {
        switchStatus: false,
        alertShow: false,
        alertContent: '恭喜你，注册成功！',
        alertConfirmValue: '确定'
      }
    }
  },
  components: {
    'v-alert': Alert,
    'v-switch': Switch
  },
  methods: {
    switchChange1 (val) {
      this.alertItem = this.example1
      if (val) {
        this.alertItem.alertShow = true
      }
    },
    switchChange2 (val) {
      this.alertItem = this.example2
      if (val) {
        this.alertItem.alertShow = true
      }
    },
    switchChange3 (val) {
      this.alertItem = this.example3
      if (val) {
        this.alertItem.alertShow = true
      }
    },
    alertConfirm (alertItem) {
      console.log('点击确认')
      alertItem.switchStatus = false
    },
    alertCancel (alertItem) {
      console.log('点击取消')
      alertItem.switchStatus = false
    }
  }
}
</script>

<style scoped>
@import url('../../assets/style/index.css');
.alert-page-wrap{
  margin: 30px auto 10px;
  padding: 0 20px;
}
</style>
