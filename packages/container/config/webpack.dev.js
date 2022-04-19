const { merge } = require("webpack-merge");
// takes an html file inside our project and injects some script tags inside of it
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

// configuration to give webpack when we are in dev mode
const devConfig = {
	mode: "development",
	devServer: {
		port: 8080,
		historyApiFallback: {
			index: "index.html"
		}
	},
	plugins: [
		new ModuleFederationPlugin({
			name: "container",
			remotes: {
				marketing: "marketing@http://localhost:8081/remoteEntry.js"
			},
			shared: packageJson.dependencies
		}),
		new HtmlWebpackPlugin({
			template: "./public/index.html"
		})
	]
};

module.exports = merge(commonConfig, devConfig);
