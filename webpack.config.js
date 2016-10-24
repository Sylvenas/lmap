var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;


module.exports = {
	entry: {
		main: './src/main.js',
		vendor: ['react', 'react-dom', 'react-router', 'leaflet', 'esri-leaflet']
	},
	output: {
		path: './',
		filename: 'assets/bundle.js'
	},
	devServer: {
		inline: true,
		port: 3232
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style', 'css?modules')
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=8192&name=images/[name].[ext]'
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('assets/style.css'),
		new webpack.optimize.CommonsChunkPlugin('vendor', 'assets/vendor.js'),
		new HtmlWebpackPlugin({
			template: 'tmpl.html',
			title: 'lmap',
			filename: 'assets/lmap.html'
		}),
		new uglifyJsPlugin({
			output: {
				comments: false
			},
			compress: {
				warnings: false
			}
		})
	]
}