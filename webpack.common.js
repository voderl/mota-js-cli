
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    index: './mota/load.js',
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
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'mota', 'index.html'),
      chunks: ['vendors', 'index'],
    }),
    // new HtmlWebpackPlugin({
    //   favicon:'./source/images/index.ico',
    //   filename:'wrong.html',
    //   template:path.resolve(__dirname, 'html', 'wrong.html'),
    //   chunks:['vendors','wrong'],
    // }),
  ],
  module: {
    rules: [{
      test: /\.(png|svg|jpg|gif|ico)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
      ],
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        'file-loader',
      ],
    },
    {
      test: /\.animate$/,
      use: [
        'file-loader',
      ],
    },
    {
      test: /\.(mp3|wav|wma|ogg|ape|acc)$/,
      use: [
        'file-loader',
      ],
    },
    ],
  },
};
