<template>
  <div class="bscroll-picker">
    <div class="one-column column" @click="showPicker(0)">{{oneColumn}}</div>
    <picker
      ref="picker0"
      :data="oneData"
      @valueChange="valueChange(0, arguments)"
    ></picker>
    <div class="two-column column" @click="showPicker(1)">{{twoColumn}}</div>
    <picker
      ref="picker1"
      :data="twoData"
      @valueChange="valueChange(1, arguments)"
    ></picker>
    <div class="three-column column" @click="showPicker(2)">{{threeColumn}}</div>
    <picker
      ref="picker2"
      :data="threeData"
      @valueChange="valueChange(2, arguments)"
    ></picker>
    <div class="linkage-column column">linkage-column</div>
  </div>
</template>

<script>
import Picker from '@/components/BetterScroll/baseCom/picker'
export default {
  data () {
    return {
      oneColumn: 'oneColumn',
      twoColumn: 'twoColumn',
      threeColumn: 'threeColumn',
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
        ]
      ],
      twoData: [
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
      ],
      threeData: [
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
    },
    change (i, index) {
      console.log('change: ', i, index)
    },
    select (val, index, text) {
      console.log('select: ', val, index, text)
    },
    valueChange (index, args) {
      console.log(index)
      switch (index) {
        case 0:
          this.oneColumn = args[2].join('--')
          break
        case 1:
          this.twoColumn = args[2].join('--')
          break
        case 2:
          this.threeColumn = args[2].join('--')
          break
        default:
          break
      }
      console.log('valueChange: ', args)
    }
  },
  components: {
    'picker': Picker
  }
}
</script>

<style scoped>
.bscroll-picker {
  margin-top: 10px;
  padding-top: 20px;
  height: 500px;
  background-color: #d9d9d9;
}
.column {
  width: 80%;
  line-height: 30px;
  margin: 0 auto 40px;
  background-color: #fff;
}
</style>
