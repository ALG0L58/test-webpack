const NodeWebExternals = require('webpack-node-externals')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

require('dotenv').config()

module.exports = {
    target: 'node',
    mode: process.env.NODE_ENV,
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: '[name].[contenthash].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, 'src', 'index.html'),
        }),
    ],
    module: {
        rules: [
          {
            test: /\.html$/i,
            loader: 'html-loader',
          },
          {
            test: /\.m?js$/i,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
              },
            },
          },
        ]
    },
    externals: [
        NodeWebExternals(),
    ],
}