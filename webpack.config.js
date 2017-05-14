module.exports = {
	entry: './src/main.js',
	devtool: 'source-map',
	output: {
		path: '/',
		publicPath: '/',
		filename: 'bundle.js',
	},
	devServer: {
		inline: true,
		port: 3142,
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react', 'stage-1', 'env'],
				},
			},
		],
	},
};
