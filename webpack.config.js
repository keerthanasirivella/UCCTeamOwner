var path = require('path');
var webpack = require('webpack');


module.exports = {
	mode : 'development',
	devtool : 'source-map',
	entry : ['./ts-src/app.ts'],
	output : {
		path : path.join(__dirname, '/build'),
		filename : 'app.js'
	},
	module : {
		rules : [{
			test : /\.ts$/,
			include : path.resolve(__dirname, 'ts-src'),
			loader : 'ts-loader'
		}]
	},
	resolve : {
		extensions : [".webpack.js", ".web.js", ".ts", ".js"]
	}
};