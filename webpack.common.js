/** @format */

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

module.exports = {
	optimization: {
		minimizer: [
			new TerserPlugin({
				extractComments: true,
				cache: false,
			}),
		],
	},
	entry: {
		app: "./src/sandbox.js",
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: "Titulo",
			template: "./src/index.html",
			filename: "index.html",
			favicon: "./assets/icons/favicon.ico",
		}),
		new WebpackPwaManifest({
			name: "uocra",
			short_name: "UOCRA",
			description: "",
			start_url: "./index.html",
			background_color: "#ffffff",
			display: "standalone",
			scope: "./",
			theme_color: "#ffffff",
			orientation: "portrait",
			fingerprints: false,
			categories: ["education", "medical"],
			icons: [
				{
					src: path.resolve("assets/icons/icon-android-192x192.png"),
					sizes: "192x192",
					type: "image/png",
				},
				{
					src: path.resolve("assets/icons/icon-android-256x256.png"),
					sizes: "256x256",
					type: "image/png",
				},
				{
					src: path.resolve("assets/icons/icon-android-384x384.png"),
					sizes: "384x384",
					type: "image/png",
				},
				{
					src: path.resolve("assets/icons/icon-android-512x512.png"),
					sizes: "512x512",
					type: "image/png",
				},
			],
		}),

		new webpack.DefinePlugin({
			__VERSION__: JSON.stringify(process.env.npm_package_version),
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ["file-loader"],
			},
			{
				test: /\.(woff|ttf|woff2)$/,
				use: {
					loader: "url-loader",
					options: {
						limit: 50000,
					},
				},
			},
		],
	},
};
