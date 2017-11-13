<template>
  <div class="fepawn-check-list" v-if="data.length > 0">
    <div class="border-top-1px border-bot-1px">
        <label v-for="(item, index) in data" :key="index" class="check-list-item" :class="{'border-top-1px': hasSep}" v-touch-active>
          <div class="checkBtn iconfont" :class="{'icon-gou': checkValue.indexOf(item.value) > -1, 'fr': float === 'right'}" :style="{'color': iconColor}">
            <input type="checkbox" v-model="checkValue" :value="item.value">
          </div>
          <div class="checkInfo">{{item.name}}</div>
        </label>
    </div>
    <div class="check-list-btn" @click="checkedInvert" v-if="showInvert">反选</div>
    <div class="check-list-btn" @click="checkedAll" v-if="showAll">全选</div>
  </div>
</template>

<script>
import TouchActive from '@/directives/touchActive'
export default {
  props: {
    data: {
      type: Array,
      default: []
    },
    hasSep: {
      type: Boolean,
      default: true
    },
    float: {
      type: String,
      default: 'left'
    },
    showAll: {
      type: Boolean,
      default: false
    },
    showInvert: {
      type: Boolean,
      default: false
    },
    iconColor: {
      type: String,
      default: '#1e7e71'
    }
  },
  data () {
    return {
      checkValue: [],
      checkedFlag: false
    }
  },
  watch: {
    checkValue () {
      this.checkedFlag = this.checkValue.length === this.data.length
      this.$emit('checked', this.checkValue)
    },
    checkedFlag (newVal) {
      if (newVal) {
        this.$emit('allChecked', true)
      } else {
        this.$emit('allChecked', false)
      }
    }
  },
  directives: {
    'touch-active': TouchActive
  },
  methods: {
    checkedAll () {
      if (this.checkedFlag) {
        this.checkValue = []
      } else {
        this.checkValue = []
        this.data.forEach((item) => {
          this.checkValue.push(item.value)
        }, this)
      }
      this.checkedFlag = !this.checkedFlag
    },
    checkedInvert () {
      let tempArr = this.checkValue
      this.data.forEach((item) => {
        let index = tempArr.indexOf(item.value)
        if (index > -1) {
          tempArr.splice(index, 1)
        } else {
          tempArr.push(item.value)
        }
      }, this)
      this.checkValue = tempArr
    }
  }
}
// :data 渲染数据(必传 [{nama: 'aa', value: 'bb'}])
// :hasSep  是否有分隔线(选传，默认有分隔线true)
// :showAll 全选按钮的显示(选传，默认显示true)
// :showInvert  反选按钮的显示(选传，默认显示true)
// :iconColor 选中状态图标的颜色(选传，字符串，默认#1e7e71)
// @checked 监听选中事件
</script>

<style>
@import url('../../assets/style/index.css');
.check-list-item{
  display: block;
  text-align: left;
  line-height: 30px;
  padding: 8px 15px;
}
.check-list-item:before{
  left: 15px;
}
.check-list-item:first-child::before{
  border: 0;
}
.checkBtn{
  float: left;
  width: 40px;
  height: 32px;
  position: relative;
}
.checkBtn::after{
  content: '';
  width: 20px;
  height: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  border: 1px solid #999;
  border-radius: 50%;
}
.checkBtn:before{
  font-size: 22px;
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
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
.check-list-btn{
  display: block;
  line-height: 40px;
  border: 0;
  outline:none;
  border-radius: 4px;
  margin: 15px auto;
  width: 90%;
  background-color: #1e7e71;
  color: #fff;
}
.check-list-btn:active{
  background-color: #13675b;
}
</style>
