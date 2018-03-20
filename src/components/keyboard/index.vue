<template>
    <div v-show="visible" :class="mode" class="pec-keyboard" :style="scaleStyle" transition="keyboard-float" @touchend="leaveKeyboard" @blur="leaveKeyboard">
        <div class="pec-keyboard-head">
            <i class="icon-logo"></i>
            <span class="pec-keyboard-title">
                <slot class="pec-keyboard-title">平安银行安全键盘</slot>
            </span>
            <span class="pec-keyboard-head-right" @click="ok">
                <i style="color: #f17940">完成</i>
            </span>
        </div>
        <div class="pec-keyboard-content">
            <div class="keyboard-row" v-for="(row, index) in keymap" :key="index"  :class="{'number': mode === 'number' || mode === 'amount', 'keyboard-row-in': mode==='symbol'&&(index===2||index===3)    }">
                <div v-if='isIPhone'>
                  {{row}}
                    <span v-for="key in row"
                          :key="key.name"
                          @touchstart="touchKey(key,$event)"
                          @touchend="leaveKeyboard"
                          :trackby="key.code"
                          :class="[key.type, key.code==='dot'?'dot':'' ,key.code==='shift'&& mode === 'upper' ? 'on' : '',key.type==='func' ? key.code : '', {'space': key.name === '\ '}, key.code==='backspace' || key.code==='symbol'|| key.code==='letter' ? 'BC-E3E7E9' : '', mode==='number'&&key.code==='backspace' || key.code==='nope'?'BC-EEEFF0':'', mode==='symbol' && ['@','+','#','backspace'].indexOf(key.code) >-1 ? 'w16' :'']">
                        <i :class="[key.code==='backspace' || key.code==='shift' ? 'icon-' + key.code : '']" v-if="key.code==='backspace' || key.code==='shift'"></i>
                        <i v-else>{{key.name === ' ' ? '空格': (key.name === 'nope')?  '&emsp': key.name}}</i>
                    </span>
                </div>
                <div  v-else>
                    <span v-for="key in row"
                         :key="key.name"
                          @touchstart="popupKey(key,$event)"
                          @click="tapKey(key,$event)"
                          @touchend="leaveKeyboard"
                          :trackby="key.code"
                          :class="[key.type, key.code==='dot'?'dot':'' ,key.code==='shift'&& mode === 'upper' ? 'on' : '',key.type==='func' ? key.code : '', {'space': key.name === '\ '}, key.code==='backspace' || key.code==='symbol'|| key.code==='letter' ? 'BC-E3E7E9' : '', mode==='number'&&key.code==='backspace' || key.code==='nope'?'BC-EEEFF0':'', mode==='symbol' && ['@','+','#','backspace'].indexOf(key.code) >-1 ? 'w16' :'']">
                        <i :class="[key.code==='backspace' || key.code==='shift' ? 'icon-' + key.code : '']" v-if="key.code==='backspace' || key.code==='shift'"></i>
                        <i v-else>{{key.name === ' ' ? '空格': (key.name === 'nope')?  '&emsp': key.name}}</i>
                    </span>

                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/babel">
import Popup from 'vue-popup'
import 'vue-popup/lib/popup.css'

const IMAGE_RATE = 1.76
const KEY_RATE = {
  'key-left': 238 / 133,
  'key-right': 238 / 133,
  'key-fat': 221 / 186,
  'key-common': 238 / 134
}

let isFunction = function (func) {
  return Object.prototype.toString.call(func) === '[object Function]'
}
/*
  key: {
    name: 'a/1/./↑',
    code: 'a/1/dot/shift',
    type: 'letter/number/symbol/func',
    method: function () {
      //  点击所执行的方法,仅当type为func时有效
    }
  }
*/
var initMap = function () {
  return {
    fullKeyMap: [
      [
        { name: '0', code: '0', type: 'number' },
        { name: '1', code: '1', type: 'number' },
        { name: '2', code: '2', type: 'number' },
        { name: '3', code: '3', type: 'number' },
        { name: '4', code: '4', type: 'number' },
        { name: '5', code: '5', type: 'number' },
        { name: '6', code: '6', type: 'number' },
        { name: '7', code: '7', type: 'number' },
        { name: '8', code: '8', type: 'number' },
        { name: '9', code: '9', type: 'number' }
      ],
      [
        { name: 'q', code: 'q', type: 'letter' },
        { name: 'w', code: 'w', type: 'letter' },
        { name: 'e', code: 'e', type: 'letter' },
        { name: 'r', code: 'r', type: 'letter' },
        { name: 't', code: 't', type: 'letter' },
        { name: 'y', code: 'y', type: 'letter' },
        { name: 'u', code: 'u', type: 'letter' },
        { name: 'i', code: 'i', type: 'letter' },
        { name: 'o', code: 'o', type: 'letter' },
        { name: 'p', code: 'p', type: 'letter' }
      ],
      [
        { name: 'a', code: 'a', type: 'letter' },
        { name: 's', code: 's', type: 'letter' },
        { name: 'd', code: 'd', type: 'letter' },
        { name: 'f', code: 'f', type: 'letter' },
        { name: 'g', code: 'g', type: 'letter' },
        { name: 'h', code: 'h', type: 'letter' },
        { name: 'j', code: 'j', type: 'letter' },
        { name: 'k', code: 'k', type: 'letter' },
        { name: 'l', code: 'l', type: 'letter' }
      ],
      [
        {
          name: '↑',
          code: 'shift',
          type: 'func',
          method: function () {
            if (this.mode === 'upper') {
              this.mode = 'lower'
            } else {
              this.mode = 'upper'
            }
          }
        },
        { name: 'z', code: 'z', type: 'letter' },
        { name: 'x', code: 'x', type: 'letter' },
        { name: 'c', code: 'c', type: 'letter' },
        { name: 'v', code: 'v', type: 'letter' },
        { name: 'b', code: 'b', type: 'letter' },
        { name: 'n', code: 'n', type: 'letter' },
        { name: 'm', code: 'm', type: 'letter' },
        {
          name: '←',
          code: 'backspace',
          type: 'func',
          method: function () {
            this.backspace()
          }
        }
      ],
      [
        {
          name: '@#%',
          code: 'symbol',
          type: 'func',
          method: function () {
            this.mode = 'symbol'
          }
        },
        { name: '.', code: 'dot', type: 'symbol' },
        { name: ' ', code: 'space', type: 'letter' },
        {
          name: '确认',
          code: 'ok',
          type: 'func',
          method: function () {
            this.ok()
          }
        }
      ]
    ],
    symbolKeyMap: [
      [
        { name: '<', code: '<', type: 'symbol' },
        { name: '>', code: '>', type: 'symbol' },
        { name: '(', code: '(', type: 'symbol' },
        { name: ')', code: ')', type: 'symbol' },
        { name: '{', code: '{', type: 'symbol' },
        { name: '}', code: '}', type: 'symbol' },
        { name: '[', code: '[', type: 'symbol' },
        { name: ']', code: ']', type: 'symbol' },
        { name: '$', code: '$', type: 'symbol' }
      ],
      [
        { name: '\\', code: '\\', type: 'symbol' },
        { name: '|', code: '|', type: 'symbol' },
        { name: '%', code: '%', type: 'symbol' },
        { name: '&', code: '&', type: 'symbol' },
        { name: '*', code: '*', type: 'symbol' },
        { name: '^', code: '^', type: 'symbol' },
        { name: '/', code: '/', type: 'symbol' },
        { name: '?', code: '?', type: 'symbol' },
        { name: '!', code: '!', type: 'symbol' }
      ],
      [
        { name: '+', code: '+', type: 'symbol' },
        { name: ':', code: ':', type: 'symbol' },
        { name: ';', code: ';', type: 'symbol' },
        { name: '"', code: '"', type: 'symbol' },
        { name: '\'', code: '\'', type: 'symbol' },
        { name: '`', code: '`', type: 'symbol' },
        { name: '#', code: '#', type: 'symbol' }
      ],
      [
        { name: '@', code: '@', type: 'symbol' },
        { name: '=', code: '=', type: 'symbol' },
        { name: '~', code: '~', type: 'symbol' },
        { name: '_', code: '_', type: 'symbol' },
        { name: '-', code: '-', type: 'symbol' },
        { name: ',', code: ',', type: 'symbol' },
        {
          name: '←',
          code: 'backspace',
          type: 'func',
          method: function () {
            this.backspace()
          }
        }
      ],
      [
        {
          name: 'abc',
          code: 'letter',
          type: 'func',
          method: function () {
            this.mode = 'lower'
          }
        },
        { name: '.', code: 'dot', type: 'symbol' },
        { name: ' ', code: 'space', type: 'letter' },
        {
          name: '确认',
          code: 'ok',
          type: 'func',
          method: function () {
            this.ok()
          }
        }
      ]
    ],
    numberKeyMap: [
      [
        { name: '1', code: '1', type: 'number' },
        { name: '2', code: '2', type: 'number' },
        { name: '3', code: '3', type: 'number' }
      ],
      [
        { name: '4', code: '4', type: 'number' },
        { name: '5', code: '5', type: 'number' },
        { name: '6', code: '6', type: 'number' }
      ],
      [
        { name: '7', code: '7', type: 'number' },
        { name: '8', code: '8', type: 'number' },
        { name: '9', code: '9', type: 'number' }
      ],
      [
        { name: '.', code: 'dot', type: 'symbol' },
        { name: '0', code: '0', type: 'number' },
        {
          name: '←',
          code: 'backspace',
          type: 'func',
          method: function () {
            this.backspace()
          }
        }
      ]
    ]
  }
}

export default {
  name: 'pec-keyboard',
  mixins: [Popup],

  data () {
    //  var width = window.screen.width// 有问题
    //  var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    //  var scale = 'scale(' + (width / 375)+ ')'
    //  var keyStyle = {
    //      'transform': scale,
    //      'transform-origin': '0 100%'
    //  }
    return {
      strArr: this.value.split(''),
      scaleStyle: null,
      mode: this.kmode || 'lower'
    }
  },

  computed: {
    isIPhone () {
      return navigator && navigator.userAgent.toLowerCase().indexOf('iphone') !== -1
    },
    keymap () {
      console.log(this.mode)
      let mode = this.mode
      var map = initMap().fullKeyMap
      switch (mode) {
        case 'lower':
          map = initMap().fullKeyMap.map(function (row) {
            return row.map(function (key) {
              if (key.type === 'letter') {
                key.name = key.name.toLowerCase()
              }
              return key
            })
          })
          break
        case 'upper':
          map = initMap().fullKeyMap.map(function (row) {
            return row.map(function (key) {
              if (key.type === 'letter') {
                key.name = key.name.toUpperCase()
              }
              return key
            })
          })
          break
        case 'symbol':
          map = initMap().symbolKeyMap
          break
        case 'amount':
          map = initMap().numberKeyMap
          break
        case 'number':
          map = initMap().numberKeyMap.map(function (row) {
            return row.map(function (key) {
              if (key.code === 'dot') {
                key = {
                  name: 'nope',
                  code: 'nope',
                  type: 'nope'
                }
              }

              return key
            })
          })
          break
        default:
          map = initMap().fullKeyMap.map(function (row) {
            return row.map(function (key) {
              if (key.type === 'letter') {
                key.name = key.name.toLowerCase()
              }

              return key
            })
          })
          break
      }
      console.log(map)
      return map
    }
  },

  props: {
    kmode: { type: String, default: 'lower' }, // 键盘模式/ lower小写 /upper大写/symbol符号 || number纯数字/amount金额
    modal: { default: false },
    value: { type: String, default: '' },
    lockScroll: { default: false },
    maxCharCount: { default: 10000 },
    visible: { type: Boolean, default: false }
  },

  watch: {
    strArr () {
      // this.value = this.strArr.join('')
      this.$emit('update:value', this.strArr.join(''))
    },
    value () {
      if (this.strArr.join('') !== this.value) {
        this.strArr = this.value.split('')
      }
    },
    visible (val) {
      var height = document.getElementsByClassName('pec-keyboard')[0]
        .offsetHeight
      // window.screen.width有问题
      var width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
      height = (height * width / 375).toFixed(2)
      if (val === false) {
        height = 0
      }
      this.$emit('keyboard-visible-change', { visible: val, height: height })
    }
  },

  methods: {
    touchKey (key, event) {
      this.popupKey(key, event)
      this.tapKey(key)
    },
    // 点击popup效果
    popupKey (key, event) {
      let contains = function (arr, item) {
        for (var i in arr) {
          if (arr[i] === item) return true
        }
        return false
      }

      let spanDom =
        event.target.tagName.toLowerCase() === 'i'
          ? event.target.parentElement
          : event.target
      let spanWidth = spanDom.offsetWidth + 6

      let popupComp = function (keyFormat, keyName) {
        let format = keyFormat || 'key-common'
        let popupWidth = spanWidth * IMAGE_RATE
        let popupHeight = popupWidth * KEY_RATE[format]
        let templ = `<div class="${keyFormat}"><i class="key-tap" style="width:${popupWidth}px height:${popupHeight}px"><em>${keyName}</em></i></div>`
        var div = document.createElement('div')
        div.className = 'key-tap-popup'
        div.setAttribute('name', 'key-tap-popup')
        div.innerHTML = templ
        return div
      }

      // 动态渲染样式
      if (contains(['lower', 'upper', 'symbol'], this.mode)) {
        if (contains(['number', 'letter', 'symbol'], key.type)) {
          if (contains(['0', 'q', '<', '\\'], key.code.toLowerCase())) {
            // 左侧样式
            spanDom.appendChild(popupComp('key-left', key.name))
          } else if (contains(['9', 'p', '$', '!'], key.code.toLowerCase())) {
            // 右侧样式
            spanDom.appendChild(popupComp('key-right', key.name))
          } else if (contains(['+', '@', '#'], key.code.toLowerCase())) {
            // fat样式
            spanDom.appendChild(popupComp('key-fat', key.name))
          } else if (key.code.toLowerCase() !== 'space') {
            // 正常样式
            spanDom.appendChild(popupComp('', key.name))
          }
        }
      }
    },

    tapKey (key) {
      if (key.type === 'func') {
        key.method && isFunction(key.method) && key.method.call(this)
      } else {
        if (key.type !== 'nope') {
          if (this.strArr.length >= parseInt(this.maxCharCount)) {
            console.log(
              'Over the max chars count setting:' + this.maxCharCount
            )
            return
          }
          this.strArr.push(key.name)
        }
      }

      this.$nextTick(() => {
        this.$emit('handle-click', this.value)
      })
    },
    leaveKeyboard () {
      var pops = document.getElementsByName('key-tap-popup')

      for (var i = 0; i < pops.length; i++) {
        var el = pops[i]
        if (el instanceof HTMLElement) {
          el.parentNode.removeChild(el)
        }
      }
    },
    backspace () {
      this.strArr.pop()
    },

    ok () {
      // this.visible = false
      this.$emit('update:visible', false)
    }
  },

  ready () {
    var self = this
    //  不知道是啥
    if (this.visible) {
      this.rendered = true
      this.open()
    }

    setTimeout(function () {
      var width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
      if (width === 0) {
        console.log('屏幕宽度为：' + width)
      }
      var scale = 'scale(' + width / 375 + ')'
      var keyStyle = {
        transform: scale,
        'transform-origin': '0 100%'
      }
      self.scaleStyle = keyStyle
    }, 0)
  }
}
</script>


<style >
* {
  padding: 0;
  margin: 0;
}

i {
  font-style: normal;
}

.pec-keyboard {
  font: 21px "PingFang SC", "Droid Sans";
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -webkit-font-smoothing: antialiased;
  appearance: none;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  /* width: 375px; */
  border-top: solid 1px #d9d9d9;
  background-color: #eeeff0;
  z-index: 20;
}

.pec-keyboard-head {
  position: relative;
  font-size: 14px;
  color: #b2b2b2;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin-bottom: 6px;
  border-bottom: solid 1px #ccd0d2;
  background: #fff;
}
.pec-keyboard-head-right {
  position: absolute;
  top: 0;
  right: 10px;
  color: #2196f3;
}

.pec-keyboard-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.keyboard-row {
  font-size: 0;
  white-space: nowrap;
  text-align: center;
  padding-left: 3px;
  padding-right: 3px;
  margin-bottom: 6px;
}

.keyboard-row span {
  font-size: 20px;
  color: #737778;
  text-align: center;
  width: 8.15%;
  height: 40px;
  display: inline-block;
  line-height: 40px;
  margin-left: 3px;
  margin-right: 3px;
  background: #fff;
  border: 1px solid #ccd0d2;
  border-radius: 5px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.keyboard-row span:active {
  /*background: #E3E7E9*/
  /*actived: true*/
}

.keyboard-row .space:active {
  background: #e3e7e9;
  actived: true;
}

.amount .pec-keyboard-head,
.number .pec-keyboard-head {
  margin-bottom: 0;
}

.amount .keyboard-row,
.number .keyboard-row {
  /*display: inline-flex*/
  justify-content: space-around;
  padding: 0;
  margin-bottom: 1px;
}

.amount .keyboard-row span,
.number .keyboard-row span {
  /*font-size: 23px*/
  flex: 1;
  height: 58px;
  line-height: 58px;
  padding: 0;
  margin-left: 0;
  margin-right: 1px;
  border: 0;
  border-radius: 0;
  width: 33.33%;
}

.amount .keyboard-row span:active,
.number .keyboard-row span:active {
  background: #eeeff0;
  actived: true;
}

.amount .keyboard-row span:last-child,
.number .keyboard-row span:last-child {
  margin-right: 0;
}
.symbol .keyboard-row {
  /*display: inline-flex*/
  /*display:block*/
  justify-content: space-around
}
.symbol .keyboard-row span {
  font-size: 20px;
  width: 9.05%;
}

.keyboard-float-transition {
  opacity: 1;
  transition: all 0.1s ease-out 0.05s;
}

.keyboard-float-enter,
.keyboard-float-leave {
  opacity: 0;
  transform: translate3d(0%, 20%, 0);
}
.keyboard-row span.shift {
  width: 13%;
}
.keyboard-row span.shift.on {
  background: #fff;
}
.keyboard-row span.backspace {
  width: 13%;
}
.keyboard-row span.ok {
  width: 23.3%;
  color: #fff;
  border: 0;
  background: #f17940;
}
.keyboard-row span.symbol.func,
.keyboard-row span.letter.func {
  width: 13%;
}
.keyboard-row span.dot {
  width: 8.35%;
}
.keyboard-row span.space {
  width: 48%;
}
.BC-EEEFF0 {
  background: #eeeff0 !important;
}
.BC-E3E7E9 {
  background: #e3e7e9 !important;
}
.icon-logo {
  width: 18px;
  height: 14px;
  display: inline-block;
  background: url("../../assets/images/icon-logo.svg") no-repeat;
  background-size: 18px 14px;
  vertical-align: middle;
  margin-top: -2px;
}

.icon-keyboard {
  width: 21px;
  height: 18px;
  display: inline-block;
  background: url("../../assets/images/icon-keyboard.png") no-repeat;
  background-size: 21px 18px;
  vertical-align: middle;
  margin-top: -2px;
}

.icon-backspace {
  width: 21px;
  height: 18px;
  display: inline-block;
  background: url("../../assets/images/icon-backspace.png") no-repeat;
  background-size: 21px 18px;
}
.icon-shift {
  width: 19px;
  height: 18px;
  display: inline-block;
  background: url("../../assets/images/icon-shift.svg") no-repeat;
  background-size: 19px 18px;
}
.on .icon-shift {
  background: url("../../assets/images/icon-shift-on.svg") no-repeat;
}
.keyboard-row-in {
  padding: 0 20px;
}
.w16 {
  width: 16% !important;
}
.lower .keyboard-row:last-child span,
.upper .keyboard-row:last-child span,
.symbol .keyboard-row:last-child span {
  font-size: 15px !important;
}
.number {
  font-size: 19px !important;
}

.keyboard-row i em {
  font-style: normal;
  font-size: 30px;
  margin-top: 25%;
  display: block;
}
.keyboard-row .key-fat i em {
  margin-top: 16%;
}
.keyboard-row .key-tap {
  /*width: 67px*/
  /*height: 119px*/
  /*width: 4em*/
  /*height: 7em*/
  /*width: 3.3em*/
  /*height: 5.8em*/
  width: 3.7em;
  height: 6.5em;
  display: block;
  background: url("../../assets/images/key.png") no-repeat;
  background-size: 100%;
  position: absolute;
  left: 50%;
  bottom: -3px;
  transform: translateX(-50%);
}
.keyboard-row .key-fat .key-tap {
  width: 93px;
  height: 110px;
  display: block;
  background: url("../../assets/images/keyfat.png") no-repeat;
  background-size: 100%;
  position: absolute;
  left: 50%;
  bottom: -3px;
  transform: translateX(-50%);
}
.keyboard-row .key-left .key-tap {
  background: url("../../assets/images/keyleft.png") no-repeat;
  background-size: 100%;
  left: -6px;
  transform: translateX(0);
}
.keyboard-row .key-right .key-tap {
  background: url("../../assets/images/keyright.png") no-repeat;
  background-size: 100%;
  left: auto;
  right: -6px;
  transform: translateX(0);
}

.key-tap-popup {
  position: relative;
}

.number .keyboard-row .nope,
.number .keyboard-row .backspace,
.amount .keyboard-row .dot,
.amount .keyboard-row .backspace {
  width: 33.33%;
}
</style>
