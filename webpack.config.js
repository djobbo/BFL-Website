const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/client/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './assets/js/bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            publicPath: (url) => url.replace(/public/, ''),
                        },
                    },
                ],
            },
            {
                test: /\.tsx?$/,
                use: ['babel-loader', 'webpack-import-glob-loader', 'eslint-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.md$/,
                use: ['babel-loader', 'frontmatter-markdown-loader', 'sanitize-md-loader'],
            },
        ],
    },
    resolveLoader: {
        modules: ['node_modules', path.resolve(__dirname, 'loaders')],
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.md', '.json'],
    },
    devServer: {
        host: process.env.HOST || 'localhost',
        port: 31199,
        contentBase: 'dist',
        compress: true,
        inline: true,
        historyApiFallback: true,
        hot: true,
        publicPath: '/',
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{ from: 'src/public', to: './' }],
        }),
        new HtmlWebPackPlugin({
            template: 'src/public/index.html',
            filename: 'index.html',
            inject: false,
        }),
        new Dotenv(),
    ],
    stats: 'errors-warnings',
};
