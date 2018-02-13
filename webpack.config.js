const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.[hash].js',
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
        use: [
        {
          loader: 'style-loader'
        }, 
        {
          loader: 'css-loader'
        },
        {
          loader: 'sass-loader'
        }]
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
  }
};