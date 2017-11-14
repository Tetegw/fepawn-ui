<template>
  <div class="fullpage">
    <div class="toastPage-item border-top-1px">
      <div class="clearfix">
        <span class="fl info">正常使用</span>
        <v-switch class="fr"
          @switch-change="switchChange"
          :status="switchStatus"
        ></v-switch>
      </div>
    </div>
    <toast
      :show="toastShow"
      info="成功"
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
      switchStatus: false,
      timeout: 1000
    }
  },
  methods: {
    switchChange (val) {
      this.toastShow = val
    },
    toastOnShow () {
      console.log('toast显示中...')
      this.switchStatus = true
    },
    toastOnHide () {
      console.log('toast已隐藏...')
      this.switchStatus = false
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
