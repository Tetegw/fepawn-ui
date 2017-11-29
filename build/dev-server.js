'use strict'
require('./check-versions')()   // 检查node以及npm版本

const config = require('../config') // 引入配置文件config/index
if (!process.env.NODE_ENV) {
  // 如果进程env.NODE_ENV不存在(第一次执行？)，则存储dev中的环境标识
  // http://nodejs.cn/api/process.html#process_process_env
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

const opn = require('opn')    // Opens the url in the default browser
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const proxyMiddleware = require('http-proxy-middleware')    // http代理中间件
const webpackConfig = require('./webpack.dev.conf')  // 引入webpack的dev配置

// default port where dev server listens for incoming traffic （队列？）
const port = process.env.PORT || config.dev.port  // 如果process.env.PORT不存在，使用dev中的port配置
// automatically open browser, if not set will be false
const autoOpenBrowser = !!config.dev.autoOpenBrowser  // 检查使用需要自动打开浏览器
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
const proxyTable = config.dev.proxyTable  // 检查dev设置的代理

const app = express()
const compiler = webpack(webpackConfig)   // 执行webpack,传入webpack的dev配置

// 伺服器,对更改文件的监控
const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

// 页面的热重载
const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000 // 心跳机制
})
// force page reload when html-webpack-plugin template changes
// currently disabled until this is resolved:
// https://github.com/jantimon/html-webpack-plugin/issues/680
// compiler.plugin('compilation', function (compilation) {
//   compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
//     hotMiddleware.publish({ action: 'reload' })
//     cb()
//   })
// })

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  // 使用http-proxy-middleware，解决开发环境代理问题
  let options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API 
// 就是让你的单页面路由处理更自然（比如vue-router的mode设置为html5时）
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// serve pure static assets
// 访问./static => 相当于访问/static()
const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

const uri = 'http://localhost:' + port

var _resolve
var _reject
var readyPromise = new Promise((resolve, reject) => {
  _resolve = resolve
  _reject = reject
})

var server
var portfinder = require('portfinder')
portfinder.basePort = port

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  portfinder.getPort((err, port) => {
    if (err) {
      _reject(err)
    }
    process.env.PORT = port
    var uri = 'http://localhost:' + port
    console.log('> Listening at ' + uri + '\n')
    // when env is testing, don't need open it
    if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
      // 自动打开浏览器
      opn(uri)
    }
    server = app.listen(port)
    _resolve()
  })
})

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}

// 开启node服务
// 文件监控，热更新
// 使用开发时设置的代理
// 静态文件访问
// 自动打开浏览器
