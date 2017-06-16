const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractStyles = new ExtractTextPlugin('style.min.css');
const extractHtmls = new ExtractTextPlugin('../index.html');

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: {
		app: './App.js',
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: "babel-loader"
			},
			{
				test: /\.css$/,
				use: extractStyles.extract({
					use: [
						{
							loader: 'css-loader',
							options: { 
								importLoaders: 1,
								import: true,
								minimize: true,
								sourceMap: true
							}
						},
						'postcss-loader'
					],
				}),
			},
			{
				test: /\.html$/,
				use: extractHtmls.extract({
					use: [
						{
							loader: 'html-loader',
							options: {
								minimize: true,
								removeComments: false,
								collapseWhitespace: false
							}
						}
					]
				})
			}
		]
	},
	output: {
		path: path.resolve(__dirname, 'dist/assets'),
		filename: '[name].bundle.js'
	},
	resolve: {
		modules: [path.resolve(__dirname, 'src'), 'node_modules'],
	},
	plugins: [
		extractStyles,
		extractHtmls
	]
};