const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FileSystem = require('fs');

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
    new ExtractTextPlugin('css/[hash]bundle.css'),
    // below code is meant to overwrite the script tag to use the new bundled file, but is not working properly
    function() {
      this.plugin("done", function(statsData) {
        var stats = statsData.toJson();
        if (!stats.errors.length) {
          var htmlFileName = "index.html";
          var html = FileSystem.readFileSync(path.join(__dirname, 'dist', htmlFileName), "utf8");

          var htmlOutput = html.replace(
              /<script\s+src=(["'])(.+?)bundle\.js\1/i,
              "<script src=$1$2" + stats.assetsByChunkName.main[0] + "$1");

          FileSystem.writeFileSync(
              path.join(__dirname, "dist", htmlFileName),
              htmlOutput);
        }
      });
    }
  ]
};