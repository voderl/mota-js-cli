// 由于node 不支持es6 import export导入，因此使用webpack编译
const path = require('path');

module.exports = {
  mode: 'none',
  devtool: 'inline-source-map',
  entry: {
    index: path.resolve(__dirname, 'main.js'),
  },
  output: {
    publicPath: '',
    filename: '[name].bundle.js',
    // chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname),
  },
  target: 'node',
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'vendors',
  //         chunks: 'all',
  //       },
  //     },
  //   },
  // },
  plugins: [
  ],
  resolve: {

  },
  externals: [
    function (context, request, callback) {
      if (/^(jimp|free-tex-packer-core)$/.test(request)) {
        return callback(null, `commonjs ${request}`);
      }
      callback();
    },
  ],
  module: {
    // rules: [
    //   {
    //     test: /jimp/,
    //     use: [
    //       'file-loader',
    //     ],
    //   },
    // ],
  },
};
