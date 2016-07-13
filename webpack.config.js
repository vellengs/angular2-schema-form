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
		filename : "[name].app.js"
	},
	entry: {
		"app": path.resolve("./src/app/main.browser"),
		"vendor": path.resolve("./src/vendor.ts")
	},
	module: {
		preLoaders: [{
			test: /\.js$/,
			loader: "source-map-loader",
			exclude: [
				path.resolve("./node_modules/rxjs"),
				path.resolve("./node_modules/@angular"),
			]
		}],
		loaders: [{
			test: /\.ts$/,
			loader: "awesome-typescript-loader",
			exclude: [/\.spec\.ts$/]
		},{
			test: /\.json$/,
			loader: "json-loader"
		},{
			test: /\.css$/,
			loader: 'raw-loader'
		},{
			test: /\.html/,
			loader: "raw-loader",
			exclude: [path.resolve("./src/index.html")]
		}]
	},
	plugins : [
//		new webpack.optimize.UglifyJsPlugin({}),
		new HtmlWebpackPlugin({
			hash: true,
			filename: "index.html",
			template : path.resolve("./src/index.html")
		})
	],
	devServer: {
		port: 3000,
		historyApiFallback: true
	},
	node: {
		global: 'window',
		crypto: 'empty',
		module: false,
		clearImmediate: false,
		setImmediate: false,
	}

};
