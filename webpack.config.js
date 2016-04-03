var webpack = require('webpack');
var host = 'localhost';
var port = 3001;
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  context: __dirname + '/src',
  entry: {
    javascript: './app.js',
    html: './index.html',
    css: [ __dirname + '/node_modules/material-design-lite/dist/material.grey-indigo.min.css' ]
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query:
        {
          presets:['react', 'es2015']
        }
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
      {
        test: /\.css$/,
        loader: 'file?name=styles/[name].[ext]',
      },
    ],
  },

  plugins: [
    new OpenBrowserPlugin({ url: 'http://' + host + ':' + port })
  ],

  output: {
    filename: 'app.js',
    path: __dirname + '/dist',
  },

  devServer: {
    host: host,
    port: port
  },

  devtool: 'source-map',
}
