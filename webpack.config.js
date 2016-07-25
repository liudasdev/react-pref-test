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
	devtool: 'source-map',
	module: {
		loaders: [
			{ test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" }
		]
	}
 }