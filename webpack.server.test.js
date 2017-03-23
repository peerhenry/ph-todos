var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './test/all-tests.js',
	output: {
		filename: 'test-report/testbundle.js'
	},
  externals: [nodeExternals()],
	module: {
    rules:[
      {
        test: /\.js$/,
				exclude: 'node_modules',
        use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015']
					}
				}
      }
		]
	}
};