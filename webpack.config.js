var webpack = require('webpack');

module.exports = {

  context: __dirname + '/src',
  entry: './main',

  output: {
    path: __dirname + '/public/javascripts',
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['.webpack.js', '.web.js', '.js', '.jsx'],
    alias: {}
  },

  module: {
    loaders:[
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015','stage-0']
        },
        exclude: 'node_modules'
      }
    ]
  },

  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'redux': 'Redux',
    'react-redux': 'ReactRedux'
  }
}