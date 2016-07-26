var webpack = require('webpack')

module.exports = {
	context: __dirname,
	entry: './src/app.jsx',
	output: {
		path: './build',
		filename: 'app.bundle.js'
	},
	resolve: {
		extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.json']
	},
	// devtool: 'source-map',
	module: {
		loaders: [
			{ test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" }
		]
	},
	// plugins: [
	// 		// for use of faster redux build
	// 		new webpack.DefinePlugin({
	// 			'process.env.NODE_ENV': '"production"'
	// 		}),
	// 		new webpack.optimize.DedupePlugin(),
	// 		new webpack.optimize.OccurrenceOrderPlugin(true),
	// 		new webpack.optimize.UglifyJsPlugin({
	// 			compress: {
	// 				warnings: false
	// 			}
	// 		}),
	// ]
 }