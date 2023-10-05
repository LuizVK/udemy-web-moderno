const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: { main: './src/principal.js' },
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    devServer: {
        static: "./public",
        port: 9000
    },
    optimization: {
        //minimize: !modoDev,
        minimizer: [
            new TerserWebpackPlugin({
                parallel: true,
                terserOptions: {
                    ecma: 6
                }
            }),
            new CssMinimizerWebpackPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    //'style-loader', // Adiciona CSS a DOM injetando a tag <style>
                    'css-loader', // interpreta @import, url()...
                    'sass-loader',                                                                             
                ]
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                //use: ['file-loader']
            }
        ]
    }
}