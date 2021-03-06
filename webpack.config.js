var webpack = require('webpack');
var path = require('path');

module.exports = {

  devtool: 'source-map',
  context: __dirname,
  entry: './client/src/main',

  output: {
    path: __dirname + '/client/public/js',
    filename: 'bundle.js'
  },

  //cache: true,
  //devtool: 'source-map',

  resolve: {
    extensions: ['.webpack.js', '.web.js', '.js', '.jsx'],
    modules: [
      './client/src',
      path.resolve(__dirname, 'node_modules')
    ],
    alias: { 
      todos: 'todos',
      async: 'async'
    }
  },

  module: {
    loaders:[
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        exclude: 'node_modules'
      },
      {
        test: /\.html$|\.css$/,         // copy html and css 'as is'
        loader: 'file?name=[name].[ext]'
      }
    ]
  },

  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'redux': 'Redux',
    'react-redux': 'ReactRedux',
    'redux-thunk': 'ReduxThunk',
    'redux-logger' : 'reduxLogger',
    'axios': 'axios',
    'immutable': 'Immutable'
  }
}