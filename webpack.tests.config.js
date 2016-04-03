var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var host = 'localhost';
var port = 3002;

module.exports = {
  context: __dirname + '/tests',

  entry: {
    javascript: 'mocha!./index.js',
    html: './index.html',
    css: [ __dirname + '/node_modules/mocha/mocha.css' ]
  },

  output: {
    filename: 'test.build.js',
    path: __dirname + '/unit-tests'
  },

  module: {
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
        test: /\.html$|\.css$/,
        loader: 'file?name=[name].[ext]',
      }
    ]
  },

  plugins: [
    new OpenBrowserPlugin({ url: 'http://' + host + ':' + port })
  ],

  devServer: {
    host: host,
    port: port
  },

  devtool: 'source-map'
};