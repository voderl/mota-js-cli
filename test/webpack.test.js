const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    index: path.resolve(__dirname, './main.js'),
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
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'disk'),
    // hot: true,
    open: true,
  },
  output: {
    publicPath: '',
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'disk'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'index.html'),
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
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
      ],
    },
    ],
  },
};
