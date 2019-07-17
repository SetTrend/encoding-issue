const baseConfig = require("./webpack.config");

module.exports = {
	...baseConfig,
	mode: "production",
	performance: {
		maxAssetSize: 1000000,
		maxEntrypointSize: 1000000
	}
}