const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	module: {
		rules: [
			// loader tells webpack to process files as we load them into our project
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-react", "@babel/preset-env"],
						plugins: ["@babel/plugin-transform-runtime"]
					}
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html"
		})
	]
};
