const path = require('path')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'

const getMode = () => (isProd ? 'production' : 'development')
const getDevtool = () => (isProd ? false : 'source-map')

const getStyleLoaders = loader => {
	const defaultLoader = [MiniCssExtractPlugin.loader, 'css-loader', getPostCSSLoader('autoprefixer'), getPostCSSLoader('css-mqpacker')]

	if (isProd) {
		defaultLoader.push(getPostCSSLoader('cssnano'))
	}
	if (loader) {
		defaultLoader.push(loader)
	}

	return defaultLoader
}

const getPostCSSLoader = plugin => {
	return {
		loader: 'postcss-loader',
		options: {
			postcssOptions: {
				plugins: [[plugin]],
			},
		},
	}
}

module.exports = {
	mode: getMode(),
	devtool: getDevtool(),
	context: path.resolve(__dirname, 'client', 'src'),
	entry: './index.js',
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.css$/i,
				use: getStyleLoaders(),
			},
			{
				test: /\.s[ac]ss$/i,
				use: getStyleLoaders('sass-loader'),
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin(/* { filename: 'index.css' } */),
		new CopyWebpackPlugin({ patterns: [{ from: 'assets/images' }] }),
	],
	output: { /* filename: 'index.js', */ path: path.resolve(__dirname, 'client', 'dist') },
}
