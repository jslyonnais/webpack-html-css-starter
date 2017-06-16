const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const extractStyles = new ExtractTextPlugin('style.min.css');
const path = require('path');
const webpack = require('webpack');

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
		new HtmlWebpackPlugin({
			filename: '../index.html',
			hash: true,
			// favicon: 'favicon.ico',
			template: 'index.html',
		}),
	]
};