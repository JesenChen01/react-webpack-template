const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  devServer: {
    port: 3000,
    compress: false,
    hot: true,
    // open: true,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "../public"),
    },
  },
  plugins: [new ReactRefreshWebpackPlugin()],
});
