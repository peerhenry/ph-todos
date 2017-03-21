var webpack = require('webpack');
var path = require('path');
var config = require('./webpack.config');
var WebpackShellPlugin = require('webpack-shell-plugin');

const outputDir = 'test-report';
const outputBundle = 'testbundle.js';

module.exports = {

  context: __dirname,
  entry: './test/all-tests.js',

  output: {
    path: __dirname + '/' + outputDir,
    filename: outputBundle
  },

  devtool: 'eval',

  resolve: config.resolve,
  module: config.module,

  plugins: [
    new WebpackShellPlugin({
      onBuildExit: 'mocha ' + outputDir + '/' + outputBundle + ' --opts test/mocha.opts'
    })
  ],

  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'redux': 'Redux',
    'react-redux': 'ReactRedux',
    'mocha': 'Mocha',
    'enzyme': 'Enzyme',
    'chai': 'Chai',
    'sinon': 'Sinon',
    'jsdom': 'jsdom'
  }
}