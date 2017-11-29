'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  // merge生产env和开发env  NODE_ENV
  NODE_ENV: '"development"'
})
