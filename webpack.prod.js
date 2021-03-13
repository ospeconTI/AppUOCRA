/** @format */

const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const WorkboxPlugin = require("workbox-webpack-plugin");

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
            skipWaiting: true,
            maximumFileSizeToCacheInBytes: 4000000,
        }),
    ],
});
