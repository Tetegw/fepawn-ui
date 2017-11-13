# fepawn-ui

> 尝试写简单的vue复用型组件



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
:show 显示隐藏(必传)
:title 标题(选传，默认不显示)
:content 主要内容(必传)
:confirmValue 确定按钮的文案(选传，默认确定)
:hasCancel 是否显示取消按钮(选传，默认不显示)
:cancelValue 取消按钮的文案(选传，默认取消)
@confirm 监听点击确定事件
@cancel 监听点击取消事件
```



### loading

```
:show 显示隐藏(必传)
:info 显示的文案(选传，默认无文案)
```



### checkList

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

