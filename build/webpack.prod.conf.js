'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

const env = config.build.env

const webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true
    })
  },
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),   
    // 配上hash值，每次打包的文件都不一样
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    // UglifyJs do not support ES6+, you can also use babel-minify for better treeshaking: https://github.com/babel/minify
    new webpack.optimize.UglifyJsPlugin({
      // 压缩js
      compress: {
        warnings: false,
        drop_debugger: true,
        drop_console: true  // 压缩时，去掉console.log
      },
      sourceMap: true
    }),
    // extract css into its own file
    new ExtractTextPlugin({
      // 使用 extract-text-webpack-plugin就可以把css从js中独立抽离出来
      filename: utils.assetsPath('css/[name].[contenthash].css')
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        // 只有在单个网页的 css 全部写入一个 css 文件，并且不通过 JavaScript 进行改动时是 safe。
        // 避免重新计算 z-index
        safe: true
      }
    }),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      // 详细配置： http://blog.csdn.net/keliyxyz/article/details/51513114
      filename: config.build.index,
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,   // 去除注释
        collapseWhitespace: true,   // 去掉空格
        removeAttributeQuotes: true   // 去掉能去掉的引号
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
      // 这个选项决定了 script 标签的引用顺序。默认有四个选项，'none', 'auto', 'dependency', '{function}'。
    }),
    // keep module.id stable when vender modules does not change
    new webpack.HashedModuleIdsPlugin(),
    // 它在其基础上对模块路径进行 MD5 摘要，不仅可以实现持久化缓存，同时还避免了它引起的两个问题（文件增大，路径泄露）。用 HashedModuleIdsPlugin 可以轻松地实现 chunkhash 的稳定化
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      // 同时vue-cli默认的vendor是打包node_module下的所有依赖，会很大，在生产环境，过大的文件要尽量利用缓存来加快载入速度，但“经常变动”不利于缓存
      name: 'vendor',
      minChunks: function (module) {
        // any required modules inside node_modules are extracted to vendor
        // 所有依赖的node_modules的第三方模块，会被取出打包成vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      // 所以为了将entry(这里可认为是app.js)的变动隔离在vendor之外，vue-cli在vendor之后多做了一个manifest的chunk,这样entry只要不引入新的node_modules里的包就不会影响到vendor了
      // 最后一个chunk，被注入了webpackJsonp的定义及异步加载相关的定义(webpack调用CommonsChunkPlugin处理后模块管理的核心,因为是核心,所以要第一个进行加载,不然会报错)
      name: 'manifest',
      chunks: ['vendor']
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      // 把静态文件 拷贝到打包后的静态文件夹
      {
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

if (config.build.productionGzip) {
  const CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

if (config.build.bundleAnalyzerReport) {
  // 在config/index.js中一个相关插件叫做bundleAnalyzerReport，上面有几行注释，讲的是只要在打包的时候输入npm run build --report,就可以在打包的同时查看每个打包生成的js，里面的库的构成情况，方便我们进行相关的删减，比如有的库太大了，是否可以自己实现，有的库是否有必要，可否删除之类。
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
