const path = require('path');
module.exports = {
	entry : {
		main : './src/controller/Main.ts'
	},
	devtool : 'inline-source-map',
	mode : 'development',
	module : {
		rules : [ {
			test : /\.ts$/,
			use : 'ts-loader',
			exclude : /node_modules/
		} ]
	},
	resolve : {
		extensions : [ '.ts', '.js' ]
	},
	output : {
		filename : '[name].js',
		path : path.resolve(__dirname, './dist/')
	},
	plugins : [
	],
	optimization: {
		splitChunks: {
			chunks: "all",
			minSize: 30000,
			minChunks: 1,
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			automaticNameDelimiter: '-',
			name: true,
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10
				},
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true
				}
			}
		}
	}
};