<template>
  <div class="full-page">
    <div class="toastPage-item border-top-1px">
      <div class="clearfix">
        <span class="fl info">成功信息</span>
        <v-switch class="fr"
          @switch-change="switchChange1"
          v-model="example1.switchStatus"
        ></v-switch>
      </div>
    </div>
    <div class="toastPage-item border-top-1px">
      <div class="clearfix">
        <span class="fl info">错误信息</span>
        <v-switch class="fr"
          @switch-change="switchChange2"
          v-model="example2.switchStatus"
        ></v-switch>
      </div>
    </div>
    <div class="toastPage-item border-top-1px">
      <div class="clearfix">
        <span class="fl info">警告信息</span>
        <v-switch class="fr"
          @switch-change="switchChange3"
          v-model="example3.switchStatus"
        ></v-switch>
      </div>
    </div>
    <toast
      v-model="toastItem.toastShow"
      :info="toastItem.message"
      :iconType="toastItem.toastIconType"
      :time="toastItem.timeout"
      :showIcon="toastItem.showIcon"
      @onShow="toastOnShow(toastItem)"
      @onHide="toastOnHide(toastItem)"
    ></toast>
  </div>
</template>

<script>
import Toast from '@/components/Toast'
import Switch from '@/components/Switch'
export default {
  data () {
    return {
      toastItem: {},
      example1: {
        switchStatus: false,
        toastShow: false,
        message: '成功',
        toastIconType: 'success',
        showIcon: true,
        timeout: 1000
      },
      example2: {
        switchStatus: false,
        toastShow: false,
        message: '失败',
        toastIconType: 'error',
        showIcon: true,
        timeout: 1000
      },
      example3: {
        switchStatus: false,
        toastShow: false,
        message: '警告',
        toastIconType: 'warn',
        showIcon: true,
        timeout: 1000
      }
    }
  },
  methods: {
    switchChange1 (val) {
      this.toastItem = this.example1
      if (val) {
        this.toastItem.toastShow = val
      }
    },
    switchChange2 (val) {
      this.toastItem = this.example2
      if (val) {
        this.toastItem.toastShow = val
      }
    },
    switchChange3 (val) {
      this.toastItem = this.example3
      if (val) {
        this.toastItem.toastShow = val
      }
    },
    toastOnShow (toastItem) {
      console.log('toast显示中...')
    },
    toastOnHide (toastItem) {
      toastItem.switchStatus = false
      console.log('toast已隐藏...')
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
