'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  transformToRequire: {
    // 以前在写 Vue 的时候经常会写到这样的代码：把图片提前 require 传给一个变量再传给组件。
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
