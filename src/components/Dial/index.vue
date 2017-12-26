<template>
  <div class="dial-wrap">
    <div class="mask">
      <canvas id="cv"></canvas>
      <img src="./mask.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    var cv = document.querySelector('#cv')
    var ctx = cv.getContext('2d')
    cv.height = 600
    cv.width = 1000

    function toRadian (angle) {
      return angle / 180 * Math.PI
    }

    // function toAngle (radian) {
    //   return radian / Math.PI * 180
    // }

    var data = [{
      'value': 0.1,
      'color': 'orange',
      'title': '社会招生'
    }, {
      'value': 0.1,
      'color': 'pink',
      'title': '公务员'
    }, {
      'value': 0.1,
      'color': 'gray',
      'title': '公开课'
    }, {
      'value': 0.1,
      'color': '#909090',
      'title': '前端'
    }, {
      'value': 0.2,
      'color': 'red',
      'title': '应届生'
    }, {
      'value': 0.3,
      'color': 'blue',
      'title': '程序员'
    }, {
      'value': 0.1,
      'color': '#abc',
      'title': '老司机'
    }]

    var startAngle = -90 // 开始的角度（设置为-90度,sincos都好计算）
    var r = 100 // 半径值
    var rline = 30 // 半径延长线的长度
    var x0 = 200 // 圆心坐标
    var y0 = 200
    var txtPadding = 10 // 文字到线的距离
    var txtBottomLen = 0

    // console.log(sum);
    data.forEach(function (value) {
      // 计算延长线角度
      var textAngle = startAngle + value.value * 360 / 2
      // 延长线x,y的坐标
      var textX = x0 + (r + rline) * Math.cos(toRadian(textAngle))
      var textY = y0 + (r + rline) * Math.sin(toRadian(textAngle))

      // 绘制圆弧
      ctx.beginPath()
      ctx.moveTo(x0, y0)
      ctx.fillStyle = value.color
      ctx.arc(x0, y0, r, toRadian(startAngle), toRadian(startAngle += value.value * 360), false)
      ctx.fill()

      // 绘制直线
      ctx.beginPath()
      ctx.strokeStyle = value.color
      ctx.moveTo(x0, y0)
      ctx.lineTo(textX, textY)
      ctx.moveTo(textX, textY)

      // 在Y轴左边的 都是负值
      ctx.font = '18px 微软雅黑'
      var txtw = ctx.measureText(value.title).width  // 文本宽度
      if (textX < x0) {
        txtBottomLen = -txtw
        txtPadding = -Math.abs(txtPadding)
        ctx.textAlign = 'right'
      } else {
        txtBottomLen = txtw
      }

      ctx.lineTo(textX + txtBottomLen + txtPadding * 2, textY)
      ctx.stroke()

      // 绘制文字
      ctx.fillText(value.title, textX + txtPadding, textY - 8)
    })
  }
}
</script>

<style>
.mask {
  width: 100%;
  background-color: #f59d69;
  font-size: 0;
}
.mask img {
  width: 100%;
}
</style>
