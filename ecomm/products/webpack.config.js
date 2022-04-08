const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	devServer: {
		port: 8081
	},
    // this plugin will look at whatever files are coming out of our webpack process, find the files names, and add the appropiate script tags automatically to our html page
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html"
		})
	]
};
