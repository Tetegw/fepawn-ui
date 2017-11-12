<template>
  <div class="hello">
    <img class="logo" src="../assets/logo.png">
    <ul>
      <li><a href="javascript:void(0)" @click="changeCom('alert')">Alert</a></li>
      <li><a href="javascript:void(0)" @click="changeCom('loading')">Loading</a></li>
      <li><a href="javascript:void(0)" @click="changeCom('checkList')">checkList</a></li>
      <li><a href="javascript:void(0)" @click="readMe">文档说明</a></li>
    </ul>
    <fepawn-alert 
    :show="alertShow" 
    :title="alertTitle"
    :content="alertContent" 
    :confirmValue="alertConfirmValue"
    :hasCancel="hasCancel"
    :cancelValue="alertCancelValue"
    @confirm="alertConfirm"
    @cancel="alertCancel"
    >
    </fepawn-alert>
  </div>
</template>

<script>
import Alert from '@/components/Alert'
import Loading from '@/components/Loading'
export default {
  name: 'HelloWorld',
  data () {
    return {
      alertShow: false,
      alertTitle: '错误信息',
      alertContent: '对不起，您的账号不存在！',
      alertConfirmValue: '确定',
      alertCancelValue: '取消',
      hasCancel: true
    }
  },
  methods: {
    changeCom (params) {
      switch (params) {
        case 'alert':
          this.alertShow = true
          break
        case 'loading':
          this.$router.push({path: '/loading'})
          break
        case 'checkList':
          this.$router.push({path: '/checkList'})
          break
        default:
          break
      }
    },
    alertConfirm () {
      console.log('点击了确认按钮')
      this.alertShow = false
    },
    alertCancel () {
      console.log('点击了取消按钮')
      this.alertShow = false
    },
    readMe () {
      window.location.href = 'https://tetegw.github.io/fepawn-ui/dist/staic/readMe.md'
    }
  },
  components: {
    'fepawn-alert': Alert,
    'fepawn-loading': Loading
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.logo{
  width: 200px;
  height: 200px;
  margin: 20px auto;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
