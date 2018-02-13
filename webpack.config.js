const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        exclude: '/node_modules'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader'
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
        {
          loader: 'file-loader'
        }]
      },
      {
        test: /\.(svg)$/,
        use: [
        {
          loader: 'url-loader',
          options: {
            limit: 1000000,
            fallback: 'file-loader'
          }
        }]
      }
    ]
  },
  stats: {
    colors: true
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin('bundle.[chunkhash].css'),
    new HtmlWebpackPlugin({ title: 'Output Management' }),
  ]
};