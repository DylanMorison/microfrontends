const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const prodConfig = {
	// minifies & optimizes all js files when `production` mode is set
	mode: "production",
	output: {
		// ensure whenever we build files for prod, we will use `[name].[contenthash].js` as a template
		filename: "[name].[contenthash].js",
		// we set this so different script tags inside our html file will refer to the correct location of all of our javascript files
		// in this case, we are setting the remotePath so ModuleFederationPlugin knows where to get the remoteEntry.js file
		publicPath: "/marketing/latest/"
	},
	plugins: [
		new ModuleFederationPlugin({
			// not required for a host module
			name: "marketing",
			filename: "remoteEntry.js",
			exposes: {
				"./MarketingApp": "./src/bootstrap"
			},
			shared: packageJson.dependencies
		})
	]
};

module.exports = merge(commonConfig, prodConfig);
