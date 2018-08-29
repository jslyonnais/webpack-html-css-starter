const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
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
				test: /\.(css|scss)$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true
                            }
                        },
                        {
                            loader: 'postcss-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                })
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
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: 'svg-sprite-loader',
						options: {
							extract: true,
							spriteFilename: '/assets/sprite.svg'
						}
					}
				]
			}
		]
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: './assets/[name].bundle.js'
	},
	resolve: {
		modules: [path.resolve(__dirname, 'src'), 'node_modules'],
	},
	plugins: [
		new CopyWebpackPlugin([
			{
				from: './assets/images/**/*',
                to: './'
			},
			{
				from: './assets/favicon/**/*',
                to: './'
			},
			{
				from: './assets/files/**/*',
                to: './'
			}
		]),
		new ExtractTextPlugin({
			filename: './assets/style.min.css'
		}),
		new SpriteLoaderPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			hash: true,
			template: 'index.html',
		})
	]
};