const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
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
        use: [{
          loader: 'style-loader'
        }, 
        {
          loader: 'css-loader'
        },
        {
          loader: 'sass-loader'
        }]
      }
    ]
  },
  stats: {
    colors: true
  }
};