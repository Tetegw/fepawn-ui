/* eslint-disable */
'use strict'
require('eventsource-polyfill')
// 支持w3c规范, 一个浏览器w3c eventsource的ployfill, 在不支持事件源的浏览器里添加填充策略支持
// 先检查浏览器是否支持某个api, 如果不支持就加载对应的polyfill
var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')

hotClient.subscribe(function (event) {
  if (event.action === 'reload') {
    window.location.reload()
  }
})

// eventsource的ployfill 来处理重载事件(reload)
