const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');
const resolve = (dir) => path.resolve(process.cwd(), dir);

module.exports = {
  mode: 'production',
  entry: {
    common: ['vue'],
    app: ['./src/index.js'],
  },
  output: {
    path: resolve('dist'),
    chunkFilename: `scripts/[name].[hash:8].min.js`,
    publicPath: '',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('./src'),
      '@components': resolve('./src/components'),
      '@pages': resolve('./src/pages'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'vue-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'less-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|xlsx)(\?.*)?$/,
        loader: 'url-loader',
      },
    ],
  },
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true, // 开启多进程运行提升编译速度
        terserOptions: {
          sourceMap: true, // Must be set to true if using source-maps in production
          compress: {
            warnings: false,
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ['console.log'], // 移除console
          },
        },
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'vue-project-template',
      inject: true,
      template: resolve('build/index.template.html'),
    }),
    // ProvidePlugin 可以自动加载模块，不需要手动使用 import /require 引入模块
    new Webpack.ProvidePlugin({}),
    new VueLoaderPlugin(),
  ],
};
