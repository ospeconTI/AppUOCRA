/** @format */

const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const WorkboxPlugin = require("workbox-webpack-plugin");
const webpack = require("webpack");

module.exports = merge(common, {
	mode: "production",
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
		libraryTarget: "var",
		library: "EntryPoint",
		publicPath: "./",
	},
	plugins: [
		new WorkboxPlugin.GenerateSW({
			// these options encourage the ServiceWorkers to get in there fast
			// and not allow any straggling "old" SWs to hang around
			clientsClaim: true,
			//Valor por default
			skipWaiting: false,
			//Valor para forzar
			//            skipWaiting: true,
			maximumFileSizeToCacheInBytes: 4000000,
		}),
		new webpack.DefinePlugin({
			SERVICE_URL_LOGIN: JSON.stringify("https://apis.usuarios.uocra.org"),
		}),
	],
});
