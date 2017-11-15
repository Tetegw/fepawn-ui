<template>
  <div class="fullpage">
    <div class="toastPage-item border-top-1px">
      <div class="clearfix">
        <span class="fl info">成功信息</span>
        <v-switch class="fr"
          @switch-change="switchChange"
        ></v-switch>
      </div>
    </div>
    <div class="toastPage-item border-top-1px">
      <div class="clearfix">
        <span class="fl info">错误信息</span>
        <v-switch class="fr"
          @switch-change="switchChange2"
        ></v-switch>
      </div>
    </div>
    <div class="toastPage-item border-top-1px">
      <div class="clearfix">
        <span class="fl info">警告信息</span>
        <v-switch class="fr"
          @switch-change="switchChange3"
        ></v-switch>
      </div>
    </div>
    <toast
      :show="toastShow"
      :info="message"
      :iconType="toastIconType"
      :time="timeout"
      :showIcon="true"
      @onShow="toastOnShow"
      @onHide="toastOnHide"
    ></toast>
  </div>
</template>

<script>
import Toast from '@/components/Toast'
import Switch from '@/components/Switch'
export default {
  data () {
    return {
      toastShow: false,
      timeout: 1000,
      message: '成功',
      toastIconType: 'success'
    }
  },
  methods: {
    switchChange (val) {
      this.message = '成功'
      this.toastIconType = 'success'
      this.toastShow = val
    },
    switchChange2 (val) {
      this.message = '失败'
      this.toastIconType = 'error'
      this.toastShow = val
    },
    switchChange3 (val) {
      this.message = '警告'
      this.toastIconType = 'warn'
      this.toastShow = val
    },
    toastOnShow () {
      console.log('toast显示中...')
    },
    toastOnHide () {
      console.log('toast已隐藏...')
      this.toastShow = false
    }
  },
  components: {
    'toast': Toast,
    'v-switch': Switch
  }
}
</script>

<style scoped>
@import url('../../assets/style/index.css');
.toastPage-item{
  padding: 10px 15px;
}
.toastPage-item:first-child{
  margin-top: 20px;
}
.toastPage-item .info{
  display: inline-block;
  vertical-align: middle;
  line-height: 32px;
}
</style>
