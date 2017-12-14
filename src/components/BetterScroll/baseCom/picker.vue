<template>
  <div class="picker">
		<div class="picker-panel">
			<!-- header -->
			<div class="picker-choose border-bot-1px">
				<span class="cancel">cancelTxt</span>
				<span class="confirm">confirmTxt</span>
				<h1 class="picker-title">title</h1>
			</div>
			<!-- content -->
			<div class="picker-content">
				<!-- 上下遮罩，一像素边线 -->
				<div class="mask-top border-bottom-1px"></div>
				<div class="mask-bottom border-top-1px"></div>
				<!-- 3D 选择区域 -->
				<div class="wheel-wrapper" ref="wheelWrapper">
					<div class="wheel" v-for="(item, index) in pickerData" :key="item">
						<ul class="wheel-scroll">
							<li v-for="(item, index) in data" class="wheel-item" :key="item">{{item.text}}</li>
						</ul>
					</div>
				</div>
			</div>
      <!-- footer -->
      <div class="picker-footer"></div>
		</div>
  </div>
</template>

<script>
// import BScroll from 'better-scroll'
export default {
  data () {
    return {
      pickerData: [],
      data: []
    }
  }
}
</script>

<style scoped>
@import url('../../../assets/style/index.css');
.picker{
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  overflow: hidden;
  text-align: center;
  font-size: 14px;
  background-color: rgba(37, 38, 45, .4);
}
.picker .picker-fade-enter, .picker .picker-fade-leave-to{
  opacity: 0
}
.picker .picker-fade-enter-active, .picker .picker-fade-leave-active{
  transition: all .3s ease-in-out
}
.picker-panel{
  position: absolute;
  z-index: 600;
  bottom: 0;
  width: 100%;
  height: 273px;
  background: #fff;
}

.picker-panel .picker-move-enter, .picker-panel .picker-move-leave-to{
  transform: translate3d(0, 273px, 0)
}
.picker-panel .picker-move-enter-active, .picker-panel .picker-move-leave-active{
  transition: all .3s ease-in-out
}

.picker-choose{
  position: relative;
  height: 60px;
  color: #999;
}
        
.picker-choose .picker-title{
  margin: 0;
  line-height: 60px;
  font-weight: normal;
  text-align: center;
  font-size: 18px;
  color: #333;
}
  
.picker-choose .confirm, .picker-choose .cancel{
  position: absolute;
  top: 6px;
  padding: 16px;
  font-size: 14px;
}
.picker-choose .confirm{
  right: 0;
  color: #007bff;
}
.picker-choose .confirm:active{
  color: #5aaaff;
}
.picker-choose .cancel{
  left: 0;
}
.picker-choose .cancel:active{
  color: #fdc2a5;
}
.picker-choose .picker-content{
  position: relative;
  top: 20px;
}
.mask-top, .mask-bottom{
  z-index: 10;
  width: 100%;
  height: 68px;
  pointer-events: none;
  transform: translateZ(0);
}
.mask-top{
  position: absolute;
  top: 0;
  background: linear-gradient(to top, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.8));
}
.mask-bottom{
  position: absolute;
  bottom: 1px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.8));
}
.wheel-wrapper{
  display: flex;
  padding: 0 16px;
}
.wheel{
  -ms-flex: 1 1 0.000000001px;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  -webkit-flex-basis: 0.000000001px;
  flex-basis: 0.000000001px;
  width: 1%;
  height: 173px;
  overflow: hidden;
  font-size: 20px;
}
.wheel-scroll{
  padding: 0;
  margin-top: 68px;
  line-height: 36px;
  list-style: none;
}
.wheel-item{
  list-style: none;
  height: 36px;
  overflow: hidden;
  white-space: nowrap;
  color: #333;
}
.picker-footer{
  height: 20px
}
</style>
