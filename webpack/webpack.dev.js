/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')

module.exports = merge(baseConfig, {
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../dist'),
  },
  devServer: {
    host: 'localhost',
    port: 9093,
  },
  mode: 'development',
})
