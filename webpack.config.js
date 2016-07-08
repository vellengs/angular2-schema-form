webpack = require("webpack");
HtmlWebpackPlugin = require("html-webpack-plugin");
path = require("path");

const METADATA = {
	title : "Angular2 Schema Form demo",
	baseUrl: "/"
};

module.exports = {
	metadata: METADATA,

	resolve: {
		extensions : ["",".ts",".js"]
	},
	output: {
		path: path.resolve("."),
		filename : "ghpages.app.js"
	},
	entry: {
		"app": path.resolve("./src/app/main.browser")
	},
	module: {
		preLoaders: [{
			test: /\.js$/,
			loader: "source-map-loader",
			exclude: [ /node_modules/]
		}],
		loaders: [{
			test: /\.ts$/,
			loader: "awesome-typescript-loader",
			exclude: /node_modules/
		},{
			test: /\.json$/,
			loader: "json-loader"
		},{
			test: /\.css$/,
			loader: 'raw-loader',
		},{
			test: /\.html/,
			loader: "raw-loader",
			exclude: path.resolve("index.html")
		}]
	},
	plugins : [
		new webpack.optimize.UglifyJsPlugin({}),
		new HtmlWebpackPlugin({
			hash: true,
			filename: "index.html",
			template : path.resolve("./src/index.html")
		})
	],
	node: {
		global: 'window',
		crypto: 'empty',
		module: false,
		clearImmediate: false,
		setImmediate: false,
	}

};
