const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'test2'),
    // hot: true,
    open: true,
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    publicPath: '',
    filename: '[name].[hash].bundle.js',
    chunkFilename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'test2'),
  },
  module: {
    // rules: [{
    //   test: /\.css$/,
    //   use: [
    //     'style-loader',
    //     'css-loader',
    //   ],
    // },
    // ],
  },
});
