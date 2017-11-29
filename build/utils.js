'use strict'
const path = require('path')
const config = require('../config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: process.env.NODE_ENV === 'production',
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    const loaders = [cssLoader]
    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
// 为单独的样式文件，产生loaders，排除.vue文件
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)
  /* { css:
   [ 'vue-style-loader',
     { loader: 'css-loader', options: [Object] } ],
  postcss:
   [ 'vue-style-loader',
     { loader: 'css-loader', options: [Object] } ],
  less:
   [ 'vue-style-loader',
     { loader: 'css-loader', options: [Object] },
     { loader: 'less-loader', options: [Object] } ],
  sass:
   [ 'vue-style-loader',
     { loader: 'css-loader', options: [Object] },
     { loader: 'sass-loader', options: [Object] } ],
  scss:
   [ 'vue-style-loader',
     { loader: 'css-loader', options: [Object] },
     { loader: 'sass-loader', options: [Object] } ],
  stylus:
   [ 'vue-style-loader',
     { loader: 'css-loader', options: [Object] },
     { loader: 'stylus-loader', options: [Object] } ],
  styl:
   [ 'vue-style-loader',
     { loader: 'css-loader', options: [Object] },
     { loader: 'stylus-loader', options: [Object] } ] } */
  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }
  return output
}

//  assetsPath
// css-loader 以及 stylus-loader
