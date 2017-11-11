<template>
  <div class="fepawn-check-list">
    <template v-for="(item, index) in checkList">
      <div :key="index" class="check-list-item border-top-1px">
        <div class="checkBtn checked">
          <input type="checkbox" v-model="checkValue" :value="item.value">
        </div>
        <div class="checkInfo">{{item.name}}</div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checkList: [
        {
          name: '北京',
          value: '北京'
        },
        {
          name: '上海',
          value: '上海'
        },
        {
          name: '深圳',
          value: '深圳'
        },
        {
          name: '苏州',
          value: '苏州'
        }
      ],
      checkValue: []
    }
  },
  watch: {
    checkValue () {
      console.log(this.checkValue)
    }
  }
}
</script>

<style>
@import url('../../assets/style/index.css');
.check-list-item{
  text-align: left;
  line-height: 30px;
  margin-left: 20px;
  padding: 10px 15px 10px 0;
}
.checkBtn{
  display: inline-block;
  vertical-align: middle;
  width: 40px;
  height: 32px;
  position: relative;
}
.checkBtn::before{
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  width: 20px;
  height: 20px;
  border: 1px solid #999;
  border-radius: 50%;
}
.checkBtn.checked::before{
  border: 1px solid red;
}
.checkBtn input{
  width: 100%;
  height: 100%;
  opacity: 0;
}
.checkInfo {
  display: inline-block;
  vertical-align: middle;  
  line-height: 32px;
}
</style>
