const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isDEV = process.env.NODE_ENV === "development";

module.exports = {
  entry: path.join(__dirname, "../src/index.tsx"), //入口文件
  output: {
    filename: "static/js/[name].[chunkhash:8].js",
    path: path.join(__dirname, "../dist"),
    clean: true,
    publicPath: "/",
  },
  resolve: {
    // 如果用的是pnpm就暂时不要配置这个，会有幽灵依赖的问题，访问不到很多模块
    modules: [path.resolve(__dirname, "../node_modules")], // 查找第三方模块只在本项目的node_modules中查找
    alias: {
      "@": path.join(__dirname, "../src"),
    },
    extensions: [".js", ".tsx", ".ts"],
  },

  module: {
    rules: [
      {
        test: /.(ts|tsx)$/,
        include: [path.resolve(__dirname, "../src")], // 只针对src文件的ts,tsx进行loader解析
        use: ["thread-loader", "babel-loader"],
      },
      {
        test: /.(css|less)$/,
        include: [path.resolve(__dirname, "../src")],
        use: [
          isDEV ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["autoprefixer"],
              },
            },
          },
          "less-loader",
        ],
      },
      {
        test: /.(png|jpg|jpeg|gif|svg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 400 * 1024,
          },
        },
        generator: {
          filename: "static/images/[name].[contenthash:8][ext]",
        },
      },
      {
        test: /.(woff2?|eot|ttf|otf)$/, // 匹配字体图标文件
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
        generator: {
          filename: "static/fonts/[name].[contenthash:8][ext]",
        },
      },
      {
        test: /.(mp4|webm|ogg|mp3|wav|flac|aac)$/, // 匹配媒体文件
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
        generator: {
          filename: "static/media/[name].[contenthash:8][ext]",
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
      inject: true,
    }),
    new webpack.DefinePlugin({
      "process.env.BASE_ENV": JSON.stringify(process.env.BASE_ENV),
    }),
  ],

  cache: {
    type: "filesystem",
  },
};
