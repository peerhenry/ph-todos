var webpack = require('webpack');
var path = require('path')

module.exports = {

  devtool: 'source-map', // idem to config
  context: __dirname, // idem to config
  entry: ['webpack-hot-middleware/client', './client/src/main'],

  output: { // idem to config
    path: __dirname + '/client/public/js',
    filename: 'bundle.js'
  },

  resolve: { // idem to config
    extensions: ['.webpack.js', '.web.js', '.js', '.jsx'],
    modules: [
      './client/src',
      path.join(__dirname, 'node_modules')
    ],
    alias: { 
      todos: 'todos',
      async: 'async'
    }
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],

  module: {
    loaders:[ // idem to config
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }
    ]
  },

  externals: { // idem to config
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