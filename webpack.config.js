const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src\/scripts\/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true,
    },
    devtool: process.env.NODE_ENV ? false : 'source-map',
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/i,
                type: 'asset/resource'
                
            },
            { test: /\.css$/, use: ['style-loader', 'css-loader']},
            { test: /\.js$/, use: 'babel-loader' },
            { 
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-inline-loader' ,
                    },
                ],
            },
        ],
    },
    plugins: [

        new HtmlWebpackPlugin({
            title: 'LofiTodo',
            favicon: path.resolve(__dirname, 'src\/assets\/favicon.png'),
            filename: 'index.html',
            template: path.resolve(__dirname, 'src\/template.html'),
        }),
    ],
};
