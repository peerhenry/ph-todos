var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/router.js',
	output: {
		filename: 'bin/serverbundle.js',
		libraryTarget: 'commonjs2'
	},
	target: 'node',
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