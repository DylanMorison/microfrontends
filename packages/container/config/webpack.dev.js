const { merge } = require("webpack-merge");
// takes an html file inside our project and injects some script tags inside of it
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.common");

// configuration to give webpack when we are in dev mode
const devConfig = {
	mode: "development",
	devServer: {
		port: 8081,
		historyApiFallback: {
			index: "index.html"
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html"
		})
	]
};

module.exports = merge(commonConfig, devConfig);
