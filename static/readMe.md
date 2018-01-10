# fepawn-ui

> 尝试写简单的vue复用型组件



| ![20171228201750](https://github.com/Tetegw/fepawn-ui/blob/master/static/proImage/20171228201750.png) | ![20171228201837](https://github.com/Tetegw/fepawn-ui/blob/master/static/proImage/20171228201837.png) |
| ---------------------------------------- | ---------------------------------------- |
| ![20171228201826](https://github.com/Tetegw/fepawn-ui/blob/master/static/proImage/20171228201826.png) | ![20171228201819](https://github.com/Tetegw/fepawn-ui/blob/master/static/proImage/20171228201819.png) |
| ![20171228201813](https://github.com/Tetegw/fepawn-ui/blob/master/static/proImage/20171228201813.png) | ![20171228201843](https://github.com/Tetegw/fepawn-ui/blob/master/static/proImage/20171228201843.png) |



## Build Setup

```bash
install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```



## 组件说明

### Alert

```
v-model双向绑定 显示隐藏(必传，布尔值，默认false)
:title 标题(选传，默认不显示)
:content 主要内容(必传，默认"网络繁忙，请稍候再试！")
:confirmValue 确定按钮的文案(选传，默认"确定")
:hasCancel 是否显示取消按钮(选传，布尔值，默认false不显示)
:cancelValue 取消按钮的文案(选传，默认"取消")
@confirm 监听点击确定事件
@cancel 监听点击取消事件
```

### Loading

```
:show 显示隐藏(必传)
:info 显示的文案(选传，默认无文案)
```

### CheckList

```
:data 渲染数据(必传 [{nama: 'aa', value: 'bb'}])
:hasSep  是否有分隔线(选传，默认有分隔线true)
iconFloatR  icon按钮是否显示在右边(选传，默认false在左边)
:showAll 全选按钮的显示(选传，默认显示true)
:showInvert  反选按钮的显示(选传，默认显示true)
:iconColor 选中状态图标的颜色(选传，字符串，默认#1e7e71)
@checked 监听选中事件，返回选中元素的数组
@allChecked 监听是否被全选事件，返回true(已全选)和false(未全选)
```

### Switch

```
v-model双向绑定  默认状态(选传，布尔值，默认值false)
:color 按钮选中时背景颜色(选传，字符串('#1e7e71')，默认#1e7e71)
:height  按钮大小，按高度等比例缩放(选传，字符串('20px')，默认值20px)
:disabled  按钮是否禁用(选传，布尔值，默认值false)
@switch-change  监听按钮点击状态
```

### Toast

```
v-model双向绑定 显示状态(必传，布尔值，默认false)
:info  显示的文字(必传，字符串)
:iconType  icon的类型(选传，字符串，默认success，[success, error, warn])
:time  显示的实践(选传，默认2000，Number类型)
:showIcon  是否显示icon(选传，布尔值，默认true显示)
@onShow  监听显示事件
@onHide  监听隐藏事件
```

### ActionSheet

```
v-model双向绑定  显示状态(必传，布尔值，默认false)
:itemData  列表数据(必传，数组，默认[])
:showCancel  显示取消按钮(选传，布尔值，默认true显示取消)
@cancel-action-sheet 监听取消actionSheet事件
@checkedItem 监听选中对象事件，返回索引index
```

### ButtonTab

```
:fontSize 显示字体大小(选传，Number， 默认16px)
:itemHeight 显示的按钮高度(选传，Number，默认字体大小*2)
:indexArr 按钮组的文案(必传，数组，默认['btn1', 'btn2'])
@checkedItem 监听按钮点击事件，接收点击的index
```

### BetterScroll - pullLoadMore

```
:listData 数据列表
:pullDownRefresh 是否使用下拉刷新(选传，Boolean，默认值false)
:pullUpLoad 是否使用上拉加载(选传，Boolean，默认值false)
@pullingDown 下拉事件(一般异步请求)
@pullingUp 上拉事件(一般异步请求)
```

### BetterScroll - pickerPage

```
:data 数据列表(必传，格式[[{text: '', value: 1}],[],[]])
@valueChange value改变事件，参数(val, index, text),都是数组格式
```

### WaterRipple

```
:wrapSize demo的宽度(选传，默认120)
:value value值，水波的高(必传，0-100的数字)
```

### Dial

```
:step 步数大小，每次渲染几像素(选传，Number，默认3)
:timeOut 速率，每隔多少秒绘画一次(选传，Number，默认10)
:rate 比例，需要显示的比例(必传，0-1数字)
```
