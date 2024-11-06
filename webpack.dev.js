/** @format */

const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

module.exports = merge(common, {
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		contentBase: "./dist",
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
		libraryTarget: "var",
		library: "EntryPoint",
		publicPath: "/",
	},
	plugins: [
		new CopyPlugin({
			patterns: [{ from: "json", to: "json" }],
		}),
		new webpack.DefinePlugin({
			SERVICE_URL_LOGIN: JSON.stringify("https://apis.usuarios.uocra.org"),
			SERVICE_URL_SERIVICIOS_APP: JSON.stringify("https://apis.service.uocra.org"),
			SERVICE_URL_OSPECON_SERVICIOS: JSON.stringify("https://www.uocra.net/OspeconServiciosTest"),
		}),
	],
});
