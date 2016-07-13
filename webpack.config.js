webpack = require("webpack");
HtmlWebpackPlugin = require("html-webpack-plugin");
CopyWebpackPlugin = require("copy-webpack-plugin");
path = require("path");

const METADATA = {
	title : "Angular2 Schema Form demo",
	baseUrl: process.env.NODE_ENV === "production" ? "/angular2-schema-form/" : "/"
};

module.exports = {
	metadata: METADATA,
	contexxt: path.resolve("."),
	resolve: {
		extensions : ["",".ts",".js"]
	},
	output: {
		path: path.resolve("."),
		publicPath: METADATA.baseUrl,
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
			filename: "index.html",
			template: path.resolve("./src/index.html"),
		})
	],
	devServer: {
		port: 3003,
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
