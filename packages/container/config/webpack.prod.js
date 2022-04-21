const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

// we will set up this environment variable in the cicd pipeline
// will contain string that tells us where our production application is hosted
const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
	// minifies & optimizes all js files when `production` mode is set
	mode: "production",
	output: {
		// ensure whenever we build files for prod, we will use `[name].[contenthash].js` as a template
		filename: "[name].[contenthash].js",
		// used when you need to reference a path within the built webpack files
		publicPath: "/container/latest/"
	},
	plugins: [
		new ModuleFederationPlugin({
			// not required for a host module
			name: "container",
			remotes: {
				// we are going to assume that remoteEntry.js is going to be nested inside a folder
				marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`
			},
			shared: packageJson.dependencies
		})
	]
};

module.exports = merge(commonConfig, prodConfig);
