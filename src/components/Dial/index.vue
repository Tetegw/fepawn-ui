<template>
  <div class="dial-wrap">
    <canvas id="cv" class="dial-cv"></canvas>
    <canvas id="cv2" class="dial-cv"></canvas>
  </div>
</template>

<script>
const CVHEIGHT = 456           // 画布高度
const CVWIDTH = 750            // 画布宽度
const RADIUS = 241             // 半径
const CIRCLEX = CVWIDTH / 2      // 圆心X
const CIRCLEY = 370            // 圆心Y
const LINEWIDTH = 27           // 圆环宽度
// const STEP = 3                 // 每次渲染步数
// const TIMEOUT = 10              // 速度
const CIRCLEF = '#fdeee5'       // 圆环前景色
// const PROP = 1                  // 比例【重要】
// let START = 169.5               // 开始角度，完全是为切合表盘的图片，如果不用图片就用整数
// const END = 169.5 + 201 * PROP   // 结束角度
export default {
  props: {
    step: {
      type: Number,
      default: 3
    },
    timeOut: {
      type: Number,
      default: 10
    },
    rate: {
      type: Number,
      default: 0.4
    }
  },
  created () {
    this.copyRate = this.rate
    if (this.copyRate <= 0) {
      this.copyRate = 0
    } else if (this.copyRate >= 1) {
      this.copyRate = 1
    }
    this.START = 169.5
    this.END = this.START + 201 * this.copyRate   // 结束角度
    this.animationFrame()
    this.animationRender()
  },
  mounted () {
    this.drawCanvas()
  },
  methods: {
    // 封装requestAnimationFrame兼容性
    animationFrame () {
      var lastTime = 0
      var prefixes = 'webkit moz ms o'.split(' ') // 各浏览器前缀
      var requestAnimationFrame = window.requestAnimationFrame
      var cancelAnimationFrame = window.cancelAnimationFrame
      var prefix
      // 通过遍历各浏览器前缀，来得到requestAnimationFrame和cancelAnimationFrame在当前浏览器的实现形式
      for (var i = 0; i < prefixes.length; i++) {
        if (requestAnimationFrame && cancelAnimationFrame) {
          break
        }
        prefix = prefixes[i]
        requestAnimationFrame = requestAnimationFrame || window[prefix + 'RequestAnimationFrame']
        cancelAnimationFrame = cancelAnimationFrame || window[prefix + 'CancelAnimationFrame'] || window[prefix + 'CancelRequestAnimationFrame']
      }
      // 如果当前浏览器不支持requestAnimationFrame和cancelAnimationFrame，则会退到setTimeout
      if (!requestAnimationFrame || !cancelAnimationFrame) {
        requestAnimationFrame = function (cb, element) {
          var currTime = new Date().getTime()
          // 为了使setTimteout的尽可能的接近每秒60帧的效果
          var timeToCall = Math.max(0, 16 - (currTime - lastTime))
          var id = window.setTimeout(function () {
            // cb && cb(currTime + timeToCall)
          }, timeToCall)
          lastTime = currTime + timeToCall
          return id
        }
        cancelAnimationFrame = function (id) {
          window.clearTimeout(id)
        }
      }
      // 得到兼容各浏览器的API
      window.requestAnimationFrame = requestAnimationFrame
      window.cancelAnimationFrame = cancelAnimationFrame
    },
    // 封装动画渲染函数，以及出口
    animationRender (callback, time) {
      var lastFrameTime = new Date() - 0
      var callbackRes = true
      function render () {
        var curFrameTime = new Date() - 0
        var interval = curFrameTime - lastFrameTime
        if (interval >= time) {
          lastFrameTime = curFrameTime
          callbackRes = callback()
        }
        if (callbackRes) {
          window.requestAnimationFrame(render)
        }
      }
      render()
    },
    drawCanvas () {
      var _this = this
      // 角度转弧度
      function toRadian (angle) {
        return angle / 180 * Math.PI
      }

      // 绘制渐变背景
      function backGradient () {
        var grd = ctx.createLinearGradient(CVWIDTH / 2, 0, CVWIDTH / 2, CVHEIGHT)
        grd.addColorStop(0, '#ff9232')
        grd.addColorStop(0.5, '#fe7d2a')
        grd.addColorStop(1, '#ff7a0e')
        ctx.fillStyle = grd
        ctx.fillRect(0, 0, CVWIDTH, CVHEIGHT)
      }

      // 绘制圆环背景
      /* function backgroundCircle(){
          ctx.save()
          ctx.strokeStyle = CIRCLEB
          ctx.lineWidth = LINEWIDTH
          ctx.lineCap = "round"
          ctx.beginPath()
          ctx.arc(CIRCLEX, CIRCLEY, RADIUS, toRadian(START), toRadian(START+200), false)
          ctx.stroke()
          ctx.closePath()
          ctx.restore()
      } */

      // 绘制运动圆环
      function foregroundCircle () {
        ctx.save()
        ctx.strokeStyle = CIRCLEF
        ctx.lineWidth = LINEWIDTH
        ctx.lineCap = 'round'
        ctx.beginPath()
        ctx.arc(CIRCLEX, CIRCLEY, RADIUS, toRadian(_this.START), toRadian(_this.START += _this.step), false)
        ctx.stroke()
        ctx.closePath()
        ctx.restore()
      }

      // 绘制圆环头部，用cv2画，然后合成
      function circleHeader (img) {
        ctx2.clearRect(0, 0, cv.width, cv.height)
        var imgW = img.width
        var imgH = img.height
        var x = Math.cos(toRadian(_this.START + _this.step)) * RADIUS + CIRCLEX - imgW / 2
        var y = Math.sin(toRadian(_this.START + _this.step)) * RADIUS + CIRCLEY - imgH / 2
        ctx2.drawImage(img, 0, 0, imgW, imgH, x, y, imgW, imgH)
      }

      // 所有图片加载完成后执行
      function imgload (imgarr, callback) {
        var imgObj = {}
        var loaded = 0
        imgarr.forEach(function (value) {                         // 遍历加载完成
          var img = new Image()
          img.src = 'static/images/' + value + '.png'
          img.addEventListener('load', function () {            // 监听加载事件
            loaded++                                          // loaded++
            imgObj[value] = img                             // 储存img对象
            if (loaded >= imgarr.length) {                  // 判断loaded是否达到总长度
              callback(imgObj)                              // 回调函数调用
            }
          })
        })
      }

      // canvas 绘制开始
      var cv = document.querySelector('#cv')
      var ctx = cv.getContext('2d')
      cv.height = CVHEIGHT
      cv.width = CVWIDTH
      var cv2 = document.querySelector('#cv2')
      var ctx2 = cv2.getContext('2d')
      cv2.height = CVHEIGHT
      cv2.width = CVWIDTH

      var imgArr = ['background', 'circle']
      imgload(imgArr, function (imgObj) {
        backGradient()
        var imgW = imgObj['background'].width
        var imgH = imgObj['background'].height
        ctx.drawImage(imgObj['background'], 0, 0, imgW, imgH, 0, 0, imgW, imgH)
        // 绘制动画
        _this.animationRender(function () {
          if (_this.START > _this.END - _this.step) {
            return false
          }
          circleHeader(imgObj['circle'])
          foregroundCircle()
          return true
        }, _this.timeOut)
      })
    }
  }
}
</script>

<style scoped>
.dial-wrap {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
.dial-cv {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
