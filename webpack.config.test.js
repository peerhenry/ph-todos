var webpack = require('webpack');
var path = require('path');
var config = require('./webpack.config');

module.exports = {

  context: __dirname,
  entry: './client/test/all-tests.js',

  output: {
    path: __dirname + '/client/test-report',
    filename: 'testbundle.js'
  },

  devtool: 'eval',

  resolve: config.resolve,
  module: config.module,

  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'redux': 'Redux',
    'react-redux': 'ReactRedux',
    'axios': 'Axios',
    'immutable': 'Immutable',
    'mocha': 'Mocha',
    'enzyme': 'Enzyme',
    'chai': 'Chai',
    'sinon': 'Sinon',
    'jsdom': 'jsdom'
  }
}