<template>
  <div class="bscroll-picker">
    <div class="one-column column" @click="showPicker(0)">one-column</div>
    <picker
    ref="picker0"
    :data="oneData"
    ></picker>
    <div class="two-column column">two-column</div>
    <div class="three-column column">three-column</div>
    <div class="linkage-column column">linkage-column</div>
  </div>
</template>

<script>
import Picker from '@/components/BetterScroll/baseCom/picker'
export default {
  data () {
    return {
      oneData: [
        [
          {
            text: '剧毒',
            value: 1
          },
          {
            text: '蚂蚁',
            value: 2
          },
          {
            text: '幽鬼',
            value: 3
          },
          {
            text: '主宰',
            value: 4
          },
          {
            text: '卡尔',
            value: 5
          },
          {
            text: '宙斯',
            value: 6
          },
          {
            text: '巫医',
            value: 7
          },
          {
            text: '巫妖',
            value: 8
          },
          {
            text: '神谕者',
            value: 9
          },
          {
            text: '撼地神牛',
            value: 10
          },
          {
            text: '蓝胖子',
            value: 11
          },
          {
            text: '水晶室女',
            value: 12
          },
          {
            text: '莉娜',
            value: 13
          },
          {
            text: '斯拉克',
            value: 14
          },
          {
            text: '斯拉达',
            value: 15
          }
        ],
        [
          {
            text: '剧毒',
            value: 1
          },
          {
            text: '蚂蚁',
            value: 2
          },
          {
            text: '幽鬼',
            value: 3
          },
          {
            text: '主宰',
            value: 4
          },
          {
            text: '卡尔',
            value: 5
          },
          {
            text: '宙斯',
            value: 6
          },
          {
            text: '巫医',
            value: 7
          },
          {
            text: '巫妖',
            value: 8
          },
          {
            text: '神谕者',
            value: 9
          },
          {
            text: '撼地神牛',
            value: 10
          },
          {
            text: '蓝胖子',
            value: 11
          },
          {
            text: '水晶室女',
            value: 12
          },
          {
            text: '莉娜',
            value: 13
          },
          {
            text: '斯拉克',
            value: 14
          },
          {
            text: '斯拉达',
            value: 15
          }
        ]
      ]
    }
  },
  methods: {
    showPicker (index) {
      let picker = this.$refs[`picker${index}`]
      // 获取到对应的picker，调用内部show方法
      picker.show()
    }
  },
  components: {
    'picker': Picker
  }
}
</script>

<style scoped>
.bscroll-picker{
  margin-top: 10px;
  padding-top: 20px; 
  height: 500px;
  background-color: #d9d9d9;
}
.column{
  width: 80%;
  line-height: 30px;
  margin: 0 auto 40px;
  background-color: #fff;
}
</style>
