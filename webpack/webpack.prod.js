/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')
const path = require('path')

module.exports = merge(baseConfig, {
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../build'),
  },
  mode: 'production',
})
