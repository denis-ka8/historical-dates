const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');

const production = process.env.NODE_ENV === "production";

module.exports = {
	entry: "./src/index.tsx",
	devServer: {
		port: 3001,
		hot: true,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			{
				test: /\.bundle\.ts$/,
				use: {
					loader: "bundle-loader",
					options: {
						name: "[name]",
					},
				},
			},
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.(svg|png|gif|jpg)$/,
				exclude: /fonts/,
				loader: "file-loader",
			},
			{
				test: /\.(ttf|eot|woff|svg|woff2)$/,
				loader: "file-loader",
			},
			{
				test: /\.(css)$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "public", "index.html"),
		}),
    new Dotenv(),
	],
	output: {
		filename: production ? "[name].[contenthash].js" : "[name].js",
		path: path.resolve(__dirname, "public"),
	},
};
