module.exports = {
	entry: {
		main: './src/main.js'
	},
	output: {
		path: './',
		filename: 'assets/bundle.js'
	},
	externals: {
		'react': 'React',
		'react-dom': 'ReactDOM',
		'leaflet':'L',
		'esri-leaflet':'L.esri'
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
				loader: 'style-loader!css-loader?modules'
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=8192&name=images/[name].[ext]'
			}
		]
	}
}