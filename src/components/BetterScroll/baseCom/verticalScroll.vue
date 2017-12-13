<template>
  <div ref="wrapper" class="wrapper">
    <!-- 滚动区块 -->
    <div class="scroll-content">
      <slot>
        <ul class="list-content">
          <li class="list-item" v-for="(item, index) in listData" :key="index">{{item}}</li>
        </ul>
      </slot>
    </div>
    <!-- 上拉区块 -->
    <slot name="pullup">
      <div class="pullup-wrapper">
        <div class="before-trigger" >
          <span>{{pullupText}}</span>
        </div>
        <div class="after-trigger">
          加载中...
        </div>
      </div>
    </slot>
    <!-- 下拉区块 -->
    <slot name="pulldown"
      :pullDownStyle="pullDownStyle"
    >
      <div class="pulldown-wrapper" :style="pullDownStyle">
        <div class="before-trigger" v-if="beforePullDown">
          <bubble :y="bubbleY"></bubble>
        </div>
        <div class="after-trigger" v-else>
          加载中...
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
import Bubble from './bubble'
import BScroll from 'better-scroll'

// const COMPONENT_NAME = 'scroll'
const DIRECTION_H = 'horizontal'
const DIRECTION_V = 'vertical'

export default {
  data () {
    return {
      bubbleY: 0,
      pullupText: '正在加载...',
      beforePullDown: true,
      isPullingDown: false,
      pullDownInitTop: -50,
      pullDownStyle: ''
    }
  },
  props: {
    listData: {
      type: Array,
      default () {
        return []
      }
    },
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    listenScroll: {
      type: Boolean,
      default: false
    },
    listenBeforeScroll: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: DIRECTION_V
    },
    scrollbar: {
      type: null,
      default: false
    },
    pullDownRefresh: {
      type: null,
      default: false
    },
    pullUpLoad: {
      type: null,
      default: false
    },
    startY: {
      type: Number,
      default: 0
    },
    refreshDelay: {
      type: Number,
      default: 20
    },
    freeScroll: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.initScroll()
    }, 20)
  },
  methods: {
    initScroll () {
      if (!this.$refs.wrapper) {
        return
      }
      let options = {
        probeType: this.probeType,
        click: this.click,
        scrollY: this.freeScroll || this.direction === DIRECTION_V,
        scrollX: this.freeScroll || this.direction === DIRECTION_H,
        scrollbar: this.scrollbar,
        pullDownRefresh: this.pullDownRefresh,
        pullUpLoad: this.pullUpLoad,
        startY: this.startY,
        freeScroll: this.freeScroll
      }
      this.scroll = new BScroll(this.$refs.wrapper, options)
      if (this.listenScroll) {
        this.scroll.on('scroll', (pos) => {
          this.$emit('scroll', pos)
        })
      }
      if (this.listenBeforeScroll) {
        this.scroll.on('beforeScrollStart', () => {
          this.$emit('beforeScrollStart')
        })
      }
      if (this.pullDownRefresh) {
        this._initPullDownRefresh()
      }
      if (this.pullUpLoad) {
        this._initPullUpLoad()
      }
    },
    disable () {
      this.scroll && this.scroll.disable()
    },
    enable () {
      this.scroll && this.scroll.enable()
    },
    refresh () {
      this.scroll && this.scroll.refresh()
    },
    scrollTo () {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
    },
    scrollToElement () {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    },
    clickItem (e, item) {
      console.log(e)
      this.$emit('click', item)
    },
    destroy () {
      this.scroll.destroy()
    },
    _initPullDownRefresh () {
      // 触发时机：在一次下拉刷新的动作后，这个时机一般用来去后端请求数据。
      this.scroll.on('pullingDown', () => {
        this.beforePullDown = false
        this.isPullingDown = true
        this.$emit('pullingDown')
      })
      // 监听滚动过程事件
      this.scroll.on('scroll', (pos) => {
        if (this.beforePullDown) {
          this.bubbleY = Math.max(0, pos.y + this.pullDownInitTop)
          this.pullDownStyle = `top: ${Math.min(pos.y + this.pullDownInitTop, 10)}px`
        } else {
          this.bubbleY = 0
        }

        if (this.isRebounding) {
          this.pullDownStyle = `top: ${10 - (this.pullDownRefresh.stop - pos.y)}px`
        }
      })
    },
    _initPullUpLoad () {
    },
    _reboundPullDown () {
      const {stopTime = 600} = this.pullDownRefresh
      return new Promise((resolve) => {
        setTimeout(() => {
          this.isRebounding = true
          this.scroll.finishPullDown()
          resolve()
        }, stopTime)
      })
    },
    forceUpdate (dirty) {
      if (this.pullDownRefresh && this.isPullingDown) {
        this.isPullingDown = false
        this._reboundPullDown().then(() => {
          this._afterPullDown()
        })
      } else if (this.pullUpLoad && this.isPullUpLoad) {
        this.isPullUpLoad = false
        this.scroll.finishPullUp()
        this.pullUpDirty = dirty
        this.refresh()
      } else {
        this.refresh()
      }
    }
  },
  watch: {
    listData () {
      setTimeout(() => {
        this.forceUpdate(true)
      }, this.refreshDelay)
    }
  },
  components: {
    'bubble': Bubble
  }
}
</script>

<style>
.wrapper{
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background: #fff;
}
.scroll-content{
  position: relative;
  z-index: 1;
}
.list-content{
  margin: 0;
  padding: 0;
  position: relative;
  z-index: 10;
  background: #fff;
}
.list-item{
  list-style: none;
  height: 40px;
  text-align: left;
  line-height: 40px;
  font-size: 18px;
  padding-left: 20px;
  border-bottom: 1px solid #e5e5e5;
} 
.pulldown-wrapper{
  position: absolute;
  width: 100%;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all;
}
.after-trigger{
  margin-top: 10px;
}
.pullup-wrapper{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
