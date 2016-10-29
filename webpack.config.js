var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
	entry: {
		main: './src/main.js',
		vendor: ['react', 'react-dom', 'react-router', 'esri-leaflet', 'leaflet']
	},
	output: {
		path: './assets',
		filename: 'bundle.js',
		chunkFilename: '[name].js'
	},
	devServer: {
		inline: true,
		port: 3232
	},
	// devtool: '#inline-eval-cheap-source-map',                       //添加浏览器直接调试源代码的source-map(开发环境使用，项目上线一定要注释)
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
		//独立打包样式
		new ExtractTextPlugin('style.css'),
		//打包公共类库
		new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
        //自动打开浏览器
		new OpenBrowserPlugin({ url: 'http://localhost:3232' })
		// //使用build版本的react
		// new webpack.DefinePlugin({
		// 	'process.env': {
		// 		'NODE_ENV': JSON.stringify('production')
		// 	}
		// }),
		// //打包html
		// new HtmlWebpackPlugin({
		// 	template: 'tmpl.html',
		// 	title: 'lmap',
		// 	filename: 'lmap.html'
		// }),
		// //压缩代码
		// new uglifyJsPlugin({
		// 	output: {
		// 		comments: false
		// 	},
		// 	compress: {
		// 		warnings: false
		// 	}
		// })
	]
}