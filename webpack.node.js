// 由于node 不支持es6 import export导入，因此使用webpack编译
const path = require('path');

module.exports = {
  mode: 'none',
  entry: {
    index: './nodeControl/main.js',
  },
  output: {
    publicPath: '',
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'nodeControl', 'disk'),
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
  ],
  module: {
  },
};
