const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
	mode: "development",
	devServer: {
		port: 8081
	},
	plugins: [
		new ModuleFederationPlugin({
			name: "products",
			filename: "remoteEntry.js",
			exposes: {
				// why do this? Bc sometimes the name of our file inside products is only meaningful within its scope
				"./ProductsIndex": "./src/index"
			},
			shared: ['faker']
		}),
		new HtmlWebpackPlugin({
			template: "./public/index.html"
		})
	]
};
