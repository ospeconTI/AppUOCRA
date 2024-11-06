/** @format */

const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const WorkboxPlugin = require("workbox-webpack-plugin");
const webpack = require("webpack");
//const nombre = "[name].bundle." + JSON.stringify(process.env.npm_package_version).replace('"', "").replace('"', "") + ".js";
const nombre = "[name].bundle.js";
module.exports = merge(common, {
	mode: "production",
	output: {
		filename: nombre,
		path: path.resolve(__dirname, "dist"),
		libraryTarget: "var",
		library: "EntryPoint",
		publicPath: "./",
	},
	plugins: [
		new WorkboxPlugin.GenerateSW({
			// these options encourage the ServiceWorkers to get in there fast
			// and not allow any straggling "old" SWs to hang around
			clientsClaim: true, ///DANIEL LO CAMBIO DE TRUE A FALSE
			//Valor por default
			skipWaiting: false,
			//Valor para forzar
			//            skipWaiting: true,
			maximumFileSizeToCacheInBytes: 4000000,
		}),
		new webpack.DefinePlugin({
			SERVICE_URL_LOGIN: JSON.stringify("https://apis.usuarios.uocra.org"),
			SERVICE_URL_SERIVICIOS_APP: JSON.stringify("https://apis.service.uocra.org"),
			SERVICE_URL_OSPECON_SERVICIOS: JSON.stringify("https://www.uocra.net/OspeconServiciosTest"),
		}),
	],
});
