const path = require('path');

const cleanWP = require('clean-webpack-plugin').default;

module.exports = {
	entry: {
		testUC: "./src/Entry.ts"
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/i,
				use: 'ts-loader',
				exclude: [
					/[/\\]node_modules[/\\]/i,
					/[/\\].*\.js/i
				]
			},
			{
				test: /\.scss$/i,
				use: [
					'style-loader',	// creates style nodes from JS strings
					'css-loader',		// translates CSS into CommonJS
					'sass-loader',	// compiles SASS to CSS
				]
			},
			{
				test: /\.js$/i,
				include: [
					/[/\\]node_modules[/\\]lit-html[/\\]/i,
					/[/\\]node_modules[/\\][@]polymer[/\\]polymer[/\\]/i,
					/[/\\]node_modules[/\\][@]vaadin[/\\]/i,
					/[/\\]node_modules[/\\][@]webcomponents[/\\]/i
				],
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.(png)|(svg)|(je?pg)|(gif)$/i,
				use: 'url-loader',
				issuer: {
					include: [
						/[/\\]app[/\\]components[/\\].*\.(ts)|(scss)$/i,
						/[/\\]scripts[/\\]function[/\\].*\.(ts)|(scss)$/i
					]
				}
			}/*,  The following lines must be commmented out (and the corresponding issuer-include must be added above) due to a current Webpack bug.
      {
        test: /\.(png)|(svg)|(je?pg)|(gif)$/i,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'images',
            name: "[name].[ext]"
          }
        },
        issuer: {
          include: /[/\\]scripts[/\\]function[/\\].*\.(ts)|(scss)$/i
        }
      }*/
		]
	},
	resolve: {
		extensions: [".ts", ".js", ".scss"]
	},
	output: {
		filename: "[name].bundle.js",
		path: path.join(__dirname, 'dist'),
		publicPath: "/dist/"
	},
	plugins: [
		/**
		 * All files inside webpack's output.path directory will be removed once, but the
		 * directory itself will not be. During rebuilds, all webpack assets that are not
		 * used anymore will be removed automatically.
		 */
		new cleanWP()
	]
};