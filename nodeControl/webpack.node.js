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
    rules: [
      {
        test: /data.js$/,
        use: 'exports-loader?data_a1e2fb4a_e986_4524_b0da_9b7ba7c0874d',
      },
      {
        test: /maps.js$/,
        use: 'exports-loader?maps_90f36752_8815_4be8_b32b_d7fad1d0542e',
      },
      {
        test: /icons.js$/,
        use: 'exports-loader?icons_4665ee12_3a1f_44a4_bea3_0fccba634dc1',
      },
    ],
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
