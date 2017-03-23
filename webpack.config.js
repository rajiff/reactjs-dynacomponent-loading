let path = require('path');
let webpack = require('webpack-dev-server');

const config = {
  entry: './App.jsx',
  output: {
    path: '/dist',
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    port: 3000
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react', 'stage-1']
      }
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  }
};

module.exports = config;
